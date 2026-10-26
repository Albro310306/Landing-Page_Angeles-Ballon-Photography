import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Header from "./components/Header.jsx";
import Portfolio from "./components/Portfolio.jsx";
import PortfolioExperience from "./components/PortfolioExperience.jsx";
import Reviews from "./components/Reviews.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <main className="photography-site">
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <PortfolioExperience />
      <Reviews />
    </main>
  </StrictMode>,
);