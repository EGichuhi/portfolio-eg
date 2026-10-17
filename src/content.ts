export const profile = {
  name: 'Eunice Gichuhi',
  location: 'Toronto, Ontario',
  coordinates: '43.6532° N / 79.3832° W',
  heroImage: '/heroimage.png',
  heroImageAlt: 'Portrait of Eunice Gichuhi',
  tagline: 'Engineering materials. Building intelligent systems.',
  introduction:
    'I connect scientific problem-solving with data-driven engineering, turning complex questions into practical technology and research workflows.',
  about:
    'My training in nanotechnology engineering gives me a materials-first view of technical problems. Across research projects, data analysis, and technology operations, I have worked where experiments meet computation and where systems need to work in practice. I am interested in applied research and engineering roles that bring those perspectives together.',
  email: '',
  linkedin: '',
  github: '',
  resumePath: '',
}

export const experience = [
  {
    organization: 'Philip Morris International',
    title: 'B2B IT Intern',
    dates: 'April – August 2025',
    description:
      'Worked across B2B partner and supplier tools on technology initiatives involving Qualtrics, AI-related workflows, and optimization. The work also touched SAP/ERP data flows, with JIRA and Confluence used alongside these initiatives.',
    tools: ['Qualtrics', 'SAP / ERP data flows', 'JIRA', 'Confluence'],
  },
  {
    organization: 'Second Bind',
    title: 'Operations Engineer & Technology Intern',
    dates: 'January – April 2025',
    description:
      'Contributed to operational technology initiatives and AI-powered automation at Second Bind. The role connected day-to-day operational needs with technology-enabled processes.',
    tools: ['Operational technology', 'AI-powered automation'],
  },
  {
    organization: 'TELUS International',
    title: 'Data Analyst',
    dates: 'January – June 2024',
    description:
      'Reviewed AI-generated responses against evaluation protocols and used SQL and Jupyter in data-analysis workflows. Maintained 98% protocol accuracy.',
    tools: ['SQL', 'Jupyter'],
  },
  {
    organization: 'AmLive',
    title: 'Data Engineering Intern',
    dates: 'January – April 2023',
    description:
      'Contributed to ETL and data-processing workflows using Python and MongoDB, bringing scripting and database tools into data engineering work.',
    tools: ['Python', 'MongoDB', 'ETL'],
  },
]

export const projects = [
  {
    number: '01',
    category: 'MACHINE LEARNING · NANOMEDICINE',
    title: 'Predicting properties of PLGA nanoparticles',
    summary:
      'A literature-derived dataset becomes a structured way to explore how formulation variables relate to nanoparticle properties.',
    type: 'pipeline',
    context:
      'PLGA nanoparticles are studied for drug delivery, but reported formulations and measurements vary across the literature. This project organizes those reports into a dataset for exploratory analysis and prediction.',
    problem:
      'Can formulation and material descriptors in published studies help explain properties such as encapsulation efficiency, particle size, and loading capacity?',
    approach:
      'Collected literature-derived records from a Mendeley dataset, prepared and explored candidate features including EE, particle size, LC, and lactide-to-glycolide ratio (LA/GA), then developed a scikit-learn modeling workflow. The emphasis is on a traceable data pipeline and thoughtful feature preparation.',
    tools: ['Python', 'pandas', 'NumPy', 'scikit-learn', 'Matplotlib'],
    findings:
      'The analysis frames literature-reported PLGA formulations as features for exploring nanoparticle properties, without making a clinical or performance claim.',
    learning:
      'Translating inconsistent published measurements into useful model inputs requires careful attention to data quality, feature definitions, and the limits of the underlying literature.',
    visualLabel: 'Literature-to-model workflow',
  },
  {
    number: '02',
    category: 'MATERIALS · PHOTONICS',
    title: 'Upconversion nanoparticles in a PMMA lens',
    summary:
      'An optical materials project bringing NaYF₄/Er nanomaterials into a polymer-processing and photonics context.',
    type: 'optics',
    context:
      'The project explored an optical material system combining NaYF₄/Er upconversion nanoparticles with PMMA.',
    problem:
      'How can nanoparticle preparation and polymer material design be considered together when planning an optical lens experiment?',
    approach:
      'Work focused on synthesis, material preparation, experimental planning, literature research, optical characterization, and data analysis. The system was considered under 980 nm excitation.',
    tools: ['NaYF₄/Er nanoparticles', 'PMMA', '980 nm excitation', 'Optical characterization'],
    findings:
      'The project brought nanoparticle synthesis and material preparation together with optical characterization under 980 nm excitation.',
    learning:
      'The project connected nanomaterial preparation choices with polymer processing and the practical requirements of optical characterization.',
    visualLabel: 'Excitation and emission',
  },
  {
    number: '03',
    category: 'COMPUTATIONAL ENGINEERING',
    title: 'COMSOL microfluidic design',
    summary:
      'Computational modeling used to reason about a microfluidic device design and its engineering constraints.',
    type: 'microfluidic',
    context:
      'This project applied computational modeling to microfluidic device design.',
    problem:
      'A microfluidic design needs to be evaluated against its intended flow behavior, geometry, and operating constraints before fabrication.',
    approach:
      'The work involved defining a design objective and using COMSOL simulation to examine relevant engineering considerations.',
    tools: ['COMSOL', 'Microfluidic design'],
    findings:
      'The project used computational modeling to examine microfluidic device design considerations.',
    learning:
      'Model assumptions and boundary conditions are central to making a simulation useful for engineering decisions.',
    visualLabel: 'Microchannel layout',
  },
  {
    number: '04',
    category: 'BIOMATERIALS · CHARACTERIZATION',
    title: 'Tissue engineering materials',
    summary:
      'Material characterization work framed around the challenge of engineering materials for biomedical applications.',
    type: 'materials',
    context:
      'This project focused on material characterization and its relevance to materials for tissue engineering.',
    problem:
      'Biomedical material design depends on understanding material properties in relation to the intended application.',
    approach:
      'The work focused on material characterization in the context of tissue engineering and biomedical applications.',
    tools: ['Materials characterization', 'Experimental planning'],
    findings:
      'Material characterization connects observed material properties with the requirements of biomedical applications.',
    learning:
      'Characterization provides evidence for comparing material behavior with application requirements.',
    visualLabel: 'Material structure',
  },
]

export const skillGroups = [
  {
    title: 'Programming & data',
    items: ['Python', 'SQL', 'pandas', 'NumPy', 'scikit-learn', 'Jupyter', 'MongoDB', 'ETL & data processing'],
  },
  {
    title: 'Engineering & research',
    items: ['Nanomaterials', 'Materials characterization', 'Experimental planning', 'Literature research', 'Optical characterization', 'Microfluidic design', 'COMSOL'],
  },
  {
    title: 'Laboratory equipment',
    items: ['Pipettes', 'Analytical balance', 'Magnetic stirrer / hot plate', 'Centrifuge', 'Sonicator', 'UV–Vis spectrophotometer', 'Fluorescence spectrometer', 'SEM', 'FTIR', 'DLS particle-size analyzer'],
  },
  {
    title: 'Technology & operations',
    items: ['SAP / ERP data flows', 'Qualtrics', 'AI-related workflows', 'Workflow automation', 'JIRA', 'Confluence'],
  },
]