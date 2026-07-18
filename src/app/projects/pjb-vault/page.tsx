import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const description =
  "A secure cloud storage platform for organizing, protecting, and sharing your photos, videos, and files across all your devices.";

const plannedCoreFeatures = [
  {
    title: "Unified File Organization",
    body: "Bring photos, videos, and files into one organized storage experience designed around everyday clarity.",
  },
  {
    title: "Photo and Video Storage",
    body: "Keep personal media alongside other important files within the same planned product experience.",
  },
  {
    title: "Protected Content",
    body: "Shape the storage experience around thoughtful protection for the content people choose to keep.",
  },
  {
    title: "Secure Sharing",
    body: "Provide a clear, controlled way to share selected content when the sharing model is finalized.",
  },
  {
    title: "Cross-Device Access",
    body: "Create a consistent way to reach organized content across supported devices in the future product.",
  },
];

const membershipDecisions = [
  {
    title: "Storage Allowances",
    body: "Final capacities, limits, and any future membership boundaries are still being defined.",
  },
  {
    title: "Feature Access",
    body: "The relationship between membership levels and planned product capabilities remains under review.",
  },
  {
    title: "Membership Progression",
    body: "Any future path between membership levels will be documented before public availability.",
  },
];

const plannedAreas = [
  "Membership model",
  "Storage organization",
  "Content protection",
  "Sharing controls",
  "Cross-device continuity",
  "Product surfaces",
];

const technologyDecisions = [
  {
    title: "Application Architecture",
    body: "The application foundation will be selected after the core product requirements are finalized.",
  },
  {
    title: "Storage Infrastructure",
    body: "Storage services, transfer behavior, and retention needs remain part of technical discovery.",
  },
  {
    title: "Identity and Access",
    body: "Account, authentication, and permission approaches will be defined before implementation.",
  },
  {
    title: "Delivery and Operations",
    body: "Hosting, monitoring, and release workflows will follow the approved architecture.",
  },
];

const philosophyPrinciples = [
  {
    title: "Clarity Before Complexity",
    body: "Keep the product approachable while the technical systems handle storage complexity behind the experience.",
  },
  {
    title: "Protection by Design",
    body: "Treat content protection and controlled access as foundational product decisions, not afterthoughts.",
  },
  {
    title: "Architecture First",
    body: "Define the product requirements and dependable system boundaries before implementation begins.",
  },
  {
    title: "Incremental Development",
    body: "Validate the essential storage journey before expanding into broader platform capabilities.",
  },
  {
    title: "Long-Term Maintainability",
    body: "Favor clear systems that can evolve as product requirements, devices, and membership needs mature.",
  },
  {
    title: "Premium Simplicity",
    body: "Make organization, protection, and sharing feel calm, direct, and intentionally designed.",
  },
];

const roadmap = [
  {
    phase: "Current",
    description: "Planning and product definition",
    items: [
      "Define the core storage experience",
      "Clarify membership requirements",
      "Document protection and sharing expectations",
    ],
  },
  {
    phase: "Near-Term",
    description: "Experience and architecture",
    items: [
      "Plan primary product flows",
      "Evaluate technical architecture",
      "Define account and access requirements",
    ],
  },
  {
    phase: "Mid-Term",
    description: "Planned core product work",
    items: [
      "Build the organization foundation",
      "Develop storage and protection systems",
      "Validate sharing and cross-device behavior",
    ],
  },
  {
    phase: "Long-Term",
    description: "Expanded platform vision",
    items: [
      "Refine membership capabilities",
      "Expand supported product surfaces",
      "Continue improving the storage experience",
    ],
  },
];

const galleryItems = [
  {
    title: "Vault Home",
    caption: "Reserved for the future overview of organized photos, videos, and files.",
    alt: "PJB Vault home screen placeholder",
    assetPath: "/images/projects/pjb-vault/vault-home.jpg",
    available: false,
  },
  {
    title: "File Organization",
    caption: "Reserved for the planned content organization experience.",
    alt: "PJB Vault file organization placeholder",
    assetPath: "/images/projects/pjb-vault/file-organization.jpg",
    available: false,
  },
  {
    title: "Protected Content",
    caption: "Reserved for an approved view of future protection controls.",
    alt: "PJB Vault protected content placeholder",
    assetPath: "/images/projects/pjb-vault/protected-content.jpg",
    available: false,
  },
  {
    title: "Secure Sharing",
    caption: "Reserved for the future sharing workflow after product definition.",
    alt: "PJB Vault secure sharing placeholder",
    assetPath: "/images/projects/pjb-vault/secure-sharing.jpg",
    available: false,
  },
];

