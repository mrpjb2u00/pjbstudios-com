import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const googlePlayPlaceholderUrl = "#download";

const productStats = [
  "Available on Google Play",
  "Production-ready",
  "Actively improved",
];

const technologySummary = ["React Native", "Expo", "TypeScript", "Supabase"];

const heroArtwork = {
  title: "PJB Daily hero artwork",
  alt: "PJB Daily promotional artwork",
  assetPath: "/images/projects/pjb-daily/hero-v2.png",
  width: 1536,
  height: 1024,
  available: true,
  withheldReason: "Awaiting anonymized hero artwork",
};

const overviewHighlights = [
  "Calendar-centered planning",
  "Tasks and notes connected to dates",
  "Intelligent recurring schedules",
  "Daily progress tracking",
  "Autosave",
  "Light and dark mode",
  "Cross-platform mobile experience",
];

const scatteredTools = [
  "Calendar apps",
  "Notes apps",
  "Reminder apps",
  "Checklists",
  "Sticky notes",
  "Memory",
];

const features = [
  {
    title: "Calendar Home",
    body: "The monthly calendar is the central home screen and gives users an immediate view of scheduled tasks and notes.",
  },
  {
    title: "Daily Agenda",
    body: "Selecting a date opens a focused agenda with tasks, notes, completion tracking, and the signature progress ring.",
  },
  {
    title: "To-Dos",
    body: "Users can create, edit, prioritize, date, repeat, complete, and autosave tasks.",
  },
  {
    title: "Notes",
    body: "Users can capture long-form notes, assign dates, autosave content, and connect notes directly to their daily planning.",
  },
  {
    title: "Recurring Scheduling",
    body: "Daily, weekly, every 2 weeks, monthly, quarterly, every 6 months, and yearly schedules are supported with intelligent month-end handling.",
  },
  {
    title: "Daily Progress Ring",
    body: "Visual completion tracking shows completed tasks, remaining tasks, and completion percentage.",
  },
  {
    title: "Light and Dark Mode",
    body: "Both themes are fully supported with cross-platform readability.",
  },
  {
    title: "Autosave",
    body: "Task and note drafts are protected during interruptions, navigation, or backgrounding.",
  },
];

const philosophyPrinciples = [
  "Simplicity first",
  "Calendar-centered productivity",
  "Fast capture",
  "Visual motivation",
  "Continuous improvement",
  "Future scalability",
];

const galleryItems = [
  {
    title: "Calendar Home",
    caption:
      "See your month, scheduled tasks, and notes in one clear daily planning view.",
    alt: "PJB Daily Calendar Home screen",
    assetPath: "/images/projects/pjb-daily/calendar-home.jpg",
    width: 1080,
    height: 2340,
    available: false,
    withheldReason: "Awaiting anonymized screenshot",
    order: 1,
  },
  {
    title: "Daily Agenda",
    caption: "Focus on one day with tasks, notes, and visual completion progress.",
    alt: "PJB Daily Daily Agenda screen",
    assetPath: "/images/projects/pjb-daily/daily-agenda.jpg",
    width: 1080,
    height: 2340,
    available: false,
    withheldReason: "Awaiting anonymized screenshot",
    order: 2,
  },
  {
    title: "Task Editor",
    caption:
      "Add dates, priorities, recurring schedules, details, and future-ready subtasks.",
    alt: "PJB Daily Task Editor screen",
    assetPath: "/images/projects/pjb-daily/task-editor.jpg",
    width: 1080,
    height: 2340,
    available: true,
    order: 3,
  },
  {
    title: "Create New",
    caption: "Start a task or note through one simple, unified creation flow.",
    alt: "PJB Daily Create New modal screen",
    assetPath: "/images/projects/pjb-daily/creation-modal.jpg",
    width: 1080,
    height: 2340,
    available: false,
    withheldReason: "Awaiting anonymized screenshot",
    order: 4,
  },
  {
    title: "Note Editor",
    caption:
      "Capture ideas in a clean writing experience with date assignment and autosave.",
    alt: "PJB Daily Note Editor screen",
    assetPath: "/images/projects/pjb-daily/note-editor.jpg",
    width: 1080,
    height: 2340,
    available: true,
    order: 5,
  },
  {
    title: "Organized at a Glance",
    caption:
      "View active days and additional scheduled content without cluttering the calendar.",
    alt: "PJB Daily busy calendar screen",
    assetPath: "/images/projects/pjb-daily/busy-calendar.jpg",
    width: 1080,
    height: 2340,
    available: false,
    withheldReason: "Awaiting anonymized screenshot",
    order: 6,
  },
  {
    title: "Dark Mode",
    caption:
      "A polished, comfortable experience designed for both light and dark environments.",
    alt: "PJB Daily Dark Mode screen",
    assetPath: "/images/projects/pjb-daily/dark-mode.jpg",
    width: 1080,
    height: 2340,
    available: true,
    order: 7,
  },
  {
    title: "Profile",
    caption:
      "View account details, productivity statistics, appearance preferences, and session controls.",
    alt: "PJB Daily Profile screen",
    assetPath: "/images/projects/pjb-daily/profile.jpg",
    width: 1080,
    height: 2340,
    available: false,
    withheldReason: "Awaiting anonymized screenshot",
    order: 8,
  },
];

