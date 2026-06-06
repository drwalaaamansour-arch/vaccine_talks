export type ImmunosuppressiveDrugRow = {
  medication: string;
  targetMechanism: string;
  indications: string;
  monitoring: string;
};

export const TRADITIONAL_IMMUNOSUPPRESSIVE_DRUGS: ImmunosuppressiveDrugRow[] = [
  {
    medication: 'Corticosteroids\n(Prednisone, methylprednisolone, dexamethasone)',
    targetMechanism:
      'Broad anti-inflammatory. Stops cytokine production, depletes T cells, B cells, and eosinophils, and restricts immune cell migration to injury sites.',
    indications: 'Autoimmune diseases, asthma, urticaria (hives).',
    monitoring:
      'Long-term use risks: bone health issues, hypertension, blood sugar shifts, cataracts, and infections (including rare pneumonia). Consult before vaccinations.',
  },
  {
    medication: 'Colchicine',
    targetMechanism:
      'Neutrophil function. Reduces neutrophil activity to lower localized inflammation.',
    indications: 'Gout flares, Familial Mediterranean Fever (FMF), other autoinflammatory disorders.',
    monitoring:
      'Diarrhea, nausea, vomiting. Risk of liver, kidney, muscle damage, or cytopenias. Highly drug-interactive. Avoid grapefruit juice.',
  },
  {
    medication: 'Hydroxychloroquine\n(Plaquenil)',
    targetMechanism:
      'Immune cell signaling. Lowers general inflammatory response; may block dendritic cell activation.',
    indications: 'Lupus, rheumatoid arthritis, malaria, chronic urticaria.',
    monitoring:
      'GI upset, rash, vision changes, cytopenias. Not associated with increased infection risk. Requires regular eye exams.',
  },
  {
    medication: 'Sulfasalazine',
    targetMechanism:
      'Prostaglandin formation. Active component (5-aminosalicylate) gradually reduces inflammation.',
    indications: 'Rheumatoid arthritis, juvenile RA, psoriatic arthritis, ulcerative colitis.',
    monitoring:
      'Nausea, headache, sun sensitivity, rash, orange urine, temporary low sperm count. Avoid if sulfa- or salicylate-allergic; caution in G6PD deficiency. Monitor blood counts.',
  },
  {
    medication: 'Dapsone',
    targetMechanism:
      'Bacterial folate synthesis. Prevents free radical cell injury and inhibits leukotrienes/prostaglandins.',
    indications: 'Leprosy/infections, dermatitis herpetiformis, other autoimmune conditions.',
    monitoring:
      'GI upset, rash, headache. Less common: mood changes, cytopenias, liver/kidney damage, male infertility. Avoid if sulfa-allergic; caution in G6PD deficiency.',
  },
  {
    medication: 'Methotrexate',
    targetMechanism:
      'Folic acid utilization. Blocks folic acid use, halting DNA/RNA generation needed for T- and B-cell growth.',
    indications: 'Rheumatoid arthritis, autoimmune diseases, certain cancers.',
    monitoring:
      'Higher bacterial/viral infection risk. Screen for hepatitis B/C; routine liver/kidney tests. Folic acid often co-prescribed to reduce toxicity.',
  },
  {
    medication: 'Mycophenolate mofetil\n(CellCept, Myfortic)',
    targetMechanism:
      'IMPDH enzyme. Blocks IMPDH required for DNA/RNA synthesis in T and B cells.',
    indications: 'Autoimmune diseases, solid organ transplant rejection prevention.',
    monitoring:
      'Higher bacterial/viral infection risk. Screen for hepatitis B/C; ongoing blood/liver/kidney monitoring. Avoid live vaccines.',
  },
  {
    medication: 'Azathioprine\n(Imuran)',
    targetMechanism:
      'DNA synthesis. Mimics DNA components to disrupt synthesis, slowing T- and B-cell division.',
    indications: 'Autoimmune diseases, transplant rejection prevention.',
    monitoring:
      'Increased viral/bacterial infection risk. Hepatitis B/C screening; TPMT testing may precede therapy. Monitor blood/liver/kidney. May increase malignancy risk.',
  },
];

