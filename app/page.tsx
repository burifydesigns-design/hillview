import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <section className="hero section">
        <div className="container">
          <div className="hero__inner">
            <div className="hero__content">
              <h1 className="hero__title">
                Move better.<br />
                Recover <span className="hero__title-accent">stronger.</span>
              </h1>
              <p className="hero__subtitle">
                Physiotherapy and rehabilitation designed around you — from recovering from injury to getting back to the activities you love.
              </p>
              <div className="hero__actions">
                <a
                  href="https://book.nookal.com/bookings/book/ACB0861D-c3df-0dEE-09FD-016FBbfcca9d/location"
                  className="btn btn--primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book an Appointment
                </a>
                <Link href="/services/physiotherapy" className="btn btn--outline">
                  Explore Physiotherapy
                </Link>
              </div>
            </div>
            <div className="hero__media">
              <div className="hero__image-wrapper">
                <img
                  src="https://static.wixstatic.com/media/452c68_0aee825439364d64b640c362a24c55d6~mv2.png/v1/crop/x_0,y_936,w_2777,h_2354/fill/w_800,h_680,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_1098%202_HEIC.png"
                  alt="Physiotherapy session at Hillview Physiotherapy Group"
                  className="hero__image"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--white section--border">
        <div className="container">
          <div className="section-heading section-heading--center mb-4">
            <h2 className="section-heading__title">Your body. Your goals. Your recovery.</h2>
          </div>
          <div className="trust-grid">
            <div className="trust-item text-center">
              <h3 className="trust-item__title">Personalised Care</h3>
              <p className="trust-item__desc">Treatment and exercise plans built around you.</p>
            </div>
            <div className="trust-item text-center">
              <h3 className="trust-item__title">Evidence-Based Treatment</h3>
              <p className="trust-item__desc">Practical, clinically informed approaches to recovery.</p>
            </div>
            <div className="trust-item text-center">
              <h3 className="trust-item__title">Rehabilitation Focused</h3>
              <p className="trust-item__desc">Helping you build strength and confidence, not just manage symptoms.</p>
            </div>
            <div className="trust-item text-center">
              <h3 className="trust-item__title">Performance Minded</h3>
              <p className="trust-item__desc">Supporting everyone from everyday movers to athletes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2
            className="section-heading__title mb-4"
            style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)" }}
          >
            What are you looking to get back to?
          </h2>
          <div className="goal-grid">
            <Link href="/services/physiotherapy" className="goal-card">
              <div>
                <h3 className="goal-card__title">Recover from an injury</h3>
                <p className="goal-card__desc">
                  Get back to everyday movement with a structured recovery plan.
                </p>
              </div>
              <span className="goal-card__link">
                Learn more{" "}
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>
            <Link href="/services/strength-rehabilitation" className="goal-card">
              <div>
                <h3 className="goal-card__title">Return to sport</h3>
                <p className="goal-card__desc">
                  Rebuild strength, movement and confidence after injury.
                </p>
              </div>
              <span className="goal-card__link">
                Learn more{" "}
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>
            <Link href="/services/running-assessments" className="goal-card">
              <div>
                <h3 className="goal-card__title">Run without pain</h3>
                <p className="goal-card__desc">
                  Understand what is contributing to your symptoms and improve how you move.
                </p>
              </div>
              <span className="goal-card__link">
                Learn more{" "}
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>
            <Link href="/services/strength-rehabilitation" className="goal-card">
              <div>
                <h3 className="goal-card__title">Build strength</h3>
                <p className="goal-card__desc">
                  Develop a stronger, more capable body with targeted exercise.
                </p>
              </div>
              <span className="goal-card__link">
                Learn more{" "}
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>
            <Link href="/services/post-surgical-rehabilitation" className="goal-card">
              <div>
                <h3 className="goal-card__title">Recover after surgery</h3>
                <p className="goal-card__desc">
                  Progress through rehabilitation with a clear, safe plan.
                </p>
              </div>
              <span className="goal-card__link">
                Learn more{" "}
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>
            <Link href="/services/physiotherapy" className="goal-card">
              <div>
                <h3 className="goal-card__title">Move with confidence</h3>
                <p className="goal-card__desc">
                  Improve movement, manage ongoing problems and stay active.
                </p>
              </div>
              <span className="goal-card__link">
                Learn more{" "}
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--white section--border">
        <div className="container">
          <div style={{ display: "grid", gap: "3rem", alignItems: "center" }}>
            <div>
              <h2
                style={{
                  fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
                  fontWeight: 700,
                  lineHeight: "1.2",
                  letterSpacing: "-0.01em",
                  marginBottom: "1.5rem",
                }}
              >
                Physiotherapy with a bigger picture in mind.
              </h2>
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
                  At Hillview Physiotherapy Group, we believe good physiotherapy is about more
                  than treating what is painful today.
                </p>
                <p>
                  It is about understanding why you are experiencing the problem, creating a plan
                  that makes sense for you, and helping you build the strength and confidence to
                  move forward.
                </p>
                <p>
                  Whether you are recovering from an injury, returning to sport, managing ongoing
                  pain, or working towards a new physical goal, our team works with you every step
                  of the way.
                </p>
              </div>
              <div className="mt-4">
                <Link href="/team" className="btn btn--primary">
                  Meet the Hillview Team
                </Link>
              </div>
            </div>
            <div>
              <div
                style={{
                  aspectRatio: "4/3",
                  overflow: "hidden",
                  backgroundColor: "rgba(111,117,110,0.1)",
                }}
              >
                <img
                  src="https://static.wixstatic.com/media/452c68_2ba5f30415a5437799e9e7d74e3db521~mv2.jpg/v1/fill/w_455,h_341,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_0499_edited.jpg"
                  alt="Hillview Physiotherapy Group clinic team"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading section-heading--center mb-4">
            <h2 className="section-heading__title">
              More than treatment. A plan for progress.
            </h2>
          </div>
          <div className="grid grid--3">
            <Link href="/services/physiotherapy" className="service-card">
              <div className="service-card__media">
                <img
                  src="/images/services/physiotherapy.jpeg"
                  alt="Physiotherapy treatment at Hillview Physiotherapy Group"
                  className="service-card__image"
                  loading="lazy"
                />
              </div>
              <div className="service-card__body">
                <h3 className="service-card__title">Physiotherapy</h3>
                <p className="service-card__text">
                  Comprehensive one-on-one assessments to identify the underlying cause of your pain
                  or injury.
                </p>
              </div>
            </Link>
            <Link href="/services/running-assessments" className="service-card">
              <div className="service-card__media">
                <img
                  src="/images/services/running-assessment.jpeg"
                  alt="Physiotherapist assessing a runner's movement"
                  className="service-card__image"
                  loading="lazy"
                />
              </div>
              <div className="service-card__body">
                <h3 className="service-card__title">Running Assessments</h3>
                <p className="service-card__text">
                  In-depth biomechanical running analysis to identify movement inefficiencies and
                  reduce injury risk.
                </p>
              </div>
            </Link>
            <Link href="/services/strength-rehabilitation" className="service-card">
              <div className="service-card__media">
                <img
                  src="/images/services/strength-rehabilitation.jpeg"
                  alt="Physiotherapy strength and rehabilitation exercise"
                  className="service-card__image"
                  loading="lazy"
                />
              </div>
              <div className="service-card__body">
                <h3 className="service-card__title">Strength & Rehabilitation</h3>
                <p className="service-card__text">
                  Group functional strength classes and tailored exercise programs to build
                  strength, balance, and mobility.
                </p>
              </div>
            </Link>
            <Link href="/services/post-surgical-rehabilitation" className="service-card">
              <div className="service-card__media">
                <img
                  src="/images/services/post-surgical-rehabilitation.jpeg"
                  alt="Physiotherapist guiding post-surgical rehabilitation"
                  className="service-card__image"
                  loading="lazy"
                />
              </div>
              <div className="service-card__body">
                <h3 className="service-card__title">Post-Surgical Rehabilitation</h3>
                <p className="service-card__text">
                  Expert guidance through your post-operative journey to safely restore strength,
                  movement, and confidence.
                </p>
              </div>
            </Link>
            <Link href="/services/dry-needling" className="service-card">
              <div className="service-card__media">
                <img
                  src="/images/services/dry-needling.jpeg"
                  alt="Physiotherapist performing dry needling treatment"
                  className="service-card__image"
                  loading="lazy"
                />
              </div>
              <div className="service-card__body">
                <h3 className="service-card__title">Dry Needling</h3>
                <p className="service-card__text">
                  Targeted dry needling to help release muscle tension, reduce pain, and support
                  your rehabilitation.
                </p>
              </div>
            </Link>
            <Link href="/services/golf-tpi" className="service-card">
              <div className="service-card__media">
                <img
                  src="/images/services/TPI-golf-assesment.jpeg"
                  alt="Physiotherapist performing TPI golf assessment"
                  className="service-card__image"
                  loading="lazy"
                />
              </div>
              <div className="service-card__body">
                <h3 className="service-card__title">TPI Golf Assessment</h3>
                <p className="service-card__text">
                  Titleist Performance Institute golf movement screens with Brayden Page. Analyse
                  movement and swing mechanics.
                </p>
              </div>
            </Link>
          </div>
          <div className="mt-4 text-center">
            <Link href="/services" className="btn btn--outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--white section--border">
        <div className="container">
          <div className="section-heading section-heading--center mb-4">
            <h2 className="section-heading__title">
              A clearer path from pain to progress.
            </h2>
          </div>
          <div className="process-grid">
            <div className="process-step">
              <div className="process-step__number">01</div>
              <h3 className="process-step__title">Understand</h3>
              <p className="process-step__desc">
                We assess what is happening and listen to what matters to you.
              </p>
            </div>
            <div className="process-step">
              <div className="process-step__number">02</div>
              <h3 className="process-step__title">Plan</h3>
              <p className="process-step__desc">
                We create a practical treatment and rehabilitation strategy.
              </p>
            </div>
            <div className="process-step">
              <div className="process-step__number">03</div>
              <h3 className="process-step__title">Build</h3>
              <p className="process-step__desc">
                We use targeted movement and exercise to build capacity.
              </p>
            </div>
            <div className="process-step">
              <div className="process-step__number">04</div>
              <h3 className="process-step__title">Progress</h3>
              <p className="process-step__desc">
                We help you return to the activities and lifestyle you care about.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading section-heading--center mb-4">
            <h2 className="section-heading__title">The people behind your recovery.</h2>
          </div>
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
                  Dedicated physiotherapist with a Master of Physiotherapy and a passion for
                  helping people move better and build strength for long-term health.
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
                  Experienced physiotherapist with a Bachelor of Physiotherapy (First Class
                  Honours), specialising in youth athlete rehabilitation and performance.
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
                  30 years of private practice experience on the Mornington Peninsula, with a
                  holistic approach to physiotherapy and running injury management.
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
          <div className="mt-4 text-center">
            <Link href="/team" className="btn btn--outline">
              Meet the Team
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--white section--border">
        <div className="container">
          <div className="section-heading section-heading--center mb-4">
            <h2 className="section-heading__title">Don't just take our word for it.</h2>
          </div>
          <div className="testimonial-grid">
            <div className="testimonial">
              <p className="testimonial__quote">
                &ldquo;The team at Hillview genuinely care about your recovery. I felt listened to
                from the first appointment and my progress has been incredible.&rdquo;
              </p>
              <p className="testimonial__author">Local Patient</p>
              <p className="testimonial__context">Returning to running after injury</p>
            </div>
            <div className="testimonial">
              <p className="testimonial__quote">
                &ldquo;Professional, friendly, and really knowledgeable. The clinic is modern and the
                team makes you feel comfortable from day one.&rdquo;
              </p>
              <p className="testimonial__author">Mornington Peninsula local</p>
              <p className="testimonial__context">Ongoing physiotherapy care</p>
            </div>
            <div className="testimonial">
              <p className="testimonial__quote">
                &ldquo;After surgery, I was nervous about getting back to activity. Hillview gave me a
                clear plan and I am now stronger than ever.&rdquo;
              </p>
              <p className="testimonial__author">Local Patient</p>
              <p className="testimonial__context">Post-surgical rehabilitation</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading section-heading--center mb-4">
            <h2 className="section-heading__title">Funding and payment options</h2>
          </div>
          <div className="funding-grid">
            <div className="funding-item">
              <h3 className="funding-item__title">Private Health Insurance</h3>
              <p className="funding-item__desc">On-the-spot claiming via HICAPS</p>
            </div>
            <div className="funding-item">
              <h3 className="funding-item__title">Medicare</h3>
              <p className="funding-item__desc">EPC Chronic Disease Management plans</p>
            </div>
            <div className="funding-item">
              <h3 className="funding-item__title">WorkCover</h3>
              <p className="funding-item__desc">Work-related injury management</p>
            </div>
            <div className="funding-item">
              <h3 className="funding-item__title">TAC</h3>
              <p className="funding-item__desc">Transport Accident Commission</p>
            </div>
            <div className="funding-item">
              <h3 className="funding-item__title">NDIS</h3>
              <p className="funding-item__desc">Self- and plan-managed participants</p>
            </div>
            <div className="funding-item">
              <h3 className="funding-item__title">DVA</h3>
              <p className="funding-item__desc">Department of Veterans Affairs</p>
            </div>
          </div>
          <p
            className="text-center mt-3"
            style={{ fontSize: "0.875rem", color: "var(--color-neutral)" }}
          >
            No referral needed for private appointments. Simply book online or contact us.
          </p>
        </div>
      </section>

      <section className="section section--white section--border">
        <div className="container">
          <div className="section-heading section-heading--center mb-4">
            <h2 className="section-heading__title">Frequently asked questions</h2>
          </div>
          <div className="faq" style={{ margin: "0 auto" }}>
            <div className="faq__item" data-faq-item>
              <button
                className="faq__trigger"
                data-faq-trigger
                aria-expanded="false"
                aria-controls="faq-panel-0"
              >
                <span>Do I need a referral?</span>
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
              <div className="faq__panel" data-faq-panel id="faq-panel-0" hidden>
                <p className="faq__answer">
                  No referral is needed for private physiotherapy appointments. Simply book online
                  or contact us to get started. However, if you are claiming through Medicare
                  (EPC), WorkCover, TAC, NDIS, or DVA, a referral is required.
                </p>
              </div>
            </div>
            <div className="faq__item" data-faq-item>
              <button
                className="faq__trigger"
                data-faq-trigger
                aria-expanded="false"
                aria-controls="faq-panel-1"
              >
                <span>What should I bring to my appointment?</span>
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
              <div className="faq__panel" data-faq-panel id="faq-panel-1" hidden>
                <p className="faq__answer">
                  Please bring any relevant scans, reports, or referral letters. Wear comfortable
                  clothing that allows us to assess and treat the affected area. Arrive 10 minutes
                  early to complete any necessary paperwork.
                </p>
              </div>
            </div>
            <div className="faq__item" data-faq-item>
              <button
                className="faq__trigger"
                data-faq-trigger
                aria-expanded="false"
                aria-controls="faq-panel-2"
              >
                <span>How long is my first appointment?</span>
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
              <div className="faq__panel" data-faq-panel id="faq-panel-2" hidden>
                <p className="faq__answer">
                  Initial appointments are typically 45–60 minutes, allowing enough time for a
                  thorough assessment, discussion of your goals, and beginning treatment. Follow-up
                  appointments are usually 30 minutes.
                </p>
              </div>
            </div>
            <div className="faq__item" data-faq-item>
              <button
                className="faq__trigger"
                data-faq-trigger
                aria-expanded="false"
                aria-controls="faq-panel-3"
              >
                <span>Do you accept private health insurance?</span>
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
              <div className="faq__panel" data-faq-panel id="faq-panel-3" hidden>
                <p className="faq__answer">
                  Yes. We welcome private health insurance patients and offer on-the-spot claiming
                  through HICAPS for all major health funds.
                </p>
              </div>
            </div>
            <div className="faq__item" data-faq-item>
              <button
                className="faq__trigger"
                data-faq-trigger
                aria-expanded="false"
                aria-controls="faq-panel-4"
              >
                <span>Can I claim through Medicare?</span>
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
              <div className="faq__panel" data-faq-panel id="faq-panel-4" hidden>
                <p className="faq__answer">
                  Yes. We accept Enhanced Primary Care (EPC) plans, also known as Chronic Disease
                  Management plans, which are referred by your GP. Please check with your GP about
                  eligibility.
                </p>
              </div>
            </div>
            <div className="faq__item" data-faq-item>
              <button
                className="faq__trigger"
                data-faq-trigger
                aria-expanded="false"
                aria-controls="faq-panel-5"
              >
                <span>Do you treat sports injuries?</span>
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
              <div className="faq__panel" data-faq-panel id="faq-panel-5" hidden>
                <p className="faq__answer">
                  Absolutely. Our team has extensive experience managing sports injuries across a
                  range of disciplines, including running, football, basketball, netball, golf,
                  and more.
                </p>
              </div>
            </div>
            <div className="faq__item" data-faq-item>
              <button
                className="faq__trigger"
                data-faq-trigger
                aria-expanded="false"
                aria-controls="faq-panel-6"
              >
                <span>What should I wear?</span>
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
              <div className="faq__panel" data-faq-panel id="faq-panel-6" hidden>
                <p className="faq__answer">
                  Wear comfortable, loose-fitting clothing. If you are coming for a lower limb
                  injury, shorts are ideal. For shoulder or upper back issues, a singlet or loose
                  top works well.
                </p>
              </div>
            </div>
            <div className="faq__item" data-faq-item>
              <button
                className="faq__trigger"
                data-faq-trigger
                aria-expanded="false"
                aria-controls="faq-panel-7"
              >
                <span>How do I book?</span>
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
              <div className="faq__panel" data-faq-panel id="faq-panel-7" hidden>
                <p className="faq__answer">
                  You can book online through our Nookal booking system, call us on (03) 5911 0201,
                  or email info@hillviewphysiogroup.com.au. We aim to get you in as soon as
                  possible.
                </p>
              </div>
            </div>
          </div>
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
              href="https://book.nookal.com/bookings/book/ACB0861D-c3df-0dEE-09FD-016FBbfcca9d/location"
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