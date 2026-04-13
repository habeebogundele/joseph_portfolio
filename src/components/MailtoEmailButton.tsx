"use client";

import { mailtoHref } from "@/data/site";

/**
 * Uses a real <button> + window.location so the mailto opens from a direct user gesture.
 * Plain <a href="mailto:..."> is sometimes swallowed by embedded browsers or blocked.
 */
export function MailtoEmailButton() {
  return (
    <button
      type="button"
      className="btn btn-primary contact-email-btn"
      onClick={() => {
        window.location.href = mailtoHref;
      }}
    >
      Email me
    </button>
  );
}
