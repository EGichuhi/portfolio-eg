import { useState } from 'react'
import {
  ArrowDown,
  ArrowUpRight,
  Atom,
  ChevronDown,
  Download,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
} from 'lucide-react'
import { experience, profile, projects, skillGroups } from './content'

const navigation = [
  ['About', '#about'],
  ['Experience', '#experience'],
  ['Projects', '#projects'],
  ['Skills', '#skills'],
  ['Contact', '#contact'],
]

function renderHighlightedText(text: string, highlights: string[] = []) {
  if (!highlights.length) return text

  const escapedHighlights = [...highlights].sort((a, b) => b.length - a.length).map((highlight) =>
    highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
  )
  return text.split(new RegExp(`(${escapedHighlights.join('|')})`, 'g')).map((part, index) =>
    highlights.includes(part) ? <strong key={index}>{part}</strong> : part,
  )
}

function ProjectDiagram({ type }: { type: string }) {
  if (type === 'pipeline') {
    return (
      <svg className="diagram-svg pipeline-svg" viewBox="0 0 520 246" role="img" aria-label="Path from literature data through feature preparation to model exploration">
        <path className="diagram-path" d="M44 124 H475" />
        <circle className="diagram-orbit" cx="260" cy="124" r="71" />
        <circle className="diagram-orbit orbit-inner" cx="260" cy="124" r="45" />
        <circle className="particle particle-a" cx="260" cy="53" r="8" />
        <circle className="particle particle-b" cx="321" cy="159" r="8" />
        <circle className="particle particle-c" cx="199" cy="159" r="8" />
        <rect className="diagram-node" x="12" y="91" width="104" height="66" rx="4" />
        <rect className="diagram-node" x="208" y="91" width="104" height="66" rx="4" />
        <rect className="diagram-node" x="404" y="91" width="104" height="66" rx="4" />
        <text className="diagram-label" x="64" y="117" textAnchor="middle">LITERATURE</text>
        <text className="diagram-sub" x="64" y="139" textAnchor="middle">Mendeley data</text>
        <text className="diagram-label" x="260" y="111" textAnchor="middle">FEATURES</text>
        <text className="diagram-sub" x="260" y="132" textAnchor="middle">EE · size · LC</text>
        <text className="diagram-sub" x="260" y="147" textAnchor="middle">LA/GA ratio</text>
        <text className="diagram-label" x="456" y="117" textAnchor="middle">MODELS</text>
        <text className="diagram-sub" x="456" y="139" textAnchor="middle">exploration</text>
      </svg>
    )
  }
  if (type === 'neural-scaffold') {
    return (
      <svg className="diagram-svg neural-scaffold-svg" viewBox="0 0 520 246" role="img" aria-label="Concept illustration of neural axons extending through a porous biomaterial scaffold">
        <text className="diagram-kicker" x="28" y="31">SCAFFOLD / NEURAL REPAIR</text>
        <path className="scaffold-rail" d="M76 70 H444 M76 176 H444" />
        <path className="scaffold-strut" d="M96 70 136 176 M176 70 216 176 M256 70 296 176 M336 70 376 176 M416 70 444 145" />
        <path className="scaffold-strut scaffold-strut-alt" d="M96 176 136 70 M176 176 216 70 M256 176 296 70 M336 176 376 70 M416 176 444 101" />
        <path className="axon-path" d="M34 126 C74 126 78 108 113 116 S158 139 194 123 246 108 275 126 328 143 365 120 414 110 486 125" />
        <path className="axon-branch" d="M194 123 C210 104 219 96 232 91 M275 126 C290 146 302 151 317 156 M365 120 C378 98 389 91 404 86" />
        <circle className="neuron-body" cx="55" cy="126" r="13" />
        <circle className="neuron-core" cx="55" cy="126" r="4" />
        <circle className="axon-node" cx="194" cy="123" r="5" />
        <circle className="axon-node" cx="275" cy="126" r="5" />
        <circle className="axon-node" cx="365" cy="120" r="5" />
        <text className="diagram-label" x="260" y="205" textAnchor="middle">POROUS BIOMATERIAL GUIDANCE</text>
      </svg>
    )
  }
  if (type === 'biochemical') {
    return (
      <svg className="diagram-svg biochemical-svg" viewBox="0 0 520 246" role="img" aria-label="Concept illustration of a proposed arterial line with a side-channel biochemical sensor chamber">
        <defs>
          <linearGradient id="arterial-flow" x1="0" x2="1">
            <stop offset="0" stopColor="#d78472" stopOpacity=".18" />
            <stop offset="1" stopColor="#bc7168" stopOpacity=".28" />
          </linearGradient>
        </defs>
        <text className="diagram-kicker" x="28" y="31">CONCEPT / CONTINUOUS MONITORING</text>
        <rect className="arterial-channel" x="22" y="128" width="476" height="62" rx="31" />
        <path className="arterial-centerline" d="M43 159 H476" />
        <path className="arterial-arrow" d="M92 159 H147 M139 151 L147 159 L139 167" />
        <path className="sensor-channel" d="M176 134 V91 H235 M386 91 H427 V134" />
        <rect className="sensor-chamber" x="235" y="49" width="151" height="84" rx="10" />
        <path className="chamber-flow" d="M251 91 H370" />
        <rect className="sensor-element" x="303" y="67" width="17" height="48" rx="8" />
        <circle className="sensor-node" cx="311.5" cy="91" r="6" />
        <circle className="analyte-dot analyte-glucose" cx="267" cy="91" r="4" />
        <circle className="analyte-dot analyte-lactate" cx="349" cy="91" r="4" />
        <text className="diagram-label" x="310" y="43" textAnchor="middle">SIDE-CHANNEL SENSOR</text>
        <text className="diagram-sub" x="310" y="119" textAnchor="middle">antifouling interface</text>
        <text className="diagram-label" x="260" y="158" textAnchor="middle">ARTERIAL LINE</text>
        <text className="diagram-sub" x="260" y="177" textAnchor="middle">proposed flow path</text>
        <circle className="analyte-dot analyte-glucose" cx="165" cy="218" r="4" />
        <text className="diagram-sub" x="175" y="222">glucose</text>
        <circle className="analyte-dot analyte-lactate" cx="270" cy="218" r="4" />
        <text className="diagram-sub" x="280" y="222">lactate</text>
        <circle className="analyte-dot analyte-electrolyte" cx="369" cy="218" r="4" />
        <text className="diagram-sub" x="379" y="222">electrolytes</text>
      </svg>
    )
  }
  if (type === 'optics') {
    return (
      <svg className="diagram-svg" viewBox="0 0 520 246" role="img" aria-label="980 nanometer excitation and upconversion emission">
        <path className="light-beam" d="M58 122 H219" />
        <path className="light-beam beam-reflected" d="M301 122 H461" />
        <path className="lens-shape" d="M219 59 C262 75 279 93 279 122 C279 151 262 169 219 185 C236 151 236 93 219 59Z" />
        <path className="lens-shape lens-edge" d="M301 59 C258 75 241 93 241 122 C241 151 258 169 301 185 C284 151 284 93 301 59Z" />
        <circle className="particle particle-a" cx="256" cy="93" r="5" />
        <circle className="particle particle-b" cx="268" cy="124" r="5" />
        <circle className="particle particle-c" cx="253" cy="151" r="5" />
        <text className="diagram-label" x="78" y="103">980 nm</text>
        <text className="diagram-sub" x="78" y="151">excitation</text>
        <text className="diagram-label" x="401" y="103">EMISSION</text>
        <text className="diagram-sub" x="401" y="151">upconversion</text>
      </svg>
    )
  }
  if (type === 'microfluidic') {
    return (
      <svg className="diagram-svg" viewBox="0 0 520 246" role="img" aria-label="Microfluidic channel geometry">
        <path className="channel-outline" d="M32 67 H186 Q222 67 222 103 V143 Q222 179 258 179 H488" />
        <path className="channel-outline channel-secondary" d="M32 179 H138 Q174 179 174 143 V103 Q174 67 210 67 H488" />
        <path className="flow-line" d="M42 123 H159 Q198 123 198 162 Q198 199 238 199 H474" />
        <circle className="flow-dot dot-one" cx="91" cy="123" r="5" />
        <circle className="flow-dot dot-two" cx="198" cy="141" r="5" />
        <circle className="flow-dot dot-three" cx="312" cy="199" r="5" />
        <text className="diagram-label" x="38" y="47">INLET</text>
        <text className="diagram-label" x="433" y="47">OUTLET</text>
      </svg>
    )
  }
  return (
    <svg className="diagram-svg" viewBox="0 0 520 246" role="img" aria-label="Layered material structure">
      <path className="material-layer layer-one" d="M88 76 L255 36 L431 77 L260 120 Z" />
      <path className="material-layer layer-two" d="M88 111 L255 71 L431 112 L260 155 Z" />
      <path className="material-layer layer-three" d="M88 147 L255 107 L431 148 L260 191 Z" />
      <circle className="material-dot" cx="182" cy="78" r="6" />
      <circle className="material-dot" cx="303" cy="123" r="6" />
      <circle className="material-dot" cx="348" cy="153" r="6" />
    </svg>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeProject, setActiveProject] = useState<string | null>(null)
  const [city, region] = profile.location.split(', ')

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label={`${profile.name}, home`} onClick={closeMenu}>
          <span className="wordmark-icon"><Atom size={18} strokeWidth={1.6} /></span>
          <span>{profile.name}</span>
        </a>
        <button className="mobile-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          {navigation.map(([label, href]) => (
            <a href={href} key={label} onClick={closeMenu}>{label}</a>
          ))}
          {profile.resumePath && (
            <a className="resume-link" href={profile.resumePath} download><Download size={14} /> Resume</a>
          )}
        </nav>
      </header>

      <main>
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> NANOTECHNOLOGY ENGINEERING · {profile.location.toUpperCase()}</p>
            <h1 id="hero-title">Engineering<br /><em>Materials.</em><br />Building Intelligent<br className="desktop-break" /> Systems.</h1>
            <p className="hero-deck">Nanotechnology Engineering <span>/</span> Machine Learning <span>/</span> Materials Science <span>/</span> Data &amp; Technology</p>
            <p className="hero-intro">{profile.introduction}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowDown size={16} /></a>
              <a className="button button-text" href="#contact">Get in touch <ArrowUpRight size={16} /></a>
            </div>
          </div>
          <div className={`hero-visual ${profile.heroImage ? 'has-image' : ''}`}>
            <div className="visual-topline"><span>FIG. 01</span><span>MATTER / DATA</span></div>
            {profile.heroImage ? (
              <img className="portfolio-image" src={profile.heroImage} alt={profile.heroImageAlt} />
            ) : (
              <svg className="hero-molecule" viewBox="0 0 500 470" role="img" aria-label="Molecular lattice of interconnected particles">
              <defs>
                <radialGradient id="core" cx="35%" cy="30%" r="70%">
                  <stop offset="0" stopColor="#d1f2db" />
                  <stop offset=".42" stopColor="#14b8a6" />
                  <stop offset="1" stopColor="#0b5653" />
                </radialGradient>
                <radialGradient id="gold" cx="35%" cy="30%" r="70%">
                  <stop offset="0" stopColor="#fff4c7" />
                  <stop offset=".5" stopColor="#d4af37" />
                  <stop offset="1" stopColor="#9a7920" />
                </radialGradient>
              </defs>
              <g className="molecule-lines">
                <path d="M95 116 179 78 252 130 337 83 414 136 386 224 439 301 362 361 271 340 197 398 119 340 66 257 113 192Z" />
                <path d="M95 116 197 205 252 130 271 250 386 224 271 340 197 205 119 340M179 78 197 205 337 83 386 224 414 136M66 257 197 205 271 250 439 301M113 192 252 130 386 224 362 361" />
                <path className="orbit-line" d="M85 256C91 153 174 87 269 94c99 7 165 91 157 180-7 87-91 143-188 137-96-6-159-70-153-155Z" />
              </g>
              <g className="molecule-nodes">
                <circle cx="95" cy="116" r="12" /><circle cx="179" cy="78" r="8" className="node-gold" />
                <circle cx="252" cy="130" r="15" /><circle cx="337" cy="83" r="9" className="node-gold" />
                <circle cx="414" cy="136" r="12" /><circle cx="386" cy="224" r="17" />
                <circle cx="439" cy="301" r="8" className="node-gold" /><circle cx="362" cy="361" r="13" />
                <circle cx="271" cy="340" r="10" className="node-gold" /><circle cx="197" cy="398" r="15" />
                <circle cx="119" cy="340" r="9" /><circle cx="66" cy="257" r="14" className="node-gold" />
                <circle cx="113" cy="192" r="7" /><circle cx="197" cy="205" r="20" className="node-core" />
                <circle cx="271" cy="250" r="11" className="node-gold" />
              </g>
              <circle className="molecule-glow" cx="197" cy="205" r="35" />
              </svg>
            )}
            <div className="visual-caption"><span>01 / 04</span><span>{profile.heroImage ? profile.name : 'Structure informs function.'}</span></div>
            <div className="visual-coordinates">43°39' N<br />79°23' W</div>
          </div>
          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
        </section>

        <section className="about section-wrap" id="about" aria-labelledby="about-title">
          <div className="section-index"><span>01</span><span>PROFILE</span></div>
          <div className="about-content">
            <p className="eyebrow">A MATERIALS-FIRST POINT OF VIEW</p>
            <h2 id="about-title">I work where <em>scientific questions</em> meet practical systems.</h2>
            <p className="about-copy">{profile.about}</p>
            <div className="about-facts">
              <div><span className="fact-mark">01</span><span>Research<br />&amp; materials</span></div>
              <div><span className="fact-mark">02</span><span>Data<br />&amp; intelligence</span></div>
              <div><span className="fact-mark">03</span><span>Technology<br />&amp; operations</span></div>
            </div>
          </div>
          <div className="about-aside"><span className="aside-rule" />UW<br />NANOTECH<br />ENGINEERING</div>
        </section>

        <section className="experience section-wrap" id="experience" aria-labelledby="experience-title">
          <div className="section-index"><span>02</span><span>EXPERIENCE</span></div>
          <div className="section-main">
            <div className="section-heading">
              <div><p className="eyebrow">WORK, APPLIED</p><h2 id="experience-title">Experience</h2></div>
              <p className="section-note">Across data, engineering, operations, and B2B technology.</p>
            </div>
            <div className="experience-list">
              {experience.map((item, index) => (
                <article className="experience-item" key={item.organization}>
                  <div className="experience-marker"><span>{String(index + 1).padStart(2, '0')}</span></div>
                  <div className="experience-role">
                    <div className="role-heading"><div><h3>{item.organization}</h3><p>{item.title}</p></div><time>{item.dates}</time></div>
                    <ul className="role-description">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{renderHighlightedText(bullet, item.highlights)}</li>
                      ))}
                    </ul>
                    <ul className="tag-list" aria-label="Tools and focus areas">{item.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="projects section-wrap" id="projects" aria-labelledby="projects-title">
          <div className="section-index"><span>03</span><span>SELECTED WORK</span></div>
          <div className="section-main">
            <div className="section-heading projects-heading">
              <div><p className="eyebrow">QUESTIONS INTO WORKFLOWS</p><h2 id="projects-title">Projects</h2></div>
              <p className="section-note">Materials, nanomedicine, biosensing, and microfluidic design.</p>
            </div>
            <div className="project-list">
              {projects.map((project) => {
                const isOpen = activeProject === project.number
                return (
                  <article className={`project-item ${isOpen ? 'project-open' : ''}`} key={project.number}>
                    <div className="project-art"><ProjectDiagram type={project.type} /><span className="art-label">{project.visualLabel}</span></div>
                    <div className="project-content">
                      <div className="project-meta"><span>{project.number} / {project.category}</span></div>
                      <h3>{project.title}</h3>
                      <p className="project-summary">{project.summary}</p>
                      <button className="detail-toggle" type="button" aria-expanded={isOpen} aria-controls={`project-detail-${project.number}`} onClick={() => setActiveProject(isOpen ? null : project.number)}>
                        {isOpen ? 'Close project details' : 'Explore project'} <ChevronDown size={15} />
                      </button>
                    </div>
                    {isOpen && (
                      <div className="project-detail" id={`project-detail-${project.number}`}>
                        <div className="detail-block"><h4>Overview</h4><p>{project.context}</p></div>
                        <div className="detail-block"><h4>Engineering challenge</h4><p>{project.problem}</p></div>
                        <div className="detail-block"><h4>Approach</h4><p>{project.approach}</p></div>
                        <div className="detail-block"><h4>Technical areas</h4><ul className="tag-list">{project.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul></div>
                        <div className="detail-block"><h4>Findings</h4><p>{project.findings}</p></div>
                        <div className="detail-block"><h4>Takeaway</h4><p>{project.learning}</p></div>
                      </div>
                    )}
                    <span className="project-number">{project.number}</span>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="skills section-wrap" id="skills" aria-labelledby="skills-title">
          <div className="section-index"><span>04</span><span>CAPABILITIES</span></div>
          <div className="section-main">
            <div className="section-heading">
              <div><p className="eyebrow">TOOLS &amp; METHODS</p><h2 id="skills-title">Technical skills</h2></div>
              <p className="section-note">A working toolkit across computation, lab, and operations.</p>
            </div>
            <div className="skills-grid">
              {skillGroups.map((group, index) => (
                <section className="skill-group" key={group.title} aria-labelledby={`skill-group-${index}`}>
                  <div className="skill-group-head"><span>0{index + 1}</span><h3 id={`skill-group-${index}`}>{group.title}</h3></div>
                  <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="contact-grid">
            <div className="contact-kicker"><span>05 / CONTACT</span><span>OPEN TO WHAT'S NEXT</span></div>
            <div className="contact-main">
              <p className="eyebrow">LET'S CONNECT</p>
              <h2 id="contact-title">Good work starts<br />with a <em>good question.</em></h2>
              <p className="contact-copy">For engineering, R&amp;D, data, and technology opportunities, I’d be glad to hear from you.</p>
              <div className="contact-links">
                {profile.email && <a href={`mailto:${profile.email}`}><Mail size={17} />{profile.email}<ArrowUpRight size={15} /></a>}
                {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} />LinkedIn<ArrowUpRight size={15} /></a>}
                {profile.github && <a href={profile.github} target="_blank" rel="noreferrer"><Github size={17} />GitHub<ArrowUpRight size={15} /></a>}
              </div>
            </div>
            <div className="contact-coordinate">{city.toUpperCase()}<br />{region.toUpperCase()}, CANADA<br /><span>{profile.coordinates}</span></div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="wordmark footer-wordmark" href="#home"><span className="wordmark-icon"><Atom size={17} strokeWidth={1.6} /></span><span>{profile.name}</span></a>
        <p>{profile.tagline}</p>
        <nav aria-label="Footer navigation">{navigation.map(([label, href]) => <a href={href} key={label}>{label}</a>)}</nav>
        <span className="copyright">© {new Date().getFullYear()} {profile.name}</span>
      </footer>
    </>
  )
}

export default App