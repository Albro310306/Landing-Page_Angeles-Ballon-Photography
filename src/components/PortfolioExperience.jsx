import React, { useId, useRef, useState } from "react";
import { stories } from "./Portfolio.jsx";
import PortfolioCard from "./PortfolioCard.jsx";
import "./PortfolioExperience.css";

export default function PortfolioExperience() {
  const headingId = useId();
  const carouselRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState(stories[0].category);
  const activeStory = stories.find((story) => story.category === activeCategory) ?? stories[0];

  const scrollCarousel = (direction) => {
    const carousel = carouselRef.current;
    const firstCard = carousel?.firstElementChild;
    if (!carousel || !firstCard) return;

    const gap = Number.parseFloat(window.getComputedStyle(carousel).columnGap) || 0;
    carousel.scrollBy({
      left: direction * (firstCard.getBoundingClientRect().width + gap),
      behavior: "smooth",
    });
  };

  return (
    <section
      className="photography-portfolio portfolio-experience"
      aria-labelledby={headingId}
      data-category={activeStory.category}
      style={{ "--portfolio-scene-image": `url("${activeStory.image}")` }}
    >
      <div className="photography-portfolio__inner portfolio-experience__inner">
        <header className="photography-portfolio__intro portfolio-experience__intro">
          <p className="photography-portfolio__eyebrow portfolio-experience__eyebrow">
            <span aria-hidden="true" />
            The story library
            <span aria-hidden="true" />
          </p>
          <h2 id={headingId}>
            Choose a story,
            <br />
            <em>keep it close.</em>
          </h2>
          <p className="photography-portfolio__description portfolio-experience__description">
            Select a category to explore the collection. The atmosphere shifts with every story.
          </p>
        </header>

        <div className="portfolio-experience__console">
          <div className="portfolio-experience__console-top">
            <span className="portfolio-experience__brand">
              <span aria-hidden="true">✳</span> ANGELES BALLON
            </span>
            <span className="portfolio-experience__collection">
              STORY LIBRARY <span aria-hidden="true">/</span> 0{stories.length}
            </span>
          </div>

          <div className="portfolio-experience__selection">
            <div className="portfolio-experience__selection-copy" aria-live="polite">
              <span>NOW SELECTED</span>
              <strong>{activeStory.categoryLabel}</strong>
            </div>
            <div className="portfolio-experience__filters" role="group" aria-label="Select a portfolio category">
              {stories.map((story) => (
                <button
                  className={`portfolio-experience__filter${story.category === activeCategory ? " is-active" : ""}`}
                  key={story.category}
                  type="button"
                  aria-pressed={story.category === activeCategory}
                  onClick={() => setActiveCategory(story.category)}
                >
                  {story.categoryLabel}
                </button>
              ))}
            </div>
          </div>

          <div className="photography-portfolio__carousel portfolio-experience__carousel" role="group" aria-label="Browse story cards">
            <button
              className="photography-portfolio__carousel-button"
              type="button"
              aria-label="Previous stories"
              onClick={() => scrollCarousel(-1)}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <div
              className="photography-portfolio__grid"
              role="region"
              aria-label="Portfolio category cards"
              ref={carouselRef}
              tabIndex={0}
            >
              {stories.map((story) => (
                <div
                  className={`portfolio-experience__card${story.category === activeCategory ? " is-selected" : ""}`}
                  key={story.category}
                >
                  <PortfolioCard
                    story={story}
                    activeFilter="all"
                    onSelect={setActiveCategory}
                    isSelected={story.category === activeCategory}
                  />
                </div>
              ))}
            </div>
            <button
              className="photography-portfolio__carousel-button"
              type="button"
              aria-label="Next stories"
              onClick={() => scrollCarousel(1)}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>

          <div className="portfolio-experience__console-bottom">
            <span>CHOOSE A CARD TO CHANGE THE SCENE</span>
            <span><i aria-hidden="true" /> {activeStory.title}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
