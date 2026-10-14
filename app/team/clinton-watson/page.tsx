import Link from "next/link";

const BOOKING_URL = process.env.NEXT_PUBLIC_NOOKAL_BOOKING_URL || "";

export const metadata = {
  title: "Clinton Watson | Hillview Physiotherapy Group",
  description:
    "Clinton Watson is a Director and Physiotherapist at Hillview Physiotherapy Group in Dromana. With 30 years of private practice experience on the Mornington Peninsula, specialising in running and triathlon injury management.",
  openGraph: {
    title: "Clinton Watson | Hillview Physiotherapy Group",
    description:
      "Clinton Watson is a Director and Physiotherapist at Hillview Physiotherapy Group in Dromana. With 30 years of private practice experience on the Mornington Peninsula, specialising in running and triathlon injury management.",
    url: "https://www.hillviewphysiogroup.com.au/team/clinton-watson",
    siteName: "Hillview Physiotherapy Group",
    locale: "en_AU",
    type: "website",
  },
};

export default function ClintonWatson() {
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
                  Clinton Watson
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
                src="https://static.wixstatic.com/media/452c68_e53a657054f7417ebef6bf9ca3806c84~mv2.jpg/v1/fill/w_176,h_191,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_1249_edited.jpg"
                alt="Clinton Watson, Physiotherapist and Director at Hillview Physiotherapy Group"
                className="practitioner-profile__image"
                loading="eager"
              />
            </div>
            <div className="practitioner-profile__content">
              <div>
                <h1 className="practitioner-profile__name">Clinton Watson</h1>
                <p className="practitioner-profile__role">Physiotherapist / Director</p>
              </div>
              <div className="prose">
                <p>
                  Clinton graduated from La Trobe University in 1994 and has spent the last 30
                  years working in private practice on the Mornington Peninsula, as well as stints
                  with Dandenong Stingrays and Frankston Dolphins Football Clubs and the Victorian
                  Institute of Sport Triathlon program.
                </p>
                <p>
                  Whilst seeing the benefits of manual therapy, Clinton is determined to bring a
                  holistic approach to physiotherapy, looking at ways to enhance the body&apos;s natural
                  healing properties, assessing movement patterns and biomechanical issues that may
                  contribute to an injury, and focusing on both short and long-term goals.
                </p>
                <p>
                  Clinton brings a very patient centred approach to injury management combining his
                  coaching skills, personal experience, and a desire to help others into his daily
                  practice. With a specific interest in running and triathlon injury management,
                  Clinton has the tools to take full control of all aspects of your return to
                  activity.
                </p>
              </div>
              <div>
                <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                  Qualifications
                </h2>
                <p
                  style={{ fontSize: "0.9375rem", color: "var(--color-neutral)", lineHeight: "1.7" }}
                >
                  Bachelor of Physiotherapy (La Trobe University, 1994)
                </p>
              </div>
              <div>
                <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                  Areas of focus
                </h2>
                <p
                  style={{ fontSize: "0.9375rem", color: "var(--color-neutral)", lineHeight: "1.7" }}
                >
                  Running and triathlon injury management, holistic physiotherapy, biomechanical
                  assessment
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
