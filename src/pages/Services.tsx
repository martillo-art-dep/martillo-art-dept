import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./Services.css";

// ─── Types ────────────────────────────────────────────────────────────
interface ServiceItem {
  id: string;
  titleEs: string;
  titleEn: string;
  /** Segunda línea del título — cuando el Figma parte el texto en dos párrafos */
  titleEsLine2?: string;
  titleEnLine2?: string;
  descriptionEs: string;
  descriptionEn: string;
}

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
  // bgImage?: string  ← add per-slide photo here when Carry/Pache provide assets
}

const SLIDES: Slide[] = [
  {
    es: { line1: "Somos una firma de", highlight: "DISEÑO DE PRODUCCIÓN", line2: "basada en", highlightEnd: "MÉXICO." },
    en: { line1: "We are a", highlight: "PRODUCTION DESIGN", line2: "firm based in", highlightEnd: "MEXICO." },
  },
  {
    es: { line1: "Más de", highlight: "20 AÑOS", line2: "de experiencia en", highlightEnd: "CINE Y TV." },
    en: { line1: "More than", highlight: "20 YEARS", line2: "of experience in", highlightEnd: "FILM & TV." },
  },
  {
    es: { line1: "Construcción,", highlight: "ESCENOGRAFÍA", line2: "y dirección de arte para", highlightEnd: "EL MUNDO." },
    en: { line1: "Construction,", highlight: "SCENOGRAPHY", line2: "and art direction for", highlightEnd: "THE WORLD." },
  },
  {
    es: { line1: "Taller propio de", highlight: "CARPINTERÍA Y HERRERÍA", line2: "con", highlightEnd: "CORTE CNC." },
    en: { line1: "Own workshop for", highlight: "CARPENTRY & METALWORK", line2: "with", highlightEnd: "CNC CUTTING." },
  },
  {
    es: { line1: "Equipo de", highlight: "CONCEPT ARTISTS", line2: "integrados desde el", highlightEnd: "INICIO." },
    en: { line1: "Team of", highlight: "CONCEPT ARTISTS", line2: "integrated from", highlightEnd: "DAY ONE." },
  },
  {
    es: { line1: "Production Service para", highlight: "PRODUCTORAS EXTRANJERAS", line2: "en", highlightEnd: "MÉXICO." },
    en: { line1: "Production Service for", highlight: "FOREIGN STUDIOS", line2: "in", highlightEnd: "MEXICO." },
  },
];

