const BOOKING_URL = process.env.NEXT_PUBLIC_NOOKAL_BOOKING_URL || "";

export const metadata = {
  title: "The Clinic | Hillview Physiotherapy Group",
  description: "A purpose-built Dromana clinic with private treatment spaces and a fully equipped rehab gym.",
  openGraph: {
    title: "The Clinic | Hillview Physiotherapy Group",
    description: "A purpose-built Dromana clinic with private treatment spaces and a fully equipped rehab gym.",
    url: "https://www.hillviewphysiogroup.com.au/clinic",
    siteName: "Hillview Physiotherapy Group",
    locale: "en_AU",
    type: "website",
  },
};

export default function ClinicPage() {
  return (
    <>
      <section className="page-hero section">
        <div className="container">
          <p className="section-heading__subtitle">The Clinic</p>
          <h1 className="page-hero__title">A space built for recovery.</h1>
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
                  Our Dromana clinic has been designed with your recovery in mind. We combine
                  private treatment spaces with the equipment and space needed to help you move,
                  strengthen, and rehabilitate.
                </p>
                <p>
                  The clinic features comfortable consultation rooms for one-on-one treatment, a
                  fully equipped rehabilitation gym, and a welcoming environment where you can feel
                  at ease from the moment you arrive.
                </p>
                <p>
                  Whether you are recovering from injury, managing ongoing pain, or working towards
                  a specific goal, our clinic provides the space and tools to support your journey.
                </p>
              </div>
              <div className="mt-4" style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                <a
                  href={BOOKING_URL}
                  className="btn btn--primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book an Appointment
                </a>
                <a href="/contact" className="btn btn--outline">
                  Get in Touch
                </a>
              </div>
            </div>
            <div>
              <div className="clinic-gallery">
                <div className="clinic-gallery__item">
                  <img
                    src="https://static.wixstatic.com/media/452c68_528fd9b3668546778afedec165df7d6e~mv2.png/v1/fill/w_300,h_300,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_1274_HEIC.png"
                    alt="Hillview Physiotherapy Group clinic interior"
                    className="clinic-gallery__image"
                    loading="lazy"
                  />
                </div>
                <div className="clinic-gallery__item">
                  <img
                    src="https://static.wixstatic.com/media/452c68_c1eec53a90764082b0c3086d81802d5e~mv2.png/v1/fill/w_300,h_300,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_1343_HEIC.png"
                    alt="Hillview Physiotherapy Group treatment space"
                    className="clinic-gallery__image"
                    loading="lazy"
                  />
                </div>
                <div className="clinic-gallery__item">
                  <img
                    src="https://static.wixstatic.com/media/452c68_81c6eea96541420292cbe32476814647~mv2.png/v1/fill/w_300,h_300,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_1455_HEIC.png"
                    alt="Hillview Physiotherapy Group rehab gym"
                    className="clinic-gallery__image"
                    loading="lazy"
                  />
                </div>
                <div className="clinic-gallery__item">
                  <img
                    src="https://static.wixstatic.com/media/452c68_0aee825439364d64b640c362a24c55d6~mv2.png/v1/fill/w_300,h_300,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_1098%202_HEIC.png"
                    alt="Hillview Physiotherapy Group physiotherapy equipment"
                    className="clinic-gallery__image"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--white section--border">
        <div className="container">
          <div className="text-center" style={{ maxWidth: "40rem", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}>
            <h2 className="cta-block__title" style={{ color: "var(--color-foreground)" }}>
              Experience the clinic for yourself
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
