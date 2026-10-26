import React from "react";

const cardMatteColors = {
  newborn: "#55555f",
  maternity: "#cacad4",
  family: "#aaadc0",
  pregnancy: "#51535b",
  sitter: "#7d4548",
};

export default function PortfolioCard({ story, activeFilter, onSelect, isSelected = false }) {
  const isCategoryCard = activeFilter === "all";

  return (
    <div
      className="photography-portfolio__card-wrap"
      onPointerEnter={(event) => {
        if (event.pointerType !== "touch") {
          event.currentTarget.classList.add("is-pointer-active");
        }
      }}
      onPointerMove={(event) => {
        if (event.pointerType === "touch") return;

        const bounds = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        const clampedX = Math.max(-0.5, Math.min(0.5, x));
        const clampedY = Math.max(-0.5, Math.min(0.5, y));

        event.currentTarget.style.setProperty("--tilt-x", `${clampedX * 7}deg`);
        event.currentTarget.style.setProperty("--tilt-y", `${clampedY * -7}deg`);
        event.currentTarget.style.setProperty("--parallax-x", `${clampedX * -5}px`);
        event.currentTarget.style.setProperty("--parallax-y", `${clampedY * -5}px`);
      }}
      onPointerLeave={(event) => {
        event.currentTarget.style.setProperty("--tilt-x", "0deg");
        event.currentTarget.style.setProperty("--tilt-y", "0deg");
        event.currentTarget.style.setProperty("--parallax-x", "0px");
        event.currentTarget.style.setProperty("--parallax-y", "0px");
        event.currentTarget.classList.remove("is-pointer-active");
      }}
    >
      <article
        className={`photography-portfolio__card is-frameless${isCategoryCard ? " is-category-card" : ""}`}
      >
        <div
          className="photography-portfolio__image-wrap"
          style={{ "--card-matte": cardMatteColors[story.category] }}
        >
          <img
            className="photography-portfolio__image"
            src={story.image}
            alt={story.imageAlt}
            loading="lazy"
            style={{ objectPosition: story.imagePosition }}
          />
          <span className="photography-portfolio__tag">{story.categoryLabel}</span>
          <div className="photography-portfolio__image-caption">
            <h3>{isCategoryCard ? story.categoryLabel : story.title}</h3>
            <p className="photography-portfolio__card-description">{story.description}</p>
          </div>
        </div>
      </article>
      {isCategoryCard && onSelect && (
        <button
          className="photography-portfolio__category-select"
          type="button"
          aria-label={`View ${story.categoryLabel} portfolio section`}
          aria-pressed={isSelected}
          onClick={() => onSelect(story.category)}
        />
      )}
    </div>
  );
}
