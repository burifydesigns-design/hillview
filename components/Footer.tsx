export default function Footer() {
  return (
    <footer className="site-footer" id="site-footer" role="contentinfo">
      <div className="site-footer__inner container">
        <div className="site-footer__grid">
          <div>
            <h3 className="site-footer__title">Hillview Physiotherapy Group</h3>
            <address className="site-footer__address">
              236 Boundary Road<br />
              Dromana VIC 3936
            </address>
            <p className="mt-1">
              <a href="tel:0359110201" className="site-footer__link">
                (03) 5911 0201
              </a>
            </p>
            <p>
              <a href="mailto:info@hillviewphysiogroup.com.au" className="site-footer__link">
                info@hillviewphysiogroup.com.au
              </a>
            </p>
          </div>

          <div>
            <h3 className="site-footer__title">Services</h3>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <li>
                <a href="/services/physiotherapy" className="site-footer__link">
                  Physiotherapy
                </a>
              </li>
              <li>
                <a href="/services/running-assessments" className="site-footer__link">
                  Running Assessments
                </a>
              </li>
              <li>
                <a href="/services/strength-rehabilitation" className="site-footer__link">
                  Strength & Rehabilitation
                </a>
              </li>
              <li>
                <a href="/services/post-surgical-rehabilitation" className="site-footer__link">
                  Post-Surgical Rehabilitation
                </a>
              </li>
              <li>
                <a href="/services/dry-needling" className="site-footer__link">
                  Dry Needling
                </a>
              </li>
              <li>
                <a href="/services/golf-tpi" className="site-footer__link">
                  TPI Golf Assessment
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="site-footer__title">Our Team</h3>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <li>
                <a href="/team/brayden-page" className="site-footer__link">
                  Brayden Page
                </a>
              </li>
              <li>
                <a href="/team/cam-davis" className="site-footer__link">
                  Cam Davis
                </a>
              </li>
              <li>
                <a href="/team/clinton-watson" className="site-footer__link">
                  Clinton Watson
                </a>
              </li>
              <li>
                <a href="/team/ros-zeuschner" className="site-footer__link">
                  Ros Zeuschner
                </a>
              </li>
            </ul>
            <h3 className="site-footer__title mt-1">Navigate</h3>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <li>
                <a href="/contact" className="site-footer__link">
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="https://book.nookal.com/bookings/book/ACB0861D-c3df-0dEE-09FD-016FBbfcca9d/location"
                  className="site-footer__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book an Appointment
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="site-footer__title">Opening Hours</h3>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                fontSize: "0.875rem",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              <li style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Mon – Fri</span>
                <span>8 am – 7 pm</span>
              </li>
              <li style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Saturday</span>
                <span>8 am – 12 pm</span>
              </li>
              <li style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p className="site-footer__copyright">
            &copy; 2025 Hillview Physiotherapy Group. All rights reserved.
          </p>
          <div className="site-footer__legal">
            <a href="/privacy-policy" className="site-footer__legal-link">
              Privacy Policy
            </a>
            <a href="/terms" className="site-footer__legal-link">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}