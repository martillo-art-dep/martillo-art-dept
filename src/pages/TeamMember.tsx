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

// ─── Color strip colors (Figma Cobp dock) ────────────────────────────
const COLOR_STRIP = [
  "#F8F1CD", "#FB5000", "#FFDA44", "#338AF3", "#00FF8C",
  "#C32F27", "#F80078", "#751A46", "#338AF3",
];

const COLOR_STRIP_MOBILE = [
  "#F8F1CD", "#FB5000", "#FFDA44", "#338AF3", "#00FF8C",
  "#C32F27", "#F80078", "#751A46", "#338AF3",
];

// ─── CSS ─────────────────────────────────────────────────────────────
const memberCSS = `
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

  return (
    <>
      <style>{memberCSS}</style>

      {/* MOBILE LAYOUT */}
      <div className="block md:hidden" style={{
        backgroundColor: "#1b1b1b",
        backgroundImage: "url(/assets/bg-gradient-dark.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        paddingBottom: "40px",
      }}>

        {/* Name + Photo row */}
        <div style={{ padding: "116px 16px 0", display: "flex", gap: "0px" }}>
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

            {/* Awards mini list */}
            <div style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
              {member.awards.slice(0, 4).map((award, idx) => (
                <div key={idx} style={{
                  display: "flex", alignItems: "center", gap: "8px",
                }}>
                  <img src="/assets/galardones.svg" alt="Award" style={{ width: "24px", height: "22px", objectFit: "contain" }} />
                  <span style={{
                    fontFamily: "'Inter', sans-serif", fontWeight: 400,
                    fontSize: "11px", lineHeight: "14px", color: "#FFFFFF",
                  }}>
                    {isEn ? award.titleEn : award.titleEs}
                  </span>
                </div>
              ))}
            </div>
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
        <div style={{ padding: "32px 16px 0" }}>
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
        <div style={{ padding: "24px 22px 0" }}>
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

          {/* Filmography label */}
          <h3 style={{
            fontFamily: "'Martillo Completa', sans-serif", fontWeight: 400,
            fontSize: "18px", lineHeight: "22px", color: "#FFFFFF",
            marginBottom: "12px", textAlign: "center",
          }}>
            {isEn ? "FEATURED FILMOGRAPHY" : "FILMOGRAFIA DESTACADA"}
          </h3>

          {/* Color dock strip */}
          <div className="member-strip-mobile" style={{ marginTop: "12px", paddingBottom: "16px" }}>
            {COLOR_STRIP_MOBILE.map((color, idx) => (
              <button
                key={`m-swatch-${idx}`}
                className="member-swatch-mobile"
                style={{ "--color": color } as React.CSSProperties}
              />
            ))}
          </div>
        </div>

        {/* Back button */}
        <div style={{ padding: "32px 16px 0" }}>
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
      <div className="hidden md:block">
      <div
        className="w-full"
        style={{
          backgroundColor: "#1b1b1b",
          backgroundImage: "url(/assets/bg-gradient-dark.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >

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
          }}
        >
          {/* Name — left aligned, large */}
          <div
            className="absolute flex flex-col items-start"
            style={{
              left: "50px",
              top: "200px",
              width: "884px",
              filter: "drop-shadow(0px 0px 30px rgba(0, 0, 0, 0.5))",
            }}
          >
            <span style={{
              fontFamily: "'Martillo Completa', sans-serif",
              fontWeight: 400,
              fontSize: "180px",
              lineHeight: "181px",
              color: "#FBFEF9",
              width: "100%",
            }}>
              {firstName}
            </span>
            <span style={{
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
            className="absolute"
            style={{
              right: "50px",
              top: "260px",
              width: "480px",
              textShadow: "0px 0px 30px rgba(0, 0, 0, 0.5)",
            }}
          >
            <span style={{
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
          }}
        >

          {/* ═══ BIO SECTION ═══
              Figma: Text 770px left + Photo 543×814 right
          */}
          <div
            className="mx-auto flex"
            style={{ maxWidth: "1440px", padding: "0 50px", gap: "27px" }}
          >
            {/* Left: Bio text */}
            <div style={{ width: "770px", flexShrink: 0 }}>
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

            {/* Right: Photo */}
            <div
              style={{
                width: "543px",
                height: "814px",
                backgroundColor: "#D9D9D9",
                flexShrink: 0,
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
          </div>

          {/* ═══ FILMOGRAPHY ═══
              Figma: Title 72px + 6 thumbnails (201×302, gap 27px)
          */}
          <div className="mx-auto" style={{ maxWidth: "1440px", padding: "80px 50px 0" }}>
            <h2 style={{
              fontFamily: "'Martillo Completa', sans-serif",
              fontWeight: 400,
              fontSize: "72px",
              lineHeight: "72px",
              color: "#FFFFFF",
              marginBottom: "76px",
            }}>
              {isEn ? "FEATURED FILMOGRAPHY" : "FILMOGRAFIA DESTACADA"}
            </h2>

            <div className="flex" style={{ gap: "27px" }}>
              {member.filmography.map((film, idx) => (
                <div
                  key={idx}
                  style={{
                    width: "201px",
                    height: "302px",
                    backgroundColor: "#D9D9D9",
                    flexShrink: 0,
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={film.image}
                    alt={isEn ? film.titleEn : film.titleEs}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ═══ AWARDS + FEATURED IMAGE ═══
              Figma: Left side = featured image (770×513) + color strip (770×76)
                     Right side = 6 award rows (543px wide)
          */}
          <div
            className="mx-auto flex"
            style={{ maxWidth: "1440px", padding: "80px 50px 80px", gap: "27px" }}
          >
            {/* Left: Featured image + color strip */}
            <div style={{ width: "770px", flexShrink: 0 }}>
              {/* Featured image */}
              <div
                style={{
                  width: "770px",
                  height: "513px",
                  backgroundColor: "#D9D9D9",
                  overflow: "hidden",
                  marginBottom: "49px",
                }}
              >
                <img
                  src={member.featuredImage}
                  alt=""
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
              </div>

              {/* Color strip — Cobp dock effect */}
              <div
                className="member-strip"
                style={{ width: "770px" }}
              >
                {COLOR_STRIP.map((color, idx) => (
                  <button
                    key={idx}
                    className="member-swatch"
                    style={{ "--color": color } as React.CSSProperties}
                    data-label={color}
                    aria-label={color}
                  />
                ))}
              </div>
            </div>

            {/* Right: Awards list */}
            <div className="flex flex-col" style={{ width: "543px", gap: "19px" }}>
              {member.awards.map((award, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between"
                  style={{ height: "90px" }}
                >
                  <div className="flex flex-col">
                    <span style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      fontSize: "40px",
                      lineHeight: "48px",
                      color: "#FFFFFF",
                    }}>
                      {isEn ? award.titleEn : award.titleEs}
                    </span>
                    <span style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 300,
                      fontSize: "24px",
                      lineHeight: "29px",
                      color: "#FFFFFF",
                    }}>
                      {isEn ? award.roleEn : award.roleEs}
                    </span>
                  </div>
                  <img
                    src="/assets/galardones.svg"
                    alt="Award"
                    style={{ width: "87px", height: "80px", objectFit: "contain" }}
                  />
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