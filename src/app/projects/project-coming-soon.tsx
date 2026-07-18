import Link from "next/link";

type ProjectComingSoonProps = {
  name: string;
  category: string;
  description: string;
  status: string;
  variant: string;
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

function PlaceholderArtwork({ variant }: { variant: string }) {
  return (
    <div
      className={`product-preview product-preview-${variant}`}
      aria-hidden="true"
    >
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

export default function ProjectComingSoon({
  name,
  category,
  description,
  status,
  variant,
}: ProjectComingSoonProps) {
  return (
    <div className="site-page product-page">
      <header className="site-header product-header">
        <nav className="nav-shell" aria-label={`${name} navigation`}>
          <Link className="nav-brand" href="/" aria-label="PJBStudios home">
            <BrandMark />
          </Link>
          <div className="product-nav-actions">
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
              <p className="eyebrow">{category}</p>
              <h1 id="product-heading">{name}</h1>
              <p>{description}</p>
              <div className="product-meta" aria-label={`${name} project status`}>
                <span>{status}</span>
                <span>Full project showcase coming soon</span>
              </div>
              <div className="product-hero-actions">
                <Link className="button button-primary" href="/#work">
                  Back to Selected Work
                </Link>
              </div>
            </div>

            <PlaceholderArtwork variant={variant} />
          </div>
        </section>
      </main>

      <footer className="site-footer product-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <BrandMark stacked />
            <p>{description}</p>
          </div>
          <nav aria-label={`${name} project links`}>
            <Link href="/">PJBStudios Home</Link>
            <Link href="/#work">Selected Work</Link>
          </nav>
          <p className="copyright">&copy; PJBStudios. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
