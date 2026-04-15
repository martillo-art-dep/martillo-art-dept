import { useState } from "react";
import { NavLink, useLocation } from "react-router";
import { useTranslation } from "react-i18next";

const navCSS = `
  .nav-link {
    position: relative;
    padding-bottom: 4px;
    transition: font-weight 0.2s ease;
  }
  .nav-link::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2.5px;
    background-color: #FB5000;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .nav-link:hover::after,
  .nav-link.active::after {
    transform: scaleX(1);
  }
  .nav-link:hover {
    font-weight: 600;
    color: #FB5000 !important;
  }
  .nav-link.active {
    font-weight: 500;
  }

  .header-logo {
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                filter 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    will-change: transform, filter;
  }
  .header-logo-dark:hover {
    transform: scale(1.21);
    filter: drop-shadow(0px 0px 14px rgba(251, 80, 0, 0.55));
  }
  .header-logo-light:hover {
    transform: scale(1.21);
    filter: drop-shadow(0px 0px 12px rgba(0, 0, 0, 0.7));
  }

  .flag-btn {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1),
                opacity 0.2s ease;
  }
  .flag-btn:hover { transform: scale(1.15); }
  .flag-btn.flag-active { transform: scale(1.12); }

  .dropdown-wrapper { position: relative; }
  .dropdown-wrapper .dropdown-menu {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    width: 187px;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    box-shadow: 7px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 0 0 20px 20px;
    padding: 10px 0;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-8px);
    transition: opacity 0.25s ease, visibility 0.25s ease, transform 0.25s ease;
    z-index: 100;
  }
  .dropdown-wrapper:hover .dropdown-menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  .dropdown-item {
    display: block;
    width: 100%;
    padding: 10px 16px;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #FFFFFF;
    text-decoration: none;
    position: relative;
    transition: all 0.2s ease;
    cursor: pointer;
    background: none;
    border: none;
    text-align: left;
  }
  .dropdown-item:hover {
    font-weight: 600;
    color: #FB5000;
    background-color: rgba(255, 255, 255, 0.85);
    border-radius: 4px;
    margin: 0 6px;
    width: calc(100% - 12px);
    padding-left: 10px;
  }

  .social-icon-link .icon-path { transition: fill 0.2s ease; }
  .social-icon-link:hover .icon-path { fill: #FB5000 !important; }

  @keyframes menuFadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  .nav-container {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-center-block, .nav-right-block {
    display: none;
  }

  @media (min-width: 1024px) {
    .nav-container {
      display: grid !important;
      grid-template-columns: 1fr auto 1fr;
      padding: 0 40px;
    }
    .nav-center-block {
      display: flex;
      gap: 12px;
    }
    .nav-right-block {
      display: flex;
      gap: 15px;
      justify-content: flex-end;
    }
    .mobile-btn-container {
      display: none;
    }
  }

  @media (min-width: 1280px) {
    .nav-container {
      padding: 0 50px;
    }
    .nav-center-block {
      gap: 16px;
      transform: translateX(-92px);
    }
    .nav-right-block {
      gap: 30px;
    }
  }

  @media (max-height: 500px) {
    header {
      padding: 8px 0 !important;
    }
  }
`;

function SocialIconSVG({ id, color }: { id: string; color: string }) {
  const isDark = color === "#000000";
  const pathColor = isDark ? "#000000" : "#F8F1CD";

  switch (id) {
    case "linkedin":
      return (
        <svg width="26" height="24" viewBox="0 0 24 24" fill="none">
          <path className="icon-path" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill={pathColor} />
        </svg>
      );
    case "vimeo":
      return (
        <svg width="26" height="22" viewBox="0 0 24 24" fill="none">
          <path className="icon-path" d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197a315.065 315.065 0 0 0 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z" fill={pathColor} />
        </svg>
      );
    case "instagram":
      return (
        <svg width="26" height="25" viewBox="0 0 24 24" fill="none">
          <path className="icon-path" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" fill={pathColor} />
        </svg>
      );
    case "imdb":
      return (
        <img
          src={isDark ? "/assets/ImdbIconLight.svg" : "/assets/ImdbIconDark.svg"}
          alt="IMDb"
          style={{ width: "26px", height: "25px", objectFit: "contain" }}
        />
      );
    default:
      return null;
  }
}

