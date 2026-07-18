const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];

type SelectedWork = {
  name: string;
  category: string;
  tagline?: string;
  description: string;
  philosophy?: string;
  status: string;
  technologies?: string[];
  href?: string;
  ctaLabel?: string;
  variant: string;
};

const selectedWork: SelectedWork[] = [
  {
    name: "PJB Daily",
    category: "Productivity",
    tagline: "Everything you need to organize your day.",
    description:
      "PJB Daily combines calendar planning, tasks, notes, recurring reminders, and daily progress tracking into one beautifully designed productivity experience.",
    status: "Available on Google Play",
    technologies: ["React Native", "Expo", "TypeScript", "Supabase"],
    href: "/projects/pjb-daily",
    variant: "productivity",
  },
  {
    name: "PJBCrewLink",
    category: "Workforce Platform",
    tagline: "One portal. Every shift.",
    description:
      "A modern workforce platform designed to simplify the daily experience for employees by bringing schedules, work selection, communication, time-off requests, company documents, and workplace tools together in one secure, intuitive portal. Built for organizations that want to replace outdated processes with a modern digital workforce experience.",
    philosophy: "Work shouldn't be harder than the job itself.",
    status: "Planning & Design",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
    href: "/projects/pjbcrewlink",
    ctaLabel: "Explore the Vision",
    variant: "crewlink",
  },
  {
    name: "PJB Fit",
    category: "AI-Assisted Fitness Coaching",
    tagline: "Progress over perfection.",
    description:
      "A premium fitness application in active development that combines guided workouts, supportive coaching, and intelligent progress tracking to help users build healthier habits through consistency rather than perfection.",
    status: "Active Development",
    technologies: ["Expo", "React Native", "TypeScript", "Expo Router", "Supabase Planned"],
    href: "/projects/pjb-fit",
    ctaLabel: "Explore the Project",
    variant: "fit",
  },
  {
    name: "PJB Vault",
    category: "Productivity & Cloud Storage",
    description:
      "A secure cloud storage platform for organizing, protecting, and sharing your photos, videos, and files across all your devices.",
    status: "In Planning",
    href: "/projects/pjb-vault",
    variant: "productivity",
  },
  {
    name: "AllSports GM",
    category: "Sports Management Simulation",
    description:
      "Build your own professional sports franchise and guide it from expansion team to dynasty through strategic management, fictional athletes, and long-term organizational growth.",
    status: "Currently in Development",
    href: "/projects/allsports-gm",
    variant: "sports",
  },
];

const moreProjects = [
  { name: "PartyPlayer", category: "Interactive Party Games Platform" },
  { name: "Stories by Eliza", category: "Story Writing & Reader Platform" },
  {
    name: "Untitled Barber & Stylist Platform",
    category: "Business Tools for Barbers & Stylists",
  },
  { name: "And More to Come", category: "Future Apps & Web Experiences" },
];

const capabilities = [
  {
    title: "Mobile Applications",
    description:
      "Polished mobile-first experiences shaped around clear workflows, useful features, and everyday usability.",
  },
  {
    title: "Web Platforms",
    description:
      "Responsive web products and front-facing platforms built with modern architecture and strong user experience.",
  },
  {
    title: "Business Software",
    description:
      "Practical tools for replacing manual processes, organizing operational data, and supporting real teams.",
  },
  {
    title: "Product Design",
    description:
      "Thoughtful interface systems, product flows, and interaction details that make complex ideas approachable.",
  },
  {
    title: "AI-Assisted Experiences",
    description:
      "Focused AI-assisted features that support useful outcomes without turning the product into hype.",
  },
  {
    title: "Interactive Digital Products",
    description:
      "Engaging product concepts, simulations, and digital experiences designed around clear user value.",
  },
];

const principles = [
  {
    number: "01",
    title: "Solve a meaningful problem",
    description: "Build around a real need rather than technology for its own sake.",
  },
  {
    number: "02",
    title: "Make the experience intuitive",
    description:
      "Handle complexity thoughtfully so the product remains clear and approachable.",
  },
  {
    number: "03",
    title: "Build with care",
    description:
      "Treat design quality, clean engineering, and reliability as essential.",
  },
  {
    number: "04",
    title: "Improve continuously",
    description:
      "Test, learn, refine, and allow every product to keep evolving.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description: "Understand the idea, audience, and real problem.",
  },
  {
    number: "02",
    title: "Define",
    description: "Shape the product vision, priorities, and experience.",
  },
  {
    number: "03",
    title: "Design",
    description: "Create clear, thoughtful, and polished interfaces.",
  },
  {
    number: "04",
    title: "Build",
    description: "Turn the approved direction into reliable software.",
  },
  {
    number: "05",
    title: "Improve",
    description: "Test, learn, refine, and continue evolving.",
  },
];

const focusAreas = [
  "Product-Focused",
  "Practical Innovation",
  "Thoughtful Design",
  "Continuous Improvement",
];

