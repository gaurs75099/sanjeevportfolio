import Image from "next/image";

export function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="shell hero-grid">
        <div>
          <div className="eyebrow">
            <span className="status-dot" aria-hidden="true" />
            Open to freelance projects & full-time roles
          </div>
          <h1>
            Apps & websites,
            <br />
            built to <em>make an impact.</em>
          </h1>
          <p className="hero-copy">
            I&apos;m Sanjeev, a React Native, React.js, and Next.js developer
            with 5+ years of experience. I build digital products for
            businesses and bring production-ready skills to engineering teams.
          </p>
          <div className="hero-actions">
            <a className="button-primary" href="#client-path">
              I have a project <span aria-hidden="true">↘</span>
            </a>
            <a className="text-link" href="#hiring-path">
              I&apos;m hiring <span aria-hidden="true">↘</span>
            </a>
          </div>
        </div>
        <aside className="profile-card" aria-label="Developer profile">
          <Image
            className="profile-image"
            src="/sanjeev-gaur-profile.jpg"
            alt="Sanjeev Gaur, Senior React Native Developer"
            fill
            priority
            sizes="(max-width: 800px) 100vw, 40vw"
          />
          <div className="profile-shade" aria-hidden="true" />
          <div className="profile-location">Indore, India</div>
          <div className="profile-caption">
            <span className="profile-kicker">React Native · React · Next.js</span>
            <h2>Sanjeev Gaur</h2>
            <p>Senior React Native Developer · Rayosys</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
