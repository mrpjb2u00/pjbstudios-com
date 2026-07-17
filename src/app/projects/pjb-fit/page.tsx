import type { Metadata } from "next";
import Link from "next/link";

const productStats = [
  "Active Development",
  "Interface-first build",
  "Not publicly released",
];

const technologySummary = ["Expo", "React Native", "TypeScript", "Expo Router"];

const overviewCards = [
  {
    title: "Approachable fitness structure",
    body: "PJB Fit is designed to guide users through a complete workout experience without asking them to build every routine from scratch.",
  },
  {
    title: "Encouragement over pressure",
    body: "The product voice emphasizes consistency, confidence, and sustainable habits instead of guilt or intimidating fitness culture.",
  },
  {
    title: "Interface-first development",
    body: "The current build focuses on polishing the workout experience before production persistence and backend services are added.",
  },
];

const problemPoints = [
  "Assume users already understand programming",
  "Overwhelm beginners",
  "Function mainly as workout logs",
  "Rely on aggressive motivation",
  "Provide static workouts",
];

const approachPillars = [
  {
    title: "Guided Workouts",
    body: "Users move through a structured workout experience instead of managing every step manually.",
  },
  {
    title: "Supportive Coaching",
    body: "The coaching direction is centered on encouragement and helpful prompts rather than guilt.",
  },
  {
    title: "Clear Progress",
    body: "Workout history, streaks, milestones, and progress views are being designed to become easy to understand.",
  },
  {
    title: "Intelligent Future Personalization",
    body: "Planned AI-assisted coaching is intended to simplify decisions without making the experience feel complicated.",
  },
];

const currentExperience = [
  {
    title: "Branded splash and welcome",
    body: "The current build introduces the PJB Fit identity with a polished startup and onboarding flow.",
  },
  {
    title: "Login and sign-up interface",
    body: "Authentication screens are implemented as interface views while production authentication remains planned.",
  },
  {
    title: "Guided onboarding",
    body: "The onboarding experience sets up the product tone and helps frame the user journey.",
  },
  {
    title: "Home dashboard",
    body: "The dashboard presents the current workout plan and key entry points for the experience.",
  },
  {
    title: "Weekly workout plan",
    body: "Users can review a structured week of planned workouts using centralized mock data.",
  },
  {
    title: "Planned workout detail",
    body: "Workout detail views show exercises, duration, equipment, and difficulty before training begins.",
  },
  {
    title: "Guided workout logging",
    body: "The workout flow supports logging sets, repetitions, and weight through a focused mobile interface.",
  },
  {
    title: "Rest and workout timers",
    body: "Adjustable rest timing, live countdown behavior, and elapsed workout timing are represented in the current experience.",
  },
  {
    title: "Workout completion",
    body: "The flow includes leave-workout confirmation, completion summary, and a foundational progress screen.",
  },
  {
    title: "Light and dark mode",
    body: "Both visual modes are represented as part of the premium mobile interface direction.",
  },
];

const workoutJourney = [
  {
    title: "Plan",
    body: "Review the weekly workout schedule.",
  },
  {
    title: "Review",
    body: "Open a planned workout and review exercises, duration, equipment, and difficulty.",
  },
  {
    title: "Train",
    body: "Begin the guided workout and record sets, repetitions, and weight.",
  },
  {
    title: "Rest",
    body: "Use the adjustable rest timer between sets.",
  },
  {
    title: "Complete",
    body: "Continue through the remaining exercises and finish the workout.",
  },
  {
    title: "Progress",
    body: "Review the completion summary and foundational progress experience.",
  },
];

const philosophyPrinciples = [
  "Consistency over intensity",
  "Encouragement instead of guilt",
  "Sustainable habits",
  "Confidence building",
  "Long-term improvement",
];

const architectureFlow = [
  {
    title: "Mobile Interface",
    body: "The user experience was built first to validate the workout flow and product feel.",
  },
  {
    title: "Centralized Mock Data",
    body: "Centralized mock data supports rapid iteration without scattering placeholder values across screens.",
  },
  {
    title: "Future Supabase Backend",
    body: "Backend services are planned to replace the data layer without redesigning the interface.",
  },
];

