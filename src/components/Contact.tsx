import { CalendlyPlaceholderButton } from "@/components/CalendlyPlaceholderButton";
import { CopyEmailButton } from "@/components/CopyEmailButton";
import {
  CONTACT_EMAIL,
  gmailComposeHref,
  mailtoHref,
  outlookComposeHref,
} from "@/data/site";

export function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="section-header">
          <h2>
            Let&apos;s Write Something <span className="accent-text">Unforgettable</span>
          </h2>
          <p>
            Have a project in mind? Ready to elevate your content? I&apos;m currently accepting new
            clients for Q2 2026.
          </p>
        </div>

        <div className="availability">Currently accepting new projects</div>

        <div className="contact-methods">
          <div className="contact-method">
            <div className="contact-icon">✉️</div>
            <h3>Email</h3>
            <p>Direct & Professional</p>
            <a href={mailtoHref}>{CONTACT_EMAIL}</a>
          </div>

          <div className="contact-method">
            <div className="contact-icon">💬</div>
            <h3>Calendly</h3>
            <p>Book a Discovery Call</p>
            <CalendlyPlaceholderButton />
          </div>

          <div className="contact-method">
            <div className="contact-icon">🌐</div>
            <h3>Freelance Platforms</h3>
            <p>Secure Payment & Contracts</p>
            <a
              href="https://www.fiverr.com/sellers/joseph_script2"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Fiverr Profile
            </a>
          </div>
        </div>

        <div className="contact-cta">
          <a href={mailtoHref} className="btn btn-primary contact-email-btn">
            Compose email
          </a>
          <p className="contact-mailto-hint">
            Uses your computer&apos;s default mail app (Outlook, Apple Mail, Thunderbird, etc.)
            with <strong>To:</strong> set to{" "}
            <a href={mailtoHref}>{CONTACT_EMAIL}</a>.
            <em
              style={{
                display: "block",
                marginTop: "0.75rem",
                fontSize: "0.88em",
                color: "var(--text-muted)",
              }}
            >
              If nothing happens, your browser may block mailto, or no email app is set up—use
              Gmail or Outlook below, or copy the address.
            </em>
          </p>
          <div className="contact-webmail-row">
            <a href={gmailComposeHref} target="_blank" rel="noopener noreferrer">
              Open compose in Gmail
            </a>
            <a href={outlookComposeHref} target="_blank" rel="noopener noreferrer">
              Open compose in Outlook.com
            </a>
          </div>
          <CopyEmailButton email={CONTACT_EMAIL} />
          <p style={{ marginTop: "1.25rem", color: "var(--text-muted)", fontSize: "0.9rem" }}>
            Response time: Within 24 hours | Initial consultation: Free
          </p>
        </div>
      </div>
    </section>
  );
}
