'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { toIsoDate } from '@/lib/vaccine-checker/date-utils';
import type { CheckerInput, VaccineRecommendation } from '@/lib/vaccine-checker/types';
import { getReminderEligibility } from '@/lib/reminders/reminder-eligibility';
import { findReminderGroupForItem } from '@/lib/reminders/reminder-grouping';
import { getChildScopeId, getReminderMemberKey } from '@/lib/reminders/reminder-identity';
import {
  cancelReminderGroup,
  rescheduleReminderGroup,
  scheduleReminderGroup,
} from '@/lib/reminders/local-notifications-reminder-service';
import {
  localNotificationAtNineAm,
  resolveFireDateForReminder,
} from '@/lib/reminders/reminder-schedule-dates';
import { getStoredGroup, isMemberKeyScheduled } from '@/lib/reminders/reminder-storage';
import { getReminderCardUiPhase } from '@/lib/reminders/reminder-ui-state';

type RecommendationReminderActionsProps = {
  item: VaccineRecommendation;
  checkerInput: CheckerInput;
  allReminderItems: VaccineRecommendation[];
  language: 'en' | 'ar';
  t: (key: string, params?: Record<string, string>) => string;
  labelFor: (entry: VaccineRecommendation) => string;
  refreshToken: number;
  onRemindersChanged: () => void;
};