const techStack = [
  {
    name: "React Native",
    description: "Supports the mobile application experience across platforms.",
  },
  {
    name: "Expo",
    description: "Provides the app runtime, tooling, and mobile development workflow.",
  },
  {
    name: "TypeScript",
    description: "Adds stronger structure and reliability to product code.",
  },
  {
    name: "Expo Router",
    description: "Organizes mobile screens and navigation in the app.",
  },
  {
    name: "Supabase",
    description: "Powers authentication, data storage, and backend services.",
  },
  {
    name: "PostgreSQL",
    description: "Provides the relational database foundation through Supabase.",
  },
  {
    name: "React Context",
    description: "Manages shared app state for connected daily workflows.",
  },
  {
    name: "EAS Build",
    description: "Supports production mobile build workflows for the app.",
  },
  {
    name: "Google Play",
    description: "The current public distribution channel for PJB Daily.",
  },
];

const journeySteps = [
  {
    title: "To-Dos & Notes",
    body: "Initial concept focused on tasks and notes.",
  },
  {
    title: "Calendar Integration",
    body: "The calendar became the product's central experience.",
  },
  {
    title: "Daily Agenda",
    body: "Date-specific tasks, notes, and progress tracking were introduced.",
  },
  {
    title: "UX Refinement",
    body: "The creation modal, task editor, note editor, profile, and cross-platform polish evolved.",
  },
  {
    title: "Reliability",
    body: "Autosave, recurring scheduling, keyboard fixes, permission cleanup, and production build improvements were completed.",
  },
  {
    title: "PJB Daily",
    body: "The product was renamed to reflect its broader mission as a daily productivity platform.",
  },
];

const completedStatus = [
  "Authentication",
  "Calendar Home",
  "Daily Agenda",
  "To-Dos",
  "Notes",
  "Recurring scheduling",
  "Daily progress tracking",
  "Autosave",
  "Light and dark mode",
  "Profile",
  "Cross-platform mobile support",
];

const futureReadyStatus = [
  "Subtasks backend",
  "Sharing backend",
  "Expanded profiles",
];

const roadmap = [
  {
    title: "Immediate",
    items: ["Timezone/date handling refinement", "Continued real-world testing", "Mobile polish"],
  },
  {
    title: "Short term",
    items: [
      "Functional subtasks",
      "Sharing",
      "Profile photos",
      "Better statistics",
      "Calendar color coding",
    ],
  },
  {
    title: "Medium term",
    items: ["Notifications", "Widgets", "Categories", "Templates", "Search", "Smart filters"],
  },
  {
    title: "Long term",
    items: [
      "Collaboration",
      "AI-assisted planning",
      "Attachments",
      "Real-time cloud collaboration",
      "Desktop and web expansion",
    ],
  },
];

const relatedProjects = [
  {
    name: "PJB Fit",
    label: "Fitness and Wellness",
    href: "/#work",
  },
  {
    name: "Metro Digital Pick Platform",
    label: "Business Operations",
    href: "/#work",
  },
  {
    name: "AllSports GM",
    label: "Sports and Entertainment",
    href: "/#work",
  },
];