function BrandMark({ stacked = false }: { stacked?: boolean }) {
  return (
    <div className={stacked ? "brand-stack" : "brand-inline"}>
      <span className="brand-wordmark" aria-label="PJBStudios">
        <span>PJB</span>
        <span>Studios</span>
      </span>
      {stacked ? <span className="brand-tagline">Ideas Into Reality.</span> : null}
    </div>
  );
}

function SectionHeader({
  id,
  eyebrow,
  title,
  body,
}: {
  id: string;
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {body ? <p>{body}</p> : null}
    </div>
  );
}

function ProductPreview({ variant }: { variant: string }) {
  if (variant === "fit") {
    return (
      <div className="product-preview product-preview-fit" aria-hidden="true">
        <div className="fit-preview-rings">
          <span />
          <span />
        </div>
        <div className="fit-preview-phone">
          <div className="fit-preview-speaker" />
          <div className="fit-preview-progress" />
          <span />
          <span />
          <span />
        </div>
        <div className="fit-preview-card fit-preview-card-primary">
          <i />
          <i />
          <i />
        </div>
        <div className="fit-preview-card fit-preview-card-secondary">
          <span />
          <span />
        </div>
        <div className="fit-preview-pulse">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    );
  }

  if (variant === "crewlink") {
    return (
      <div
        className="product-preview product-preview-crewlink"
        aria-hidden="true"
      >
        <div className="crewlink-showcase-light" />
        <div className="crewlink-monitor">
          <div className="crewlink-monitor-screen">
            <div className="crewlink-monitor-topbar">
              <span />
              <span />
              <span />
            </div>
            <div className="crewlink-monitor-grid">
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="crewlink-monitor-main">
              <i />
              <i />
              <i />
            </div>
            <div className="crewlink-monitor-side">
              <span />
              <span />
            </div>
          </div>
          <div className="crewlink-monitor-stand" />
        </div>
        <div className="crewlink-phone">
          <div className="crewlink-phone-speaker" />
          <div className="crewlink-phone-card" />
          <span />
          <span />
          <span />
        </div>
        <div className="crewlink-float-card crewlink-float-card-a">
          <span />
          <i />
        </div>
        <div className="crewlink-float-card crewlink-float-card-b">
          <span />
          <i />
        </div>
        <div className="crewlink-float-card crewlink-float-card-c">
          <span />
          <i />
        </div>
      </div>
    );
  }

  return (
    <div className={`product-preview product-preview-${variant}`} aria-hidden="true">
      <div className="preview-orbit" />
      <div className="preview-panel preview-panel-primary">
        <div />
        <div />
        <div />
      </div>
      <div className="preview-panel preview-panel-secondary">
        <span />
        <span />
      </div>
      <div className="preview-chip" />
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="hero-device hero-device-main">
        <div className="hero-device-bar" />
        <div className="hero-chart">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="hero-lines">
          <i />
          <i />
          <i />
        </div>
      </div>
      <div className="hero-device hero-device-side">
        <div className="hero-device-bar" />
        <div className="hero-grid">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="hero-badge">
        <span>Build</span>
        <strong>01</strong>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <a className="nav-brand" href="#top" aria-label="PJBStudios home">
          <BrandMark />
        </a>
        <div className="nav-links" aria-label="Homepage sections">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <a className="nav-cta" href="#contact">
          Start a Conversation
        </a>
        <details className="mobile-nav">
          <summary aria-label="Toggle navigation menu">
            <span />
            <span />
            <span />
          </summary>
          <div className="mobile-nav-panel">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
            <a href="#contact">Start a Conversation</a>
          </div>
        </details>
      </nav>
    </header>
  );
}

