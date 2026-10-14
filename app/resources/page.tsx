import Link from "next/link";

const BOOKING_URL = process.env.NEXT_PUBLIC_NOOKAL_BOOKING_URL || "";

export const metadata = {
  title: "Resources | Hillview Physiotherapy Group",
  description:
    "Helpful resources and patient information from Hillview Physiotherapy Group in Dromana.",
  openGraph: {
    title: "Resources | Hillview Physiotherapy Group",
    description:
      "Helpful resources and patient information from Hillview Physiotherapy Group in Dromana.",
    url: "https://www.hillviewphysiogroup.com.au/resources",
    siteName: "Hillview Physiotherapy Group",
    locale: "en_AU",
    type: "website",
  },
};

export default function ResourcesPage() {
  return (
    <>
      <section className="page-hero section">
        <div className="container">
          <p className="section-heading__subtitle">Helpful information</p>
          <h1 className="page-hero__title">Resources</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div
            className="prose"
            style={{ maxWidth: "48rem", margin: "0 auto", lineHeight: "1.7", color: "var(--color-neutral)" }}
          >
            <p>
              We have compiled a range of resources to help you on your journey to better movement
              and recovery.
            </p>
          </div>
          <div className="grid grid--3" style={{ marginTop: "2rem" }}>
            <Link href="/patient-information" className="service-card">
              <div className="service-card__body">
                <h3 className="service-card__title">Patient Information</h3>
                <p className="service-card__text">
                  What to expect, what to bring, and information about funding options.
                </p>
              </div>
            </Link>
            <Link href="/conditions" className="service-card">
              <div className="service-card__body">
                <h3 className="service-card__title">Conditions We Treat</h3>
                <p className="service-card__text">
                  Information about common musculoskeletal conditions we help with.
                </p>
              </div>
            </Link>
            <Link href="/faq" className="service-card">
              <div className="service-card__body">
                <h3 className="service-card__title">Frequently Asked Questions</h3>
                <p className="service-card__text">
                  Answers to common questions about appointments, funding, and what to expect.
                </p>
              </div>
            </Link>
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
