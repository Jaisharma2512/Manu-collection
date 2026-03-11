import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Categories", href: "#categories" },
  { label: "Featured", href: "#featured" },
  { label: "Gift Corner", href: "#gift" },
  { label: "About Us", href: "#about" },
  { label: "Glass Range", href: "#glass-range" },
  { label: "Contact", href: "#contact-form" },
  { label: "🔐 Admin", href: "/admin", style: { color: "#ff6b6b", fontWeight: "bold" } },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* ── MOBILE sticky top bar (logo + hamburger only) ── */}
      {isMobile && (
        <header className={`mobile-header ${scrolled ? "mobile-header--scrolled" : ""}`}>
          <div className="mobile-header__inner">
            <div className="mobile-logo">
              <img
                src="/manucollection-logo.png"
                alt="Manu Collection Logo"
                className="mobile-logo__img"
              />
              <div className="mobile-logo__text">
                <span className="mobile-logo__name">Manu Collection</span>
                <span className="mobile-logo__sub">Bazpur's Finest Since 30 Years</span>
              </div>
            </div>
            <button
              className={`hamburger-btn ${menuOpen ? "hamburger-btn--open" : ""}`}
              onClick={() => setMenuOpen((p) => !p)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span className="ham-line" />
              <span className="ham-line" />
              <span className="ham-line" />
            </button>
          </div>

          {/* Sliding mobile menu */}
          <nav className={`mobile-nav ${menuOpen ? "mobile-nav--open" : ""}`}>
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                className="mobile-nav__link"
                style={{
                  ...(link.style || {}),
                  transitionDelay: menuOpen ? `${i * 0.045}s` : "0s",
                }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </header>
      )}

      {/* ── DESKTOP full header (branding + nav bar) ── */}
      {!isMobile && (
        <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
          <div className="greetings">
            <div>ਸਤ ਸ੍ਰੀ ਅਕਾਲ</div>
            <div>नमस्ते</div>
          </div>
          <h1>Manu Collection</h1>
          <div className="tagline">
            Your oldest and favourite crockery shop in Bazpur. Welcome 🙏
          </div>

          <div className="nav-wrapper">
            <nav className="desktop-nav">
              {NAV_LINKS.map((link) => (
                <a key={link.label} href={link.href} style={link.style || {}}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </header>
      )}
    </>
  );
}
