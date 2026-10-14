import Link from "next/link";

const BOOKING_URL = process.env.NEXT_PUBLIC_NOOKAL_BOOKING_URL || "";

export const metadata = {
  title: "Back Pain | Hillview Physiotherapy Group",
  description:
    "Back pain treatment at Hillview Physiotherapy Group in Dromana. Evidence-based physiotherapy for acute and chronic back pain.",
  openGraph: {
    title: "Back Pain | Hillview Physiotherapy Group",
    description:
      "Back pain treatment at Hillview Physiotherapy Group in Dromana. Evidence-based physiotherapy for acute and chronic back pain.",
    url: "https://www.hillviewphysiogroup.com.au/conditions/back-pain",
    siteName: "Hillview Physiotherapy Group",
    locale: "en_AU",
    type: "website",
  },
};

export default function BackPainPage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <ol className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link href="/" className="breadcrumbs__link">
                  Home
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <Link href="/conditions" className="breadcrumbs__link">
                  Conditions
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <span className="breadcrumbs__current" aria-current="page">
                  Back pain
                </span>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="page-hero section">
        <div className="container">
          <h1 className="page-hero__title">Back Pain</h1>
          <p className="page-hero__subtitle">
            Evidence-based physiotherapy for acute and chronic back pain to help you recover and
            move with confidence.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="prose" style={{ maxWidth: "48rem", margin: "0 auto", lineHeight: "1.7", color: "var(--color-neutral)" }}>
            <p>
              Back pain is one of the most common reasons people seek physiotherapy. At Hillview
              Physiotherapy Group, we use evidence-based approaches to identify the underlying cause
              of your back pain and develop a targeted treatment plan.
            </p>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginTop: "2rem", marginBottom: "1rem", color: "var(--color-foreground)" }}>
              Our approach
            </h2>
            <p>
              Our approach combines manual therapy, exercise prescription, and education to help you
              understand your back pain, improve your movement patterns, and build the strength and
              resilience needed for long-term recovery.
            </p>
            <p>
              Whether you are dealing with acute back pain after an injury or managing ongoing
              discomfort, our team will work with you to create a practical, realistic plan that
              fits your lifestyle and goals.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-block">
        <div className="cta-block__inner">
          <h2 className="cta-block__title">Ready to move forward?</h2>
          <p className="cta-block__text">
            Whether you are recovering from an injury, returning to sport, or simply want to move
            with more confidence, we are here to help.
          </p>
          <div className="cta-block__actions">
            <a
              href={BOOKING_URL}
              className="btn btn--secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book an Appointment
            </a>
            <Link href="/contact" className="btn btn--outline">
              Contact Hillview
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
