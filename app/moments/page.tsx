const moments = [
  "First test",
  "Almost worked",
  "The fix",
  "Late-night build",
  "Unexpected spin",
  "Final laugh",
];

export default function Moments() {
  return (
    <main className="momentsPage">
      <nav className="momentsNav" aria-label="Moments navigation">
        <a href="/">Back to portfolio</a>
      </nav>

      <section className="momentsHero" aria-labelledby="moments-title">
        <p className="eyebrow">Mishaps</p>
        <h1 id="moments-title">The parts between “it should work” and “it works.”</h1>
        <p>
          Funny build moments, weird tests, awkward robot behavior, and the
          little failures that make the final machine feel earned.
        </p>
      </section>

      <section className="momentsGrid" aria-label="Funny building moments media">
        {moments.map((moment, index) => (
          <article className="momentCard" key={moment}>
            <div className="momentMedia">
              <span>{index % 2 === 0 ? "Video" : "Image"}</span>
            </div>
            <h2>{moment}</h2>
          </article>
        ))}
      </section>
    </main>
  );
}
