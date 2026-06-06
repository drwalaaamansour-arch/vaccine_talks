export type VaccineTimingRow = {
  category: string;
  riskTier: string;
  mechanism: string;
  beforeTreatment: string;
  duringTreatment: string;
  afterTreatment: string;
};

export const IMMUNOSUPPRESSIVE_VACCINE_TIMING: VaccineTimingRow[] = [
  {
    category: 'High-dose corticosteroids\n• Prednisone ≥20 mg/day (or ≥2 mg/kg/day if <10 kg) for >14 days',
    riskTier: 'Severe',
    mechanism:
      'Broadly halts cytokine production, depletes circulating lymphocytes, and prevents cell migration.',
    beforeTreatment: 'Live: ≥4 weeks prior\nNon-live: ≥2 weeks prior',
    duringTreatment: 'Live: CONTRAINDICATED\nNon-live: Safe, but antibody response is blunted',
    afterTreatment: 'Wait ≥4 weeks (1 month) after stopping before live vaccines',
  },
  {
    category:
      'Low-dose traditional DMARDs\n• Methotrexate (≤25 mg/week)\n• Azathioprine (≤3 mg/kg/day)\n• Mercaptopurine (≤1.5 mg/kg/day)',
    riskTier: 'Mild',
    mechanism:
      'Inhibits purine, pyrimidine, or folate metabolism to slow overactive T- and B-cell division.',
    beforeTreatment: 'No special wait. Baseline schedules apply.',
    duringTreatment:
      'Live: CONTRAINDICATED\nNon-live: Safe. Consider pausing methotrexate 2 weeks post–influenza vaccine to improve antibody yield.',
    afterTreatment: 'Wait 1–3 months after stopping before live vaccines',
  },
  {
    category:
      'High-dose / oncological DMARDs\n• Methotrexate (>25 mg/week)\n• Azathioprine (>3 mg/kg/day)\n• Mercaptopurine (>1.5 mg/kg/day)',
    riskTier: 'Moderate to severe',
    mechanism: 'Induces deeper cell-cycle arrest and lymphocyte depletion than low-dose regimens.',
    beforeTreatment: 'Live: ≥4 weeks prior\nNon-live: ≥2 weeks prior',
    duringTreatment: 'Live: CONTRAINDICATED\nNon-live: Safe, but protection levels are reduced',
    afterTreatment: 'Wait 3 months after discontinuing before live vaccines',
  },
  {
    category: 'Mycophenolate mofetil\n(CellCept, Myfortic)',
    riskTier: 'Severe',
    mechanism: 'Blocks IMPDH enzyme required for DNA/RNA synthesis in growing T and B cells.',
    beforeTreatment: 'Live: ≥4 weeks prior\nNon-live: ≥2 weeks prior',
    duringTreatment: 'Live: CONTRAINDICATED\nNon-live: Safe, but antibody response is heavily blunted',
    afterTreatment: 'Wait 3 months after discontinuing before live vaccines',
  },
  {
    category:
      'Calcineurin & mTOR inhibitors\n• Ciclosporin & tacrolimus\n• Sirolimus & everolimus',
    riskTier: 'Tiered: mild (autoimmune) → severe (transplant)',
    mechanism:
      'Inhibits IL-2 or mTOR pathways to block T-cell activation.',
    beforeTreatment: 'Live: ≥4 weeks prior\nNon-live: ≥2 weeks prior',
    duringTreatment:
      'Live: CONTRAINDICATED\nNon-live: Safe, but protection compromised at severe/transplant doses',
    afterTreatment:
      '≥3 months if autoimmune use; ≥12 months if used for solid organ transplant rejection',
  },
  {
    category: 'Alkylating agents\n• Cyclophosphamide',
    riskTier: 'Severe',
    mechanism: 'Cross-links DNA strands, triggering growth arrest and deep lymphocyte depletion.',
    beforeTreatment: 'Live: ≥4 weeks prior\nNon-live: ≥2 weeks prior',
    duringTreatment: 'Live: CONTRAINDICATED\nNon-live: Safe, but response is minimized',
    afterTreatment: 'Wait 3 months after stopping before live vaccines',
  },
  {
    category: 'Cytotoxic cancer chemotherapy',
    riskTier: 'Severe',
    mechanism: 'Non-selectively halts cellular replication, damaging active white blood cell pools.',
    beforeTreatment: 'Live: ≥4 weeks prior\nNon-live: ≥2 weeks prior',
    duringTreatment: 'Live: CONTRAINDICATED\nNon-live: Safe, but antibody responses are extremely blunted',
    afterTreatment: 'Wait 3–12 months post-chemotherapy (depends on CD4+ T-cell recovery)',
  },
  {
    category: 'JAK inhibitors (oral)\n• Tofacitinib, upadacitinib, baricitinib',
    riskTier: 'Moderate',
    mechanism: 'Blocks JAK pathways intracellularly, disrupting downstream cytokine signals.',
    beforeTreatment: 'Live: ≥4 weeks prior\nNon-live: ≥2 weeks prior',
    duringTreatment: 'Live: CONTRAINDICATED\nNon-live: Safe, but response may be suboptimal',
    afterTreatment: 'Wait 1–3 months after stopping, based on drug half-life',
  },
  {
    category:
      'Oncological kinase inhibitors\n• BTK inhibitors (e.g., ibrutinib)\n• ALK & CDK4/6 inhibitors',
    riskTier: 'Tiered: moderate (BTK) / mild (ALK/CDK4/6)',
    mechanism:
      'BTK inhibitors reduce B-cell survival; ALK/CDK4/6 agents halt malignant cell cycles.',
    beforeTreatment: 'Live: ≥4 weeks prior\nNon-live: ≥2 weeks prior',
    duringTreatment: 'Live: CONTRAINDICATED\nNon-live: Safe to administer',
    afterTreatment: 'Wait 3 months after completing regimens; unlikely immunosuppressive after clearance',
  },
  {
    category: 'B-cell depleting biologics\n• Rituximab, ocrelizumab, ofatumumab',
    riskTier: 'Severe',
    mechanism: 'Targets and depletes CD20+ mature B cells, halting autoantibody production.',
    beforeTreatment: 'Live: ≥4 weeks prior\nNon-live: ≥2–4 weeks prior',
    duringTreatment: 'Live: CONTRAINDICATED\nNon-live: Safe, but minimal to no new antibody generation',
    afterTreatment:
      'Live: contraindicated during and <6 months post-treatment\nNon-live: give 5–6 months after last infusion (or ≥4 weeks before next dose)',
  },
  {
    category:
      'Anti-TNF & cytokine biologics\n• Anti-TNF (Humira, Remicade)\n• Anti-IL-6 (Actemra, sarilumab)',
    riskTier: 'Moderate',
    mechanism: 'Neutralizes inflammatory proteins (TNF or IL-6) to halt systemic tissue damage.',
    beforeTreatment: 'Live: ≥4 weeks prior\nNon-live: ≥2 weeks prior',
    duringTreatment: 'Live: CONTRAINDICATED\nNon-live: Safe; often yields effective antibody levels',
    afterTreatment: 'Wait 3 months (or 1–2 half-lives) after stopping before live vaccines',
  },
  {
    category:
      'Selective cytokine biologics\n• Anti-IL-17 (secukinumab)\n• Anti-IL-12/23 (ustekinumab)',
    riskTier: 'Mild',
    mechanism: 'Targeted interleukin blockade in skin and gut inflammatory pathways.',
    beforeTreatment: 'Live: ≥4 weeks prior\nNon-live: ≥2 weeks prior',
    duringTreatment: 'Live: CONTRAINDICATED\nNon-live: Safe; reliable protective responses',
    afterTreatment: 'Wait 3 months after stopping before live vaccines',
  },
  {
    category: 'T-cell co-stimulation blockers\n• Abatacept (Orencia)',
    riskTier: 'Severe',
    mechanism: 'Binds CD80/CD86 to block secondary T-cell activation signals.',
    beforeTreatment: 'Live: ≥4 weeks prior\nNon-live: ≥2 weeks prior',
    duringTreatment: 'Live: CONTRAINDICATED\nNon-live: Safe, but antibody generation is heavily blunted',
    afterTreatment: 'Wait ≥3 months after stopping before live vaccines',
  },
  {
    category: 'Advanced cellular therapies\n• CAR-T cell therapy\n• Stem cell transplants (HSCT)',
    riskTier: 'Severe',
    mechanism: 'Complete lymphodepletion via engineered cells or myeloablative conditioning.',
    beforeTreatment: 'Defer all scheduling to oncology teams',
    duringTreatment: 'Live: STRICTLY CONTRAINDICATED\nNon-live: Defer',
    afterTreatment:
      'Defer live and non-live vaccines 6–24 months post-transplant; full re-immunization required',
  },
  {
    category: 'Mild immunomodulators\n• Hydroxychloroquine, sulfasalazine',
    riskTier: 'None / mild',
    mechanism: 'Mild lysosomal modulation without structural immune gaps.',
    beforeTreatment: 'No special wait. Baseline schedules apply.',
    duringTreatment: 'Live: SAFE\nNon-live: SAFE — full vaccine efficacy expected',
    afterTreatment: 'No delays or post-treatment wait required',
  },
  {
    category:
      'Non-immunosuppressive biologics\n• Anti-CGRP (fremanezumab)\n• Anti-RANKL (denosumab)\n• Anti-IgE (omalizumab)',
    riskTier: 'None',
    mechanism: 'Blocks non-immune pathways (migraine, bone turnover, mast cell IgE).',
    beforeTreatment: 'No special wait. Baseline schedules apply.',
    duringTreatment: 'Live: SAFE\nNon-live: SAFE — full vaccine efficacy expected',
    afterTreatment: 'No delays required',
  },
  {
    category: 'Primary inborn errors of immunity\n• SCID, complete DiGeorge syndrome',
    riskTier: 'Severe',
    mechanism: 'Genetic defects causing absent or non-functional T- and B-cell lines.',
    beforeTreatment: 'N/A (lifelong condition)',
    duringTreatment:
      'Live: STRICTLY CONTRAINDICATED\nNon-live: Safe, but requires specialist management',
    afterTreatment:
      'Permanent live vaccine contraindication unless corrected by successful stem cell or thymic transplant',
  },
  {
    category:
      'HIV / AIDS\n• CD4+ <200 cells/μL\n• CD4+ 200–499 cells/μL\n• CD4+ ≥500 cells/μL',
    riskTier: 'Tiered: severe (<200) → moderate (200–499) → mild (≥500)',
    mechanism: 'Retroviral destruction of helper CD4+ T lymphocytes.',
    beforeTreatment: 'N/A (lifelong condition)',
    duringTreatment:
      'Live: contraindicated in severe/moderate tiers; safe in mild tier\nNon-live: safe and recommended at all tiers',
    afterTreatment:
      'Live vaccines contraindicated until ART restores CD4+ to ≥500 cells/μL',
  },
  {
    category: 'Active hematological malignancies\n• Leukemia, lymphoma, myeloma',
    riskTier: 'Severe',
    mechanism: 'Malignant lines proliferate in marrow, crowding out normal immune cells.',
    beforeTreatment: 'Live: ≥4 weeks prior\nNon-live: ≥2 weeks prior',
    duringTreatment: 'Live: STRICTLY CONTRAINDICATED\nNon-live: Safe, but protection is minimal',
    afterTreatment: 'Live vaccines contraindicated until verified long-term remission',
  },
  {
    category:
      'End-stage organ failure\n• CKD (eGFR <15)\n• Advanced liver cirrhosis',
    riskTier: 'Moderate',
    mechanism: 'Uremia or hepatic failure causes functional phagocyte defects.',
    beforeTreatment: 'Complete vaccines early during organ failure decline',
    duringTreatment:
      'Live: high caution; often deferred if transplant imminent\nNon-live: safe and recommended',
    afterTreatment:
      'Risk shifts to severe immediately upon transplant and anti-rejection therapy',
  },
];