export const metadata: Metadata = {
  title: "PJB Daily | PJBStudios",
  description:
    "PJB Daily is a modern cross-platform productivity app for calendar planning, tasks, notes, recurring reminders, and daily progress tracking.",
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

function ImagePlaceholder({
  title,
  assetPath,
  reason,
}: {
  title: string;
  assetPath: string;
  reason?: string;
}) {
  return (
    <div className="screenshot-slot">
      <span>{reason ?? "Image Slot"}</span>
      <strong>{title}</strong>
      <small>{assetPath}</small>
    </div>
  );
}

function HeroArtwork() {
  return (
    <div className="product-artwork-panel" aria-label="PJB Daily hero artwork">
      <div className="product-artwork-frame product-artwork-frame-image">
        {heroArtwork.available ? (
          <Image
            src={heroArtwork.assetPath}
            alt={heroArtwork.alt}
            width={heroArtwork.width}
            height={heroArtwork.height}
            sizes="(min-width: 1040px) 42vw, (min-width: 720px) 44vw, 88vw"
            priority
          />
        ) : (
          <ImagePlaceholder
            title={heroArtwork.title}
            assetPath={heroArtwork.assetPath}
            reason={heroArtwork.withheldReason}
          />
        )}
      </div>
    </div>
  );
}

function ScreenshotGallery() {
  return (
    <div className="screenshot-gallery">
      {galleryItems.map((item) => (
        <article className="screenshot-card" key={item.assetPath}>
          <div className="screenshot-device" aria-label={item.alt}>
            {item.available ? (
              <Image
                src={item.assetPath}
                alt={item.alt}
                width={item.width}
                height={item.height}
                sizes="(min-width: 1040px) 22vw, (min-width: 720px) 42vw, 78vw"
                className="screenshot-image"
              />
            ) : (
              <ImagePlaceholder
                title={item.title}
                assetPath={item.assetPath}
                reason={item.withheldReason}
              />
            )}
          </div>
          <div>
            <span>{String(item.order).padStart(2, "0")}</span>
            <h3>{item.title}</h3>
            <p>{item.caption}</p>
          </div>
        </article>
      ))}
    </div>
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

function JourneyTimeline() {
  return (
    <div className="journey-timeline">
      {journeySteps.map((step, index) => (
        <article className="journey-step" key={step.title}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <div>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function RoadmapColumns() {
  return (
    <div className="roadmap-grid">
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

function ProductStatus() {
  return (
    <div className="status-layout">
      <article className="status-panel status-panel-primary">
        <p className="eyebrow">Current Status</p>
        <h3>Published on Google Play and production-ready.</h3>
        <p>
          PJB Daily is actively improved through real-world use and tester
          feedback. Timezone and date handling refinement is a known priority
          and is being treated as an active improvement area.
        </p>
      </article>
      <article className="status-panel">
        <h3>Completed</h3>
        <ul>
          {completedStatus.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
      <article className="status-panel">
        <h3>In Progress / Future-Ready</h3>
        <ul>
          {futureReadyStatus.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
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
            PJB Daily is developed by PJBStudios, a software and creative
            technology studio turning thoughtful ideas into polished digital
            products.
          </p>
        </div>
        <nav aria-label="PJB Daily page sections">
          <a href="#overview">Overview</a>
          <a href="#features">Features</a>
          <a href="#technology">Technology</a>
          <a href="#download">Download</a>
        </nav>
        <nav aria-label="Project links">
          <Link href="/">PJBStudios Home</Link>
          <Link href="/#work">Selected Work</Link>
          <a href="#related">Related Projects</a>
        </nav>
        <p className="copyright">&copy; PJBStudios. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function PjbDailyProjectPage() {
  return (
    <div className="site-page product-page">
      <header className="site-header product-header">
        <nav className="nav-shell" aria-label="PJB Daily navigation">
          <Link className="nav-brand" href="/" aria-label="PJBStudios home">
            <BrandMark />
          </Link>
          <div className="product-nav-actions">
            <a href="#features">Features</a>
            <a href="#technology">Stack</a>
            <a href="#download">Download</a>
            <Link className="nav-cta project-nav-link" href="/#work">
              Back to Work
            </Link>
          </div>
        </nav>
      </header>

      <main>
        <section className="product-hero page-section" aria-labelledby="product-heading">
          <div className="container product-hero-layout">
            <div className="product-hero-copy">
              <p className="eyebrow">Featured Product by PJBStudios</p>
              <h1 id="product-heading">PJB Daily</h1>
              <p className="product-tagline">
                Everything you need to organize your day.
              </p>
              <p className="product-supporting">
                Your day deserves one place to call home.
              </p>
              <p>
                PJB Daily is a modern cross-platform productivity app that
                combines calendar planning, tasks, notes, recurring reminders,
                and daily progress tracking in one cohesive experience.
              </p>
              <div className="product-meta" aria-label="PJB Daily status">
                {productStats.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <div className="product-tech-summary" aria-label="Technology summary">
                {technologySummary.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
              <div className="product-hero-actions">
                <a className="button button-primary" href="#features">
                  View Features
                </a>
                <a
                  className="button button-secondary"
                  href={googlePlayPlaceholderUrl}
                  aria-label="Google Play link placeholder for PJB Daily"
                >
                  Google Play
                </a>
              </div>
            </div>

            <HeroArtwork />
          </div>
        </section>

        <ProductSection
          id="overview"
          eyebrow="Product Overview"
          title="A connected home for daily planning."
          body="PJB Daily was created to replace the fragmented experience of jumping between separate calendar, notes, reminders, and checklist apps."
          muted
        >
          <div className="overview-layout">
            <article className="overview-statement">
              <h3>Calendar first, then everything else finds its place.</h3>
              <p>
                By placing the calendar at the center of the product, tasks and
                notes become part of a clear daily planning workflow rather than
                isolated lists.
              </p>
            </article>
            <div className="overview-highlight-grid">
              {overviewHighlights.map((highlight) => (
                <span key={highlight}>{highlight}</span>
              ))}
            </div>
          </div>
        </ProductSection>

        <ProductSection
          id="problem"
          eyebrow="The Problem"
          title="Daily organization is often scattered across too many places."
        >
          <div className="problem-layout">
            <article className="problem-copy">
              <h3>Most daily systems ask people to remember where the work lives.</h3>
              <p>
                A normal day can spread responsibilities across several apps,
                quick notes, reminders, and memory. That fragmentation creates
                extra searching before real progress can begin.
              </p>
            </article>
            <div className="scattered-grid" aria-label="Common scattered planning tools">
              {scatteredTools.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </div>
        </ProductSection>

        <ProductSection
          id="solution"
          eyebrow="The Solution"
          title="One day. One organized experience."
          body="PJB Daily brings calendar planning, tasks, notes, recurring responsibilities, and progress into one connected workflow."
          muted
        >
          <div className="solution-panel">
            <p>
              Everything begins with the day, so users can see what needs
              attention and act without searching across multiple apps.
            </p>
            <div className="solution-flow" aria-label="PJB Daily planning workflow">
              <span>Choose a day</span>
              <span>Plan tasks</span>
              <span>Add notes</span>
              <span>Track progress</span>
            </div>
          </div>
        </ProductSection>

        <ProductSection
          id="features"
          eyebrow="Core Features"
          title="More than a basic to-do app."
          body="PJB Daily connects planning, capture, reminders, and progress around the actual rhythm of a day."
        >
          <div className="feature-grid">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                body={feature.body}
                index={index}
              />
            ))}
          </div>
          <article className="recurring-note">
            <h3>Intelligent month-end handling</h3>
            <p>
              Monthly recurring schedules account for calendar realities, such
              as January 31 falling back to February 28 or 29.
            </p>
          </article>
        </ProductSection>

        <ProductSection
          id="philosophy"
          eyebrow="Product Philosophy"
          title="Productivity software should reduce stress, not create it."
          muted
        >
          <div className="philosophy-layout">
            <article className="philosophy-statement">
              <h3>An intelligent daily operating system for life.</h3>
              <p>
                PJB Daily is built around the belief that useful software should
                simplify decision-making, make progress visible, and continue
                improving without adding clutter.
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
          id="gallery"
          eyebrow="Screenshot Gallery"
          title="Real product views with protected placeholders."
          body="Approved PJB Daily screenshots appear in polished device frames, while any view that still needs anonymized artwork remains clearly reserved."
        >
          <ScreenshotGallery />
        </ProductSection>

        <ProductSection
          id="technology"
          eyebrow="Technology Stack"
          title="Modern mobile tooling with a practical backend foundation."
          muted
        >
          <TechStackGrid />
        </ProductSection>

        <ProductSection
          id="journey"
          eyebrow="Development Journey"
          title="From focused notes app to daily productivity platform."
        >
          <JourneyTimeline />
        </ProductSection>

        <ProductSection
          id="status"
          eyebrow="Current Status"
          title="Published, production-ready, and actively improving."
          muted
        >
          <ProductStatus />
        </ProductSection>

        <ProductSection
          id="roadmap"
          eyebrow="Future Roadmap"
          title="A practical path toward a broader daily operating system."
        >
          <RoadmapColumns />
        </ProductSection>

        <section
          id="download"
          className="page-section product-download-section section-muted"
          aria-labelledby="download-heading"
        >
          <div className="container download-panel">
            <p className="eyebrow">Download / Availability</p>
            <h2 id="download-heading">Plan smarter. Stay organized. Accomplish more.</h2>
            <p>
              PJB Daily is available on Google Play. The approved store URL has
              not been added to this website yet, and additional platforms are
              part of the future roadmap.
            </p>
            <a
              className="button button-primary"
              href={googlePlayPlaceholderUrl}
              aria-label="Google Play placeholder for PJB Daily"
            >
              Google Play
            </a>
          </div>
        </section>

        <ProductSection
          id="related"
          eyebrow="Related Projects"
          title="More products from the PJBStudios portfolio."
        >
          <div className="related-project-grid">
            {relatedProjects.map((project) => (
              <Link className="related-project-card" href={project.href} key={project.name}>
                <span>{project.label}</span>
                <h3>{project.name}</h3>
                <p>Project page placeholder. Full showcase not built yet.</p>
              </Link>
            ))}
          </div>
        </ProductSection>
      </main>

      <ProductFooter />
    </div>
  );
}
