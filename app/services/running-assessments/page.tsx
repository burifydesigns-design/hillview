import Link from "next/link";

const BOOKING_URL = process.env.NEXT_PUBLIC_NOOKAL_BOOKING_URL || "";

export const metadata = {
  title: "Running Assessments | Hillview Physiotherapy Group",
  description:
    "Biomechanical running analysis and injury prevention at Hillview Physiotherapy Group in Dromana. Improve your form, reduce pain, and run with confidence.",
  openGraph: {
    title: "Running Assessments | Hillview Physiotherapy Group",
    description:
      "In-depth biomechanical running analysis to identify movement inefficiencies and reduce injury risk.",
    url: "https://www.hillviewphysiogroup.com.au/services/running-assessments",
    siteName: "Hillview Physiotherapy Group",
    locale: "en_AU",
    type: "website",
  },
};

export default function RunningAssessmentsPage() {
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
                  Running Assessments
                </span>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="page-hero section">
        <div className="container">
          <h1 className="page-hero__title">Running Assessments</h1>
          <p className="page-hero__subtitle">
            In-depth biomechanical running analysis to identify movement inefficiencies and reduce
            injury risk.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gap: "3rem", alignItems: "start" }}>
            <div>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1rem" }}>
                What is Running Assessments?
              </h2>
              <div className="prose">
                <p>
                  In-depth biomechanical running analysis to identify movement inefficiencies,
                  strength imbalances, and technique factors that may be contributing to your
                  symptoms or limiting your performance.
                </p>
              </div>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginTop: "2rem", marginBottom: "1rem" }}>
                Who it helps
              </h2>
              <div className="prose">
                <p>
                  Whether you are a beginner runner, training for an event, or getting back to
                  running after injury, our assessment will help you understand what is contributing
                  to your symptoms and how to improve how you move.
                </p>
              </div>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginTop: "2rem", marginBottom: "1rem" }}>
                What to expect
              </h2>
              <div className="prose">
                <p>
                  Your assessment includes a movement screen, running gait analysis, strength and
                  flexibility testing, and a clear plan with specific recommendations to improve
                  performance and reduce injury risk.
                </p>
              </div>
            </div>
            <div>
              <div
                style={{ aspectRatio: "4/3", overflow: "hidden", backgroundColor: "rgba(111,117,110,0.1)", marginBottom: "1.5rem" }}
              >
                <img
                  src="/images/services/running-assessment.jpeg"
                  alt="Running assessment at Hillview Physiotherapy Group"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  loading="lazy"
                />
              </div>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1rem" }}>
                Hillview&apos;s approach
              </h2>
              <div className="prose">
                <p>
                  We take a practical, evidence-based approach to running analysis. Our assessment
                  focuses on what matters for your individual goals — whether that is returning to
                  running pain-free or preparing for your next event.
                </p>
              </div>
              <div style={{ marginTop: "2rem" }}>
                <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1rem" }}>
                  Your clinician
                </h2>
                <Link
                  href="/team/brayden-page"
                  style={{ display: "flex", alignItems: "center", gap: "1rem", textDecoration: "none" }}
                >
                  <div
                    style={{ width: "4rem", height: "4rem", borderRadius: "50%", overflow: "hidden", backgroundColor: "rgba(111,117,110,0.1)", flexShrink: 0 }}
                  >
                    <img
                      src="https://static.wixstatic.com/media/452c68_b6abee90a3ed40d19b7503ec4341cddf~mv2.jpg/v1/fill/w_176,h_191,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_1253_edited.jpg"
                      alt="Brayden Page"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <div>
                    <p
                      style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--color-foreground)", transition: "color 200ms" }}
                    >
                      Brayden Page
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
