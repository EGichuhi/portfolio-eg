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
  email: 'EUNICE.GWANJA@GMAIL.COM',
  linkedin: 'https://www.linkedin.com/in/eunicegichuhi',
  github: 'https://github.com/EGichuhi',
  resumePath: '',
}

export const experience = [
  {
    organization: 'Philip Morris International',
    title: 'B2B IT Intern',
    dates: 'Toronto, ON · April – August 2025',
    highlights: ['4 internal and external platforms', '2 hours per week', '3 cross-functional teams', '7+ system issues'],
    bullets: [
      'Integrated data workflows across 4 internal and external platforms, reducing manual processing efforts by 2 hours per week.',
      'Partnered with 3 cross-functional teams to assess business requirements, validate digital solutions, and resolve 7+ system issues, improving system performance and reliability.',
      'Supported the implementation and optimization of B2B digital tools, helping streamline business processes and improve collaboration with external partners.',
      'Assisted with system testing, troubleshooting, and documentation to support platform functionality, data accuracy, and efficient IT operations.',
    ],
    tools: ['Qualtrics', 'SAP / ERP data flows', 'JIRA', 'Confluence'],
  },
  {
    organization: 'Second Bind',
    title: 'Operations Engineer & Technology Intern',
    dates: 'January – April 2025',
    highlights: ['3 recurring operational processes', '15%'],
    bullets: [
      'Implemented automation solutions for 3 recurring operational processes, reducing task completion time by 15% and improving workflow efficiency.',
      'Analyzed existing workflows to identify process bottlenecks and opportunities for automation, supporting more efficient day-to-day operations.',
      'Supported the development and testing of AI-powered tools to streamline repetitive tasks and reduce manual intervention.',
      'Collaborated with cross-functional stakeholders to evaluate operational needs, troubleshoot workflow issues, and improve the reliability of automated processes.',
    ],
    tools: ['Operational technology', 'AI-powered automation'],
  },
  {
    organization: 'TELUS International',
    title: 'Data Analyst',
    dates: 'Remote · January – June 2024',
    highlights: ['98%'],
    bullets: [
      'Evaluated AI-generated responses against established quality guidelines, achieving 98% protocol-adherence accuracy across review tasks.',
      'Used SQL and Python in Jupyter notebooks to analyze datasets, validate information, and identify inconsistencies in AI-generated outputs.',
      'Conducted structured data reviews to identify errors, assess response quality, and support improvements in AI model performance.',
      'Applied standardized evaluation criteria to maintain data quality, document findings, and support consistent assessment of AI-generated content.',
    ],
    tools: ['SQL', 'Jupyter'],
  },
  {
    organization: 'AmLive',
    title: 'Data Engineering Intern',
    dates: 'Hybrid · January – April 2023',
    highlights: ['4%', '3 cross-functional teams'],
    bullets: [
      'Developed and maintained Python-based ETL workflows, improving data processing efficiency by 4% through streamlined data transformation procedures.',
      'Collaborated with 3 cross-functional teams to support data integration, troubleshoot pipeline issues, and improve data accessibility.',
      'Used Python and MongoDB to clean, transform, and validate datasets, strengthening data consistency and reliability across processing workflows.',
      'Assisted in optimizing data pipelines and resolving data quality issues, reducing manual data handling and supporting more efficient reporting operations.',
    ],
    tools: ['Python', 'MongoDB', 'ETL'],
  },
]

