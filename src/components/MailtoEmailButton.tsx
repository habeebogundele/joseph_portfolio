"use client";

import { gmailComposeHref, mailtoHref } from "@/data/site";

/**
 * One button: phones and most desktops use mailto: (opens the user's mail app).
 * Desktop Windows often has no visible mailto handler — open Gmail compose in the browser instead.
 */
function useGmailWebForThisClient(): boolean {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent;
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile\b/i.test(
    ua,
  );
  if (isMobile) return false;
  return /Windows NT|Win64|WOW64|Win32/i.test(ua);
}

export function MailtoEmailButton() {
  return (
    <button
      type="button"
      className="btn btn-primary contact-email-btn"
      onClick={() => {
        if (useGmailWebForThisClient()) {
          const win = window.open(gmailComposeHref, "_blank", "noopener,noreferrer");
          if (!win) {
            window.location.href = gmailComposeHref;
          }
        } else {
          window.location.href = mailtoHref;
        }
      }}
    >
      Email me
    </button>
  );
}
