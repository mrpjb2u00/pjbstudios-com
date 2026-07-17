import type { Metadata } from "next";
import Link from "next/link";

const productStats = [
  "Planning & Design",
  "Product vision defined",
  "Production development not started",
];

const technologySummary = ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"];

const plannedModules = [
  {
    title: "Employee Dashboard",
    body: "A planned home base for schedules, updates, requests, and important workplace actions.",
  },
  {
    title: "Schedules",
    body: "A planned view for assigned shifts, upcoming work, and schedule-related context.",
  },
  {
    title: "Work Selection",
    body: "A planned module for replacing paper-heavy work-selection workflows with organized digital steps.",
  },
  {
    title: "Shift Opportunities",
    body: "A planned area for available work, optional shifts, or opportunity-based scheduling flows.",
  },
  {
    title: "Communication and Announcements",
    body: "A planned channel for keeping workplace updates visible and easier to find.",
  },
  {
    title: "Time-Off Requests",
    body: "A planned workflow for requesting, reviewing, and tracking time away from work.",
  },
  {
    title: "Workplace Documents",
    body: "A planned document hub for policies, forms, reference material, and organization resources.",
  },
  {
    title: "Notifications",
    body: "A planned alert layer for important updates, changes, approvals, and reminders.",
  },
  {
    title: "User Profiles",
    body: "A planned account area for employee information, preferences, and access details.",
  },
  {
    title: "Administrative Tools",
    body: "A planned management layer for roles, workflows, configuration, and operational oversight.",
  },
];

const scatteredTools = [
  "Paper processes",
  "Bulletin boards",
  "Spreadsheets",
  "Phone calls",
  "Emails",
  "Separate systems",
];

const solutionFlow = [
  "Centralize workplace information",
  "Guide daily employee workflows",
  "Support secure role-based access",
  "Reduce manual coordination",
];

const philosophyPrinciples = [
  "Reduce complexity",
  "Design for everyday use",
  "Protect workplace information",
  "Support clear communication",
  "Stay flexible across industries",
  "Evolve through discovery",
];

const techStack = [
  {
    name: "Next.js",
    description: "Planned foundation for the web application and product portal.",
  },
  {
    name: "TypeScript",
    description: "Planned language layer for reliable, maintainable product code.",
  },
  {
    name: "Tailwind CSS",
    description: "Planned styling foundation for responsive interface systems.",
  },
  {
    name: "Supabase",
    description: "Planned backend option for authentication, data access, and services.",
  },
  {
    name: "PostgreSQL",
    description: "Planned relational data foundation through Supabase or similar infrastructure.",
  },
  {
    name: "Vercel",
    description: "Planned hosting and deployment target for the web platform.",
  },
];

const statusItems = [
  "Product vision defined",
  "Initial requirements being explored",
  "Interface and architecture not finalized",
  "Production development has not started",
  "Features and technical decisions may evolve",
];

const roadmap = [
  {
    title: "Discovery",
    items: [
      "Product requirements",
      "User roles",
      "Workflow mapping",
      "Data and privacy requirements",
    ],
  },
  {
    title: "Design",
    items: [
      "Design system",
      "Employee dashboard",
      "Work-selection experience",
      "Administrative experience",
      "Responsive prototypes",
    ],
  },
  {
    title: "Foundation",
    items: [
      "Authentication",
      "User profiles",
      "Role-based access",
      "Organization structure",
      "Core database schema",
    ],
  },
  {
    title: "Initial Modules",
    items: [
      "Scheduling",
      "Work selection",
      "Announcements",
      "Documents",
      "Time-off requests",
    ],
  },
  {
    title: "Future Expansion",
    items: [
      "Notifications",
      "Reporting",
      "Mobile experience",
      "Integrations",
      "Organization-specific configuration",
    ],
  },
];

const relatedProjects = [
  {
    name: "PJB Daily",
    label: "Productivity",
    href: "/projects/pjb-daily",
  },
  {
    name: "Cloud Storage Application",
    label: "Mobile and Cloud",
    href: "/#work",
  },
  {
    name: "AllSports GM",
    label: "Sports and Entertainment",
    href: "/#work",
  },
];

