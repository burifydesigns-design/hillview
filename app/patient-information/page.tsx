import Link from "next/link";

const BOOKING_URL = process.env.NEXT_PUBLIC_NOOKAL_BOOKING_URL || "";

export const metadata = {
  title: "Patient Information | Hillview Physiotherapy Group",
  description:
    "What to expect at Hillview Physiotherapy Group. First appointment information, what to bring, funding options, and frequently asked questions.",
  openGraph: {
    title: "Patient Information | Hillview Physiotherapy Group",
    description:
      "Find answers to common questions about appointments, funding, and what to expect at Hillview Physiotherapy Group in Dromana.",
    url: "https://www.hillviewphysiogroup.com.au/patient-information",
    siteName: "Hillview Physiotherapy Group",
    locale: "en_AU",
    type: "website",
  },
};

export default function PatientInformationPage() {
  return (
    <>
      <section className="page-hero section">
        <div className="container">
          <p className="section-heading__subtitle">What to expect</p>
          <h1 className="page-hero__title">Patient Information</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="prose" style={{ maxWidth: "48rem", margin: "0 auto" }}>
            <h2>What to expect</h2>
            <p>
              At Hillview Physiotherapy Group, we aim to make your experience as comfortable and
              straightforward as possible. From your first contact to your last appointment, our
              team is here to guide you through every step of your recovery.
            </p>
            <p>
              We believe that good physiotherapy starts with understanding — understanding your goals,
              your history, and what matters most to you. That is why we take the time to listen
              carefully before creating a personalised plan for your recovery.
            </p>

            <h2>First appointment</h2>
            <p>
              During your first appointment, your physiotherapist will conduct a thorough assessment
              to understand your condition, discuss your goals, and begin treatment. Initial
              appointments typically last 45 to 60 minutes, allowing enough time for a comprehensive
              evaluation and starting your treatment plan.
            </p>
            <p>
              Wear comfortable, loose-fitting clothing that allows us to easily assess and treat the
              affected area. For lower limb concerns, shorts are ideal. For shoulder or upper back
              issues, a singlet or loose top works well.
            </p>

            <h2>What to bring</h2>
            <p>To help us provide the best possible care, please bring the following to your appointment:</p>
            <ul>
              <li>Any relevant scans, X-rays, or imaging reports</li>
              <li>Reports from specialists or other health professionals</li>
              <li>Referral letters if claiming through Medicare, WorkCover, TAC, NDIS, or DVA</li>
              <li>Your private health insurance card</li>
              <li>Comfortable clothing that allows movement</li>
            </ul>

            <h2>Funding</h2>
            <p>We accept a range of funding options to make physiotherapy accessible:</p>
            <ul>
              <li>
                <strong>Private Health Insurance</strong> — On-the-spot claiming via HICAPS for all
                major health funds
              </li>
              <li>
                <strong>Medicare EPC</strong> — Enhanced Primary Care (EPC) plans, also known as
                Chronic Disease Management plans, referred by your GP
              </li>
              <li>
                <strong>WorkCover</strong> — Work-related injury management
              </li>
              <li>
                <strong>TAC</strong> — Transport Accident Commission claims
              </li>
              <li>
                <strong>NDIS</strong> — Self- and plan-managed participants
              </li>
              <li>
                <strong>DVA</strong> — Department of Veterans Affairs
              </li>
            </ul>

            <h2>Health funds</h2>
            <p>
              We are registered with all major private health insurers and offer HICAPS on-the-spot
              claiming at our clinic. This means you can claim your rebate immediately after your
              appointment, with no paperwork required on your end.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--white section--border">
        <div className="container">
          <div
            className="text-center"
            style={{ maxWidth: "40rem", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}
          >
            <h2 className="cta-block__title" style={{ color: "var(--color-foreground)" }}>
              Ready to get started?
            </h2>
            <p style={{ color: "var(--color-neutral)" }}>
              Book an appointment and take the first step towards better movement and recovery.
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
