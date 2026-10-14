import Link from "next/link";

const BOOKING_URL = process.env.NEXT_PUBLIC_NOOKAL_BOOKING_URL || "";

export const metadata = {
  title: "Our Team | Hillview Physiotherapy Group",
  description:
    "Meet the experienced physiotherapists and directors at Hillview Physiotherapy Group in Dromana.",
  openGraph: {
    title: "Our Team | Hillview Physiotherapy Group",
    description:
      "Meet the experienced physiotherapists and directors at Hillview Physiotherapy Group in Dromana.",
    url: "https://www.hillviewphysiogroup.com.au/team",
    siteName: "Hillview Physiotherapy Group",
    locale: "en_AU",
    type: "website",
  },
};

export default function TeamPage() {
  return (
    <>
      <section className="page-hero section">
        <div className="container">
          <p className="section-heading__subtitle">The people behind your recovery</p>
          <h1 className="page-hero__title">Our Team</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid--4">
            <Link href="/team/brayden-page" className="team-card">
              <div className="team-card__image-wrapper">
                <img
                  src="https://static.wixstatic.com/media/452c68_b6abee90a3ed40d19b7503ec4341cddf~mv2.jpg/v1/fill/w_176,h_191,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_1253_edited.jpg"
                  alt="Brayden Page, Physiotherapist and Director at Hillview Physiotherapy Group"
                  className="team-card__image"
                  loading="lazy"
                />
              </div>
              <div className="team-card__body">
                <h3 className="team-card__name">Brayden Page</h3>
                <p className="team-card__role">Physiotherapist / Director</p>
                <p className="team-card__bio">
                  Dedicated physiotherapist with a Master of Physiotherapy and a passion for helping
                  people move better and build strength for long-term health and performance.
                </p>
              </div>
            </Link>
            <Link href="/team/cam-davis" className="team-card">
              <div className="team-card__image-wrapper">
                <img
                  src="https://static.wixstatic.com/media/452c68_32139cc47b0d463a918023d9482e9fd2~mv2.jpg/v1/fill/w_176,h_191,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_1252_edited.jpg"
                  alt="Cam Davis, Physiotherapist and Director at Hillview Physiotherapy Group"
                  className="team-card__image"
                  loading="lazy"
                />
              </div>
              <div className="team-card__body">
                <h3 className="team-card__name">Cam Davis</h3>
                <p className="team-card__role">Physiotherapist / Director</p>
                <p className="team-card__bio">
                  Experienced physiotherapist with a Bachelor of Physiotherapy (First Class Honours),
                  specialising in youth athlete rehabilitation and performance.
                </p>
              </div>
            </Link>
            <Link href="/team/clinton-watson" className="team-card">
              <div className="team-card__image-wrapper">
                <img
                  src="https://static.wixstatic.com/media/452c68_e53a657054f7417ebef6bf9ca3806c84~mv2.jpg/v1/fill/w_176,h_191,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_1249_edited.jpg"
                  alt="Clinton Watson, Physiotherapist and Director at Hillview Physiotherapy Group"
                  className="team-card__image"
                  loading="lazy"
                />
              </div>
              <div className="team-card__body">
                <h3 className="team-card__name">Clinton Watson</h3>
                <p className="team-card__role">Physiotherapist / Director</p>
                <p className="team-card__bio">
                  30 years of private practice experience on the Mornington Peninsula, with a holistic
                  approach to physiotherapy and running injury management.
                </p>
              </div>
            </Link>
            <Link href="/team/ros-zeuschner" className="team-card">
              <div className="team-card__image-wrapper">
                <img
                  src="https://static.wixstatic.com/media/452c68_f20fe54695fc4b629cfcff0ae7397ff2~mv2.jpg/v1/fill/w_176,h_191,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_1289_edited_edited.jpg"
                  alt="Ros Zeuschner, Practice Manager and Director at Hillview Physiotherapy Group"
                  className="team-card__image"
                  loading="lazy"
                />
              </div>
              <div className="team-card__body">
                <h3 className="team-card__name">Ros Zeuschner</h3>
                <p className="team-card__role">Practice Manager / Director</p>
                <p className="team-card__bio">
                  The heart of our clinic, keeping everything running smoothly and ensuring every
                  patient receives the best care possible.
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
              Ready to meet us?
            </h2>
            <p className="text-neutral">
              Book an appointment and experience the Hillview difference for yourself.
            </p>
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
