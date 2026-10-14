import Link from "next/link";

const BOOKING_URL = process.env.NEXT_PUBLIC_NOOKAL_BOOKING_URL || "";

export const metadata = {
  title: "Post-Surgical Rehabilitation | Hillview Physiotherapy Group",
  description:
    "Expert post-surgical rehabilitation in Dromana. Safe, structured recovery plans coordinated with your surgeon's protocol.",
  openGraph: {
    title: "Post-Surgical Rehabilitation | Hillview Physiotherapy Group",
    description:
      "Expert guidance through your post-operative journey to safely restore strength, movement, and confidence with structured recovery.",
    url: "https://www.hillviewphysiogroup.com.au/services/post-surgical-rehabilitation",
    siteName: "Hillview Physiotherapy Group",
    locale: "en_AU",
    type: "website",
  },
};

export default function PostSurgicalRehabilitationPage() {
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
                <Link href="/services" className="breadcrumbs__link">
                  Services
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <span className="breadcrumbs__current" aria-current="page">
                  Post-Surgical Rehabilitation
                </span>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="page-hero section">
        <div className="container">
          <h1 className="page-hero__title">Post-Surgical Rehabilitation</h1>
          <p className="page-hero__subtitle">
            Expert guidance through your post-operative journey to safely restore strength,
            movement, and confidence.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gap: "3rem", alignItems: "start" }}>
            <div>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1rem" }}>
                What is Post-Surgical Rehabilitation?
              </h2>
              <div className="prose">
                <p>
                  Expert guidance through your post-operative journey to safely restore strength,
                  movement, and confidence. We work closely with your surgeon&apos;s protocol to ensure a
                  structured, progressive recovery.
                </p>
              </div>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginTop: "2rem", marginBottom: "1rem" }}>
                Who it helps
              </h2>
              <div className="prose">
                <p>
                  People recovering from orthopaedic, knee, shoulder, hip, ankle, and spinal
                  surgeries, as well as other procedures requiring rehabilitation.
                </p>
              </div>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginTop: "2rem", marginBottom: "1rem" }}>
                What to expect
              </h2>
              <div className="prose">
                <p>
                  We begin with a clear understanding of your surgeon&apos;s protocol and your goals,
                  then progress through safe, graduated stages of rehabilitation to help you get back
                  to what matters.
                </p>
              </div>
            </div>
            <div>
              <div
                style={{ aspectRatio: "4/3", overflow: "hidden", backgroundColor: "rgba(111,117,110,0.1)", marginBottom: "1.5rem" }}
              >
                <img
                  src="/images/services/post-surgical-rehabilitation.jpeg"
                  alt="Post-surgical rehabilitation at Hillview Physiotherapy Group"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  loading="lazy"
                />
              </div>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1rem" }}>
                Hillview&apos;s approach
              </h2>
              <div className="prose">
                <p>
                  We coordinate closely with your surgical team and track your progress carefully.
                  Our rehabilitation plans are realistic, progressive, and aligned with your surgeon&apos;s
                  guidance.
                </p>
              </div>
              <div style={{ marginTop: "2rem" }}>
                <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1rem" }}>
                  Your clinician
                </h2>
                <Link
                  href="/team/clinton-watson"
                  style={{ display: "flex", alignItems: "center", gap: "1rem", textDecoration: "none" }}
                >
                  <div
                    style={{ width: "4rem", height: "4rem", borderRadius: "50%", overflow: "hidden", backgroundColor: "rgba(111,117,110,0.1)", flexShrink: 0 }}
                  >
                    <img
                      src="https://static.wixstatic.com/media/452c68_e53a657054f7417ebef6bf9ca3806c84~mv2.jpg/v1/fill/w_176,h_191,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_1249_edited.jpg"
                      alt="Clinton Watson"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <div>
                    <p
                      style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--color-foreground)", transition: "color 200ms" }}
                    >
                      Clinton Watson
                    </p>
                    <p style={{ fontSize: "0.75rem", color: "var(--color-neutral)" }}>
                      Physiotherapist / Director
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--white section--border">
        <div className="container">
          <div className="section-heading section-heading--center mb-4">
            <h2 className="section-heading__title">Common questions</h2>
          </div>
          <FAQ />
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

function FAQ() {
  const faqs = [
    { q: "Do I need a referral?", a: "No referral is needed for private physiotherapy appointments. Simply book online or contact us to get started. However, if you are claiming through Medicare (EPC), WorkCover, TAC, NDIS, or DVA, a referral is required." },
    { q: "What should I bring to my appointment?", a: "Please bring any relevant scans, reports, or referral letters. Wear comfortable clothing that allows us to assess and treat the affected area. Arrive 10 minutes early to complete any necessary paperwork." },
    { q: "How long is my first appointment?", a: "Initial appointments are typically 45–60 minutes, allowing enough time for a thorough assessment, discussion of your goals, and beginning treatment. Follow-up appointments are usually 30 minutes." },
    { q: "Do you accept private health insurance?", a: "Yes. We welcome private health insurance patients and offer on-the-spot claiming through HICAPS for all major health funds." },
    { q: "Can I claim through Medicare?", a: "Yes. We accept Enhanced Primary Care (EPC) plans, also known as Chronic Disease Management plans, which are referred by your GP. Please check with your GP about eligibility." },
    { q: "Do you treat sports injuries?", a: "Absolutely. Our team has extensive experience managing sports injuries across a range of disciplines, including running, football, basketball, netball, golf, and more." },
    { q: "What should I wear?", a: "Wear comfortable, loose-fitting clothing. If you are coming for a lower limb injury, shorts are ideal. For shoulder or upper back issues, a singlet or loose top works well." },
    { q: "How do I book?", a: "You can book online through our Nookal booking system, call us on (03) 5911 0201, or email info@hillviewphysiogroup.com.au. We aim to get you in as soon as possible." },
  ];

  return (
    <div className="faq" style={{ maxWidth: "48rem", margin: "0 auto" }}>
      {faqs.map((faq, i) => (
        <div className="faq__item" data-faq-item key={i}>
          <button
            className="faq__trigger"
            data-faq-trigger
            aria-expanded="false"
            aria-controls={`faq-panel-${i}`}
          >
            <span>{faq.q}</span>
            <svg
              className="faq__icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div className="faq__panel" data-faq-panel id={`faq-panel-${i}`} hidden>
            <p className="faq__answer">{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
