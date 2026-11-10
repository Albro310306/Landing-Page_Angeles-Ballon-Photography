import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "../assets/angeles-ballon-logo.png";
import whatsappIcon from "../assets/whatsapp-icon.png";

const navigationLinks = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "portfolio", label: "Portfolio", href: "#portfolio" },
  { id: "reviews", label: "Reviews", href: "#reviews" },
  { id: "faq", label: "FAQ", href: "#faq" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll and handle Escape key when mobile menu is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  // Track active section on scroll
  useEffect(() => {
    const sectionIds = navigationLinks.map((link) => link.id);
    let isTicking = false;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const header = document.querySelector(".photography-header");
      const headerHeight = header ? header.offsetHeight : 68;

      // If scrolled to bottom of the page, activate Contact
      if (scrollY + windowHeight >= documentHeight - 60) {
        setActiveSection("contact");
        return;
      }

      // If at the very top of the page, activate Home
      if (scrollY < 80) {
        setActiveSection("home");
        return;
      }

      // Check which section is currently active
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const elementTop = element.offsetTop - headerHeight - 40;
          if (scrollY >= elementTop) {
            setActiveSection(id);
            return;
          }
        }
      }
    };

    const onScroll = () => {
      if (!isTicking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          isTicking = false;
        });
        isTicking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Smooth scroll handler
  const handleNavClick = (e, href, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("home");
      window.history.pushState(null, "", "#home");
      return;
    }

    const targetElement = document.getElementById(id);
    if (targetElement) {
      const header = document.querySelector(".photography-header");
      const headerHeight = header ? header.getBoundingClientRect().height : 68;
      const elementTop = targetElement.getBoundingClientRect().top + window.scrollY;
      const targetOffset = elementTop - headerHeight;

      window.scrollTo({
        top: Math.max(0, targetOffset),
        behavior: "smooth",
      });

      setActiveSection(id);
      window.history.pushState(null, "", href);
    }
  };

  return (
    <header className={`photography-header${mobileMenuOpen ? " is-menu-open" : ""}`}>
      <div className="photography-header__inner">
        <a
          className="photography-header__brand"
          href="#home"
          onClick={(e) => handleNavClick(e, "#home", "home")}
          aria-label="Angeles Ballon Photography home"
        >
          <img src={logo} alt="Angeles Ballon Photography" />
        </a>

        {/* Desktop Navigation */}
        <nav className="photography-header__navigation" aria-label="Main navigation">
          {navigationLinks.map((link) => {
            const isCurrent = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={isCurrent ? "is-current" : undefined}
                aria-current={isCurrent ? "page" : undefined}
                onClick={(e) => handleNavClick(e, link.href, link.id)}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className={`photography-header__hamburger${mobileMenuOpen ? " is-active" : ""}`}
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="photography-mobile-nav"
        >
          <span className="photography-header__hamburger-line" />
          <span className="photography-header__hamburger-line" />
          <span className="photography-header__hamburger-line" />
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        id="photography-mobile-nav"
        className={`photography-header__mobile-drawer${mobileMenuOpen ? " is-open" : ""}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="photography-header__mobile-content">
          <nav className="photography-header__mobile-links" aria-label="Mobile navigation links">
            {navigationLinks.map((link) => {
              const isCurrent = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`photography-header__mobile-link${isCurrent ? " is-current" : ""}`}
                  aria-current={isCurrent ? "page" : undefined}
                  onClick={(e) => handleNavClick(e, link.href, link.id)}
                >
                  <span className="photography-header__mobile-link-text">{link.label}</span>
                  {isCurrent && <span className="photography-header__mobile-link-badge" aria-hidden="true">✦</span>}
                </a>
              );
            })}
          </nav>

          <div className="photography-header__mobile-actions">
            <a
              href="#contact"
              className="photography-header__mobile-cta"
              onClick={(e) => handleNavClick(e, "#contact", "contact")}
            >
              Book a Session
            </a>

            <div className="photography-header__mobile-social-bar">
              <a
                href="tel:+17039800823"
                className="photography-header__mobile-social-item"
                aria-label="Call +1 703 980-0823"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>Call</span>
              </a>

              <a
                href="https://wa.me/17039800823"
                target="_blank"
                rel="noopener noreferrer"
                className="photography-header__mobile-social-item"
                aria-label="Message on WhatsApp"
              >
                <img src={whatsappIcon} alt="" aria-hidden="true" />
                <span>WhatsApp</span>
              </a>

              <a
                href="https://www.instagram.com/angelesballon.photography/"
                target="_blank"
                rel="noopener noreferrer"
                className="photography-header__mobile-social-item"
                aria-label="Follow on Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
