import React, { useEffect, useId, useRef, useState } from "react";
import "./Portfolio.css";
import PortfolioCard from "./PortfolioCard.jsx";
import newbornPhoto1 from "../assets/portfolio-newborn-1.jpg";
import newbornPhoto2 from "../assets/portfolio-newborn-2.jpg";
import newbornPhoto3 from "../assets/portfolio-newborn-3.jpg";
import newbornPhoto4 from "../assets/portfolio-newborn-4.jpg";
import newbornPhoto5 from "../assets/portfolio-newborn-5.jpg";
import maternityPhoto from "../assets/portfolio-motherhood.png";
import familyPhoto from "../assets/portfolio-family-new.jpg";
import familyPhoto2 from "../assets/portfolio-family-2.jpg";
import familyPhoto3 from "../assets/portfolio-family-3.jpg";
import familyPhoto4 from "../assets/portfolio-family-4.jpg";
import pregnancyPhoto1 from "../assets/portfolio-pregnancy-1.jpg";
import pregnancyPhoto2 from "../assets/portfolio-pregnancy-2.jpg";
import pregnancyPhoto3 from "../assets/portfolio-pregnancy-3.jpg";
import pregnancyPhoto4 from "../assets/portfolio-pregnancy-4.jpg";
import pregnancyPhoto5 from "../assets/portfolio-pregnancy-5.jpg";
import smashCakePhoto from "../assets/portfolio-smashcake.jpg";
import sitterPhoto from "../assets/portfolio-sitter.png";

const filters = [
  { label: "All stories", value: "all" },
  { label: "Pregnancy", value: "pregnancy" },
  { label: "Newborn", value: "newborn" },
  { label: "Smash Cake", value: "smashcake" },
  { label: "Family", value: "family" },
];

export const stories = [
  {
    id: "pregnancy-1",
    category: "pregnancy",
    categoryLabel: "Pregnancy",
    title: "Golden Grace",
    description: "An ethereal and radiant portrait celebrating the divine anticipation of motherhood.",
    image: pregnancyPhoto1,
    imageAlt: "Expectant mother in flowing white gown against an ethereal golden smoke backdrop",
    imagePosition: "center 40%",
  },
  {
    id: "pregnancy-2",
    category: "pregnancy",
    categoryLabel: "Pregnancy",
    title: "Together in Love",
    description: "Sleek and modern studio portrait honoring the loving bond between parents awaiting their baby.",
    image: pregnancyPhoto2,
    imageAlt: "Couple in matching elegant black attire posing lovingly for pregnancy portrait",
    imagePosition: "center 30%",
  },
  {
    id: "pregnancy-3",
    category: "pregnancy",
    categoryLabel: "Pregnancy",
    title: "Tender Devotion",
    description: "An intimate and heartfelt moment celebrating new life and enduring partnership.",
    image: pregnancyPhoto3,
    imageAlt: "Husband kneeling gently holding expectant mother belly in baby blue gown",
    imagePosition: "center 35%",
  },
  {
    id: "pregnancy-4",
    category: "pregnancy",
    categoryLabel: "Pregnancy",
    title: "Luminous Joy",
    description: "A bright, joyful studio portrait capturing the pure radiance of pregnancy.",
    image: pregnancyPhoto4,
    imageAlt: "Radiant smiling mother in sleek white gown posing for maternity portrait",
    imagePosition: "center 30%",
  },
  {
    id: "pregnancy-5",
    category: "pregnancy",
    categoryLabel: "Pregnancy",
    title: "Timeless Elegance",
    description: "Dreamy fine-art portrait in a cascading rose gown honoring this fleeting, magical season.",
    image: pregnancyPhoto5,
    imageAlt: "Expectant mother in elegant tiered rose tulle dress against textured backdrop",
    imagePosition: "center 35%",
  },
  {
    id: "newborn-1",
    category: "newborn",
    categoryLabel: "Newborn",
    title: "Purest Love",
    description: "Nestled in a carved heart with soft blue roses, celebrating your little one's sweetest beginnings.",
    image: newbornPhoto1,
    imageAlt: "Sleeping newborn swaddled in soft blue resting in a white heart-shaped bowl with blue roses",
    imagePosition: "center 45%",
  },
  {
    id: "newborn-2",
    category: "newborn",
    categoryLabel: "Newborn",
    title: "Dreamy Slumber",
    description: "A delicate floral haven featuring a vintage white crib draped in lace and blooming wisteria.",
    image: newbornPhoto2,
    imageAlt: "Peaceful newborn sleeping in an ornate vintage white crib surrounded by cascading white flowers and greenery",
    imagePosition: "center 40%",
  },
  {
    id: "newborn-3",
    category: "newborn",
    categoryLabel: "Newborn",
    title: "Curious Wonder",
    description: "Capturing bright, inquisitive eyes and gentle innocence on a warm peach backdrop.",
    image: newbornPhoto3,
    imageAlt: "Awake newborn baby with big dark eyes and a floral headband resting chin on hands",
    imagePosition: "center 45%",
  },
  {
    id: "newborn-4",
    category: "newborn",
    categoryLabel: "Newborn",
    title: "Blushing Joy",
    description: "An unforgettable smile nestled inside an antique lace bucket with soft garden roses.",
    image: newbornPhoto4,
    imageAlt: "Smiling newborn baby resting in a vintage blush bucket draped in antique lace and pink roses",
    imagePosition: "center 40%",
  },
  {
    id: "newborn-5",
    category: "newborn",
    categoryLabel: "Newborn",
    title: "Serene Stillness",
    description: "Classic and cozy portrait wrapped in rich midnight blue, honoring every peaceful detail.",
    image: newbornPhoto5,
    imageAlt: "Sleeping newborn peacefully posing with chin resting on tiny hands wrapped in deep blue",
    imagePosition: "center 50%",
  },
  {
    id: "smashcake-1",
    category: "smashcake",
    categoryLabel: "Smash Cake",
    title: "First Birthday Celebration",
    description: "Joyful milestone portraits celebrating your baby's very first birthday with smiles, balloons, and sweet cake.",
    image: smashCakePhoto,
    imageAlt: "A smiling baby boy sitting behind his custom first birthday smash cake surrounded by festive balloons and a rustic horse",
    imagePosition: "center 45%",
  },
  {
    id: "family-1",
    category: "family",
    categoryLabel: "Family",
    title: "Tender Beginnings",
    description: "Heartfelt portraits embracing the warmth, connection, and joy of your growing family.",
    image: familyPhoto,
    imageAlt: "Parents lovingly cradling their sleeping newborn baby between them in an intimate silhouette portrait",
    imagePosition: "center 38%",
  },
  {
    id: "family-2",
    category: "family",
    categoryLabel: "Family",
    title: "Endless Love",
    description: "A serene and loving portrait of parents embracing their smiling newborn.",
    image: familyPhoto2,
    imageAlt: "Parents smiling down at their sleeping newborn baby wrapped in light blue",
    imagePosition: "center 35%",
  },
  {
    id: "family-3",
    category: "family",
    categoryLabel: "Family",
    title: "Golden Harmony",
    description: "Warm, luminous family bond celebrating the sweetest new arrival.",
    image: familyPhoto3,
    imageAlt: "Parents in soft yellow attire gently holding their peaceful newborn baby",
    imagePosition: "center 35%",
  },
  {
    id: "family-4",
    category: "family",
    categoryLabel: "Family",
    title: "Pure Togetherness",
    description: "An affectionate family moment capturing the big sister's tender kiss for her baby sibling.",
    image: familyPhoto4,
    imageAlt: "Family of four with loving parents and big sister gently kissing newborn baby",
    imagePosition: "center 40%",
  },
];

