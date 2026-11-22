export function AudienceSection() {
  return (
    <section className="audience-section" aria-label="Ways to work together">
      <div className="shell audience-grid">
        <article className="audience-card audience-card-client" id="client-path">
          <span className="audience-kicker">For founders & business owners</span>
          <h2>Have an idea? Let&apos;s bring your business online.</h2>
          <p>
            Need a website, admin panel, or mobile app? I can help shape the
            idea, choose a practical approach, and build a digital product for
            your business.
          </p>
          <div className="audience-actions">
            <a
              className="button-primary"
              href="mailto:sanjeevgaur797@gmail.com?subject=Business%20digitisation%20project"
            >
              Discuss your idea <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#services">
              Explore services <span aria-hidden="true">↘</span>
            </a>
          </div>
        </article>

        <article
          className="audience-card audience-card-hiring"
          id="hiring-path"
        >
          <span className="audience-kicker">For hiring teams</span>
          <h2>Looking for a React, Next.js, or React Native developer?</h2>
          <p>
            I bring 6+ years of overall production experience, including 5+
            years with React Native and enterprise projects at EY, with a focus
            on reusable UI, performance, and dependable delivery.
          </p>
          <div className="audience-metrics" aria-label="Selected results">
            <span>
              <strong>30%</strong> faster app performance
            </span>
            <span>
              <strong>40%</strong> team velocity improvement
            </span>
            <span>
              <strong>15+</strong> critical crash fixes
            </span>
          </div>
          <div className="audience-actions">
            <a className="button-primary" href="#experience">
              View experience <span aria-hidden="true">↘</span>
            </a>
            <a
              className="audience-text-link"
              href="/sanjeev-gaur-resume.pdf"
              download
            >
              Download résumé ↓
            </a>
            <a
              className="audience-text-link"
              href="mailto:sanjeevgaur797@gmail.com?subject=Frontend%20or%20React%20Native%20role"
            >
              Discuss a role ↗
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
