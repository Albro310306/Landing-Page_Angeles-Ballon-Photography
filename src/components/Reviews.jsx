import React, { useId } from "react";
import "./Reviews.css";

const reviews = [
  {
    quote:
      "Angeles made our newborn session feel calm and unhurried. She captured the tiny details we never want to forget.",
    name: "Sofia M.",
    session: "Newborn session",
    initials: "S",
  },
  {
    quote:
      "Our family felt at ease from the very beginning. The photographs feel like us, only with everyone in the frame.",
    name: "Daniela R.",
    session: "Family session",
    initials: "D",
  },
  {
    quote:
      "I was nervous about being in front of the camera, but Angeles made the whole afternoon feel natural and lovely.",
    name: "Priya K.",
    session: "Motherhood session",
    initials: "P",
  },
  {
    quote:
      "She noticed all the little moments between poses. Those ended up being the photographs we treasure most.",
    name: "Marisol T.",
    session: "Maternity session",
    initials: "M",
  },
  {
    quote:
      "Our toddler needed time to warm up, and Angeles was so patient. Nothing felt forced, and the photos are beautiful.",
    name: "Chris B.",
    session: "Family session",
    initials: "C",
  },
  {
    quote:
      "The session was peaceful, thoughtful, and full of care. Our baby's gallery feels like a little love letter.",
    name: "Alyssa W.",
    session: "Newborn session",
    initials: "A",
  },
  {
    quote:
      "Angeles gave us gentle direction and plenty of room to be ourselves. I will always be grateful we made these memories.",
    name: "Lucia G.",
    session: "Motherhood session",
    initials: "L",
  },
  {
    quote:
      "From the first message to the finished gallery, everything felt personal. We felt cared for the entire time.",
    name: "Ethan P.",
    session: "Maternity session",
    initials: "E",
  },
  {
    quote:
      "The photos brought us right back to those first sleepy days at home. Such a meaningful gift to our family.",
    name: "Nina F.",
    session: "Newborn session",
    initials: "N",
  },
  {
    quote:
      "We laughed, cuddled, and just enjoyed being together. Somehow Angeles captured exactly how this season feels.",
    name: "Javier L.",
    session: "Family session",
    initials: "J",
  },
];

export default function Reviews() {
  const headingId = useId();
  const reviewTrack = (
    <div className="photography-reviews__group">
      {reviews.map((review, index) => (
        <article
          className="photography-reviews__card"
          key={`${review.name}-${index}`}
          aria-label={`Sample review from ${review.name}, ${review.session}`}
        >
          <div className="photography-reviews__rating" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }, (_, star) => (
              <span key={star} aria-hidden="true">★</span>
            ))}
          </div>
          <p className="photography-reviews__sample-label">Sample review</p>
          <blockquote>{review.quote}</blockquote>
          <footer className="photography-reviews__author">
            <span className="photography-reviews__avatar" aria-hidden="true">
              {review.initials}
            </span>
            <span>
              <span className="photography-reviews__name">{review.name}</span>
              <span className="photography-reviews__session">{review.session}</span>
            </span>
          </footer>
        </article>
      ))}
    </div>
  );

  return (
    <section className="photography-reviews" id="reviews" aria-labelledby={headingId}>
      <div className="photography-reviews__inner">
        <header className="photography-reviews__intro">
          <p className="photography-reviews__eyebrow">
            <span aria-hidden="true" />
            Kind words from families
            <span aria-hidden="true" />
          </p>
          <h2 id={headingId}>
            Moments remembered,
            <br />
            <em>stories cherished.</em>
          </h2>
          <p className="photography-reviews__description">
            A little glimpse of what it feels like to create something meaningful together.
          </p>
          <p className="photography-reviews__sample-note">
            Preview with temporary sample reviews — replace with approved client feedback before publishing.
          </p>
        </header>

        <div className="photography-reviews__viewport">
          <div className="photography-reviews__track">
            {reviewTrack}
            <div className="photography-reviews__group" aria-hidden="true">
              {reviews.map((review, index) => (
                <article className="photography-reviews__card" key={`duplicate-${index}`}>
                  <div className="photography-reviews__rating">
                    {Array.from({ length: 5 }, (_, star) => (
                      <span key={star} aria-hidden="true">★</span>
                    ))}
                  </div>
                  <p className="photography-reviews__sample-label">Sample review</p>
                  <blockquote>{review.quote}</blockquote>
                  <footer className="photography-reviews__author">
                    <span className="photography-reviews__avatar" aria-hidden="true">
                      {review.initials}
                    </span>
                    <span>
                      <span className="photography-reviews__name">{review.name}</span>
                      <span className="photography-reviews__session">{review.session}</span>
                    </span>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
