export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-subtitle">Scriptwriter & Story Architect</p>
        <h1>
          Words That <span className="accent-text">Move</span> Audiences.
          <br />
          Stories That <span className="accent-text">Convert</span>.
        </h1>
        <p className="hero-description">
          I craft compelling narratives for YouTubers, filmmakers, and brands. From viral video
          scripts to cinematic screenplays, I turn your vision into words that resonate, engage,
          and drive results.
        </p>
        <div className="cta-group">
          <a href="#portfolio" className="btn btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn-secondary">
            Start a Project
          </a>
        </div>
      </div>
      <div className="scroll-indicator" aria-hidden />
    </section>
  );
}
