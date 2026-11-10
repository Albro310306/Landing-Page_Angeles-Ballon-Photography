import React, { useEffect, useId, useState } from "react";
import "./Hero.css";
import newbornPhoto from "../assets/newborn-hero-new.jpg";

const dynamicPhrases = [
  "held close.",
  "quietly cherished.",
  "softly captured.",
  "treasured forever.",
  "tenderly remembered.",
];

export default function Hero() {
  const titleId = useId();
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState(dynamicPhrases[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect with natural human timing
  useEffect(() => {
    // Respect user motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const currentPhrase = dynamicPhrases[phraseIndex];
    let timer;

    if (!isDeleting) {
      if (displayText.length < currentPhrase.length) {
        // Typing characters with a slight natural jitter
        const typingDelay = 85 + Math.random() * 25;
        timer = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        }, typingDelay);
      } else {
        // Phrase finished: pause so visitor can read it comfortably
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2600);
      }
    } else {
      if (displayText.length > 0) {
        // Deleting speed is slightly faster than typing
        timer = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length - 1));
        }, 42);
      } else {
        // Pause briefly after erasing before starting the next phrase
        timer = setTimeout(() => {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % dynamicPhrases.length);
        }, 480);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, phraseIndex]);

  return (
    <section className="photography-hero" id="home" aria-labelledby={titleId}>
      <img
        className="photography-hero__photo"
        src={newbornPhoto}
        alt="Angeles Ballon Photography - Pregnancy, Newborn, First Birthday and Family photography in Gainesville, Virginia"
      />
      <div className="photography-hero__veil" aria-hidden="true" />

      <div className="photography-hero__content">
        <p className="photography-hero__eyebrow">
          <span className="photography-hero__eyebrow-icon" aria-hidden="true">✦</span>
          Gainesville, Virginia
          <span className="photography-hero__eyebrow-icon" aria-hidden="true">✦</span>
        </p>

        <h1 id={titleId}>
          Life's sweetest moments,
          <br />
          <span className="photography-hero__dynamic-wrap">
            <em>{displayText}</em>
            <span className="photography-hero__caret" aria-hidden="true" />
          </span>
        </h1>

        <p className="photography-hero__description">
          Gentle, heartfelt photography celebrating pregnancy, newborn beginnings,
          first birthday milestones, and the love that holds your family together.
        </p>

        <div className="photography-hero__actions">
          <a className="photography-hero__button" href="#contact">
            Book your session
            <span className="photography-hero__camera-icon" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
                <circle cx="12" cy="13" r="1.5" className="photography-hero__camera-dot" />
              </svg>
              <span className="photography-hero__camera-flash" />
            </span>
          </a>
          <a className="photography-hero__text-link" href="#portfolio">
            Discover the experience
          </a>
        </div>

        <p className="photography-hero__location">
          Pregnancy • Newborn • First Birthday • Family
        </p>
      </div>

      <span className="photography-hero__caption" aria-hidden="true">
        Every tender chapter, beautifully remembered
      </span>
    </section>
  );
}
