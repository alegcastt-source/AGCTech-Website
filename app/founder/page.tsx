export default function FounderPage() {
  return (
    <main className="projectPage founderPage">
      <nav className="projectNav" aria-label="Founder navigation">
        <a href="/?skipIntro=1#top">AGC TECH</a>
        <a href="/?skipIntro=1#contact">Contact</a>
      </nav>

      <section className="founderDetail" aria-labelledby="founder-title">
        <div>
          <p className="eyebrow">About founder</p>
          <h1 id="founder-title">A builder focused on turning robotics ideas into working machines.</h1>
        </div>
        <p>
          AGC TECH is shaped around hands-on robotics, practical AI, and systems that move from concept
          to tested reality. The founder direction is simple: combine hardware, software, and disciplined
          experimentation so each project proves something useful.
        </p>
      </section>

      <figure className="founderArtifact">
        <img src="/project-media/final-pres-design-1.jpg" alt="Founder project sketch for the SO101 sorting conveyor" />
        <figcaption>Founder sketch / SO101 sorting conveyor concept</figcaption>
      </figure>
    </main>
  );
}
