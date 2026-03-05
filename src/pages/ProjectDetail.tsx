import { useParams, useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { getProjectById } from "../data/projects";

// ─── Gallery Color Strip Colors (Figma spec) ────────────────────────
const COLOR_STRIP = [
  "#F8F1CD", "#FB5000", "#FFDA44", "#338AF3", "#00FF8C",
  "#C32F27", "#F80078", "#751A46", "#338AF3", "#F80078",
  "#F8F1CD", "#FB5000", "#FFDA44",
];

// ─── CSS ─────────────────────────────────────────────────────────────
const dockCSS = `
/* ── Desktop dock effect ── */
.gallery-strip {
  display: flex;
  transform-style: preserve-3d;
  transform: perspective(1000px);
  align-items: flex-end;
}
.color-swatch {
  position: relative;
  flex-shrink: 0;
  width: calc(1340px / 13);
  height: 107px;
  border: none;
  outline: none;
  background-color: var(--color);
  transition: 500ms cubic-bezier(0.175, 0.885, 0.32, 1.1);
  cursor: pointer;
  padding: 0;
  transform-origin: bottom center;
}
.color-swatch::before {
  position: absolute;
  content: attr(data-label);
  left: 50%;
  bottom: calc(100% + 10px);
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  line-height: 16px;
  font-weight: 500;
  transform: translateX(-50%);
  padding: 4px 10px;
  background-color: #ffffff;
  color: #1b1b1b;
  border-radius: 6px;
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
  white-space: nowrap;
  z-index: 100000;
  transition: 500ms cubic-bezier(0.175, 0.885, 0.32, 1.1);
}
.color-swatch:hover {
  transform: scaleY(1.5) scaleX(1.15);
  z-index: 99999;
  border-radius: 4px;
}
.color-swatch:hover::before {
  opacity: 1;
  visibility: visible;
}
.color-swatch:active {
  transform: scaleY(1.35) scaleX(1.1);
}
.color-swatch:hover + .color-swatch {
  transform: scaleY(1.3) scaleX(1.08);
  z-index: 9999;
}
.color-swatch:hover + .color-swatch + .color-swatch {
  transform: scaleY(1.15) scaleX(1.04);
  z-index: 999;
}
.color-swatch:has(+ .color-swatch:hover) {
  transform: scaleY(1.3) scaleX(1.08);
  z-index: 9999;
}
.color-swatch:has(+ .color-swatch + .color-swatch:hover) {
  transform: scaleY(1.15) scaleX(1.04);
  z-index: 999;
}

/* ── Mobile dock color strip ── */
.gallery-strip-mobile {
  display: flex;
  transform-style: preserve-3d;
  transform: perspective(1000px);
  align-items: flex-end;
}
.color-swatch-mobile {
  position: relative;
  flex-shrink: 0;
  flex: 1 1 0;
  min-width: 0;
  height: 55px;
  border: none;
  outline: none;
  background-color: var(--color);
  transition: 500ms cubic-bezier(0.175, 0.885, 0.32, 1.1);
  cursor: pointer;
  padding: 0;
  transform-origin: bottom center;
}
.color-swatch-mobile:hover {
  transform: scaleY(1.5) scaleX(1.15);
  z-index: 99999;
  border-radius: 4px;
}
.color-swatch-mobile:active {
  transform: scaleY(1.35) scaleX(1.1);
}
.color-swatch-mobile:hover + .color-swatch-mobile {
  transform: scaleY(1.3) scaleX(1.08);
  z-index: 9999;
}
.color-swatch-mobile:hover + .color-swatch-mobile + .color-swatch-mobile {
  transform: scaleY(1.15) scaleX(1.04);
  z-index: 999;
}
.color-swatch-mobile:has(+ .color-swatch-mobile:hover) {
  transform: scaleY(1.3) scaleX(1.08);
  z-index: 9999;
}
.color-swatch-mobile:has(+ .color-swatch-mobile + .color-swatch-mobile:hover) {
  transform: scaleY(1.15) scaleX(1.04);
  z-index: 999;
}
`;

// ─── Laurel SVG (87x80px per Figma) ─────────────────────────────────
function LaurelIcon({ size = 87 }: { size?: number }) {
  return (
    <img
      src="/assets/galardones.svg"
      alt="Award"
      style={{ width: `${size}px`, height: `${Math.round(size * 80 / 87)}px`, objectFit: "contain" }}
    />
  );
}

// ─── Page Component ──────────────────────────────────────────────────
export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const project = id ? getProjectById(id) : undefined;

  // 404
  if (!project) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center" style={{ backgroundColor: "#1b1b1b" }}>
        <p style={{ fontFamily: "'Martillo Completa', sans-serif", fontSize: "36px", color: "#f8f1cd", marginBottom: "24px", textAlign: "center", padding: "0 24px" }}>
          {currentLang.startsWith("en") ? "PROJECT NOT FOUND" : "PROYECTO NO ENCONTRADO"}
        </p>
        <button
          onClick={() => navigate("/portfolio")}
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "18px", color: "#fb5000", background: "none", border: "2px solid #fb5000", padding: "12px 32px", borderRadius: "4px", cursor: "pointer" }}
        >
          {currentLang.startsWith("en") ? "Back to Projects" : "Volver a Proyectos"}
        </button>
      </div>
    );
  }

  // Build credits
  const allCredits = [
    { role: currentLang.startsWith("en") ? "Original Title" : "Titulo Original", value: project.originalTitle },
    ...project.credits.map((c) => ({ role: c.role, value: c.name })),
    { role: currentLang.startsWith("en") ? "Year" : "Año", value: String(project.year) },
    { role: currentLang.startsWith("en") ? "Duration" : "Duración", value: project.duration },
    { role: currentLang.startsWith("en") ? "Genre" : "Género", value: project.genre },
  ];

  return (
    <>
      <style>{dockCSS}</style>

      {/* ════════════════════════════════════════════════════════════════
          MOBILE LAYOUT (< 768px) — Figma wireframe: 430×1425px
          Background: #DBDBDB with hero gradient overlay
          ════════════════════════════════════════════════════════════════ */}
      <div className="block md:hidden" style={{
        backgroundColor: "#1b1b1b",
        backgroundImage: "url(/assets/bg-gradient-dark.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        paddingBottom: "40px",
      }}>

        {/* ═══ HERO — Figma: 430×347px with gradient ═══ */}
        <section className="relative w-full overflow-hidden" style={{ height: "347px" }}>
          <div className="absolute inset-0" style={{
            backgroundImage: `url(${project.heroImage})`,
            backgroundSize: "cover", backgroundPosition: "center", backgroundColor: "#333",
          }} />
          <div className="absolute inset-0" style={{
            background: "linear-gradient(180deg, #000000 0%, rgba(0,0,0,0.5) 42.79%, rgba(0,0,0,0) 100%)",
          }} />
        </section>

        {/* ═══ TITLE + SUBTITLE — overlapping hero ═══
            Figma: left:24px, top:196px → negative margin from 347px hero = -151px */}
        <div style={{
          position: "relative", marginTop: "-151px", padding: "0 24px", zIndex: 10, marginBottom: "14px",
        }}>
          {/* Title — Figma: 383×50px white rect = full-width title */}
          <h1 style={{
            fontFamily: "'Martillo Completa', sans-serif", fontWeight: 400,
            fontSize: "32px", lineHeight: "38px", color: "#FFFFFF",
            marginBottom: "16px", textShadow: "0 2px 8px rgba(0,0,0,0.6)",
          }}>
            {project.title}
          </h1>
          {/* Subtitle — Figma: 172×50px = shorter text */}
          <p style={{
            fontFamily: "'Inter', sans-serif", fontWeight: 700,
            fontSize: "18px", lineHeight: "22px", color: "#FFFFFF",
            textShadow: "0 2px 6px rgba(0,0,0,0.5)",
          }}>
            {project.subtitle}
          </p>
        </div>

        {/* ═══ CONTENT AREA — padding 24px ═══ */}
        <div style={{ padding: "0 24px" }}>

          {/* ── Trailer — Figma: 383×163px with "TRAILER" overlay ── */}
          <div style={{
            position: "relative", width: "100%", aspectRatio: "383 / 163",
            backgroundColor: "#333", overflow: "hidden", marginBottom: "16px",
          }}>
            <img
              src={project.trailerImage || project.posterImage}
              alt={project.title}
              className="block w-full h-full object-cover"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
            {project.trailerImage && (
              <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                <span style={{
                  fontFamily: "'Inter', sans-serif", fontSize: "16px", lineHeight: "19px",
                  fontWeight: 400, color: "#000000", textAlign: "center",
                }}>
                  TRAILER
                </span>
              </div>
            )}
          </div>

          {/* ── Sinopsis text — Figma: 383px wide, 7 text lines ── */}
          <div style={{ marginBottom: "24px" }}>
            <p style={{
              fontFamily: "'Helvetica', 'Arial', sans-serif", fontWeight: 400,
              fontSize: "14px", lineHeight: "18px", color: "#FBFEF9", textAlign: "justify",
            }}>
              {currentLang.startsWith("en") ? (project.synopsisEn || project.synopsis) : project.synopsis}
            </p>
          </div>

          {/* ── Credits — Figma: 2 columns of 172px each, 4 rows, gap 13px ──
              left col at x:24, right col at x:235 → gap = 235-24-172 = 39px */}
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: "13px 39px",
            marginBottom: "32px",
          }}>
            {allCredits.map((c, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column" }}>
                <span style={{
                  fontFamily: "'Inter', sans-serif", fontWeight: 700,
                  fontSize: "12px", lineHeight: "15px", color: "#FFFFFF",
                  marginBottom: "2px",
                }}>
                  {c.role}
                </span>
                <span style={{
                  fontFamily: "'Inter', sans-serif", fontWeight: 300,
                  fontSize: "12px", lineHeight: "15px", color: "#FBFEF9",
                }}>
                  {c.value}
                </span>
              </div>
            ))}
          </div>

          {/* ── Logos (if any) ── */}
          {project.logos.length > 0 && (
            <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "32px", flexWrap: "wrap" }}>
              {project.logos.map((l, i) => (
                <img key={i} src={l.src} alt={l.alt} style={{ height: "40px", objectFit: "contain" }} />
              ))}
            </div>
          )}

          {/* ── Nominations ── */}
          {project.nominations.length > 0 && (
            <div style={{ marginBottom: "32px" }}>
              {project.nominations.map((nom, i) => (
                <div key={i} style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  marginBottom: "12px",
                }}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "18px", lineHeight: "22px", color: "#FFFFFF" }}>
                      {nom.title}
                    </span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "13px", lineHeight: "16px", color: "#FBFEF9" }}>
                      {nom.area}
                    </span>
                  </div>
                  <LaurelIcon size={50} />
                </div>
              ))}
            </div>
          )}

          {/* ── Design text ── */}
          <div style={{ marginBottom: "32px" }}>
            <h2 style={{
              fontFamily: "'Martillo Completa', sans-serif", fontWeight: 400,
              fontSize: "24px", lineHeight: "28px", color: "#FFFFFF", marginBottom: "12px",
            }}>
              {project.subtitle}
            </h2>
            <p style={{
              fontFamily: "'Helvetica', 'Arial', sans-serif", fontWeight: 400,
              fontSize: "14px", lineHeight: "18px", color: "#FBFEF9", textAlign: "justify",
            }}>
              {currentLang.startsWith("en") ? (project.productionDesignTextEn || project.productionDesignText) : project.productionDesignText}
            </p>
          </div>

          {/* ═══ GALLERIES ═══ */}
          {project.galleries.map((gallery, gi) => (
            <div key={gi} style={{ marginBottom: "32px" }}>
              <h3 style={{
                fontFamily: "'Martillo Completa', sans-serif", fontWeight: 400,
                fontSize: "20px", lineHeight: "23px", color: "#FFFFFF",
                marginBottom: "8px",
              }}>
                {gallery.title}
              </h3>

              {/* Main image */}
              <div style={{ width: "100%", aspectRatio: "383 / 255", backgroundColor: "#555", overflow: "hidden", marginBottom: "8px" }}>
                {gallery.images[0] && (
                  <img
                    src={gallery.images[0]}
                    alt={`${gallery.title} main`}
                    className="block w-full h-full object-cover"
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                )}
              </div>

              {/* Color dock strip */}
              <div className="gallery-strip-mobile" style={{ paddingBottom: "20px" }}>
                {COLOR_STRIP.map((color, i) => (
                  <button
                    key={`mstrip-${gi}-${i}`}
                    className="color-swatch-mobile"
                    style={{ "--color": color } as React.CSSProperties}
                  />
                ))}
              </div>
            </div>
          ))}

          {/* ── Back button ── */}
          <button
            onClick={() => navigate("/portfolio")}
            style={{
              display: "flex", alignItems: "center", gap: "8px",
              fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "14px",
              color: "#FBFEF9", backgroundColor: "#1b1b1b", border: "none",
              padding: "12px 24px", borderRadius: "4px", cursor: "pointer",
              marginBottom: "40px", transition: "background-color 0.2s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#fb5000"; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#1b1b1b"; }}
          >
            ← {currentLang.startsWith("en") ? "Back to Projects" : "Volver a Proyectos"}
          </button>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════════
          DESKTOP LAYOUT (≥ 768px) — Original, untouched
          ════════════════════════════════════════════════════════════════ */}
      <div className="hidden md:block">
        <div
          className="w-full"
          style={{
            backgroundColor: "#1b1b1b",
            backgroundImage: "url(/assets/bg-gradient-dark.jpeg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            paddingBottom: "200px",
          }}
        >
          {/* ═══ HERO: 1440 x 648 ═══ */}
          <section className="relative w-full" style={{ height: "648px", overflow: "hidden" }}>
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${project.heroImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "#333",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to top, rgba(27,27,27,0.8) 0%, rgba(27,27,27,0.2) 50%, transparent 100%)",
              }}
            />
            <div className="absolute" style={{ maxWidth: "1440px", width: "100%", left: "50%", transform: "translateX(-50%)" }}>
              <h1
                style={{
                  position: "absolute", left: "50px", top: "334px",
                  fontFamily: "'Martillo Completa', sans-serif",
                  fontSize: "128px", lineHeight: "128px", fontWeight: 400, color: "#1B2021",
                }}
              >
                {project.title}
              </h1>
              <p
                style={{
                  position: "absolute", left: "737px", top: "404px",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "48px", lineHeight: "58px", fontWeight: 700, color: "#1B2021",
                }}
              >
                {project.subtitle}
              </p>
            </div>
          </section>

          {/* ═══ TECH SHEET + TRAILER ═══ */}
          <section
            className="mx-auto"
            style={{
              maxWidth: "1440px", padding: "45px 50px 0",
              display: "grid", gridTemplateColumns: "543px 1fr", gap: "27px",
            }}
          >
            {/* Credits */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {allCredits.map((c, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "27px" }}>
                  <span style={{ width: "315px", flexShrink: 0, fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "24px", lineHeight: "29px", textAlign: "right", color: "#FFFFFF" }}>
                    {c.role}:
                  </span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "20px", lineHeight: "24px", color: "#FFFFFF" }}>
                    {c.value}
                  </span>
                </div>
              ))}
              {project.logos.length > 0 && (
                <div style={{ display: "flex", alignItems: "center", gap: "27px", marginTop: "20px" }}>
                  <div style={{ width: "315px", flexShrink: 0 }}>
                    {project.logos[0] && <img src={project.logos[0].src} alt={project.logos[0].alt} style={{ height: "98px", objectFit: "contain" }} />}
                  </div>
                  <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                    {project.logos.slice(1).map((l, i) => (
                      <img key={i} src={l.src} alt={l.alt} style={{ height: "73px", objectFit: "contain" }} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Trailer */}
            <div className="relative overflow-hidden" style={{ width: "770px", height: "513px", backgroundColor: "#333" }}>
              <img
                src={project.trailerImage || project.posterImage}
                alt={project.title}
                className="block w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
              {project.trailerImage && (
                <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                  <span style={{ fontFamily: "'Helvetica', sans-serif", fontSize: "64px", lineHeight: "74px", fontWeight: 400, color: "#FFFFFF" }}>
                    TRAILER
                  </span>
                </div>
              )}
            </div>
          </section>

          {/* ═══ NOMINATIONS + SINOPSIS + DESIGN TEXT ═══ */}
          <section
            className="mx-auto"
            style={{
              maxWidth: "1440px", padding: "60px 50px 0",
              display: "grid", gridTemplateColumns: "545px 1fr", gap: "25px", alignItems: "start",
            }}
          >
            {/* Nominations */}
            <div style={{ display: "flex", flexDirection: "column", gap: "19px" }}>
              {project.nominations.map((nom, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "row-reverse", justifyContent: "space-between", alignItems: "center", height: "80px" }}>
                  <LaurelIcon />
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "40px", lineHeight: "48px", color: "#FFFFFF" }}>{nom.title}</span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "24px", lineHeight: "29px", color: "#FFFFFF" }}>{nom.area}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Text blocks */}
            <div style={{ padding: "0 50px", display: "flex", flexDirection: "column", gap: "48px" }}>
              <div>
                <h2 style={{ fontFamily: "'Martillo Completa', sans-serif", fontWeight: 400, fontSize: "48px", lineHeight: "48px", color: "#FFFFFF", marginBottom: "24px" }}>
                  {currentLang.startsWith("en") ? "SYNOPSIS" : "SINOPSIS"}
                </h2>
                <p style={{ fontFamily: "'Helvetica', 'Arial', sans-serif", fontWeight: 400, fontSize: "20px", lineHeight: "23px", textAlign: "justify", color: "#FBFEF9" }}>
                  {currentLang.startsWith("en") ? (project.synopsisEn || project.synopsis) : project.synopsis}
                </p>
              </div>
              <div>
                <h2 style={{ fontFamily: "'Martillo Completa', sans-serif", fontWeight: 400, fontSize: "48px", lineHeight: "48px", color: "#FFFFFF", marginBottom: "24px" }}>
                  {project.subtitle}
                </h2>
                <p style={{ fontFamily: "'Helvetica', 'Arial', sans-serif", fontWeight: 400, fontSize: "20px", lineHeight: "23px", textAlign: "justify", color: "#FBFEF9" }}>
                  {currentLang.startsWith("en") ? (project.productionDesignTextEn || project.productionDesignText) : project.productionDesignText}
                </p>
              </div>
            </div>
          </section>

          {/* ═══ GALLERIES WITH COBP DOCK STRIP ═══ */}
          {project.galleries.map((gallery, gi) => (
            <section
              key={gi}
              className="mx-auto"
              style={{
                maxWidth: "1440px", padding: "80px 50px 0",
                display: "flex", flexDirection: "column", gap: "20px",
              }}
            >
              <h2 style={{ fontFamily: "'Martillo Completa', sans-serif", fontWeight: 400, fontSize: "96px", lineHeight: "96px", color: "#FFFFFF" }}>
                {gallery.title}
              </h2>

              {/* Main image */}
              <div style={{ width: "100%", aspectRatio: "1340 / 894", backgroundColor: "#555", overflow: "hidden" }}>
                {gallery.images[0] && (
                  <img
                    src={gallery.images[0]}
                    alt={`${gallery.title} main`}
                    className="block w-full h-full object-cover"
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                )}
              </div>

              {/* ── Cobp Dock Color Strip ── */}
              <div className="gallery-strip" style={{ paddingBottom: "40px" }}>
                {COLOR_STRIP.map((color, i) => (
                  <button
                    key={`strip-${gi}-${i}`}
                    className="color-swatch"
                    style={{ "--color": color } as React.CSSProperties}
                    data-label={color}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
