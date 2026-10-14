import Link from "next/link";

export const metadata = {
  title: "Frequently Asked Questions | Hillview Physiotherapy Group",
  description:
    "Find answers to common questions about appointments, funding, and what to expect at Hillview Physiotherapy Group in Dromana.",
  openGraph: {
    title: "Frequently Asked Questions | Hillview Physiotherapy Group",
    description:
      "Find answers to common questions about appointments, funding, and what to expect at Hillview Physiotherapy Group in Dromana.",
    url: "https://www.hillviewphysiogroup.com.au/faq",
    siteName: "Hillview Physiotherapy Group",
    locale: "en_AU",
    type: "website",
  },
};

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

export default function FaqPage() {
  const BOOKING_URL = process.env.NEXT_PUBLIC_NOOKAL_BOOKING_URL || "";

  return (
    <>
      <section className="page-hero section">
        <div className="container">
          <p className="section-heading__subtitle">Got questions?</p>
          <h1 className="page-hero__title">Frequently Asked Questions</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="prose" style={{ maxWidth: "48rem", margin: "0 auto 3rem", lineHeight: "1.7", color: "var(--color-neutral)" }}>
            <p>
              We have compiled some of the most common questions we receive from new and returning
              patients. If you cannot find the answer you are looking for, please do not hesitate to
              get in touch.
            </p>
          </div>
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
        </div>
      </section>

      <section className="cta-block">
        <div className="cta-block__inner">
          <h2 className="cta-block__title">Still have questions?</h2>
          <p className="cta-block__text">
            If you could not find what you were looking for, get in touch and we will be happy to
            help.
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
