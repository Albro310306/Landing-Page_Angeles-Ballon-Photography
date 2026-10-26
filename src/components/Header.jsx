import React from "react";
import "./Header.css";
import logo from "../assets/angeles-ballon-logo.png";

const navigationLinks = [
  { label: "Home", href: "#home", current: true },
  { label: "About", href: "#about" },
  { label: "Photoshoot Guide", href: "#photoshoot-guide" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Reviews", href: "#reviews" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="photography-header">
      <a
        className="photography-header__brand"
        href="#home"
        aria-label="Angeles Ballon Photography home"
      >
        <img src={logo} alt="Angeles Ballon Photography" />
      </a>

      <nav className="photography-header__navigation" aria-label="Main navigation">
        {navigationLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={link.current ? "is-current" : undefined}
            aria-current={link.current ? "page" : undefined}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
