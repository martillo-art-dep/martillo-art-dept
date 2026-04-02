import { useState } from "react";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

import SEO from "../components/SEO";

// ─── Data ────────────────────────────────────────────────────────────


const TEAM = [
  {
    id: "hector",
    name: "Héctor Iruegas",
    image: "/assets/team/hector-featured.jpg",
    bioEs: "Nacido en Monterrey, México, en 1980, su formación como Ingeniero en Electrónica y Comunicaciones le dio una base analítica que hoy aplica al diseño cinematográfico. En 1999, como vocalista de la banda Superavión, dirigió el arte de su primer videoclip — y fue ahí donde descubrió que su verdadera pasión estaba detrás de cámara.",
    bioEn: "Born in Monterrey, Mexico, in 1980, his training as an Electronics and Communications Engineer gave him an analytical base that he applies today to film design. In 1999, as the lead singer of the band Superavión, he directed the art for their first music video — and it was there that he discovered that his true passion was behind the camera.",
  },
  {
    id: "claudio",
    name: "Claudio Contreras",
    image: "/assets/team/claudio-featured.jpg",
    bioEs: "De formación autodidacta, comienza su carrera artística en el performance art con SDT (Sindicato Del Terror). Con 35 años de experiencia, para \"Pache\" el diseño de producción no es simplemente \"vestir\" un espacio: es construir un personaje más, darle vida al telón de fondo.",
    bioEn: "Self-taught, he began his artistic career in performance art with SDT (Sindicato Del Terror). With 35 years of experience, for \"Pache\" production design is not simply \"dressing\" a space: it is building one more character, giving life to the backdrop.",
  },
];

const HERO_IMAGES = [
  { left: "/assets/about/hero-left.jpg", right: "/assets/about/hero-right.jpg" },
  { left: "/assets/about/hero-right.jpg", right: "/assets/about/hero-left.jpg" },
];

