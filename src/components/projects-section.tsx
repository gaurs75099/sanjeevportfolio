import { projects } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";

export function ProjectsSection() {
  return (
    <section className="section" id="work">
      <div className="shell">
        <SectionHeading
          index="02 / Selected work"
          title="A few things I've helped build."
          description="A selection of web and mobile products across commerce, government, social, and education."
        />
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div>
                <div className="project-topline">
                  <span className="project-number">Project {project.number}</span>
                  <span className="project-mark" aria-hidden="true">
                    {project.mark}
                  </span>
                </div>
                <div className="project-copy">
                  <h3>{project.name}</h3>
                  <span className="project-type">{project.type}</span>
                  <p>{project.description}</p>
                </div>
              </div>
              <div className="project-bottom">
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="project-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="project-impact">{project.impact}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