// ─── Service Data ─────────────────────────────────────────────────────
const SERVICES: ServiceItem[] = [
  {
    id: "production-design",
    titleEs: "DISEÑO DE PRODUCCIÓN",
    titleEsLine2: "& DIRECCIÓN DE ARTE",
    titleEn: "PRODUCTION DESIGN",
    titleEnLine2: "& ART DIRECTION",
    descriptionEs:
      "Conceptualización estética y propuesta visual con Concept Artists y Set Designers integrados desde el inicio, diseño de espacios, supervisión del departamento de arte y gestión administrativa desde preproducción hasta entrega.",
    descriptionEn:
      "Aesthetic conceptualization and visual proposal with Concept Artists and Set Designers integrated from the beginning, design of spaces, supervision of the art department and administrative management from pre-production to delivery.",
  },
  {
    id: "supervision",
    titleEs: "SUPERVISIÓN DE DIRECCIÓN DE ARTE",
    titleEn: "ART DIRECTION SUPERVISION",
    descriptionEs:
      "Supervisión técnica y creativa del departamento de arte, asegurando coherencia visual entre sets, locaciones, props y utilería de acuerdo con el guión y la dirección artística.",
    descriptionEn:
      "Technical and creative supervision of the art department, ensuring visual coherence between sets, locations, props and set dressing according to the script and artistic direction.",
  },
  {
    id: "construction",
    titleEs: "CONSTRUCCIÓN & ESCENOGRAFÍA",
    titleEn: "CONSTRUCTION & SCENOGRAPHY",
    descriptionEs:
      "Taller propio equipado con herramienta de carpintería, herrería, pintura y acabados escénicos. Corte CNC, impresión 3D y transporte propio.",
    descriptionEn:
      "Own workshop equipped with carpentry, blacksmithing, painting and scenic finishes. CNC cutting, 3D printing and own transport.",
  },
  {
    id: "set-dressing",
    titleEs: "DECORACIÓN & SET DRESSING",
    titleEn: "DECORATION & SET DRESSING",
    descriptionEs:
      "Conceptualización estética y propuesta visual con Concept Artists y Set Designers integrados desde el inicio, diseño de espacios, supervisión del departamento de arte y gestión administrativa desde preproducción hasta entrega.",
    descriptionEn:
      "Aesthetic conceptualization and visual proposal with Concept Artists and Set Designers integrated from the beginning, design of spaces, supervision of the art department and administrative management from pre-production to delivery.",
  },
  {
    id: "sustainable",
    titleEs: "ESCENOGRAFÍA SUSTENTABLE",
    titleEn: "SUSTAINABLE SCENOGRAPHY",
    descriptionEs:
      "En proceso — requisito normativo 2026. Desarrollo de prácticas sostenibles para la construcción y desmontaje de sets, minimizando el impacto ambiental.",
    descriptionEn:
      "In process — regulatory requirement 2026. Development of sustainable practices for the construction and dismantling of sets, minimizing environmental impact.",
  },
  {
    id: "production-service",
    titleEs: "PRODUCTION SERVICE MÉXICO",
    titleEn: "PRODUCTION SERVICE MEXICO",
    descriptionEs:
      "Apoyo logístico y legal para productoras extranjeras que filman en territorio nacional. México sin fricción: permisos, logística y equipo local con estándares internacionales.",
    descriptionEn:
      "Logistical and legal support for foreign production companies that film in national territory. Frictionless Mexico: permits, logistics and local equipment with international standards.",
  },
  {
    id: "infrastructure",
    titleEs: "INFRAESTRUCTURA",
    titleEn: "INFRASTRUCTURE",
    descriptionEs:
      "Oficinas equipadas — Taller de construcción — Almacén de props y decoración — Corte CNC — Impresión 3D — Transporte propio.",
    descriptionEn:
      "Equipped offices — Construction workshop — Props and decoration warehouse — CNC cutting — 3D printing — Own transport.",
  },
  {
    id: "certifications",
    titleEs: "CERTIFICACIONES",
    titleEn: "CERTIFICATIONS",
    descriptionEs: "RFC (En proceso) — REPSE (En proceso)",
    descriptionEn: "RFC (In process) — REPSE (In process)",
  },
];

// ─── Nav Arrow ────────────────────────────────────────────────────────
function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {direction === "left"
        ? <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        : <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      }
    </svg>
  );
}

// ─── Accordion Item ───────────────────────────────────────────────────
interface AccordionItemProps {
  service: ServiceItem;
  isOpen: boolean;
  isEn: boolean;
  onToggle: () => void;
}

