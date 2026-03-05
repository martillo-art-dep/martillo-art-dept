import { useState } from "react";
import { useTranslation } from "react-i18next";

// ─── Service Data ────────────────────────────────────────────────────
interface ServiceItem {
  id: string;
  titleEs: string;
  titleEn: string;
  image: string;
  subtitleEs: string;
  subtitleEn: string;
  descriptionEs: string;
  descriptionEn: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: "production-design",
    titleEs: "DISEÑO DE PRODUCCIÓN & DIRECCIÓN DE ARTE",
    titleEn: "PRODUCTION DESIGN & ART DIRECTION",
    image: "",
    subtitleEs: "Diseño de Producción & Dirección de Arte",
    subtitleEn: "Production Design & Art Direction",
    descriptionEs: "Conceptualización estética y propuesta visual con Concept Artists y Set Designers integrados desde el inicio, diseño de espacios, supervisión del departamento de arte y gestión administrativa desde preproducción hasta entrega.",
    descriptionEn: "Aesthetic conceptualization and visual proposal with Concept Artists and Set Designers integrated from the beginning, design of spaces, supervision of the art department and administrative management from pre-production to delivery.",
  },
  {
    id: "construction",
    titleEs: "CONSTRUCCIÓN Y ESCENOGRAFÍA",
    titleEn: "CONSTRUCTION AND SCENOGRAPHY",
    image: "",
    subtitleEs: "Fabricamos lo que no existe. Trasladamos lo que pesa.",
    subtitleEn: "We manufacture what does not exist. We transfer what is heavy.",
    descriptionEs: "Taller propio equipado con herramienta de carpintería, herrería, pintura y acabados escénicos. Corte CNC, impresión 3D y transporte propio.",
    descriptionEn: "Own workshop equipped with carpentry, blacksmithing, painting and scenic finishes. CNC cutting, 3D printing and own transport.",
  },
  {
    id: "set-dressing",
    titleEs: "DECORACIÓN Y SET DRESSING",
    titleEn: "DECORATION AND SET DRESSING",
    image: "",
    subtitleEs: "Decoración y Set Dressing",
    subtitleEn: "Decoration and Set Dressing",
    descriptionEs: "Selección, colocación y ajuste fino de cada objeto en cuadro — por profesionales con criterio y trayectoria en cine, series y comerciales.",
    descriptionEn: "Selection, placement and fine-tuning of each object in the frame — by professionals with criteria and experience in film, series and commercials.",
  },
  {
    id: "sustainable",
    titleEs: "ESCENOGRAFÍA SUSTENTABLE",
    titleEn: "SUSTAINABLE SCENOGRAPHY",
    image: "",
    subtitleEs: "En proceso — requisito normativo 2026",
    subtitleEn: "In process — regulatory requirement 2026",
    descriptionEs: "Procesos alineados con las normativas de producción sostenible en México. Una exigencia que ya estamos construyendo.",
    descriptionEn: "Processes aligned with sustainable production regulations in Mexico. A demand that we are already building.",
  },
  {
    id: "production-service",
    titleEs: "PRODUCTION SERVICE MÉXICO",
    titleEn: "PRODUCTION SERVICE MÉXICO",
    image: "",
    subtitleEs: "México sin fricción: permisos, logística y equipo local con estándares internacionales.",
    subtitleEn: "Frictionless Mexico: permits, logistics and local equipment with international standards.",
    descriptionEs: "Apoyo logístico y legal para productoras extranjeras que filman en territorio nacional.",
    descriptionEn: "Logistical and legal support for foreign production companies that film in national territory.",
  },
  {
    id: "infrastructure",
    titleEs: "INFRAESTRUCTURA",
    titleEn: "INFRASTRUCTURE",
    image: "",
    subtitleEs: "Infraestructura",
    subtitleEn: "Infrastructure",
    descriptionEs: "Oficinas equipadas — Taller de construcción — Almacén de props y decoración — Corte CNC — Impresión 3D — Transporte propio.",
    descriptionEn: "Equipped offices — Construction workshop — Props and decoration warehouse — CNC cutting — 3D printing — Own transport.",
  },
  {
    id: "certifications",
    titleEs: "CERTIFICACIONES",
    titleEn: "CERTIFICATIONS",
    image: "",
    subtitleEs: "Certificaciones",
    subtitleEn: "Certifications",
    descriptionEs: "RFC (En proceso) — REPSE (En proceso)",
    descriptionEn: "RFC (In Process) — REPSE (In Process)",
  },
];

