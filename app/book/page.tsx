import Link from "next/link";

export const metadata = {
  title: "Book an Appointment | Hillview Physiotherapy Group",
  description:
    "Book an appointment at Hillview Physiotherapy Group in Dromana. Online booking available through Nookal.",
  openGraph: {
    title: "Book an Appointment | Hillview Physiotherapy Group",
    description:
      "Book your physiotherapy appointment online at Hillview Physiotherapy Group in Dromana. Available now.",
    url: "https://www.hillviewphysiogroup.com.au/book",
    siteName: "Hillview Physiotherapy Group",
    locale: "en_AU",
    type: "website",
  },
};

export default function BookPage() {
  const BOOKING_URL = process.env.NEXT_PUBLIC_NOOKAL_BOOKING_URL || "";

  return (
    <>
      <section className="page-hero section">
        <div className="container">
          <p className="section-heading__subtitle">Get started</p>
          <h1 className="page-hero__title">Book an Appointment</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="prose" style={{ maxWidth: "48rem", margin: "0 auto", lineHeight: "1.7", color: "var(--color-neutral)" }}>
            <p>
              You can book an appointment at Hillview Physiotherapy Group quickly and easily online
              through our Nookal booking system. Select your preferred service, choose an available
              time, and receive instant confirmation.
            </p>
            <p>
              Alternatively, you can call us on{" "}
              <a href="tel:0359110201" style={{ color: "var(--color-accent)" }}>
                (03) 5911 0201
              </a>{" "}
              or email{" "}
              <a
                href="mailto:info@hillviewphysiogroup.com.au"
                style={{ color: "var(--color-accent)" }}
              >
                info@hillviewphysiogroup.com.au
              </a>{" "}
              and our team will be happy to assist you with booking.
            </p>
            <p>
              No referral is needed for private physiotherapy appointments. Simply book online or
              contact us to get started.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--white section--border">
        <div className="container">
          <div
            className="text-center"
            style={{ maxWidth: "40rem", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}
          >
            <h2 className="cta-block__title" style={{ color: "var(--color-foreground)" }}>
              Ready to book?
            </h2>
            <p style={{ color: "var(--color-neutral)" }}>
              Click below to open our online booking system and select your preferred appointment
              time.
            </p>
            <a
              href={BOOKING_URL}
              className="btn btn--primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Online Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
