import type { MetadataRoute } from 'next';
import { SITE_DESCRIPTION_AR, SITE_NAME, SITE_NAME_SHORT } from '@/lib/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_NAME_SHORT,
    description: SITE_DESCRIPTION_AR,
    start_url: '/',
    display: 'standalone',
    background_color: '#f5f1ec',
    theme_color: '#355a63',
    lang: 'ar',
    dir: 'rtl',
    icons: [
      {
        src: '/vaccine-talks-icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