export default function Header() {
  const { i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectsExpanded, setProjectsExpanded] = useState(false);
  const location = useLocation();
  const currentLang = i18n.language;

  const changeLanguage = (lang: string) => { i18n.changeLanguage(lang); };

  const isHome = location.pathname === "/" || location.pathname === "/es" || location.pathname === "/en";
  const isLightPage = location.pathname.startsWith("/services") || location.pathname.startsWith("/about");
  const isDarkGradientPage = isHome || location.pathname.startsWith("/portfolio") || location.pathname.startsWith("/contact");

  const textColor = isLightPage ? "#000000" : "#F8F1CD";
  const iconColor = isLightPage ? "#000000" : "#F8F1CD";
  const logoHoverClass = isLightPage ? "header-logo-light" : "header-logo-dark";

  const headerBg = isLightPage 
    ? "linear-gradient(180deg, rgba(217,217,217,0.95) 0%, rgba(217,217,217,0) 100%)"
    : isDarkGradientPage 
      ? "linear-gradient(180deg, rgba(1,1,0,1) 0%, rgba(0,0,0,0) 100%)"
      : "#010100";

  const navLinks = [
    { to: "/portfolio", labelEs: "Proyectos",     labelEn: "Portfolio",  dropdown: true },
    { to: "/services",  labelEs: "Servicios",     labelEn: "Services",   dropdown: false },
    { to: "/about",     labelEs: "Quiénes Somos", labelEn: "About Us",   dropdown: false },
    { to: "/contact",   labelEs: "Contacto",      labelEn: "Contact",    dropdown: false },
  ];

  const dropdownCategories = [
    { to: "/portfolio",                         labelEs: "Todos",         labelEn: "All" },
    { to: "/portfolio?category=largometrajes",  labelEs: "Largometrajes", labelEn: "Feature Films" },
    { to: "/portfolio?category=series",         labelEs: "Series",        labelEn: "Series" },
    { to: "/portfolio?category=comerciales",    labelEs: "Comerciales",   labelEn: "Commercials" },
    { to: "/portfolio?category=videoclips",     labelEs: "Videoclips",    labelEn: "Music Videos" },
  ];

  return (
    <>
      <style>{navCSS}</style>

      <header
        className="fixed left-0 right-0 top-0 z-50 flex flex-col items-center justify-center"
        style={{ width: "100%", padding: "18px 0", background: headerBg }}
      >
        <nav
          className="nav-container w-full"
          style={{ maxWidth: "1440px", height: "60px" }}
        >
          {/* 1. LADO IZQUIERDO: Logo */}
          <div className="flex items-center justify-start">
            <NavLink to="/" className="flex-shrink-0" aria-label="Martillo Art Dept">
              <img
                src="/assets/logo-martillo-color.svg"
                alt="Martillo"
                className={`header-logo ${logoHoverClass}`}
                style={{ width: "70px", height: "60px", objectFit: "contain" }}
              />
            </NavLink>
          </div>

          {/* 2. CENTRO (Desktop) */}
          <div className="nav-center-block items-center">
            {navLinks.map((link) => (
              <div key={link.to} className={link.dropdown ? "dropdown-wrapper" : ""}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                  style={({ isActive }) => ({
                    display: "flex", alignItems: "center", gap: "8px", padding: "8px 16px",
                    fontFamily: "'Inter', sans-serif", fontSize: "20px", fontWeight: 400,
                    color: isActive ? "#FB5000" : textColor, textDecoration: "none"
                  })}
                >
                  <span>{currentLang === "en" ? link.labelEn : link.labelEs}</span>
                  {link.dropdown && (
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </NavLink>

                {link.dropdown && (
                  <div className="dropdown-menu">
                    {dropdownCategories.map((cat) => (
                      <NavLink key={cat.to} to={cat.to} className="dropdown-item">
                        {currentLang === "en" ? cat.labelEn : cat.labelEs}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 3. LADO DERECHO (Desktop) */}
          <div className="nav-right-block items-center">
            <div className="flex items-center">
              {["linkedin", "vimeo", "instagram", "imdb"].map((id) => (
                <a
                  key={id} href={`https://${id}.com`} target="_blank" rel="noopener noreferrer"
                  className="social-icon-link"
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "52px", height: "50px", padding: "10px" }}
                >
                  <SocialIconSVG id={id} color={iconColor} />
                </a>
              ))}
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <button onClick={() => changeLanguage("es")} style={{ background: "none", border: "none", cursor: "pointer", opacity: currentLang.startsWith("es") ? 1 : 0.6 }}>
                <div style={{ overflow: "hidden", width: "32px", height: "32px", borderRadius: "50%" }}>
                  <img src="/assets/flag-mx.svg" alt="MX" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              </button>
              <button onClick={() => changeLanguage("en")} style={{ background: "none", border: "none", cursor: "pointer", opacity: currentLang.startsWith("en") ? 1 : 0.6 }}>
                <div style={{ overflow: "hidden", width: "32px", height: "32px", borderRadius: "50%" }}>
                  <img src="/assets/flag-us.svg" alt="US" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              </button>
            </div>
          </div>

          {/* HAMBURGUESA MOBILE */}
          <div className="mobile-btn-container flex items-center justify-end">
            <button 
              onClick={() => setMenuOpen(!menuOpen)} 
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
            >
              {[0, 1, 2].map((i) => (
                <span 
                  key={i} 
                  style={{ 
                    display: "block", 
                    width: "28px", 
                    height: "3px", 
                    backgroundColor: textColor, 
                    transition: "all 0.2s", 
                    transform: menuOpen && i === 0 ? "translateY(8px) rotate(45deg)" : menuOpen && i === 2 ? "translateY(-8px) rotate(-45deg)" : "none", 
                    opacity: menuOpen && i === 1 ? 0 : 1 
                  }} 
                />
              ))}
            </button>
          </div>
        </nav>
      </header>

      {/* OVERLAY MOBILE */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[100] flex flex-col lg:hidden"
          style={{
            backgroundColor: "#1b1b1b",
            backgroundImage: "url(/assets/bg-gradient-dark.jpeg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            animation: "menuFadeIn 200ms ease forwards",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "34px 21px 0" }}>
            <NavLink to="/" onClick={() => { setMenuOpen(false); setProjectsExpanded(false); }}>
              <img src="/assets/logo-martillo-color.svg" alt="Martillo" style={{ width: "70px", height: "60px", objectFit: "contain" }} />
            </NavLink>
            <button onClick={() => { setMenuOpen(false); setProjectsExpanded(false); }} style={{ background: "none", border: "none" }}>
              <svg width="46" height="48" viewBox="0 0 46 48" fill="none">
                <path d="M34 12L12 36M12 12l22 24" stroke="#F8F1CD" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div style={{ display: "flex", flexDirection: "column", paddingLeft: "46px", paddingRight: "46px", paddingTop: "60px", flex: 1, overflowY: "auto" }}>
            <div>
              <button
                onClick={() => setProjectsExpanded(!projectsExpanded)}
                style={{ display: "flex", alignItems: "center", gap: "10px", fontFamily: "'Inter', sans-serif", fontSize: "36px", color: "#F8F1CD", background: "none", border: "none", padding: "8px 0" }}
              >
                <span>{currentLang === "en" ? "Portfolio" : "Proyectos"}</span>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" style={{ transform: projectsExpanded ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>
                  <path d="M1 1L6 6L11 1" stroke="#F8F1CD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {projectsExpanded && (
                <div style={{ display: "flex", flexDirection: "column", paddingLeft: "39px", paddingTop: "8px", paddingBottom: "8px", gap: "8px" }}>
                  {dropdownCategories.map((cat) => (
                    <NavLink key={cat.to} to={cat.to} onClick={() => { setMenuOpen(false); setProjectsExpanded(false); }} style={{ fontFamily: "'Inter', sans-serif", fontSize: "24px", color: "#F8F1CD", textDecoration: "none", padding: "4px 0" }}>
                      {currentLang === "en" ? cat.labelEn : cat.labelEs}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            <NavLink to="/services" onClick={() => { setMenuOpen(false); setProjectsExpanded(false); }} style={{ fontFamily: "'Inter', sans-serif", fontSize: "36px", color: "#F8F1CD", textDecoration: "none", padding: "8px 0" }}>
              {currentLang === "en" ? "Services" : "Servicios"}
            </NavLink>
            <NavLink to="/about" onClick={() => { setMenuOpen(false); setProjectsExpanded(false); }} style={{ fontFamily: "'Inter', sans-serif", fontSize: "36px", color: "#F8F1CD", textDecoration: "none", padding: "8px 0" }}>
              {currentLang === "en" ? "About Us" : "Quiénes Somos"}
            </NavLink>
            <NavLink to="/contact" onClick={() => { setMenuOpen(false); setProjectsExpanded(false); }} style={{ fontFamily: "'Inter', sans-serif", fontSize: "36px", color: "#F8F1CD", textDecoration: "none", padding: "8px 0" }}>
              {currentLang === "en" ? "Contact" : "Contacto"}
            </NavLink>
          </div>

          <div style={{ padding: "24px 26px 60px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex" }}>
              {["linkedin", "vimeo", "instagram", "imdb"].map((id) => (
                <a key={id} href={`https://${id}.com`} target="_blank" rel="noopener noreferrer" style={{ width: "57px", height: "62px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <SocialIconSVG id={id} color="#F8F1CD" />
                </a>
              ))}
            </div>
            <div style={{ display: "flex" }}>
              <button onClick={() => changeLanguage("es")} style={{ background: "none", border: "none", opacity: currentLang.startsWith("es") ? 1 : 0.6 }}>
                <img src="/assets/flag-mx.svg" alt="MX" style={{ width: "42px", height: "42px", borderRadius: "50%" }} />
              </button>
              <button onClick={() => changeLanguage("en")} style={{ background: "none", border: "none", opacity: currentLang.startsWith("en") ? 1 : 0.6 }}>
                <img src="/assets/flag-us.svg" alt="US" style={{ width: "42px", height: "42px", borderRadius: "50%" }} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}