// ─── CSS ─────────────────────────────────────────────────────────────
const aboutCSS = `
.about-gallery-strip {
  display: flex;
  transform-style: preserve-3d;
  transform: perspective(1000px);
  align-items: flex-end;
}
.about-color-swatch {
  position: relative;
  flex-shrink: 0;
  flex-grow: 1;
  height: 302px;
  border: none;
  outline: none;
  background-color: var(--color);
  transition: 500ms cubic-bezier(0.175, 0.885, 0.32, 1.1);
  cursor: pointer;
  padding: 0;
  transform-origin: bottom center;
}
.about-color-swatch::before {
  position: absolute;
  content: attr(data-label);
  left: 50%;
  bottom: calc(100% + 10px);
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  line-height: 18px;
  font-weight: 500;
  transform: translateX(-50%);
  padding: 4px 12px;
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
.about-color-swatch:hover { transform: scaleY(1.3) scaleX(1.15); z-index: 99999; border-radius: 4px; }
.about-color-swatch:hover::before { opacity: 1; visibility: visible; }
.about-color-swatch:active { transform: scaleY(1.2) scaleX(1.1); }
.about-color-swatch:hover + .about-color-swatch { transform: scaleY(1.2) scaleX(1.08); z-index: 9999; }
.about-color-swatch:hover + .about-color-swatch + .about-color-swatch { transform: scaleY(1.1) scaleX(1.04); z-index: 999; }
.about-color-swatch:has(+ .about-color-swatch:hover) { transform: scaleY(1.2) scaleX(1.08); z-index: 9999; }
.about-color-swatch:has(+ .about-color-swatch + .about-color-swatch:hover) { transform: scaleY(1.1) scaleX(1.04); z-index: 999; }

/* ── Tablet overrides (768–1199px) ── */
@media (min-width: 768px) and (max-width: 1199px) {
  .about-hero-title {
    font-size: 72px !important;
    line-height: 72px !important;
  }
  .about-history-row {
    flex-direction: column !important;
    padding: 40px 40px !important;
    gap: 32px !important;
  }
  .about-history-left {
    width: 100% !important;
    height: auto !important;
  }
  .about-history-title-abs {
    position: static !important;
    filter: none !important;
  }
  .about-history-title-abs h2 {
    font-size: 64px !important;
    line-height: 64px !important;
  }
  .about-history-text {
    max-width: 100% !important;
    font-size: 18px !important;
    line-height: 26px !important;
  }
  .about-team-row {
    flex-wrap: wrap !important;
    gap: 48px !important;
    justify-content: center !important;
  }
  .about-team-card {
    width: calc(50% - 24px) !important;
  }
  .about-team-photo {
    width: 100% !important;
    height: 420px !important;
  }
  .about-team-name {
    font-size: 56px !important;
    line-height: 56px !important;
  }
  .about-team-bio {
    font-size: 18px !important;
    line-height: 24px !important;
  }
  .about-section-title {
    font-size: 48px !important;
    line-height: 48px !important;
    margin-bottom: 40px !important;
  }
  .about-awards-row {
    flex-direction: column !important;
    gap: 24px !important;
  }
  .about-awards-col {
    width: 100% !important;
    max-width: 640px !important;
  }
  .about-award-title-text {
    font-size: 28px !important;
    line-height: 34px !important;
  }
  .about-award-role-text {
    font-size: 18px !important;
    line-height: 22px !important;
  }
  .about-color-swatch {
    height: 180px !important;
  }
}

@media (max-width: 767px) {
  .page-bg {
    background-image: url(/assets/bg-gradient-dark-mobile.jpeg) !important;
    background-size: 100% auto !important;
    background-repeat: repeat-y !important;
    background-position: center top !important;
  }
}

/* ── Mobile dock ── */
.about-strip-mobile {
  display: flex;
  transform-style: preserve-3d;
  transform: perspective(1000px);
  align-items: flex-end;
}
.about-swatch-mobile {
  position: relative;
  flex-shrink: 0;
  flex: 1 1 0;
  min-width: 0;
  height: 80px;
  border: none;
  outline: none;
  background-color: var(--color);
  transition: 500ms cubic-bezier(0.175, 0.885, 0.32, 1.1);
  cursor: pointer;
  padding: 0;
  transform-origin: bottom center;
}
.about-swatch-mobile:hover { transform: scaleY(1.5) scaleX(1.15); z-index: 99999; border-radius: 4px; }
.about-swatch-mobile:active { transform: scaleY(1.35) scaleX(1.1); }
.about-swatch-mobile:hover + .about-swatch-mobile { transform: scaleY(1.3) scaleX(1.08); z-index: 9999; }
.about-swatch-mobile:hover + .about-swatch-mobile + .about-swatch-mobile { transform: scaleY(1.15) scaleX(1.04); z-index: 999; }
.about-swatch-mobile:has(+ .about-swatch-mobile:hover) { transform: scaleY(1.3) scaleX(1.08); z-index: 9999; }
.about-swatch-mobile:has(+ .about-swatch-mobile + .about-swatch-mobile:hover) { transform: scaleY(1.15) scaleX(1.04); z-index: 999; }
`;

