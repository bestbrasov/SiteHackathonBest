import React, { useEffect, useRef } from "react";
import "./App.css"; // main CSS

// Sponsor images
import sponsor1 from "./assets/tremend-logo.png";
import sponsor2 from "./assets/logo_cbc-01.png";
import sponsor3 from "./assets/logo_universitate.png";
import sponsor4 from "./assets/crucea_rosie_logo.png";
import sponsor5 from "./assets/wurst_house.png";
import sponsor6 from "./assets/burn logo - transparent.png";
import sponsor7 from "./assets/crispy_store.png";
import sponsor8 from "./assets/pizzaiolo_logo.png";
import sponsor9 from "./assets/Logo_Mapizza.png";


const sponsors = [sponsor1, sponsor2, sponsor3, sponsor4, sponsor5, sponsor6, sponsor7, sponsor8, sponsor9];

export default function Sponsors() {
  const sponsorScrollerRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const scroller = sponsorScrollerRef.current;
    scroller.setAttribute("data-animated", "true");

    const inner = scroller.querySelector(".scroller__inner");
    const children = Array.from(inner.children);

    children.forEach((child) => {
      const duplicate = child.cloneNode(true);
      duplicate.setAttribute("aria-hidden", "true");
      inner.appendChild(duplicate);
    });
  }, []);

  return (
    <section id="Sponsors">
      <h1>Made possible by our sponsors</h1>
      <div className="scroller" data-speed="fast" ref={sponsorScrollerRef}>
        <div className="scroller__inner">
          {[...sponsors, ...sponsors, ...sponsors, ...sponsors, ...sponsors].map((src, i) => (
            <div className="sponsor" key={i}>
              <img src={src} alt={`Sponsor ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}