const currentTech = [
  "Expo",
  "React Native",
  "TypeScript",
  "Expo Router",
  "Centralized Mock Data",
  "Visual Studio Code",
  "Codex-assisted implementation workflow",
];

const plannedTech = [
  "Supabase Authentication",
  "PostgreSQL",
  "Persistent Workout Sessions",
  "Cloud Synchronization",
  "AI-assisted Insights",
];

const currentBuild = [
  "Guided workout flow",
  "Workout planning",
  "Workout detail",
  "Workout logging",
  "Adjustable rest timer",
  "Elapsed workout timer",
  "Workout completion",
  "Light Mode",
  "Dark Mode",
  "Centralized mock data",
];

const plannedBuild = [
  "Supabase authentication",
  "Workout history",
  "Personal records",
  "Workout streaks",
  "Achievements",
  "Progress analytics",
  "Cloud synchronization",
  "Adaptive workout programming",
  "AI-assisted coaching",
  "Wearable integration",
];

const journeySteps = [
  {
    title: "Interface-first strategy",
    body: "PJB Fit is being shaped around the workout experience before backend infrastructure is finalized.",
  },
  {
    title: "Design exploration",
    body: "Early UI direction included Google Stitch for design inspiration only; PJB Fit remains an original PJBStudios product.",
  },
  {
    title: "Centralized mock data",
    body: "The project evolved from scattered placeholder values to a centralized mock-data layer.",
  },
  {
    title: "Workout vertical slice",
    body: "The current build includes a complete workout flow from planning through completion summary.",
  },
  {
    title: "Workout Flow Polish Sprint v1",
    body: "The workout flow was refined for clarity, timing, logging, and smoother completion behavior.",
  },
  {
    title: "Codex workflow",
    body: "Development shifted from Replit-assisted exploration to Visual Studio Code and Codex-supported implementation.",
  },
];

const roadmap = [
  {
    title: "Current Focus",
    items: [
      "Planned: Progress Dashboard v1",
      "Planned: Workout history foundation",
      "Planned: Persistence preparation",
      "Planned: Supabase planning",
    ],
  },
  {
    title: "Next Phase",
    items: [
      "Planned: User accounts",
      "Planned: Workout persistence",
      "Planned: Exercise logs",
      "Planned: Personal records",
      "Planned: Achievements",
      "Planned: Haptic feedback",
      "Planned: Sound feedback",
    ],
  },
  {
    title: "Future Vision",
    items: [
      "Planned: AI-assisted coaching",
      "Planned: Adaptive programming",
      "Planned: Advanced analytics",
      "Planned: Cross-device synchronization",
      "Planned: Tablet optimization",
      "Planned: Wearables",
      "Planned: Potential web companion",
    ],
  },
];

const relatedProducts = [
  {
    name: "PJB Daily",
    label: "Productivity",
    href: "/projects/pjb-daily",
    body: "A productivity application combining calendar planning, to-dos, notes, and recurring reminders.",
  },
  {
    name: "PJBCrewLink",
    label: "Workforce Platform",
    href: "/projects/pjbcrewlink",
    body: "A workforce platform vision focused on scheduling, communication, operations, and employee access.",
  },
];

