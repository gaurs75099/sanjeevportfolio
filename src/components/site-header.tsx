import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a className="brand" href="#home" aria-label="Sanjeev Gaur, home">
          <span className="brand-mark" aria-hidden="true">
            SG
          </span>
          <span>Sanjeev Gaur</span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a className="nav-experience" href="#experience">
            Experience
          </a>
          <a className="nav-about" href="#about">
            About
          </a>
          <a href="#contact">Contact</a>
          <a className="nav-resume" href="/sanjeev-gaur-resume.pdf" download>
            Resume <span aria-hidden="true">↓</span>
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
