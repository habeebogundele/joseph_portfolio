export function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">JOSEPH</div>
        <p className="footer-text">
          Scriptwriter & Story Architect helping creators, filmmakers, and brands tell stories that
          matter.
        </p>
        <div className="social-links">
          <a href="#" title="LinkedIn">
            in
          </a>
          <a href="#" title="Twitter">
            X
          </a>
          <a href="#" title="Instagram">
            IG
          </a>
          <a href="#" title="YouTube">
            YT
          </a>
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} Joseph. All rights reserved. | Crafted with passion for
          storytelling.
        </p>
      </div>
    </footer>
  );
}
