import { experience } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";

export function ExperienceSection() {
  return (
    <section className="section experience-section" id="experience">
      <div className="shell">
        <SectionHeading
          index="03 / Experience"
          title="Good work comes from good teams."
          description="Five years of learning, shipping, and making products better with thoughtful teams."
        />
        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-item" key={item.company}>
              <span className="experience-date">{item.dates}</span>
              <div className="experience-main">
                <h3>{item.role}</h3>
                <p>{item.summary}</p>
              </div>
              <span className="experience-company">{item.company}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
