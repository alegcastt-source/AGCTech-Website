export default function FunnyBuildingMomentsPage() {
  return (
    <main className="projectPage founderPage">
      <nav className="projectNav" aria-label="Funny building moments navigation">
        <a href="/?skipIntro=1#top">AGC TECH</a>
        <a href="/?skipIntro=1#platform">Projects</a>
      </nav>

      <section className="founderDetail" aria-labelledby="funny-building-title">
        <div>
          <p className="eyebrow">Funny building moments</p>
          <h1 id="funny-building-title">Build memories, tests, and behind-the-scenes project moments.</h1>
        </div>
        <p>
          A place for the lighter side of robotics work: quick experiments, surprising test results,
          prototype lessons, and the moments that make building machines memorable.
        </p>
      </section>
    </main>
  );
}
