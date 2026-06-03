'use client';

import { ARTICLE_META } from '@/lib/article-meta';
import {
  ScCallout,
  ScCard,
  ScCheckList,
  ScNestedVaxBlock,
  ScProse,
  SpecialCaseArticleChrome,
  SpecialCaseLangDivider,
  SpecialCasePageLayout,
  SpecialCaseVaccineBridge,
  type SpecialCaseLocale,
  type VaccineLink,
} from '@/components/special-cases';

const VACCINE_LINKS: VaccineLink[] = [
  { href: '/pcv', ar: 'المكورات الرئوية (PCV / PPSV)', en: 'Pneumococcal (PCV / PPSV)' },
  { href: '/hib', ar: 'الهيموفيلس إنفلونزا ب (Hib)', en: 'Haemophilus influenzae type b (Hib)' },
  {
    href: '/meningitis',
    ar: 'الالتهاب السحائي (المكورات السحائية)',
    en: 'Meningitis (meningococcal disease)',
  },
];

type CochlearCopy = {
  back: string;
  tag: string;
  title: string;
  altTitle: string;
  lead: string;
  meningitisCallout: string;
  whyTitle: string;
  whyIntro: string;
  whyBacteria: string[];
  vaxTitle: string;
  vaxBlocks: { title: string; paragraphs: string[]; bullets: string[] }[];
  preopTitle: string;
  preopBullets: string[];
  scheduleTitle: string;
  scheduleNo: string;
};

const COPY: Record<SpecialCaseLocale, CochlearCopy> = {
  ar: {
    back: '← العودة لتطعيمات الحالات الخاصة',
    tag: 'حماية السمع والصحة',
    title: 'تطعيمات زراعة القوقعة',
    altTitle: 'Cochlear implant vaccinations',
    lead:
      'الأطفال (وأحيانًا الكبار) اللي عندهم زراعة قوقعة سمعية بيكونوا أكثر عرضة لالتهاب السحايا أو الحمى الشوكية، وعلشان كده التطعيمات هنا مش اختيار… دي جزء أساسي من الحماية.',
    meningitisCallout:
      'التهاب السحايا هو التهاب خطير جدًا بيصيب الأغشية اللي بتغطي المخ والحبل الشوكي، وغالبًا بيكون سببه بكتيريا قوية ممكن تسبب مضاعفات شديدة.',
    whyTitle: 'ليه الأطفال بزراعة القوقعة معرضين أكثر؟',
    whyIntro: 'لأن وجود الزراعة داخل الأذن الداخلية ممكن يزوّد فرصة دخول بعض البكتيريا اللي تسبب:',
    whyBacteria: [
      'التهاب السحايا الرئوي (Pneumococcal)',
      'التهاب السحايا بالمكورات السحائية (Meningococcal)',
      'أو بكتيريا الهيموفيلس (Hib)',
    ],
    vaxTitle: 'أهم التطعيمات المطلوبة',
    vaxBlocks: [
      {
        title: '١- تطعيم المكورات الرئوية والالتهاب الرئوي (PCV / PPSV)',
        paragraphs: ['ده من أهم التطعيمات للأطفال بزراعة القوقعة لأنه بيحمي من التهاب السحايا الرئوي.'],
        bullets: [
          'الأطفال أقل من سنتين: بياخدوا التطعيم ضمن جدول الأطفال العادي PCV10 أو PCV13 أو PCV15.',
          'الأطفال الأكبر اللي ما خدوش التطعيم قبل كده وهم صغيرين: الدكتور بيعمل لهم جدول جديد مناسب لسنهم.',
          'الأطفال أكبر من سنتين ممكن يحتاجوا تطعيم إضافي اسمه PPSV23.',
        ],
      },
      {
        title: '٢- تطعيم الهيموفيلس إنفلونزا نوع ب (Hib)',
        paragraphs: ['ده تطعيم مهم جدًا للأطفال الصغيرين لأنه بيحمي من التهاب سحائي شديد.'],
        bullets: [
          'الأطفال أقل من 5 سنوات: بياخدوه ضمن جدول التطعيمات العادي.',
          'حتى لو الطفل أصيب قبل كده بالمرض، الطبيب ممكن يقرر إذا كان يحتاج جرعات إضافية أو لا حسب السن.',
          'ولو اللي هيركب سماعة مأخدتش التطعيم ده طول عمره يبقى يتطعّم بغض النظر عن سنه.',
        ],
      },
      {
        title: '٣- تطعيم الالتهاب السحائي البكتيري (Meningococcal)',
        paragraphs: [
          'ده تطعيم بيحمي من نوع خطير جدًا من التهاب السحايا.',
          'موجود تطعيمات تغطي مجموعات مختلفة، زي ACWY ومجموعة B.',
        ],
        bullets: ['الطبيب هو اللي بيحدد الجرعة والنوع حسب السن والحالة.'],
      },
    ],
    preopTitle: 'مهم جدًا قبل عملية زراعة القوقعة',
    preopBullets: [
      'لازم يكون اللي هيزرع قوقعة واخد كل التطعيمات دي قبل العملية.',
      'والأفضل يكون في فترة أمان (حوالي أسبوعين) بين آخر تطعيم والعملية.',
      'لكن لو حصل وفي أي تطعيم ناقص، الطبيب بيظبطه بعد الجراحة.',
    ],
    scheduleTitle: 'هل الأطفال ضعاف أو فاقدي السمع ليهم جدول تطعيم مختلف؟',
    scheduleNo: 'لا',
  },
  en: {
    back: '← Back to special-case vaccinations',
    tag: 'Hearing & health protection',
    title: 'Cochlear implant vaccinations',
    altTitle: 'تطعيمات زراعة القوقعة',
    lead:
      'Children (and sometimes adults) with a cochlear implant are at higher risk of meningitis (infection of the brain and spinal cord lining). That is why these vaccines are not optional — they are a core part of protection.',
    meningitisCallout:
      'Meningitis is a very serious infection of the membranes that cover the brain and spinal cord. It is often caused by aggressive bacteria that can lead to severe complications.',
    whyTitle: 'Why are children with cochlear implants at higher risk?',
    whyIntro: 'The implant in the inner ear can increase the chance that certain bacteria may cause:',
    whyBacteria: [
      'Pneumococcal meningitis',
      'Meningococcal meningitis',
      'Haemophilus influenzae type b (Hib) disease',
    ],
    vaxTitle: 'Key vaccines',
    vaxBlocks: [
      {
        title: '1 — Pneumococcal vaccines (PCV / PPSV)',
        paragraphs: [
          'These are among the most important vaccines for children with cochlear implants because they help protect against pneumococcal meningitis.',
        ],
        bullets: [
          'Children under 2 years: receive PCV on the routine schedule (for example PCV10, PCV13, or PCV15, depending on what is used locally).',
          'Older children who missed doses when they were younger: the doctor will plan a catch-up schedule that fits their age.',
          'Children older than 2 years may also need an extra dose called PPSV23.',
        ],
      },
      {
        title: '2 — Haemophilus influenzae type b (Hib)',
        paragraphs: [
          'This vaccine is very important for young children because it protects against severe Hib disease, including meningitis.',
        ],
        bullets: [
          'Children under 5 years: usually receive Hib as part of the routine schedule.',
          'Even if a child had Hib disease before, the doctor may decide whether extra doses are needed, depending on age.',
          'If someone preparing for a cochlear implant has never received Hib vaccine, they should be vaccinated regardless of age.',
        ],
      },
      {
        title: '3 — Meningococcal vaccines',
        paragraphs: [
          'These vaccines protect against a very serious type of bacterial meningitis.',
          'There are vaccines that cover different groups, such as MenACWY and MenB. Your doctor chooses the type and number of doses based on age and medical situation.',
        ],
        bullets: ['The doctor decides the dose and product based on age and condition.'],
      },
    ],
    preopTitle: 'Very important before cochlear implant surgery',
    preopBullets: [
      'The person having the implant should receive all of these vaccines before surgery when possible.',
      'Ideally, leave a safety window (about two weeks) between the last vaccine dose and the operation.',
      'If any doses are missing, the doctor will plan how to complete them after surgery.',
    ],
    scheduleTitle: 'Do children who are deaf or hard of hearing follow a different schedule?',
    scheduleNo: 'No',
  },
};

