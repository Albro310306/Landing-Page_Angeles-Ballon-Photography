import { useEffect } from "react";

/**
 * Custom hook that initializes an IntersectionObserver to reveal
 * elements as the user scrolls down the page.
 */
export function useScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // If browser doesn't support IntersectionObserver or user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!("IntersectionObserver" in window) || prefersReducedMotion) {
      document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
        el.classList.add("is-revealed");
        el.setAttribute("data-revealed", "true");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            entry.target.setAttribute("data-revealed", "true");
            // Stop observing once revealed so animation runs only once smoothly
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    const observeElements = () => {
      const elements = document.querySelectorAll(
        ".reveal-on-scroll:not(.is-revealed):not([data-revealed='true'])"
      );
      elements.forEach((el) => observer.observe(el));
    };

    // Initial observation
    observeElements();

    // Re-observe if dynamic elements are added
    const mutationObserver = new MutationObserver(() => {
      // Re-apply is-revealed if React wiped the class off an already revealed element
      document.querySelectorAll(".reveal-on-scroll[data-revealed='true']").forEach((el) => {
        if (!el.classList.contains("is-revealed")) {
          el.classList.add("is-revealed");
        }
      });
      observeElements();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ["class"] });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