export const projects = [
  {
    number: '01',
    category: 'MACHINE LEARNING · NANOMEDICINE',
    title: 'Machine Learning for PLGA Nanoparticle Formulation Analysis',
    summary:
      'A data analysis and machine learning workflow investigating relationships between formulation characteristics and reported properties of poly(lactic-co-glycolic acid) (PLGA) nanoparticles.',
    type: 'pipeline',
    context:
      'Developed a data analysis and machine learning workflow to investigate relationships between formulation characteristics and reported properties of poly(lactic-co-glycolic acid) (PLGA) nanoparticles. Using literature-derived data from a Mendeley dataset, the project explores how formulation variables may relate to encapsulation efficiency, particle size, and drug loading capacity. The goal was to transform published experimental data into a structured dataset suitable for exploratory analysis and predictive modeling.',
    problem:
      'PLGA nanoparticle properties can vary with formulation composition and experimental conditions. However, published studies may report different formulations, measurements, and data formats, making comparisons challenging.',
    researchQuestion:
      'Can formulation descriptors extracted from published studies help explain or predict key PLGA nanoparticle properties, including encapsulation efficiency, particle size, and loading capacity?',
    approach:
      'The workflow transformed literature-derived experimental data into a structured analytical workflow for exploratory analysis and predictive modeling.',
    tools: ['Python', 'pandas', 'NumPy', 'scikit-learn', 'Matplotlib'],
    findings:
      'The project established a structured analytical approach for investigating literature-reported PLGA nanoparticle formulations and their associated properties. The workflow highlights the potential of data-driven methods to explore formulation–property relationships while recognizing that conclusions depend on dataset coverage, measurement consistency, and model validation. Quantitative predictive performance and specific formulation trends are not reported here because validated results have not yet been documented in this project summary.',
    learning:
      'This project strengthened my ability to translate literature-derived experimental data into a structured analytical workflow. It also reinforced the importance of feature selection, data quality, clear target definitions, and careful interpretation when applying machine learning to materials science and drug-delivery research.',
    detailSections: [
      {
        heading: 'Technical approach',
        subsections: [
          {
            heading: '1. Data collection and preparation',
            bullets: [
              'Used a Mendeley-hosted dataset containing literature-derived PLGA nanoparticle data as the starting point for analysis.',
              'Organized relevant formulation descriptors and nanoparticle measurements into a structured tabular format.',
              'Examined data consistency, variable definitions, and suitability for exploratory analysis and machine learning.',
            ],
          },
          {
            heading: '2. Feature selection and exploratory analysis',
            bullets: [
              'Investigated candidate variables, including encapsulation efficiency (EE), particle size, loading capacity (LC), and the lactide-to-glycolide ratio (LA/GA).',
              'Explored relationships between formulation characteristics and reported nanoparticle properties.',
              'Considered the distinction between potential model inputs and target variables to support meaningful prediction tasks.',
            ],
          },
          {
            heading: '3. Machine learning workflow',
            bullets: [
              'Used Python, pandas, and NumPy for data manipulation and feature preparation.',
              'Developed a scikit-learn workflow to establish a foundation for modeling formulation–property relationships.',
              'Used Matplotlib to support data visualization and interpretation of observed patterns.',
            ],
          },
          {
            heading: '4. Evaluation and interpretation',
            bullets: [
              'Framed model development around predicting selected nanoparticle properties from relevant formulation descriptors.',
              'Recognized the importance of data quality, consistent measurement definitions, and appropriate evaluation when combining results from different published studies.',
            ],
          },
        ],
      },
      {
        heading: 'Tools and technologies',
        bullets: [
          'Python: Data processing and analytical workflow development',
          'pandas and NumPy: Tabular data manipulation and numerical operations',
          'scikit-learn: Machine learning workflow development',
          'Matplotlib: Data visualization and exploratory analysis',
        ],
      },
      {
        heading: 'Potential applications',
        paragraphs: [
          'The workflow provides a foundation for further investigation of PLGA formulation design, including identifying candidate formulation variables for follow-up analysis and evaluating whether published data can support reliable property prediction.',
        ],
      },
    ],
    visualLabel: 'Literature-to-model workflow',
  },
  {
    number: '02',
    category: 'MATERIALS ENGINEERING · NANOPHOTONICS · POLYMER COMPOSITES · OPTICAL CHARACTERIZATION',
    title: 'Upconversion Nanoparticles in a PMMA Optical Lens',
    summary:
      'Investigated the integration of NaYF₄-based upconversion nanoparticles doped with erbium (Er³⁺) into a polymethyl methacrylate (PMMA) polymer system for an optical lens application.',
    type: 'optics',
    context:
      'Investigated the integration of NaYF₄-based upconversion nanoparticles doped with erbium (Er³⁺) into a polymethyl methacrylate (PMMA) polymer system for an optical lens application. The project connected nanomaterial synthesis and preparation with polymer-based material design and optical characterization under 980 nm near-infrared excitation. The work explored the relationship between nanoparticle preparation, composite material considerations, and the experimental methods used to characterize optical response.',
    problem:
      'How can upconversion nanomaterials be incorporated into a polymer-based optical system while accounting for material preparation, optical properties, and characterization requirements? The project required consideration of both the nanoparticle system and the polymer matrix, with attention to the preparation and testing steps relevant to an optical lens application.',
    approach:
      'The work connected nanomaterial synthesis and preparation with polymer-based material design and optical characterization under 980 nm near-infrared excitation.',
    tools: ['NaYF₄:Er³⁺', 'PMMA', '980 nm near-infrared excitation', 'Optical characterization'],
    findings:
      'The project brought together nanomaterial preparation, polymer-based optical material design, and optical characterization within a single engineering investigation. The work established a practical connection between the preparation of upconversion nanoparticles and the considerations involved in studying their use in a PMMA-based optical system. Experimental data analysis supported the investigation of the material’s optical response under 980 nm excitation. Quantitative optical performance, emission intensity, and lens efficiency are not stated here because verified numerical results have not yet been documented in this summary.',
    learning:
      'This project developed my understanding of how nanomaterial preparation, polymer processing, and optical characterization intersect in materials engineering. It also reinforced the importance of planning experiments around the properties of the material system and the requirements of the intended application.',
    detailSections: [
      {
        heading: 'Technical approach',
        subsections: [
          {
            heading: '1. Nanoparticle synthesis and material preparation',
            bullets: [
              'Conducted synthesis-related work involving NaYF₄-based erbium-doped upconversion nanoparticles.',
              'Prepared materials for investigation within the broader nanoparticle–polymer optical system.',
              'Used literature research to inform material selection, experimental planning, and preparation considerations.',
            ],
          },
          {
            heading: '2. Polymer and optical material design',
            bullets: [
              'Examined the use of PMMA as a polymer matrix for an optical lens concept incorporating upconversion nanoparticles.',
              'Considered the relationship between nanoparticle incorporation, polymer processing, and the intended optical application.',
              'Connected material preparation decisions with the practical requirements of producing and evaluating an optical composite.',
            ],
          },
          {
            heading: '3. Optical characterization',
            bullets: [
              'Investigated the optical response of the material system under 980 nm excitation.',
              'Conducted optical characterization and analyzed experimental data to support interpretation of the material’s response.',
              'Applied experimental planning and literature-based analysis to contextualize observations.',
            ],
          },
        ],
      },
      {
        heading: 'Materials and technical specifications',
        bullets: [
          'Nanomaterial: NaYF₄-based upconversion nanoparticles doped with Er³⁺.',
          'Polymer matrix: Polymethyl methacrylate (PMMA).',
          'Excitation wavelength: 980 nm near-infrared light.',
          'Application context: Polymer-based optical lens and upconversion photonics.',
          'Technical methods: Nanoparticle synthesis, material preparation, literature research, experimental planning, optical characterization, and data analysis.',
        ],
      },
      {
        heading: 'Engineering skills demonstrated',
        bullets: [
          'Nanomaterial synthesis and preparation',
          'Polymer-based material design',
          'Optical characterization and experimental data analysis',
          'Literature review and experimental planning',
          'Materials science and photonics fundamentals',
          'Laboratory experimentation and technical problem-solving',
        ],
      },
    ],
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