'use client';

import { ARTICLE_META } from '@/lib/article-meta';
import {
  ScCallout,
  ScCard,
  ScCheckList,
  ScNestedVaxBlock,
  ScProse,
  ScProseFoot,
  SpecialCaseArticleChrome,
  SpecialCaseLangDivider,
  SpecialCasePageLayout,
  SpecialCaseVaccineBridge,
  type SpecialCaseLocale,
  type VaccineLink,
} from '@/components/special-cases';

const SPLEEN_PDF = '/spleen.pdf';
const SPLEEN_PDF_EMBED = `${SPLEEN_PDF}#view=FitH&toolbar=1`;

const VACCINE_LINKS: VaccineLink[] = [
  { href: '/pcv', ar: 'المكورات الرئوية (PCV / PPSV)', en: 'Pneumococcal (PCV / PPSV)' },
  { href: '/hib', ar: 'الهيموفيلس إنفلونزا ب (Hib)', en: 'Haemophilus influenzae type b (Hib)' },
  {
    href: '/meningitis',
    ar: 'الالتهاب السحائي (المكورات السحائية)',
    en: 'Meningitis (meningococcal disease)',
  },
  { href: '/influenza', ar: 'الإنفلونزا الموسمية', en: 'Influenza (seasonal flu)' },
];

type BacteriaItem = { label: string; scientific: string };

type SplenectomyCopy = {
  back: string;
  tag: string;
  title: string;
  altTitle: string;
  lead: string;
  leadSecond: string;
  bacteriaTitle: string;
  bacteria: BacteriaItem[];
  callout: string;
  vaxTitle: string;
  vaccines: string[];
  surgeryTitle: string;
  surgeryP1: string;
  surgeryP2: string;
  importantLabel: string;
  importantText: string;
  functionalTitle: string;
  functionalText: string;
  summary: string;
  pdfTitleAr: string;
  pdfTitleEn: string;
  pdfDownloadLabel: string;
};

const COPY: Record<SpecialCaseLocale, SplenectomyCopy> = {
  ar: {
    back: 'العودة لتطعيمات الحالات الخاصة ←',
    tag: 'حماية بدون طحال',
    title: 'غياب أو ضعف الطحال',
    altTitle: 'Anatomic or Functional Asplenia — Splenectomy vaccinations',
    lead:
      'الطحال جزء مهم من جهاز المناعة، ودوره إنه بيساعد الجسم إنه يحارب بعض أنواع البكتيريا الخطيرة.',
    leadSecond:
      'ولما الطحال يكون متشال بعملية جراحية، أو ما بيشتغلش بكفاءة بسبب أمراض معينة زي الأنيميا المنجلية، الجسم بيكون أكثر عرضة للإصابة بعدوى شديدة.',
    bacteriaTitle: 'أكتر أنواع البكتيريا اللي ممكن تسبب مشاكل في الحالات دي',
    bacteria: [
      {
        label: 'البكتيريا المسببة للالتهاب الرئوي',
        scientific: 'Streptococcus pneumoniae',
      },
      {
        label: 'البكتيريا المسببة للالتهاب السحائي',
        scientific: 'Neisseria meningitidis',
      },
      {
        label: 'بكتيريا المستدمة النزلية',
        scientific: 'Haemophilus influenzae',
      },
    ],
    callout: 'علشان كده التطعيمات مهمة جدًا للأشخاص اللي عندهم غياب أو ضعف في وظيفة الطحال 💉',
    vaxTitle: 'أهم التطعيمات المطلوبة',
    vaccines: [
      'تطعيم الالتهاب الرئوي',
      'تطعيم الالتهاب السحائي',
      'تطعيم الإنفلونزا البكتيرية',
      'تطعيم الإنفلونزا الموسمية كل سنة',
    ],
    surgeryTitle: 'قبل وبعد عملية استئصال الطحال',
    surgeryP1:
      'لو الشخص هيعمل عملية استئصال للطحال، يُفضّل ياخد التطعيمات قبل العملية بحوالي أسبوعين لو أمكن.',
    surgeryP2: 'ولو ما أخدهاش قبل العملية، ياخدها بعد الجراحة أول ما حالته تستقر.',
    importantLabel: 'مهم تعرفي:',
    importantText:
      'خطر العدوى بيستمر طول العمر بعد استئصال الطحال، لكن بيكون أعلى بشكل خاص في أول سنتين بعد العملية.',
    functionalTitle: 'ضعف وظيفة الطحال بدون جراحة',
    functionalText:
      'أما الأشخاص اللي عندهم ضعف في وظيفة الطحال بدون جراحة، المفروض يبدأوا التطعيمات المطلوبة بمجرد اكتشاف الحالة، حسب السن والتوصيات المناسبة.',
    summary:
      'الوقاية بالتطعيمات في الحالات دي مش اختيار… دي خطوة مهمة للحماية من عدوى ممكن تكون خطيرة جدًا.',
    pdfTitleAr: 'تطعيمات الطحال — PDF',
    pdfTitleEn: 'Splenectomy vaccinations — PDF',
    pdfDownloadLabel: 'Download PDF / تحميل PDF',
  },
  en: {
    back: '← Back to special-case vaccinations',
    tag: 'Protection without a spleen',
    title: 'Anatomic or Functional Asplenia',
    altTitle: 'غياب أو ضعف الطحال',
    lead:
      'The spleen is an important part of the immune system. It helps the body fight certain serious bacteria.',
    leadSecond:
      'When the spleen is removed by surgery, or does not work well because of conditions such as sickle cell disease, the body is more likely to develop severe infections.',
    bacteriaTitle: 'Bacteria that most often cause problems in these situations',
    bacteria: [
      {
        label: 'Pneumonia bacteria',
        scientific: 'Streptococcus pneumoniae',
      },
      {
        label: 'Meningitis bacteria',
        scientific: 'Neisseria meningitidis',
      },
      {
        label: 'Haemophilus influenzae',
        scientific: 'Haemophilus influenzae',
      },
    ],
    callout:
      'That is why vaccines are very important for people who have absent or poor spleen function 💉',
    vaxTitle: 'Key vaccines',
    vaccines: [
      'Pneumococcal (pneumonia) vaccination',
      'Meningococcal (meningitis) vaccination',
      'Haemophilus influenzae type b (Hib) vaccination',
      'Seasonal influenza vaccine every year',
    ],
    surgeryTitle: 'Before and after splenectomy',
    surgeryP1:
      'If someone is having the spleen removed, it is best to receive the vaccines about two weeks before surgery when possible.',
    surgeryP2:
      'If they were not given before surgery, they should be given once the person has recovered after the operation.',
    importantLabel: 'Important to know:',
    importantText:
      'The risk of infection continues for life after splenectomy, but it is especially high in the first two years after surgery.',
    functionalTitle: 'Poor spleen function without surgery',
    functionalText:
      'People with poor spleen function who have not had surgery should start the recommended vaccines as soon as the condition is diagnosed, according to age and appropriate guidelines.',
    summary:
      'Prevention with vaccines in these situations is not optional — it is an important step to protect against infections that can be very serious.',
    pdfTitleAr: 'تطعيمات الطحال — PDF',
    pdfTitleEn: 'Splenectomy vaccinations — PDF',
    pdfDownloadLabel: 'Download PDF / تحميل PDF',
  },
};

