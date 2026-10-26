import React, { useId } from "react";
import "./Hero.css";
import newbornPhoto from "../assets/newborn-hero.png";

export default function Hero() {
  const titleId = useId();

  return (
    <section className="photography-hero" id="home" aria-labelledby={titleId}>
        <img
          className="photography-hero__photo"
          src={newbornPhoto}
          alt="A newborn resting peacefully in a parent's hands"
        />
        <div className="photography-hero__veil" aria-hidden="true" />

        <div className="photography-hero__content">
          <p className="photography-hero__eyebrow">
            Gainesville, Virginia <span aria-hidden="true">·</span> Newborn & family photographer
          </p>
          <h1 id={titleId}>
            A little love,
            <br />
            <em>held close.</em>
          </h1>
          <p className="photography-hero__description">
            Gentle, heartfelt photographs for the days that pass too quickly.
            A relaxed newborn session, made just for your growing family.
          </p>
          <div className="photography-hero__actions">
            <a className="photography-hero__button" href="#contact">
              Plan your newborn session
              <span aria-hidden="true">↗</span>
            </a>
            <a className="photography-hero__text-link" href="#experience">
              Discover the experience
            </a>
          </div>
          <p className="photography-hero__location">
            Serving Gainesville &amp; Northern Virginia
          </p>
        </div>

        <span className="photography-hero__caption" aria-hidden="true">
          Your newest chapter, beautifully remembered
        </span>
    </section>
  );
}
