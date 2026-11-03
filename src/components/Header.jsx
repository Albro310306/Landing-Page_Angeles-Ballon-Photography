import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "../assets/angeles-ballon-logo.png";

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

  // Track active section on scroll
  useEffect(() => {
    const sectionIds = navigationLinks.map((link) => link.id);
    let isTicking = false;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const header = document.querySelector(".photography-header");
      const headerHeight = header ? header.offsetHeight : 96;

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

  // Smooth scroll handler with fine-tuned offsets for optimal framing
  const handleNavClick = (e, href, id) => {
    e.preventDefault();

    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("home");
      window.history.pushState(null, "", "#home");
      return;
    }

    const targetElement = document.getElementById(id);
    if (targetElement) {
      const header = document.querySelector(".photography-header");
      const headerHeight = header ? header.getBoundingClientRect().height : 96;
      const elementTop = targetElement.getBoundingClientRect().top + window.scrollY;
      
      // Position portfolio further down so the cards and stories are comfortably framed in the viewport (matching the height of the cards)
      const offsetAdjustment = id === "portfolio" ? 0 : 0;
      const targetOffset = elementTop - headerHeight + offsetAdjustment;

      window.scrollTo({
        top: Math.max(0, targetOffset),
        behavior: "smooth",
      });

      setActiveSection(id);
      window.history.pushState(null, "", href);
    }
  };

  return (
    <header className="photography-header">
      <a
        className="photography-header__brand"
        href="#home"
        onClick={(e) => handleNavClick(e, "#home", "home")}
        aria-label="Angeles Ballon Photography home"
      >
        <img src={logo} alt="Angeles Ballon Photography" />
      </a>

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
    </header>
  );
}