function CochlearArticle({ locale }: { locale: SpecialCaseLocale }) {
  const c = COPY[locale];

  return (
    <SpecialCaseArticleChrome
      locale={locale}
      back={c.back}
      tag={c.tag}
      title={c.title}
      altTitle={c.altTitle}
      lead={c.lead}
      meta={ARTICLE_META.nonHcpCochlear}
    >
      <ScCallout>{c.meningitisCallout}</ScCallout>

      <ScCard variant="slate" icon="🦻" title={c.whyTitle}>
        <ScProse>
          <p>{c.whyIntro}</p>
        </ScProse>
        <ScCheckList items={c.whyBacteria} />
      </ScCard>

      <ScCard variant="mint" icon="✔️" title={c.vaxTitle}>
        {c.vaxBlocks.map((block) => (
          <ScNestedVaxBlock
            key={block.title}
            title={block.title}
            paragraphs={block.paragraphs}
            bullets={block.bullets}
          />
        ))}
      </ScCard>

      <ScCard variant="gold" icon="📅" title={c.preopTitle}>
        <ScCheckList items={c.preopBullets} />
      </ScCard>

      <ScCard variant="sky" icon="❓" title={c.scheduleTitle}>
        <p className="bmt-prose" style={{ fontWeight: 800, fontSize: '1.1rem' }}>
          {c.scheduleNo} <span aria-hidden>❌</span>
        </p>
      </ScCard>
    </SpecialCaseArticleChrome>
  );
}

export default function PostCochlearImplantPage() {
  return (
    <SpecialCasePageLayout>
      <CochlearArticle locale="ar" />
      <SpecialCaseVaccineBridge links={VACCINE_LINKS} />
      <SpecialCaseLangDivider />
      <CochlearArticle locale="en" />
    </SpecialCasePageLayout>
  );
}
