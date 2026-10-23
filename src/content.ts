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
    category: 'COMPUTATIONAL MATERIALS SCIENCE · MACHINE LEARNING · NANOBIOTECHNOLOGY · DRUG DELIVERY',
    title: 'Machine Learning-Guided Optimization of PLGA Nanoparticles for Breast Cancer Drug Delivery',
    summary:
      'A predictive framework using literature-derived formulation data to explore how PLGA material properties, drug characteristics, and manufacturing parameters relate to nanoparticle outcomes for breast cancer drug delivery.',
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
      {
        heading: 'Project overview and objectives',
        paragraphs: [
          'How can machine learning help researchers identify promising nanoparticle formulations without relying exclusively on repeated laboratory experiments? This project explored a data-driven approach to optimizing poly(lactic-co-glycolic acid) (PLGA) nanoparticles for breast cancer drug delivery. By combining formulation data from published research, engineering relevant features, and evaluating machine learning models, the project investigated how material properties, drug characteristics, and manufacturing parameters relate to key nanoparticle outcomes.',
          'The goal was to develop a reusable predictive framework that could help researchers screen potential formulations, understand the factors influencing their properties, and prioritize candidates for future experimental testing.',
          'Application: breast cancer drug delivery. Material system: PLGA polymeric nanoparticles. Dataset: 348 compiled formulation records. Programming: Python. Machine learning approaches: Random Forest, XGBoost, Support Vector Regression (SVR), and Gaussian Process Regression (GPR). Key outcomes of interest: encapsulation efficiency, particle size, and drug loading. Course: NE 459 — Microfluidics and Nanobiotechnological Systems.',
        ],
        subsections: [
          {
            heading: 'Project objectives',
            bullets: [
              'Build a structured dataset by combining breast cancer-specific PLGA nanoparticle data with a broader collection of PLGA formulations.',
              'Prepare the data for modelling by cleaning and standardizing formulation records, addressing missing information, and transforming material and molecular characteristics into usable features.',
              'Evaluate predictive approaches by comparing machine learning models for estimating encapsulation efficiency, particle size, and drug loading.',
              'Explore formulation screening and establish a framework that could help rank hypothetical formulations for further investigation and be extended to additional drugs or polymer systems.',
            ],
          },
        ],
      },
      {
        heading: 'Engineering challenge',
        paragraphs: [
          'Conventional chemotherapy can be limited by low drug bioavailability, rapid clearance, insufficient tumor specificity, and unintended effects on healthy tissues. Polymeric nanoparticles offer a potential way to improve drug delivery by encapsulating therapeutic compounds and enabling formulation-dependent release characteristics.',
          'Nanoparticle performance depends on several interacting variables, including polymer composition, molecular weight, drug properties, drug-to-polymer ratio, and synthesis method. Small changes in these parameters can influence encapsulation efficiency, particle size, and drug loading. Determining an effective formulation through trial-and-error experimentation can require considerable time, materials, and laboratory resources.',
          'The challenge was to determine whether data from existing research could be organized into a machine learning framework to identify relationships between formulation inputs and important nanoparticle properties.',
        ],
      },
      {
        heading: 'Dataset development and feature engineering',
        paragraphs: [
          'A key part of the project was turning information from different research datasets into a consistent structure suitable for analysis. The compiled dataset contained 348 formulation records: approximately 35 breast cancer-specific entries and 313 records from a broader PLGA formulation dataset. The workflow included data cleaning, standardization, feature engineering, and preparation of categorical and numerical variables for modelling.',
          'These steps helped bring heterogeneous literature data into a common analytical framework.',
        ],
        subsections: [
          {
            heading: 'Formulation features',
            bullets: [
              'Polymer characteristics: lactide-to-glycolide (LA) ratio and polymer molecular weight.',
              'Processing parameters: synthesis method and drug-to-polymer ratio.',
              'Drug characteristics: molecular descriptors representing relevant chemical properties, including lipophilicity.',
              'Converted the LA ratio into a numerical format, encoded categorical synthesis-method information, and included RDKit molecular descriptors to represent drug chemistry.',
            ],
          },
        ],
      },
      {
        heading: 'Machine learning methodology',
        paragraphs: [
          'The modelling workflow was designed to compare predictive approaches and investigate how formulation inputs relate to nanoparticle properties. Random Forest and XGBoost were highlighted in the report’s principal modelling framework.',
        ],
        subsections: [
          {
            heading: 'Model comparison',
            bullets: [
              'Random Forest: used to model potentially nonlinear relationships between formulation characteristics and predicted outcomes.',
              'XGBoost: included as a gradient-boosting approach for structured formulation data.',
              'Support Vector Regression (SVR): considered as an alternative method for modelling relationships between inputs and continuous outputs.',
              'Gaussian Process Regression (GPR): included as another regression approach for comparison.',
            ],
          },
          {
            heading: 'Training and evaluation',
            bullets: [
              'The proposed evaluation workflow used an 80/20 training and test split, with hyperparameter tuning and cross-validation included in the methodology.',
              'R² was identified to assess how well model predictions explain variation in target values.',
              'Mean Absolute Error (MAE) was identified to measure the average absolute difference between predicted and observed values.',
              'The principal prediction targets were encapsulation efficiency (EE%), particle size, and drug loading.',
              'Evaluating multiple models and more than one performance metric provided a structured basis for comparing their suitability for formulation prediction.',
            ],
          },
        ],
      },
      {
        heading: 'Understanding formulation–property relationships',
        paragraphs: [
          'Beyond predicting numerical outcomes, the project investigated which input variables could be most influential in determining formulation properties. The report’s abstract identifies three important factors in its feature-importance analysis:',
        ],
        bullets: [
          'LA ratio, representing the composition of the PLGA polymer.',
          'Drug lipophilicity, representing a chemical characteristic of the therapeutic compound.',
          'Synthesis method, representing how the formulation was produced.',
          'These findings highlight why nanoparticle optimization benefits from considering material composition, drug chemistry, and processing conditions together rather than treating each variable in isolation.',
          'Feature-importance analysis can help guide subsequent investigation, although it does not by itself establish causation or prove that changing one variable will produce a particular experimental outcome.',
        ],
      },
      {
        heading: 'Virtual screening and potential application',
        paragraphs: [
          'The project proposed a virtual-screening workflow in which candidate formulations could be evaluated computationally before being selected for laboratory investigation. In principle, such a workflow could help researchers define candidate combinations of polymer properties, drug characteristics, and processing parameters; estimate relevant nanoparticle properties using trained models; compare predicted outcomes across candidate formulations; and prioritize promising candidates for experimental validation.',
          'This approach could reduce the number of formulations requiring immediate physical testing and help researchers make more systematic use of existing literature data. The framework was also designed with future adaptability in mind, including the possibility of incorporating additional drugs, polymers, and formulation characteristics.',
          'These are intended applications of the modelling framework; computational predictions would still require appropriate experimental validation before being relied upon in drug-development decisions.',
        ],
      },
      {
        heading: 'Limitations and future development',
        subsections: [
          {
            heading: 'Data quality and consistency',
            bullets: [
              'Literature-derived datasets may contain missing values, inconsistent reporting practices, and differences in experimental methods. These factors can limit the reliability and generalizability of predictions.',
            ],
          },
          {
            heading: 'Model validation',
            bullets: [
              'Predictive performance should be assessed using documented test results and, ideally, independent formulations not used during model development.',
            ],
          },
          {
            heading: 'Additional biological information',
            bullets: [
              'Incorporating drug-release kinetics, in vitro biological results, and eventually in vivo data could provide a more comprehensive picture of formulation performance.',
            ],
          },
          {
            heading: 'Experimental confirmation',
            bullets: [
              'A formulation predicted to have favourable properties is a candidate for further testing, not proof of improved therapeutic efficacy or successful tumor targeting.',
              'Future development could focus on expanding the dataset, strengthening validation, and linking computational screening to targeted laboratory experiments.',
            ],
          },
        ],
      },
      {
        heading: 'Skills and technical methods',
        subsections: [
          {
            heading: 'Programming and data analysis',
            bullets: [
              'Python-based data processing and analysis.',
              'Dataset cleaning and standardization.',
              'Numerical and categorical feature preparation.',
              'Exploratory analysis of formulation variables.',
            ],
          },
          {
            heading: 'Machine learning',
            bullets: [
              'Regression model comparison using Random Forest and XGBoost, with SVR and GPR as alternative approaches.',
              'Train/test evaluation using R² and MAE.',
              'Feature-importance analysis.',
            ],
          },
          {
            heading: 'Materials and nanobiotechnology',
            bullets: [
              'PLGA formulation parameters.',
              'Nanoparticle encapsulation efficiency and drug loading.',
              'Polymer–drug formulation relationships.',
              'Research-data interpretation for nanomedicine applications.',
            ],
          },
          {
            heading: 'Engineering problem-solving',
            bullets: [
              'Translating a materials optimization problem into a predictive modelling workflow.',
              'Integrating information from multiple data sources.',
              'Evaluating the potential and limitations of computational screening.',
              'Identifying opportunities for future experimental validation.',
            ],
          },
        ],
      },
      {
        heading: 'Key takeaway',
        paragraphs: [
          'This project brought together materials science, nanobiotechnology, data analysis, and machine learning to investigate a practical formulation-optimization problem. It demonstrated how existing research data can be structured into a predictive workflow and used to explore relationships between polymer characteristics, drug chemistry, manufacturing methods, and nanoparticle properties.',
          'The broader engineering lesson was that computational tools can help narrow the search for promising materials and formulations—while careful data preparation, transparent model evaluation, and experimental validation remain essential to translating predictions into reliable applications.',
        ],
      },
    ],
    visualLabel: 'Literature-to-model workflow',
  },
  {
    number: '02',
    category: 'MATERIALS ENGINEERING · NANOMATERIALS · POLYMER FORMULATION · OPTICAL SYSTEMS',
    title: 'Development of a UCNP–PMMA Optical Upconversion Lens',
    summary:
      'Developed and evaluated a PMMA optical coating containing purchased NaYF₄:Er³⁺ upconversion nanoparticles, then integrated the lens element into a three-lens monocular prototype.',
    type: 'optics',
    context:
      'Developed a portable optical system to investigate conversion of near-infrared (NIR) excitation into visible light using an upconversion nanoparticle–polymer composite lens. This multidisciplinary engineering project investigated the integration of commercially purchased NaYF₄:Er³⁺ upconversion nanoparticles (UCNPs) into a polymethyl methacrylate (PMMA) matrix as an optical coating for a monocular viewing system. Rather than synthesizing the nanoparticles, I characterized the materials, prepared PMMA solutions, compared composite formulations at different nanoparticle loadings, and used dynamic light scattering (DLS), UV–Vis spectroscopy, and scanning electron microscopy (SEM) to investigate particle-size distributions, optical characteristics, and coating morphology. Selected formulations were deposited onto PMMA lens substrates and integrated into a three-lens monocular prototype with a custom 3D-printed enclosure. Intermediate characterization results were promising, but the completed optical system demonstrated limited visible upconversion, highlighting the challenge of translating material-level observations into effective integrated-device performance.',
    problem:
      'The central challenge was to develop a transparent, lightweight optical component that could interact with near-infrared excitation and generate visible emission without significantly degrading image clarity. The composite needed sufficient nanoparticle loading for detectable upconverted emission, while excessive loading or aggregation could increase scattering, create haze, and reduce transmitted-image quality. The film also had to be integrated into an optical system with suitable lens geometry, component spacing, mechanical packaging, and environmental durability. Customer design requirements were at least 5% upconversion efficiency, at least 85% lens transparency, a tunable focal-length range of 10–50 mm, overall device length below 15 cm, diameter below 3 cm, weight below 100 g, and target lens cost below CAD $50. These were design requirements, not all verified final achievements.',
    approach:
      'Purchased NaYF₄:Er³⁺ nanoparticles were characterized and combined with PMMA dissolved in chloroform. Formulations at 2 wt% and 5 wt% UCNP loading were compared using DLS, UV–Vis spectroscopy, and SEM; selected composites were spin-coated onto PMMA lens substrates and integrated into a three-lens monocular. The prototype was assessed through theoretical calculations and practical mechanical tests.',
    tools: ['NaYF₄:Er³⁺ UCNPs', 'PMMA', 'Chloroform', 'DLS', 'UV–Vis spectroscopy', 'SEM', 'Spin coating', '980 nm NIR excitation', 'Geometric optics', '3D-printed enclosure'],
    findings:
      'The 5 wt% composite exhibited a stronger measured optical signal than the 2 wt% formulation, and layer count also influenced the spectral response. Broader DLS distributions in composite samples suggested possible aggregation or heterogeneous dispersion. Despite promising intermediate characterization results, the completed monocular showed limited visible upconversion, demonstrating that material preparation, coating quality, optical alignment, excitation conditions, and conversion efficiency must work together. The approximately 5% efficiency value was a design benchmark, not a measured efficiency of the completed prototype.',
    learning:
      'This project connected materials engineering with optical-system design, from characterization of purchased nanoparticles and polymer-composite formulation through coating fabrication and prototype testing. It strengthened my understanding of how dispersion behaviour, nanoparticle loading, film thickness, optical transmission, and system geometry interact. Most importantly, it demonstrated the value of evaluating materials both in the laboratory and at the integrated-device level: a promising formulation is only one part of a successful engineering solution and must be validated in its intended system.',
    detailSections: [
      {
        heading: 'Materials and experimental methodology',
        subsections: [
          {
            heading: '1. Nanoparticle characterization and polymer preparation',
            bullets: [
              'Used commercially purchased NaYF₄:Er³⁺ nanoparticles as the upconversion material and PMMA as the polymer matrix; nanoparticle synthesis was outside the scope of the work.',
              'Dissolved PMMA in chloroform, then combined the nanoparticle dispersion and PMMA solution to produce UCNP–PMMA composite mixtures.',
              'Considered dispersion stability, nanoparticle aggregation, solution uniformity, and suitability for deposition onto an optical substrate.',
              'Characterized materials and prepared PMMA solutions before developing and testing the composite formulations.',
            ],
          },
          {
            heading: '2. Formulation development and concentration selection',
            bullets: [
              'Investigated different nanoparticle loading concentrations to balance optical activity and transparency, focusing on 2 wt% and 5 wt% UCNP loading in the PMMA composite.',
              'The 2 wt% formulation was a lower-loading candidate intended to preserve optical clarity while providing sufficient nanoparticle content for upconversion.',
              'The 5 wt% formulation tested whether increased nanoparticle concentration could improve optical interaction and emission while maintaining acceptable transparency.',
              'Informed the formulation range using reference literature on UCNP–polymer composites, then evaluated mixtures using characterization data and optical observations before selecting candidates for coating and integration.',
            ],
          },
        ],
      },
      {
        heading: 'Material characterization',
        subsections: [
          {
            heading: 'Dynamic light scattering (DLS)',
            bullets: [
              'Compared hydrodynamic size distributions of the nanoparticle dispersion, polymer-related samples, and composite formulations.',
              'Composite samples exhibited increased hydrodynamic size relative to pure nanoparticle and pure polymer comparison samples, with broader distributions than the best-performing UCNP-only dispersion.',
              'These observations were consistent with changes in the particles’ surrounding environment and suggested possible clustering or heterogeneous dispersion during solvent exchange and mixing.',
              'The results highlighted the importance of controlling dispersion quality when incorporating nanoparticles into polymer-based optical materials.',
            ],
          },
          {
            heading: 'UV–Vis spectroscopy',
            bullets: [
              'Examined optical characteristics across approximately 450–1100 nm, including the near-infrared region relevant to the 980 nm excitation source. Compared nanoparticle dispersions in chloroform and hexane, composite formulations at different loadings, and coated lens samples under different loading and layer conditions.',
              'The chloroform dispersion showed a higher and more structured measured optical signal than the hexane dispersion, reaching approximately 0.16 near 1050 nm with a secondary feature near 975 nm.',
              'The hexane dispersion produced a comparatively lower, flatter signal, with a feature near 950 nm at approximately 0.075.',
              'The difference was consistent with variations in dispersion stability and effective particle concentration, although spectral measurements alone could not establish the cause.',
              'The 5 wt% composite exhibited higher overall absorbance and more prominent spectral features than the 2 wt% composite.',
              'Increasing the number of coating layers increased overall optical interaction with the film, but excessive thickness also introduced wavelength-dependent scattering.',
              'The three-layer, 5 wt% configuration showed relatively stable spectral behaviour with identifiable features in the 900–1050 nm region and was considered the most suitable candidate for the intended application.',
              'These measurements supported formulation comparisons but did not, by themselves, establish final-device upconversion efficiency or image quality.',
            ],
          },
          {
            heading: 'Scanning electron microscopy (SEM)',
            bullets: [
              'Examined surface morphology and coating uniformity on four selected coated samples: Sample A (2 wt% UCNP, single layer), Sample B (2 wt%, three layers), Sample C (5 wt%, single layer), and Sample D (5 wt%, three layers).',
              'Images were acquired at multiple magnifications, including 200×, 2,000×, 10,000×, and 30,000× for Sample B.',
              'At 200× magnification, samples showed largely smooth substrate surfaces without major visible cracking or delamination, supporting the observation of generally good coating adhesion across tested conditions.',
              'SEM provided a complementary view of coating morphology that could not be obtained from bulk optical measurements alone.',
            ],
          },
        ],
      },
      {
        heading: 'Lens fabrication and optical system design',
        subsections: [
          {
            heading: '1. Composite-film deposition',
            bullets: [
              'Deposited the selected UCNP–PMMA formulation onto a PMMA lens substrate to create the upconversion lens element.',
              'The laboratory procedure specified spin coating: 500 rpm for 10 seconds for initial solution spreading, followed by 3,000 rpm for 30 seconds for film thinning and formation of a more uniform coating.',
              'Specified target film thicknesses were approximately 200–500 nm per layer and 900–1,500 nm for three-layer films. These were process targets; actual thickness measurements were not available in the project notes.',
              'Prepared multiple-layer samples to investigate how increased coating thickness and nanoparticle loading affected optical response.',
            ],
          },
          {
            heading: '2. Three-lens monocular architecture',
            bullets: [
              'The final prototype used a three-lens optical arrangement to collect incoming light, interact with the upconversion element, and relay the resulting visible signal toward the viewing plane.',
              'Lens 1: 20 mm focal length, 18 mm diameter. Lens 2: 15 mm focal length, 12.7 mm diameter. Lens 3: 15 mm focal length, 12.7 mm diameter.',
              'Lens 1 served as the primary collection element. The upconversion film was positioned approximately 20.69 mm from the first lens’s focal point, slightly beyond the focal plane, to distribute the incident beam over a larger film area rather than concentrate it at the smallest focal spot.',
              'Lenses 2 and 3 were intended to relay visible emission toward the output image plane. Their spacing was based on geometric-optics relationships, with specified focal-point separations of 52.06 mm between the first and second lenses and 43.26 mm between the second and third lenses.',
              'The assembly incorporated two 950 nm long-pass filters and a custom 3D-printed enclosure. The filters and enclosure formed part of optical and mechanical integration; the precise filter function and measured image performance would need confirmation from final design documentation.',
            ],
          },
        ],
      },
      {
        heading: 'Prototype verification and durability testing',
        paragraphs: [
          'The team evaluated the prototype against the original customer requirements using theoretical calculations and practical testing.',
        ],
        bullets: [
          'Upconversion efficiency: steady-state rate-equation analysis examined expected conversion behaviour of the nanoparticle system.',
          'Optical transmission: Beer–Lambert-law calculations assessed the relationship between optical attenuation and lens transparency.',
          'Thermal considerations: Arrhenius-equation analysis examined temperature-dependent material degradation.',
          'Mass and packaging: mass calculations were compared with target device dimensions and weight.',
          'Mechanical durability: repeated drop tests used different orientations and a surface consisting of grass, soil, and stones.',
          'Three repeated trials were conducted for each drop orientation. Alongside room-temperature tests, the device underwent low-temperature conditioning in a freezer for 30 minutes before drop testing.',
          'According to project notes, the prototype withstood the reported drop tests without structural failure or visible damage under the tested conditions. Exact test temperatures and complete drop-test specifications should be included in the final report if available.',
          'Passing these tests supports mechanical robustness under the tested conditions; it does not establish durability under every outdoor environment.',
        ],
      },
      {
        heading: 'Results and engineering interpretation',
        subsections: [
          {
            heading: '1. Nanoparticle loading and coating thickness influenced optical behaviour',
            bullets: [
              'The 5 wt% composite showed a stronger measured optical signal than the 2 wt% formulation.',
              'Layer count also influenced the spectral response, demonstrating that formulation concentration and coating thickness should be considered together.',
            ],
          },
          {
            heading: '2. Dispersion quality remained an important materials challenge',
            bullets: [
              'Broader DLS distributions in composite samples suggested possible aggregation or heterogeneous dispersion.',
              'Such behaviour can complicate optical performance by increasing scattering and reducing composite uniformity.',
            ],
          },
          {
            heading: '3. Promising material-level observations did not translate into strong system-level upconversion',
            bullets: [
              'Despite promising intermediate characterization results, the final monocular showed limited visible upconversion.',
              'Material preparation, coating quality, optical alignment, excitation conditions, and upconversion-process efficiency must all be considered together.',
              'The approximately 5% efficiency figure was a design benchmark in the project requirements, not the measured efficiency of the completed prototype unless confirmed by a corresponding experimental measurement.',
            ],
          },
        ],
      },
      {
        heading: 'Engineering skills demonstrated',
        bullets: [
          'Nanoparticle characterization and polymer-composite formulation',
          'DLS, UV–Vis spectroscopy, and SEM',
          'Experimental planning and comparative formulation testing',
          'Thin-film coating and optical-material preparation',
          'Geometric optics and multi-lens system integration',
          'Technical calculations and design verification',
          'Mechanical prototype testing and failure assessment',
          'Interpretation of experimental results and engineering trade-offs',
        ],
      },
    ],
    visualLabel: '980 nm excitation and upconversion',
  },
  {
    number: '03',
    category: 'MICROFLUIDICS · CAD · SIMULATION · EXPERIMENTAL VALIDATION',
    title: 'Microfluidic Device Design & Experimental Validation',
    summary:
      'Designed a Y-junction and serpentine microfluidic device in AutoCAD, evaluated it in COMSOL Multiphysics, then fabricated and tested it in a laboratory.',
    type: 'microfluidic',
    context:
      'Designed a microfluidic device featuring a Y-shaped starting junction and a serpentine channel layout. The design was developed in AutoCAD, transferred to COMSOL Multiphysics for simulation, and then fabricated and tested in a laboratory. The project focused on connecting digital design and simulation with physical experimentation to demonstrate fluid behaviour in a compact microchannel network. This project applied computational modeling to microfluidic device design.',
    problem:
      'A microfluidic design needs to be evaluated against its intended flow behavior, geometry, and operating constraints before fabrication. The device geometry incorporated a Y-shaped junction as the starting section of the channel network, a serpentine channel to create a winding flow path within a compact footprint, and compact device geometry designed to make fluid behaviour observable during laboratory testing.',
    approach:
      'The work involved defining a design objective and using COMSOL simulation to examine relevant engineering considerations. The device geometry was created in AutoCAD and transferred into COMSOL Multiphysics to evaluate its expected behaviour before fabrication.',
    tools: ['AutoCAD', 'COMSOL Multiphysics', '3D CAD modelling', 'Microfluidic design', 'Simulation-based evaluation', 'Device fabrication', 'Laboratory experimentation', 'Experimental observation'],
    findings:
      'Following simulation, the device was fabricated and used in a laboratory experiment. Images were captured to document the observed behaviour within the microchannels. The experimental observations were consistent with the behaviour expected from the COMSOL simulation, providing a practical comparison between the digital model and the fabricated design. The project used computational modeling to examine microfluidic device design considerations.',
    learning:
      'Model assumptions and boundary conditions are central to making a simulation useful for engineering decisions. The project demonstrated an end-to-end engineering workflow, from CAD design and computational evaluation to fabrication and experimental testing. It strengthened my experience in 3D device design, multiphysics simulation, and validating engineering designs through physical experiments.',
    visualLabel: 'Microchannel layout',
  },
  {
    number: '04',
    category: 'UNDERGRADUATE RESEARCH · NANOTECHNOLOGY ENGINEERING · UNIVERSITY OF WATERLOO',
    title: 'Engineering Neural Scaffolds for Spinal Cord Regeneration',
    summary:
      'Research into how biomaterial scaffold composition, architecture, and cell–material interactions may support neural tissue repair following spinal cord injury.',
    type: 'materials',
    context:
      'As an undergraduate research project in Nanotechnology Engineering at the University of Waterloo, this work explored the application of biomaterial scaffolds in spinal cord regeneration. The research examined biological challenges associated with spinal cord regeneration, the roles of different neural cell populations, and interactions between scaffold properties and the cellular microenvironment. A central focus was understanding how scaffold architecture, material composition, and biological compatibility influence the environment surrounding injured neural tissue. These factors are important when investigating strategies to support cell survival, neural growth, tissue organization, and the potential restoration of neural connections.',
    problem:
      'Spinal cord repair involves specialized neural and supporting cell populations, a complex injury environment, and biological conditions that can inhibit regeneration. Scaffold composition and architecture must be considered alongside cellular responses and interactions with the surrounding extracellular matrix. Understanding these interdependent factors is important when exploring how engineered materials may provide a more supportive environment for neural repair.',
    approach:
      'Conducted a research-focused investigation of neural cell populations, scaffold materials and structural design, cell–material interactions, neural growth, and biomaterial characterization considerations relevant to spinal cord regeneration.',
    tools: ['Tissue engineering', 'Neural regeneration', 'Biomaterial scaffolds', 'Neural cell biology', 'Cell differentiation', 'Cell–material interactions', 'Extracellular matrix', 'Material characterization', 'Scientific literature review'],
    findings:
      'The research highlighted that scaffold composition, architecture, and cellular interactions must be considered together when investigating strategies for spinal cord repair. Scaffold properties may influence cell survival, migration, differentiation, axonal extension, and tissue organization, while inflammation, inhibitory signals, and glial-scar formation remain important biological challenges. This work provides a research framework and does not claim a fabricated scaffold or experimentally demonstrated regenerative outcome.',
    learning:
      'This research explored the intersection of nanotechnology, biomaterials, and regenerative medicine. It provided a framework for understanding how engineering principles can be applied to complex biological challenges, particularly where tissue structure, specialized cell populations, and the surrounding injury environment influence regenerative potential.',
    detailSections: [
      {
        heading: 'Neural cell types and regenerative processes',
        paragraphs: [
          'The research considered how cellular specialization, proliferation, differentiation, and interactions between neural and supporting cells affect the challenges of spinal cord repair.',
        ],
        bullets: [
          'Neurons: specialized cells responsible for transmitting electrical and chemical signals. Their axons must sometimes regenerate across damaged regions for neural connections to be restored.',
          'Neural stem cells and progenitor cells: cell populations with the capacity for self-renewal and differentiation into certain neural cell types, depending on their biological context.',
          'Astrocytes: glial cells that support neural function and contribute to the tissue response following injury, including formation of a glial scar.',
          'Oligodendrocytes: cells responsible for producing myelin around central nervous system axons, supporting efficient nerve signal transmission.',
          'Microglia: resident immune cells of the central nervous system that participate in inflammatory responses and tissue maintenance.',
        ],
      },
      {
        heading: 'Scaffold materials and structural design',
        paragraphs: [
          'Biomaterial scaffolds are engineered structures intended to provide physical and biochemical support for regenerating tissue. Relevant design considerations include:',
        ],
        bullets: [
          'Biocompatibility: limiting harmful cellular responses while providing an environment suitable for neural tissue.',
          'Porosity and architecture: providing space for cell interactions, nutrient transport, and potential axonal growth.',
          'Mechanical properties: considering scaffold stiffness and flexibility in relation to the delicate mechanical environment of spinal cord tissue.',
          'Surface chemistry: understanding how material surfaces and biological cues influence cell adhesion and cellular responses.',
          'Biodegradability: considering materials that can degrade at an appropriate rate as tissue develops, where biodegradable scaffolds are used.',
        ],
      },
      {
        heading: 'Cell–material interactions and neural growth',
        paragraphs: [
          'The research examined how the surrounding extracellular matrix, adhesion molecules, and biochemical signals influence neural cell behaviour. These interactions are relevant to cell survival, migration, differentiation, and axonal extension.',
          'It also considered how scaffold design may help provide structural guidance for growing axons and create a more supportive environment within an injured spinal cord. Material properties must be balanced with the biological challenges posed by inflammation, inhibitory signals, and the formation of a glial scar.',
        ],
      },
      {
        heading: 'Biomaterial characterization and evaluation',
        paragraphs: [
          'The work connected materials science principles with the evaluation of scaffolds for neural tissue engineering. Relevant characterization considerations included material morphology, pore structure, surface properties, mechanical behaviour, and degradation characteristics.',
          'These properties help inform whether a scaffold is suitable for a particular regenerative application and how its physical and chemical features may influence biological performance.',
        ],
      },
      {
        heading: 'Engineering perspective',
        paragraphs: [
          'This research explored the intersection of nanotechnology, biomaterials, and regenerative medicine. It highlighted how scaffold composition, architecture, and cellular interactions must be considered together when developing strategies for spinal cord repair.',
          'The project provided a framework for understanding how engineering principles can be applied to complex biological challenges, particularly where tissue structure, specialized cell populations, and the surrounding injury environment influence regenerative potential.',
        ],
      },
      {
        heading: 'Technical areas',
        bullets: [
          'Tissue engineering',
          'Neural regeneration',
          'Biomaterial scaffolds',
          'Neural cell biology',
          'Cell differentiation',
          'Cell–material interactions',
          'Extracellular matrix',
          'Material characterization',
          'Scientific literature review',
        ],
      },
    ],
    visualLabel: 'Material structure',
  },
  {
    number: '05',
    category: 'BIOMEDICAL ENGINEERING · BIOMATERIALS · BIOSENSING · MICROFLUIDICS',
    title: 'Continuous Biochemical Monitoring for Biomedical Applications',
    summary:
      'A literature-based investigation of blood-contacting biosensor challenges and a proposed microfluidic concept for continuous monitoring of biochemical markers.',
    type: 'materials',
    context:
      'This research project explored the challenges of continuous biochemical monitoring in blood and investigated how advances in biomaterials, microfluidics, and biosensor design could support more reliable biomedical monitoring systems. Physiological parameters such as blood pressure can be monitored continuously, while biochemical markers such as glucose, lactate, and electrolytes are often measured intermittently. Continuous monitoring could provide more frequent insight into changes in a patient’s biochemical state, but reliable sensors in direct contact with blood present significant engineering challenges.',
    problem:
      'Blood is a complex biological environment that can compromise sensor performance over time. Protein adsorption, including the Vroman effect, can alter the sensor–blood interface, while platelet activation, complement responses, and thrombosis create additional blood-compatibility concerns. Biofouling and sensor signal drift can also reduce measurement reliability during prolonged operation. Sensor performance therefore depends not only on the sensing mechanism, but also on material selection, surface chemistry, and the surrounding fluidic-system design.',
    approach:
      'Conducted a research analysis of existing continuous monitoring technologies, blood-contacting materials, antifouling strategies, and electrochemical biosensing approaches. The project also developed a proposed smart arterial-line concept with a side microchannel and sensor chamber. The SENSBIT device is discussed as an example reported in published research; its experiments were not conducted or independently verified as part of this project. The arterial-line system is a conceptual proposal, not a fabricated or experimentally validated device.',
    tools: ['Biomedical research', 'Literature review', 'Biomaterials', 'Antifouling surface engineering', 'Electrochemical biosensors', 'Aptamer-based sensing', 'Microfluidics', 'Conceptual engineering design'],
    findings:
      'The research analysis highlighted that continuous biochemical monitoring requires more than a sensitive detection mechanism. Reliable operation also depends on the interaction between sensing materials and blood, prevention of surface fouling, and maintenance of stable signals over time. Combining electrochemical sensing with antifouling materials and microfluidic design may offer a route toward addressing these interconnected challenges. Published SENSBIT performance findings are attributed to the referenced literature and were not independently tested or verified in this project.',
    learning:
      'This project connected nanobiotechnology, biomaterials, electrochemical sensing, and microfluidic system design to investigate a significant biomedical engineering challenge: achieving reliable, continuous biochemical measurements in a complex biological environment.',
    detailSections: [
      {
        heading: 'Research objectives',
        bullets: [
          'Investigate the limitations of existing continuous biochemical monitoring technologies.',
          'Examine material and surface-engineering strategies for reducing biofouling and improving blood compatibility.',
          'Explore electrochemical biosensing approaches for measuring biochemical markers.',
          'Consider how microfluidic integration could support a proposed continuous blood-monitoring system.',
        ],
      },
      {
        heading: 'Research and technical approach',
        subsections: [
          {
            heading: '1. Existing continuous monitoring technologies',
            bullets: [
              'Reviewed continuous glucose monitoring systems, intravascular sensors, and other emerging biosensing approaches.',
              'Considered their sensing mechanisms, practical limitations, and challenges associated with prolonged use in biological environments.',
            ],
          },
          {
            heading: '2. Biomaterials and antifouling strategies',
            bullets: [
              'Investigated PEG-based and zwitterionic coatings, nitric oxide-releasing surfaces, and permselective membranes as strategies for improving blood-contacting interfaces.',
              'Explored how these approaches may reduce unwanted biological interactions and help preserve sensor performance.',
            ],
          },
          {
            heading: '3. Electrochemical and aptamer-based biosensing',
            bullets: [
              'Examined electrochemical aptamer-based sensors, which use target-binding aptamers and electrochemical signals to detect specific analytes.',
              'Reviewed SENSBIT as a published research example combining a bicontinuous nanoporous gold scaffold, a hyperbranched PEG-based coating, and redox-tagged aptamers.',
              'Considered how these components are intended to support sensing and reduce biofouling.',
              'Any SENSBIT performance findings refer to results reported in the referenced research literature. I did not fabricate the sensor, conduct its reported experiments, or independently verify its published performance.',
            ],
          },
        ],
      },
      {
        heading: 'Proposed microfluidic monitoring concept',
        paragraphs: [
          'The proposed smart arterial-line system incorporates a side microchannel and sensor chamber to support continuous measurement of blood biomarkers such as glucose, lactate, and electrolytes. This is a conceptual engineering proposal rather than a completed or experimentally validated device.',
        ],
        bullets: [
          'Considered how blood flow and sensor placement within the side-channel chamber could support access to the biomarkers of interest.',
          'Included antifouling interfaces as a design consideration for limiting unwanted biological interactions at blood-contacting surfaces.',
          'Explored a potential flushing or self-cleaning mechanism as a way to support long-term monitoring reliability.',
          'The system was not built or experimentally validated; no device performance or clinical outcome is claimed.',
        ],
      },
      {
        heading: 'Technical skills and areas explored',
        bullets: [
          'Biomedical research and literature review',
          'Biomaterials and antifouling surface engineering',
          'Electrochemical biosensors and aptamer-based sensing',
          'Microfluidics and conceptual engineering design',
        ],
      },
    ],
    visualLabel: 'Blood-contacting sensor interfaces',
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