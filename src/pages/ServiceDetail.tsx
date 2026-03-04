import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

// ─── Service Detail Data ─────────────────────────────────────────────
interface ServiceDetail {
  id: string;
  titleEs: string;
  titleEn: string;
  subtitleEs: string;
  subtitleEn: string;
  categoryEs: string;
  categoryEn: string;
  heroImage: string;
  gallery: string[];
  descriptionEs: string;
  descriptionEn: string;
  relatedCategory?: string;
}

const SERVICE_DETAILS: ServiceDetail[] = [
  {
    id: "principales",
    titleEs: "Servicios Principales",
    titleEn: "Main Services",
    subtitleEs: "Diseño de Producción",
    subtitleEn: "Production Design",
    categoryEs: "Art Department",
    categoryEn: "Art Department",
    heroImage: "/assets/projects/service-1.jpg",
    gallery: [
      "/assets/projects/service-1.jpg",
      "/assets/projects/service-2.jpg",
      "/assets/projects/service-3.jpg",
      "/assets/projects/service-4.jpg",
    ],
    descriptionEs: "Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi ligula tempus diam nisl parturient per penatibus. Consequat vehicula tempor accumsan purus, pellentesque etiam. Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi.",
    descriptionEn: "Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi ligula tempus diam nisl parturient per penatibus. Consequat vehicula tempor accumsan purus, pellentesque etiam. Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi.",
    relatedCategory: "largometrajes",
  },
  {
    id: "especializados",
    titleEs: "Servicios Especializados",
    titleEn: "Specialized Services",
    subtitleEs: "Efectos Prácticos & Utilería",
    subtitleEn: "Practical Effects & Props",
    categoryEs: "Especialidades",
    categoryEn: "Specialties",
    heroImage: "/assets/projects/service-2.jpg",
    gallery: [
      "/assets/projects/service-2.jpg",
      "/assets/projects/service-1.jpg",
      "/assets/projects/service-3.jpg",
      "/assets/projects/service-4.jpg",
    ],
    descriptionEs: "Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi ligula tempus diam nisl parturient per penatibus. Consequat vehicula tempor accumsan purus, pellentesque etiam. Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi.",
    descriptionEn: "Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi ligula tempus diam nisl parturient per penatibus. Consequat vehicula tempor accumsan purus, pellentesque etiam. Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi.",
    relatedCategory: "series",
  },
  {
    id: "infraestructura",
    titleEs: "Infraestructura & Equipo",
    titleEn: "Infrastructure & Equipment",
    subtitleEs: "Talleres & Bodegas",
    subtitleEn: "Workshops & Warehouses",
    categoryEs: "Infraestructura",
    categoryEn: "Infrastructure",
    heroImage: "/assets/projects/service-3.jpg",
    gallery: [
      "/assets/projects/service-3.jpg",
      "/assets/projects/service-1.jpg",
      "/assets/projects/service-2.jpg",
      "/assets/projects/service-4.jpg",
    ],
    descriptionEs: "Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi ligula tempus diam nisl parturient per penatibus. Consequat vehicula tempor accumsan purus, pellentesque etiam. Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi.",
    descriptionEn: "Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi ligula tempus diam nisl parturient per penatibus. Consequat vehicula tempor accumsan purus, pellentesque etiam. Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi.",
    relatedCategory: "comerciales",
  },
  {
    id: "consultoria",
    titleEs: "Certificaciones y Legales",
    titleEn: "Certifications & Legal",
    subtitleEs: "Asesoría & Consultoría",
    subtitleEn: "Advisory & Consulting",
    categoryEs: "Consultoría",
    categoryEn: "Consulting",
    heroImage: "/assets/projects/service-4.jpg",
    gallery: [
      "/assets/projects/service-4.jpg",
      "/assets/projects/service-1.jpg",
      "/assets/projects/service-2.jpg",
      "/assets/projects/service-3.jpg",
    ],
    descriptionEs: "Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi ligula tempus diam nisl parturient per penatibus. Consequat vehicula tempor accumsan purus, pellentesque etiam. Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi.",
    descriptionEn: "Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi ligula tempus diam nisl parturient per penatibus. Consequat vehicula tempor accumsan purus, pellentesque etiam. Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi.",
    relatedCategory: "largometrajes",
  },
];

