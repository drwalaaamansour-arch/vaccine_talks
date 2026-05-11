'use client';

import { useState, type ReactNode } from 'react';

type TabDef = { id: string; label: string; content: ReactNode };

const tabsAr: TabDef[] = [
  {
    id: 'bcg',
    label: 'تطعيم الدرن (BCG)',
    content: (
      <>
        <p>في العادة الأطفال الطبيعيين بياخدوا تطعيم الدرن بعد الولادة مباشرة.</p>
        <p>أما الطفل المبتسر:</p>
        <ul>
          <li>لو حالته مستقرة</li>
          <li>واتولد بعد 34 أسبوع</li>
          <li>ووزنه 2 كيلو أو أكتر</li>
        </ul>
        <p>فغالبًا يقدر ياخد التطعيم قبل الخروج من المستشفى.</p>
        <p>أما لو الوزن أقل من 2 كيلو، الطبيب ممكن يأجل التطعيم لحد ما الوزن يزيد، إلا لو فيه خطر مرتفع للتعرض للدرن.</p>
        <p>وفي حالات معينة زي:</p>
        <ul>
          <li>ضعف المناعة الشديد</li>
          <li>أو بعض الأدوية البيولوجية اللي الأم أخدتها أثناء الحمل</li>
        </ul>
        <p>ممكن الطبيب يقرر تأجيل التطعيم لفترة حفاظًا على الطفل.</p>
      </>
    ),
  },
  {
    id: 'hepb',
    label: 'تطعيم التهاب الكبدي ب',
    content: (
      <>
        <p>لو الأم سليمة من فيروس B:</p>
        <ul>
          <li>الطفل اللي وزنه 2 كيلو أو أكتر ياخد الجرعة بعد الولادة.</li>
          <li>لو أقل من 2 كيلو، ممكن الجرعة تتأجل لشهر أو لحد الخروج من الحضّانة.</li>
        </ul>
        <p>لو الأم مصابة بالفيروس أو حالتها غير معروفة:</p>
        <p>لازم الطفل ياخد:</p>
        <ul>
          <li>التطعيم</li>
          <li>وحقنة الأجسام المضادة</li>
        </ul>
        <p>خلال أول 12 ساعة من الولادة مهما كان وزنه.</p>
        <p>وبعض الأطفال الصغيرين جدًا ممكن يحتاجوا جرعات إضافية علشان نتأكد إن المناعة تكونت بشكل كافي.</p>
      </>
    ),
  },
  {
    id: 'rsv',
    label: 'فيروس RSV (المخلوي)',
    content: (
      <>
        <p>الأطفال المبتسرين أكثر عرضة لمضاعفات فيروس RSV اللي ممكن يسبب التهاب شديد بالشعب الهوائية والرئة.</p>
        <p>حاليًا مفيش تطعيم روتيني للرضع، لكن ممكن ياخدوا أجسام مضادة وقائية حسب حالة الطفل وتوصية الطبيب.</p>
      </>
    ),
  },
  {
    id: 'pcv',
    label: 'تطعيم المكورات الرئوية (PCV)',
    content: (
      <>
        <p>تطعيم مهم جدًا للأطفال المبتسرين لأنه يحمي من:</p>
        <ul>
          <li>الالتهاب الرئوي</li>
          <li>التهاب السحايا</li>
          <li>والتهابات خطيرة بالدم</li>
        </ul>
        <p>وبيبدأ عادة من عمر شهرين حسب العمر الحقيقي، حتى لو الطفل مولود بدري.</p>
        <p>وبعض الأطفال اللي عندهم مشاكل مزمنة في الرئة أو القلب ممكن يحتاجوا جرعات إضافية.</p>
      </>
    ),
  },
  {
    id: 'rota',
    label: 'تطعيم الروتا',
    content: (
      <>
        <p>تطعيم الروتا مهم جدًا لأنه يحمي من الإسهال الشديد والجفاف.</p>
        <p>لكن فيه شوية احتياطات:</p>
        <ul>
          <li>لازم أول جرعة تتاخد قبل عمر ٢٠ أسبوع.</li>
          <li>يفضل يتاخد بعد خروج الطفل من الحضّانة.</li>
          <li>بعض الأطفال اللي عندهم ضعف مناعة شديد ماينفعش ياخدوه لأنه تطعيم حيّ.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'flu',
    label: 'تطعيم الإنفلونزا',
    content: (
      <>
        <p>الأطفال المبتسرين أكثر عرضة لمضاعفات الإنفلونزا، خصوصًا لو عندهم مشاكل تنفس.</p>
        <p>علشان كده:</p>
        <ul>
          <li>يبدأ من عمر 6 شهور.</li>
          <li>بياخد جرعتين بينهم 4 أسابيع.</li>
        </ul>
        <p>وكمان مهم جدًا إن الأم تاخد تطعيم الإنفلونزا أثناء الحمل علشان تنقل حماية للطفل في أول شهوره.</p>
      </>
    ),
  },
  {
    id: 'penta',
    label: 'الخماسية والسداسية',
    content: (
      <>
        <p>التطعيمات الخماسية والسداسية اللي بتحتوي على:</p>
        <ul>
          <li>الدفتيريا</li>
          <li>السعال الديكي</li>
          <li>التيتانوس</li>
          <li>شلل الأطفال</li>
          <li>انفلونزا بكتيرية</li>
          <li>والتهاب الكبدي ب</li>
        </ul>
        <p>دي بتبدأ من عمر شهرين حسب العمر الحقيقي.</p>
        <p>والأفضل يكون التطعيم بتاع السعال الديكي لاخلوي علشان اعراضه الجانبية تكون اقل</p>
        <p>بعض الأطفال شديدي الابتسار ممكن يحتاجوا متابعة بسيطة بعد التطعيم بسبب احتمال حدوث:</p>
        <ul>
          <li>توقف مؤقت بالتنفس</li>
          <li>أو بطء ضربات القلب</li>
        </ul>
        <p>لكن ده غالبًا مؤقت ومايمنعش التطعيم.</p>
      </>
    ),
  },
  {
    id: 'mening',
    label: 'تطعيم الالتهاب السحائي',
    content: (
      <>
        <p>الأطفال المبتسرين يقدروا ياخدوا تطعيمات الالتهاب السحائي بنفس جدول الأطفال الطبيعيين.</p>
        <p>وفي الأطفال شديدي الابتسار جدًا، الطبيب أحيانًا يفضل متابعة التنفس بعد التطعيم لفترة قصيرة.</p>
      </>
    ),
  },
  {
    id: 'hib',
    label: 'الإنفلونزا البكتيرية (Hib)',
    content: (
      <>
        <p>ده تطعيم مهم جدًا ضد بكتيريا ممكن تسبب:</p>
        <ul>
          <li>التهاب سحائي</li>
          <li>التهاب رئوي</li>
          <li>والتهابات خطيرة أخرى</li>
        </ul>
        <p>وبيبدأ من عمر شهرين ضمن التطعيمات الروتينية وبيكون موجود جوه الخماسي والسداسي.</p>
      </>
    ),
  },
  {
    id: 'polio',
    label: 'تطعيم شلل الأطفال',
    content: (
      <>
        <p>يتم إعطاء التطعيم غير النشط (IPV) بشكل طبيعي حسب الجدول.</p>
        <p>لكن تطعيم شلل الأطفال الفموي (OPV) لا يُفضّل داخل الحضّانات لتقليل خطر انتقال الفيروس للأطفال الآخرين.</p>
      </>
    ),
  },
  {
    id: 'mmr',
    label: 'الحصبة والجديري المائي',
    content: (
      <>
        <p>يتم إعطاؤهم عادة عند عمر سنة حسب العمر الحقيقي، طالما حالة الطفل مستقرة.</p>
        <p>والدراسات أثبتت إن الأطفال المبتسرين بيستجيبوا لهم بشكل جيد.</p>
      </>
    ),
  },
  {
    id: 'special',
    label: 'اعتبارات خاصة',
    content: (
      <>
        <h3 className="guidelines-subtitle">الأطفال أصحاب الأمراض المزمنة</h3>
        <p>قد يحتاج الأطفال الذين يعانون من:</p>
        <ul>
          <li>أمراض رئة مزمنة</li>
          <li>أمراض قلب</li>
          <li>أمراض كلى</li>
          <li>أو ضعف مناعة</li>
        </ul>
        <p>إلى جداول خاصة أو تطعيمات إضافية حسب تقييم الطبيب.</p>

        <h3 className="guidelines-subtitle">الأطفال ضعيفو المناعة</h3>
        <p>بعض التطعيمات الحية مثل:</p>
        <ul>
          <li>BCG</li>
          <li>MMR</li>
          <li>الجديري المائي</li>
        </ul>
        <p>قد تكون غير مناسبة للأطفال الذين يعانون من ضعف مناعة شديد.</p>

        <h3 className="guidelines-subtitle">الأدوية التي تناولتها الأم أثناء الحمل</h3>
        <p>بعض الأدوية البيولوجية أو المثبطة للمناعة التي تأخذها الأم قد تؤثر على توقيت بعض التطعيمات الحية عند الطفل، لذلك يجب مراجعة الطبيب قبل التطعيم.</p>
      </>
    ),
  },
];

const tabsEn: TabDef[] = [
  {
    id: 'bcg',
    label: 'BCG (tuberculosis)',
    content: (
      <>
        <p>Full-term infants usually receive the BCG vaccine soon after birth.</p>
        <p>For a preterm infant, BCG is generally appropriate before hospital discharge if:</p>
        <ul>
          <li>The baby is clinically stable,</li>
          <li>Born at 34 weeks&apos; gestation or later, and</li>
          <li>Weighs 2 kg or more.</li>
        </ul>
        <p>If birth weight is under 2 kg, the doctor may delay vaccination until weight increases, unless there is a high risk of tuberculosis exposure.</p>
        <p>In certain situations, such as:</p>
        <ul>
          <li>Severe immunodeficiency, or</li>
          <li>Some biologic medicines the mother received during pregnancy,</li>
        </ul>
        <p>the doctor may decide to postpone BCG for a period of time to protect the infant.</p>
      </>
    ),
  },
  {
    id: 'hepb',
    label: 'Hepatitis B vaccine',
    content: (
      <>
        <p>If the mother is not infected with hepatitis B:</p>
        <ul>
          <li>An infant weighing 2 kg or more can receive the birth dose after delivery.</li>
          <li>If under 2 kg, the dose may be delayed until one month of age or until NICU discharge.</li>
        </ul>
        <p>If the mother has hepatitis B or her status is unknown, the infant should receive:</p>
        <ul>
          <li>Hepatitis B vaccine, and</li>
          <li>Hepatitis B immunoglobulin (HBIG)</li>
        </ul>
        <p>within the first 12 hours of life, regardless of weight.</p>
        <p>Some very small infants may need extra doses so clinicians can confirm adequate immunity.</p>
      </>
    ),
  },
  {
    id: 'rsv',
    label: 'RSV (respiratory syncytial virus)',
    content: (
      <>
        <p>Preterm infants are at higher risk of severe complications from RSV, including significant lower airway and lung inflammation.</p>
        <p>There is no routine RSV vaccine for infants at present, but preventive monoclonal antibodies may be offered depending on the child&apos;s condition and the doctor&apos;s advice.</p>
      </>
    ),
  },
  {
    id: 'pcv',
    label: 'Pneumococcal vaccine (PCV)',
    content: (
      <>
        <p>PCV is especially important for preterm infants because it helps protect against:</p>
        <ul>
          <li>Pneumonia,</li>
          <li>Meningitis, and</li>
          <li>Severe bloodstream infections.</li>
        </ul>
        <p>Vaccination usually starts at two months of chronological age, even if the baby was born preterm.</p>
        <p>Some infants with chronic lung or heart problems may need additional doses.</p>
      </>
    ),
  },
  {
    id: 'rota',
    label: 'Rotavirus vaccine',
    content: (
      <>
        <p>Rotavirus vaccine is important because it protects against severe diarrhoea and dehydration.</p>
        <p>There are a few practical precautions:</p>
        <ul>
          <li>The first dose must be given before 20 weeks of age.</li>
          <li>It is preferable to give it after the baby leaves the NICU.</li>
          <li>Some infants with severe immunodeficiency should not receive it because it is a live vaccine.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'flu',
    label: 'Influenza (flu) vaccine',
    content: (
      <>
        <p>Preterm infants are at higher risk of influenza complications, especially if they have breathing problems.</p>
        <p>Therefore:</p>
        <ul>
          <li>Vaccination starts at 6 months of age.</li>
          <li>Two doses are given at least four weeks apart for the first season.</li>
        </ul>
        <p>Maternal influenza vaccination during pregnancy is also very important to pass protection to the baby in the first months of life.</p>
      </>
    ),
  },
  {
    id: 'penta',
    label: 'Pentavalent and hexavalent vaccines',
    content: (
      <>
        <p>Pentavalent and hexavalent vaccines combine protection against:</p>
        <ul>
          <li>Diphtheria,</li>
          <li>Pertussis (whooping cough),</li>
          <li>Tetanus,</li>
          <li>Polio,</li>
          <li>Haemophilus influenzae type b, and</li>
          <li>Hepatitis B (in the hexavalent product).</li>
        </ul>
        <p>The series usually begins at two months of chronological age.</p>
        <p>An acellular pertussis component is preferred because it tends to cause fewer side effects.</p>
        <p>Some very preterm infants may need brief monitoring after vaccination because of the small risk of:</p>
        <ul>
          <li>Temporary pauses in breathing, or</li>
          <li>A temporary slowing of the heart rate.</li>
        </ul>
        <p>These events are usually short-lived and are not a reason to avoid vaccination.</p>
      </>
    ),
  },
  {
    id: 'mening',
    label: 'Meningitis vaccines',
    content: (
      <>
        <p>Preterm infants can receive meningitis-related vaccines on the same schedule as full-term infants.</p>
        <p>For very preterm babies, the doctor may recommend brief respiratory monitoring after vaccination.</p>
      </>
    ),
  },
  {
    id: 'hib',
    label: 'Haemophilus influenzae type b (Hib)',
    content: (
      <>
        <p>Hib vaccine protects against bacteria that can cause:</p>
        <ul>
          <li>Meningitis,</li>
          <li>Pneumonia, and</li>
          <li>Other serious infections.</li>
        </ul>
        <p>It starts at two months as part of the routine schedule and is included in pentavalent and hexavalent combinations.</p>
      </>
    ),
  },
  {
    id: 'polio',
    label: 'Polio vaccine',
    content: (
      <>
        <p>Inactivated polio vaccine (IPV) is given on the standard schedule.</p>
        <p>Oral polio vaccine (OPV) is not preferred inside the NICU because of the risk of spread to other infants.</p>
      </>
    ),
  },
  {
    id: 'mmr',
    label: 'Measles and chickenpox (varicella)',
    content: (
      <>
        <p>These are usually given at about one year of chronological age, provided the child is clinically stable.</p>
        <p>Studies show that preterm infants generally respond well.</p>
      </>
    ),
  },
  {
    id: 'special',
    label: 'Special considerations',
    content: (
      <>
        <h3 className="guidelines-subtitle">Children with chronic conditions</h3>
        <p>Infants with conditions such as:</p>
        <ul>
          <li>Chronic lung disease,</li>
          <li>Heart disease,</li>
          <li>Kidney disease, or</li>
          <li>Immune weakness</li>
        </ul>
        <p>may need adjusted schedules or extra vaccines based on medical assessment.</p>

        <h3 className="guidelines-subtitle">Severely immunocompromised infants</h3>
        <p>Some live vaccines, including:</p>
        <ul>
          <li>BCG,</li>
          <li>MMR, and</li>
          <li>Varicella (chickenpox),</li>
        </ul>
        <p>may be unsuitable for infants with severe immunodeficiency.</p>

        <h3 className="guidelines-subtitle">Medicines the mother took during pregnancy</h3>
        <p>Some biologic or immunosuppressive medicines taken by the mother can affect the timing of certain live vaccines for the infant, so the doctor should be consulted before vaccination.</p>
      </>
    ),
  },
];

type InnerProps = {
  tabs: TabDef[];
  dir: 'rtl' | 'ltr';
  tablistAriaLabel: string;
  idPrefix: string;
};

function VaccineGuidelinesTabsInner({ tabs, dir, tablistAriaLabel, idPrefix }: InnerProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="guidelines-tabs" dir={dir}>
      <div className="guidelines-tablist-wrap" role="tablist" aria-label={tablistAriaLabel}>
        {tabs.map((tab, i) => (
          <button
            key={`${idPrefix}-${tab.id}`}
            type="button"
            role="tab"
            id={`${idPrefix}-tab-${tab.id}`}
            aria-selected={active === i}
            aria-controls={`${idPrefix}-panel-${tab.id}`}
            tabIndex={active === i ? 0 : -1}
            className={`guidelines-tab ${active === i ? 'is-active' : ''}`}
            onClick={() => setActive(i)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        className="guidelines-panel"
        role="tabpanel"
        id={`${idPrefix}-panel-${tabs[active].id}`}
        aria-labelledby={`${idPrefix}-tab-${tabs[active].id}`}
      >
        <h3 className="guidelines-panel-title">{tabs[active].label}</h3>
        <div className="guidelines-panel-body">{tabs[active].content}</div>
      </div>

      <style jsx>{`
        .guidelines-tabs {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 0.5rem 1rem;
        }
        @media (min-width: 900px) {
          .guidelines-tabs {
            flex-direction: row;
            align-items: flex-start;
            gap: 1.5rem;
          }
        }
        .guidelines-tablist-wrap {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          gap: 0.5rem;
          overflow-x: auto;
          padding-bottom: 0.35rem;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: thin;
        }
        @media (min-width: 900px) {
          .guidelines-tablist-wrap {
            flex-direction: column;
            flex-wrap: nowrap;
            overflow-x: visible;
            overflow-y: auto;
            max-height: 70vh;
            min-width: 280px;
            width: 300px;
            flex-shrink: 0;
            gap: 0.45rem;
            padding: 0.25rem;
          }
        }
        .guidelines-tab {
          flex: 0 0 auto;
          min-height: 3.25rem;
          padding: 0.85rem 1.15rem;
          font-size: 1.05rem;
          font-weight: 700;
          line-height: 1.35;
          text-align: start;
          border-radius: 12px;
          border: 2px solid rgba(64, 96, 109, 0.22);
          background: rgba(255, 255, 255, 0.65);
          color: #2d454e;
          cursor: pointer;
          transition: background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
          white-space: nowrap;
        }
        @media (min-width: 900px) {
          .guidelines-tab {
            white-space: normal;
            width: 100%;
            min-height: 3.5rem;
            font-size: 1.12rem;
            padding: 1rem 1.1rem;
          }
        }
        .guidelines-tab:hover {
          background: rgba(64, 96, 109, 0.08);
          border-color: rgba(64, 96, 109, 0.35);
        }
        .guidelines-tab.is-active {
          background: #40606d;
          color: #fff;
          border-color: #40606d;
          box-shadow: 0 6px 18px rgba(64, 96, 109, 0.28);
        }
        .guidelines-panel {
          flex: 1;
          min-width: 0;
          padding: 1.35rem 1.5rem;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.85);
          border: 2px solid rgba(64, 96, 109, 0.15);
          box-shadow: 0 6px 24px rgba(64, 96, 109, 0.08);
          text-align: start;
          line-height: 1.85;
        }
        .guidelines-panel-title {
          margin: 0 0 1rem 0;
          font-size: clamp(1.35rem, 2.5vw, 1.75rem);
          font-weight: 800;
          color: #40606d;
          line-height: 1.3;
        }
        .guidelines-panel-body :global(p) {
          margin: 0 0 0.85rem 0;
          font-size: 1.05rem;
          color: #2a3f47;
        }
        .guidelines-panel-body :global(ul) {
          margin: 0 0 1rem 0;
          padding-inline-start: 1.35rem;
        }
        .guidelines-panel-body :global(li) {
          margin-bottom: 0.4rem;
          font-size: 1.05rem;
          color: #2a3f47;
        }
        .guidelines-panel-body :global(.guidelines-subtitle) {
          margin: 1.35rem 0 0.6rem 0;
          font-size: 1.15rem;
          font-weight: 700;
          color: #40606d;
        }
        .guidelines-panel-body :global(.guidelines-subtitle:first-child) {
          margin-top: 0;
        }
      `}</style>
    </div>
  );
}

/** Arabic tabs (default) */
export default function PretermVaccineGuidelinesTabs() {
  return <VaccineGuidelinesTabsInner tabs={tabsAr} dir="rtl" tablistAriaLabel="إرشادات حسب نوع التطعيم" idPrefix="ar" />;
}

/** English tabs — same structure, for placement below Arabic */
export function PretermVaccineGuidelinesTabsEnglish() {
  return <VaccineGuidelinesTabsInner tabs={tabsEn} dir="ltr" tablistAriaLabel="Guidelines by vaccine" idPrefix="en" />;
}
