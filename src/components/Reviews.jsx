import React, { useId } from "react";
import "./Reviews.css";

const reviews = [
  {
    quote:
      "It was a great experience, Angie was very professional and she guided us through the whole photo shoot.",
    name: "Claudia O'Neill",
    session: "Studio session",
    initials: "CO",
  },
  {
    quote:
      "Thank you for my great pictures. Loved them all. Not only you were professional but also a lovely sweet person. You were very patient and caring. Thank you for a great time. Will hire you again for future sessions!",
    name: "Rebeca Sarmiento",
    session: "Client review",
    initials: "RS",
  },
  {
    quote:
      "She did an amazing job I really like my pictures, I will be back after I have the baby thanks so much.",
    name: "Sha",
    session: "Maternity session",
    initials: "S",
  },
  {
    quote:
      "Very friendly and professional. Glad we chose her ❤️",
    name: "Valentina",
    session: "Client review",
    initials: "V",
  },
  {
    quote:
      "Very nice experience 🥰 she is sweet and kind 😍 i really recommend this place to make wonderful memories newmoms 🥰",
    name: "Stuti Rachh",
    session: "Newborn session",
    initials: "SR",
  },
  {
    quote:
      "Absolutely professional, sweet and friendly young woman. She does beautiful work. Highly recommend, we will use her services again.",
    name: "Neri Jorge",
    session: "Client review",
    initials: "NJ",
  },
  {
    quote:
      "I had an amazing experience, and felt like a beautiful mom to be. I have no idea what I was doing, and she was amazing. She guided me and making the photos come to life and looking beautiful.",
    name: "Jennifer A.",
    session: "Maternity session",
    initials: "JA",
  },
  {
    quote:
      "I love her and her set up! She did so amazing RECOMMEND 10/10",
    name: "Elsy & Daniel",
    session: "Studio session",
    initials: "ED",
  },
];

export default function Reviews() {
  const headingId = useId();

  const renderCard = (review, key) => (
    <article
      className="photography-reviews__card"
      key={key}
      aria-label={`Review from ${review.name}, ${review.session}`}
    >
      <div className="photography-reviews__rating" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }, (_, star) => (
          <span key={star} aria-hidden="true">★</span>
        ))}
      </div>
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
  );

  return (
    <section className="photography-reviews" id="reviews" aria-labelledby={headingId}>
      <div className="photography-reviews__inner">
        <header className="photography-reviews__intro reveal-on-scroll">
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
            Heartfelt words from parents and families who trusted us to capture their sweetest chapters.
          </p>
        </header>

        <div className="photography-reviews__viewport reveal-on-scroll reveal-delay-1">
          <div className="photography-reviews__track">
            {/* First group */}
            <div className="photography-reviews__group">
              {reviews.map((review, index) => renderCard(review, `primary-${index}`))}
            </div>
            {/* Duplicated group for infinite smooth marquee */}
            <div className="photography-reviews__group" aria-hidden="true">
              {reviews.map((review, index) => renderCard(review, `dup-${index}`))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