export default function Home() {
  return (
    <div id="top" className="site-page">
      <Navigation />
      <main>
        <section className="hero-section" aria-labelledby="hero-heading">
          <div className="container hero-grid-layout">
            <div className="hero-copy">
              <p className="eyebrow">Ideas Into Reality.</p>
              <h1 id="hero-heading">
                Turning thoughtful ideas into software people love to use.
              </h1>
              <p>
                PJBStudios designs and builds polished mobile apps, web platforms,
                and digital products created to solve real problems and deliver
                exceptional experiences.
              </p>
              <div className="hero-actions" aria-label="Hero actions">
                <a className="button button-primary" href="#work">
                  Explore Our Work
                </a>
                <a className="button button-secondary" href="#capabilities">
                  What We Build
                </a>
              </div>
            </div>
            <HeroVisual />
          </div>
        </section>

        <section id="work" className="page-section" aria-labelledby="work-heading">
          <div className="container">
            <SectionHeader
              id="work-heading"
              eyebrow="Selected Work"
              title="Products shaped around practical, real-world use."
              body="A focused look at products and platforms that may appear publicly as PJBStudios continues to grow."
            />
            <div className="work-grid">
              {selectedWork.map((project) => (
                <article className="work-card" key={project.name}>
                  <ProductPreview variant={project.variant} />
                  <div className="work-card-content">
                    <div>
                      <p className="card-kicker">{project.category}</p>
                      <h3>{project.name}</h3>
                      {project.tagline ? (
                        <p className="work-tagline">{project.tagline}</p>
                      ) : null}
                    </div>
                    <p>{project.description}</p>
                    {project.philosophy ? (
                      <p className="work-philosophy">{project.philosophy}</p>
                    ) : null}
                    {project.technologies ? (
                      <div
                        className="work-tech-list"
                        aria-label={`${project.name} technology stack`}
                      >
                        {project.technologies.map((technology) => (
                          <span key={technology}>{technology}</span>
                        ))}
                      </div>
                    ) : null}
                    <span>{project.status}</span>
                    {project.href ? (
                      <a className="work-card-link" href={project.href}>
                        {project.ctaLabel ?? "Learn More"}
                      </a>
                    ) : project.ctaLabel ? (
                      <button className="work-card-link" type="button" disabled>
                        {project.ctaLabel}
                      </button>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="more-projects-section"
          aria-labelledby="more-projects-heading"
        >
          <div className="container more-projects-layout">
            <div>
              <p className="eyebrow">Portfolio Outlook</p>
              <h2 id="more-projects-heading">More Projects in Development</h2>
            </div>
            <div className="more-projects-list" role="list">
              {moreProjects.map((project, index) => (
                <div className="more-project-item" role="listitem" key={project.name}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{project.name}</h3>
                    {project.category ? <p>{project.category}</p> : null}
                  </div>
                  <i aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="capabilities"
          className="page-section section-muted"
          aria-labelledby="capabilities-heading"
        >
          <div className="container">
            <SectionHeader
              id="capabilities-heading"
              eyebrow="Capabilities"
              title="A studio built for useful digital products."
              body="PJBStudios combines product thinking, visual clarity, and practical engineering across focused software experiences."
            />
            <div className="capability-grid">
              {capabilities.map((capability) => (
                <article className="capability-card" key={capability.title}>
                  <span className="capability-icon" aria-hidden="true" />
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="page-section purpose-section" aria-labelledby="purpose-heading">
          <div className="container purpose-grid">
            <div>
              <p className="eyebrow">Built with Purpose</p>
              <h2 id="purpose-heading">
                Every product begins with a real-world challenge.
              </h2>
              <p>
                We combine thoughtful design, practical technology, and continuous
                improvement to turn promising ideas into useful digital experiences.
              </p>
            </div>
            <div className="purpose-panel" aria-hidden="true">
              <div className="purpose-card">
                <span />
                <strong>Ideas become products.</strong>
              </div>
            </div>
            <div className="principle-list">
              {principles.map((principle) => (
                <article className="principle-item" key={principle.number}>
                  <span>{principle.number}</span>
                  <div>
                    <h3>{principle.title}</h3>
                    <p>{principle.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="page-section" aria-labelledby="process-heading">
          <div className="container">
            <SectionHeader
              id="process-heading"
              eyebrow="From Idea to Reality"
              title="A clear path from concept to polished software."
            />
            <div className="process-grid">
              {processSteps.map((step) => (
                <article className="process-step" key={step.number}>
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="page-section about-section" aria-labelledby="about-heading">
          <div className="container about-grid">
            <div>
              <p className="eyebrow">About the Studio</p>
              <h2 id="about-heading">
                A growing studio built around ambitious ideas.
              </h2>
            </div>
            <div className="about-copy">
              <p>
                PJBStudios is a growing software and creative technology studio
                focused on transforming thoughtful ideas into polished digital
                products. From productivity tools and fitness experiences to
                business platforms, entertainment, and cloud technology, every
                project begins with a real problem worth solving.
              </p>
              <div className="focus-grid" aria-label="PJBStudios focus areas">
                {focusAreas.map((area) => (
                  <span key={area}>{area}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="page-section final-cta" aria-labelledby="cta-heading">
          <div className="container cta-panel">
            <p className="eyebrow">Start a Conversation</p>
            <h2 id="cta-heading">Every great product begins with an idea.</h2>
            <div className="idea-sequence">
              <span>Ideas become sketches.</span>
              <span>Sketches become prototypes.</span>
              <span>Prototypes become software.</span>
              <span>Software becomes reality.</span>
            </div>
            <BrandMark stacked />
            <a className="button button-primary" href="#contact">
              Start a Conversation
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <BrandMark stacked />
            <p>
              PJBStudios creates thoughtful software, digital products, and
              experiences designed to solve real-world problems.
            </p>
          </div>
          <nav aria-label="Footer navigation">
            <a href="#work">Work</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#process">Process</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
          <nav aria-label="Legal links">
            <a href="#top">Privacy Policy placeholder</a>
            <a href="#top">Terms of Service placeholder</a>
          </nav>
          <p className="copyright">&copy; PJBStudios. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
