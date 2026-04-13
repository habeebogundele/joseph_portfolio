import { CalendlyPlaceholderButton } from "@/components/CalendlyPlaceholderButton";
import { MailtoEmailButton } from "@/components/MailtoEmailButton";
import { CONTACT_EMAIL, mailtoHref } from "@/data/site";

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

        <div className="contact-primary-mail">
          <MailtoEmailButton />
        </div>

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

        <p className="contact-response-note">
          Response time: Within 24 hours | Initial consultation: Free
        </p>
      </div>
    </section>
  );
}
