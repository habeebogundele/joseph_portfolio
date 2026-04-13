"use client";

import { useState } from "react";

type Props = {
  email: string;
};

export function CopyEmailButton({ email }: Props) {
  const [status, setStatus] = useState("");

  return (
    <>
      <button
        type="button"
        className="contact-copy-email-btn"
        onClick={async () => {
          try {
            if (navigator.clipboard?.writeText) {
              await navigator.clipboard.writeText(email);
              setStatus("Copied to clipboard.");
            } else {
              window.prompt("Copy this address:", email);
            }
          } catch {
            window.prompt("Copy this address:", email);
            setStatus("");
          }
        }}
      >
        Copy email address
      </button>
      <p className="contact-copy-status" aria-live="polite">
        {status}
      </p>
    </>
  );
}
