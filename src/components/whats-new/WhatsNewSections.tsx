import Link from 'next/link';
import VaccineUpdateShell from '@/components/hcp-vaccine-updates/VaccineUpdateShell';
import EgyptMrCampaign2026BodyAr from '@/components/whats-new/EgyptMrCampaign2026BodyAr';
import { WHATS_NEW_UI } from '@/data/whats-new-hub';
import { MR_CAMPAIGN_2026_ANCHOR, MR_CAMPAIGN_TEASER_AR } from '@/data/whats-new/mr-campaign-2026';

export default function WhatsNewSections({ visibleIds }: { visibleIds: string[] }) {
  const show = (id: string) => visibleIds.includes(id);

  return (
    <div className="hcp-vu-updates-list">
      {show(MR_CAMPAIGN_2026_ANCHOR) ? (
        <VaccineUpdateShell
          id={MR_CAMPAIGN_2026_ANCHOR}
          date={MR_CAMPAIGN_TEASER_AR.date}
          badge={MR_CAMPAIGN_TEASER_AR.category}
          title={MR_CAMPAIGN_TEASER_AR.title}
        >
          <EgyptMrCampaign2026BodyAr />
        </VaccineUpdateShell>
      ) : null}

      {show('whats-new-rsv-pfizer-egypt-2025') ? (
        <VaccineUpdateShell
          id="whats-new-rsv-pfizer-egypt-2025"
          date="ديسمبر 2025"
          badge="تحديثات"
          title="فايزر مصر: لقاح RSV للحوامل"
        >
          <p>
            أعلنت شركة فايزر مصر عن طرح لقاح جديد مخصص للأمهات الحوامل بهدف الوقاية من إصابة
            المواليد بفيروس التنفسي المخلوي (RSV). هذا اللقاح يمثل تطورًا مهمًا في مجال الوقاية
            من الأمراض التنفسية في مصر.
          </p>
          <p>
            <Link href="/rsv" className="hcp-res-btn whats-new-index-btn" style={{ display: 'inline-flex', marginTop: '0.5rem' }}>
              {WHATS_NEW_UI.rsvMoreLink}
              <span className="hcp-res-btn-arrow" aria-hidden>
                ←
              </span>
            </Link>
          </p>
        </VaccineUpdateShell>
      ) : null}
    </div>
  );
}
