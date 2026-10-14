import Link from "next/link";

export const metadata = {
  title: "Conditions We Treat | Hillview Physiotherapy Group",
  description:
    "Our physiotherapists treat a wide range of musculoskeletal conditions. Book an appointment to discuss your specific needs.",
  openGraph: {
    title: "Conditions We Treat | Hillview Physiotherapy Group",
    description:
      "Our physiotherapists treat a wide range of musculoskeletal conditions. Book an appointment to discuss your specific needs.",
    url: "https://www.hillviewphysiogroup.com.au/conditions",
    siteName: "Hillview Physiotherapy Group",
    locale: "en_AU",
    type: "website",
  },
};

export default function ConditionsPage() {
  const BOOKING_URL = process.env.NEXT_PUBLIC_NOOKAL_BOOKING_URL || "";

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="section-heading section-heading--center mb-4">
            <h1 className="section-heading__title">Conditions We Treat</h1>
            <p className="section-heading__subtitle">Common conditions</p>
          </div>
          <p
            className="text-neutral text-center"
            style={{ maxWidth: "40rem", margin: "0 auto 3rem", lineHeight: "1.7" }}
          >
            Our physiotherapists treat a wide range of musculoskeletal conditions. Below are some
            of the common conditions we help with at Hillview Physiotherapy Group.
          </p>
          <div className="grid grid--3">
            <div className="card" style={{ padding: "2rem" }}>
              <h3
                className="card__title"
                style={{ fontSize: "1.125rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--color-foreground)" }}
              >
                Back pain
              </h3>
              <p className="card__text">Coming soon — individual condition pages are being developed.</p>
            </div>
            <div className="card" style={{ padding: "2rem" }}>
              <h3
                className="card__title"
                style={{ fontSize: "1.125rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--color-foreground)" }}
              >
                Neck pain
              </h3>
              <p className="card__text">Coming soon — individual condition pages are being developed.</p>
            </div>
            <div className="card" style={{ padding: "2rem" }}>
              <h3
                className="card__title"
                style={{ fontSize: "1.125rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--color-foreground)" }}
              >
                Knee pain
              </h3>
              <p className="card__text">Coming soon — individual condition pages are being developed.</p>
            </div>
            <div className="card" style={{ padding: "2rem" }}>
              <h3
                className="card__title"
                style={{ fontSize: "1.125rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--color-foreground)" }}
              >
                Shoulder pain
              </h3>
              <p className="card__text">Coming soon — individual condition pages are being developed.</p>
            </div>
            <div className="card" style={{ padding: "2rem" }}>
              <h3
                className="card__title"
                style={{ fontSize: "1.125rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--color-foreground)" }}
              >
                Sports injuries
              </h3>
              <p className="card__text">Coming soon — individual condition pages are being developed.</p>
            </div>
            <div className="card" style={{ padding: "2rem" }}>
              <h3
                className="card__title"
                style={{ fontSize: "1.125rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--color-foreground)" }}
              >
                Running injuries
              </h3>
              <p className="card__text">Coming soon — individual condition pages are being developed.</p>
            </div>
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
