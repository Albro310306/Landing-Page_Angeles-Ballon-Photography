import React, { useEffect, useId, useRef, useState } from "react";
import "./Portfolio.css";
import PortfolioCard from "./PortfolioCard.jsx";
import newbornPhoto from "../assets/portfolio-newborn.png";
import maternityPhoto from "../assets/portfolio-motherhood.png";
import familyPhoto from "../assets/portfolio-family.png";
import pregnancyPhoto from "../assets/portfolio-pregnancy.png";
import sitterPhoto from "../assets/portfolio-sitter.png";

const filters = [
  { label: "All stories", value: "all" },
  { label: "Newborn", value: "newborn" },
  { label: "Motherhood", value: "maternity" },
  { label: "Families", value: "family" },
  { label: "Pregnancy", value: "pregnancy" },
  { label: "Sitter", value: "sitter" },
];

export const stories = [
  {
    category: "newborn",
    categoryLabel: "Newborn",
    title: "The sweetest beginning",
    description: "Slow, cozy sessions celebrating all the tiny details of your baby's first days.",
    image: newbornPhoto,
    imageAlt: "A sleeping newborn wearing a soft knit hat and round glasses",
    imagePosition: "center 50%",
  },
  {
    category: "maternity",
    categoryLabel: "Motherhood",
    title: "A season of becoming",
    description: "A gentle pause to honor your growing family and this beautiful season of becoming.",
    image: maternityPhoto,
    imageAlt: "A mother and daughter sitting together for a portrait",
    imagePosition: "center 50%",
  },
  {
    category: "family",
    categoryLabel: "Families",
    title: "Together, just as you are",
    description: "Easygoing portraits that hold on to your family's connection, just as it is today.",
    image: familyPhoto,
    imageAlt: "A family of four smiling together in a studio portrait",
    imagePosition: "center 50%",
  },
  {
    category: "pregnancy",
    categoryLabel: "Pregnancy",
    title: "A new little wonder",
    description: "An intimate portrait celebrating the beauty and anticipation of pregnancy.",
    image: pregnancyPhoto,
    imageAlt: "An expectant mother in a flowing blue gown, gently holding her belly",
    imagePosition: "center 50%",
  },
  {
    category: "sitter",
    categoryLabel: "Sitter",
    title: "A little personality",
    description: "Joyful milestone portraits capturing your baby's growing curiosity and character.",
    image: sitterPhoto,
    imageAlt: "A baby sitting on a soft blanket against a warm wooden backdrop",
    imagePosition: "center 50%",
  },
];

export default function Portfolio() {
  const headingId = useId();
  const carouselRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const activeStory = stories.find((story) => story.category === activeFilter) ?? stories[0];
  const visibleStories =
    activeFilter === "all"
      ? stories
      : stories.filter((story) => story.category === activeFilter);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return undefined;

    carousel.scrollLeft = 0;
  }, [activeFilter]);

  const scrollCarousel = (direction) => {
    const carousel = carouselRef.current;
    const firstCard = carousel?.firstElementChild;
    if (!carousel || !firstCard) return;

    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    const isAtStart = carousel.scrollLeft <= 1;
    const isAtEnd = carousel.scrollLeft >= maxScroll - 1;

    if ((direction < 0 && isAtStart) || (direction > 0 && isAtEnd)) {
      carousel.scrollTo({
        left: direction < 0 ? maxScroll : 0,
        behavior: "smooth",
      });
      return;
    }

    const gap = Number.parseFloat(window.getComputedStyle(carousel).columnGap) || 0;
    carousel.scrollBy({
      left: direction * (firstCard.getBoundingClientRect().width + gap),
      behavior: "smooth",
    });
  };

  return (
    <section
      className="photography-portfolio photography-portfolio--dynamic"
      id="portfolio"
      aria-labelledby={headingId}
      data-category={activeStory.category}
      style={{ "--portfolio-scene-image": `url("${activeStory.image}")` }}
    >
      <div className="photography-portfolio__inner">
        <header className="photography-portfolio__intro">
          <p className="photography-portfolio__eyebrow">
            <span aria-hidden="true" />
            A few moments in time
            <span aria-hidden="true" />
          </p>
          <h2 id={headingId}>
            Little stories,
            <br />
            <em>held close.</em>
          </h2>
          <p className="photography-portfolio__description">
            A glimpse into the tender beginnings, growing families, and
            meaningful moments we can remember together.
          </p>
        </header>

        <div className="photography-portfolio__filters" role="group" aria-label="Filter portfolio stories">
          {filters.map((filter) => (
            <button
              key={filter.value}
              className={`photography-portfolio__filter${activeFilter === filter.value ? " is-active" : ""}`}
              type="button"
              aria-pressed={activeFilter === filter.value}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="photography-portfolio__carousel" role="group" aria-label="Browse portfolio stories">
          <button
            className="photography-portfolio__carousel-button"
            type="button"
            aria-label="Previous stories"
            disabled={visibleStories.length < 2}
            onClick={() => scrollCarousel(-1)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <div
            className="photography-portfolio__grid"
            data-count={visibleStories.length}
            role="region"
            aria-label="Photography portfolio stories"
            ref={carouselRef}
            tabIndex={0}
          >
            {visibleStories.map((story) => (
              <PortfolioCard
                key={`${activeFilter}-${story.category}`}
                story={story}
                activeFilter={activeFilter}
                onSelect={setActiveFilter}
              />
            ))}
          </div>
          <button
            className="photography-portfolio__carousel-button"
            type="button"
            aria-label="Next stories"
            disabled={visibleStories.length < 2}
            onClick={() => scrollCarousel(1)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>

        <a className="photography-portfolio__cta" href="#contact">
          Your story could be next
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
