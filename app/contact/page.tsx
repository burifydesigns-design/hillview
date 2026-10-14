const BOOKING_URL = process.env.NEXT_PUBLIC_NOOKAL_BOOKING_URL || "";

export const metadata = {
  title: "Contact Us | Hillview Physiotherapy Group",
  description: "Get in touch with Hillview Physiotherapy Group in Dromana. Call, email, or book online.",
  openGraph: {
    title: "Contact Us | Hillview Physiotherapy Group",
    description: "Get in touch with Hillview Physiotherapy Group in Dromana. Call, email, or book online.",
    url: "https://www.hillviewphysiogroup.com.au/contact",
    siteName: "Hillview Physiotherapy Group",
    locale: "en_AU",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero section">
        <div className="container">
          <p className="section-heading__subtitle">Get in touch</p>
          <h1 className="page-hero__title">Contact Us</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid--2">
            <div>
              <div className="card" style={{ padding: "2rem" }}>
                <h2
                  className="card__title"
                  style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1.5rem", color: "var(--color-foreground)" }}
                >
                  Clinic Information
                </h2>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    fontSize: "0.9375rem",
                    color: "var(--color-neutral)",
                    lineHeight: "1.7",
                  }}
                >
                  <div>
                    <p style={{ fontWeight: 600, color: "var(--color-foreground)", marginBottom: "0.25rem" }}>
                      Address
                    </p>
                    <p>236 Boundary Road, Dromana VIC 3936</p>
                    <a
                      href="https://www.google.com/maps/dir//236+Boundary+Rd,+Dromana+VIC+3936/@-38.3439009,144.8976479,12z/data=!4m9!4m8!1m0!1m5!1m1!1s0x6ad5c5ebd16a2439:0x8e97042eb32d68a4!2m2!1d144.9800489!2d-38.3439297!3e0?entry=ttu&g_ep=EgoyMDY1MTAyOS4yIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "var(--color-accent)" }}
                    >
                      Get directions
                    </a>
                  </div>
                  <div>
                    <p style={{ fontWeight: 600, color: "var(--color-foreground)", marginBottom: "0.25rem" }}>
                      Phone
                    </p>
                    <a href="tel:0359110201" style={{ color: "var(--color-accent)" }}>
                      (03) 5911 0201
                    </a>
                  </div>
                  <div>
                    <p style={{ fontWeight: 600, color: "var(--color-foreground)", marginBottom: "0.25rem" }}>
                      Fax
                    </p>
                    <p>(03) 5911 0203</p>
                  </div>
                  <div>
                    <p style={{ fontWeight: 600, color: "var(--color-foreground)", marginBottom: "0.25rem" }}>
                      Email
                    </p>
                    <a href="mailto:info@hillviewphysiogroup.com.au" style={{ color: "var(--color-accent)" }}>
                      info@hillviewphysiogroup.com.au
                    </a>
                  </div>
                  <div>
                    <p style={{ fontWeight: 600, color: "var(--color-foreground)", marginBottom: "0.5rem" }}>
                      Opening Hours
                    </p>
                    <p>Mon – Fri 8 am – 7 pm</p>
                    <p>Saturday 8 am – 12 pm</p>
                    <p>Sunday Closed</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card" style={{ padding: "2rem" }}>
                <h2
                  className="card__title"
                  style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1.5rem", color: "var(--color-foreground)" }}
                >
                  Send us a Message
                </h2>
                <form className="form" action="#" method="post">
                  <div className="form__group">
                    <label htmlFor="name" className="form__label form__label--required">
                      Name
                    </label>
                    <input type="text" id="name" name="name" required className="form__input" />
                  </div>
                  <div className="form__group">
                    <label htmlFor="email" className="form__label form__label--required">
                      Email
                    </label>
                    <input type="email" id="email" name="email" required className="form__input" />
                  </div>
                  <div className="form__group">
                    <label htmlFor="phone" className="form__label">
                      Phone
                    </label>
                    <input type="tel" id="phone" name="phone" className="form__input" />
                  </div>
                  <div className="form__group">
                    <label htmlFor="reason" className="form__label">
                      Reason for enquiry
                    </label>
                    <select id="reason" name="reason" className="form__select">
                      <option value="">Select an option</option>
                      <option value="booking">Booking an appointment</option>
                      <option value="general">General enquiry</option>
                      <option value="funding">Funding / payment question</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form__group">
                    <label htmlFor="message" className="form__label form__label--required">
                      Message
                    </label>
                    <textarea id="message" name="message" required className="form__textarea"></textarea>
                  </div>
                  <a
                    href={BOOKING_URL}
                    className="btn btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book an Appointment
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--white section--border">
        <div className="container">
          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.6!2d144.98!3d-38.34!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzguMzQzOTI5!5e0!3m2!1sen!2sau!4v1700000000000"
              loading="lazy"
              title="Hillview Physiotherapy Group location map"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
