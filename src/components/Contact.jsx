import React, { useId } from "react";
import "./Contact.css";
import whatsappIcon from "../assets/whatsapp-icon.png";

export default function Contact() {
  const headingId = useId();

  return (
    <section className="photography-contact" id="contact" aria-labelledby={headingId}>
      <div className="photography-contact__inner">
        {/* Header */}
        <header className="photography-contact__intro reveal-on-scroll">
          <p className="photography-contact__eyebrow">
            <span aria-hidden="true">✦</span>
            Let's Connect
            <span aria-hidden="true">✦</span>
          </p>
          <h2 id={headingId}>
            Let's preserve these days,
            <br />
            <em>before they slip by.</em>
          </h2>
          <p className="photography-contact__subtitle">
            Currently reserving newborn, motherhood, and family portrait sessions
            for Gainesville and Northern Virginia.
          </p>
        </header>

        {/* Two-column layout: Info + Map */}
        <div className="photography-contact__body">
          {/* Left column: contact details + WhatsApp & Instagram Social Card */}
          <div className="photography-contact__details reveal-on-scroll reveal-delay-1">
            {/* Email card */}
            <div className="photography-contact__detail-card">
              <span className="photography-contact__detail-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </span>
              <div>
                <h3>Email Inquiry</h3>
                <a href="mailto:angelesballonphotography@hotmail.com">
                  angelesballonphotography@hotmail.com
                </a>
              </div>
            </div>

            {/* Phone / WhatsApp card */}
            <div className="photography-contact__detail-card">
              <span className="photography-contact__detail-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <div>
                <h3>Phone &amp; WhatsApp</h3>
                <a href="tel:+17039800823">
                  +1 (703) 980-0823
                </a>
              </div>
            </div>

            {/* Address card */}
            <div className="photography-contact__detail-card">
              <span className="photography-contact__detail-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <div>
                <h3>Studio Address</h3>
                <p>14332 Fallsmere Cir<br />Gainesville, VA 20155-4411, United States</p>
              </div>
            </div>

            {/* Social Card adapted for WhatsApp and Instagram */}
            <div className="photography-contact__social-wrap">
              <p className="photography-contact__social-label">Follow &amp; Message Us</p>
              <div className="card">
                <span>Social</span>
                {/* WhatsApp link */}
                <a
                  className="social-link social-link--whatsapp"
                  href="https://wa.me/17039800823"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp (+1 703 980-0823)"
                >
                  <img src={whatsappIcon} alt="WhatsApp" />
                </a>
                {/* Instagram link */}
                <a
                  className="social-link social-link--instagram"
                  href="https://www.instagram.com/angelesballon.photography/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram (@angelesballon.photography)"
                >
                  <svg viewBox="0 0 24 24">
                    <radialGradient id="ig-gradient-contact" r="150%" cx="30%" cy="107%">
                      <stop offset="0%" stopColor="#fdf497" />
                      <stop offset="5%" stopColor="#fdf497" />
                      <stop offset="45%" stopColor="#fd5949" />
                      <stop offset="60%" stopColor="#d6249f" />
                      <stop offset="90%" stopColor="#285AEB" />
                    </radialGradient>
                    <path
                      fill="url(#ig-gradient-contact)"
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right column: Google Maps Embed */}
          <div className="photography-contact__map-wrap reveal-on-scroll reveal-delay-2">
            <div className="photography-contact__map-frame">
              <iframe
                title="Angeles Ballon Photography studio location"
                src="https://maps.google.com/maps?q=14332+Fallsmere+Cir,+Gainesville,+VA+20155-4411,+United+States&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="photography-contact__map-bar">
              <a
                className="photography-contact__map-directions"
                href="https://maps.google.com/?q=14332+Fallsmere+Cir,+Gainesville,+VA+20155-4411"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Maps <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