// ─── Arrow Icons ─────────────────────────────────────────────────────
function ArrowLeft() {
  return (
    <svg width="22" height="21" viewBox="0 0 22 21" fill="none">
      <path d="M14 3L6 10.5L14 18" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ArrowRight() {
  return (
    <svg width="22" height="21" viewBox="0 0 22 21" fill="none">
      <path d="M8 3L16 10.5L8 18" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ─── Component ───────────────────────────────────────────────────────
export default function About() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const isEn = i18n.language.startsWith("en");
const [heroIndex, setHeroIndex] = useState(0);

  const heroPrev = () => setHeroIndex((i) => (i === 0 ? HERO_IMAGES.length - 1 : i - 1));
  const heroNext = () => setHeroIndex((i) => (i === HERO_IMAGES.length - 1 ? 0 : i + 1));

  return (
    <>
      <SEO
        title="Nosotros"
        description="Conoce a Martillo Art Dept, equipo de diseño de producción y dirección de arte con más de 62 años de experiencia combinada en cine y entretenimiento."
        url="/about"
      />
      <style>{aboutCSS}</style>

      {/* ════════════════════════════════════════════════════════════════
          MOBILE LAYOUT (< 768px) — Figma wireframe: 430×1630px
          ════════════════════════════════════════════════════════════════ */}
      <div className="block md:hidden page-bg" style={{
        backgroundColor: "#1b1b1b",
        backgroundImage: "url(/assets/bg-gradient-dark.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "scroll",
        minHeight: "100vh",
      }}>

        {/* ═══ HERO CAROUSEL — Figma: 430×441px ═══ */}
        <section className="relative w-full" style={{ height: "441px", overflow: "hidden" }}>
          <div className="absolute inset-0 flex">
            <div className="w-1/2 h-full" style={{ backgroundColor: "#D9D9D9", overflow: "hidden" }}>
              <img src={HERO_IMAGES[heroIndex].left} alt="" className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.display = "none"; }} />
            </div>
            <div className="w-1/2 h-full" style={{ backgroundColor: "#D9D9D9", overflow: "hidden" }}>
              <img src={HERO_IMAGES[heroIndex].right} alt="" className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.display = "none"; }} />
            </div>
          </div>

          {/* Center logo — Figma: 142×142px */}
          <div className="absolute" style={{
            left: "50%", top: "139px", transform: "translateX(-50%)",
            width: "142px", height: "142px", backgroundColor: "#D9D9D9",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <img src="/assets/logo-martillo-black.png" alt="Martillo"
              style={{ width: "100px", height: "88px", objectFit: "contain" }}
              onError={(e) => { e.currentTarget.style.display = "none"; }} />
          </div>

          {/* Arrows — Figma: at top:209px */}
          <button onClick={heroPrev} className="absolute" style={{
            left: "12px", top: "209px", width: "36px", height: "36px",
            display: "flex", alignItems: "center", justifyContent: "center",
            backgroundColor: "rgba(255,255,255,0.7)", borderRadius: "50%", border: "none", cursor: "pointer", zIndex: 5,
          }} aria-label="Previous"><ArrowLeft /></button>
          <button onClick={heroNext} className="absolute" style={{
            right: "12px", top: "209px", width: "36px", height: "36px",
            display: "flex", alignItems: "center", justifyContent: "center",
            backgroundColor: "rgba(255,255,255,0.7)", borderRadius: "50%", border: "none", cursor: "pointer", zIndex: 5,
          }} aria-label="Next"><ArrowRight /></button>
        </section>

        {/* ═══ CONTENT ═══ */}
        <div style={{ padding: "24px 24px 40px" }}>

          {/* Title */}
          <h2 style={{
            fontFamily: "'Martillo Completa', sans-serif", fontWeight: 400,
            fontSize: "36px", lineHeight: "40px", color: "#FFFFFF", marginBottom: "16px",
          }}>
            {isEn ? "OUR HISTORY" : "NUESTRA HISTORIA"}
          </h2>

          {/* Description */}
          <p style={{
            fontFamily: "'Helvetica', 'Arial', sans-serif", fontWeight: 400,
            fontSize: "14px", lineHeight: "18px", color: "#FBFEF9", textAlign: "justify", marginBottom: "40px",
          }}>
            {isEn
              ? "A company specializing in production design and art direction for the entertainment industry. Hammer, we are the accurate blow that shapes chaos. In an industry where each production is a new challenge against the clock, experience is not improvised. If we add the years of professional career between the founding partners \"Carry\" and \"Pache\", we are at 62 years of combined trajectory. At Martillo, we conceive of our work as a modern forge craft. We believe that creativity without structure is just noise, and that soulless technology is just an obsolete tool. Martillo Art Dept. is the balance between the pulse of art and the weight of technique."
              : "Una empresa especializada en el diseño de producción y la dirección de arte para la industria del entretenimiento. Martillo, somos el golpe certero que da forma al caos. En una industria donde cada producción es un nuevo reto contra reloj, la experiencia no se improvisa. Si sumamos los años de carrera profesional entre los socios fundadores \"Carry\" y \"Pache\", estamos en los 62 años de trayectoria combinada. En Martillo, concebimos nuestro trabajo como un oficio de forja moderna. Creemos que la creatividad sin estructura es solo ruido, y que la tecnología sin alma es solo herramienta obsoleta. Martillo Art Dept. es el equilibrio entre el pulso del arte y el peso de la técnica."
            }
          </p>

          {/* ═══ TEAM — alternating layout ═══ */}
          {TEAM.map((member, idx) => {
            const imageRight = idx % 2 === 0;
            return (
              <div key={member.id} style={{ marginBottom: "40px" }}>
                <div style={{
                  display: "flex",
                  flexDirection: imageRight ? "row" : "row-reverse",
                  gap: "0px", marginBottom: "12px", minHeight: "269px",
                }}>
                  {/* Name side */}
                  <div style={{
                    flex: "1 1 0", display: "flex", alignItems: "flex-end",
                    padding: imageRight ? "0 12px 0 0" : "0 0 0 12px",
                  }}>
                    <h3 onClick={() => navigate(`/about/${member.id}`)} style={{
                      fontFamily: "'Martillo Completa', sans-serif", fontWeight: 400,
                      fontSize: "24px", lineHeight: "28px", color: "#FFFFFF", cursor: "pointer", width: "100%",
                    }}>
                      {member.name}
                    </h3>
                  </div>
                  {/* Photo — Figma: 191×269px */}
                  <div onClick={() => navigate(`/about/${member.id}`)} style={{
                    width: "191px", height: "269px", flexShrink: 0,
                    backgroundColor: "#D9D9D9", overflow: "hidden", cursor: "pointer",
                    transition: "transform 0.3s ease",
                  }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.02)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
                  >
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover"
                      onError={(e) => { e.currentTarget.style.display = "none"; }} />
                  </div>
                </div>
                {/* Bio */}
                <p style={{
                  fontFamily: "'Helvetica', 'Arial', sans-serif", fontWeight: 400,
                  fontSize: "14px", lineHeight: "18px", color: "#FBFEF9", textAlign: "justify",
                }}>
                  {isEn ? member.bioEn : member.bioEs}
                </p>
              </div>
            );
          })}

        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════════
          DESKTOP LAYOUT (≥ 768px) — Original, untouched
          ════════════════════════════════════════════════════════════════ */}
      <div className="hidden md:block">
        <div className="w-full page-bg" style={{
          backgroundColor: "#1b1b1b",
          backgroundImage: "url(/assets/bg-gradient-dark.jpeg)",
          backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed",
          paddingBottom: "80px",
        }}>
          {/* HERO */}
          <section className="relative w-full flex items-center justify-center" style={{ height: "700px", overflow: "hidden" }}>
            <div className="absolute inset-0 flex">
              <div className="w-1/2 h-full" style={{ backgroundColor: "#D9D9D9", overflow: "hidden" }}>
                <img src="/assets/about/hero-left.jpg" alt="" className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.style.display = "none"; }} />
              </div>
              <div className="w-1/2 h-full" style={{ backgroundColor: "#D9D9D9", overflow: "hidden" }}>
                <img src="/assets/about/hero-right.jpg" alt="" className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.style.display = "none"; }} />
              </div>
            </div>
            <div className="relative z-10 flex flex-col items-center" style={{ width: "484px" }}>
              <span className="about-hero-title" style={{ fontFamily: "'Martillo Completa', sans-serif", fontWeight: 400, fontSize: "120px", lineHeight: "120px", color: "#001011", display: "block", width: "100%", textAlign: "center" }}>MARTILLO</span>
              <span className="about-hero-title" style={{ fontFamily: "'Martillo Completa', sans-serif", fontWeight: 400, fontSize: "120px", lineHeight: "120px", color: "#001011", display: "block", width: "100%", textAlign: "center" }}>ART DEPT</span>
            </div>
          </section>

          {/* OUR HISTORY */}
          <div className="about-history-row mx-auto flex items-center" style={{ maxWidth: "1440px", width: "100%", padding: "63px 116px", gap: "51px" }}>
            <div className="about-history-left relative flex-shrink-0" style={{ width: "595px", height: "527px" }}>
              <img src="/assets/martillo-about.svg" alt="" className="absolute"
                style={{ top: "0", left: "0", width: "575px", height: "507px", objectFit: "contain", opacity: 0.2 }} />
              <div className="about-history-title-abs absolute" style={{ left: "83px", top: "163px", filter: "drop-shadow(0px 0px 8.9px rgba(0, 0, 0, 0.5))" }}>
                <h2 style={{ fontFamily: "'Martillo Completa', sans-serif", fontWeight: 400, fontSize: "100px", lineHeight: "100px", color: "#FFFFFF" }}>
                  {isEn ? "OUR" : "NUESTRA"}
                </h2>
                <h2 style={{ fontFamily: "'Martillo Completa', sans-serif", fontWeight: 400, fontSize: "100px", lineHeight: "100px", color: "#FFFFFF", marginLeft: "30px" }}>
                  {isEn ? "HISTORY" : "HISTORIA"}
                </h2>
              </div>
            </div>
            <div className="flex items-center" style={{ flex: 1, padding: "10px" }}>
              <p className="about-history-text" style={{ fontFamily: "'Helvetica', 'Arial', sans-serif", fontWeight: 400, fontSize: "24px", lineHeight: "28px", color: "#FBFEF9", maxWidth: "542px" }}>
                {isEn
                  ? "A company specializing in production design and art direction for the entertainment industry. Hammer, we are the accurate blow that shapes chaos. In an industry where each production is a new challenge against the clock, experience is not improvised. If we add the years of professional career between the founding partners \"Carry\" and \"Pache\", we are at 62 years of combined trajectory. At Martillo, we conceive of our work as a modern forge craft. We believe that creativity without structure is just noise, and that soulless technology is just an obsolete tool. Martillo Art Dept. is the balance between the pulse of art and the weight of technique."
                  : "Una empresa especializada en el diseño de producción y la dirección de arte para la industria del entretenimiento. Martillo, somos el golpe certero que da forma al caos. En una industria donde cada producción es un nuevo reto contra reloj, la experiencia no se improvisa. Si sumamos los años de carrera profesional entre los socios fundadores \"Carry\" y \"Pache\", estamos en los 62 años de trayectoria combinada. En Martillo, concebimos nuestro trabajo como un oficio de forja moderna. Creemos que la creatividad sin estructura es solo ruido, y que la tecnología sin alma es solo herramienta obsoleta. Martillo Art Dept. es el equilibrio entre el pulso del arte y el peso de la técnica."
                }
              </p>
            </div>
          </div>

          {/* GRADIENT OVERLAY section */}
          <div className="relative w-full" style={{
            backgroundImage: `linear-gradient(180deg, rgba(1,1,0,0) 0%, rgba(1,1,0,1) 28%, rgba(1,1,0,1) 68%, rgba(0,0,0,0) 100%)`,
          }}>
            {/* TEAM */}
            <div className="mx-auto" style={{ maxWidth: "1440px", width: "100%", padding: "60px 50px 0" }}>
              <div className="about-team-row flex justify-between" style={{ gap: "96px" }}>
                {TEAM.map((member, idx) => (
                  <div key={idx} className="about-team-card flex flex-col items-center" style={{ width: "620px", gap: "43px" }}>
                    <div className="about-team-photo" onClick={() => navigate(`/about/${member.id}`)} style={{
                      width: "620px", height: "775px", backgroundColor: "#D9D9D9", borderRadius: "20px",
                      overflow: "hidden", cursor: "pointer", transition: "transform 0.3s ease",
                    }}
                      onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.02)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
                    >
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover"
                        onError={(e) => { e.currentTarget.style.display = "none"; }} />
                    </div>
                    <h3 className="about-team-name" onClick={() => navigate(`/about/${member.id}`)} style={{
                      fontFamily: "'Martillo Completa', sans-serif", fontWeight: 400, fontSize: "90px",
                      lineHeight: "90px", textAlign: "center", color: "#FFFFFF", width: "100%", cursor: "pointer",
                    }}>
                      {member.name}
                    </h3>
                    <p className="about-team-bio" style={{
                      fontFamily: "'Helvetica', 'Arial', sans-serif", fontWeight: 400, fontSize: "25px",
                      lineHeight: "29px", textAlign: "justify", color: "#FFFFFF", width: "100%",
                    }}>
                      {isEn ? member.bioEn : member.bioEs}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}