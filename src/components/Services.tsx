import { services } from "@/data/site";

export function Services() {
  return (
    <section className="services" id="services">
      <div className="section-header">
        <h2>Craft Your Narrative</h2>
        <p>
          From concept to final draft, I offer end-to-end storytelling solutions tailored to your
          unique voice and goals.
        </p>
      </div>
      <div className="services-grid">
        {services.map((s) => (
          <div key={s.title} className="service-card">
            <div className="service-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.description}</p>
            <ul className="service-features">
              {s.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <a href="#contact" className="service-link">
              {s.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
