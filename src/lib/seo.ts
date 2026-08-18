import type { Metadata } from 'next';
import {
  SITE_DESCRIPTION_AR,
  SITE_DESCRIPTION_EN,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_NAME_SHORT,
  SITE_URL,
} from '@/lib/site';

type PageSeoInput = {
  title: string;
  description?: string;
  descriptionEn?: string;
  path: string;
  keywords?: string[];
  noIndex?: boolean;
  type?: 'website' | 'article';
};

export function absoluteUrl(path: string): string {
  if (path.startsWith('http')) return path;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

export function createPageMetadata({
  title,
  description,
  descriptionEn,
  path,
  keywords = [],
  noIndex = false,
  type = 'website',
}: PageSeoInput): Metadata {
  const pageDescription =
    description ??
    `${descriptionEn ? `${descriptionEn} ` : ''}${SITE_DESCRIPTION_AR}`.trim();
  const canonical = absoluteUrl(path);

  return {
    title,
    description: pageDescription,
    keywords: [...keywords, ...SITE_KEYWORDS],
    alternates: {
      canonical,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
          },
        },
    openGraph: {
      title,
      description: pageDescription,
      url: canonical,
      siteName: SITE_NAME,
      locale: 'ar_EG',
      alternateLocale: ['en_US'],
      type,
      images: [
        {
          url: absoluteUrl('/vaccine-talks-icon.png'),
          width: 512,
          height: 512,
          alt: `${SITE_NAME_SHORT} - التطعيمات في مصر`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: pageDescription,
      images: [absoluteUrl('/vaccine-talks-icon.png')],
    },
  };
}

function getSiteVerificationMetadata(): Metadata['verification'] {
  const google = process.env.GOOGLE_SITE_VERIFICATION?.trim();
  const bing = process.env.BING_SITE_VERIFICATION?.trim();
  const yandex = process.env.YANDEX_SITE_VERIFICATION?.trim();

  if (!google && !bing && !yandex) return undefined;

  return {
    ...(google ? { google } : {}),
    ...(bing ? { other: { 'msvalidate.01': bing } } : {}),
    ...(yandex ? { yandex } : {}),
  };
}

export function createHomeMetadata(): Metadata {
  const verification = getSiteVerificationMetadata();

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: `${SITE_NAME_SHORT} - التطعيمات في مصر | دليل شامل للتطعيمات في مصر`,
      template: `%s | ${SITE_NAME_SHORT}`,
    },
    description: `${SITE_DESCRIPTION_AR} ${SITE_DESCRIPTION_EN}`,
    keywords: SITE_KEYWORDS,
    authors: [{ name: `${SITE_NAME_SHORT} Team` }],
    creator: SITE_NAME_SHORT,
    publisher: SITE_NAME_SHORT,
    icons: {
      icon: [{ url: '/vaccine-talks-icon.png', type: 'image/png' }],
      apple: [{ url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    },
    alternates: {
      canonical: SITE_URL,
      languages: {
        ar: SITE_URL,
        en: SITE_URL,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: `${SITE_NAME_SHORT} - التطعيمات في مصر | دليل شامل للتطعيمات`,
      description: SITE_DESCRIPTION_AR,
      url: SITE_URL,
      siteName: SITE_NAME,
      locale: 'ar_EG',
      alternateLocale: ['en_US'],
      type: 'website',
      images: [
        {
          url: absoluteUrl('/vaccine-talks-icon.png'),
          width: 512,
          height: 512,
          alt: `${SITE_NAME_SHORT} - التطعيمات في مصر`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${SITE_NAME_SHORT} - التطعيمات في مصر`,
      description: SITE_DESCRIPTION_AR,
      images: [absoluteUrl('/vaccine-talks-icon.png')],
      creator: '@VaccineTalk',
    },
    category: 'Health & Medical',
    ...(verification ? { verification } : {}),
    other: {
      'geo.region': 'EG',
      'geo.placename': 'Egypt',
      'geo.position': '30.0444;31.2357',
      ICBM: '30.0444, 31.2357',
    },
  };
}
