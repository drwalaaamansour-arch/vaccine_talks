import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';
import { getPublicRoutes } from '@/lib/sitemap-routes';

function routePriority(route: string): number {
  if (route === '/') return 1;
  if (route.startsWith('/non-hcp') || route.startsWith('/hcp')) return 0.85;
  if (route.split('/').filter(Boolean).length <= 2) return 0.75;
  return 0.6;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return getPublicRoutes().map((route) => ({
    url: route === '/' ? SITE_URL : `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: routePriority(route),
  }));
}
