import React from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Reviews from "./components/Reviews.jsx";
import Faq from "./components/Faq.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { useScrollReveal } from "./hooks/useScrollReveal.js";

export default function App() {
  // Activate scroll-reveal animations across all sections
  useScrollReveal();

  return (
    <main className="photography-site">
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Reviews />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
