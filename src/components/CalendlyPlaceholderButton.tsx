"use client";

export function CalendlyPlaceholderButton() {
  return (
    <button
      type="button"
      onClick={() => window.alert("Add your Calendly link here")}
      style={{
        background: "none",
        border: "none",
        color: "var(--accent)",
        fontWeight: 500,
        cursor: "pointer",
        font: "inherit",
        padding: 0,
      }}
    >
      Schedule 30 Min
    </button>
  );
}
