import { education, skillGroups } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";

export function SkillsSection() {
  return (
    <section className="section" id="about">
      <div className="shell">
        <SectionHeading
          index="04 / The toolkit"
          title="Curious by default. Practical by design."
          description="I enjoy working across the stack boundary—from polished interfaces to the APIs and systems behind them."
        />
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.name}>
              <h3>{group.name}</h3>
              <div className="skill-pills">
                {group.skills.map((skill) => (
                  <span className="skill-pill" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="education">
          {education.map((item) => (
            <div className="education-item" key={item.degree}>
              <strong>{item.degree}</strong>
              <span>{item.school}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