export const metadata: Metadata = {
  title: "PJB Fit | PJBStudios",
  description:
    "Explore PJB Fit, a premium cross-platform fitness application in active development featuring guided workouts, supportive coaching, and an interface-first architecture.",
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

function FitArtwork({ large = false }: { large?: boolean }) {
  return (
    <div
      className={large ? "fit-artwork fit-artwork-large" : "fit-artwork"}
      aria-hidden="true"
    >
      <div className="fit-artwork-ring">
        <span />
        <span />
      </div>
      <div className="fit-artwork-phone">
        <div className="fit-artwork-speaker" />
        <div className="fit-artwork-progress" />
        <i />
        <i />
        <i />
      </div>
      <div className="fit-artwork-card fit-artwork-card-one">
        <span />
        <span />
        <span />
      </div>
      <div className="fit-artwork-card fit-artwork-card-two">
        <span />
        <span />
      </div>
      <div className="fit-artwork-pulse">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
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
            PJB Fit is an original PJBStudios product in active development,
            built around guided workouts, supportive coaching, and progress over
            perfection.
          </p>
        </div>
        <nav aria-label="PJB Fit page sections">
          <a href="#experience">Experience</a>
          <a href="#architecture">Architecture</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#status">Status</a>
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

export default function PjbFitProjectPage() {
  return (
    <div className="site-page product-page">
      <header className="site-header product-header">
        <nav className="nav-shell" aria-label="PJB Fit navigation">
          <Link className="nav-brand" href="/" aria-label="PJBStudios home">
            <BrandMark />
          </Link>
          <div className="product-nav-actions">
            <a href="#experience">Experience</a>
            <a href="#architecture">Architecture</a>
            <a href="#roadmap">Roadmap</a>
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
              <p className="eyebrow">Active Development by PJBStudios</p>
              <h1 id="product-heading">Progress Over Perfection.</h1>
              <p className="product-tagline">PJB Fit</p>
              <p className="product-supporting">
                Guided workouts, supportive coaching, and a premium mobile fitness experience.
              </p>
              <p>
                PJB Fit is a cross-platform fitness application that combines
                guided workouts, premium mobile design, and a supportive coaching
                philosophy to help users build lasting fitness habits.
              </p>
              <div className="product-meta" aria-label="PJB Fit status">
                {productStats.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <div className="product-tech-summary" aria-label="Current technology summary">
                {technologySummary.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
              <div className="product-hero-actions">
                <a className="button button-primary" href="#experience">
                  Explore the Experience
                </a>
                <a className="button button-secondary" href="#roadmap">
                  View the Roadmap
                </a>
              </div>
            </div>
            <div className="product-artwork-panel fit-product-artwork-panel">
              <FitArtwork large />
            </div>
          </div>
        </section>

        <ProductSection
          id="overview"
          eyebrow="Product Overview"
          title="Fitness software that feels structured, calm, and encouraging."
          body="PJB Fit is an original PJBStudios product designed to make fitness approachable, structured, and encouraging."
          muted
        >
          <div className="feature-grid">
            {overviewCards.map((card, index) => (
              <FeatureCard key={card.title} title={card.title} body={card.body} index={index} />
            ))}
          </div>
          <article className="recurring-note">
            <h3>A complete workout experience from planning to completion.</h3>
            <p>
              Instead of asking users to build workouts from scratch or navigate
              intimidating fitness culture, PJB Fit guides users through the
              experience while celebrating consistency over perfection.
            </p>
          </article>
        </ProductSection>

        <ProductSection
          id="problem"
          eyebrow="The Problem"
          title="Many fitness apps make getting started harder than it needs to be."
        >
          <div className="problem-layout">
            <article className="problem-copy">
              <h3>Fitness guidance should lower the barrier, not raise it.</h3>
              <p>
                Many fitness applications assume users already understand
                programming, overwhelm beginners, function mainly as workout
                logs, rely on aggressive motivation, or provide static workouts.
              </p>
            </article>
            <div className="scattered-grid" aria-label="Common fitness app issues">
              {problemPoints.map((point) => (
                <span key={point}>{point}</span>
              ))}
            </div>
          </div>
        </ProductSection>

        <ProductSection
          id="approach"
          eyebrow="The PJB Fit Approach"
          title="Supportive coaching for consistent progress."
          muted
        >
          <div className="feature-grid">
            {approachPillars.map((pillar, index) => (
              <FeatureCard
                key={pillar.title}
                title={pillar.title}
                body={pillar.body}
                index={index}
              />
            ))}
          </div>
        </ProductSection>

        <ProductSection
          id="experience"
          eyebrow="Current Product Experience"
          title="A complete interface-first workout experience is taking shape."
          body="All current workout data flows through a centralized mock-data layer while production persistence is planned for a future backend implementation."
        >
          <div className="feature-grid">
            {currentExperience.map((feature, index) => (
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
          id="flow"
          eyebrow="Workout Flow"
          title="Plan, review, train, rest, complete, and progress."
          muted
        >
          <div className="journey-timeline fit-flow-timeline">
            {workoutJourney.map((step, index) => (
              <article className="journey-step" key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </article>
            ))}
          </div>
        </ProductSection>

        <ProductSection
          id="philosophy"
          eyebrow="Product Philosophy"
          title="Progress over perfection."
        >
          <div className="philosophy-layout">
            <article className="philosophy-statement fit-philosophy-statement">
              <h3>Fitness should encourage growth and adapt to real life.</h3>
              <p>
                Fitness should encourage growth, celebrate consistency, and
                adapt to real life instead of demanding unrealistic perfection.
                PJB Fit emphasizes sustainable habits, confidence building, and
                long-term improvement.
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
          id="architecture"
          eyebrow="Architecture"
          title="Interface first, then persistence."
          body="This architecture was intentionally chosen so backend services can later replace the data layer without redesigning the workout experience."
          muted
        >
          <div className="solution-panel">
            <div className="solution-flow" aria-label="PJB Fit interface-first architecture">
              {architectureFlow.map((step) => (
                <span key={step.title}>
                  <strong>{step.title}</strong>
                  {step.body}
                </span>
              ))}
            </div>
          </div>
        </ProductSection>

        <ProductSection
          id="technology"
          eyebrow="Technology"
          title="Current stack and planned platform services."
        >
          <div className="status-layout">
            <article className="status-panel status-panel-primary">
              <p className="eyebrow">Current Technology</p>
              <h3>Current development build</h3>
              <ul>
                {currentTech.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="status-panel">
              <p className="eyebrow">Planned</p>
              <h3>Future backend and intelligence</h3>
              <ul>
                {plannedTech.map((item) => (
                  <li key={item}>Planned: {item}</li>
                ))}
              </ul>
            </article>
          </div>
        </ProductSection>

        <ProductSection
          id="current-planned"
          eyebrow="Current vs Planned"
          title="A clear separation between what exists now and what comes later."
          muted
        >
          <div className="status-layout fit-comparison-layout">
            <article className="status-panel status-panel-primary">
              <p className="eyebrow">Current Development Build</p>
              <h3>Implemented interface experience</h3>
              <ul>
                {currentBuild.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="status-panel">
              <p className="eyebrow">Planned</p>
              <h3>Future product capabilities</h3>
              <ul>
                {plannedBuild.map((item) => (
                  <li key={item}>Planned: {item}</li>
                ))}
              </ul>
            </article>
          </div>
        </ProductSection>

        <ProductSection
          id="journey"
          eyebrow="Development Journey"
          title="From early UI exploration to a polished workout vertical slice."
        >
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
        </ProductSection>

        <ProductSection
          id="roadmap"
          eyebrow="Roadmap"
          title="Planned phases for the next stage of PJB Fit."
          muted
        >
          <div className="roadmap-grid related-project-grid">
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
        </ProductSection>

        <ProductSection
          id="status"
          eyebrow="Product Status"
          title="Active development, not yet publicly released."
        >
          <div className="status-layout">
            <article className="status-panel status-panel-primary">
              <p className="eyebrow">Status</p>
              <h3>Active Development</h3>
              <p>
                PJB Fit is not yet publicly released and does not currently
                display App Store or Google Play availability.
              </p>
            </article>
            <article className="status-panel">
              <h3>Current Milestone</h3>
              <p>Complete interface-first workout experience.</p>
            </article>
            <article className="status-panel">
              <h3>Next Major Milestone</h3>
              <p>Progress Dashboard and persistent workout tracking.</p>
            </article>
          </div>
        </ProductSection>

        <ProductSection
          id="related"
          eyebrow="Related Products"
          title="More products from the PJBStudios portfolio."
          muted
        >
          <div className="related-project-grid">
            {relatedProducts.map((product) => (
              <Link className="related-project-card" href={product.href} key={product.name}>
                <span>{product.label}</span>
                <h3>{product.name}</h3>
                <p>{product.body}</p>
              </Link>
            ))}
          </div>
        </ProductSection>
      </main>

      <ProductFooter />
    </div>
  );
}
