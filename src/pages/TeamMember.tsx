import { useParams, useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

// ─── Team member data ────────────────────────────────────────────────
interface TeamMemberData {
  id: string;
  firstNameEs: string;
  firstNameEn: string;
  lastNameEs: string;
  lastNameEn: string;
  roleEs: string;
  roleEn: string;
  image: string;
  bioEs: string;
  bioEn: string;
  filmography: { image: string; titleEs: string; titleEn: string }[];
  featuredImage: string;
  cvUrlEs: string;
  cvUrlEn: string;
  awards: { titleEs: string; titleEn: string; roleEs: string; roleEn: string }[];
}

const MEMBERS: Record<string, TeamMemberData> = {
  hector: {
    id: "hector",
    firstNameEs: "HECTOR",
    firstNameEn: "HECTOR",
    lastNameEs: "IRUEGAS",
    lastNameEn: "IRUEGAS",
    roleEs: "DISEÑADOR DE PRODUCCIÓN & DIRECTOR DE ARTE",
    roleEn: "PRODUCTION DESIGNER & ART DIRECTOR",
    image: "/assets/team/hector.jpg",
    bioEs: "Nacido en Monterrey, México, en 1980, su formación como Ingeniero en Electrónica y Comunicaciones le dio una base analítica que hoy aplica al diseño cinematográfico. En 1999, como vocalista de la banda Superavión, dirigió el arte de su primer videoclip — y fue ahí donde descubrió que su verdadera pasión estaba detrás de cámara. Inmerso en la escena musical de Monterrey durante la Avanzada Regia, diseñó videoclips para bandas emblemáticas del movimiento como Panda, Jumbo, Chetes y Volován, así como para artistas como León Larregui, Belanova y Zoé, forjando una identidad visual que lo llevaría al cine.\n\nSu salto a la pantalla grande llegó como Director de Arte del cortometraje Victoria para Chino, dirigido por Cary Joji Fukunaga — pieza que fue seleccionada en Sundance, ganó un Student Academy Award y acumuló numerosos premios internacionales, antes de que Fukunaga dirigiera True Detective, Sin Nombre y James Bond: No Time to Die. Fue también Fukunaga quien lo presentó a Claudio \"Pache\" Contreras. Años después, esa conexión se convertiría en más de una década de colaboración y en la cofundación de Martillo Art Dept.\n\nInstalado en la Ciudad de México desde 2006, acumula más de dos décadas de trayectoria colaborando con directores como Peter Greenaway, Carlos Reygadas, Nick Cassavetes, Lucía Puenzo, Nicolás Puenzo, Kevin Spacey, Tim Burton, entre otros, así como con productores y diseñadores de producción de primer nivel. Su trabajo abarca también largometrajes, series, comerciales, cortometrajes e instalaciones artísticas nacionales e internacionales, con proyectos seleccionados en el Festival de Cannes y la Berlinale.\n\nBilingüe y viajero incansable, encuentra inspiración constante en la arquitectura, la cocina, los idiomas, la música y las culturas del mundo.",
    bioEn: "Born in Monterrey, Mexico, in 1980, his training as an Electronics and Communications Engineer gave him an analytical base that he applies today to film design. In 1999, as the lead singer of the band Superavión, he directed the art for their first music video — and it was there that he discovered that his true passion was behind the camera. Immersed in the Monterrey music scene during the Avanzada Regia, he designed video clips for emblematic bands of the movement such as Panda, Jumbo, Chetes and Volován, as well as for artists such as León Larregui, Belanova and Zoé, forging a visual identity that would take him to the cinema.\n\nHis leap to the big screen came as Art Director of the short film Victoria para Chino, directed by Cary Joji Fukunaga — a piece that was selected at Sundance, won a Student Academy Award and accumulated numerous international awards, before Fukunaga directed True Detective, Sin Nombre and James Bond: No Time to Die. It was also Fukunaga who introduced him to Claudio \"Pache\" Contreras. Years later, that connection would become more than a decade of collaboration and co-founding of Martillo Art Dept.\n\nSettled in Mexico City since 2006, he has more than two decades of experience collaborating with directors such as Peter Greenaway, Carlos Reygadas, Nick Cassavetes, Lucía Puenzo, Nicolás Puenzo, Kevin Spacey, Tim Burton, among others, as well as with top-level producers and production designers. His work also includes feature films, series, commercials, short films and national and international art installations, with projects selected at the Cannes Film Festival and the Berlinale.\n\nBilingual and a tireless traveler, he finds constant inspiration in the architecture, cuisine, languages, music, and cultures of the world.",
    filmography: [
      { image: "/assets/filmography/film-1.jpg", titleEs: "Proyecto 1", titleEn: "Project 1" },
      { image: "/assets/filmography/film-2.jpg", titleEs: "Proyecto 2", titleEn: "Project 2" },
      { image: "/assets/filmography/film-3.jpg", titleEs: "Proyecto 3", titleEn: "Project 3" },
      { image: "/assets/filmography/film-4.jpg", titleEs: "Proyecto 4", titleEn: "Project 4" },
      { image: "/assets/filmography/film-5.jpg", titleEs: "Proyecto 5", titleEn: "Project 5" },
      { image: "/assets/filmography/film-6.jpg", titleEs: "Proyecto 6", titleEn: "Project 6" },
    ],
    featuredImage: "/assets/team/hector-featured.jpg",
    cvUrlEs: "/assets/cvs/cv-hector-iruegas-es.pdf",
    cvUrlEn: "/assets/cvs/cv-hector-iruegas-en.pdf",
    awards: [
      { titleEs: "Nominación", titleEn: "Nomination", roleEs: "Rol Cargo o Area", roleEn: "Role or Area" },
      { titleEs: "Nominación", titleEn: "Nomination", roleEs: "Rol Cargo o Area", roleEn: "Role or Area" },
      { titleEs: "Nominación", titleEn: "Nomination", roleEs: "Rol Cargo o Area", roleEn: "Role or Area" },
      { titleEs: "Nominación", titleEn: "Nomination", roleEs: "Rol Cargo o Area", roleEn: "Role or Area" },
      { titleEs: "Nominación", titleEn: "Nomination", roleEs: "Rol Cargo o Area", roleEn: "Role or Area" },
      { titleEs: "Nominación", titleEn: "Nomination", roleEs: "Rol Cargo o Area", roleEn: "Role or Area" },
    ],
  },
  claudio: {
    id: "claudio",
    firstNameEs: "CLAUDIO",
    firstNameEn: "CLAUDIO",
    lastNameEs: "CONTRERAS",
    lastNameEn: "CONTRERAS",
    roleEs: "DISEÑADOR DE PRODUCCIÓN & DIRECTOR DE ARTE",
    roleEn: "PRODUCTION DESIGNER & ART DIRECTOR",
    image: "/assets/team/claudio.jpg",
    bioEs: "De formación autodidacta, comienza su carrera artística en el performance art con SDT (Sindicato Del Terror). Luego forma el grupo interdisciplinario Produkto MS (Mortem Shock), donde con un trabajo de instalación, fotografía y pintura titulado E=MC2, ganan el PREMIO NACIONAL DE ARTE JOVEN 1991 en la Feria de San Marcos, Aguascalientes.\n\nSu siguiente paso fue la dirección de arte del programa de terror La Hora Marcada y múltiples videoclips de la era dorada del rock mexicano: Maldita Vecindad, Caifanes, Fobia, Santa Sabina y Titán, así como artistas internacionales como Shakira, Morcheeba, Juanes, Fuji Kaze y Lady Gaga. A lo largo de su carrera profesional, \"Pache\" ha colaborado con directores de visiones tan disímiles como Álex de la Iglesia (Perdita Durango) y Jaime Humberto Hermosillo (De noche vienes Esmeralda, PREMIO ARIEL A MEJOR ESCENOGRAFÍA 1997), como Decorador.\n\nComo Director de Arte, trabajó con Francisco Vargas (El Violín, película multipremiada a nivel internacional) y Arturo Ripstein (La Perdición de los Hombres, CONCHA DE ORO en el Festival de San Sebastián 2000). Como Diseñador de Producción, con Cary Joji Fukunaga (Sin Nombre, premiada en el Festival de Sundance 2009), Nick Cassavetes (God Is a Bullet), Kevin Spacey (The Portal of Force) y Tim Burton (videoclip The Dead Dance).\n\nFue también Fukunaga quien lo presentó a Héctor \"Carry\" Iruegas. Lo que comenzó como una afinidad profesional se convirtió en más de una década de trabajo conjunto y, eventualmente, en la cofundación de Martillo Art Dept. Con 35 años de experiencia, para \"Pache\" el diseño de producción no es simplemente \"vestir\" un espacio: es construir un personaje más, darle vida al telón de fondo.",
    bioEn: "Self-taught, he began his artistic career in performance art with SDT (Sindicato Del Terror). Later he formed the interdisciplinary group Produkto MS (Mortem Shock), where with an installation, photography and painting work entitled E=MC2, they won the NATIONAL PRIZE FOR YOUNG ART 1991 at the San Marcos Fair, Aguascalientes.\n\nHis next step was the art direction of the horror show La Hora Marcada and multiple video clips from the golden era of Mexican rock: Maldita Vecindad, Caifanes, Fobia, Santa Sabina and Titán, as well as international artists such as Shakira, Morcheeba, Juanes, Fuji Kaze and Lady Gaga. Throughout his professional career, \"Pache\" has collaborated with directors of such dissimilar visions as Álex de la Iglesia (Perdita Durango) and Jaime Humberto Hermosillo (De noche vienes Esmeralda, ARIEL AWARD FOR BEST SET DESIGN 1997), as Decorator.\n\nAs Art Director, he worked with Francisco Vargas (El Violín) and Arturo Ripstein (La Perdición de los Hombres, GOLDEN SHELL at the 2000 San Sebastian Festival). As Production Designer, with Cary Joji Fukunaga (Sin Nombre, awarded at the 2009 Sundance Film Festival), Nick Cassavetes (God Is a Bullet), Kevin Spacey (The Portal of Force) and Tim Burton (music video The Dead Dance).\n\nIt was also Fukunaga who introduced him to Héctor \"Carry\" Iruegas. What began as a professional affinity turned into more than a decade of working together and, eventually, co-founding Martillo Art Dept. With 35 years of experience, for \"Pache\" production design is not simply \"dressing\" a space: it is building one more character, giving life to the backdrop.",
    filmography: [
      { image: "/assets/filmography/film-1.jpg", titleEs: "Proyecto 1", titleEn: "Project 1" },
      { image: "/assets/filmography/film-2.jpg", titleEs: "Proyecto 2", titleEn: "Project 2" },
      { image: "/assets/filmography/film-3.jpg", titleEs: "Proyecto 3", titleEn: "Project 3" },
      { image: "/assets/filmography/film-4.jpg", titleEs: "Proyecto 4", titleEn: "Project 4" },
      { image: "/assets/filmography/film-5.jpg", titleEs: "Proyecto 5", titleEn: "Project 5" },
      { image: "/assets/filmography/film-6.jpg", titleEs: "Proyecto 6", titleEn: "Project 6" },
    ],
    featuredImage: "/assets/team/claudio-featured.jpg",
    cvUrlEs: "/assets/cvs/cv-claudio-contreras-es.pdf",
    cvUrlEn: "/assets/cvs/cv-claudio-contreras-en.pdf",
    awards: [
      { titleEs: "Nominación", titleEn: "Nomination", roleEs: "Rol Cargo o Area", roleEn: "Role or Area" },
      { titleEs: "Nominación", titleEn: "Nomination", roleEs: "Rol Cargo o Area", roleEn: "Role or Area" },
      { titleEs: "Nominación", titleEn: "Nomination", roleEs: "Rol Cargo o Area", roleEn: "Role or Area" },
      { titleEs: "Nominación", titleEn: "Nomination", roleEs: "Rol Cargo o Area", roleEn: "Role or Area" },
      { titleEs: "Nominación", titleEn: "Nomination", roleEs: "Rol Cargo o Area", roleEn: "Role or Area" },
      { titleEs: "Nominación", titleEn: "Nomination", roleEs: "Rol Cargo o Area", roleEn: "Role or Area" },
    ],
  },
};


// ─── CSS ─────────────────────────────────────────────────────────────
const memberCSS = `
/* ── VER CV button animation (Uiverse by alexmaracinaru) ── */
.cta-cv {
  border: none;
  background: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
}
.cta-cv span {
  padding-bottom: 7px;
  letter-spacing: 4px;
  font-size: 18px;
  padding-right: 15px;
  text-transform: uppercase;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
}
.cta-cv svg {
  transform: translateX(-8px);
  transition: all 0.3s ease;
}
.cta-cv:hover svg {
  transform: translateX(0);
}
.cta-cv:active svg {
  transform: scale(0.9);
}
.hover-underline-cv {
  position: relative;
  color: #FFFFFF;
  padding-bottom: 20px;
}
.hover-underline-cv:after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #FB5000;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}
.cta-cv:hover .hover-underline-cv:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
.cta-cv:hover span {
  color: #FB5000;
}
.cta-cv:hover svg path {
  fill: #FB5000;
}

/* ── Tablet overrides (768–1199px) ── */
@media (min-width: 768px) and (max-width: 1199px) {
  .member-hero-name-block {
    left: 30px !important;
    top: 160px !important;
    width: 70% !important;
  }
  .member-hero-first,
  .member-hero-last {
    font-size: clamp(80px, 13vw, 180px) !important;
    line-height: clamp(80px, 13vw, 181px) !important;
  }
  .member-hero-role-block {
    right: 20px !important;
    top: 200px !important;
    width: 30% !important;
  }
  .member-hero-role-text {
    font-size: clamp(20px, 2.8vw, 48px) !important;
    line-height: 1.2 !important;
  }
  .member-bio-container {
    flex-direction: column !important;
    padding: 40px 40px 0 !important;
  }
  .member-bio-text {
    width: 100% !important;
    font-size: 18px !important;
    line-height: 26px !important;
  }
  .member-bio-photo {
    width: 100% !important;
    height: 420px !important;
  }
  .member-filmography-section {
    padding: 60px 40px 0 !important;
  }
  .member-filmography-title {
    font-size: 48px !important;
    line-height: 48px !important;
    margin-bottom: 48px !important;
  }
  .member-filmography-grid {
    flex-wrap: wrap !important;
    gap: 16px !important;
  }
  .member-film-card {
    width: calc(33.33% - 12px) !important;
    height: 180px !important;
    flex-shrink: 1 !important;
  }
  .member-awards-container {
    padding: 60px 40px 60px !important;
    flex-direction: column !important;
  }
  .member-featured-col {
    width: 100% !important;
  }
  .member-featured-img {
    width: 100% !important;
    height: 340px !important;
  }
  .member-strip-desktop {
    width: 100% !important;
  }
  .member-awards-list {
    width: 100% !important;
  }
  .member-award-title {
    font-size: 28px !important;
    line-height: 34px !important;
  }
  .member-award-role {
    font-size: 18px !important;
    line-height: 22px !important;
  }
}

@media (max-width: 767px) {
  .page-bg > div[aria-hidden="true"] {
    background-image: url(/assets/bg-gradient-dark-mobile.jpeg) !important;
    background-size: 100% auto !important;
    background-repeat: repeat-y !important;
    background-position: center top !important;
    background-attachment: scroll !important;
  }
}

/* Cobp dock for color strip */
.member-strip {
  display: flex;
  transform-style: preserve-3d;
  transform: perspective(1000px);
  align-items: flex-end;
}
.member-swatch {
  position: relative;
  flex-shrink: 0;
  flex-grow: 1;
  height: 76px;
  border: none;
  outline: none;
  background-color: var(--color);
  transition: 500ms cubic-bezier(0.175, 0.885, 0.32, 1.1);
  cursor: pointer;
  padding: 0;
  transform-origin: bottom center;
}
.member-swatch::before {
  position: absolute;
  content: attr(data-label);
  left: 50%;
  bottom: calc(100% + 8px);
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  line-height: 14px;
  font-weight: 500;
  transform: translateX(-50%);
  padding: 3px 8px;
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
.member-swatch:hover {
  transform: scaleY(1.5) scaleX(1.15);
  z-index: 99999;
  border-radius: 4px;
}
.member-swatch:hover::before { opacity: 1; visibility: visible; }
.member-swatch:active { transform: scaleY(1.35) scaleX(1.1); }
.member-swatch:hover + .member-swatch { transform: scaleY(1.3) scaleX(1.08); z-index: 9999; }
.member-swatch:hover + .member-swatch + .member-swatch { transform: scaleY(1.15) scaleX(1.04); z-index: 999; }
.member-swatch:has(+ .member-swatch:hover) { transform: scaleY(1.3) scaleX(1.08); z-index: 9999; }
.member-swatch:has(+ .member-swatch + .member-swatch:hover) { transform: scaleY(1.15) scaleX(1.04); z-index: 999; }

.member-strip-mobile {
  display: flex;
  transform-style: preserve-3d;
  transform: perspective(1000px);
  align-items: flex-end;
}
.member-swatch-mobile {
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
.member-swatch-mobile:hover {
  transform: scaleY(1.5) scaleX(1.15);
  z-index: 99999;
  border-radius: 4px;
}
.member-swatch-mobile:active {
  transform: scaleY(1.35) scaleX(1.1);
}
.member-swatch-mobile:hover + .member-swatch-mobile {
  transform: scaleY(1.3) scaleX(1.08);
  z-index: 9999;
}
.member-swatch-mobile:hover + .member-swatch-mobile + .member-swatch-mobile {
  transform: scaleY(1.15) scaleX(1.04);
  z-index: 999;
}
.member-swatch-mobile:has(+ .member-swatch-mobile:hover) {
  transform: scaleY(1.3) scaleX(1.08);
  z-index: 9999;
}
.member-swatch-mobile:has(+ .member-swatch-mobile + .member-swatch-mobile:hover) {
  transform: scaleY(1.15) scaleX(1.04);
  z-index: 999;
}
`;

// ─── Component ───────────────────────────────────────────────────────
export default function TeamMember() {
  const { memberId } = useParams<{ memberId: string }>();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const isEn = i18n.language.startsWith("en");

  const member = MEMBERS[memberId || ""];

  if (!member) {
    return (
      <div className="flex items-center justify-center" style={{ height: "100vh", backgroundColor: "#1b1b1b" }}>
        <div className="text-center">
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "24px", color: "#FBFEF9", marginBottom: "20px" }}>
            {isEn ? "Member not found" : "Miembro no encontrado"}
          </p>
          <button
            onClick={() => navigate("/about")}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "16px",
              color: "#FB5000",
              background: "none",
              border: "1px solid #FB5000",
              padding: "10px 24px",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            ← {isEn ? "Back to About" : "Volver a Quienes Somos"}
          </button>
        </div>
      </div>
    );
  }

  const firstName = isEn ? member.firstNameEn : member.firstNameEs;
  const lastName = isEn ? member.lastNameEn : member.lastNameEs;
  const role = isEn ? member.roleEn : member.roleEs;
  const bio = isEn ? member.bioEn : member.bioEs;

  const handleDownloadCV = () => {
    const url = isEn ? member.cvUrlEn : member.cvUrlEs;
    const link = document.createElement('a');
    link.href = url;
    link.download = url.split('/').pop() || 'cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <style>{memberCSS}</style>

      {/* MOBILE LAYOUT */}
      <div className="block md:hidden page-bg" style={{
        position: "relative",
        backgroundColor: "#1b1b1b",
        minHeight: "100vh",
        paddingBottom: "40px",
      }}>
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            backgroundColor: "#1b1b1b",
            backgroundImage: "url(/assets/bg-gradient-dark.jpeg)",
            backgroundSize: "cover",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            pointerEvents: "none",
          }}
        />

        {/* Name + Photo row */}
        <div style={{ padding: "116px 16px 0", display: "flex", gap: "0px", position: "relative", zIndex: 1 }}>
          {/* Left: Name + Role + Awards */}
          <div style={{ flex: 1, paddingTop: "16px" }}>
            {/* Name */}
            <h1 style={{
              fontFamily: "'Martillo Completa', sans-serif", fontWeight: 400,
              fontSize: "28px", lineHeight: "32px", color: "#FFFFFF", marginBottom: "20px",
            }}>
              {firstName} {lastName}
            </h1>

            {/* Role */}
            <p style={{
              fontFamily: "'Inter', sans-serif", fontWeight: 700,
              fontSize: "14px", lineHeight: "17px", color: "#FB5000", marginBottom: "16px",
            }}>
              {role}
            </p>

          </div>

          {/* Right: Photo */}
          <div style={{
            width: "214px", height: "319px", flexShrink: 0,
            backgroundColor: "#D9D9D9", overflow: "hidden",
          }}>
            <img src={member.image} alt={`${firstName} ${lastName}`}
              className="w-full h-full object-cover"
              onError={(e) => { e.currentTarget.style.display = "none"; }} />
          </div>
        </div>

        {/* Bio text */}
        <div style={{ padding: "32px 16px 0", position: "relative", zIndex: 1 }}>
          {bio.split("\n\n").map((paragraph, idx) => (
            <p key={idx} style={{
              fontFamily: "'Inter', sans-serif", fontWeight: 400,
              fontSize: "14px", lineHeight: "18px", color: "#FBFEF9",
              marginBottom: "16px",
            }}>
              {paragraph}
            </p>
          ))}
        </div>

        {/* Featured image with arrows */}
        <div style={{ padding: "24px 22px 0", position: "relative", zIndex: 1 }}>
          <div style={{
            position: "relative", width: "100%", aspectRatio: "385 / 268",
            backgroundColor: "#D9D9D9", overflow: "hidden", marginBottom: "16px",
          }}>
            <img src={member.featuredImage} alt="" className="w-full h-full object-cover"
              onError={(e) => { e.currentTarget.style.display = "none"; }} />
            <button style={{
              position: "absolute", left: "8px", top: "50%", transform: "translateY(-50%)",
              width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center",
              backgroundColor: "rgba(0,0,0,0.4)", borderRadius: "50%", border: "none", cursor: "pointer",
            }} aria-label="Previous">
              <svg width="22" height="21" viewBox="0 0 22 21" fill="none"><path d="M14 3L6 10.5L14 18" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <button style={{
              position: "absolute", right: "8px", top: "50%", transform: "translateY(-50%)",
              width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center",
              backgroundColor: "rgba(0,0,0,0.4)", borderRadius: "50%", border: "none", cursor: "pointer",
            }} aria-label="Next">
              <svg width="22" height="21" viewBox="0 0 22 21" fill="none"><path d="M8 3L16 10.5L8 18" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </div>

        </div>

        {/* Back button */}
        <div style={{ padding: "32px 16px 0", position: "relative", zIndex: 1 }}>
          <button
            onClick={() => navigate("/about")}
            style={{
              display: "flex", alignItems: "center", gap: "8px",
              fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "14px",
              color: "#FBFEF9", backgroundColor: "#1b1b1b", border: "1px solid #FBFEF9",
              padding: "10px 20px", borderRadius: "4px", cursor: "pointer",
              transition: "background-color 0.2s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#fb5000"; e.currentTarget.style.borderColor = "#fb5000"; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#1b1b1b"; e.currentTarget.style.borderColor = "#FBFEF9"; }}
          >
            ← {isEn ? "Back to About" : "Volver a Quienes Somos"}
          </button>
        </div>
      </div>

      {/* DESKTOP LAYOUT */}
      <div className="hidden md:block w-full">
      <div
        className="w-full page-bg"
        style={{
          position: "relative",
          backgroundColor: "#1b1b1b",
          paddingBottom: "80px",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            backgroundColor: "#1b1b1b",
            backgroundImage: "url(/assets/bg-gradient-dark.jpeg)",
            backgroundSize: "cover",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            pointerEvents: "none",
          }}
        />

        {/* ═══ HERO — 700px, Checker bg + giant name ═══
            Figma: Rectangle 39 with Checker.png + gradient overlay
            Name: Martillo Completa 180px, "DIRECTOR DE ARTE": Inter 55px bold
        */}
        <section
          className="relative w-full"
          style={{
            height: "700px",
            backgroundImage: "linear-gradient(180deg, rgba(102,102,102,0) 0%, rgba(0,0,0,0.2) 48.56%), url(/assets/Checker.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 1,
          }}
        >
          {/* Name — left aligned, large */}
          <div
            className="member-hero-name-block absolute flex flex-col items-start"
            style={{
              left: "50px",
              top: "200px",
              width: "884px",
              filter: "drop-shadow(0px 0px 30px rgba(0, 0, 0, 0.5))",
            }}
          >
            <span className="member-hero-first" style={{
              fontFamily: "'Martillo Completa', sans-serif",
              fontWeight: 400,
              fontSize: "180px",
              lineHeight: "181px",
              color: "#FBFEF9",
              width: "100%",
            }}>
              {firstName}
            </span>
            <span className="member-hero-last" style={{
              fontFamily: "'Martillo Completa', sans-serif",
              fontWeight: 400,
              fontSize: "180px",
              lineHeight: "181px",
              color: "#FBFEF9",
              width: "100%",
              textAlign: "right",
            }}>
              {lastName}
            </span>
          </div>

          {/* Role — anclado a la derecha para no encimarse con el nombre */}
          <div
            className="member-hero-role-block absolute"
            style={{
              right: "50px",
              top: "260px",
              width: "480px",
              textShadow: "0px 0px 30px rgba(0, 0, 0, 0.5)",
            }}
          >
            <span className="member-hero-role-text" style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 900,
              fontSize: "48px",
              lineHeight: "58px",
              color: "#FFFFFF",
              textAlign: "right",
              display: "block",
            }}>
              {role}
            </span>
          </div>
        </section>

        {/* ═══ GRADIENT OVERLAY — Figma Rectangle 41 ═══
            linear-gradient rotated 180deg:
            0% transparent → 79.81% solid black → 100% transparent
            Since it's rotated, actual = transparent top → solid ~80% → transparent bottom
        */}
        <div
          className="relative w-full"
          style={{
            backgroundImage: `linear-gradient(180deg,
              rgba(1, 1, 0, 0) 0%,
              rgba(1, 1, 0, 1) 20%,
              rgba(1, 1, 0, 1) 80%,
              rgba(0, 0, 0, 0) 100%
            )`,
            zIndex: 1,
          }}
        >

          {/* ═══ BIO SECTION ═══
              Figma: Text 770px left + Photo 543×814 right
          */}
          <div
            className="member-bio-container mx-auto flex"
            style={{ maxWidth: "1440px", width: "100%", padding: "0 50px", gap: "27px", position: "relative", zIndex: 1 }}
          >
            {/* Left: Bio text */}
            <div className="member-bio-text" style={{ width: "770px", flexShrink: 0 }}>
              {bio.split("\n\n").map((paragraph, idx) => (
                <p
                  key={idx}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: "25px",
                    lineHeight: "30px",
                    color: "#FFFFFF",
                    marginBottom: idx < bio.split("\n\n").length - 1 ? "30px" : "0",
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Right: Photo + VER CV */}
            <div
              className="member-bio-photo-col"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                flexShrink: 0,
                width: "543px",
              }}
            >
              <div
                style={{
                  width: "543px",
                  height: "814px",
                  backgroundColor: "#D9D9D9",
                  overflow: "hidden",
                }}
              >
                <img
                  src={member.image}
                  alt={`${firstName} ${lastName}`}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
              </div>

              {/* VER CV — aligned bottom-right of photo */}
              <button
                onClick={handleDownloadCV}
                className="cta-cv"
                style={{ marginTop: "17px" }}
              >
                <span className="hover-underline-cv">
                  {isEn ? "VIEW CV" : "VER CV"}
                </span>
                <svg
                  width="46"
                  height="16"
                  viewBox="0 0 46 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M45.7071 8.70711C46.0976 8.31658 46.0976 7.68342 45.7071 7.29289L39.3431 0.928932C38.9526 0.538408 38.3195 0.538408 37.9289 0.928932C37.5384 1.31946 37.5384 1.95262 37.9289 2.34315L43.5858 8L37.9289 13.6569C37.5384 14.0474 37.5384 14.6805 37.9289 15.0711C38.3195 15.4616 38.9526 15.4616 39.3431 15.0711L45.7071 8.70711ZM0 9H45V7H0V9Z"
                    fill="#FFFFFF"
                  />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
      </div>
    </>
  );
}