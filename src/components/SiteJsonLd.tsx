import { SITE_DESCRIPTION_AR, SITE_NAME, SITE_NAME_SHORT, SITE_URL } from '@/lib/site';

export default function SiteJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: SITE_NAME_SHORT,
        alternateName: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/logo.svg`,
        description: SITE_DESCRIPTION_AR,
        areaServed: {
          '@type': 'Country',
          name: 'Egypt',
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        name: SITE_NAME,
        url: SITE_URL,
        inLanguage: ['ar-EG', 'en'],
        description: SITE_DESCRIPTION_AR,
        publisher: {
          '@id': `${SITE_URL}/#organization`,
        },
      },
      {
        '@type': 'MedicalWebPage',
        '@id': `${SITE_URL}/#homepage`,
        url: SITE_URL,
        name: 'Vaccine Talk - التطعيمات في مصر',
        description: SITE_DESCRIPTION_AR,
        inLanguage: 'ar-EG',
        isPartOf: {
          '@id': `${SITE_URL}/#website`,
        },
        about: {
          '@type': 'MedicalEntity',
          name: 'Vaccination in Egypt',
        },
        audience: {
          '@type': 'PeopleAudience',
          audienceType: 'Families and health professionals in Egypt',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
