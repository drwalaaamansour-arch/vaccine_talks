'use client';

import { useCallback, useState } from 'react';
import HcpGuideLanguageTabs, { type HcpGuideLocale } from '@/components/hcp-guide/HcpGuideLanguageTabs';
import { HCP_VACCINES_SERA_COUNT } from '@/data/hcp-vaccines-sera-hub';
import { PUBLIC_VACCINATION_TOPICS_COUNT } from '@/data/public-vaccinations-hub';
import { siteStats } from '@/lib/generatedSiteStats';

const PUBLICATIONS = [
  'Decoding the ABCs of Vaccines',
  'Family Guide to Child Vaccinations',
  'Vaccination for Special Populations',
  'Vaccine Talk – Egyptian Edition',
  'Vaccines – Package Inserts and FAQs',
  'Summary of Licensed Vaccines',
] as const;

const VALUES_EN = [
  { emoji: '🔬', title: 'Scientific Integrity' },
  { emoji: '📚', title: 'Evidence-Based Education' },
  { emoji: '🌍', title: 'Accessibility' },
  { emoji: '🔄', title: 'Continuous Learning' },
  { emoji: '🤝', title: 'Public Trust' },
] as const;

const VALUES_AR = [
  { emoji: '🔬', title: 'النزاهة العلمية' },
  { emoji: '📚', title: 'الاعتماد على الأدلة العلمية' },
  { emoji: '🌍', title: 'إتاحة المعرفة للجميع' },
  { emoji: '🔄', title: 'التعلم والتطوير المستمر' },
  { emoji: '🤝', title: 'بناء الثقة من خلال المعلومة الصحيحة' },
] as const;

const HCP_RESOURCES_EN = [
  'International and national vaccination recommendations',
  'Vaccination in special populations',
  'Vaccine schedules',
  'Vaccine composition and safety',
  'Official vaccine package inserts',
  'Clinical questions and practical guidance',
  'Scientific updates from leading international organizations',
  'Educational articles and reference materials in English',
] as const;

const HCP_RESOURCES_AR = [
  'أحدث التوصيات المحلية والعالمية للتطعيمات.',
  'التطعيمات للفئات الخاصة.',
  'جداول التطعيمات.',
  'مكونات اللقاحات وسلامتها.',
  'النشرات الرسمية للقاحات.',
  'الإجابة عن الأسئلة العملية الشائعة.',
  'أحدث التحديثات الصادرة عن الهيئات العلمية الدولية.',
  'مقالات ومراجع علمية باللغة الإنجليزية.',
] as const;

const TRUSTED_SOURCES_EN = [
  'World Health Organization (WHO)',
  'Centers for Disease Control and Prevention (CDC)',
  'Advisory Committee on Immunization Practices (ACIP)',
  'American Academy of Pediatrics (AAP)',
  'American College of Obstetricians and Gynecologists (ACOG)',
  'Infectious Diseases Society of America (IDSA)',
  'Egyptian Ministry of Health and Population (when national recommendations are available)',
] as const;

const TRUSTED_SOURCES_AR = [
  'منظمة الصحة العالمية (WHO)',
  'مراكز مكافحة الأمراض والوقاية منها (CDC)',
  'اللجنة الاستشارية لممارسات التطعيم (ACIP)',
  'الأكاديمية الأمريكية لطب الأطفال (AAP)',
  'الكلية الأمريكية لأطباء النساء والتوليد (ACOG)',
  'الجمعية الأمريكية للأمراض المعدية (IDSA)',
  'وزارة الصحة والسكان المصرية (عند توفر توصيات وطنية)',
] as const;

const SOCIAL_PLATFORMS = [
  { emoji: '🌐', labelEn: 'Website', labelAr: 'الموقع الإلكتروني', href: '/' },
  {
    emoji: '📘',
    labelEn: 'Facebook',
    labelAr: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=100064747760120',
  },
  {
    emoji: '📸',
    labelEn: 'Instagram',
    labelAr: 'Instagram',
    href: 'https://www.instagram.com/talkvaccine?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D',
  },
  {
    emoji: '💼',
    labelEn: 'LinkedIn',
    labelAr: 'LinkedIn',
    href: 'https://www.linkedin.com/in/walaa-adel-895009369',
  },
  {
    emoji: '▶️',
    labelEn: 'YouTube',
    labelAr: 'YouTube',
    href: 'https://www.youtube.com/@VaccineTalk',
  },
  {
    emoji: '🎵',
    labelEn: 'TikTok',
    labelAr: 'TikTok',
    href: 'https://www.tiktok.com/@vaccine.talk?_r=1&_t=ZS-953xkGgjSh3',
  },
] as const;

