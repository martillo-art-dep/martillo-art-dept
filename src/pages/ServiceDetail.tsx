import { useParams, useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

// ─── Service Detail Data ─────────────────────────────────────────────
interface ServiceDetail {
  id: string;
  titleEs: string;
  titleEn: string;
  subtitleEs: string;
  subtitleEn: string;
  heroImage: string;
  gallery: string[];
  descriptionEs: string;
  descriptionEn: string;
  relatedCategory?: string;
}

const SERVICE_DETAILS: ServiceDetail[] = [
  {
    id: "principales",
    titleEs: "Diseño de Producción",
    titleEn: "Production Design",
    subtitleEs: "Conceptualización estética y supervisión visual de la obra.",
    subtitleEn: "Aesthetic conceptualization and visual supervision of the work.",
    heroImage: "/assets/projects/service-1.jpg",
    gallery: ["/assets/projects/service-1.jpg", "/assets/projects/service-2.jpg", "/assets/projects/service-3.jpg", "/assets/projects/service-4.jpg"],
    descriptionEs: "Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi ligula tempus diam nisl parturient per penatibus. Consequat vehicula tempor accumsan purus, pellentesque etiam.Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi ligula tempus diam nisl parturient Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi ligula tempus diam nisl parturient per penatibus.",
    descriptionEn: "Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi ligula tempus diam nisl parturient per penatibus. Consequat vehicula tempor accumsan purus, pellentesque etiam.Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi ligula tempus diam nisl parturient Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi ligula tempus diam nisl parturient per penatibus.",
    relatedCategory: "largometrajes",
  },
  {
    id: "especializados",
    titleEs: "Efectos Prácticos & Utilería",
    titleEn: "Practical Effects & Props",
    subtitleEs: "Creación de efectos especiales prácticos y piezas de utilería.",
    subtitleEn: "Creation of practical special effects and prop pieces.",
    heroImage: "/assets/projects/service-2.jpg",
    gallery: ["/assets/projects/service-2.jpg", "/assets/projects/service-1.jpg", "/assets/projects/service-3.jpg", "/assets/projects/service-4.jpg"],
    descriptionEs: "Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi ligula tempus diam nisl parturient per penatibus. Consequat vehicula tempor accumsan purus, pellentesque etiam.Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi ligula tempus diam nisl parturient Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi ligula tempus diam nisl parturient per penatibus.",
    descriptionEn: "Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi ligula tempus diam nisl parturient per penatibus. Consequat vehicula tempor accumsan purus, pellentesque etiam.Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi ligula tempus diam nisl parturient Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi ligula tempus diam nisl parturient per penatibus.",
    relatedCategory: "series",
  },
  {
    id: "infraestructura",
    titleEs: "Talleres & Bodegas",
    titleEn: "Workshops & Warehouses",
    subtitleEs: "Infraestructura completa para la construcción y almacenamiento.",
    subtitleEn: "Complete infrastructure for construction and storage.",
    heroImage: "/assets/projects/service-3.jpg",
    gallery: ["/assets/projects/service-3.jpg", "/assets/projects/service-1.jpg", "/assets/projects/service-2.jpg", "/assets/projects/service-4.jpg"],
    descriptionEs: "Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi ligula tempus diam nisl parturient per penatibus. Consequat vehicula tempor accumsan purus, pellentesque etiam.Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi ligula tempus diam nisl parturient Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi ligula tempus diam nisl parturient per penatibus.",
    descriptionEn: "Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi ligula tempus diam nisl parturient per penatibus. Consequat vehicula tempor accumsan purus, pellentesque etiam.Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi ligula tempus diam nisl parturient Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi ligula tempus diam nisl parturient per penatibus.",
    relatedCategory: "comerciales",
  },
  {
    id: "consultoria",
    titleEs: "Asesoría & Consultoría",
    titleEn: "Advisory & Consulting",
    subtitleEs: "Certificaciones, aspectos legales y asesoría especializada.",
    subtitleEn: "Certifications, legal aspects and specialized advisory.",
    heroImage: "/assets/projects/service-4.jpg",
    gallery: ["/assets/projects/service-4.jpg", "/assets/projects/service-1.jpg", "/assets/projects/service-2.jpg", "/assets/projects/service-3.jpg"],
    descriptionEs: "Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi ligula tempus diam nisl parturient per penatibus. Consequat vehicula tempor accumsan purus, pellentesque etiam.Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi ligula tempus diam nisl parturient Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi ligula tempus diam nisl parturient per penatibus.",
    descriptionEn: "Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi ligula tempus diam nisl parturient per penatibus. Consequat vehicula tempor accumsan purus, pellentesque etiam.Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi ligula tempus diam nisl parturient Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi ligula tempus diam nisl parturient per penatibus.",
    relatedCategory: "largometrajes",
  },
];

function getServiceById(id: string): ServiceDetail | undefined {
  return SERVICE_DETAILS.find((s) => s.id === id);
}

// ─── Color strips ────────────────────────────────────────────────────
const GALLERY_COLORS = ["#F8F1CD", "#FB5000", "#FFDA44", "#338AF3", "#00FF8C", "#C32F27"];
const RELATED_COLORS = [
  { color: "#FB5000", label: "Proyecto 1" },
  { color: "#0052B4", label: "Proyecto 2" },
  { color: "#702525", label: "Proyecto 3" },
  { color: "#496E2D", label: "Proyecto 4" },
  { color: "#338AF3", label: "Proyecto 5" },
  { color: "#F8F1CD", label: "Proyecto 6" },
];

// ─── CSS ─────────────────────────────────────────────────────────────
const serviceCSS = `
.svc-strip { display: flex; transform-style: preserve-3d; transform: perspective(1000px); align-items: flex-end; }
.svc-swatch {
  position: relative; flex-shrink: 0; flex-grow: 1;
  height: 107px; border: none; outline: none;
  background-color: var(--color);
  transition: 500ms cubic-bezier(0.175, 0.885, 0.32, 1.1);
  cursor: pointer; padding: 0; transform-origin: bottom center;
}
.svc-swatch:hover { transform: scaleY(1.5) scaleX(1.15); z-index: 99999; border-radius: 4px; }
.svc-swatch:active { transform: scaleY(1.35) scaleX(1.1); }
.svc-swatch:hover + .svc-swatch { transform: scaleY(1.3) scaleX(1.08); z-index: 9999; }
.svc-swatch:hover + .svc-swatch + .svc-swatch { transform: scaleY(1.15) scaleX(1.04); z-index: 999; }
.svc-swatch:has(+ .svc-swatch:hover) { transform: scaleY(1.3) scaleX(1.08); z-index: 9999; }
.svc-swatch:has(+ .svc-swatch + .svc-swatch:hover) { transform: scaleY(1.15) scaleX(1.04); z-index: 999; }

.svc-rel-strip { display: flex; transform-style: preserve-3d; transform: perspective(1000px); align-items: flex-end; }
.svc-rel {
  position: relative; flex-shrink: 0; flex-grow: 1;
  height: 302px; border: none; outline: none;
  background-color: var(--color);
  transition: 500ms cubic-bezier(0.175, 0.885, 0.32, 1.1);
  cursor: pointer; padding: 0; transform-origin: bottom center;
}
.svc-rel::before {
  position: absolute; content: attr(data-label);
  left: 50%; bottom: calc(100% + 10px);
  font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 500;
  transform: translateX(-50%); padding: 4px 12px;
  background-color: #fff; color: #1b1b1b; border-radius: 6px;
  pointer-events: none; opacity: 0; visibility: hidden;
  white-space: nowrap; z-index: 100000;
  transition: 500ms cubic-bezier(0.175, 0.885, 0.32, 1.1);
}
.svc-rel:hover { transform: scaleY(1.3) scaleX(1.15); z-index: 99999; border-radius: 4px; }
.svc-rel:hover::before { opacity: 1; visibility: visible; }
.svc-rel:active { transform: scaleY(1.2) scaleX(1.1); }
.svc-rel:hover + .svc-rel { transform: scaleY(1.2) scaleX(1.08); z-index: 9999; }
.svc-rel:hover + .svc-rel + .svc-rel { transform: scaleY(1.1) scaleX(1.04); z-index: 999; }
.svc-rel:has(+ .svc-rel:hover) { transform: scaleY(1.2) scaleX(1.08); z-index: 9999; }
.svc-rel:has(+ .svc-rel + .svc-rel:hover) { transform: scaleY(1.1) scaleX(1.04); z-index: 999; }

.svc-m-strip { display: flex; transform-style: preserve-3d; transform: perspective(1000px); align-items: flex-end; }
.svc-m {
  position: relative; flex: 1 1 0; min-width: 0;
  height: 55px; border: none; outline: none;
  background-color: var(--color);
  transition: 500ms cubic-bezier(0.175, 0.885, 0.32, 1.1);
  cursor: pointer; padding: 0; transform-origin: bottom center;
}
.svc-m:hover { transform: scaleY(1.5) scaleX(1.15); z-index: 99999; border-radius: 4px; }
.svc-m:active { transform: scaleY(1.35) scaleX(1.1); }
.svc-m:hover + .svc-m { transform: scaleY(1.3) scaleX(1.08); z-index: 9999; }
.svc-m:hover + .svc-m + .svc-m { transform: scaleY(1.15) scaleX(1.04); z-index: 999; }
.svc-m:has(+ .svc-m:hover) { transform: scaleY(1.3) scaleX(1.08); z-index: 9999; }
.svc-m:has(+ .svc-m + .svc-m:hover) { transform: scaleY(1.15) scaleX(1.04); z-index: 999; }
`;

// ─── Component ───────────────────────────────────────────────────────
export default function ServiceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const isEn = i18n.language.startsWith("en");
  const service = id ? getServiceById(id) : undefined;

  if (!service) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center" style={{ backgroundColor: "#1b1b1b" }}>
        <p style={{ fontFamily: "'Martillo Completa', sans-serif", fontSize: "36px", color: "#F8F1CD", marginBottom: "24px", textAlign: "center", padding: "0 24px" }}>
          {isEn ? "SERVICE NOT FOUND" : "SERVICIO NO ENCONTRADO"}
        </p>
        <button onClick={() => navigate("/services")} style={{ fontFamily: "'Inter', sans-serif", fontSize: "18px", color: "#fb5000", background: "none", border: "2px solid #fb5000", padding: "12px 32px", borderRadius: "4px", cursor: "pointer" }}>
          {isEn ? "Back to Services" : "Volver a Servicios"}
        </button>
      </div>
    );
  }

  const title = isEn ? service.titleEn : service.titleEs;
  const subtitle = isEn ? service.subtitleEn : service.subtitleEs;
  const description = isEn ? service.descriptionEn : service.descriptionEs;

  return (
    <>
      <style>{serviceCSS}</style>

      {/* ═══ MOBILE ═══ */}
      <div className="block md:hidden" style={{
        backgroundColor: "#1b1b1b",
        backgroundImage: "url(/assets/bg-gradient-dark.jpeg)",
        backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed",
        minHeight: "100vh", paddingBottom: "40px",
      }}>
        <section className="relative w-full overflow-hidden" style={{ height: "300px" }}>
          <div className="absolute inset-0" style={{ backgroundImage: `url(${service.heroImage})`, backgroundSize: "cover", backgroundPosition: "center", backgroundColor: "#333" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #000 0%, rgba(0,0,0,0.5) 43%, rgba(0,0,0,0) 100%)" }} />
        </section>

        <div style={{ marginTop: "-80px", position: "relative", zIndex: 10, padding: "0 24px", marginBottom: "24px" }}>
          <h1 style={{ fontFamily: "'Martillo Completa', sans-serif", fontWeight: 400, fontSize: "32px", lineHeight: "36px", color: "#FFF", textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}>
            {title.toUpperCase()}
          </h1>
        </div>

        <div style={{ padding: "0 24px", position: "relative", zIndex: 1 }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: "18px", lineHeight: "22px", color: "#FFF", marginBottom: "20px" }}>{subtitle}</p>
          <p style={{ fontFamily: "'Helvetica','Arial',sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "18px", color: "#FBFEF9", textAlign: "justify", marginBottom: "24px" }}>{description}</p>

          <div style={{ width: "100%", aspectRatio: "656/437", backgroundColor: "#D9D9D9", overflow: "hidden", marginBottom: "12px" }}>
            <img src={service.gallery[0]} alt={title} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = "none"; }} />
          </div>

          <div className="svc-m-strip" style={{ marginBottom: "32px", paddingBottom: "16px" }}>
            {GALLERY_COLORS.map((c, i) => <button key={i} className="svc-m" style={{ "--color": c } as React.CSSProperties} />)}
          </div>

          <h2 style={{ fontFamily: "'Martillo Completa', sans-serif", fontWeight: 400, fontSize: "28px", lineHeight: "32px", color: "#FFF", marginBottom: "20px" }}>
            {isEn ? "RELATED PROJECTS" : "PROYECTOS RELACIONADOS"}
          </h2>
          <div className="svc-m-strip" style={{ paddingBottom: "20px" }}>
            {RELATED_COLORS.map((item, i) => <button key={i} className="svc-m" style={{ "--color": item.color, height: "120px" } as React.CSSProperties} />)}
          </div>

          <button onClick={() => navigate("/services")} style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: "14px", color: "#FBFEF9", backgroundColor: "#1b1b1b", border: "none", padding: "12px 24px", borderRadius: "4px", cursor: "pointer", marginTop: "16px", transition: "background-color 0.2s ease" }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#fb5000"; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#1b1b1b"; }}>
            ← {isEn ? "Back to Services" : "Volver a Servicios"}
          </button>
        </div>
      </div>

      {/* ═══ DESKTOP — Figma: 1440×2324px ═══ */}
      <div className="hidden md:block">
        <div className="w-full" style={{ backgroundColor: "#1b1b1b", backgroundImage: "url(/assets/bg-gradient-dark.jpeg)", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}>

          {/* Hero — 636px with photo */}
          <section className="relative w-full" style={{ height: "636px", overflow: "hidden" }}>
            <div className="absolute inset-0" style={{ backgroundImage: `url(${service.heroImage})`, backgroundSize: "cover", backgroundPosition: "center", backgroundColor: "#333" }} />
            {/* Title — Figma: 128px centered at top:274 */}
            <div className="absolute w-full" style={{ top: "274px", textAlign: "center", zIndex: 2 }}>
              <h1 style={{ fontFamily: "'Martillo Completa', sans-serif", fontWeight: 400, fontSize: "128px", lineHeight: "128px", color: "#000000", maxWidth: "1290px", margin: "0 auto" }}>
                {title.toUpperCase()}
              </h1>
            </div>
          </section>

          {/* Gradient overlay — from top:397 in Figma, so overlap hero by 239px */}
          <div className="relative w-full" style={{
            marginTop: "-239px",
            backgroundImage: "linear-gradient(180deg, rgba(255,255,255,0) 0%, #121619 14.18%, #121619 41.5%, rgba(18,22,25,0.31) 69.01%)",
            paddingTop: "239px",
          }}>

            {/* 2-column: text left (657px) + photo+dock right */}
            <div className="mx-auto" style={{ maxWidth: "1440px", padding: "60px 50px 0", display: "flex", gap: "27px", alignItems: "flex-start" }}>
              {/* Left: subtitle + description — Figma: Frame 110, 657px */}
              <div style={{ width: "657px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "25px" }}>
                <div style={{ padding: "0 10px" }}>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: "40px", lineHeight: "48px", textAlign: "center", color: "#FFFFFF", maxWidth: "602px" }}>
                    {subtitle}
                  </p>
                </div>
                <div style={{ padding: "0 10px" }}>
                  <p style={{ fontFamily: "'Helvetica','Arial',sans-serif", fontWeight: 400, fontSize: "32px", lineHeight: "37px", textAlign: "justify", color: "#FBFEF9", maxWidth: "570px" }}>
                    {description}
                  </p>
                </div>
              </div>

              {/* Right: photo (656×437) + gallery dock (652×107) */}
              <div style={{ flex: 1 }}>
                <div style={{ width: "100%", height: "437px", backgroundColor: "#D9D9D9", overflow: "hidden", marginBottom: "31px" }}>
                  <img src={service.gallery[0]} alt={title} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = "none"; }} />
                </div>
                <div className="svc-strip" style={{ width: "100%" }}>
                  {GALLERY_COLORS.map((c, i) => <button key={i} className="svc-swatch" style={{ "--color": c } as React.CSSProperties} />)}
                </div>
              </div>
            </div>

            {/* Related Projects — Figma: at y:1450, 1341px wide, 302px tall blocks */}
            <div className="mx-auto" style={{ maxWidth: "1440px", padding: "100px 50px 80px" }}>
              <h2 style={{ fontFamily: "'Martillo Completa', sans-serif", fontWeight: 400, fontSize: "70px", lineHeight: "70px", color: "#FFFFFF", marginBottom: "74px" }}>
                {isEn ? "RELATED PROJECTS" : "PROYECTOS RELACIONADOS"}
              </h2>
              <div className="svc-rel-strip" style={{ width: "100%", maxWidth: "1341px" }}>
                {RELATED_COLORS.map((item, i) => <button key={i} className="svc-rel" style={{ "--color": item.color } as React.CSSProperties} data-label={item.label} aria-label={item.label} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