export const metadata: Metadata = {
  title: "PJB Vault | PJBStudios",
  description,
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

function VaultArtwork() {
  return (
    <div
      className="product-artwork-panel vault-artwork-panel"
      role="img"
      aria-label="Abstract PJB Vault secure cloud storage artwork"
    >
      <div className="vault-artwork-glow" />
      <div className="vault-window">
        <div className="vault-window-bar">
          <div>
            <i />
            <i />
            <i />
          </div>
          <span />
        </div>
        <div className="vault-window-layout">
          <div className="vault-window-rail">
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className="vault-file-grid">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
      <div className="vault-door">
        <span>
          <i />
        </span>
      </div>
      <div className="vault-artwork-card vault-artwork-card-one">
        <span />
        <i />
        <i />
      </div>
      <div className="vault-artwork-card vault-artwork-card-two">
        <span />
        <i />
      </div>
    </div>
  );
}

function ScreenshotGallery() {
  return (
    <div className="screenshot-gallery vault-gallery">
      {galleryItems.map((item, index) => (
        <article className="screenshot-card" key={item.title}>
          <div className="screenshot-device vault-screenshot-device">
            {item.available ? (
              <Image
                className="vault-screenshot-image"
                src={item.assetPath}
                alt={item.alt}
                fill
                sizes="(min-width: 1040px) 22vw, (min-width: 720px) 44vw, 88vw"
              />
            ) : (
              <div className="screenshot-slot vault-screenshot-slot">
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
            PJB Vault is an in-planning cloud storage product from PJBStudios.
          </p>
        </div>
        <nav aria-label="PJB Vault page sections">
          <a href="#overview">Overview</a>
          <a href="#features">Core Features</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#gallery">Gallery</a>
        </nav>
        <nav aria-label="Project links">
          <Link href="/">PJBStudios Home</Link>
          <Link href="/#work">Selected Work</Link>
          <Link href="/projects/allsports-gm">AllSports GM</Link>
        </nav>
        <p className="copyright">&copy; PJBStudios. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function PjbVaultProjectPage() {
  return (
    <div className="site-page product-page vault-page">
      <header className="site-header product-header">
        <nav className="nav-shell" aria-label="PJB Vault navigation">
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
              <p className="eyebrow">Productivity &amp; Cloud Storage</p>
              <h1 id="product-heading">Your digital life, organized.</h1>
              <p className="product-tagline">PJB Vault</p>
              <p>{description}</p>
              <div className="product-meta" aria-label="PJB Vault status">
                <span>In Planning</span>
              </div>
              <div className="product-hero-actions">
                <a className="button button-primary vault-button-primary" href="#overview">
                  Explore the Vision
                </a>
                <Link className="button button-secondary" href="/#work">
                  Back to Projects
                </Link>
              </div>
            </div>
            <VaultArtwork />
          </div>
        </section>

        <ProductSection
          id="overview"
          eyebrow="Project Overview"
          title="One thoughtful home for the content that matters."
          body="PJB Vault is being planned as a focused cloud storage experience for organizing, protecting, and sharing personal content across devices."
          muted
        >
          <div className="vault-overview-grid">
            <article className="overview-statement vault-overview-lead">
              <span>01</span>
              <h3>What it is</h3>
              <p>
                A planned cloud storage platform centered on photos, videos,
                files, and a clear everyday organization experience.
              </p>
            </article>
            <article className="overview-statement">
              <span>02</span>
              <h3>Product focus</h3>
              <p>
                Make stored content easier to organize, protect, reach, and
                share without presenting unfinished systems as available.
              </p>
            </article>
            <article className="overview-statement">
              <span>03</span>
              <h3>Current stage</h3>
              <p>
                The product remains in planning while its experience,
                membership model, and technical foundation are defined.
              </p>
            </article>
            <article className="overview-statement">
              <span>04</span>
              <h3>Long-term direction</h3>
              <p>
                Build a calm, secure, and intuitive home for personal digital
                content across supported devices.
              </p>
            </article>
          </div>
        </ProductSection>

        <ProductSection
          id="why"
          eyebrow="Why PJB Vault"
          title="Storage should feel clear, not complicated."
          body="The concept is shaped around a familiar challenge: personal content can become scattered across devices and difficult to manage with confidence."
        >
          <div className="vault-why-layout">
            <article className="vault-why-statement">
              <span>THE CHALLENGE</span>
              <h3>Important content deserves a more organized experience.</h3>
              <p>
                PJB Vault is being defined around the everyday need to keep
                photos, videos, and files together without adding unnecessary
                friction to storing or finding them.
              </p>
            </article>
            <article className="vault-why-statement">
              <span>THE DIRECTION</span>
              <h3>Make protection and sharing feel approachable.</h3>
              <p>
                The product vision brings organization, protection, sharing,
                and cross-device access into one deliberate experience.
              </p>
            </article>
          </div>
        </ProductSection>

        <ProductSection
          id="features"
          eyebrow="Planned Core Features"
          title="The essential PJB Vault experience."
          body="These capabilities define the planned product direction. They are not presented as implemented or publicly available."
          muted
        >
          <div className="vault-feature-grid">
            {plannedCoreFeatures.map((feature) => (
              <article className="feature-card vault-feature-card" key={feature.title}>
                <span>Planned</span>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </article>
            ))}
          </div>
        </ProductSection>

        <ProductSection
          id="membership"
          eyebrow="Membership Tiers"
          title="A membership framework still being defined."
          body="No public tier names, prices, storage limits, or availability details have been finalized."
        >
          <div className="vault-membership-grid">
            {membershipDecisions.map((decision, index) => (
              <article className="vault-membership-card" key={decision.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>Definition in progress</p>
                <h3>{decision.title}</h3>
                <div aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </div>
                <strong>To be finalized</strong>
                <p>{decision.body}</p>
              </article>
            ))}
          </div>
        </ProductSection>

        <ProductSection
          id="planned"
          eyebrow="Planned Features"
          title="Product areas under active definition."
          body="These areas are part of planning and discovery, not completed functionality."
          muted
        >
          <div className="vault-planned-grid">
            {plannedAreas.map((area, index) => (
              <article className="vault-planned-card" key={area}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <p>Under definition</p>
                  <h3>{area}</h3>
                </div>
              </article>
            ))}
          </div>
        </ProductSection>

        <ProductSection
          id="technology"
          eyebrow="Technology Stack"
          title="Technical decisions will follow product definition."
          body="The technology stack has not been publicly finalized. These are the architecture areas being evaluated before implementation."
        >
          <div className="vault-tech-grid">
            {technologyDecisions.map((decision) => (
              <article className="tech-card vault-tech-card" key={decision.title}>
                <span>Evaluating</span>
                <h3>{decision.title}</h3>
                <p>{decision.body}</p>
              </article>
            ))}
          </div>
        </ProductSection>

        <ProductSection
          id="philosophy"
          eyebrow="Development Philosophy"
          title="Build trust into the foundation."
          body="PJB Vault is being shaped around clarity, thoughtful protection, maintainable architecture, and a premium experience."
          muted
        >
          <div className="vault-philosophy-grid">
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
          eyebrow="Product Roadmap"
          title="From careful definition to a broader storage platform."
        >
          <div className="roadmap-grid vault-roadmap">
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
          title="A gallery ready for approved product views."
          body="The product is still in planning, so structured placeholders are used until authentic PJB Vault screens are available."
          muted
        >
          <ScreenshotGallery />
        </ProductSection>

        <ProductSection
          id="vision"
          eyebrow="Future Vision"
          title="A dependable home for an expanding digital life."
          body="The long-term vision is a focused storage platform that keeps organization, protection, sharing, and cross-device access understandable as the product grows."
        >
          <div className="vault-vision-panel">
            <div className="vault-vision-route" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
            <p>
              PJB Vault will move forward only as its product requirements,
              membership model, and technical architecture are defined with the
              care expected of a storage experience.
            </p>
          </div>
        </ProductSection>

        <section className="page-section vault-final-cta" aria-labelledby="vault-follow-heading">
          <div className="container vault-cta-inner">
            <p className="eyebrow">Product Vision</p>
            <h2 id="vault-follow-heading">PJB Vault is being carefully defined.</h2>
            <p>
              Return to the PJBStudios portfolio to explore current products and
              follow the studio as this cloud storage concept develops.
            </p>
            <div className="product-hero-actions">
              <Link className="button button-primary vault-button-primary" href="/#work">
                Return to Projects
              </Link>
              <Link className="button button-secondary" href="/">
                PJBStudios Home
              </Link>
            </div>
          </div>
        </section>
      </main>

      <ProductFooter />
    </div>
  );
}