export function RecommendationReminderActions({
  item,
  checkerInput,
  allReminderItems,
  language,
  t,
  labelFor,
  refreshToken,
  onRemindersChanged,
}: RecommendationReminderActionsProps) {
  const referenceDate = checkerInput.referenceDate;
  const childScopeId = getChildScopeId(toIsoDate(checkerInput.dob));
  const eligibility = useMemo(
    () => getReminderEligibility(item, referenceDate),
    [item, referenceDate]
  );

  const [busy, setBusy] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [scheduledGroupId, setScheduledGroupId] = useState<string | null>(null);
  const [changing, setChanging] = useState(false);
  const [changeDate, setChangeDate] = useState('');

  const memberKey = useMemo(() => {
    if (!eligibility.eligible) {
      return null;
    }
    return getReminderMemberKey(childScopeId, item, eligibility.recommendedDate);
  }, [childScopeId, eligibility, item]);

  useEffect(() => {
    let cancelled = false;
    void (async () => {
      if (!memberKey) {
        setScheduledGroupId(null);
        return;
      }
      const groupId = await isMemberKeyScheduled(memberKey);
      if (!cancelled) {
        setScheduledGroupId(groupId);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [memberKey, refreshToken]);

  const group = useMemo(() => {
    if (!eligibility.eligible) {
      return null;
    }
    return findReminderGroupForItem(allReminderItems, childScopeId, referenceDate, item);
  }, [allReminderItems, childScopeId, eligibility, item, referenceDate]);

  const uiPhase = getReminderCardUiPhase(item, referenceDate, {
    isScheduled: Boolean(scheduledGroupId),
    isChanging: changing,
  });

  const runSchedule = useCallback(
    async (fireAt: Date, overdueUsedSafeDate: boolean) => {
      if (!group || !eligibility.eligible) {
        return;
      }
      setBusy(true);
      setFeedback(null);
      const labels = group.items.map((entry) => labelFor(entry));

      const result = await scheduleReminderGroup({
        group,
        fireAt,
        doseLabels: labels,
        language,
        overdueUsedSafeDate,
      });

      setBusy(false);
      if (!result.ok) {
        if (result.error === 'denied') {
          setFeedback(t('reminderPermissionDenied'));
        } else if (result.error === 'unavailable') {
          setFeedback(t('reminderUnavailableNative'));
        } else {
          setFeedback(t('reminderScheduleFailed'));
        }
        return;
      }

      if (overdueUsedSafeDate) {
        setFeedback(t('reminderOverdueScheduledNote'));
      } else {
        setFeedback(t('reminderSetSuccess'));
      }
      setScheduledGroupId(result.group.groupId);
      setChanging(false);
      onRemindersChanged();
    },
    [eligibility, group, labelFor, language, onRemindersChanged, t]
  );

  if (uiPhase === 'hidden') {
    return null;
  }

  if (uiPhase === 'conditional_message') {
    return (
      <div className="vaccine-checker-reminder-actions vaccine-checker-reminder-actions--conditional">
        <p className="vaccine-checker-help vaccine-checker-reminder-note">{t('reminderConditionalUnavailable')}</p>
      </div>
    );
  }

  const handleSet = () => {
    if (!eligibility.eligible) {
      return;
    }
    const fireAt = resolveFireDateForReminder(
      eligibility.recommendedDate,
      referenceDate,
      eligibility.overdue
    );
    const intended = localNotificationAtNineAm(eligibility.recommendedDate);
    const overdueUsedSafeDate =
      eligibility.overdue || fireAt.getTime() !== intended.getTime();
    void runSchedule(fireAt, overdueUsedSafeDate);
  };

  const handleCancel = async () => {
    if (!scheduledGroupId) {
      return;
    }
    setBusy(true);
    await cancelReminderGroup(scheduledGroupId);
    setBusy(false);
    setScheduledGroupId(null);
    setFeedback(t('reminderCanceled'));
    onRemindersChanged();
  };

  const handleChangeSubmit = async () => {
    if (!group || !changeDate || !eligibility.eligible) {
      return;
    }
    const [y, m, d] = changeDate.split('-').map(Number);
    const fireAt = new Date(y, m - 1, d, 9, 0, 0, 0);
    if (fireAt.getTime() <= Date.now()) {
      setFeedback(t('reminderChangeDateMustBeFuture'));
      return;
    }
    setBusy(true);
    const stored = await getStoredGroup(group.groupId);
    const labels = stored?.doseLabels ?? group.items.map((entry) => labelFor(entry));
    const result = await rescheduleReminderGroup({
      group,
      newFireAt: fireAt,
      doseLabels: labels,
      language,
    });
    setBusy(false);
    if (!result.ok) {
      setFeedback(t('reminderScheduleFailed'));
      return;
    }
    setFeedback(t('reminderRescheduled'));
    setChanging(false);
    onRemindersChanged();
  };

  return (
    <div className="vaccine-checker-reminder-actions">
      {uiPhase === 'set' && (
        <button
          type="button"
          className="vaccine-checker-results-action vaccine-checker-reminder-primary"
          disabled={busy}
          onClick={handleSet}
        >
          <span className="vaccine-checker-reminder-icon" aria-hidden="true">
            🔔
          </span>
          {t('reminderSetAction')}
        </button>
      )}

      {uiPhase === 'scheduled' && (
        <div className="vaccine-checker-reminder-actions-row">
          <p className="vaccine-checker-reminder-set-badge">
            <span className="vaccine-checker-reminder-icon" aria-hidden="true">
              ✓
            </span>
            {t('reminderSetLabel')}
          </p>
          <button
            type="button"
            className="vaccine-checker-results-action vaccine-checker-reminder-secondary"
            disabled={busy}
            onClick={() => void handleCancel()}
          >
            {t('reminderCancelAction')}
          </button>
          <button
            type="button"
            className="vaccine-checker-results-action vaccine-checker-reminder-secondary"
            disabled={busy}
            onClick={() => {
              setChanging(true);
              setChangeDate(eligibility.eligible ? eligibility.recommendedDate : '');
            }}
          >
            {t('reminderChangeAction')}
          </button>
        </div>
      )}

      {uiPhase === 'changing' && eligibility.eligible && (
        <div className="vaccine-checker-reminder-change">
          <label className="vaccine-checker-help" htmlFor={`reminder-change-${item.id}`}>
            {t('reminderChangePrompt')}
          </label>
          <input
            id={`reminder-change-${item.id}`}
            type="date"
            value={changeDate}
            onChange={(event) => setChangeDate(event.target.value)}
          />
          <div className="vaccine-checker-reminder-actions-row">
            <button
              type="button"
              className="vaccine-checker-results-action vaccine-checker-reminder-secondary"
              disabled={busy}
              onClick={() => void handleChangeSubmit()}
            >
              {t('reminderChangeConfirm')}
            </button>
            <button
              type="button"
              className="vaccine-checker-results-action vaccine-checker-reminder-secondary"
              disabled={busy}
              onClick={() => setChanging(false)}
            >
              {t('reminderChangeCancel')}
            </button>
          </div>
        </div>
      )}

      {feedback && (
        <p className="vaccine-checker-share-feedback vaccine-checker-reminder-feedback" role="status" aria-live="polite">
          {feedback}
        </p>
      )}
    </div>
  );
}
