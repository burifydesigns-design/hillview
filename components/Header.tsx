"use client";

export default function Header() {
  return (
    <header className="site-header" id="site-header" role="banner">
      <div className="site-header__inner container">
        <a href="/" className="site-logo" aria-label="Hillview Physiotherapy Group home">
          Hillview<span className="site-logo__accent">Physiotherapy</span>
        </a>

        <nav className="site-nav" aria-label="Main navigation">
          <ul className="site-nav__list">
            <li>
              <a href="/services/physiotherapy" className="site-nav__link">
                Physiotherapy
              </a>
            </li>
            <li>
              <a href="/services" className="site-nav__link">
                Services
              </a>
            </li>
            <li>
              <a href="/about" className="site-nav__link">
                About
              </a>
            </li>
            <li>
              <a href="/team" className="site-nav__link">
                Our Team
              </a>
            </li>
            <li>
              <a href="/clinic" className="site-nav__link">
                The Clinic
              </a>
            </li>
            <li>
              <a href="/contact" className="site-nav__link">
                Contact
              </a>
            </li>
          </ul>
          <a
            href="https://book.nookal.com/bookings/book/ACB0861D-c3df-0dEE-09FD-016FBbfcca9d/location"
            className="site-nav__cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book an Appointment
          </a>
        </nav>

        <div className="site-header__mobile-actions">
          <a
            href="https://book.nookal.com/bookings/book/ACB0861D-c3df-0dEE-09FD-016FBbfcca9d/location"
            className="site-header__mobile-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book
          </a>
          <button
            className="menu-toggle"
            data-menu-toggle
            aria-label="Open navigation menu"
            aria-expanded="false"
            aria-controls="mobile-menu"
          >
            <svg
              className="menu-toggle__icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className="mobile-menu"
        data-mobile-menu
        id="mobile-menu"
        role="region"
        aria-label="Mobile navigation"
      >
        <nav aria-label="Mobile navigation">
          <ul className="mobile-menu__list">
            <li className="mobile-menu__item">
              <a href="/services/physiotherapy" className="mobile-menu__link">
                Physiotherapy
              </a>
            </li>
            <li className="mobile-menu__item">
              <a href="/services" className="mobile-menu__link">
                Services
              </a>
            </li>
            <li className="mobile-menu__item">
              <a href="/about" className="mobile-menu__link">
                About
              </a>
            </li>
            <li className="mobile-menu__item">
              <a href="/team" className="mobile-menu__link">
                Our Team
              </a>
            </li>
            <li className="mobile-menu__item">
              <a href="/clinic" className="mobile-menu__link">
                The Clinic
              </a>
            </li>
            <li className="mobile-menu__item">
              <a href="/contact" className="mobile-menu__link">
                Contact
              </a>
            </li>
            <li className="mobile-menu__item">
              <a
                href="https://book.nookal.com/bookings/book/ACB0861D-c3df-0dEE-09FD-016FBbfcca9d/location"
                className="mobile-menu__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book an Appointment
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}