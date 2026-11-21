import { services } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";

export function ServicesSection() {
  return (
    <section className="section services-section" id="services">
      <div className="shell">
        <SectionHeading
          index="01 / Freelance services"
          title="Take your business idea online."
          description="From a business website to a mobile app or a custom platform, I can help you choose a practical solution and build it step by step."
        />
        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-tags">
                {service.tags.map((tag) => (
                  <span className="project-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
