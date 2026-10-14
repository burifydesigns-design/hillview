const BOOKING_URL = process.env.NEXT_PUBLIC_NOOKAL_BOOKING_URL || "";

export const metadata = {
  title: "About Us | Hillview Physiotherapy Group",
  description: "Local physiotherapists dedicated to helping the Mornington Peninsula community move and live with confidence.",
  openGraph: {
    title: "About Us | Hillview Physiotherapy Group",
    description: "Local physiotherapists dedicated to helping the Mornington Peninsula community move and live with confidence.",
    url: "https://www.hillviewphysiogroup.com.au/about",
    siteName: "Hillview Physiotherapy Group",
    locale: "en_AU",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero section">
        <div className="container">
          <p className="section-heading__subtitle">Our story</p>
          <h1 className="page-hero__title">About Hillview Physiotherapy Group</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gap: "3rem", alignItems: "center" }}>
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  color: "var(--color-neutral)",
                  lineHeight: "1.7",
                }}
              >
                <p>
                  Founded by a team of passionate local clinicians, Hillview Physiotherapy Group
                  unites three physiotherapists and a practice manager with years of experience
                  serving the Mornington Peninsula community.
                </p>
                <p>
                  Our goal is simple — to provide the highest-quality physiotherapy experience in a
                  supportive, modern setting.
                </p>
                <p>
                  At Hillview Physiotherapy Group, we&apos;re proud to be local physiotherapists
                  dedicated to helping our community move and live with confidence.
                </p>
                <p>
                  Our experienced team delivers premium, evidence-based care in a purpose-built
                  Dromana clinic featuring private consultation rooms, a fully equipped rehab gym,
                  and a calm, welcoming environment.
                </p>
                <p>
                  We believe in clear plans, consistent progress checks, and communication that
                  makes sense — because your recovery matters to us.
                </p>
              </div>
              <div className="mt-4">
                <a href="/team" className="btn btn--primary">
                  Meet the Hillview Team
                </a>
              </div>
            </div>
            <div>
              <div
                style={{
                  aspectRatio: "4/3",
                  overflow: "hidden",
                  backgroundColor: "rgba(111,117,110,0.1)",
                }}
              >
                <img
                  src="https://static.wixstatic.com/media/452c68_2ba5f30415a5437799e9e7d74e3db521~mv2.jpg/v1/fill/w_455,h_341,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_0499_edited.jpg"
                  alt="Hillview Physiotherapy Group clinic team"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--white section--border">
        <div className="container">
          <div className="text-center" style={{ maxWidth: "40rem", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
            <h2 className="cta-block__title" style={{ color: "var(--color-foreground)" }}>
              Experience the Hillview difference
            </h2>
            <a
              href={BOOKING_URL}
              className="btn btn--primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book an Appointment
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
