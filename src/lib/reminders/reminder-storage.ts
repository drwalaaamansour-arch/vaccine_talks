const STORAGE_KEY = 'vaccine-talks-reminder-groups-v1';

export type StoredReminderGroup = {
  groupId: string;
  childScopeId: string;
  displayDate: string;
  fireAtMs: number;
  memberKeys: string[];
  doseLabels: string[];
};

type StoredPayload = {
  groups: Record<string, StoredReminderGroup>;
};

function emptyPayload(): StoredPayload {
  return { groups: {} };
}

async function readPayload(): Promise<StoredPayload> {
  if (typeof window === 'undefined') {
    return emptyPayload();
  }

  try {
    const { Preferences } = await import('@capacitor/preferences');
    const { value } = await Preferences.get({ key: STORAGE_KEY });
    if (!value) {
      return emptyPayload();
    }
    const parsed = JSON.parse(value) as StoredPayload;
    if (!parsed.groups || typeof parsed.groups !== 'object') {
      return emptyPayload();
    }
    return parsed;
  } catch {
    return emptyPayload();
  }
}

async function writePayload(payload: StoredPayload): Promise<void> {
  if (typeof window === 'undefined') {
    return;
  }

  const { Preferences } = await import('@capacitor/preferences');
  await Preferences.set({ key: STORAGE_KEY, value: JSON.stringify(payload) });
}

export async function getStoredReminderGroups(): Promise<StoredReminderGroup[]> {
  const payload = await readPayload();
  return Object.values(payload.groups);
}

export async function getStoredGroup(groupId: string): Promise<StoredReminderGroup | null> {
  const payload = await readPayload();
  return payload.groups[groupId] ?? null;
}

export async function saveStoredReminderGroup(group: StoredReminderGroup): Promise<void> {
  const payload = await readPayload();
  payload.groups[group.groupId] = group;
  await writePayload(payload);
}

export async function removeStoredReminderGroup(groupId: string): Promise<void> {
  const payload = await readPayload();
  delete payload.groups[groupId];
  await writePayload(payload);
}

export async function isMemberKeyScheduled(memberKey: string): Promise<string | null> {
  const groups = await getStoredReminderGroups();
  for (const group of groups) {
    if (group.memberKeys.includes(memberKey)) {
      return group.groupId;
    }
  }
  return null;
}
