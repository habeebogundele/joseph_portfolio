import { testimonials } from "@/data/site";

export function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="section-header">
        <h2>Client Stories</h2>
        <p>
          Don&apos;t just take my word for it. Here&apos;s what creators and filmmakers say about
          working together.
        </p>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((t) => (
          <div key={t.name} className="testimonial-card">
            <p className="testimonial-text">{t.quote}</p>
            <div className="testimonial-author">
              <div className="author-avatar">{t.initials}</div>
              <div className="author-info">
                <h4>{t.name}</h4>
                <p>{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
