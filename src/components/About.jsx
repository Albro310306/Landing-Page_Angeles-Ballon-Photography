import React, { useId } from "react";
import "./About.css";
import portrait from "../assets/angeles-portrait.png";

export default function About() {
  const headingId = useId();

  return (
    <section className="photographer-about" id="about" aria-labelledby={headingId}>
      <div className="photographer-about__inner">
        <div className="photographer-about__portrait-wrap">
          <img
            className="photographer-about__portrait"
            src={portrait}
            alt="Angeles, newborn and family photographer, standing beside her camera"
            loading="lazy"
          />
          <span className="photographer-about__portrait-note">
            With care, Angeles
          </span>
        </div>

        <div className="photographer-about__copy">
          <p className="photographer-about__eyebrow">
            The person behind the camera
          </p>
          <h2 id={headingId}>
            Hi, I’m Angeles.
            <br />
            <em>I’m so glad you’re here.</em>
          </h2>
          <span className="photographer-about__flourish" aria-hidden="true">
            <span />
            <span>♡</span>
            <span />
          </span>
          <p>
            I’m a newborn and family photographer in Gainesville, Virginia,
            drawn to the little details that make your story yours: a tiny
            hand wrapped around your finger, the way your family settles
            together, and all the love in between.
          </p>
          <p>
            My hope is to make your session feel gentle and unhurried, with
            thoughtful guidance and room to simply be yourselves. So you can
            hold on to this season just as it feels right now.
          </p>
          <div className="photographer-about__details" aria-label="The Angeles Ballon experience">
            <div className="photographer-about__detail">
              <span>01</span>
              <p>Gentle, guided sessions</p>
            </div>
            <div className="photographer-about__detail">
              <span>02</span>
              <p>Meaningful moments, naturally</p>
            </div>
            <div className="photographer-about__detail">
              <span>03</span>
              <p>Serving Gainesville &amp; Northern Virginia</p>
            </div>
          </div>
          <a className="photographer-about__link" href="#contact">
            Let’s make something meaningful
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
