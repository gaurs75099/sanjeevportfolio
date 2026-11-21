export function ContactSection() {
  return (
    <footer className="contact-section" id="contact">
      <div className="shell">
        <div className="contact-card">
          <div>
            <span className="section-index">05 / Projects & opportunities</span>
            <h2>
              Have a project
              <br />
              or a role in mind?
              <br />
              Let&apos;s <em>talk.</em>
            </h2>
            <p className="contact-copy">
              Share your idea, project requirements, or role details.
            </p>
          </div>
          <a
            className="button-primary"
            href="mailto:sanjeevgaur797@gmail.com?subject=Project%20or%20role%20inquiry"
          >
            Get in touch <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="footer-line">
          <span>Sanjeev Gaur · Indore, India</span>
          <div className="footer-links">
            <a href="tel:+917509965159">+91 75099 65159</a>
            <a href="/sanjeev-gaur-resume.pdf" download>
              Download résumé ↓
            </a>
            <a href="#home">Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
