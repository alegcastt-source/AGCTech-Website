import { projects } from "./projectData";
import IntroLoader from "./IntroLoader";

const signalRows = [
  ["Model fabric", "Online", "Porcelain tier"],
  ["Robotics grid", "Synchronized", "Chrome relay"],
  ["Security spine", "Shielded", "Crimson watch"],
  ["Automation layer", "Scaling", "Royal twilight"],
];

function AgcLogo({ compact = false }: { compact?: boolean }) {
  return (
    <span className={compact ? "agcLogo compact" : "agcLogo"} aria-label="AGC TECH logo">
      <svg className="agcMark" viewBox="-10 -10 140 140" aria-hidden="true">
        <defs>
          <linearGradient id="markChrome" x1="16" y1="20" x2="104" y2="100">
            <stop stopColor="#E6E7F0" />
            <stop offset=".48" stopColor="#A9C9E5" />
            <stop offset="1" stopColor="#6A2562" />
          </linearGradient>
        </defs>
        <polygon className="markShell" points="60 7 104 32 104 88 60 113 16 88 16 32" />
        <path className="markArrow chrome" d="M60 60 L60 -1 M60 -1 L47 18 M60 -1 L73 18" />
        <path className="markArrow plum" d="M60 60 L94 41 M94 41 L77 40 M94 41 L86 55" />
        <path className="markArrow chrome" d="M60 60 L114 91 M114 91 L91 92 M114 91 L103 72" />
        <path className="markArrow plum" d="M60 60 L60 99 M60 99 L50 84 M60 99 L70 84" />
        <path className="markArrow chrome" d="M60 60 L6 91 M6 91 L29 92 M6 91 L17 72" />
        <path className="markArrow plum" d="M60 60 L26 41 M26 41 L43 40 M26 41 L34 55" />
        <g className="markEmblem">
          <polygon points="60 39 72 54 66 81 60 90 54 81 48 54" />
          <path d="M48 54 L60 61 L72 54 M54 81 L60 61 L66 81" />
          <path d="M43 62 L52 56 M77 62 L68 56" />
        </g>
      </svg>
      <span>
        <strong>AGC</strong>
        <small>TECH</small>
      </span>
    </span>
  );
}

export default function Home() {
  return (
    <>
      <IntroLoader />
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <nav className="nav" aria-label="Primary navigation">
            <a href="#top" className="brandLink">
              <AgcLogo compact />
            </a>
            <div className="navLinks">
              <a href="#platform">P.Platform</a>
              <a href="#systems">Systems</a>
              <a href="/funny-building-moments">Funny Building Moments</a>
              <a href="/founder">Founder</a>
              <a href="#contact">Contact</a>
            </div>
          </nav>

          <div className="heroVisualStack">
            <div className="robotImageSlot" aria-label="Robot image area">
              <img src="/agc-robot-head-4k.png" alt="Chrome AGC TECH robot head" />
            </div>
          </div>

          <div className="heroGrid" id="top">
            <div className="heroCopy">
              <p className="eyebrow">Robotic systems with dynamic control</p>
              <h1 id="hero-title">
                Turning <span className="conceptWord">concepts</span> to a machine{" "}
                <span className="realityWord">reality</span>.
              </h1>
              <p className="lede">
                Hardware and software combined through proficient use of AI in the robotics sector.
                No matter the daunting task, AI will serve to cut task timing to ensure project completion.
              </p>
              <div className="heroActions" aria-label="Primary actions">
                <a className="button primary" href="#platform">P.Platform</a>
                <a className="button secondary" href="/founder">About founder</a>
              </div>
            </div>
          </div>
        </section>

        <section className="orbitalSection" aria-label="Orbital Board">
          <div className="holoConsole" aria-label="AGC TECH holographic command console">
            <div className="consoleTop">
              <AgcLogo />
              <span>ORBITAL BOARD</span>
            </div>
            <div className="consoleCore">
              <div className="hexStage">
                <span className="hex hexOne" />
                <span className="hex hexTwo" />
                <span className="hex hexThree" />
                <span className="royalPulse" />
              </div>
              <div className="readoutStack">
                <div>
                  <small>PREFERRED FABRIC</small>
                  <strong>Nylon 6</strong>
                </div>
                <div>
                  <small>AUTONOMY INDEX</small>
                  <strong>20%</strong>
                </div>
                <div>
                  <small>EFFICIENCY</small>
                  <strong>Potential acquired</strong>
                </div>
              </div>
            </div>
            <div className="consoleFooter">
              <span>Royal twilight</span>
              <span>Chrome queen</span>
              <span>Dark empress</span>
            </div>
          </div>
        </section>

        <section className="platform" id="platform" aria-labelledby="platform-title">
          <div className="sectionHeader">
            <p className="eyebrow">Portfolio platform</p>
            <h2 id="platform-title">
              Five Projects. Each designed to solve a problem and demonstrate impact one project at a time.
            </h2>
          </div>
          <div className="cardGrid">
            {projects.map((project) => (
              <a className="techCard projectCard" href={`/projects/${project.slug}`} key={project.title}>
                <p>{project.label}</p>
                <h3>
                  {project.title}
                  {project.tag ? <em>{project.tag}</em> : null}
                </h3>
                <span>{project.detail}</span>
                <strong>{project.metric}</strong>
              </a>
            ))}
          </div>
        </section>

        <section className="systems" id="systems" aria-labelledby="systems-title">
          <div className="dashboardCopy">
            <p className="eyebrow">Executive command</p>
            <h2 id="systems-title">A calm, cinematic dashboard for complex machine intelligence.</h2>
            <p>
              AGC TECH turns frontier systems into interfaces leaders can trust:
              readable status, teleoperation control, defensible decisions, and operational polish from
              prototype to deployment.
            </p>
          </div>
          <div className="signalPanel" aria-label="System status table">
            <div className="panelHeader">
              <span>Live architecture</span>
              <strong>99.99</strong>
            </div>
            {signalRows.map(([name, state, tier]) => (
              <div className="signalRow" key={name}>
                <span>{name}</span>
                <strong>{state}</strong>
                <em>{tier}</em>
              </div>
            ))}
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <p className="eyebrow">Contact us</p>
          <h2 id="contact-title">Improving with an open mindset to create well-structured frontier systems.</h2>
          <a className="button primary porcelain" href="mailto:alegcastt@gmail.com">
            alegcastt@gmail.com
          </a>
        </section>
      </main>
    </>
  );
}
