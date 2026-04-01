import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Services.css";

// ─── Service Data ─────────────────────────────────────────────────────
interface ServiceItem {
  id: string;
  titleEs: string;
  titleEn: string;
  subtitleEs: string;
  subtitleEn: string;
  descriptionEs: string;
  descriptionEn: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: "production-service",
    titleEs: "PRODUCTION SERVICE MÉXICO",
    titleEn: "PRODUCTION SERVICE MÉXICO",
    subtitleEs: "México sin fricción: permisos, logística y equipo local con estándares internacionales.",
    subtitleEn: "Frictionless Mexico: permits, logistics and local equipment with international standards.",
    descriptionEs: "Apoyo logístico y legal para productoras extranjeras que filman en territorio nacional.",
    descriptionEn: "Logistical and legal support for foreign production companies that film in national territory.",
  },
  {
    id: "set-dressing",
    titleEs: "DECORACIÓN Y SET DRESSING",
    titleEn: "DECORATION AND SET DRESSING",
    subtitleEs: "Decoración y Set Dressing",
    subtitleEn: "Decoration and Set Dressing",
    descriptionEs: "Conceptualización estética y propuesta visual con Concept Artists y Set Designers integrados desde el inicio, diseño de espacios, supervisión del departamento de arte y gestión administrativa desde preproducción hasta entrega.",
    descriptionEn: "Aesthetic conceptualization and visual proposal with Concept Artists and Set Designers integrated from the beginning, design of spaces, supervision of the art department and administrative management from pre-production to delivery.",
  },
  {
    id: "construction",
    titleEs: "CONSTRUCCIÓN Y ESCENOGRAFÍA",
    titleEn: "CONSTRUCTION AND SCENOGRAPHY",
    subtitleEs: "Fabricamos lo que no existe. Trasladamos lo que pesa.",
    subtitleEn: "We manufacture what does not exist. We transfer what is heavy.",
    descriptionEs: "Taller propio equipado con herramienta de carpintería, herrería, pintura y acabados escénicos. Corte CNC, impresión 3D y transporte propio.",
    descriptionEn: "Own workshop equipped with carpentry, blacksmithing, painting and scenic finishes. CNC cutting, 3D printing and own transport.",
  },
  {
    id: "production-design",
    titleEs: "DISEÑO DE PRODUCCIÓN",
    titleEn: "PRODUCTION DESIGN",
    subtitleEs: "Diseño de Producción",
    subtitleEn: "Production Design",
    descriptionEs: "Conceptualización estética y propuesta visual con Concept Artists y Set Designers integrados desde el inicio, diseño de espacios, supervisión del departamento de arte y gestión administrativa desde preproducción hasta entrega.",
    descriptionEn: "Aesthetic conceptualization and visual proposal with Concept Artists and Set Designers integrated from the beginning, design of spaces, supervision of the art department and administrative management from pre-production to delivery.",
  },
  {
    id: "supervision",
    titleEs: "SUPERVISIÓN DE DIRECCIÓN DE ARTE",
    titleEn: "ART DIRECTION SUPERVISION",
    subtitleEs: "Velará que todo cuanto se produzca en set sea acorde con la visión del Director.",
    subtitleEn: "Ensures everything produced on set aligns with the Director's vision.",
    descriptionEs: "Supervisión técnica y creativa del departamento de arte, asegurando coherencia visual entre sets, locaciones, props y utilería de acuerdo con el guión y la dirección artística.",
    descriptionEn: "Technical and creative supervision of the art department, ensuring visual coherence between sets, locations, props and set dressing according to the script and artistic direction.",
  },
  {
    id: "sustainable",
    titleEs: "ESCENOGRAFÍA SUSTENTABLE",
    titleEn: "SUSTAINABLE SCENOGRAPHY",
    subtitleEs: "En proceso — requisito normativo 2026.",
    subtitleEn: "In process — regulatory requirement 2026.",
    descriptionEs: "Conceptualización estética y propuesta visual con Concept Artists y Set Designers integrados desde el inicio, diseño de espacios, supervisión del departamento de arte y gestión administrativa desde preproducción hasta entrega.",
    descriptionEn: "Aesthetic conceptualization and visual proposal with Concept Artists and Set Designers integrated from the beginning, design of spaces, supervision of the art department and administrative management from pre-production to delivery.",
  },
];

