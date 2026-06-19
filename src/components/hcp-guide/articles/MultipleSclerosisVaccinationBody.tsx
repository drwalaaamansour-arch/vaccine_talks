import HcpGuideSection from '@/components/hcp-guide/HcpGuideSection';
import HcpGuideReferences from '@/components/hcp-guide/HcpGuideReferences';
import HcpGuideArabicPanel from '@/components/hcp-guide/HcpGuideArabicPanel';
import type {
  MsDrugBlock,
  MsParagraph,
  MsSection,
  MsVaccinationCopy,
} from '@/data/multiple-sclerosis-vaccination-copy';
import { MS_SECTION_IDS } from '@/data/multiple-sclerosis-vaccination-copy';

function renderInline(parts: NonNullable<Extract<MsParagraph, { parts: unknown }>>['parts']) {
  return parts.map((part, index) => {
    if (part.em) {
      return <em key={index}>{part.text}</em>;
    }
    if (part.bold) {
      return <strong key={index}>{part.text}</strong>;
    }
    return part.text;
  });
}

function renderParagraph(paragraph: MsParagraph, key: string) {
  if (typeof paragraph === 'string') {
    return <p key={key}>{paragraph}</p>;
  }

  return <p key={key}>{renderInline(paragraph.parts)}</p>;
}

function renderListItem(item: MsParagraph, key: string) {
  if (typeof item === 'string') {
    return <li key={key}>{item}</li>;
  }

  return <li key={key}>{renderInline(item.parts)}</li>;
}

function Sub({ title, dir, lang }: { title: string; dir?: 'rtl' | 'ltr'; lang?: string }) {
  return (
    <h3 className="hcp-cancer-sub" dir={dir} lang={lang}>
      {title}
    </h3>
  );
}

function DrugBlock({
  block,
  labels,
  dir,
  lang,
}: {
  block: MsDrugBlock;
  labels: MsVaccinationCopy['labels'];
  dir?: 'rtl' | 'ltr';
  lang?: string;
}) {
  const renderField = (value: MsParagraph) =>
    typeof value === 'string' ? value : renderInline(value.parts);

  return (
    <div className="hcp-guide-schedule-card" style={{ marginBottom: '1rem' }}>
      <Sub title={block.title} dir={dir} lang={lang} />
      <p>
        <strong>{labels.includes}</strong> {block.includes}
      </p>
      <p>
        <strong>{labels.nonLive}</strong> {renderField(block.nonLive)}
      </p>
      <p>
        <strong>{labels.live}</strong> {renderField(block.live)}
      </p>
    </div>
  );
}

function SectionContent({
  section,
  labels,
  sectionProps,
}: {
  section: MsSection;
  labels: MsVaccinationCopy['labels'];
  sectionProps: Record<string, unknown>;
}) {
  const dir = sectionProps.dir as 'rtl' | 'ltr' | undefined;
  const lang = sectionProps.lang as string | undefined;

  return (
    <>
      {section.paragraphs?.map((paragraph, index) =>
        renderParagraph(paragraph, `${section.id}-p-${index}`),
      )}

      {section.listItems ? (
        <ul className={section.listClassName}>
          {section.listItems.map((item, index) => renderListItem(item, `${section.id}-li-${index}`))}
        </ul>
      ) : null}

      {section.drugBlock ? (
        <DrugBlock block={section.drugBlock} labels={labels} dir={dir} lang={lang} />
      ) : null}

      {section.vzvScenarios?.map((scenario) => (
        <div key={scenario.title}>
          <Sub title={scenario.title} dir={dir} lang={lang} />
          <ul>
            {scenario.items.map((item, index) => renderListItem(item, `${section.id}-${scenario.title}-${index}`))}
          </ul>
        </div>
      ))}
    </>
  );
}

export function MultipleSclerosisVaccinationBody({
  copy,
  arabic,
}: {
  copy: MsVaccinationCopy;
  arabic?: boolean;
}) {
  const sectionProps = arabic
    ? { dir: 'rtl' as const, lang: 'ar', titleAlign: 'right' as const }
    : {};

  const referencesId = arabic ? MS_SECTION_IDS.ar.references : MS_SECTION_IDS.en.references;

  const body = (
    <>
      {copy.sections.map((section) => (
        <HcpGuideSection
          key={section.id}
          id={section.id}
          title={section.title}
          icon={section.icon}
          variant={section.variant === 'takeaway' ? 'takeaway' : 'default'}
          {...sectionProps}
        >
          <SectionContent section={section} labels={copy.labels} sectionProps={sectionProps} />
        </HcpGuideSection>
      ))}

      <div id={referencesId}>
        <HcpGuideReferences
          references={copy.references}
          title={copy.referencesTitle}
          {...sectionProps}
        />
      </div>
    </>
  );

  if (arabic) {
    return <HcpGuideArabicPanel contentOnly>{body}</HcpGuideArabicPanel>;
  }

  return body;
}
