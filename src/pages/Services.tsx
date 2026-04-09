import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./Services.css";

interface ServiceItem {
  id: string;
  titleEs: string;
  titleEn: string;
  titleEsLine2?: string;
  titleEnLine2?: string;
  descriptionEs: string;
  descriptionEn: string;
}

interface SlideContent {
  line1: string;
  highlight: string;
  line2: string;
  highlightEnd: string;
}

interface Slide {
  es: SlideContent;
  en: SlideContent;
  image: string;
}

const SLIDES: Slide[] = [
  {
    image: "/assets/servicios-01.jpg",
    es: { line1: "Somos una firma de", highlight: "DISEÑO DE PRODUCCIÓN", line2: "basada en", highlightEnd: "MÉXICO." },
    en: { line1: "We are a", highlight: "PRODUCTION DESIGN", line2: "firm based in", highlightEnd: "MEXICO." },
  },
  {
    image: "/assets/servicios-02.jpg",
    es: { line1: "Un equipo multidisciplinario de", highlight: "ARTISTAS Y TÉCNICOS ESPECIALIZADOS", line2: "en la creación de universos visuales para la", highlightEnd: "INDUSTRIA DEL ENTRETENIMIENTO." },
    en: { line1: "A multidisciplinary team of", highlight: "SPECIALIZED ARTISTS AND TECHNICIANS", line2: "creating visual universes for the", highlightEnd: "ENTERTAINMENT INDUSTRY." },
  },
  {
    image: "/assets/servicios-03.jpeg",
    es: { line1: "Operamos en dos registros simultáneos: como proveedores estratégicos del", highlight: "DEPARTAMENTO DE ARTE,", line2: "y como", highlightEnd: "CASA PRODUCTORA INDEPENDIENTE." },
    en: { line1: "We operate in two simultaneous roles: as strategic providers for the", highlight: "ART DEPARTMENT,", line2: "and as an", highlightEnd: "INDEPENDENT PRODUCTION HOUSE." },
  },
  {
    image: "/assets/servicios-04.jpg",
    es: { line1: "No solo ejecutamos la visión —", highlight: "LA RESPALDAMOS ESTRUCTURALMENTE.", line2: "", highlightEnd: "" },
    en: { line1: "We don't just execute the vision —", highlight: "WE BACK IT UP STRUCTURALLY.", line2: "", highlightEnd: "" },
  },
  {
    image: "/assets/servicios-05.jpg",
    es: { line1: "Cada", highlight: "PESO INVERTIDO", line2: "en el arte es visible en pantalla, auditable en libros y", highlightEnd: "DEDUCIBLE EN TU DECLARACIÓN." },
    en: { line1: "Every", highlight: "INVESTED PENNY", line2: "in art is visible on screen, auditable in books, and", highlightEnd: "TAX DEDUCTIBLE." },
  },
  {
    image: "/assets/servicios-06.jpg",
    es: { line1: "En", highlight: "MARTILLO ART DEPT.,", line2: "la libertad creativa y el rigor administrativo no se contradicen:", highlightEnd: "SE FORJAN JUNTOS." },
    en: { line1: "At", highlight: "MARTILLO ART DEPT.,", line2: "creative freedom and administrative rigor do not contradict: ", highlightEnd: "THEY ARE FORGED TOGETHER." },
  },
];

