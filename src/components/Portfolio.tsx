import { portfolioItems } from "@/data/site";

export function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="section-header">
        <h2>Stories Brought to Life</h2>
        <p>
          A selection of projects that showcase range, creativity, and results-driven storytelling.
        </p>
      </div>
      <div className="portfolio-grid">
        {portfolioItems.map((item) => (
          <div key={item.title} className="portfolio-item">
            <div className="portfolio-image" style={item.imageStyle}>
              <span style={{ fontSize: "3rem", color: "var(--accent)", opacity: 0.5 }}>
                {item.emoji}
              </span>
            </div>
            <div className="portfolio-content">
              <span className="portfolio-tag">{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
