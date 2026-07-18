import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const productUrl = "https://allsportsgm.com";

const currentFeatures = [
  {
    title: "Franchise Creation",
    body: "Create the foundation for a new professional sports franchise and begin shaping its organizational identity.",
  },
  {
    title: "Staff Builder",
    body: "Build the staff structure that supports the franchise and its long-term management direction.",
  },
  {
    title: "Roster Builder",
    body: "Assemble and organize a roster built entirely around fictional athletes.",
  },
  {
    title: "Salary Cap",
    body: "Track roster construction against the current salary-cap framework.",
  },
  {
    title: "Budget Tracking",
    body: "Monitor organizational spending as part of the current management workflow.",
  },
  {
    title: "Membership Framework",
    body: "Use the foundational membership structure supporting the product's evolving access model.",
  },
  {
    title: "Responsive Dashboard",
    body: "Manage the current franchise experience across desktop, tablet, and mobile layouts.",
  },
  {
    title: "Local Persistence",
    body: "Retain core franchise setup data locally throughout the current development build.",
  },
];

const plannedFeatures = [
  "Draft",
  "Free Agency",
  "Trades",
  "Contracts",
  "League Management",
  "Season Simulation",
  "Player Development",
  "Scouting",
  "Injuries",
  "Morale",
  "Multi-Sport Expansion",
];

const technologyStack = [
  { name: "Next.js", body: "Browser application foundation and routing." },
  { name: "React", body: "Component-based product interface." },
  { name: "TypeScript", body: "Typed, maintainable application code." },
  { name: "Tailwind CSS", body: "Responsive interface styling." },
  { name: "shadcn/ui", body: "Accessible interface building blocks." },
  { name: "GitHub", body: "Source control and development workflow." },
  { name: "Vercel", body: "Hosting and deployment platform." },
];

const philosophyPrinciples = [
  {
    title: "Architecture First",
    body: "Establish dependable product foundations before expanding the simulation surface.",
  },
  {
    title: "Incremental Development",
    body: "Build and validate one management system at a time as the product evolves.",
  },
  {
    title: "Maintainability",
    body: "Keep systems organized so future mechanics can be added without unnecessary rework.",
  },
  {
    title: "Scalability",
    body: "Shape the foundation for deeper league systems and future multi-sport growth.",
  },
  {
    title: "Premium Presentation",
    body: "Treat clarity, polish, and responsive behavior as essential parts of the simulation.",
  },
  {
    title: "Fictional Players",
    body: "Build the experience around original athletes, histories, and organizations rather than real-world likenesses.",
  },
];

const roadmap = [
  {
    phase: "Current",
    description: "Core franchise-management foundation",
    items: [
      "Franchise creation",
      "Staff and roster builders",
      "Salary cap and budget tracking",
      "Membership framework",
      "Responsive dashboard",
      "Local persistence",
    ],
  },
  {
    phase: "Short-Term",
    description: "Player movement and roster operations",
    items: ["Planned: Draft", "Planned: Free agency", "Planned: Trades", "Planned: Contracts"],
  },
  {
    phase: "Medium-Term",
    description: "Deeper league and season systems",
    items: [
      "Planned: League management",
      "Planned: Season simulation",
      "Planned: Player development",
      "Planned: Scouting",
    ],
  },
  {
    phase: "Long-Term",
    description: "Expanded simulation depth",
    items: ["Planned: Injuries", "Planned: Morale", "Planned: Multi-sport expansion"],
  },
];

const galleryItems = [
  {
    title: "Franchise Workspace",
    caption: "Reserved for the franchise-creation and management dashboard.",
    alt: "AllSports GM franchise workspace screenshot",
    assetPath: "/images/projects/allsports-gm/franchise-workspace.jpg",
    available: false,
  },
  {
    title: "Staff and Roster",
    caption: "Reserved for the implemented staff and roster builders.",
    alt: "AllSports GM staff and roster builders screenshot",
    assetPath: "/images/projects/allsports-gm/staff-roster.jpg",
    available: false,
  },
  {
    title: "Financial Controls",
    caption: "Reserved for salary-cap and budget-tracking views.",
    alt: "AllSports GM salary cap and budget tracking screenshot",
    assetPath: "/images/projects/allsports-gm/financial-controls.jpg",
    available: false,
  },
  {
    title: "Responsive Dashboard",
    caption: "Reserved for the management experience across screen sizes.",
    alt: "AllSports GM responsive dashboard screenshot",
    assetPath: "/images/projects/allsports-gm/responsive-dashboard.jpg",
    available: false,
  },
];

export const metadata: Metadata = {
  title: "AllSports GM | PJBStudios",
  description:
    "AllSports GM is a browser-based sports franchise management simulator focused on organizational management, fictional athletes, and long-term progression.",
};

