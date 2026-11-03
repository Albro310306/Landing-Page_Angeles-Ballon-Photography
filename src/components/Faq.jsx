import React, { useId, useState } from "react";
import "./Faq.css";
import faqBg from "../assets/faq-background.jpg";

const faqContent = {
  eyebrow: "Questions & Guidance",
  titleStart: "Everything you wish to know,",
  titleEm: "before we meet.",
  subtitle:
    "A calm, transparent space answering the questions families most often ask before stepping in front of our lens.",
  contactHeading: "Have a unique question or ready to plan?",
  contactText:
    "Every family’s journey is different. Send a gentle note and I will be delighted to guide you through styling, dates, or custom requests.",
  contactButton: "Get in touch with Angeles",
  items: [
    {
      id: "faq-1",
      question: "When is the best time to book our newborn session?",
      answer:
        "The ideal time to reserve your newborn session is during your second or early third trimester. We pencil in your estimated due date to reserve time around your arrival window, and finalize the exact day once baby is born. Sessions are typically held between days 7 and 21, when newborns sleep peacefully and naturally settle into tender, curled positions.",
    },
    {
      id: "faq-2",
      question: "Where do photography sessions take place?",
      answer:
        "Newborn and milestone sessions take place at our peaceful, natural-light studio in Gainesville, Virginia, thoughtfully prepared with cozy seating, private nursing areas, and temperature control. For maternity and family portraits, we also love shooting in scenic outdoor Northern Virginia fields during golden hour, or in the relaxed comfort of your own home.",
    },
    {
      id: "faq-3",
      question: "What happens if my baby is unsettled or doesn't sleep?",
      answer:
        "Please don’t worry for a single moment — babies are wonderfully unpredictable, and that is completely natural! We schedule only one newborn session per day so we never have to rush. We take all the time needed for nursing, bottle breaks, diaper changes, and soothing snuggles. We patiently follow your baby’s rhythm.",
    },
    {
      id: "faq-4",
      question: "Do you provide newborn wraps, outfits, and styling guidance?",
      answer:
        "Yes! Our studio wardrobe offers a curated collection of organic wraps, delicate heirloom knit bonnets, and timeless neutral-toned blankets. For mothers, we provide a selection of comfortable, flattering studio dresses. Ahead of your session, you will also receive our personalized styling guide to make coordinating family outfits effortless.",
    },
    {
      id: "faq-5",
      question: "Can parents and older siblings be included in the photographs?",
      answer:
        "Absolutely, yes. Tender family moments and the genuine curiosity between older siblings and their new brother or sister are often the most treasured photos in your entire gallery. Immediate family members are always welcomed and included at no extra charge.",
    },
    {
      id: "faq-6",
      question: "When will our gallery be ready, and how are files delivered?",
      answer:
        "Within 2 to 3 weeks following your session, you will receive an invitation to your private, password-protected online gallery. From there, you can easily download high-resolution, hand-retouched art portraits, share the gallery with grandparents and loved ones, and order fine art archival prints and albums directly.",
    },
    {
      id: "faq-7",
      question: "How would you describe your photography style? Do you pose heavily?",
      answer:
        "Our style is gentle, organic, and heartfelt. We prioritize soft natural light, honest emotions, and timeless compositions over stiff or unnatural poses. Our aim is to create photographs that feel like a tender breath in time — artful, honest, and cherished for generations.",
    },
  ],
};

export default function Faq() {
  const headingId = useId();
  // Single active ID for exclusive accordion (opening one closes any other)
  const [activeId, setActiveId] = useState("faq-1");

  const toggleItem = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="photography-faq" id="faq" aria-labelledby={headingId} style={{ backgroundImage: `url(${faqBg})` }}>
      <div className="photography-faq__inner">
        {/* Intro Header */}
        <header className="photography-faq__intro reveal-on-scroll">
          <p className="photography-faq__eyebrow">
            <span aria-hidden="true" />
            {faqContent.eyebrow}
            <span aria-hidden="true" />
          </p>

          <h2 id={headingId}>
            {faqContent.titleStart}
            <br />
            <em>{faqContent.titleEm}</em>
          </h2>

          <p className="photography-faq__description">{faqContent.subtitle}</p>
        </header>

        {/* Accordion List (Container handles scroll reveal; child items stay visible) */}
        <div
          className="photography-faq__list reveal-on-scroll reveal-delay-1"
          role="region"
          aria-label="Frequently Asked Questions"
        >
          {faqContent.items.map((item, index) => {
            const isOpen = activeId === item.id;
            const questionNumber = String(index + 1).padStart(2, "0");
            const panelId = `faq-panel-${item.id}`;
            const headerButtonId = `faq-btn-${item.id}`;

            return (
              <article
                key={item.id}
                className={`photography-faq__item ${isOpen ? "is-open" : ""}`}
              >
                <h3>
                  <button
                    id={headerButtonId}
                    type="button"
                    className="photography-faq__trigger"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <span className="photography-faq__number" aria-hidden="true">
                      {questionNumber}
                    </span>
                    <span className="photography-faq__question-text">{item.question}</span>
                    <span className="photography-faq__icon" aria-hidden="true">
                      <svg viewBox="0 0 20 20" fill="none">
                        <line x1="10" y1="4" x2="10" y2="16" stroke="currentColor" strokeWidth="1.6" />
                        <line x1="4" y1="10" x2="16" y2="10" stroke="currentColor" strokeWidth="1.6" />
                      </svg>
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={headerButtonId}
                  className="photography-faq__panel"
                >
                  <div className="photography-faq__panel-content">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Contact CTA Card */}
        <div className="photography-faq__cta reveal-on-scroll reveal-delay-2">
          <div className="photography-faq__cta-inner">
            <span className="photography-faq__cta-icon" aria-hidden="true">
              ✉
            </span>
            <div className="photography-faq__cta-text">
              <h3>{faqContent.contactHeading}</h3>
              <p>{faqContent.contactText}</p>
            </div>
            <a className="photography-faq__cta-button" href="#contact">
              {faqContent.contactButton}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
