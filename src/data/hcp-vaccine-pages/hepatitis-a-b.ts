import type { HcpVaccineProductPageProps } from '@/components/hcp-vaccine-product/HcpVaccineProductPage';
import { buildVaccineArBundle } from '@/lib/build-hcp-vaccine-ar';

export const HepatitisABPage: HcpVaccineProductPageProps = {
  "metaKey": "hcpHepatitisAB",
  "title": "Hepatitis A&B",
  "lead": "Hepatitis A+B vaccine contains paediatric dose of Hepatitis A and adult dose of Hepatitis B.",
  "emoji": "🔵",
  "sections": [
    {
      "id": "overview",
      "title": "Overview",
      "icon": "📋",
      "blocks": [
        {
          "type": "p",
          "text": "Hepatitis A+B vaccine contains paediatric dose of Hepatitis A and adult dose of Hepatitis B."
        }
      ]
    },
    {
      "id": "minimum-intervals-for-the-3-dose-twinrix-series",
      "title": "Minimum Intervals for the 3‑Dose Twinrix Series",
      "icon": "🇪🇬",
      "blocks": [
        {
          "type": "p",
          "text": "The standard Twinrix (HepA‑HepB) series consists of three intramuscular doses at 0, 1, and 6 months. Minimum intervals:"
        },
        {
          "type": "ul",
          "items": [
            "Between Dose 1 and Dose 2: at least 4 weeks (28 days)",
            "Between Dose 2 and Dose 3: at least 5 months (~20 weeks)"
          ]
        },
        {
          "type": "p",
          "text": "These intervals ensure optimal immune response to both hepatitis A and B."
        }
      ]
    },
    {
      "id": "accelerated-alternative-twinrix-schedule-for-rapid-prote",
      "title": "Accelerated (Alternative) Twinrix Schedule for Rapid Protection",
      "icon": "🇪🇬",
      "blocks": [
        {
          "type": "p",
          "text": "For rapid protection (e.g., imminent travel), an accelerated 4‑dose schedule may be used: First dose: Day 0 Second dose: Day 7 Third dose: Day 21–30 Fourth (booster) dose: ≥12 months after the first dose This regimen provides earlier protection when the routine schedule cannot be completed before exposure."
        }
      ]
    },
    {
      "id": "completing-the-series-with-single-antigen-vaccines",
      "title": "Completing the Series with Single‑Antigen Vaccines",
      "icon": "🇪🇬",
      "blocks": [
        {
          "type": "p",
          "text": "If Twinrix is started but completion with single‑antigen vaccines is needed: If 1 dose of Twinrix was given: Complete with 2 adult doses of Hepatitis A (HepA) Complete with 2 adult doses of Hepatitis B (HepB) If 2 doses of Twinrix were given: Complete with 1 adult dose of HepA Complete with 1 adult dose of HepB"
        },
        {
          "type": "ul",
          "items": [
            "Each Twinrix dose contains an adult dose of HepB and a paediatric dose of HepA.",
            "A Twinrix dose can substitute for any dose in the HepB series, but not for a full adult dose in the HepA series.",
            "Any combination of 3 doses of adult HepB or 3 doses of Twinrix constitutes a complete HepB series.",
            "1 Twinrix dose + 2 adult HepA doses = complete HepA series.",
            "2 Twinrix doses + 1 adult HepA dose = complete HepA series."
          ]
        },
        {
          "type": "p",
          "text": "Reference: Immunize.org – HepA‑HepB (Twinrix) guidance"
        }
      ]
    }
  ],
  "faqHref": "/faq/hepa-hepb",
  "references": [],
  "pdfs": [
    {
      "productName": "Twinrix – Product Information",
      "src": "/Twinrix%20.pdf"
    }
  ],
  ar: buildVaccineArBundle({
    title: 'التهاب الكبد A و B',
    lead: 'يحتوي لقاح التهاب الكبد A+B على جرعة أطفال من التهاب الكبد A وجرعة بالغين من التهاب الكبد B.',
    sections: [
      {
        id: 'overview',
        title: 'نظرة عامة',
        icon: '📋',
        blocks: [
          {
            type: 'p',
            text: 'يحتوي لقاح التهاب الكبد A+B على جرعة أطفال من التهاب الكبد A وجرعة بالغين من التهاب الكبد B.',
          },
        ],
      },
      {
        id: 'minimum-intervals-for-the-3-dose-twinrix-series',
        title: 'الحد الأدنى للفواصل الزمنية لسلسلة Twinrix الثلاثية الجرعات',
        icon: '🇪🇬',
        blocks: [
          {
            type: 'p',
            text: 'تتكون سلسلة Twinrix (HepA-HepB) القياسية من ثلاث جرعات عضلية عند الأشهر 0 و1 و6. الحد الأدنى للفواصل الزمنية:',
          },
          {
            type: 'ul',
            items: [
              'بين الجرعة الأولى والثانية: 4 أسابيع على الأقل (28 يوماً)',
              'بين الجرعة الثانية والثالثة: 5 أشهر على الأقل (حوالي 20 أسبوعاً)',
            ],
          },
          {
            type: 'p',
            text: 'تضمن هذه الفواصل استجابة مناعية مثلى لكل من التهاب الكبد A و B.',
          },
        ],
      },
      {
        id: 'accelerated-alternative-twinrix-schedule-for-rapid-prote',
        title: 'جدول Twinrix المعجل (البديل) للحماية السريعة',
        icon: '🇪🇬',
        blocks: [
          {
            type: 'p',
            text: 'للحماية السريعة (مثل السفر الوشيك)، يمكن استخدام جدول معجل من 4 جرعات: الجرعة الأولى: اليوم 0 — الجرعة الثانية: اليوم 7 — الجرعة الثالثة: اليوم 21–30 — الجرعة الرابعة (المنشطة): ≥12 شهراً بعد الجرعة الأولى. يوفر هذا النظام حماية مبكرة عندما لا يمكن إكمال الجدول الروتيني قبل التعرض.',
          },
        ],
      },
      {
        id: 'completing-the-series-with-single-antigen-vaccines',
        title: 'إكمال السلسلة بلقاحات أحادية المستضد',
        icon: '🇪🇬',
        blocks: [
          {
            type: 'p',
            text: 'إذا بدأ Twinrix ولكن كان الإكمال بلقاحات أحادية المستضد ضرورياً: إذا أُعطيت جرعة واحدة من Twinrix: أكمل بجرعتين بالغين من التهاب الكبد A (HepA) وأكمل بجرعتين بالغين من التهاب الكبد B (HepB). إذا أُعطيت جرعتان من Twinrix: أكمل بجرعة بالغ واحدة من HepA وأكمل بجرعة بالغ واحدة من HepB.',
          },
          {
            type: 'ul',
            items: [
              'تحتوي كل جرعة من Twinrix على جرعة بالغ من HepB وجرعة أطفال من HepA.',
              'يمكن لجرعة Twinrix أن تحل محل أي جرعة في سلسلة HepB، لكنها لا تحل محل جرعة بالغ كاملة في سلسلة HepA.',
              'أي مزيج من 3 جرعات من HepB للبالغين أو 3 جرعات من Twinrix يُشكّل سلسلة HepB كاملة.',
              'جرعة Twinrix واحدة + جرعتان بالغ من HepA = سلسلة HepA كاملة.',
              'جرعتان من Twinrix + جرعة بالغ واحدة من HepA = سلسلة HepA كاملة.',
            ],
          },
          {
            type: 'p',
            text: 'المرجع: Immunize.org – إرشادات HepA-HepB (Twinrix)',
          },
        ],
      },
    ],
  }),
};