function ScBacteriaList({ items }: { items: BacteriaItem[] }) {
  return (
    <ul className="bmt-bacteria-list">
      {items.map((item) => (
        <li key={item.scientific}>
          <span className="bmt-bacteria-label">{item.label}</span>
          <span className="bmt-bacteria-scientific" dir="ltr">
            {item.scientific}
          </span>
        </li>
      ))}
    </ul>
  );
}

function SplenectomyArticle({ locale }: { locale: SpecialCaseLocale }) {
  const c = COPY[locale];

  return (
    <SpecialCaseArticleChrome
      locale={locale}
      back={c.back}
      tag={c.tag}
      title={c.title}
      altTitle={c.altTitle}
      lead={c.lead}
      meta={ARTICLE_META.nonHcpSplenectomy}
    >
      <ScProseFoot>{c.leadSecond}</ScProseFoot>

      <ScCard variant="slate" icon="🦠" title={c.bacteriaTitle}>
        <ScBacteriaList items={c.bacteria} />
      </ScCard>

      <ScCallout>{c.callout}</ScCallout>

      <ScCard variant="teal" icon="✔️" title={c.vaxTitle}>
        <ScCheckList items={c.vaccines} />
      </ScCard>

      <ScCard variant="rose" icon="🏥" title={c.surgeryTitle}>
        <ScProse>
          <p>{c.surgeryP1}</p>
          <p>{c.surgeryP2}</p>
        </ScProse>
        <ScNestedVaxBlock title={c.importantLabel} paragraphs={[c.importantText]} />
      </ScCard>

      <ScCard variant="mint" icon="🩺" title={c.functionalTitle}>
        <ScProse>
          <p>{c.functionalText}</p>
        </ScProse>
      </ScCard>

      <section className="bmt-summary">
        <p>{c.summary}</p>
      </section>
    </SpecialCaseArticleChrome>
  );
}

function SplenectomyPdfSection() {
  const c = COPY.ar;

  return (
    <section className="bmt-card bmt-card--slate" style={{ width: '100%', marginTop: '0.5rem' }}>
      <h3 className="bmt-section-title" dir="rtl" style={{ textAlign: 'center', marginBottom: '0.35rem' }}>
        {c.pdfTitleAr}
      </h3>
      <p
        className="bmt-prose-foot"
        dir="ltr"
        style={{ textAlign: 'center', marginBottom: '1rem', fontStyle: 'italic' }}
      >
        {c.pdfTitleEn}
      </p>
      <iframe
        src={SPLEEN_PDF_EMBED}
        width="100%"
        height="800"
        style={{ border: 'none', borderRadius: '8px', display: 'block', background: '#fff' }}
        title="تطعيمات الطحال PDF"
      />
      <div style={{ marginTop: '1rem', textAlign: 'center' }}>
        <a
          href={SPLEEN_PDF}
          download
          className="start-button"
          style={{ display: 'inline-block', padding: '0.75rem 2rem' }}
        >
          {c.pdfDownloadLabel}
        </a>
      </div>
    </section>
  );
}

export default function SplenectomyPage() {
  return (
    <SpecialCasePageLayout>
      <SplenectomyArticle locale="ar" />
      <SpecialCaseVaccineBridge links={VACCINE_LINKS} />
      <SpecialCaseLangDivider />
      <SplenectomyArticle locale="en" />
      <SplenectomyPdfSection />
    </SpecialCasePageLayout>
  );
}
