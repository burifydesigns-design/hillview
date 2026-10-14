import Link from "next/link";

const BOOKING_URL = process.env.NEXT_PUBLIC_NOOKAL_BOOKING_URL || "";

export const metadata = {
  title: "Brayden Page | Hillview Physiotherapy Group",
  description:
    "Brayden Page is a Director and Physiotherapist at Hillview Physiotherapy Group in Dromana. Specialising in running injuries, spinal pain, post-surgical rehabilitation, and golf-related physiotherapy.",
  openGraph: {
    title: "Brayden Page | Hillview Physiotherapy Group",
    description:
      "Brayden Page is a Director and Physiotherapist at Hillview Physiotherapy Group in Dromana. Specialising in running injuries, spinal pain, post-surgical rehabilitation, and golf-related physiotherapy.",
    url: "https://www.hillviewphysiogroup.com.au/team/brayden-page",
    siteName: "Hillview Physiotherapy Group",
    locale: "en_AU",
    type: "website",
  },
};

export default function BraydenPage() {
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
                  Brayden Page
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
                src="https://static.wixstatic.com/media/452c68_b6abee90a3ed40d19b7503ec4341cddf~mv2.jpg/v1/fill/w_176,h_191,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_1253_edited.jpg"
                alt="Brayden Page, Physiotherapist and Director at Hillview Physiotherapy Group"
                className="practitioner-profile__image"
                loading="eager"
              />
            </div>
            <div className="practitioner-profile__content">
              <div>
                <h1 className="practitioner-profile__name">Brayden Page</h1>
                <p className="practitioner-profile__role">Physiotherapist / Director</p>
              </div>
              <div className="prose">
                <p>
                  Brayden is a dedicated and experienced physiotherapist with a genuine passion for
                  helping people move better, recover fully, and build strength for long-term health
                  and performance.
                </p>
                <p>
                  His approach combines detailed assessment, hands-on treatment, and tailored
                  exercise programs to create lasting, meaningful results for each patient.
                </p>
                <p>
                  With formal qualifications including a Master of Physiotherapy and a Bachelor of
                  Sport and Exercise Science (First Class Honours), Brayden brings a deep
                  understanding of movement, performance, and rehabilitation to his practice.
                </p>
                <p>
                  He has developed particular interest in managing running and strength-training
                  injuries, spinal and postural pain, and post-surgical rehabilitation. Brayden also
                  has a strong interest in golf-related physiotherapy, enjoying the process of
                  analysing individual anatomy and movement and how it relates to swing mechanics
                  and ultimately helping golfers of all levels recover from injury, improve
                  mobility, and enhance their game.
                </p>
                <p>
                  Brayden has spent the majority of his career working in Mornington, and is very
                  excited to continue working on the Mornington Peninsula in his hometown Dromana.
                </p>
                <p>
                  Outside the clinic, Brayden enjoys golf, running, basketball, snowboarding, and
                  spending time with family and friends on the Mornington Peninsula.
                </p>
              </div>
              <div>
                <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                  Qualifications
                </h2>
                <p
                  style={{ fontSize: "0.9375rem", color: "var(--color-neutral)", lineHeight: "1.7" }}
                >
                  Master of Physiotherapy, Bachelor of Sport and Exercise Science (First Class Honours)
                </p>
              </div>
              <div>
                <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                  Areas of focus
                </h2>
                <p
                  style={{ fontSize: "0.9375rem", color: "var(--color-neutral)", lineHeight: "1.7" }}
                >
                  Running injuries, spinal and postural pain, post-surgical rehabilitation,
                  golf-related physiotherapy
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
