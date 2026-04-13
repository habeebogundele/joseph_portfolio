"use client";

import { useEffect } from "react";

export function ClientEffects() {
  useEffect(() => {
    const anchors = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');

    function onNavClick(this: HTMLAnchorElement, e: MouseEvent) {
      const href = this.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    anchors.forEach((a) => a.addEventListener("click", onNavClick));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    document
      .querySelectorAll(".service-card, .portfolio-item, .testimonial-card, .stat-item")
      .forEach((el) => {
        el.classList.add("fade-in");
        observer.observe(el);
      });

    return () => {
      anchors.forEach((a) => a.removeEventListener("click", onNavClick));
      observer.disconnect();
    };
  }, []);

  return null;
}
