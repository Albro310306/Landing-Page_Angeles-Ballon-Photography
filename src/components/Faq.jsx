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
    "Every family's journey is different. Send a gentle note and I will be delighted to guide you through styling, dates, or custom requests.",
  contactButton: "Get in touch with Angeles",
  items: [
    {
      id: "faq-1",
      question: "When is the best time to book our newborn session?",
      answer:
        "The ideal time to reserve your newborn session is during your second or early third trimester (weeks 24–32). We pencil in your due date and confirm the exact day once baby arrives. Please note: newborn sessions are held between days 6 and 15 of life, when babies sleep peacefully and settle into gentle poses naturally. If your baby is older than 15 days, please reach out before booking so we can guide you.",
    },
    {
      id: "faq-2",
      question: "When should I schedule my maternity session?",
      answer:
        "We recommend scheduling your maternity session from 27 weeks of pregnancy onward — ideally between weeks 28 and 34, when your baby bump is beautifully defined and you still feel comfortable moving with ease. Sessions create radiant, timeless portraits celebrating this fleeting season.",
    },
    {
      id: "faq-3",
      question: "Where do photography sessions take place?",
      answer:
        "Sessions take place at our cozy Home Studio in Gainesville, Virginia — a comfortable, private space carefully temperature-controlled to keep your baby warm and relaxed. For maternity and family portraits, we also offer scenic outdoor locations during golden hour. In addition, newborn sessions can be held at your own home for an added travel fee based on distance.",
    },
    {
      id: "faq-4",
      question: "What if my baby is fussy or won't sleep during the session?",
      answer:
        "Please don't worry for a single moment — babies are wonderfully unpredictable, and that is completely natural. Sessions last approximately 2 hours and follow your baby's rhythm. We pause for nursing, bottle breaks, diaper changes, and soothing snuggles whenever needed. Before your session, we also provide a preparation guide to help baby arrive calm and content.",
    },
    {
      id: "faq-5",
      question: "Do you provide wardrobe and props, and can additional people join?",
      answer:
        "Yes! We offer a curated collection of gowns and fabrics exclusively for expectant mothers, and full props and wraps exclusively for newborn babies. A comprehensive wardrobe guide is sent upon booking to help you prepare your family's outfits. Additional participants beyond what your package includes may join for an additional fee of $30 each.",
    },
    {
      id: "faq-6",
      question: "When will our gallery be ready, and how does image selection work?",
      answer:
        "After your session, you will receive the complete gallery of proofs so your family can calmly select your favorite photos for editing. Once selected, final hand-retouched portraits are delivered within 2 to 3 weeks. If you would like a quick sneak peek ahead of time, we offer an expedited delivery of 5 edited photos ready in 1 week or less for an additional $25 fee.",
    },
    {
      id: "faq-7",
      question: "How would you describe your photography style?",
      answer:
        "Our style is delicate, artistic, and timeless. Using professional, luminous lighting and harmonious compositions, we gently guide you into natural, flattering poses that capture genuine emotion while preserving your unique essence — creating timeless portraits to be treasured for generations.",
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

        {/* Accordion List */}
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