function getServiceById(id: string): ServiceDetail | undefined {
  return SERVICE_DETAILS.find((s) => s.id === id);
}

// ─── Arrow Icons ─────────────────────────────────────────────────────
function ArrowLeft() {
  return (
    <svg width="22" height="21" viewBox="0 0 22 21" fill="none">
      <path d="M14 3L6 10.5L14 18" stroke="#F8F1CD" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="22" height="21" viewBox="0 0 22 21" fill="none">
      <path d="M8 3L16 10.5L8 18" stroke="#F8F1CD" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ─── Page Component ──────────────────────────────────────────────────
export default function ServiceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const service = id ? getServiceById(id) : undefined;
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // 404
  if (!service) {
    return (
      <div
        className="w-full min-h-screen flex flex-col items-center justify-center"
        style={{ backgroundColor: "#1b1b1b" }}
      >
        <p style={{
          fontFamily: "'Martillo Completa', sans-serif",
          fontSize: "36px",
          color: "#F8F1CD",
          marginBottom: "24px",
          textAlign: "center",
          padding: "0 24px",
        }}>
          {currentLang.startsWith("en") ? "SERVICE NOT FOUND" : "SERVICIO NO ENCONTRADO"}
        </p>
        <button
          onClick={() => navigate("/services")}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "18px",
            color: "#FBFEF9",
            background: "#1b1b1b",
            border: "none",
            padding: "12px 32px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          {currentLang.startsWith("en") ? "Back to Services" : "Volver a Servicios"}
        </button>
      </div>
    );
  }

  const title = currentLang.startsWith("en") ? service.titleEn : service.titleEs;
  const subtitle = currentLang.startsWith("en") ? service.subtitleEn : service.subtitleEs;
  const category = currentLang.startsWith("en") ? service.categoryEn : service.categoryEs;
  const description = currentLang.startsWith("en") ? service.descriptionEn : service.descriptionEs;

  const gallery = service.gallery;
  const activeImage = gallery[activeImageIndex] || gallery[0];

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full min-h-screen" style={{ backgroundColor: "#1b1b1b", backgroundImage: "url(/assets/bg-gradient-dark.jpeg)", backgroundSize: "cover", backgroundPosition: "center" }}>

      {/* ════════════════════════════════════════════════════════════
          MOBILE LAYOUT (< 768px)
          Figma wireframe: 430×857px, bg #DBDBDB
          ════════════════════════════════════════════════════════════ */}
      <div className="block md:hidden">

        {/* ═══ HERO — Figma: 430×347px with gradient overlay ═══ */}
        <section
          className="relative w-full overflow-hidden"
          style={{ height: "347px" }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${service.heroImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "#999",
            }}
          />
          {/* Gradient overlay: black top fading to transparent */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(180deg, #000000 0%, rgba(0,0,0,0.5) 42.79%, rgba(0,0,0,0) 100%)",
            }}
          />
        </section>

        {/* ═══ TITLE SECTION — Figma: left:24px, top:196px relative to page ═══
            Since hero is 347px and this overlaps, we use negative margin */}
        <div style={{
          position: "relative",
          marginTop: "-151px",
          padding: "0 24px",
          zIndex: 10,
        }}>
          {/* Title — Figma: 383×50px white rectangle = large title text */}
          <h1 style={{
            fontFamily: "'Martillo Completa', sans-serif",
            fontWeight: 400,
            fontSize: "32px",
            lineHeight: "38px",
            color: "#FFFFFF",
            marginBottom: "16px",
            textShadow: "0 2px 8px rgba(0,0,0,0.5)",
          }}>
            {title}
          </h1>

          {/* Subtitle — Figma: 172×50px white rectangle = shorter subtitle */}
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "24px",
            color: "#FFFFFF",
            textShadow: "0 2px 6px rgba(0,0,0,0.4)",
          }}>
            {subtitle}
          </p>
        </div>

        {/* ═══ GALLERY SECTION — Figma: top:379px, left:24px ═══ */}
        <div style={{ padding: "32px 24px 0" }}>

          {/* Category label — Figma: 172×23px white rect, right-aligned */}
          <div style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "5px",
          }}>
            <span style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              fontSize: "14px",
              lineHeight: "23px",
              color: "#F8F1CD",
              backgroundColor: "rgba(255,255,255,0.15)",
              padding: "0 12px",
              borderRadius: "2px",
            }}>
              {category}
            </span>
          </div>

          {/* Main image with arrows — Figma: 383×163px with ← → arrows */}
          <div style={{
            position: "relative",
            width: "100%",
            aspectRatio: "383 / 163",
            backgroundColor: "#ccc",
            overflow: "hidden",
            marginBottom: "10px",
          }}>
            <img
              src={activeImage}
              alt={`${title} gallery`}
              className="block w-full h-full object-cover"
              style={{ transition: "opacity 0.3s ease" }}
              onError={(e) => {
                e.currentTarget.style.backgroundColor = "#aaa";
                e.currentTarget.style.minHeight = "163px";
              }}
            />

            {/* Left arrow — Figma: 21.88×21.32px at edges */}
            <button
              onClick={prevImage}
              style={{
                position: "absolute",
                left: "8px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "36px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(248,241,205,0.2)",
                borderRadius: "50%",
                border: "none",
                cursor: "pointer",
                zIndex: 5,
              }}
              aria-label="Previous image"
            >
              <ArrowLeft />
            </button>

            {/* Right arrow */}
            <button
              onClick={nextImage}
              style={{
                position: "absolute",
                right: "8px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "36px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(248,241,205,0.2)",
                borderRadius: "50%",
                border: "none",
                cursor: "pointer",
                zIndex: 5,
              }}
              aria-label="Next image"
            >
              <ArrowRight />
            </button>
          </div>

          {/* Thumbnails — Figma: 6 boxes of 58×33px with gap 3px */}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "3px",
            marginBottom: "32px",
          }}>
            {gallery.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImageIndex(i)}
                style={{
                  flex: "1 1 0",
                  maxWidth: "58px",
                  height: "33px",
                  overflow: "hidden",
                  border: i === activeImageIndex ? "2px solid #000000" : "2px solid transparent",
                  borderRadius: "2px",
                  cursor: "pointer",
                  padding: 0,
                  background: "none",
                }}
                aria-label={`View image ${i + 1}`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${i + 1}`}
                  className="block w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.style.backgroundColor = "#bbb"; }}
                />
              </button>
            ))}
          </div>

          {/* ═══ DESCRIPTION — Figma: top:680px, 383px width, text lines ═══ */}
          <div style={{ marginBottom: "40px" }}>
            <p style={{
              fontFamily: "'Helvetica', 'Arial', sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "22px",
              color: "#F8F1CD",
              textAlign: "justify",
            }}>
              {description}
            </p>
          </div>

          {/* Back button */}
          <button
            onClick={() => navigate("/services")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              fontSize: "16px",
              color: "#FBFEF9",
              backgroundColor: "#1b1b1b",
              border: "none",
              padding: "12px 24px",
              borderRadius: "4px",
              cursor: "pointer",
              marginBottom: "40px",
              transition: "background-color 0.2s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#fb5000"; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#1b1b1b"; }}
          >
            ← {currentLang.startsWith("en") ? "Back to Services" : "Volver a Servicios"}
          </button>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════
          DESKTOP LAYOUT (≥ 768px)
          Desktop design not ready — reusing mobile structure with larger sizes
          ════════════════════════════════════════════════════════════ */}
      <div className="hidden md:block">

        {/* Hero — larger */}
        <section
          className="relative w-full overflow-hidden"
          style={{ height: "500px" }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${service.heroImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "#999",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(180deg, #000000 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0) 100%)",
            }}
          />
        </section>

        <div className="mx-auto" style={{ maxWidth: "1440px", padding: "0 50px" }}>

          {/* Title overlapping hero */}
          <div style={{ marginTop: "-120px", position: "relative", zIndex: 10, marginBottom: "40px" }}>
            <h1 style={{
              fontFamily: "'Martillo Completa', sans-serif",
              fontWeight: 400,
              fontSize: "72px",
              lineHeight: "72px",
              color: "#FFFFFF",
              textShadow: "0 4px 12px rgba(0,0,0,0.5)",
              marginBottom: "16px",
            }}>
              {title}
            </h1>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "32px",
              lineHeight: "38px",
              color: "#FFFFFF",
              textShadow: "0 2px 8px rgba(0,0,0,0.4)",
            }}>
              {subtitle}
            </p>
          </div>

          {/* Category label */}
          <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "10px" }}>
            <span style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              fontSize: "18px",
              color: "#F8F1CD",
              backgroundColor: "rgba(255,255,255,0.15)",
              padding: "4px 16px",
              borderRadius: "3px",
            }}>
              {category}
            </span>
          </div>

          {/* Gallery — desktop: larger with grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "auto 1fr auto",
            gap: "16px",
            alignItems: "center",
            marginBottom: "16px",
          }}>
            <button
              onClick={prevImage}
              style={{
                width: "48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center",
                backgroundColor: "rgba(248,241,205,0.2)", borderRadius: "50%", border: "none", cursor: "pointer",
              }}
              aria-label="Previous"
            >
              <ArrowLeft />
            </button>
            <div style={{ width: "100%", aspectRatio: "16 / 7", backgroundColor: "#ccc", overflow: "hidden" }}>
              <img
                src={activeImage}
                alt={`${title} gallery`}
                className="block w-full h-full object-cover"
                style={{ transition: "opacity 0.3s ease" }}
                onError={(e) => { e.currentTarget.style.backgroundColor = "#aaa"; }}
              />
            </div>
            <button
              onClick={nextImage}
              style={{
                width: "48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center",
                backgroundColor: "rgba(248,241,205,0.2)", borderRadius: "50%", border: "none", cursor: "pointer",
              }}
              aria-label="Next"
            >
              <ArrowRight />
            </button>
          </div>

          {/* Thumbnails */}
          <div style={{ display: "flex", gap: "8px", marginBottom: "48px" }}>
            {gallery.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImageIndex(i)}
                style={{
                  width: "120px", height: "68px", overflow: "hidden",
                  border: i === activeImageIndex ? "3px solid #FB5000" : "3px solid transparent",
                  borderRadius: "3px", cursor: "pointer", padding: 0, background: "none",
                }}
                aria-label={`View image ${i + 1}`}
              >
                <img src={img} alt={`Thumb ${i + 1}`} className="block w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.style.backgroundColor = "#bbb"; }} />
              </button>
            ))}
          </div>

          {/* Description */}
          <div style={{ maxWidth: "900px", marginBottom: "48px" }}>
            <p style={{
              fontFamily: "'Helvetica', 'Arial', sans-serif",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "28px",
              color: "#F8F1CD",
              textAlign: "justify",
            }}>
              {description}
            </p>
          </div>

          {/* Back button */}
          <button
            onClick={() => navigate("/services")}
            style={{
              display: "flex", alignItems: "center", gap: "10px",
              fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "18px",
              color: "#FBFEF9", backgroundColor: "#1b1b1b", border: "none",
              padding: "14px 32px", borderRadius: "4px", cursor: "pointer",
              marginBottom: "80px", transition: "background-color 0.2s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#fb5000"; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#1b1b1b"; }}
          >
            ← {currentLang.startsWith("en") ? "Back to Services" : "Volver a Servicios"}
          </button>
        </div>
      </div>
    </div>
  );
}
