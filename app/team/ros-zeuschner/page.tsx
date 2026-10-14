import Link from "next/link";

const BOOKING_URL = process.env.NEXT_PUBLIC_NOOKAL_BOOKING_URL || "";

export const metadata = {
  title: "Ros Zeuschner | Hillview Physiotherapy Group",
  description:
    "Ros Zeuschner is the Practice Manager and Director at Hillview Physiotherapy Group in Dromana. The heart of the clinic, passionate about patient care and community connections.",
  openGraph: {
    title: "Ros Zeuschner | Hillview Physiotherapy Group",
    description:
      "Ros Zeuschner is the Practice Manager and Director at Hillview Physiotherapy Group in Dromana. The heart of the clinic, passionate about patient care and community connections.",
    url: "https://www.hillviewphysiogroup.com.au/team/ros-zeuschner",
    siteName: "Hillview Physiotherapy Group",
    locale: "en_AU",
    type: "website",
  },
};

export default function RosZeuschner() {
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
                  Ros Zeuschner
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
                src="https://static.wixstatic.com/media/452c68_f20fe54695fc4b629cfcff0ae7397ff2~mv2.jpg/v1/fill/w_176,h_191,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_1289_edited_edited.jpg"
                alt="Ros Zeuschner, Practice Manager and Director at Hillview Physiotherapy Group"
                className="practitioner-profile__image"
                loading="eager"
              />
            </div>
            <div className="practitioner-profile__content">
              <div>
                <h1 className="practitioner-profile__name">Ros Zeuschner</h1>
                <p className="practitioner-profile__role">Practice Manager / Director</p>
              </div>
              <div className="prose">
                <p>
                  Ros is the heart of our clinic, keeping everything running smoothly behind the
                  scenes. She&apos;s passionate about patient care, building strong community connections,
                  and is often the friendly, welcoming face at the front desk.
                </p>
                <p>
                  With a focus on making every patient feel comfortable and supported from their
                  first interaction, Ros ensures Hillview operates as the welcoming, professional
                  clinic our patients expect.
                </p>
              </div>
              <div>
                <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                  Areas of focus
                </h2>
                <p
                  style={{ fontSize: "0.9375rem", color: "var(--color-neutral)", lineHeight: "1.7" }}
                >
                  Practice management, patient care, community connections
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