export const metadata: Metadata = {
  title: "PJBCrewLink | PJBStudios",
  description:
    "PJBCrewLink is a planned workforce platform vision by PJBStudios for schedules, work selection, communication, time-off requests, documents, and workplace tools.",
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

function ConceptArtwork() {
  return (
    <div
      className="product-artwork-panel crewlink-product-artwork"
      aria-label="Abstract PJBCrewLink product vision artwork"
    >
      <div className="crewlink-product-monitor">
        <div className="crewlink-product-screen">
          <div className="crewlink-product-topbar">
            <span />
            <span />
            <span />
          </div>
          <div className="crewlink-product-grid">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="crewlink-product-line">
            <i />
            <i />
            <i />
          </div>
        </div>
        <div className="crewlink-product-stand" />
      </div>
      <div className="crewlink-product-phone">
        <span />
        <i />
        <i />
        <i />
      </div>
      <div className="crewlink-product-orbit">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

function FeatureCard({
  title,
  body,
  index,
}: {
  title: string;
  body: string;
  index: number;
}) {
  return (
    <article className="feature-card">
      <span>{String(index + 1).padStart(2, "0")}</span>
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  );
}

function TechStackGrid() {
  return (
    <div className="tech-stack-grid">
      {techStack.map((technology) => (
        <article className="tech-card" key={technology.name}>
          <h3>{technology.name}</h3>
          <p>{technology.description}</p>
        </article>
      ))}
    </div>
  );
}

function ProductStatus() {
  return (
    <div className="status-layout">
      <article className="status-panel status-panel-primary">
        <p className="eyebrow">Development Status</p>
        <h3>Planning and design are underway; production development has not started.</h3>
        <p>
          PJBCrewLink is currently being shaped as a product vision. Requirements,
          interfaces, modules, architecture, and implementation details are still
          being explored and may evolve.
        </p>
      </article>
      <article className="status-panel">
        <h3>Current Clarity</h3>
        <ul>
          {statusItems.slice(0, 2).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
      <article className="status-panel">
        <h3>Not Yet Final</h3>
        <ul>
          {statusItems.slice(2).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
    </div>
  );
}

function RoadmapColumns() {
  return (
    <div className="roadmap-grid crewlink-roadmap-grid">
      {roadmap.map((phase) => (
        <article className="roadmap-card" key={phase.title}>
          <h3>{phase.title}</h3>
          <ul>
            {phase.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
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
            PJBCrewLink is a planning-stage product vision from PJBStudios, a
            software and creative technology studio turning thoughtful ideas
            into polished digital products.
          </p>
        </div>
        <nav aria-label="PJBCrewLink page sections">
          <a href="#vision">Vision</a>
          <a href="#modules">Modules</a>
          <a href="#status">Status</a>
          <a href="#roadmap">Roadmap</a>
        </nav>
        <nav aria-label="Project links">
          <Link href="/">PJBStudios Home</Link>
          <Link href="/#work">Selected Work</Link>
          <a href="#related">Related Products</a>
        </nav>
        <p className="copyright">&copy; PJBStudios. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function PjbCrewLinkProjectPage() {
  return (
    <div className="site-page product-page">
      <header className="site-header product-header">
        <nav className="nav-shell" aria-label="PJBCrewLink navigation">
          <Link className="nav-brand" href="/" aria-label="PJBStudios home">
            <BrandMark />
          </Link>
          <div className="product-nav-actions">
            <a href="#modules">Modules</a>
            <a href="#technology">Stack</a>
            <a href="#roadmap">Roadmap</a>
            <Link className="nav-cta project-nav-link" href="/#work">
              Back to PJBStudios
            </Link>
          </div>
        </nav>
      </header>

      <main>
        <section className="product-hero page-section" aria-labelledby="product-heading">
          <div className="container product-hero-layout">
            <div className="product-hero-copy">
              <p className="eyebrow">Planning-Stage Product by PJBStudios</p>
              <h1 id="product-heading">PJBCrewLink</h1>
              <p className="product-tagline">One portal. Every shift.</p>
              <p className="product-supporting">
                Work shouldn&apos;t be harder than the job itself.
              </p>
              <p>
                PJBCrewLink is a planned workforce platform designed to bring
                schedules, work selection, communication, time-off requests,
                company documents, and other essential workplace tools into one
                secure, intuitive portal.
              </p>
              <div className="product-meta" aria-label="PJBCrewLink status">
                {productStats.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <div className="product-tech-summary" aria-label="Planned technology summary">
                {technologySummary.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
              <div className="product-hero-actions">
                <a className="button button-primary" href="#vision">
                  Explore the Vision
                </a>
                <a className="button button-secondary" href="#status">
                  View Status
                </a>
              </div>
            </div>

            <ConceptArtwork />
          </div>
        </section>

        <ProductSection
          id="vision"
          eyebrow="Product Vision"
          title="A flexible workplace portal for everyday employee operations."
          body="Although the original inspiration came from outdated employee work-selection processes, PJBCrewLink is being envisioned as a flexible platform that could support organizations across multiple industries."
          muted
        >
          <div className="overview-layout">
            <article className="overview-statement">
              <h3>One organized workspace for the tools employees use every day.</h3>
              <p>
                The goal is to reduce the friction created by scattered systems,
                manual coordination, and hard-to-find workplace information.
              </p>
            </article>
            <div className="overview-highlight-grid">
              {philosophyPrinciples.map((principle) => (
                <span key={principle}>{principle}</span>
              ))}
            </div>
          </div>
        </ProductSection>

        <ProductSection
          id="problem"
          eyebrow="The Problem"
          title="Workplace information is often spread across too many disconnected tools."
        >
          <div className="problem-layout">
            <article className="problem-copy">
              <h3>Employees should not need to chase basic operational information.</h3>
              <p>
                Many workplace workflows still depend on disconnected tools,
                paper processes, bulletin boards, spreadsheets, phone calls,
                emails, and separate systems to manage everyday information.
              </p>
            </article>
            <div className="scattered-grid" aria-label="Common disconnected workplace tools">
              {scatteredTools.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </div>
        </ProductSection>

        <ProductSection
          id="solution"
          eyebrow="Planned Solution"
          title="One secure workspace for essential employee operations."
          body="PJBCrewLink aims to organize everyday workplace tools into a clear portal shaped around employee needs and administrative control."
          muted
        >
          <div className="solution-panel">
            <p>
              The platform vision centers on making schedules, work selection,
              communication, documents, and requests easier to access without
              implying that the product has already been built or deployed.
            </p>
            <div className="solution-flow" aria-label="PJBCrewLink planned workflow">
              {solutionFlow.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </ProductSection>

        <ProductSection
          id="modules"
          eyebrow="Planned Modules"
          title="Planned capabilities for a broader workforce platform."
          body="These modules represent intended product directions, not finalized or launched functionality."
        >
          <div className="feature-grid">
            {plannedModules.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                body={feature.body}
                index={index}
              />
            ))}
          </div>
        </ProductSection>

        <ProductSection
          id="philosophy"
          eyebrow="Product Philosophy"
          title="Work shouldn't be harder than the job itself."
          muted
        >
          <div className="philosophy-layout">
            <article className="philosophy-statement">
              <h3>Practical workplace software should remove unnecessary friction.</h3>
              <p>
                PJBCrewLink is being shaped around clarity, security, everyday
                usability, and the belief that workplace systems should support
                people without making routine tasks harder to complete.
              </p>
            </article>
            <div className="philosophy-grid">
              {philosophyPrinciples.map((principle) => (
                <span key={principle}>{principle}</span>
              ))}
            </div>
          </div>
        </ProductSection>

        <ProductSection
          id="inspiration"
          eyebrow="Original Inspiration"
          title="From a paper-based workflow to a broader platform vision."
        >
          <article className="overview-statement">
            <h3>The concept began with one outdated process and expanded from there.</h3>
            <p>
              PJBCrewLink began with the goal of modernizing a paper-based
              employee work-selection process. The idea later expanded into a
              broader workforce-platform vision without including confidential
              employer details, real employee information, or proprietary
              documents.
            </p>
          </article>
        </ProductSection>

        <ProductSection
          id="technology"
          eyebrow="Planned Technology Stack"
          title="A modern web foundation under consideration."
          body="These technologies are planned directions for the product, not finalized production infrastructure."
          muted
        >
          <TechStackGrid />
        </ProductSection>

        <ProductSection
          id="status"
          eyebrow="Development Status"
          title="Planning and design, with production work still ahead."
        >
          <ProductStatus />
        </ProductSection>

        <ProductSection
          id="roadmap"
          eyebrow="High-Level Roadmap"
          title="A careful path from discovery to platform foundation."
          muted
        >
          <RoadmapColumns />
        </ProductSection>

        <ProductSection
          id="related"
          eyebrow="Related Products"
          title="More products from the PJBStudios portfolio."
        >
          <div className="related-project-grid">
            {relatedProjects.map((project) => (
              <Link className="related-project-card" href={project.href} key={project.name}>
                <span>{project.label}</span>
                <h3>{project.name}</h3>
                <p>Explore another PJBStudios product direction.</p>
              </Link>
            ))}
          </div>
        </ProductSection>
      </main>

      <ProductFooter />
    </div>
  );
}
