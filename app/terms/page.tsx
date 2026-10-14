import Link from "next/link";

const BOOKING_URL = process.env.NEXT_PUBLIC_NOOKAL_BOOKING_URL || "";

export const metadata = {
  title: "Terms of Service | Hillview Physiotherapy Group",
  description:
    "Hillview Physiotherapy Group Terms of Service. Terms and conditions for using our website and services.",
  openGraph: {
    title: "Terms of Service | Hillview Physiotherapy Group",
    description:
      "Terms and conditions for using the Hillview Physiotherapy Group website and services.",
    url: "https://www.hillviewphysiogroup.com.au/terms",
    siteName: "Hillview Physiotherapy Group",
    locale: "en_AU",
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <>
      <section className="page-hero section">
        <div className="container">
          <p className="section-heading__subtitle">Legal</p>
          <h1 className="page-hero__title">Terms of Service</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="prose" style={{ maxWidth: "48rem", margin: "0 auto", lineHeight: "1.7", color: "var(--color-neutral)" }}>
            <p>
              By accessing or using the Hillview Physiotherapy Group website, you agree to be bound
              by these Terms of Service.
            </p>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginTop: "2rem", marginBottom: "1rem", color: "var(--color-foreground)" }}>
              Use of the Website
            </h2>
            <p>
              You agree to use this website only for lawful purposes and in a way that does not
              infringe the rights of, restrict, or inhibit anyone else&apos;s use and enjoyment of
              the website.
            </p>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginTop: "2rem", marginBottom: "1rem", color: "var(--color-foreground)" }}>
              Medical Disclaimer
            </h2>
            <p>
              The content on this website is for informational purposes only and is not intended
              as a substitute for professional medical advice, diagnosis, or treatment. Always seek
              the advice of your physician or other qualified health provider.
            </p>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginTop: "2rem", marginBottom: "1rem", color: "var(--color-foreground)" }}>
              Appointments
            </h2>
            <p>
              Appointment bookings are subject to availability. We reserve the right to cancel or
              reschedule appointments with reasonable notice.
            </p>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginTop: "2rem", marginBottom: "1rem", color: "var(--color-foreground)" }}>
              Contact
            </h2>
            <p>
              For any questions regarding these Terms of Service, please contact us at{" "}
              <a
                href="mailto:info@hillviewphysiogroup.com.au"
                style={{ color: "var(--color-accent)" }}
              >
                info@hillviewphysiogroup.com.au
              </a>
              .
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
