/// <reference lib="esnext" />
/// <reference lib="webworker" />
import { defaultCache } from "@serwist/turbopack/worker";
import type { PrecacheEntry, SerwistGlobalConfig } from "serwist";
import { ExpirationPlugin, NetworkFirst, NetworkOnly, Serwist } from "serwist";
import { resolveNotificationClickUrl } from "@/lib/content-notifications/click-url";
import { parsePushPayload } from "@/lib/content-notifications/payload";

declare global {
  interface WorkerGlobalScope extends SerwistGlobalConfig {
    __SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
  }
}

declare const self: ServiceWorkerGlobalScope;

const serwist = new Serwist({
  precacheEntries: self.__SW_MANIFEST,
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  runtimeCaching: [
    {
      matcher: /^https:\/\/(www\.)?googletagmanager\.com\/.*/i,
      handler: new NetworkOnly(),
    },
    {
      matcher: /^https:\/\/(www\.)?google-analytics\.com\/.*/i,
      handler: new NetworkOnly(),
    },
    {
      matcher: ({ url: { pathname }, sameOrigin }) =>
        sameOrigin && pathname.startsWith("/api/"),
      handler: new NetworkOnly(),
    },
    {
      matcher: /\.pdf(?:\?.*)?$/i,
      handler: new NetworkFirst({
        cacheName: "medical-pdfs",
        networkTimeoutSeconds: 10,
        plugins: [
          new ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 24 * 60 * 60,
            maxAgeFrom: "last-used",
          }),
        ],
      }),
    },
    ...defaultCache,
  ],
});

self.addEventListener("message", (event) => {
  if (event.data?.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener("push", (event) => {
  const origin = self.location.origin;
  const payload = parsePushPayload(event.data?.text(), origin);
  event.waitUntil(
    self.registration.showNotification(payload.title, {
      body: payload.body,
      data: {
        url: payload.url,
        audienceType: payload.audienceType,
        category: payload.category,
      },
      icon: "/icons/icon-192.png",
      badge: "/icons/icon-192.png",
    })
  );
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const url = resolveNotificationClickUrl(
    event.notification.data?.url,
    self.location.origin
  );
  event.waitUntil(openNotificationUrl(url));
});

async function openNotificationUrl(url: string) {
  const windowClients = await self.clients.matchAll({
    type: "window",
    includeUncontrolled: true,
  });
  for (const client of windowClients) {
    if ("focus" in client) {
      await client.focus();
      if ("navigate" in client) {
        await client.navigate(url);
        return;
      }
    }
  }
  await self.clients.openWindow(url);
}

serwist.addEventListeners();