function AccordionItem({ service, isOpen, isEn, onToggle }: AccordionItemProps) {
  const title    = isEn ? service.titleEn    : service.titleEs;
  const titleL2  = isEn ? service.titleEnLine2 : service.titleEsLine2;
  const description = isEn ? service.descriptionEn : service.descriptionEs;

  /*
   * FIX ZOOM: El bug de zoom era causado por el recalculo de background-size
   * en el elemento padre cuando cambiaba la altura via max-height en CSS.
   * Solución: usamos un ref para medir el scrollHeight real del cuerpo y
   * aplicarlo como inline style. El fondo usa background-attachment: scroll
   * con background-size: cover fijo — no se recalcula al expandir.
   */
  const bodyRef = useRef<HTMLDivElement>(null);
  const [bodyHeight, setBodyHeight] = useState(0);

  useEffect(() => {
    if (!bodyRef.current) return;
    setBodyHeight(isOpen ? bodyRef.current.scrollHeight : 0);
  }, [isOpen, description]);

  return (
    <div className={`accordion-item${isOpen ? " accordion-item--open" : ""}`}>
      <button
        className="accordion-trigger"
        onClick={onToggle}
        aria-expanded={isOpen}
        type="button"
      >
        {/*
          Figma: el primer servicio tiene el título en 2 líneas fijas:
            línea 1 → "DISEÑO DE PRODUCCIÓN"
            línea 2 → "& DIRECCIÓN DE ARTE"
          Cuando titleLine2 existe renderizamos ambas líneas como bloques
          independientes — el salto es fijo, no depende del ancho del contenedor.
        */}
        <span className="accordion-title">
          {titleL2 ? (
            <>
              <span className="accordion-title-line">{title}</span>
              <span className="accordion-title-line">{titleL2}</span>
            </>
          ) : (
            title
          )}
        </span>

        {/* Figma Variant2 (hover): el ícono + también cambia a naranja — ver CSS */}
        <span className="accordion-icon" aria-hidden="true">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      <div
        ref={bodyRef}
        className="accordion-body"
        style={{ maxHeight: `${bodyHeight}px` }}
        aria-hidden={!isOpen}
      >
        <p className="accordion-description">{description}</p>
      </div>
    </div>
  );
}

// ─── Services Page ────────────────────────────────────────────────────
export default function Services() {
  const { i18n } = useTranslation();
  const isEn = i18n.language.startsWith("en");
  const [activeSlide, setActiveSlide] = useState(0);
  const [openId, setOpenId] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = SLIDES.length;

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % total);
    }, 5000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const goTo = (index: number) => {
    setActiveSlide(((index % total) + total) % total);
    resetTimer();
  };

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="services-page">

      {/* ═══ SECCIÓN 1: Slideshow ═══ */}
      <section className="services-slideshow">
        {/*
          Capa de fondo desacoplada del contenido de texto.
          Para agregar fotos por slide: añadir <div className="slideshow-bg-img active"
          style={{ backgroundImage: `url(${slide.bgImage})` }} /> aquí adentro,
          uno por slide, con transición opacity. El dark texture queda como fallback.
        */}
        <div className="slideshow-bg" aria-hidden="true" />

        {/* Slides de texto */}
        {SLIDES.map((slide, i) => {
          const content = isEn ? slide.en : slide.es;
          return (
            <div key={i} className={`slideshow-slide${i === activeSlide ? " active" : ""}`}>
              <p className="slide-line">{content.line1}</p>
              <p className="slide-line"><strong>{content.highlight}</strong></p>
              <p className="slide-line">{content.line2} <strong>{content.highlightEnd}</strong></p>
            </div>
          );
        })}

        {/* Flechas de navegación */}
        <button
          className="slideshow-nav slideshow-nav--prev"
          onClick={() => goTo(activeSlide - 1)}
          aria-label="Slide anterior"
          type="button"
        >
          <ArrowIcon direction="left" />
        </button>
        <button
          className="slideshow-nav slideshow-nav--next"
          onClick={() => goTo(activeSlide + 1)}
          aria-label="Siguiente slide"
          type="button"
        >
          <ArrowIcon direction="right" />
        </button>

        {/* Dots */}
        <div className="slideshow-dots">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`slideshow-dot${i === activeSlide ? " dot-active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ═══ SECCIÓN 2: Accordion de Servicios ═══ */}
      <section className="services-accordion-section">
        <div className="services-accordion-inner">

          {/* Columna izquierda: heading */}
          <div className="services-accordion-heading">
            <h2 className="services-heading-text">
              {isEn ? "OUR\nSERVICES" : "NUESTROS\nSERVICIOS"}
            </h2>
          </div>

          {/* Columna derecha: accordion */}
          <div className="services-accordion-list">
            {SERVICES.map((service) => (
              <AccordionItem
                key={service.id}
                service={service}
                isOpen={openId === service.id}
                isEn={isEn}
                onToggle={() => handleToggle(service.id)}
              />
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}