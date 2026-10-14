import Link from "next/link";

const BOOKING_URL = process.env.NEXT_PUBLIC_NOOKAL_BOOKING_URL || "";

export const metadata = {
  title: "Cam Davis | Hillview Physiotherapy Group",
  description:
    "Cam Davis is a Director and Physiotherapist at Hillview Physiotherapy Group in Dromana. Specialising in youth athlete rehabilitation, post-operative care, spinal and shoulder pain, and lower limb injuries.",
  openGraph: {
    title: "Cam Davis | Hillview Physiotherapy Group",
    description:
      "Cam Davis is a Director and Physiotherapist at Hillview Physiotherapy Group in Dromana. Specialising in youth athlete rehabilitation, post-operative care, spinal and shoulder pain, and lower limb injuries.",
    url: "https://www.hillviewphysiogroup.com.au/team/cam-davis",
    siteName: "Hillview Physiotherapy Group",
    locale: "en_AU",
    type: "website",
  },
};

export default function CamDavis() {
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
                <Link href="/team" className="breadcrumbs__link">
                  Our Team
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <span className="breadcrumbs__current" aria-current="page">
                  Cam Davis
                </span>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="practitioner-profile">
            <div className="practitioner-profile__image-wrapper">
              <img
                src="https://static.wixstatic.com/media/452c68_32139cc47b0d463a918023d9482e9fd2~mv2.jpg/v1/fill/w_176,h_191,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_1252_edited.jpg"
                alt="Cam Davis, Physiotherapist and Director at Hillview Physiotherapy Group"
                className="practitioner-profile__image"
                loading="eager"
              />
            </div>
            <div className="practitioner-profile__content">
              <div>
                <h1 className="practitioner-profile__name">Cam Davis</h1>
                <p className="practitioner-profile__role">Physiotherapist / Director</p>
              </div>
              <div className="prose">
                <p>
                  Cam is an experienced and passionate physiotherapist who graduated from Monash
                  University in 2021 with a Bachelor of Physiotherapy (First Class Honours). He
                  combines evidence-based practice with strong manual therapy and exercise
                  rehabilitation skills to support his patients in achieving their best outcomes.
                </p>
                <p>
                  Cam has a particular interest in supporting youth athletes across a range of
                  sports with rehabilitation and performance. He has previously worked with the
                  Frankston Blues NBL1 basketball teams, the Peninsula Waves VNL netball club, and
                  the Peninsula Old Boys Football Club.
                </p>
                <p>
                  He also has extensive experience in post-operative rehabilitation, spinal and
                  shoulder pain, and lower limb injuries.
                </p>
                <p>
                  Born and raised on the Mornington Peninsula, Cam is passionate about helping his
                  local community stay active and healthy. Outside the clinic, he enjoys routinely
                  playing basketball, tennis, golf, pickleball, and snowboarding, and is a keen
                  follower of AFL, NBA, and cricket.
                </p>
              </div>
              <div>
                <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                  Qualifications
                </h2>
                <p
                  style={{ fontSize: "0.9375rem", color: "var(--color-neutral)", lineHeight: "1.7" }}
                >
                  Bachelor of Physiotherapy (First Class Honours)
                </p>
              </div>
              <div>
                <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                  Areas of focus
                </h2>
                <p
                  style={{ fontSize: "0.9375rem", color: "var(--color-neutral)", lineHeight: "1.7" }}
                >
                  Youth athlete rehabilitation, post-operative care, spinal and shoulder pain,
                  lower limb injuries
                </p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                <a
                  href={BOOKING_URL}
                  className="btn btn--primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book an Appointment
                </a>
                <Link href="/team" className="btn btn--outline">
                  View All Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