function formatStatCount(value: number) {
  return `${value}+`;
}

function buildGlanceStats(locale: HcpGuideLocale) {
  const arLabels = [
    'صفحة تعليمية',
    'صفحة مخصصة للعاملين بالمجال الصحي',
    'صفحة موجهة للأسر والجمهور',
    'موضوعًا عن اللقاحات للعاملين بالمجال الصحي',
    'موضوعًا عن التطعيمات مبسطًا باللغة العربية',
    'صفحة عن التطعيمات للفئات الخاصة',
    'صفحة للأسئلة الشائعة',
    'مرضًا يمكن الوقاية منه بالتطعيمات',
    'مؤلفات وموارد تعليمية',
    'محتوى علمي باللغتين العربية والإنجليزية',
    'تحديث مستمر وفقًا لأحدث التوصيات والإرشادات العلمية العالمية',
  ];

  const enStats = [
    { emoji: '📄', count: formatStatCount(siteStats.totalPages), label: 'Educational Pages', labelAr: 'صفحات تعليمية' },
    {
      emoji: '👨‍⚕️',
      count: formatStatCount(siteStats.hcpPages),
      label: 'Pages for Healthcare Professionals',
      labelAr: 'صفحات للعاملين بالمجال الطبي',
    },
    {
      emoji: '👨‍👩‍👧',
      count: formatStatCount(siteStats.parentPages),
      label: 'Pages for Parents & the General Public',
      labelAr: 'صفحات للعائلات والجمهور',
    },
    {
      emoji: '💉',
      count: formatStatCount(HCP_VACCINES_SERA_COUNT),
      label: 'Healthcare Professional Vaccine Topics',
      labelAr: 'مواضيع تطعيم للمهنيين الصحيين',
    },
    {
      emoji: '👨‍👩‍👧',
      count: formatStatCount(PUBLIC_VACCINATION_TOPICS_COUNT),
      label: 'Parent Vaccine Topics',
      labelAr: 'مواضيع تطعيم للعائلات',
    },
    {
      emoji: '🩺',
      count: formatStatCount(siteStats.specialPopulationPages),
      label: 'Special Population Pages',
      labelAr: 'صفحات الفئات الخاصة',
    },
    {
      emoji: '❓',
      count: formatStatCount(siteStats.faqPages),
      label: 'FAQ Pages',
      labelAr: 'صفحات الأسئلة الشائعة',
    },
    {
      emoji: '🦠',
      count: formatStatCount(PUBLIC_VACCINATION_TOPICS_COUNT),
      label: 'Vaccine-Preventable Diseases',
      labelAr: 'أمراض يمكن الوقاية منها بالتطعيم',
    },
    {
      emoji: '📚',
      count: formatStatCount(PUBLICATIONS.length),
      label: 'Educational Publications',
      labelAr: 'منشورات تعليمية',
    },
    {
      emoji: '🌍',
      count: 'EN / AR',
      label: 'Bilingual educational content',
      labelAr: 'محتوى ثنائي اللغة',
    },
    {
      emoji: '🔄',
      count: '✓',
      label: 'Continuously updated per latest international recommendations',
      labelAr: 'محدّث باستمرار وفق أحدث التوصيات',
    },
  ];

  if (locale === 'en') {
    return enStats;
  }

  return enStats.map((stat, index) => ({
    emoji: stat.emoji,
    count: stat.count,
    label: arLabels[index],
    labelAr: undefined as string | undefined,
  }));
}

