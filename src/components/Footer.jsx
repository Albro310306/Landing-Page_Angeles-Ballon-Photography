import React from "react";
import "./Footer.css";
import logo from "../assets/angeles-ballon-logo.png";
import whatsappIcon from "../assets/whatsapp-icon.png";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="photography-footer" role="contentinfo">
      <div className="photography-footer__inner">
        {/* Main 4-column grid */}
        <div className="photography-footer__grid">
          {/* Column 1: Brand & Mission */}
          <div className="photography-footer__col photography-footer__col--brand">
            <a href="#home" className="photography-footer__brand-link" aria-label="Angeles Ballon Photography - Home">
              <div className="photography-footer__logo-card">
                <img src={logo} alt="Angeles Ballon Photography" />
              </div>
            </a>
            <p className="photography-footer__bio">
              Gentle, timeless newborn, motherhood &amp; family photography celebrating life’s purest beginnings into lasting heirlooms.
            </p>
            <div className="photography-footer__location-pill">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Gainesville &amp; Northern Virginia</span>
            </div>

            {/* Social links */}
            <div className="photography-footer__socials">
              <a
                href="https://www.instagram.com/angelesballon.photography/"
                target="_blank"
                rel="noopener noreferrer"
                className="photography-footer__social-btn"
                aria-label="Instagram @angelesballon.photography"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <span>Instagram</span>
              </a>

              <a
                href="https://wa.me/17039800823"
                target="_blank"
                rel="noopener noreferrer"
                className="photography-footer__social-btn photography-footer__social-btn--wa"
                aria-label="WhatsApp (+1 703 980-0823)"
              >
                <img src={whatsappIcon} alt="" aria-hidden="true" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="photography-footer__col">
            <h3 className="photography-footer__heading">Navigation</h3>
            <nav className="photography-footer__links" aria-label="Footer quick navigation">
              <a href="#home">Home</a>
              <a href="#about">About Angeles</a>
              <a href="#portfolio">Portfolio Gallery</a>
              <a href="#reviews">Kind Words &amp; Reviews</a>
              <a href="#faq">Client FAQ</a>
              <a href="#contact">Contact &amp; Booking</a>
            </nav>
          </div>

          {/* Column 3: Specialties */}
          <div className="photography-footer__col">
            <h3 className="photography-footer__heading">Sessions</h3>
            <nav className="photography-footer__links" aria-label="Footer session categories">
              <a href="#portfolio">Newborn Sessions</a>
              <a href="#portfolio">Maternity &amp; Pregnancy</a>
              <a href="#portfolio">First Birthday</a>
              <a href="#portfolio">Family &amp; Sitter Portraits</a>
              <span className="photography-footer__availability-tag">
                <span className="photography-footer__availability-dot" />
                Reserving 2026 Sessions
              </span>
            </nav>
          </div>

          {/* Column 4: Contact & Studio */}
          <div className="photography-footer__col photography-footer__col--contact">
            <h3 className="photography-footer__heading">Get in Touch</h3>
            <ul className="photography-footer__contact-list">
              <li>
                <span className="photography-footer__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                <a href="mailto:angelesballonphotography@hotmail.com">
                  angelesballonphotography@hotmail.com
                </a>
              </li>
              <li>
                <span className="photography-footer__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <a href="tel:+17039800823">+1 (703) 980-0823</a>
              </li>
              <li>
                <span className="photography-footer__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <a
                  href="https://maps.google.com/?q=14332+Fallsmere+Cir,+Gainesville,+VA+20155"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="photography-footer__address"
                >
                  14332 Fallsmere Cir<br />Gainesville, VA 20155, USA
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom meta bar */}
        <div className="photography-footer__meta">
          <p className="photography-footer__copyright">
            © {new Date().getFullYear()} Angeles Ballon Photography. All rights reserved.
          </p>
          <p className="photography-footer__credit">
            Gentle portraits for newborn, maternity &amp; family.
          </p>
          <button
            type="button"
            className="photography-footer__back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <span aria-hidden="true">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
