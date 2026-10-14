import Link from "next/link";

export const metadata = {
  title: "Our Services | Hillview Physiotherapy Group",
  description:
    "A full range of physiotherapy and rehabilitation services on the Mornington Peninsula. Evidence-based care tailored to you.",
  openGraph: {
    title: "Our Services | Hillview Physiotherapy Group",
    description:
      "A full range of physiotherapy and rehabilitation services on the Mornington Peninsula. Evidence-based care tailored to you.",
    url: "https://www.hillviewphysiogroup.com.au/services",
    siteName: "Hillview Physiotherapy Group",
    locale: "en_AU",
    type: "website",
  },
};

export default function ServicesPage() {
  const BOOKING_URL = process.env.NEXT_PUBLIC_NOOKAL_BOOKING_URL || "";

  return (
    <>
      <section className="page-hero section">
        <div className="container">
          <p className="section-heading__subtitle">What we offer</p>
          <h1 className="page-hero__title">Our Services</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p
            className="text-neutral text-center"
            style={{ maxWidth: "40rem", margin: "0 auto 3rem", lineHeight: "1.7" }}
          >
            At Hillview Physiotherapy Group, we combine hands-on care with evidence-based exercise
            and education. Our goal is to empower you with the tools and knowledge to manage your
            health long-term.
          </p>
          <div className="grid grid--3">
            <Link href="/services/physiotherapy" className="service-card">
              <div className="service-card__body">
                <h3 className="service-card__title">Physiotherapy</h3>
                <p className="service-card__text">
                  Comprehensive one-on-one assessments to identify the underlying cause of your pain
                  or injury.
                </p>
              </div>
            </Link>
            <Link href="/services/running-assessments" className="service-card">
              <div className="service-card__body">
                <h3 className="service-card__title">Running Assessments</h3>
                <p className="service-card__text">
                  In-depth biomechanical running analysis to identify movement inefficiencies and
                  reduce injury risk.
                </p>
              </div>
            </Link>
            <Link href="/services/strength-rehabilitation" className="service-card">
              <div className="service-card__body">
                <h3 className="service-card__title">Strength & Rehabilitation</h3>
                <p className="service-card__text">
                  Group functional strength classes and tailored exercise programs to build
                  strength, balance, and mobility.
                </p>
              </div>
            </Link>
            <Link href="/services/post-surgical-rehabilitation" className="service-card">
              <div className="service-card__body">
                <h3 className="service-card__title">Post-Surgical Rehabilitation</h3>
                <p className="service-card__text">
                  Expert guidance through your post-operative journey to safely restore strength,
                  movement, and confidence.
                </p>
              </div>
            </Link>
            <Link href="/services/dry-needling" className="service-card">
              <div className="service-card__body">
                <h3 className="service-card__title">Dry Needling</h3>
                <p className="service-card__text">
                  Targeted dry needling to help release muscle tension, reduce pain, and support
                  your rehabilitation.
                </p>
              </div>
            </Link>
            <Link href="/services/golf-tpi" className="service-card">
              <div className="service-card__body">
                <h3 className="service-card__title">TPI Golf Assessment</h3>
                <p className="service-card__text">
                  Titleist Performance Institute golf movement screens with Brayden Page. Analyse
                  movement and swing mechanics.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--white section--border">
        <div className="container">
          <div
            className="text-center"
            style={{ maxWidth: "40rem", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}
          >
            <h2
              style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)", fontWeight: 700, color: "var(--color-foreground)" }}
            >
              Not sure which service is right for you?
            </h2>
            <p className="text-neutral">
              If you are unsure about the best approach for your situation, get in touch and we
              will help point you in the right direction.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a
                href={BOOKING_URL}
                className="btn btn--primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book an Appointment
              </a>
              <a href="/contact" className="btn btn--outline">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
