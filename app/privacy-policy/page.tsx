import Link from "next/link";

const BOOKING_URL = process.env.NEXT_PUBLIC_NOOKAL_BOOKING_URL || "";

export const metadata = {
  title: "Privacy Policy | Hillview Physiotherapy Group",
  description:
    "Hillview Physiotherapy Group Privacy Policy. Learn how we collect, use, and protect your personal information.",
  openGraph: {
    title: "Privacy Policy | Hillview Physiotherapy Group",
    description:
      "Hillview Physiotherapy Group Privacy Policy. Learn how we collect, use, and protect your personal information.",
    url: "https://www.hillviewphysiogroup.com.au/privacy-policy",
    siteName: "Hillview Physiotherapy Group",
    locale: "en_AU",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="page-hero section">
        <div className="container">
          <p className="section-heading__subtitle">Your privacy matters</p>
          <h1 className="page-hero__title">Privacy Policy</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="prose" style={{ maxWidth: "48rem", margin: "0 auto", lineHeight: "1.7", color: "var(--color-neutral)" }}>
            <p>
              Hillview Physiotherapy Group (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is
              committed to protecting your privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our website.
            </p>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginTop: "2rem", marginBottom: "1rem", color: "var(--color-foreground)" }}>
              Information We Collect
            </h2>
            <p>
              We may collect personal information that you voluntarily provide to us when you book an
              appointment, fill out a contact form, or communicate with us.
            </p>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginTop: "2rem", marginBottom: "1rem", color: "var(--color-foreground)" }}>
              How We Use Your Information
            </h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services,
              communicate with you about appointments, and respond to your enquiries.
            </p>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginTop: "2rem", marginBottom: "1rem", color: "var(--color-foreground)" }}>
              Disclosure of Your Information
            </h2>
            <p>
              We do not share, sell, rent, or trade your personal information with third parties for
              their commercial purposes. We may share information with service providers who assist
              us in operating our website and conducting our business.
            </p>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginTop: "2rem", marginBottom: "1rem", color: "var(--color-foreground)" }}>
              Security
            </h2>
            <p>
              We use administrative, technical, and physical security measures to protect your
              personal information. However, no method of transmission over the Internet is 100%
              secure.
            </p>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginTop: "2rem", marginBottom: "1rem", color: "var(--color-foreground)" }}>
              Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a
                href="mailto:info@hillviewphysiogroup.com.au"
                style={{ color: "var(--color-accent)" }}
              >
                info@hillviewphysiogroup.com.au
              </a>{" "}
              or{" "}
              <a href="tel:0359110201" style={{ color: "var(--color-accent)" }}>
                (03) 5911 0201
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
