import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useSearchParams } from "react-router";
import { getProjectCards, type ProjectCard } from "../data/projects";
import SEO from "../components/SEO";

// ─── Styles ──────────────────────────────────────────────────────────
const portfolioCSS = `
  @media (max-width: 767px) {
    .page-bg > div[aria-hidden="true"] {
      background-image: url(/assets/bg-gradient-dark-mobile.jpeg) !important;
      background-size: 100% auto !important;
      background-repeat: repeat-y !important;
      background-position: center top !important;
      background-attachment: scroll !important;
    }
  }

  .grid-card-image {
    position: relative;
    overflow: hidden;
  }

  /* Inset shadow vignette — Figma: box-shadow: 0 0 20px 0 rgba(0,0,0,0.50) inset */
  .grid-card-image::after {
    content: "";
    position: absolute;
    inset: 0;
    box-shadow: inset 0 0 20px 0 rgba(0, 0, 0, 0.5);
    pointer-events: none;
    z-index: 1;
    transition: box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* Hover: stronger inset shadow (edge blur effect), subtle scale */
  .grid-card:hover .grid-card-image::after {
    box-shadow: inset 0 0 40px 10px rgba(0, 0, 0, 0.65);
  }
  .grid-card:hover .grid-card-image img {
    transform: scale(1.03);
  }

  .grid-card-image img {
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* List card image */
  .list-card-image {
    position: relative;
    overflow: hidden;
  }
  .list-card-image::after {
    content: "";
    position: absolute;
    inset: 0;
    box-shadow: inset 0 0 15px 0 rgba(0, 0, 0, 0.4);
    pointer-events: none;
    z-index: 1;
    transition: box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .list-card:hover .list-card-image::after {
    box-shadow: inset 0 0 30px 8px rgba(0, 0, 0, 0.6);
  }
  .list-card:hover .list-card-image img {
    transform: scale(1.03);
  }
  .list-card-image img {
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

// ─── View Toggle Icons ───────────────────────────────────────────────
function GridIcon({ active }: { active: boolean }) {
  const c = active ? "#fb5000" : "#f8f1cd";
  return (
    <svg viewBox="0 0 55 55" fill="none" className="w-full h-full">
      <rect x="4" y="4" width="22" height="22" rx="2" fill={c} />
      <rect x="29" y="4" width="22" height="22" rx="2" fill={c} />
      <rect x="4" y="29" width="22" height="22" rx="2" fill={c} />
      <rect x="29" y="29" width="22" height="22" rx="2" fill={c} />
    </svg>
  );
}

function ListIcon({ active }: { active: boolean }) {
  const c = active ? "#fb5000" : "#f8f1cd";
  return (
    <svg viewBox="0 0 55 54" fill="none" className="w-full h-full">
      <rect x="4" y="4" width="12.5" height="12.5" rx="2" fill={c} />
      <rect x="20" y="4" width="31" height="12.5" rx="2" fill={c} />
      <rect x="4" y="20.5" width="12.5" height="12.5" rx="2" fill={c} />
      <rect x="20" y="20.5" width="31" height="12.5" rx="2" fill={c} />
      <rect x="4" y="37" width="12.5" height="12.5" rx="2" fill={c} />
      <rect x="20" y="37" width="31" height="12.5" rx="2" fill={c} />
    </svg>
  );
}

function ViewToggleButtons({
  viewMode,
  setViewMode,
  sizeClass,
}: {
  viewMode: "grid" | "list";
  setViewMode: (v: "grid" | "list") => void;
  sizeClass: string;
}) {
  return (
    <div className="flex items-center shrink-0" style={{ gap: "6px" }}>
      <button
        onClick={() => setViewMode("grid")}
        className="hover:opacity-80 transition-opacity"
        style={{
          padding: "3px",
          borderRadius: "4px",
          backgroundColor: viewMode === "grid" ? "rgba(255,255,255,0.1)" : "transparent",
        }}
        aria-label="Grid view"
        aria-pressed={viewMode === "grid"}
      >
        <div className={sizeClass}><GridIcon active={viewMode === "grid"} /></div>
      </button>
      <button
        onClick={() => setViewMode("list")}
        className="hover:opacity-80 transition-opacity"
        style={{
          padding: "3px",
          borderRadius: "4px",
          backgroundColor: viewMode === "list" ? "rgba(255,255,255,0.1)" : "transparent",
        }}
        aria-label="List view"
        aria-pressed={viewMode === "list"}
      >
        <div className={sizeClass}><ListIcon active={viewMode === "list"} /></div>
      </button>
    </div>
  );
}

// ─── Grid Card ───────────────────────────────────────────────────────
// Figma structure (Card Proyecto GRID):
//   NOMBRE PROYECTO  AÑO     ← title row on top
//   [image 429×286]           ← image with inset shadow
//   description text          ← below image
function GridCard({ project, lang, onClick }: { project: ProjectCard; lang: string; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <article
      className="cursor-pointer grid-card"
      style={{
        display: "grid",
        gridTemplateRows: "subgrid",
        gridRow: "span 3",
        gap: "0px",
        paddingBottom: "48px",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      {/* Title + Year — ABOVE image per Figma */}
      <header
        className="flex items-end justify-between"
        style={{ alignSelf: "end" }}
      >
        <h3
          style={{
            fontFamily: "'Helvetica', 'Arial', sans-serif",
            fontWeight: hovered ? 700 : 400,
            fontSize: "clamp(18px, 1.8vw, 25px)",
            lineHeight: "1.3",
            color: "#f8f1cd",
            transition: "font-weight 0.2s ease",
            paddingRight: "12px",
          }}
        >
          {project.title}
        </h3>
        <time
          style={{
            fontFamily: "'Helvetica', 'Arial', sans-serif",
            fontWeight: hovered ? 700 : 400,
            fontSize: "clamp(18px, 1.8vw, 25px)",
            lineHeight: "1.3",
            color: hovered ? "#010100" : "#f8f1cd",
            backgroundColor: hovered ? "#f8f1cd" : "transparent",
            padding: hovered ? "2px 12px" : "2px 0",
            borderRadius: "3px",
            transition: "all 0.2s ease",
            flexShrink: 0,
          }}
        >
          {project.year}
        </time>
      </header>

      {/* Image — Figma: 429×286, inset box-shadow */}
      <div className="grid-card-image w-full" style={{ aspectRatio: "429 / 286", marginTop: "12px" }}>
        <img
          className="block w-full h-full object-cover"
          alt={`${project.title} preview`}
          src={project.heroImage}
          onError={(e) => {
            e.currentTarget.style.backgroundColor = "#333";
            e.currentTarget.style.minHeight = "200px";
          }}
        />
      </div>

      {/* Description — clamped to 4 lines for uniform row height */}
      <p
        style={{
          fontFamily: "'Helvetica', 'Arial', sans-serif",
          fontWeight: 400,
          fontSize: "clamp(14px, 1.3vw, 18px)",
          lineHeight: "1.5",
          color: "#f8f1cd",
          textAlign: "justify",
          display: "-webkit-box",
          WebkitLineClamp: 4,
          WebkitBoxOrient: "vertical" as const,
          overflow: "hidden",
          marginTop: "12px",
        }}
      >
        {lang.startsWith("en") && project.descriptionEn ? project.descriptionEn : project.description}
      </p>
    </article>
  );
}

// ─── List Card ───────────────────────────────────────────────────────
// Figma structure (Card Proyecto LIST):
// Figma List Card structure:
//   Frame 104: 243×279, flex-row
//   Image (Rectangle 173): 279×157 rotated -90° → visually 157×279 portrait poster
//   Text column: flex-col, justify-end, align-end, gap: 20px
//   Poster uses posterImage (movie poster)
function ListCard({ project, lang, onClick }: { project: ProjectCard; lang: string; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <article
      className="cursor-pointer list-card"
      style={{
        display: "flex",
        flexDirection: "row",
        height: "279px",
        gap: "20px",
        alignItems: "flex-end",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      {/* Poster — portrait 157×279 (Figma: 279×157 rotate(-90deg), aspect-ratio 16/9) */}
      <div
        className="list-card-image"
        style={{
          width: "157px",
          minWidth: "157px",
          height: "279px",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        <img
          className="block w-full h-full object-cover"
          alt={`${project.title} poster`}
          src={project.posterImage || project.image}
          onError={(e) => {
            e.currentTarget.style.backgroundColor = "#333";
          }}
        />
      </div>

      {/* Text content — flex-col, justify-end, align-end, gap: 20px */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          gap: "20px",
          flex: 1,
          height: "100%",
        }}
      >
        {/* Title + Year */}
        <div className="flex items-center justify-between" style={{ width: "100%" }}>
          <h3
            style={{
              fontFamily: "'Helvetica', 'Arial', sans-serif",
              fontWeight: hovered ? 700 : 400,
              fontSize: "clamp(16px, 1.5vw, 22px)",
              color: "#f8f1cd",
              transition: "font-weight 0.2s ease",
            }}
          >
            {project.title}
          </h3>
          <time
            style={{
              fontFamily: "'Helvetica', 'Arial', sans-serif",
              fontWeight: hovered ? 700 : 400,
              fontSize: "clamp(16px, 1.5vw, 22px)",
              color: hovered ? "#010100" : "#f8f1cd",
              backgroundColor: hovered ? "#f8f1cd" : "transparent",
              padding: hovered ? "2px 10px" : "2px 0",
              borderRadius: "3px",
              transition: "all 0.2s ease",
            }}
          >
            {project.year}
          </time>
        </div>

        {/* Description */}
        <p
          style={{
            fontFamily: "'Helvetica', 'Arial', sans-serif",
            fontWeight: 400,
            fontSize: "clamp(13px, 1.2vw, 16px)",
            lineHeight: "1.5",
            color: "#f8f1cd",
            textAlign: "justify",
            width: "100%",
          }}
        >
          {lang.startsWith("en") && project.descriptionEn ? project.descriptionEn : project.description}
        </p>
      </div>
    </article>
  );
}

// ─── Mobile List Card ────────────────────────────────────────────────
function MobileListCard({ project, lang, onClick }: { project: ProjectCard; lang: string; onClick: () => void }) {
  return (
    <article
      className="cursor-pointer grid gap-4"
      style={{ gridTemplateColumns: "100px 1fr", alignItems: "start" }}
      onClick={onClick}
    >
      <div className="list-card-image overflow-hidden" style={{ width: "100px", height: "136px" }}>
        <img
          className="block w-full h-full object-cover"
          alt={`${project.title} preview`}
          src={project.posterImage || project.image}
          onError={(e) => {
            e.currentTarget.style.backgroundColor = "#333";
          }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h3 style={{ fontFamily: "'Helvetica', 'Arial', sans-serif", fontWeight: 400, fontSize: "16px", color: "#f8f1cd" }}>
            {project.title}
          </h3>
          <time style={{ fontFamily: "'Helvetica', 'Arial', sans-serif", fontWeight: 400, fontSize: "16px", color: "#f8f1cd" }}>
            {project.year}
          </time>
        </div>
        <p
          className="line-clamp-3"
          style={{ fontFamily: "'Helvetica', 'Arial', sans-serif", fontWeight: 400, fontSize: "13px", lineHeight: "1.5", color: "#f8f1cd", textAlign: "justify" }}
        >
          {lang.startsWith("en") && project.descriptionEn ? project.descriptionEn : project.description}
        </p>
      </div>
    </article>
  );
}

// ═════════════════════════════════════════════════════════════════════
// PORTFOLIO PAGE
// ═════════════════════════════════════════════════════════════════════
export default function Portfolio() {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);
  useEffect(() => {
    const onChange = (l: string) => setCurrentLang(l);
    i18n.on("languageChanged", onChange);
    return () => {
      i18n.off("languageChanged", onChange);
    };
  }, [i18n]);
  const navigate = useNavigate();

  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category");
  const setActiveCategory = (cat: string | null) => {
    if (cat) setSearchParams({ category: cat });
    else setSearchParams({});
  };
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const allProjects = getProjectCards();

  const categories = [
    { id: "largometrajes", labelEs: "Largometrajes", labelEn: "Feature Films" },
    { id: "series", labelEs: "Series", labelEn: "Series" },
    { id: "comerciales", labelEs: "Comerciales", labelEn: "Commercials" },
    { id: "videoclips", labelEs: "Videoclips", labelEn: "Music Videos" },
  ];

  const filteredProjects = activeCategory
    ? allProjects.filter((p) => p.category === activeCategory)
    : allProjects;

  const handleProjectClick = (projectId: string) => {
    navigate(`/portfolio/${projectId}`);
  };

  // ─── Desktop category buttons ──────────────────────────────────────
  const renderDesktopCategories = () => (
    <div className="flex items-center">
      {categories.map((category, index) => {
        const isActive = activeCategory === category.id;
        const isHovered = hoveredCategory === category.id;
        const showUnderline = isActive || isHovered;
        return (
          <div key={category.id} className="flex items-center">
            <button
              onClick={() => setActiveCategory(isActive ? null : category.id)}
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
              className="relative"
              style={{ padding: "10px 0", paddingBottom: "14px" }}
            >
              <span
                style={{
                  fontFamily: "'Inter', 'Helvetica', sans-serif",
                  fontWeight: 300,
                  fontSize: "clamp(20px, 3vw, 36px)",
                  lineHeight: "normal",
                  color: showUnderline ? "#fb5000" : "#f8f1cd",
                  transition: "color 0.2s ease",
                  whiteSpace: "nowrap",
                }}
              >
                {currentLang.startsWith("en") ? category.labelEn : category.labelEs}
              </span>
              <div
                style={{
                  position: "absolute",
                  bottom: "6px",
                  left: 0,
                  right: 0,
                  height: "2.5px",
                  backgroundColor: "#fb5000",
                  transform: showUnderline ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform 0.25s ease",
                }}
              />
            </button>
            {index < categories.length - 1 && (
              <div
                role="presentation"
                style={{
                  width: "1.5px",
                  height: "29px",
                  backgroundColor: "#f8f1cd",
                  flexShrink: 0,
                  margin: "0 clamp(8px, 1.5vw, 20px)",
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );

  // ─── Mobile category buttons ───────────────────────────────────────
  const renderMobileCategories = () => (
    <div className="flex items-center" style={{ gap: "0px" }}>
      {categories.map((category, index) => {
        const isActive = activeCategory === category.id;
        const showUnderline = isActive;
        return (
          <div key={category.id} className="flex items-center">
            <button
              onClick={() => setActiveCategory(isActive ? null : category.id)}
              className="relative"
              style={{ padding: "6px 0", paddingBottom: "10px" }}
            >
              <span
                style={{
                  fontFamily: "'Inter', 'Helvetica', sans-serif",
                  fontWeight: 400,
                  fontSize: "13px",
                  lineHeight: "17px",
                  color: showUnderline ? "#fb5000" : "#f8f1cd",
                  transition: "color 0.2s ease",
                  whiteSpace: "nowrap",
                }}
              >
                {currentLang.startsWith("en") ? category.labelEn : category.labelEs}
              </span>
              <div
                style={{
                  position: "absolute",
                  bottom: "2px",
                  left: 0,
                  right: 0,
                  height: "2px",
                  backgroundColor: "#fb5000",
                  transform: showUnderline ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform 0.25s ease",
                }}
              />
            </button>
            {index < categories.length - 1 && (
              <div
                role="presentation"
                style={{
                  width: "1px",
                  height: "17px",
                  backgroundColor: "#f8f1cd",
                  flexShrink: 0,
                  margin: "0 10px",
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <>
      <style>{portfolioCSS}</style>
      <SEO
        title="Proyectos"
        description="Explora los proyectos de diseño de producción y dirección de arte de Martillo Art Dept para cine, series, comerciales y videoclips."
        url="/portfolio"
      />
      <div
        className="w-full min-h-screen portfolio-bg page-bg"
        style={{
          position: "relative",
          backgroundColor: "#1b1b1b",
          paddingBottom: "200px",
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
        <div className="mx-auto w-full" style={{ maxWidth: "1440px", width: "100%", marginInline: "auto", position: "relative", zIndex: 1 }}>

          {/* ════════════════════════════════════════════════════════════
              MOBILE LAYOUT (< 768px)
              ════════════════════════════════════════════════════════════ */}
          <div
            className="block md:hidden"
            style={{ paddingTop: "116px", paddingLeft: "24px", paddingRight: "24px", paddingBottom: "0" }}
          >
            {/* Row 1: Title + Grid/List toggle */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "12px",
              }}
            >
              <h1
                style={{
                  fontFamily: "'Martillo Completa', sans-serif",
                  fontSize: "36px",
                  lineHeight: "42px",
                  fontWeight: 400,
                  color: "#f8f1cd",
                  margin: 0,
                }}
              >
                {currentLang.startsWith("en") ? "PROJECTS" : "PROYECTOS"}
              </h1>
              <ViewToggleButtons viewMode={viewMode} setViewMode={setViewMode} sizeClass="w-[27px] h-[27px]" />
            </div>

            {/* Row 2: "Filtros:" label */}
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "20px",
                lineHeight: "24px",
                fontWeight: 400,
                color: "#f8f1cd",
                marginBottom: "6px",
              }}
            >
              {currentLang.startsWith("en") ? "Filters:" : "Filtros:"}
            </div>

            {/* Row 3: Category filters */}
            <div style={{ marginBottom: "20px" }}>{renderMobileCategories()}</div>

            {/* Cards — 1 column */}
            {viewMode === "grid" && (
              <div className="flex flex-col" style={{ gap: "32px" }}>
                {filteredProjects.map((project) => (
                  <GridCard key={project.id} project={project} lang={currentLang} onClick={() => handleProjectClick(project.id)} />
                ))}
              </div>
            )}

            {viewMode === "list" && (
              <div className="flex flex-col" style={{ gap: "24px" }}>
                {filteredProjects.map((project) => (
                  <MobileListCard key={project.id} project={project} lang={currentLang} onClick={() => handleProjectClick(project.id)} />
                ))}
              </div>
            )}
          </div>

          {/* ════════════════════════════════════════════════════════════
              DESKTOP LAYOUT (≥ 768px)
              ════════════════════════════════════════════════════════════ */}
          <div
            className="hidden md:block"
            style={{
              paddingLeft: "clamp(24px, 3.5vw, 50px)",
              paddingRight: "clamp(24px, 3.5vw, 50px)",
              paddingTop: "84px",
            }}
          >
            {/* Title */}
            <h1
              style={{
                fontFamily: "'Martillo Completa', sans-serif",
                fontSize: "clamp(64px, 9.5vw, 118px)",
                lineHeight: "clamp(64px, 9.5vw, 118px)",
                fontWeight: 400,
                color: "#f8f1cd",
                marginBottom: "28px",
              }}
            >
              {currentLang.startsWith("en") ? "PROJECTS" : "PROYECTOS"}
            </h1>

            {/* Category Nav + View Toggle */}
            <nav
              className="flex items-center justify-between"
              style={{ marginBottom: "50px" }}
              aria-label="Project categories"
            >
              {renderDesktopCategories()}
              <ViewToggleButtons viewMode={viewMode} setViewMode={setViewMode} sizeClass="w-[55px] h-[55px]" />
            </nav>

            {/* Grid View — 3 columns */}
            {viewMode === "grid" && (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridAutoRows: "auto", columnGap: "27px", rowGap: "0px" }}>
                {filteredProjects.map((project) => (
                  <GridCard key={project.id} project={project} lang={currentLang} onClick={() => handleProjectClick(project.id)} />
                ))}
              </div>
            )}

            {/* List View — 3 columns */}
            {viewMode === "list" && (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", columnGap: "27px", rowGap: "40px" }}>
                {filteredProjects.map((project) => (
                  <ListCard key={project.id} project={project} lang={currentLang} onClick={() => handleProjectClick(project.id)} />
                ))}
              </div>
            )}

            {filteredProjects.length === 0 && (
              <p style={{ color: "#9ca3af", fontSize: "20px", marginTop: "40px" }}>
                {currentLang.startsWith("en")
                  ? "No projects found in this category."
                  : "No se encontraron proyectos en esta categoría."}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}