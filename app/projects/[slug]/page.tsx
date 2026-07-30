import { galleryImages, projects } from "../../projectData";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((item) => item.slug === params.slug) ?? projects[0];
  const media = project.gallery ?? galleryImages;

  return (
    <main className="projectPage">
      <nav className="projectNav" aria-label="Project navigation">
        <a href="/?skipIntro=1#top">AGC TECH</a>
        <a href="/?skipIntro=1#platform">Projects</a>
      </nav>

      <section className="projectDetail" aria-labelledby="project-title">
        <div className="projectInfo">
          <p className="eyebrow">{project.label}</p>
          <h1 id="project-title">
            {project.title}
            {project.tag ? <span>{project.tag}</span> : null}
          </h1>
          <p>{project.description}</p>
          <a className="button secondary" href="/?skipIntro=1#platform">Back to projects</a>
        </div>

        <div className="projectGallery" aria-label={`${project.title} image gallery`}>
          {media.map((item, index) => (
            <figure key={item.src}>
              {item.type === "video" ? (
                <video src={item.src} aria-label={item.alt} controls muted playsInline preload="metadata" />
              ) : (
                <img src={item.src} alt={item.alt} />
              )}
              <figcaption>{project.title} / {item.type === "video" ? "Video" : "Image"} {index + 1}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
