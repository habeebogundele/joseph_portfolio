"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById("navbar");
      if (!el) return;
      if (window.scrollY > 100) {
        el.style.background = "rgba(10, 10, 10, 0.98)";
        el.style.boxShadow = "0 2px 20px rgba(0,0,0,0.3)";
      } else {
        el.style.background = "rgba(10, 10, 10, 0.9)";
        el.style.boxShadow = "none";
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav id="navbar">
      <Link href="/" className="logo" onClick={() => setMenuOpen(false)}>
        JOSEPH
      </Link>
      <ul className={`nav-links${menuOpen ? " nav-open" : ""}`}>
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <a href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="mobile-menu"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={(e) => {
          e.stopPropagation();
          setMenuOpen((o) => !o);
        }}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