export default function AboutPageContent() {
  const [locale, setLocale] = useState<HcpGuideLocale>('en');
  const isArabic = locale === 'ar';

  const handleLocaleChange = useCallback((next: HcpGuideLocale) => {
    setLocale(next);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const glanceStats = buildGlanceStats(locale);

  return (
    <>
      <div className="hcp-guide-lang-tabs-wrap about-page-lang-tabs">
        <HcpGuideLanguageTabs locale={locale} onChange={handleLocaleChange} />
      </div>

      <div
        className={`about-page-inner${isArabic ? ' about-page-inner--ar' : ''}`}
        dir={isArabic ? 'rtl' : 'ltr'}
        lang={locale}
      >
        {locale === 'en' ? <AboutEnglishContent glanceStats={glanceStats} /> : <AboutArabicContent glanceStats={glanceStats} />}
      </div>
    </>
  );
}

type GlanceStat = {
  emoji: string;
  count: string;
  label: string;
  labelAr?: string;
};

function AboutEnglishContent({ glanceStats }: { glanceStats: GlanceStat[] }) {
  return (
    <>
      <header className="vax-hub-hero about-page-hero" id="about-page-heading">
        <div className="vax-hub-hero-glow" aria-hidden />
        <span className="vax-hub-hero-tag">About Vaccine Talks</span>
        <p className="about-page-tagline">Independent. Evidence-Based. Egyptian.</p>
        <h1 className="vax-hub-hero-title">Egypt&apos;s Independent Vaccine Education Platform</h1>
        <p className="vax-hub-hero-lead">
          Trusted vaccine information for healthcare professionals, families, students, and everyone
          interested in protecting health.
        </p>
      </header>

      <div className="about-page-block">
        <p className="about-page-lead">
          Vaccine Talks is an independent Egyptian educational platform dedicated exclusively to
          vaccination. Founded with the mission of making reliable, evidence-based vaccine information
          accessible to everyone, the platform bridges the gap between complex scientific
          recommendations and practical, easy-to-understand education.
        </p>
        <p className="about-page-lead">
          Whether you&apos;re a healthcare professional seeking trusted clinical resources or a parent
          looking for clear answers about vaccines, Vaccine Talks provides accurate, up-to-date
          information tailored to your needs.
        </p>
        <p className="about-page-goal">
          <strong>Our goal is simple:</strong> To make vaccine knowledge accessible, understandable,
          and trustworthy for everyone.
        </p>
      </div>

      <div className="about-page-block">
        <h2 className="about-page-section-title">Vaccine Talks at a Glance</h2>
        <p className="about-page-section-intro">
          Over time, Vaccine Talks has grown into one of Egypt&apos;s most comprehensive independent
          vaccine education platforms — serving both healthcare professionals and the general public
          through continuously updated, evidence-based educational resources.
        </p>
        <GlanceStatsGrid stats={glanceStats} showArabicSubLabels={false} />
      </div>

      <div className="about-page-block">
        <h2 className="about-page-section-title">Who We Serve</h2>
        <div className="about-features about-page-audience">
          <div className="feature-item">
            <span className="feature-emoji">👨‍👩‍👧</span>
            <div>
              <h3 className="about-page-feature-title">Families &amp; the General Public</h3>
              <p>
                Everyone deserves access to trustworthy vaccine information. Our public content is
                written in simple Egyptian Arabic, making complex medical information easy to
                understand without compromising scientific accuracy. Parents, caregivers, and anyone
                interested in vaccination can find practical guidance, reliable information, and
                answers to common questions about vaccines available in Egypt.
              </p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-emoji">🩺</span>
            <div>
              <h3 className="about-page-feature-title">Healthcare Professionals</h3>
              <p>
                Healthcare professionals — including physicians, pharmacists, nurses, medical students,
                and vaccine providers — can access a comprehensive collection of evidence-based
                educational resources designed to support clinical practice and lifelong learning.
              </p>
              <p className="about-page-feature-sub">Our professional resources include:</p>
              <ul className="about-page-list">
                {HCP_RESOURCES_EN.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <MissionVision locale="en" />
      <ValuesSection locale="en" />
      <EditorialIndependence locale="en" />
      <FounderSection locale="en" />
      <PublicationsSection locale="en" />
      <SocialSection locale="en" />
      <TrustedSourcesSection locale="en" />
      <CommitmentSection locale="en" />
    </>
  );
}

function AboutArabicContent({ glanceStats }: { glanceStats: GlanceStat[] }) {
  return (
    <>
      <header className="vax-hub-hero about-page-hero" id="about-page-heading">
        <div className="vax-hub-hero-glow" aria-hidden />
        <span className="vax-hub-hero-tag">عن Vaccine Talks</span>
        <p className="about-page-tagline">مستقلة. مبنية على الأدلة العلمية. مصرية.</p>
        <h1 className="vax-hub-hero-title">المنصة المصرية المستقلة للتثقيف في مجال التطعيمات</h1>
        <p className="vax-hub-hero-lead">
          مصدر موثوق للمعلومات العلمية حول التطعيمات، يخدم العاملين بالمجال الصحي، والأسر، والطلاب،
          وكل من يهتم بحماية صحته.
        </p>
      </header>

      <div className="about-page-block">
        <p className="about-page-lead">
          Vaccine Talks هي منصة تعليمية مصرية مستقلة متخصصة في مجال التطعيمات، أُنشئت بهدف توفير
          معلومات موثوقة، دقيقة، ومبنية على الأدلة العلمية، بطريقة واضحة وسهلة الوصول لجميع فئات
          المجتمع.
        </p>
        <p className="about-page-lead">
          نسعى إلى سد الفجوة بين التوصيات العلمية المعقدة والتثقيف الصحي العملي، من خلال تحويل
          المعلومات الطبية إلى محتوى مبسط يساعد العاملين بالمجال الصحي على مواكبة أحدث المستجدات،
          ويمكّن الأسر والأفراد من اتخاذ قرارات صحية مبنية على المعرفة.
        </p>
        <p className="about-page-goal">
          <strong>هدفنا بسيط:</strong> أن نجعل المعرفة العلمية الخاصة بالتطعيمات متاحة، مفهومة،
          وجديرة بالثقة للجميع.
        </p>
      </div>

      <div className="about-page-block">
        <h2 className="about-page-section-title">Vaccine Talks في أرقام</h2>
        <p className="about-page-section-intro">
          مع مرور الوقت، تطورت Vaccine Talks لتصبح واحدة من أكبر المنصات التعليمية المستقلة
          المتخصصة في التطعيمات في مصر، حيث تجمع بين المحتوى العلمي الموجه للعاملين بالمجال الصحي
          والمحتوى التوعوي الموجه للجمهور.
        </p>
        <GlanceStatsGrid stats={glanceStats} showArabicSubLabels={false} />
      </div>

      <div className="about-page-block">
        <h2 className="about-page-section-title">لمن نقدم المحتوى؟</h2>
        <div className="about-features about-page-audience">
          <div className="feature-item">
            <span className="feature-emoji">👨‍👩‍👧</span>
            <div>
              <h3 className="about-page-feature-title">للأسر والجمهور</h3>
              <p>
                نؤمن بأن الحصول على معلومات موثوقة عن التطعيمات حق للجميع. لذلك نقدّم محتوى مبسطًا
                باللغة العربية، يساعد الآباء والأمهات وجميع أفراد المجتمع على فهم التطعيمات، والإجابة
                عن الأسئلة الشائعة، والتعرف على اللقاحات المتوفرة في مصر، مع الحفاظ على الدقة العلمية
                في كل ما نقدمه.
              </p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-emoji">🩺</span>
            <div>
              <h3 className="about-page-feature-title">للعاملين بالمجال الصحي</h3>
              <p>
                يوفر Vaccine Talks مكتبة علمية متكاملة للعاملين بالمجال الصحي، بما في ذلك الأطباء،
                والصيادلة، وأطقم التمريض، وطلاب الكليات الطبية، وكل المهتمين بالتطعيمات.
              </p>
              <p className="about-page-feature-sub">وتشمل مواردنا العلمية:</p>
              <ul className="about-page-list">
                {HCP_RESOURCES_AR.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <MissionVision locale="ar" />
      <ValuesSection locale="ar" />
      <EditorialIndependence locale="ar" />
      <FounderSection locale="ar" />
      <PublicationsSection locale="ar" />
      <SocialSection locale="ar" />
      <TrustedSourcesSection locale="ar" />
      <CommitmentSection locale="ar" />
    </>
  );
}

function GlanceStatsGrid({
  stats,
  showArabicSubLabels,
}: {
  stats: GlanceStat[];
  showArabicSubLabels: boolean;
}) {
  return (
    <div className="about-glance-grid" aria-label="Platform statistics">
      {stats.map((stat) => (
        <div key={stat.label} className="about-glance-stat">
          <span className="about-glance-emoji" aria-hidden>
            {stat.emoji}
          </span>
          <span className="about-glance-count">{stat.count}</span>
          <span className="about-glance-label">{stat.label}</span>
          {showArabicSubLabels && stat.labelAr ? (
            <span className="about-glance-label-ar" lang="ar">
              {stat.labelAr}
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}

function MissionVision({ locale }: { locale: HcpGuideLocale }) {
  if (locale === 'ar') {
    return (
      <div className="about-page-mvv-grid">
        <div className="about-page-mvv-card">
          <h2 className="about-page-mvv-title">رسالتنا</h2>
          <p>
            نشر الوعي بالتطعيمات من خلال تقديم محتوى علمي موثوق ومبني على الأدلة، يساعد العاملين
            بالمجال الصحي، والأفراد، والأسر على اتخاذ قرارات صحية سليمة مبنية على المعرفة.
          </p>
        </div>
        <div className="about-page-mvv-card">
          <h2 className="about-page-mvv-title">رؤيتنا</h2>
          <p>
            أن تصبح Vaccine Talks المنصة المصرية المستقلة الرائدة في التثقيف بالتطعيمات، وأحد أكثر
            المراجع موثوقية في مجال اللقاحات والمعرفة العلمية في الشرق الأوسط.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="about-page-mvv-grid">
      <div className="about-page-mvv-card">
        <h2 className="about-page-mvv-title">Our Mission</h2>
        <p>
          To improve vaccine awareness by delivering trusted, evidence-based educational resources
          that empower healthcare professionals and help individuals and families make informed
          decisions about vaccination.
        </p>
      </div>
      <div className="about-page-mvv-card">
        <h2 className="about-page-mvv-title">Our Vision</h2>
        <p>
          To become Egypt&apos;s leading independent vaccine education platform and one of the most
          trusted references for immunization knowledge across the Middle East.
        </p>
      </div>
    </div>
  );
}

function ValuesSection({ locale }: { locale: HcpGuideLocale }) {
  const values = locale === 'ar' ? VALUES_AR : VALUES_EN;

  return (
    <div className="about-page-block">
      <h2 className="about-page-section-title">{locale === 'ar' ? 'قيمنا' : 'Our Values'}</h2>
      <p className="about-page-section-intro">
        {locale === 'ar'
          ? 'يقوم كل ما ننشره على خمس قيم أساسية:'
          : 'Everything we publish is guided by five core principles:'}
      </p>
      <div className="about-page-values">
        {values.map((value) => (
          <div key={value.title} className="about-page-value">
            <span className="about-page-value-emoji" aria-hidden>
              {value.emoji}
            </span>
            <span>{value.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function EditorialIndependence({ locale }: { locale: HcpGuideLocale }) {
  return (
    <div className="about-page-block about-page-independence">
      <h2 className="about-page-section-title">
        {locale === 'ar' ? 'الاستقلالية التحريرية' : 'Editorial Independence'}
      </h2>
      {locale === 'ar' ? (
        <>
          <p className="about-page-lead">
            Vaccine Talks منصة تعليمية مستقلة. ولا تتبع أو تُمول من أي شركة أدوية، أو شركة مصنعة
            للقاحات، أو جهة حكومية.
          </p>
          <p className="about-page-lead">
            نرحب بالتعاون مع الجهات التي تشاركنا هدف دعم التعليم الصحي وتعزيز الصحة العامة، مع
            الحفاظ الكامل على استقلالية المحتوى العلمي والتحريري، بحيث يظل كل ما يُنشر قائمًا على
            الأدلة العلمية وأحدث التوصيات المعترف بها دوليًا.
          </p>
        </>
      ) : (
        <>
          <p className="about-page-lead">
            Vaccine Talks is an independent educational platform. We are not owned by, funded by, or
            affiliated with any pharmaceutical company, vaccine manufacturer, or governmental
            organization.
          </p>
          <p className="about-page-lead">
            We welcome collaborations that support education and public health while maintaining
            complete editorial independence. Every article and educational resource is developed
            based on current scientific evidence and internationally recognized recommendations.
          </p>
        </>
      )}
    </div>
  );
}

function FounderSection({ locale }: { locale: HcpGuideLocale }) {
  return (
    <div className="about-page-block about-page-founder">
      <h2 className="about-page-section-title">
        {locale === 'ar' ? 'عن المؤسسة' : 'Meet the Founder'}
      </h2>
      <div className="about-page-founder-card">
        <div className="about-page-founder-badge" aria-hidden>
          WA
        </div>
        <div>
          <h3 className="about-page-founder-name">
            {locale === 'ar' ? 'ولاء عادل منصور' : 'Walaa Adel Mansour'}
          </h3>
          {locale === 'en' ? (
            <p className="about-page-founder-role">
              Egyptian Vaccine Specialist · Medical Trainer · Public Health Educator
            </p>
          ) : null}
          {locale === 'ar' ? (
            <>
              <p>
                ولاء عادل منصور هي أخصائية تطعيمات، ومدربة معتمدة، ومثقفة في مجال الصحة العامة،
                تمتلك أكثر من 20 عامًا من الخبرة في مجال التطعيمات، والتعليم الطبي، والتدريب،
                والتواصل العلمي.
              </p>
              <p>
                أسست Vaccine Talks انطلاقًا من إيمانها بأهمية توفير مصدر مصري موثوق يربط بين
                الأدلة العلمية والتثقيف الصحي المبسط، ليكون مرجعًا للعاملين بالمجال الصحي، والأسر،
                وكل من يبحث عن معلومات صحيحة حول التطعيمات.
              </p>
              <p>
                تشغل منصب Medical Advisor and Certified Trainer at VACSERA، ولديها خبرة واسعة في
                تدريب العاملين بالمجال الصحي، والاستشارات العلمية، وتنظيم ورش العمل، وإعداد البرامج
                التعليمية، وتأليف العديد من المراجع والمواد التعليمية المتخصصة في التطعيمات.
              </p>
              <p>
                ويجمع عملها بين الدقة العلمية والقدرة على تبسيط المعلومات، بما يساعد المتخصصين على
                مواكبة أحدث المستجدات، ويمكّن الأسر من اتخاذ قرارات صحية مبنية على المعرفة.
              </p>
            </>
          ) : (
            <>
              <p>
                Walaa Adel Mansour is an Egyptian Vaccine Specialist, Medical Trainer, and Public
                Health Educator with more than 20 years of experience in immunization, vaccine
                education, pharmaceutical training, and scientific communication.
              </p>
              <p>
                She is the Founder of Vaccine Talks, established to create a trusted educational
                platform that makes reliable vaccine information accessible to healthcare
                professionals, parents, and the wider community.
              </p>
              <p>
                As a Medical Advisor and Certified Trainer at VACSERA, she has extensive experience in
                healthcare professional training, vaccine consultancy, scientific workshops, and
                public health education. Throughout her career, she has trained hundreds of
                healthcare professionals, developed educational programs, authored multiple vaccine
                education publications, and contributed to initiatives that promote vaccine
                awareness and confidence across Egypt.
              </p>
              <p>
                Her work combines scientific accuracy with clear communication, helping healthcare
                professionals stay up to date while empowering families to make informed decisions
                based on evidence.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function PublicationsSection({ locale }: { locale: HcpGuideLocale }) {
  return (
    <div className="about-page-block">
      <h2 className="about-page-section-title">{locale === 'ar' ? 'المؤلفات' : 'Publications'}</h2>
      <p className="about-page-section-intro">
        {locale === 'ar'
          ? 'ألّفت ولاء عادل منصور عددًا من الكتب والمراجع التعليمية في مجال التطعيمات، من بينها:'
          : 'Walaa Adel Mansour is the author of several educational publications on vaccination, including:'}
      </p>
      <ul className="about-page-publications">
        {PUBLICATIONS.map((title) => (
          <li key={title}>
            <span className="about-page-publication-icon" aria-hidden>
              📖
            </span>
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialSection({ locale }: { locale: HcpGuideLocale }) {
  return (
    <div className="about-page-block">
      <h2 className="about-page-section-title">
        {locale === 'ar' ? 'ما بعد الموقع' : 'Beyond the Website'}
      </h2>
      <p className="about-page-section-intro">
        {locale === 'ar'
          ? 'لا يقتصر دور Vaccine Talks على الموقع الإلكتروني، بل يمتد عبر مجموعة من المنصات الرقمية، بهدف إيصال المعلومات الموثوقة حول التطعيمات إلى أكبر عدد ممكن من المهتمين.'
          : 'Vaccine Talks extends beyond its website through a growing presence across multiple digital platforms, making evidence-based vaccine education accessible wherever people seek reliable health information.'}
      </p>
      <p className="about-page-section-intro">
        {locale === 'ar'
          ? 'يتوفر المحتوى التعليمي عبر:'
          : 'Our educational content is available through:'}
      </p>
      <div className="about-page-social-grid">
        {SOCIAL_PLATFORMS.map((platform) => (
          <a
            key={platform.labelEn}
            href={platform.href}
            className="about-page-social-tile"
            target={platform.href.startsWith('http') ? '_blank' : undefined}
            rel={platform.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            <span className="about-page-social-emoji" aria-hidden>
              {platform.emoji}
            </span>
            <span>{locale === 'ar' ? platform.labelAr : platform.labelEn}</span>
          </a>
        ))}
      </div>
      <p className="about-page-section-outro">
        {locale === 'ar'
          ? 'ومن خلال هذه المنصات، ننشر المقالات التعليمية، وآخر المستجدات العلمية، ومقاطع الفيديو التوعوية، والإجابات عن الأسئلة الشائعة، بهدف جعل المعرفة العلمية المتعلقة بالتطعيمات أكثر سهولة في الوصول لجميع أفراد المجتمع.'
          : 'Across these platforms, we publish educational articles, scientific updates, short educational videos, practical guidance, and answers to frequently asked questions — helping healthcare professionals and the public stay informed with trusted vaccine information.'}
      </p>
    </div>
  );
}

function TrustedSourcesSection({ locale }: { locale: HcpGuideLocale }) {
  const sources = locale === 'ar' ? TRUSTED_SOURCES_AR : TRUSTED_SOURCES_EN;

  return (
    <div className="about-page-block">
      <h2 className="about-page-section-title">
        {locale === 'ar' ? 'مصادرنا العلمية' : 'Trusted Sources'}
      </h2>
      <p className="about-page-section-intro">
        {locale === 'ar'
          ? 'يعتمد المحتوى المنشور على Vaccine Talks على التوصيات والمنشورات الصادرة عن أبرز الهيئات والمنظمات العلمية العالمية، ومنها:'
          : 'Our educational content is developed using recommendations and scientific publications from internationally recognized organizations and professional societies, including:'}
      </p>
      <ul className="about-page-sources">
        {sources.map((source) => (
          <li key={source}>{source}</li>
        ))}
      </ul>
    </div>
  );
}

function CommitmentSection({ locale }: { locale: HcpGuideLocale }) {
  return (
    <div className="about-page-commitment">
      <h2 className="about-page-commitment-title">
        {locale === 'ar' ? 'التزامنا' : 'Our Commitment'}
      </h2>
      {locale === 'ar' ? (
        <>
          <p>
            كل مقال، وكل مادة تعليمية، وكل تحديث علمي يُنشر على Vaccine Talks يهدف إلى غاية واحدة:
            توفير معلومات موثوقة ومبنية على الأدلة العلمية حول التطعيمات، تكون متاحة للجميع.
          </p>
          <p>
            نؤمن بأن المعرفة العلمية الدقيقة تمكّن العاملين بالمجال الصحي من تقديم رعاية أفضل،
            وتساعد الأسر على اتخاذ قرارات صحية واعية، وتسهم في تعزيز الثقة بالتطعيمات وبناء مجتمع
            أكثر صحة ووعيًا.
          </p>
        </>
      ) : (
        <>
          <p>
            Every article, educational resource, and scientific update published on Vaccine Talks is
            created with one purpose: making reliable, evidence-based vaccine information accessible
            to everyone.
          </p>
          <p>
            We believe that trusted knowledge empowers healthcare professionals, supports families in
            making informed decisions, strengthens vaccine confidence, and contributes to healthier
            communities.
          </p>
        </>
      )}
    </div>
  );
}