// ─── Card layout config ───────────────────────────────────────────────
type ClipPos = "left" | "center" | "right";
type PaperVariant = "white" | "yellow";

interface CardConfig {
  id: string;
  tornClass: string;
  rotate: string;
  translateY: string;
  clipPos: ClipPos;
  paperVariant: PaperVariant;
  lined: boolean;
}

const CARD_CONFIGS: CardConfig[] = [
  {
    id: "production-service",
    tornClass: "torn-1",
    rotate: "-2.5deg",
    translateY: "0px",
    clipPos: "left",
    paperVariant: "white",
    lined: true,
  },
  {
    id: "set-dressing",
    tornClass: "torn-2",
    rotate: "1.8deg",
    translateY: "15px",
    clipPos: "left",
    paperVariant: "white",
    lined: true,
  },
  {
    id: "construction",
    tornClass: "torn-3",
    rotate: "1.5deg",
    translateY: "-10px",
    clipPos: "left",
    paperVariant: "white",
    lined: true,
  },
  {
    id: "production-design",
    tornClass: "torn-4",
    rotate: "-2deg",
    translateY: "8px",
    clipPos: "center",
    paperVariant: "yellow",
    lined: true,
  },
  {
    id: "supervision",
    tornClass: "torn-3",
    rotate: "1.0deg",
    translateY: "5px",
    clipPos: "left",
    paperVariant: "white",
    lined: false,
  },
  {
    id: "sustainable",
    tornClass: "torn-5",
    rotate: "-1.2deg",
    translateY: "0px",
    clipPos: "left",
    paperVariant: "white",
    lined: true,
  },
];

// ─── Slideshow Data ───────────────────────────────────────────────────
interface SlideContent {
  line1: string;
  highlight: string;
  line2: string;
  highlightEnd: string;
}

interface Slide {
  es: SlideContent;
  en: SlideContent;
}

const SLIDES: Slide[] = [
  {
    es: {
      line1: "Somos una firma de",
      highlight: "DISEÑO DE PRODUCCIÓN",
      line2: "basada en",
      highlightEnd: "MÉXICO.",
    },
    en: {
      line1: "We are a",
      highlight: "PRODUCTION DESIGN",
      line2: "firm based in",
      highlightEnd: "MEXICO.",
    },
  },
  {
    es: {
      line1: "Más de",
      highlight: "20 AÑOS",
      line2: "de experiencia en",
      highlightEnd: "CINE Y TV.",
    },
    en: {
      line1: "More than",
      highlight: "20 YEARS",
      line2: "of experience in",
      highlightEnd: "FILM & TV.",
    },
  },
  {
    es: {
      line1: "Construcción,",
      highlight: "ESCENOGRAFÍA",
      line2: "y dirección de arte para",
      highlightEnd: "EL MUNDO.",
    },
    en: {
      line1: "Construction,",
      highlight: "SCENOGRAPHY",
      line2: "and art direction for",
      highlightEnd: "THE WORLD.",
    },
  },
  {
    es: {
      line1: "Taller propio de",
      highlight: "CARPINTERÍA Y HERRERÍA",
      line2: "con",
      highlightEnd: "CORTE CNC.",
    },
    en: {
      line1: "Own workshop for",
      highlight: "CARPENTRY & METALWORK",
      line2: "with",
      highlightEnd: "CNC CUTTING.",
    },
  },
  {
    es: {
      line1: "Equipo de",
      highlight: "CONCEPT ARTISTS",
      line2: "integrados desde el",
      highlightEnd: "INICIO.",
    },
    en: {
      line1: "Team of",
      highlight: "CONCEPT ARTISTS",
      line2: "integrated from",
      highlightEnd: "DAY ONE.",
    },
  },
  {
    es: {
      line1: "Production Service para",
      highlight: "PRODUCTORAS EXTRANJERAS",
      line2: "en",
      highlightEnd: "MÉXICO.",
    },
    en: {
      line1: "Production Service for",
      highlight: "FOREIGN STUDIOS",
      line2: "in",
      highlightEnd: "MEXICO.",
    },
  },
];

