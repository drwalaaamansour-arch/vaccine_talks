'use client';

/**
 * Device-local bookmarks only — page title + public URL. No DOB or medical history.
 */

export type SavedResource = {
  id: string;
  title: string;
  url: string;
  savedAt: string;
  lang?: 'ar' | 'en';
};

const STORAGE_KEY = 'vaccine_talks_saved_resources_v1';

async function readAll(): Promise<SavedResource[]> {
  if (typeof window === 'undefined') return [];
  try {
    const { Capacitor } = await import('@capacitor/core');
    if (Capacitor.isNativePlatform()) {
      const { Preferences } = await import('@capacitor/preferences');
      const { value } = await Preferences.get({ key: STORAGE_KEY });
      if (!value) return [];
      const parsed = JSON.parse(value) as SavedResource[];
      return Array.isArray(parsed) ? parsed : [];
    }
  } catch {
    /* web fallback */
  }
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw) as SavedResource[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function writeAll(items: SavedResource[]): Promise<void> {
  const payload = JSON.stringify(items);
  try {
    const { Capacitor } = await import('@capacitor/core');
    if (Capacitor.isNativePlatform()) {
      const { Preferences } = await import('@capacitor/preferences');
      await Preferences.set({ key: STORAGE_KEY, value: payload });
      return;
    }
  } catch {
    /* web fallback */
  }
  localStorage.setItem(STORAGE_KEY, payload);
}

export async function listSavedResources(): Promise<SavedResource[]> {
  const items = await readAll();
  return items.sort((a, b) => b.savedAt.localeCompare(a.savedAt));
}

export async function saveResource(entry: Omit<SavedResource, 'id' | 'savedAt'>): Promise<SavedResource> {
  const items = await readAll();
  const normalizedUrl = entry.url.split('#')[0];
  const existing = items.find((item) => item.url.split('#')[0] === normalizedUrl);
  if (existing) return existing;

  const created: SavedResource = {
    ...entry,
    id: crypto.randomUUID(),
    savedAt: new Date().toISOString(),
  };
  await writeAll([created, ...items].slice(0, 100));
  return created;
}

export async function removeSavedResource(id: string): Promise<void> {
  const items = await readAll();
  await writeAll(items.filter((item) => item.id !== id));
}

export async function isResourceSaved(url: string): Promise<boolean> {
  const normalizedUrl = url.split('#')[0];
  const items = await readAll();
  return items.some((item) => item.url.split('#')[0] === normalizedUrl);
}