export default function Portfolio() {
  const headingId = useId();
  const carouselRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedStory, setSelectedStory] = useState(null);
  const [lightboxStory, setLightboxStory] = useState(null);
  // If the user clicked/selected a specific photo, use it for the ambient background scene; otherwise use the category default
  const defaultCategoryStory = stories.find((story) => story.category === activeFilter) ?? stories[0];
  const activeStory = selectedStory || defaultCategoryStory;
  // When "all" is active, show only the representative (first) photo of each category
  const visibleStories =
    activeFilter === "all"
      ? Object.values(
          stories.reduce((acc, story) => {
            if (!acc[story.category]) acc[story.category] = story;
            return acc;
          }, {})
        )
      : stories.filter((story) => story.category === activeFilter);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return undefined;

    carousel.scrollLeft = 0;
    setSelectedStory(null);
  }, [activeFilter]);

  // Handle ESC key to close lightbox and lock body scroll when lightbox is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setLightboxStory(null);
      }
    };

    if (lightboxStory) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxStory]);

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
        <header className="photography-portfolio__intro reveal-on-scroll">
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

        <div className="photography-portfolio__filters reveal-on-scroll reveal-delay-1" role="group" aria-label="Filter portfolio stories">
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

        <div className="photography-portfolio__carousel reveal-on-scroll reveal-delay-2" role="group" aria-label="Browse portfolio stories">
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
                key={`${activeFilter}-${story.id || story.category}`}
                story={story}
                activeFilter={activeFilter}
                onSelect={setActiveFilter}
                isSelected={activeStory.id === story.id || (!selectedStory && activeStory.category === story.category)}
                onSelectPhoto={(photo) => setSelectedStory(photo)}
                onOpenLightbox={(selected) => {
                  setSelectedStory(selected);
                  setLightboxStory(selected);
                }}
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

        <a className="photography-portfolio__cta reveal-on-scroll reveal-delay-3" href="#contact">
          Your story could be next
          <span aria-hidden="true">↗</span>
        </a>
      </div>

      {/* Elegant Full-screen Lightbox Modal */}
      {lightboxStory && (
        <div
          className="photography-portfolio__lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={lightboxStory.title || lightboxStory.categoryLabel}
          onClick={() => setLightboxStory(null)}
        >
          <div className="photography-portfolio__lightbox-dialog">
            <div className="photography-portfolio__lightbox-img-wrap">
              <img
                src={lightboxStory.image}
                alt={lightboxStory.imageAlt || lightboxStory.title}
                className="photography-portfolio__lightbox-image"
              />
            </div>
            {lightboxStory.title && (
              <p className="photography-portfolio__lightbox-caption">
                <span>{lightboxStory.categoryLabel}</span> — {lightboxStory.title}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
