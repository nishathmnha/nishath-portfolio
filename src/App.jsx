import { useEffect, useMemo, useState } from "react";
import portfolio from "./content/portfolioData";

const hasUrl = (item) => typeof item?.url === "string" && item.url.trim().length > 0;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState("demo");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.15, 0.35, 0.55]
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const year = useMemo(() => new Date().getFullYear(), []);
  const publicProfiles = useMemo(() => portfolio.profiles.filter(hasUrl), []);
  const publicMedia = useMemo(() => portfolio.media.filter(hasUrl), []);
  const publicVideos = useMemo(() => portfolio.demoVideos.filter(hasUrl), []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("nishathmnha2000@gmail.com");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="app-shell">
      <div className="backdrop backdrop-one" aria-hidden="true" />
      <div className="backdrop backdrop-two" aria-hidden="true" />

      <header className="site-header">
        <div className="container header-row">
          <a href="#top" className="brand">
            <span className="brand-mark">NA</span>
            <span className="brand-copy">
              <strong>Nishath Ahamed</strong>
              <span>Backend Engineer and AI Builder</span>
            </span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span />
            <span />
          </button>

          <nav className={`nav ${menuOpen ? "is-open" : ""}`}>
            {portfolio.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={activeSection === item.href.slice(1) ? "is-active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a className="button button-ghost desktop-cta" href="/Nishath_Ahamed_CV.pdf" target="_blank" rel="noreferrer">
            View CV
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Backend engineer focused on reliability, fintech, and applied AI</p>
              <h1>Shipping backend systems and applied AI that teams can trust.</h1>
              <p className="lede">
                I am Nishath Ahamed, an Associate Software Engineer at Axiata Digital Labs working across fintech
                backend delivery, RAG systems, event-driven integrations, and production-minded AI workflows.
              </p>
              <p className="sublede">
                I work best where product pressure, integration complexity, and practical AI implementation meet. This
                site keeps the story simple: what I build, how I think, and where to verify the work.
              </p>

              <div className="hero-actions">
                <a className="button" href="#projects">
                  View Work
                </a>
                <a className="button button-secondary" href="mailto:nishathmnha2000@gmail.com">
                  Contact Me
                </a>
                <a className="button button-ghost" href="https://linkedin.com/in/ahamed-nishath" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>

              <ul className="strength-list">
                {portfolio.strengths.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="metrics-row">
                {portfolio.heroMetrics.map((metric) => (
                  <article key={metric.label} className="metric-card">
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </article>
                ))}
              </div>
            </div>

            <aside className="hero-panel">
              <div className="profile-card">
                <div className="profile-body">
                  <p className="card-label">Profile Snapshot</p>
                  <div className="profile-head">
                    <div className="avatar-shell">
                      <img src="/profile.jpg" alt="Portrait of Nishath Ahamed" />
                    </div>
                    <div className="profile-intro">
                      <span className="availability-badge">Open to backend and applied AI roles</span>
                      <h3>Nishath Ahamed</h3>
                      <p className="profile-role">Associate Software Engineer at Axiata Digital Labs</p>
                    </div>
                  </div>

                  <ul className="profile-facts">
                    <li>
                      <span>Focus</span>
                      <strong>Backend APIs, RAG systems, AI agent workflows</strong>
                    </li>
                    <li>
                      <span>Strength</span>
                      <strong>Turning AI ideas into maintainable product capability</strong>
                    </li>
                    <li>
                      <span>Education</span>
                      <strong>B.Sc. (Hons) IT, University of Moratuwa</strong>
                    </li>
                    <li>
                      <span>Location</span>
                      <strong>Matara, Sri Lanka</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {publicVideos.length > 0 ? (
          <section className="section section-demo" id="demo">
            <div className="container demo-layout">
              <div className="section-heading showcase-heading">
                <p className="eyebrow">Demo</p>
                <h2>Featured product walkthroughs.</h2>
                <p className="section-copy">
                  A closer look at selected AI builds, from multi-agent assistants to agentic RAG and CI/CD remediation workflows.
                </p>
              </div>

              <div className="featured-demo-list">
                {publicVideos.map((video) => (
                  <article key={video.title} className="featured-demo-card">
                    <a className="featured-demo-thumb" href={video.url} target="_blank" rel="noreferrer">
                      {video.thumbnail ? (
                        <img src={video.thumbnail} alt={video.title} />
                      ) : (
                        <div className="featured-demo-placeholder">
                          <div className="demo-placeholder-card">
                            <span>Project Flow</span>
                            <strong>{video.visualTitle || "Demo Preview"}</strong>
                            {video.visualItems?.length > 0 ? (
                              <ul>
                                {video.visualItems.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            ) : null}
                          </div>
                        </div>
                      )}
                      <span className="featured-demo-play">{video.ctaLabel || "Open showcase"}</span>
                    </a>

                    <div className="featured-demo-body">
                      <p className="card-label">{video.platform}</p>
                      <h3>{video.title}</h3>
                      <p>{video.summary}</p>
                      <a className="inline-link" href={video.url} target="_blank" rel="noreferrer">
                        {video.linkLabel || "Open showcase"}
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="section" id="experience">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Experience</p>
              <h2>Enterprise backend delivery with growing depth in production-oriented AI systems.</h2>
            </div>

            <div className="timeline">
              {portfolio.experience.map((job) => (
                <article key={job.role + job.period} className="timeline-card">
                  <div className="timeline-meta">
                    <span className="timeline-period">{job.period}</span>
                    <h3>{job.role}</h3>
                    <p>{job.company}</p>
                  </div>
                  <div className="timeline-body">
                    <p>{job.summary}</p>
                    <ul>
                      {job.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-projects" id="projects">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Selected Work</p>
              <h2>Projects presented as clear proof, with room for code, demos, and case-study depth.</h2>
            </div>

            <div className="project-grid">
              {portfolio.projects.map((project) => {
                const publicLinks = project.links.filter(hasUrl);

                return (
                  <article key={project.title} className="project-card">
                    <div className="project-top">
                      <div>
                        <p className="project-category">{project.category}</p>
                        <h3>{project.title}</h3>
                      </div>
                      <span className="project-status">{project.status}</span>
                    </div>

                    <p className="project-summary">{project.summary}</p>

                    <ul className="project-impact">
                      {project.impact.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>

                    <ul className="project-stack">
                      {project.stack.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>

                    {publicLinks.length > 0 ? (
                      <div className="project-links">
                        {publicLinks.map((link) => (
                          <a key={link.label} className="resource-chip" href={link.url} target="_blank" rel="noreferrer">
                            {link.label}
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section" id="credentials">
          <div className="container credentials-grid">
            <div>
              <div className="section-heading">
                <p className="eyebrow">Credentials</p>
                <h2>Certifications, profiles, and public proof that support the portfolio story.</h2>
              </div>

              <div className="certificate-grid">
                {portfolio.certifications.map((item) => (
                  <article key={item.title} className="certificate-card">
                    <p className="card-label">{item.issuer}</p>
                    <h3>{item.title}</h3>
                    {item.completedAt ? <p className="certificate-meta">Completed {item.completedAt}</p> : null}
                    <p>{item.description}</p>
                    {item.link ? (
                      <a className="inline-link" href={item.link} target="_blank" rel="noreferrer">
                        View credential
                      </a>
                    ) : null}
                  </article>
                ))}
              </div>
            </div>

            <aside className="sidebar-column">
              <article className="sidebar-card">
                <p className="card-label">Profiles</p>
                <div className="resource-list">
                  {publicProfiles.map((item) => (
                    <a key={item.title} className="resource-row" href={item.url} target="_blank" rel="noreferrer">
                      <div>
                        <strong>{item.title}</strong>
                        <p>{item.meta}</p>
                      </div>
                      <span>Open</span>
                    </a>
                  ))}
                </div>
              </article>

              {publicMedia.length > 0 ? (
                <article className="sidebar-card">
                  <p className="card-label">Writing and Media</p>
                  <div className="resource-list">
                    {publicMedia.map((item) => (
                      <a key={item.title} className="resource-row" href={item.url} target="_blank" rel="noreferrer">
                        <div>
                          <strong>{item.title}</strong>
                          <p>{item.meta}</p>
                        </div>
                        <span>Open</span>
                      </a>
                    ))}
                  </div>
                </article>
              ) : null}

              <article className="sidebar-card sidebar-card-accent">
                <p className="card-label">Education</p>
                <h3>University of Moratuwa</h3>
                <p>B.Sc. (Hons) Information Technology</p>
                <p className="muted-copy">2019 - 2025 | Second Class Upper Division</p>
              </article>
            </aside>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container">
            <div className="contact-panel">
              <div className="contact-copy">
                <p className="eyebrow">Contact</p>
                <h2>If you are hiring for backend, platform, or applied AI engineering, this portfolio is ready for that conversation.</h2>
                <p>
                  I bring enterprise backend experience, practical AI systems work, and the delivery habits that help
                  teams trust an engineer quickly.
                </p>
              </div>

              <div className="contact-actions">
                <a className="button" href="mailto:nishathmnha2000@gmail.com">
                  Start the Conversation
                </a>
                <button className="button button-secondary" type="button" onClick={handleCopy}>
                  {copied ? "Email Copied" : "Copy Email"}
                </button>
                <a className="button button-ghost" href="/Nishath_Ahamed_CV.pdf" target="_blank" rel="noreferrer">
                  Open CV
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-row">
          <p>Nishath Ahamed | Backend Engineer | Fintech and Applied AI</p>
          <p>Built with React and Vite for clean static deployment.</p>
          <p>{year}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
