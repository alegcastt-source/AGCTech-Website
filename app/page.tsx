const projects = [
  {
    title: "Combat Robot",
    type: "Battle Robotics",
    detail:
      "A compact combat robot project focused on durable structure, drive control, weapon timing, and fast repair between rounds.",
    metrics: ["Drive system", "Weapon control", "Match-ready frame"],
  },
  {
    title: "McDonald's Grill Simulator",
    type: "Training Simulator",
    detail:
      "A simulator concept for practicing grill timing, station flow, order pressure, and repeatable kitchen decision-making.",
    metrics: ["Timed workflow", "Station logic", "Training mode"],
  },
  {
    title: "SO-101 Robot Teleoperation",
    type: "Robot Control",
    detail:
      "A teleoperation setup for controlling an SO-101 robot with clear operator feedback, motion commands, and responsive manual control.",
    metrics: ["Manual control", "Live feedback", "Robot interface"],
  },
  {
    title: "Dasai Mochi Bot",
    type: "Desktop Robotics",
    detail:
      "A playful robotics build inspired by the Dasai Mochi companion style, blending expressive motion with compact embedded control.",
    metrics: ["Expressive motion", "Tiny form factor", "Personality loop"],
  },
  {
    title: "Robotics Actuator",
    type: "Mechanical Design",
    detail:
      "An actuator-focused project exploring torque, response, mounting, and reliable motion for robotics prototypes.",
    metrics: ["Torque testing", "Motion response", "Mount design"],
  },
  {
    title: "UT Southwestern Research",
    type: "Research",
    detail:
      "A research project connected to UT Southwestern, shaped around careful testing, technical documentation, and robotics-related exploration.",
    metrics: ["Research notes", "Testing process", "Technical summary"],
  },
];

const capabilities = [
  "Embedded control systems",
  "ROS 2 and simulation pipelines",
  "Sensor fusion and telemetry",
  "Operator-first interface design",
  "Prototype fabrication",
  "Safety-state visualization",
];