function BrandMark({ stacked = false }: { stacked?: boolean }) {
  return (
    <span className={stacked ? "brand-stack" : "brand-inline"}>
      <span className="brand-wordmark" aria-label="PJBStudios">
        <span>PJB</span>
        <span>Studios</span>
      </span>
      {stacked ? <span className="brand-tagline">Ideas Into Reality.</span> : null}
    </span>
  );
}

function ProductSection({
  id,
  eyebrow,
  title,
  body,
  children,
  muted = false,
}: {
  id: string;
  eyebrow: string;
  title: string;
  body?: string;
  children: React.ReactNode;
  muted?: boolean;
}) {
  return (
    <section
      id={id}
      className={`product-showcase-section page-section${muted ? " section-muted" : ""}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">{eyebrow}</p>
          <h2 id={`${id}-heading`}>{title}</h2>
          {body ? <p>{body}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}

function SportsArtwork() {
  return (
    <div
      className="product-artwork-panel allsports-artwork-panel"
      role="img"
      aria-label="Abstract AllSports GM franchise dashboard artwork"
    >
      <div className="allsports-artwork-glow" />
      <div className="allsports-dashboard">
        <div className="allsports-dashboard-bar">
          <div>
            <i />
            <i />
            <i />
          </div>
          <span />
        </div>
        <div className="allsports-dashboard-layout">
          <div className="allsports-dashboard-rail">
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className="allsports-dashboard-main">
            <div className="allsports-field">
              <span />
              <span />
              <span />
              <i />
            </div>
            <div className="allsports-dashboard-stats">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>
      <div className="allsports-badge-mark">
        <span>GM</span>
      </div>
      <div className="allsports-artwork-card allsports-artwork-card-one">
        <span />
        <i />
        <i />
      </div>
      <div className="allsports-artwork-card allsports-artwork-card-two">
        <span />
        <i />
      </div>
    </div>
  );
}

function ScreenshotGallery() {
  return (
    <div className="screenshot-gallery allsports-gallery">
      {galleryItems.map((item, index) => (
        <article className="screenshot-card" key={item.title}>
          <div className="screenshot-device allsports-screenshot-device">
            {item.available ? (
              <Image
                className="allsports-screenshot-image"
                src={item.assetPath}
                alt={item.alt}
                fill
                sizes="(min-width: 1040px) 22vw, (min-width: 720px) 44vw, 88vw"
              />
            ) : (
              <div className="screenshot-slot allsports-screenshot-slot">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item.title}</strong>
                <small>Screenshot reserved</small>
              </div>
            )}
          </div>
          <div>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{item.title}</h3>
            <p>{item.caption}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function ProductFooter() {
  return (
    <footer className="site-footer product-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <BrandMark stacked />
          <p>
            AllSports GM is a browser-based sports franchise management
            simulator in active development by PJBStudios.
          </p>
        </div>
        <nav aria-label="AllSports GM page sections">
          <a href="#overview">Overview</a>
          <a href="#features">Current Features</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#gallery">Gallery</a>
        </nav>
        <nav aria-label="Project links">
          <a href={productUrl} target="_blank" rel="noreferrer">
            AllSportsGM.com
          </a>
          <Link href="/">PJBStudios Home</Link>
          <Link href="/#work">Selected Work</Link>
        </nav>
        <p className="copyright">&copy; PJBStudios. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function AllSportsGmProjectPage() {
  return (
    <div className="site-page product-page allsports-page">
      <header className="site-header product-header">
        <nav className="nav-shell" aria-label="AllSports GM navigation">
          <Link className="nav-brand" href="/" aria-label="PJBStudios home">
            <BrandMark />
          </Link>
          <div className="product-nav-actions">
            <a href="#overview">Overview</a>
            <a href="#features">Features</a>
            <a href="#roadmap">Roadmap</a>
            <Link className="nav-cta project-nav-link" href="/#work">
              Back to Projects
            </Link>
          </div>
        </nav>
      </header>

      <main>
        <section className="product-hero page-section" aria-labelledby="product-heading">
          <div className="container product-hero-layout">
            <div className="product-hero-copy">
              <p className="eyebrow">Sports Management Simulation</p>
              <h1 id="product-heading">Build. Manage. Dominate.</h1>
              <p className="product-tagline">AllSports GM</p>
              <p>
                AllSports GM is a browser-based sports franchise management
                simulator focused on organizational management, fictional
                athletes, and long-term progression.
              </p>
              <div className="product-meta" aria-label="AllSports GM status">
                <span>Currently in Development</span>
              </div>
              <div className="product-hero-actions">
                <a
                  className="button button-primary allsports-button-primary"
                  href={productUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit AllSportsGM.com
                </a>
                <Link className="button button-secondary" href="/#work">
                  Back to Projects
                </Link>
              </div>
            </div>
            <SportsArtwork />
          </div>
        </section>

        <ProductSection
          id="overview"
          eyebrow="Project Overview"
          title="Build the organization behind the team."
          body="AllSports GM brings franchise structure, fictional athletes, and long-term organizational decisions into one browser-based management experience."
          muted
        >
          <div className="allsports-overview-grid">
            <article className="overview-statement allsports-overview-lead">
              <span>01</span>
              <h3>What it is</h3>
              <p>
                A sports franchise management simulator centered on building
                and operating a professional organization rather than controlling
                athletes on the field.
              </p>
            </article>
            <article className="overview-statement">
              <span>02</span>
              <h3>Why it was created</h3>
              <p>
                To create one focused browser experience for franchise setup,
                staff, rosters, financial structure, and long-term progression.
              </p>
            </article>
            <article className="overview-statement">
              <span>03</span>
              <h3>The problem it solves</h3>
              <p>
                It organizes the decisions behind building a franchise so the
                management experience can grow without losing clarity.
              </p>
            </article>
            <article className="overview-statement">
              <span>04</span>
              <h3>The vision</h3>
              <p>
                Guide an expansion franchise toward a dynasty through strategic
                management, fictional athletes, and long-term organizational growth.
              </p>
            </article>
          </div>
        </ProductSection>

        <ProductSection
          id="features"
          eyebrow="Implemented Today"
          title="The current franchise-management foundation."
          body="These capabilities are implemented in the current development build."
        >
          <div className="allsports-card-grid">
            {currentFeatures.map((feature) => (
              <article className="feature-card allsports-feature-card" key={feature.title}>
                <span>Implemented</span>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </article>
            ))}
          </div>
        </ProductSection>

        <ProductSection
          id="planned"
          eyebrow="Planned Functionality"
          title="The deeper simulation is still ahead."
          body="The following systems are documented product directions and are not presented as implemented functionality."
          muted
        >
          <div className="allsports-planned-grid">
            {plannedFeatures.map((feature, index) => (
              <article className="allsports-planned-card" key={feature}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <p>Planned</p>
                  <h3>{feature}</h3>
                </div>
              </article>
            ))}
          </div>
        </ProductSection>

        <ProductSection
          id="technology"
          eyebrow="Technology Stack"
          title="Modern tools supporting a maintainable browser product."
        >
          <div className="allsports-tech-grid">
            {technologyStack.map((technology) => (
              <article className="tech-card allsports-tech-card" key={technology.name}>
                <h3>{technology.name}</h3>
                <p>{technology.body}</p>
              </article>
            ))}
          </div>
        </ProductSection>

        <ProductSection
          id="philosophy"
          eyebrow="Development Philosophy"
          title="Build the foundation before expanding the league."
          body="AllSports GM is being developed around deliberate architecture, focused iteration, and a fictional sports universe that can grow over time."
          muted
        >
          <div className="allsports-philosophy-grid">
            {philosophyPrinciples.map((principle, index) => (
              <article className="philosophy-statement" key={principle.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </article>
            ))}
          </div>
        </ProductSection>

        <ProductSection
          id="roadmap"
          eyebrow="Roadmap"
          title="From franchise foundation to multi-sport simulation."
        >
          <div className="roadmap-grid allsports-roadmap">
            {roadmap.map((phase, index) => (
              <article className="roadmap-card" key={phase.phase}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{phase.phase}</h3>
                <p>{phase.description}</p>
                <ul>
                  {phase.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </ProductSection>

        <ProductSection
          id="gallery"
          eyebrow="Screenshot Gallery"
          title="A flexible gallery ready for approved product views."
          body="Real screenshots can replace these structured placeholders without changing the page layout."
          muted
        >
          <ScreenshotGallery />
        </ProductSection>

        <section className="page-section allsports-final-cta" aria-labelledby="follow-heading">
          <div className="container allsports-cta-inner">
            <p className="eyebrow">Follow Development</p>
            <h2 id="follow-heading">The franchise is only getting started.</h2>
            <p>
              Follow AllSports GM as the current management foundation grows
              toward deeper league systems and long-term simulation.
            </p>
            <div className="product-hero-actions">
              <a
                className="button button-primary allsports-button-primary"
                href={productUrl}
                target="_blank"
                rel="noreferrer"
              >
                Follow Development
              </a>
              <Link className="button button-secondary" href="/#work">
                Return to Projects
              </Link>
            </div>
          </div>
        </section>
      </main>

      <ProductFooter />
    </div>
  );
}
