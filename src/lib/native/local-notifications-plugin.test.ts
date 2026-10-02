import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

describe('local notifications plugin integration (Phase 1A)', () => {
  it('declares @capacitor/local-notifications in package.json', () => {
    const pkg = JSON.parse(readFileSync(resolve(process.cwd(), 'package.json'), 'utf8')) as {
      dependencies: Record<string, string>;
    };
    expect(pkg.dependencies['@capacitor/local-notifications']).toMatch(/^(\^|~)?8\./);
  });

  it('registers plugin in Android capacitor settings after sync', () => {
    const settings = readFileSync(resolve(process.cwd(), 'android/capacitor.settings.gradle'), 'utf8');
    expect(settings).toContain('capacitor-local-notifications');
  });

  it('exports availability probe without throwing at import time', async () => {
    const { isLocalNotificationsPluginAvailable } = await import(
      '@/lib/native/local-notifications-plugin'
    );
    expect(typeof isLocalNotificationsPluginAvailable).toBe('function');
    await expect(isLocalNotificationsPluginAvailable()).resolves.toBe(false);
  });
});