// ─── Torn Card Component ──────────────────────────────────────────────
interface TornCardProps {
  service: ServiceItem;
  config: CardConfig;
  isEn: boolean;
}

function TornCard({ service, config, isEn }: TornCardProps) {
  const title = isEn ? service.titleEn : service.titleEs;
  const subtitle = isEn ? service.subtitleEn : service.subtitleEs;
  const description = isEn ? service.descriptionEn : service.descriptionEs;

  const paperClasses = [
    "torn-paper",
    config.tornClass,
    config.lined ? "torn-paper-lined" : "",
    config.paperVariant === "yellow" ? "torn-paper-yellow" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    // card-wrapper: handles rotation, drop-shadow
    // NO clip-path here — so paper clip renders fully visible outside torn shape
    <div
      className="card-wrapper"
      style={{
        transform: `rotate(${config.rotate}) translateY(${config.translateY})`,
      }}
    >
      {/* Paper clip — OUTSIDE clip-path, always visible */}
      <div className={`paper-clip paper-clip-${config.clipPos}`} />

      {/* torn-paper: has clip-path + white/yellow background */}
      <div className={paperClasses}>
        <div className="torn-card-inner">
          <h2 className="card-title">{title}</h2>
          {/* FIGMA ORDER: description first, subtitle (italic) at the bottom */}
          <p className="card-description">{description}</p>
          <p className="card-subtitle">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

// ─── Services Page ────────────────────────────────────────────────────
export default function Services() {
  const { i18n } = useTranslation();
  const isEn = i18n.language.startsWith("en");
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="services-page">

      {/* ═══ SECCIÓN 1: Slideshow introductorio ═══ */}
      <section className="services-slideshow">
        {SLIDES.map((slide, i) => {
          const content = isEn ? slide.en : slide.es;
          return (
            <div
              key={i}
              className={`slideshow-slide${i === activeSlide ? " active" : ""}`}
            >
              <p className="slide-line">{content.line1}</p>
              <p className="slide-line">
                <strong>{content.highlight}</strong>
              </p>
              <p className="slide-line">
                {content.line2}{" "}
                <strong>{content.highlightEnd}</strong>
              </p>
            </div>
          );
        })}

        <div className="slideshow-dots">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`slideshow-dot${i === activeSlide ? " dot-active" : ""}`}
              onClick={() => setActiveSlide(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ═══ SECCIÓN 2: Tarjetas papel rasgado ═══ */}
      <div className="services-cards-bg">
        <section className="services-cards">
          {SERVICES.map((service, index) => {
            const config = CARD_CONFIGS[index];
            return (
              <TornCard
                key={service.id}
                service={service}
                config={config}
                isEn={isEn}
              />
            );
          })}
        </section>
      </div>

      {/* ═══ SECCIÓN 3: Infraestructura y Certificaciones ═══ */}
      <section className="services-infra">
        <div className="infra-inner">
          <div className="infra-block">
            <h2 className="infra-title">{isEn ? "INFRASTRUCTURE" : "INFRAESTRUCTURA"}</h2>
            <p className="infra-text">
              {isEn
                ? "Equipped offices — Construction workshop — Props and decoration warehouse — CNC cutting — 3D printing — Own transport."
                : "Oficinas equipadas — Taller de construcción — Almacén de props y decoración — Corte CNC — Impresión 3D — Transporte propio."
              }
            </p>
          </div>
          <div className="infra-block">
            <h2 className="infra-title">{isEn ? "CERTIFICATIONS" : "CERTIFICACIONES"}</h2>
            <p className="infra-text">
              {isEn
                ? "RFC (In process) — REPSE (In process)"
                : "RFC (En proceso) — REPSE (En proceso)"
              }
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}