export const CYTOKINE_AND_JAK_INHIBITORS: ImmunosuppressiveDrugRow[] = [
  {
    medication: 'Anti-IL-1 biologics\n(Anakinra/Kineret, Canakinumab/Ilaris, Rilonacept/Arcalyst)',
    targetMechanism:
      'Interleukin-1 (IL-1). Blocks IL-1 to suppress early fever and joint/tissue inflammation.',
    indications:
      'CAPS (including FCAS, Muckle-Wells), systemic juvenile idiopathic arthritis, rheumatoid arthritis.',
    monitoring:
      'Injection site reactions, serious bacterial infections, cytopenias.',
  },
  {
    medication:
      'Anti-TNF biologics\n(Etanercept/Enbrel, Infliximab/Remicade, Adalimumab/Humira, Certolizumab/Cimzia, Golimumab/Simponi)',
    targetMechanism:
      'Tumor necrosis factor (TNF). Blocks TNF to stop downstream inflammation in joints, skin, and gut.',
    indications:
      'RA, psoriasis, psoriatic arthritis, IBD (Crohn\'s, UC), ankylosing spondylitis.',
    monitoring:
      'Serious bacterial, fungal, and viral infections (especially TB reactivation). Screen for TB and hepatitis B/C before starting.',
  },
  {
    medication: 'Anti-IL-6 biologics\n(Tocilizumab/Actemra, Sarilumab/Kevzara)',
    targetMechanism:
      'Interleukin-6 (IL-6). Blocks IL-6 to halt systemic inflammation and acute-phase responses.',
    indications:
      'RA, giant cell arteritis, systemic/polyarticular JIA, cytokine release syndrome (CRS).',
    monitoring:
      'Upper respiratory infections, leukopenia, thrombocytopenia, elevated liver enzymes, hyperlipidemia. Rare bowel perforation.',
  },
  {
    medication: 'JAK inhibitors\n(Tofacitinib/Xeljanz, Upadacitinib/Rinvoq, Baricitinib/Olumiant)',
    targetMechanism:
      'Janus kinase (JAK) pathways. Oral small molecules blocking intracellular inflammatory cytokine signaling.',
    indications: 'RA, psoriatic arthritis, ulcerative colitis, atopic dermatitis, alopecia areata.',
    monitoring:
      'Serious infections (notably shingles, TB, fungal). Cytopenias, elevated lipids, thrombosis, major cardiac events, and malignancy risk.',
  },
];

export const B_CELL_AND_SELECTIVE_BIOLOGICS: ImmunosuppressiveDrugRow[] = [
  {
    medication:
      'Anti-CD20 biologics\n(Rituximab/Rituxan, Ocrelizumab/Ocrevus, Ofatumumab/Kesimpta)',
    targetMechanism:
      'CD20 on B cells. Depletes B cells from circulation, preventing autoantibody production.',
    indications: 'RA, ANCA vasculitis, pemphigus vulgaris, multiple sclerosis, certain lymphomas.',
    monitoring:
      'Viral reactivation (hepatitis B, shingles). Hypogammaglobulinemia over time. Infusion reactions common with first dose.',
  },
  {
    medication: 'Belimumab\n(Benlysta)',
    targetMechanism:
      'BLyS/BAFF protein. Prevents B-cell activating factor binding, causing abnormal B cells to undergo apoptosis.',
    indications: 'Systemic lupus erythematosus (SLE), lupus nephritis.',
    monitoring:
      'Infusion/injection reactions, GI upset, mood changes. Infection risk increased but generally less than broad B-cell depleters.',
  },
  {
    medication: 'Abatacept\n(Orencia)',
    targetMechanism:
      'T-cell co-stimulation. Binds CD80/CD86 on antigen-presenting cells, blocking T-cell activation signals.',
    indications: 'Rheumatoid arthritis, psoriatic arthritis, juvenile idiopathic arthritis.',
    monitoring:
      'Infections (especially upper respiratory). Do not combine with anti-TNF biologics (extreme infection risk). TB/hepatitis screening required.',
  },
  {
    medication:
      'Anti-IL-17 biologics\n(Secukinumab/Cosentyx, Ixekizumab/Taltz, Brodalumab/Siliq)',
    targetMechanism:
      'Interleukin-17 (IL-17). Blocks IL-17 to reduce skin and joint tissue inflammation.',
    indications: 'Plaque psoriasis, psoriatic arthritis, ankylosing spondylitis.',
    monitoring:
      'Localized fungal infections (e.g., oral thrush). May trigger or worsen IBD. Mild upper respiratory infections.',
  },
  {
    medication:
      'Anti-IL-12 / IL-23 biologics\n(Ustekinumab/Stelara, Risankizumab/Skyrizi, Guselkumab/Tremfya)',
    targetMechanism:
      'Interleukin-12 and/or IL-23. Blocks cytokines that drive overactive T-cell pathways in skin and gut.',
    indications: 'Plaque psoriasis, psoriatic arthritis, Crohn\'s disease, ulcerative colitis.',
    monitoring:
      'Generally well tolerated. Upper respiratory infections, headache, injection-site fatigue. TB screening before initiation.',
  },
];