export default function Home() {
  return (
    <>
    <iframe
      className="introLoaderFrame"
      src="/agc-tech-loader.html"
      title="AGC Tech intro animation"
      aria-hidden="true"
      tabIndex={-1}
    />
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <nav className="nav" aria-label="Portfolio sections">
          <a className="mark" href="#top" aria-label="Robotics portfolio home">
            <svg className="markLogo" viewBox="0 0 100 100" aria-hidden="true">
              <polygon className="markHex" points="50 7 87 28.5 87 71.5 50 93 13 71.5 13 28.5" />
              <path className="markArrow cyan" d="M50 50 L29 29 M29 29 L42 32 M29 29 L32 42" />
              <path className="markArrow black" d="M50 50 L50 20 M50 20 L43 31 M50 20 L57 31" />
              <path className="markArrow cyan" d="M50 50 L71 29 M71 29 L58 32 M71 29 L68 42" />
              <path className="markArrow black" d="M50 50 L71 71 M71 71 L58 68 M71 71 L68 58" />
              <path className="markArrow cyan" d="M50 50 L50 80 M50 80 L43 69 M50 80 L57 69" />
              <path className="markArrow black" d="M50 50 L29 71 M29 71 L42 68 M29 71 L32 58" />
              <polygon className="markCore" points="50 42 57 46 57 54 50 58 43 54 43 46" />
            </svg>
            <span className="markText">AGC</span>
          </a>
          <div className="navLinks">
            <a href="#work">Work</a>
            <a href="#systems">Systems</a>
            <a href="#about">About</a>
            <a href="/moments">Mishaps</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="heroGrid" id="top">
          <div className="heroCopy">
            <p className="eyebrow">Robotics portfolio</p>
            <h1 id="hero-title">Machines that sense, decide, and move with intent.</h1>
            <p className="lede">
              A focused portfolio for robotics projects across autonomy,
              manipulation, perception, and operator tools. Built around clear
              systems thinking, crisp interfaces, and hardware-aware execution.
            </p>
            <div className="heroActions" aria-label="Primary links">
              <a className="button primary" href="#work">
                View projects
              </a>
              <a className="button secondary" href="#contact">
                Start a collaboration
              </a>
            </div>
          </div>

          <div className="robotPanel" aria-label="Robotics system visualization">
            <div className="statusRow">
              <span>LIVE SYSTEM</span>
              <strong>CYAN-01</strong>
            </div>
            <div className="botFrame">
              <div className="scanline" />
              <svg className="humanoidBot" viewBox="0 0 360 430" role="img" aria-label="Simple humanoid robot outline with AGC Tech chest logo">
                <path className="botAura" d="M180 50 C116 54 76 108 78 184 C80 288 116 364 180 384 C244 364 280 288 282 184 C284 108 244 54 180 50Z" />
                <path className="botOutline" d="M177 35 C141 39 120 68 123 106 C126 139 150 162 178 164 C211 158 234 130 236 94 C239 56 215 31 177 35Z" />
                <path className="visor" d="M132 93 C151 86 211 86 228 94 C225 106 216 113 200 116 L154 115 C142 111 135 104 132 93Z" />
                <path className="neck" d="M162 158 L158 184 L202 184 L198 158" />
                <path className="shoulders" d="M82 198 C110 172 250 172 278 198" />
                <path className="torso" d="M112 198 L248 198 L224 318 L136 318Z" />
                <path className="waist" d="M136 318 L224 318 L212 354 L148 354Z" />
                <path className="abdomen" d="M144 262 L216 262 M148 282 L212 282 M154 302 L206 302" />
                <path className="armLine left" d="M98 216 L72 252 L58 318" />
                <path className="armLine right" d="M262 216 L288 252 L302 318" />
                <path className="forearm left" d="M58 318 L74 352" />
                <path className="forearm right" d="M302 318 L286 352" />
                <circle className="joint" cx="96" cy="210" r="22" />
                <circle className="joint" cx="264" cy="210" r="22" />
                <circle className="joint small" cx="70" cy="252" r="13" />
                <circle className="joint small" cx="290" cy="252" r="13" />
                <g className="chestLogo" transform="translate(148 224) scale(.64)">
                  <polygon className="logoHex" points="50 7 87 28.5 87 71.5 50 93 13 71.5 13 28.5" />
                  <path className="logoArrow cyan" d="M50 50 L29 29 M29 29 L42 32 M29 29 L32 42" />
                  <path className="logoArrow black" d="M50 50 L50 20 M50 20 L43 31 M50 20 L57 31" />
                  <path className="logoArrow cyan" d="M50 50 L71 29 M71 29 L58 32 M71 29 L68 42" />
                  <path className="logoArrow black" d="M50 50 L71 71 M71 71 L58 68 M71 71 L68 58" />
                  <path className="logoArrow cyan" d="M50 50 L50 80 M50 80 L43 69 M50 80 L57 69" />
                  <path className="logoArrow black" d="M50 50 L29 71 M29 71 L42 68 M29 71 L32 58" />
                  <polygon className="logoCore" points="50 42 57 46 57 54 50 58 43 54 43 46" />
                </g>
              </svg>
            </div>
            <div className="telemetry">
              <span>nav.ready</span>
              <span>vision.lock</span>
              <span>torque.nominal</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="work" aria-labelledby="work-title">
        <div className="sectionIntro">
          <p className="eyebrow dark">Selected work</p>
          <h2 id="work-title">Robotics projects with practical constraints in view.</h2>
        </div>
        <div className="projectGrid">
          {projects.map((project) => (
            <article className="projectCard" key={project.title}>
              <p>{project.type}</p>
              <h3>{project.title}</h3>
              <span>{project.detail}</span>
              <div className="projectMedia" aria-label={`${project.title} media slots`}>
                <div className="mediaSlot">Image</div>
                <div className="mediaSlot">Video</div>
                <div className="mediaSlot">Image</div>
              </div>
              <div className="metrics">
                {project.metrics.map((metric) => (
                  <strong key={metric}>{metric}</strong>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="systems" id="systems" aria-labelledby="systems-title">
        <div>
          <p className="eyebrow">Systems approach</p>
          <h2 id="systems-title">From bench prototype to reliable behavior.</h2>
        </div>
        <div className="systemsGrid">
          <div className="systemBlock">
            <strong>01</strong>
            <h3>Model the environment</h3>
            <p>
              Define sensors, failure modes, edge cases, and operator decisions
              before the interface gets polished.
            </p>
          </div>
          <div className="systemBlock">
            <strong>02</strong>
            <h3>Design the control loop</h3>
            <p>
              Keep commands, feedback, overrides, and safety states legible at
              the same moment.
            </p>
          </div>
          <div className="systemBlock">
            <strong>03</strong>
            <h3>Validate in motion</h3>
            <p>
              Pair simulation, logs, and hardware trials so the system improves
              under real operating pressure.
            </p>
          </div>
        </div>
      </section>

      <section className="section split" aria-labelledby="capabilities-title">
        <div>
          <p className="eyebrow dark">Capabilities</p>
          <h2 id="capabilities-title">A portfolio built for robotics teams.</h2>
        </div>
        <ul className="capabilityList" aria-label="Robotics capabilities">
          {capabilities.map((capability) => (
            <li key={capability}>{capability}</li>
          ))}
        </ul>
      </section>

      <section className="aboutMe" id="about" aria-labelledby="about-title">
        <div className="aboutCopy">
          <p className="eyebrow">About me</p>
          <h2 id="about-title">I build robotics ideas into clear working systems.</h2>
          <p>
            I like projects where code, hardware, movement, and human decisions
            all have to line up. My work focuses on making robotic behavior
            understandable, testable, and ready for real operators.
          </p>
        </div>
        <div className="aboutStats" aria-label="Robotics focus areas">
          <div className="faceFrame" aria-label="Portrait placeholder">
            <span>Your face</span>
          </div>
          <span>Autonomy</span>
          <span>Control</span>
          <span>Perception</span>
          <span>Interfaces</span>
        </div>
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-title">
        <p className="eyebrow">Open to robotics collaborations</p>
        <h2 id="contact-title">Need an interface, prototype, or system story?</h2>
        <p>
          Bring the messy logs, the bench notes, and the ambition. This portfolio
          is shaped for projects where software, hardware, and people all meet.
        </p>
        <a className="button primary inverted" href="mailto:hello@robotics.example">
          hello@robotics.example
        </a>
      </section>
    </main>
    </>
  );
}