// ─── CSS ─────────────────────────────────────────────────────────────
const accordionCSS = `
.accordion-content {
  overflow: hidden;
  transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease;
}
.accordion-content.closed { max-height: 0; opacity: 0; }
.accordion-content.open { max-height: 800px; opacity: 1; }
.chevron-icon { transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
.chevron-icon.rotated { transform: rotate(180deg); }
`;

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      className={`chevron-icon${open ? " rotated" : ""} w-[30px] h-[18px] md:w-[40px] md:h-[24px] lg:w-[53px] lg:h-[32px]`}
      viewBox="0 0 53 32"
      fill="none"
    >
      <path d="M2 2L26.5 28L51 2" stroke="#000000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ─── Services Page ───────────────────────────────────────────────────
export default function Services() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <style>{accordionCSS}</style>

      <div
        className="w-full min-h-screen"
        style={{
          backgroundColor: "#1b1b1b",
          backgroundImage: "url(/assets/bg-gradient-dark.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* ═══ HERO — responsive height ═══ */}
        <section
          className="relative w-full h-[250px] md:h-[350px] lg:h-[500px] overflow-hidden"
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url(/assets/projects/services-hero.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "#ccc",
            }}
          />
        </section>

        {/* ═══ ACCORDION ═══ */}
        <section className="w-full">
          {SERVICES.map((service, index) => {
            const isOpen = openIndex === index;
            const title = currentLang.startsWith("en") ? service.titleEn : service.titleEs;
            const subtitle = currentLang.startsWith("en") ? service.subtitleEn : service.subtitleEs;
            const description = currentLang.startsWith("en") ? service.descriptionEn : service.descriptionEs;

            return (
              <div key={service.id}>
                {/* Accordion header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center"
                  style={{
                    backgroundColor: "#FBFEF9",
                    borderTop: "1px solid #000000",
                    boxShadow: "0px -10px 20px rgba(0, 0, 0, 0.3)",
                    cursor: "pointer",
                    outline: "none",
                    padding: "0 50px",
                    height: "250px",
                  }}
                >
                  <span
                    className="text-[24px] leading-[28px] md:text-[42px] md:leading-[46px] lg:text-[66px] lg:leading-[66px] text-left"
                    style={{
                      fontFamily: "'Martillo Completa', sans-serif",
                      fontWeight: 400,
                      color: "#000000",
                    }}
                  >
                    {title}
                  </span>
                  <ChevronDown open={isOpen} />
                </button>

                {/* Expandable content */}
                <div className={`accordion-content ${isOpen ? "open" : "closed"}`} style={{ backgroundColor: "#FBFEF9" }}>
                  <div
                    className="mx-auto flex flex-col gap-6 md:grid md:gap-8 lg:gap-10"
                    style={{
                      maxWidth: "1440px",
                      padding: "40px 50px 60px",
                      gridTemplateColumns: "minmax(0, 400px) 1fr",
                      alignItems: "start",
                    }}
                  >
                    {/* Text content */}
                    <div className="flex flex-col gap-4 md:gap-5">
                      <h3
                        className="text-[24px] leading-[30px] md:text-[30px] md:leading-[38px] lg:text-[36px] lg:leading-[44px]"
                        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, color: "#000" }}
                      >
                        {subtitle}
                      </h3>
                      <p
                        className="text-[15px] md:text-[16px] lg:text-[18px]"
                        style={{
                          fontFamily: "'Helvetica', 'Arial', sans-serif",
                          fontWeight: 400,
                          lineHeight: "1.5",
                          color: "#000",
                          textAlign: "justify",
                        }}
                      >
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* Dark spacer */}
        <div className="h-[150px] md:h-[200px] lg:h-[300px]" />
      </div>
    </>
  );
}
