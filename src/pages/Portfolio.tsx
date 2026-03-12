import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useSearchParams } from "react-router";
import { getProjectCards, type ProjectCard } from "../data/projects";
import SEO from "../components/SEO";

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
function GridCard({ project, onClick }: { project: ProjectCard; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <article
      className="flex flex-col cursor-pointer"
      style={{ gap: "18px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <div className="w-full overflow-hidden" style={{ aspectRatio: "429 / 286" }}>
        <img className="block w-full h-full object-cover" alt={`${project.title} preview`} src={project.image}
          onError={(e) => { e.currentTarget.style.backgroundColor = "#333"; e.currentTarget.style.minHeight = "200px"; }} />
      </div>
      <header className="flex items-center justify-between">
        <h3 className="text-[18px] md:text-[25px]" style={{ fontFamily: "'Helvetica', 'Arial', sans-serif", fontWeight: hovered ? 700 : 400, lineHeight: "normal", color: "#f8f1cd", transition: "font-weight 0.2s ease" }}>
          {project.title}
        </h3>
        <time className="text-[18px] md:text-[25px]" style={{ fontFamily: "'Helvetica', 'Arial', sans-serif", fontWeight: hovered ? 700 : 400, lineHeight: "normal", color: hovered ? "#010100" : "#f8f1cd", backgroundColor: hovered ? "#f8f1cd" : "transparent", padding: hovered ? "2px 12px" : "2px 0", borderRadius: "3px", transition: "all 0.2s ease" }}>
          {project.year}
        </time>
      </header>
      <p className="text-[14px] md:text-[18px]" style={{ fontFamily: "'Helvetica', 'Arial', sans-serif", fontWeight: 400, lineHeight: "normal", color: "#f8f1cd", textAlign: "justify" }}>
        {project.description}
      </p>
    </article>
  );
}

// ─── List Card ───────────────────────────────────────────────────────
function ListCard({ project, onClick }: { project: ProjectCard; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <article className="cursor-pointer" style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: "20px", alignItems: "start" }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onClick={onClick}>
      <div className="overflow-hidden" style={{ width: "140px", height: "190px" }}>
        <img className="block w-full h-full object-cover" alt={`${project.title} preview`} src={project.image}
          onError={(e) => { e.currentTarget.style.backgroundColor = "#333"; }} />
      </div>
      <div className="flex flex-col" style={{ gap: "8px" }}>
        <div className="flex items-center justify-between">
          <h3 style={{ fontFamily: "'Helvetica', 'Arial', sans-serif", fontWeight: hovered ? 700 : 400, fontSize: "22px", color: "#f8f1cd", transition: "font-weight 0.2s ease" }}>{project.title}</h3>
          <time style={{ fontFamily: "'Helvetica', 'Arial', sans-serif", fontWeight: hovered ? 700 : 400, fontSize: "22px", color: hovered ? "#010100" : "#f8f1cd", backgroundColor: hovered ? "#f8f1cd" : "transparent", padding: hovered ? "2px 10px" : "2px 0", borderRadius: "3px", transition: "all 0.2s ease" }}>{project.year}</time>
        </div>
        <p style={{ fontFamily: "'Helvetica', 'Arial', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "1.5", color: "#f8f1cd", textAlign: "justify" }}>{project.description}</p>
      </div>
    </article>
  );
}

// ─── Mobile List Card ────────────────────────────────────────────────
function MobileListCard({ project, onClick }: { project: ProjectCard; onClick: () => void }) {
  return (
    <article className="cursor-pointer grid gap-4" style={{ gridTemplateColumns: "100px 1fr", alignItems: "start" }} onClick={onClick}>
      <div className="overflow-hidden" style={{ width: "100px", height: "136px" }}>
        <img className="block w-full h-full object-cover" alt={`${project.title} preview`} src={project.image}
          onError={(e) => { e.currentTarget.style.backgroundColor = "#333"; }} />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h3 style={{ fontFamily: "'Helvetica', 'Arial', sans-serif", fontWeight: 400, fontSize: "16px", color: "#f8f1cd" }}>{project.title}</h3>
          <time style={{ fontFamily: "'Helvetica', 'Arial', sans-serif", fontWeight: 400, fontSize: "16px", color: "#f8f1cd" }}>{project.year}</time>
        </div>
        <p className="line-clamp-3" style={{ fontFamily: "'Helvetica', 'Arial', sans-serif", fontWeight: 400, fontSize: "13px", lineHeight: "1.5", color: "#f8f1cd", textAlign: "justify" }}>{project.description}</p>
      </div>
    </article>
  );
}

// ═════════════════════════════════════════════════════════════════════
// PORTFOLIO PAGE
// ═════════════════════════════════════════════════════════════════════
export default function Portfolio() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const navigate = useNavigate();

  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category");
  const setActiveCategory = (cat: string | null) => {
    if (cat) setSearchParams({ category: cat });
    else setSearchParams({});
  };
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const allProjects = getProjectCards().sort((a, b) => Number(b.year) - Number(a.year));

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
              <span style={{
                fontFamily: "'Inter', 'Helvetica', sans-serif",
                fontWeight: 300,
                fontSize: "clamp(20px, 3vw, 36px)",
                lineHeight: "normal",
                color: showUnderline ? "#fb5000" : "#f8f1cd",
                transition: "color 0.2s ease",
                whiteSpace: "nowrap",
              }}>
                {currentLang.startsWith("en") ? category.labelEn : category.labelEs}
              </span>
              <div style={{
                position: "absolute", bottom: "6px", left: 0, right: 0,
                height: "2.5px", backgroundColor: "#fb5000",
                transform: showUnderline ? "scaleX(1)" : "scaleX(0)",
                transformOrigin: "left", transition: "transform 0.25s ease",
              }} />
            </button>
            {index < categories.length - 1 && (
              <div role="presentation" style={{
                width: "1.5px", height: "29px", backgroundColor: "#f8f1cd",
                flexShrink: 0, margin: "0 clamp(8px, 1.5vw, 20px)",
              }} />
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
              <span style={{
                fontFamily: "'Inter', 'Helvetica', sans-serif",
                fontWeight: 400,
                fontSize: "13px",
                lineHeight: "17px",
                color: showUnderline ? "#fb5000" : "#f8f1cd",
                transition: "color 0.2s ease",
                whiteSpace: "nowrap",
              }}>
                {currentLang.startsWith("en") ? category.labelEn : category.labelEs}
              </span>
              <div style={{
                position: "absolute", bottom: "2px", left: 0, right: 0,
                height: "2px", backgroundColor: "#fb5000",
                transform: showUnderline ? "scaleX(1)" : "scaleX(0)",
                transformOrigin: "left", transition: "transform 0.25s ease",
              }} />
            </button>
            {index < categories.length - 1 && (
              <div role="presentation" style={{
                width: "1px", height: "17px", backgroundColor: "#f8f1cd",
                flexShrink: 0, margin: "0 10px",
              }} />
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <>
    <SEO
      title="Proyectos"
      description="Explora los proyectos de diseño de producción y dirección de arte de Martillo Art Dept para cine, series, comerciales y videoclips."
      url="/portfolio"
    />
    <div
      className="w-full min-h-screen"
      style={{
        backgroundColor: "#1b1b1b",
        backgroundImage: "url(/assets/bg-gradient-dark.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingBottom: "200px",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "1440px" }}>

        {/* ════════════════════════════════════════════════════════════
            MOBILE LAYOUT (< 768px)
            Layout.tsx provides pt-[96px] so content starts below header.
            Internal padding: 20px top + 24px sides.
            ════════════════════════════════════════════════════════════ */}
        <div className="block md:hidden" style={{ paddingTop: "116px", paddingLeft: "24px", paddingRight: "24px", paddingBottom: "0" }}>

          {/* Row 1: Title + Grid/List toggle
              Wireframe: "Proyectos" 45px + icons 27px in same row, justify-between
              Using 36px title to guarantee icons stay visible */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "12px",
          }}>
            <h1 style={{
              fontFamily: "'Martillo Completa', sans-serif",
              fontSize: "36px",
              lineHeight: "42px",
              fontWeight: 400,
              color: "#f8f1cd",
              margin: 0,
            }}>
              {currentLang.startsWith("en") ? "PROJECTS" : "PROYECTOS"}
            </h1>
            <ViewToggleButtons viewMode={viewMode} setViewMode={setViewMode} sizeClass="w-[27px] h-[27px]" />
          </div>

          {/* Row 2: "Filtros:" label */}
          <div style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "20px",
            lineHeight: "24px",
            fontWeight: 400,
            color: "#f8f1cd",
            marginBottom: "6px",
          }}>
            {currentLang.startsWith("en") ? "Filters:" : "Filtros:"}
          </div>

          {/* Row 3: Category filters — 13px, dividers with 10px margin */}
          <div style={{ marginBottom: "20px" }}>
            {renderMobileCategories()}
          </div>

          {/* Cards — 1 column grid */}
          {viewMode === "grid" && (
            <div className="flex flex-col" style={{ gap: "32px" }}>
              {filteredProjects.map((project) => (
                <GridCard key={project.id} project={project} onClick={() => handleProjectClick(project.id)} />
              ))}
            </div>
          )}

          {viewMode === "list" && (
            <div className="flex flex-col" style={{ gap: "24px" }}>
              {filteredProjects.map((project) => (
                <MobileListCard key={project.id} project={project} onClick={() => handleProjectClick(project.id)} />
              ))}
            </div>
          )}
        </div>

        {/* ════════════════════════════════════════════════════════════
            DESKTOP LAYOUT (≥ 768px) — EXACT FIGMA SPECS
            ════════════════════════════════════════════════════════════ */}
        <div className="hidden md:block" style={{ paddingLeft: "clamp(24px, 7vw, 100px)", paddingRight: "clamp(24px, 7vw, 100px)", paddingTop: "84px" }}>
          {/* Title */}
          <h1 style={{
            fontFamily: "'Martillo Completa', sans-serif",
            fontSize: "clamp(64px, 9.5vw, 118px)",
            lineHeight: "clamp(64px, 9.5vw, 118px)",
            fontWeight: 400,
            color: "#f8f1cd",
            marginBottom: "28px",
          }}>
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
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", columnGap: "27px", rowGap: "60px" }}>
              {filteredProjects.map((project) => (
                <GridCard key={project.id} project={project} onClick={() => handleProjectClick(project.id)} />
              ))}
            </div>
          )}

          {/* List View — 3 columns */}
          {viewMode === "list" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", columnGap: "27px", rowGap: "40px" }}>
              {filteredProjects.map((project) => (
                <ListCard key={project.id} project={project} onClick={() => handleProjectClick(project.id)} />
              ))}
            </div>
          )}

          {filteredProjects.length === 0 && (
            <p style={{ color: "#9ca3af", fontSize: "20px", marginTop: "40px" }}>
              {currentLang.startsWith("en") ? "No projects found in this category." : "No se encontraron proyectos en esta categoría."}
            </p>
          )}
        </div>
      </div>
    </div>
    </>
  );
}