const SERVICES: ServiceItem[] = [
  {
    id: "production-design",
    titleEs: "DISEÑO DE PRODUCCIÓN",
    titleEsLine2: "& DIRECCIÓN DE ARTE",
    titleEn: "PRODUCTION DESIGN",
    titleEnLine2: "& ART DIRECTION",
    descriptionEs: "Conceptualización estética y propuesta visual con Concept Artists y Set Designers integrados desde el inicio, diseño de espacios, supervisión del departamento de arte y gestión administrativa desde preproducción hasta entrega.",
    descriptionEn: "Aesthetic conceptualization and visual proposal with Concept Artists and Set Designers integrated from the beginning, design of spaces, supervision of the art department and administrative management from pre-production to delivery.",
  },
  {
    id: "supervision",
    titleEs: "SUPERVISIÓN DE DIRECCIÓN DE ARTE",
    titleEn: "ART DIRECTION SUPERVISION",
    descriptionEs: "Proveemos el puente necesario entre idea conceptual y ejecución del proyecto, el control de calidad, logístico y presupuestal son fundamentales para lograr un resultado óptimo.",
    descriptionEn: "We provide the necessary bridge between conceptual idea and project execution; quality, logistical, and budgetary control are fundamental to achieving an optimal result.",
  },
  {
    id: "construction",
    titleEs: "CONSTRUCCIÓN Y ESCENOGRAFÍA",
    titleEn: "CONSTRUCTION AND SCENOGRAPHY",
    descriptionEs: "Taller propio equipado con herramienta de carpintería, herrería, pintura y acabados escénicos. Corte CNC, impresión 3D y transporte propio. Fabricamos lo que no existe. Trasladamos lo que pesa.",
    descriptionEn: "Own workshop equipped with carpentry, blacksmithing, painting and scenic finishes. CNC cutting, 3D printing and own transport. We manufacture what does not exist. We transfer what is heavy.",
  },
  {
    id: "set-dressing",
    titleEs: "DECORACIÓN Y SET DRESSING",
    titleEn: "DECORATION AND SET DRESSING",
    descriptionEs: "Selección, colocación y ajuste fino de cada objeto en cuadro — por profesionales con criterio y trayectoria en cine, series y comerciales.",
    descriptionEn: "Selection, placement and fine-tuning of each object in the frame — by professionals with criteria and experience in film, series and commercials.",
  },
  {
    id: "sustainable",
    titleEs: "ESCENOGRAFÍA SUSTENTABLE",
    titleEn: "SUSTAINABLE SCENOGRAPHY",
    descriptionEs: "(En proceso — requisito normativo 2026) Procesos alineados con las normativas de producción sostenible en México. Una exigencia que ya estamos construyendo.",
    descriptionEn: "(In process — regulatory requirement 2026) Processes aligned with sustainable production regulations in Mexico. A demand that we are already building.",
  },
  {
    id: "production-service",
    titleEs: "PRODUCTION SERVICE MÉXICO",
    titleEn: "PRODUCTION SERVICE MEXICO",
    descriptionEs: "Apoyo logístico y legal para productoras extranjeras que filman en territorio nacional. México sin fricción: permisos, logística y equipo local con estándares internacionales.",
    descriptionEn: "Logistical and legal support for foreign production companies that film in national territory. Frictionless Mexico: permits, logistics and local equipment with international standards.",
  },
  {
    id: "infrastructure",
    titleEs: "INFRAESTRUCTURA",
    titleEn: "INFRASTRUCTURE",
    descriptionEs: "Oficinas equipadas — Taller de construcción — Almacén de props y decoración — Corte CNC — Impresión 3D — Transporte propio.",
    descriptionEn: "Equipped offices — Construction workshop — Props and decoration warehouse — CNC cutting — 3D printing — Own transport.",
  },
  {
    id: "certifications",
    titleEs: "CERTIFICACIONES",
    titleEn: "CERTIFICATIONS",
    descriptionEs: "RFC (En proceso) — REPSE (En proceso)",
    descriptionEn: "RFC (In Process) — REPSE (In Process)",
  },
];

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

function AccordionItem({ service, isOpen, isEn, onToggle }: { service: ServiceItem; isOpen: boolean; isEn: boolean; onToggle: () => void }) {
  const title = isEn ? service.titleEn : service.titleEs;
  const titleL2 = isEn ? service.titleEnLine2 : service.titleEsLine2;
  const description = isEn ? service.descriptionEn : service.descriptionEs;
  const bodyRef = useRef<HTMLDivElement>(null);
  const [bodyHeight, setBodyHeight] = useState(0);

  useEffect(() => {
    if (!bodyRef.current) return;
    setBodyHeight(isOpen ? bodyRef.current.scrollHeight : 0);
  }, [isOpen, description]);

  return (
    <div className={`accordion-item${isOpen ? " accordion-item--open" : ""}`}>
      <button className="accordion-trigger" onClick={onToggle} aria-expanded={isOpen} type="button">
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
        <span className="accordion-icon" aria-hidden="true">{isOpen ? "−" : "+"}</span>
      </button>
      <div ref={bodyRef} className="accordion-body" style={{ maxHeight: `${bodyHeight}px` }}>
        <p className="accordion-description">{description}</p>
      </div>
    </div>
  );
}

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
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const goTo = (index: number) => {
    setActiveSlide(((index % total) + total) % total);
    resetTimer();
  };

  return (
    <div className="services-page">
      <section className="services-slideshow">
        <div className="slideshow-bg" aria-hidden="true" />
        {SLIDES.map((slide, i) => {
          const content = isEn ? slide.en : slide.es;
          return (
            <div 
              key={i} 
              className={`slideshow-slide${i === activeSlide ? " active" : ""}`}
              style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${slide.image})` }}
            >
              <p className="slide-line">{content.line1}</p>
              <p className="slide-line"><strong>{content.highlight}</strong></p>
              <p className="slide-line">{content.line2} <strong>{content.highlightEnd}</strong></p>
            </div>
          );
        })}
        <button className="slideshow-nav slideshow-nav--prev" onClick={() => goTo(activeSlide - 1)} type="button">
          <ArrowIcon direction="left" />
        </button>
        <button className="slideshow-nav slideshow-nav--next" onClick={() => goTo(activeSlide + 1)} type="button">
          <ArrowIcon direction="right" />
        </button>
        <div className="slideshow-dots">
          {SLIDES.map((_, i) => (
            <button key={i} className={`slideshow-dot${i === activeSlide ? " dot-active" : ""}`} onClick={() => goTo(i)} type="button" />
          ))}
        </div>
      </section>

      <section className="services-accordion-section">
        <div className="services-accordion-inner">
          <div className="services-accordion-heading">
            <h2 className="services-heading-text">{isEn ? "OUR\nSERVICES" : "NUESTROS\nSERVICIOS"}</h2>
          </div>
          <div className="services-accordion-list">
            {SERVICES.map((service) => (
              <AccordionItem key={service.id} service={service} isOpen={openId === service.id} isEn={isEn} onToggle={() => setOpenId(openId === service.id ? null : service.id)} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}