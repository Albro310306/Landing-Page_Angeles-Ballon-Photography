import React, { useEffect, useId, useRef, useState } from "react";
import "./Portfolio.css";
import PortfolioCard from "./PortfolioCard.jsx";
import newbornPhoto1 from "../assets/portfolio-newborn-1.jpg";
import newbornPhoto2 from "../assets/portfolio-newborn-2.jpg";
import newbornPhoto3 from "../assets/portfolio-newborn-3.jpg";
import newbornPhoto4 from "../assets/portfolio-newborn-4.jpg";
import newbornPhoto5 from "../assets/portfolio-newborn-5.jpg";
import familyPhoto from "../assets/portfolio-family-new.jpg";
import familyPhoto2 from "../assets/portfolio-family-2.jpg";
import familyPhoto3 from "../assets/portfolio-family-3.jpg";
import familyPhoto4 from "../assets/portfolio-family-4.jpg";
import pregnancyPhoto1 from "../assets/portfolio-pregnancy-1.jpg";
import pregnancyPhoto2 from "../assets/portfolio-pregnancy-2.jpg";
import pregnancyPhoto3 from "../assets/portfolio-pregnancy-3.jpg";
import pregnancyPhoto4 from "../assets/portfolio-pregnancy-4.jpg";
import pregnancyPhoto5 from "../assets/portfolio-pregnancy-5.jpg";
import firstBirthdayPhoto1 from "../assets/portfolio-firstbirthday-1.png";
import firstBirthdayPhoto2 from "../assets/portfolio-firstbirthday-2.jpg";
import firstBirthdayPhoto3 from "../assets/portfolio-firstbirthday-3.png";
import firstBirthdayPhoto4 from "../assets/portfolio-firstbirthday-4.png";
import firstBirthdayPhoto5 from "../assets/portfolio-firstbirthday-5.png";

const filters = [
  { label: "All stories", value: "all" },
  { label: "Pregnancy", value: "pregnancy" },
  { label: "Newborn", value: "newborn" },
  { label: "First Birthday", value: "smashcake" },
  { label: "Family", value: "family" },
];

// ── Category header narratives ────────────────────────────────────────────────
export const categoryHeaders = {
  all: {
    eyebrow: "A few moments in time",
    titleStart: "Little stories,",
    titleEm: "held close.",
    description:
      "A glimpse into the tender beginnings, growing families, and meaningful moments we can remember together.",
  },
  pregnancy: {
    eyebrow: "Studio Maternity Sessions • Gainesville, VA",
    titleStart: "Pregnancy package,",
    titleEm: "from $320.",
    description:
      "1-hour in-studio session with 2 outfit changes and 10 high-resolution edited portraits. Your partner and children are warmly included at no extra cost. All inclusive.",
  },
  newborn: {
    eyebrow: "Studio & Home Sessions • Gainesville, VA",
    titleStart: "Newborn package,",
    titleEm: "from $430.",
    description:
      "10 professionally edited portraits, 2 curated accessories, and 3 tender poses on the bed. Parents and 1 sibling included at no extra cost (+$25 per additional person). At-home sessions available upon request.",
  },
  smashcake: {
    eyebrow: "First Birthday Milestones • Gainesville, VA",
    titleStart: "First Birthday package,",
    titleEm: "from $420.",
    description:
      "1-hour session with 10 high-resolution edited photos, 1 adorable outfit, and a custom balloon decoration setup included. Welcomes baby and two parents (+$25 per additional person).",
  },
  family: {
    eyebrow: "Heartfelt Family Portraits • Northern Virginia",
    titleStart: "Family package,",
    titleEm: "from $260.",
    description:
      "Includes 8 beautifully edited high-resolution portraits capturing your family's authentic love and connection. Welcomes Mom, Dad, and up to 2 children.",
  },
};

export const stories = [
  {
    id: "pregnancy-1",
    category: "pregnancy",
    categoryLabel: "Pregnancy",
    price: "$320",
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
    price: "$320",
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
    price: "$320",
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
    price: "$320",
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
    price: "$320",
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
    price: "$430",
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
    price: "$430",
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
    price: "$430",
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
    price: "$430",
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
    price: "$430",
    title: "Serene Stillness",
    description: "Classic and cozy portrait wrapped in rich midnight blue, honoring every peaceful detail.",
    image: newbornPhoto5,
    imageAlt: "Sleeping newborn peacefully posing with chin resting on tiny hands wrapped in deep blue",
    imagePosition: "center 50%",
  },
  {
    id: "firstbirthday-1",
    category: "smashcake",
    categoryLabel: "First Birthday",
    price: "$420",
    title: "Sweetest One",
    description: "Pretty in pink with balloon arches, celebrating every precious detail of turning one year old.",
    image: firstBirthdayPhoto1,
    imageAlt: "Baby girl in pink ruffle dress celebrating her first birthday with balloons and birthday cake",
    imagePosition: "center 30%",
  },
  {
    id: "firstbirthday-2",
    category: "smashcake",
    categoryLabel: "First Birthday",
    price: "$420",
    title: "Butterfly Dreams",
    description: "Radiant giggles in a luminous pastel floral setting with whimsical butterfly balloons.",
    image: firstBirthdayPhoto2,
    imageAlt: "Smiling baby girl in pastel yellow sitting on a stool holding a teddy bear near a butterfly balloon",
    imagePosition: "center 35%",
  },
  {
    id: "firstbirthday-3",
    category: "smashcake",
    categoryLabel: "First Birthday",
    price: "$420",
    title: "Golden Blossom",
    description: "Delicate floral headband and soft blush tones honoring this joyous milestone.",
    image: firstBirthdayPhoto3,
    imageAlt: "Close-up portrait of baby girl with floral headband and pink tulle dress surrounded by balloons",
    imagePosition: "center 35%",
  },
  {
    id: "firstbirthday-4",
    category: "smashcake",
    categoryLabel: "First Birthday",
    price: "$420",
    title: "Heirloom Elegance",
    description: "Classic vintage lace styling creating artful memories to cherish for a lifetime.",
    image: firstBirthdayPhoto4,
    imageAlt: "Baby girl in antique lace dress sitting on rustic wooden bench with pink floral backdrop",
    imagePosition: "center 30%",
  },
  {
    id: "firstbirthday-5",
    category: "smashcake",
    categoryLabel: "First Birthday",
    price: "$420",
    title: "Little Explorer",
    description: "Joyful safari adventure with celestial blue balloon clouds and wooden milestone letters.",
    image: firstBirthdayPhoto5,
    imageAlt: "Baby boy in safari outfit crawling playfully with blue and gold balloon backdrop",
    imagePosition: "center 40%",
  },
  {
    id: "family-1",
    category: "family",
    categoryLabel: "Family",
    price: "$260",
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
    price: "$260",
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
    price: "$260",
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
    price: "$260",
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
            {categoryHeaders[activeFilter]?.eyebrow ?? "A few moments in time"}
            <span aria-hidden="true" />
          </p>
          <h2 id={headingId}>
            {categoryHeaders[activeFilter]?.titleStart ?? "Little stories,"}
            <br />
            <em>{categoryHeaders[activeFilter]?.titleEm ?? "held close."}</em>
          </h2>
          <p className="photography-portfolio__description">
            {categoryHeaders[activeFilter]?.description ??
              "A glimpse into the tender beginnings, growing families, and meaningful moments we can remember together."}
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
