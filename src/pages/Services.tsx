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
  transition: max-height 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease;
}
.accordion-content.closed { max-height: 0; opacity: 0; }
.accordion-content.open { max-height: 900px; opacity: 1; }
.chevron-icon { transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
.chevron-icon.rotated { transform: rotate(180deg); }

/* Checker placeholder pattern — replica del Figma */
.checker-placeholder {
  background-color: #e0e0e0;
  background-image:
    linear-gradient(45deg, #c8c8c8 25%, transparent 25%),
    linear-gradient(-45deg, #c8c8c8 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #c8c8c8 75%),
    linear-gradient(-45deg, transparent 75%, #c8c8c8 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
}
`;

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      className={`chevron-icon${open ? " rotated" : ""} flex-shrink-0`}
      style={{ width: "clamp(30px, 3.7vw, 53px)", height: "clamp(18px, 2.2vw, 32px)" }}
      viewBox="0 0 53 32"
      fill="none"
    >
      <path
        d="M2 2L26.5 28L51 2"
        stroke="#000000"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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
        {/* ═══ HERO ═══ */}
        <section className="relative w-full h-[250px] md:h-[350px] lg:h-[500px] overflow-hidden">
          <div
            className="absolute inset-0 checker-placeholder"
            style={{
              backgroundImage: "url(/assets/projects/services-hero.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
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

                {/* ── Accordion header ── */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex flex-row justify-between items-center"
                  style={{
                    backgroundColor: "#FBFEF9",
                    borderTop: "1px solid #000000",
                    boxShadow: "0px -10px 20px rgba(0, 0, 0, 0.3)",
                    cursor: "pointer",
                    outline: "none",
                    // Figma: height 250px desktop con padding vertical que lo centra
                    // En mobile reducimos padding para que no sea tan alto
                    padding: "clamp(18px, 2.5vw, 26px) clamp(16px, 3.47vw, 50px)",
                    minHeight: "clamp(70px, 8vw, 115px)",
                    gap: "clamp(16px, 3.75vw, 54px)",
                  }}
                >
                  <span
                    className="text-left"
                    style={{
                      fontFamily: "'Martillo Completa', sans-serif",
                      fontWeight: 400,
                      color: "#000000",
                      textTransform: "uppercase",
                      // Figma: 48px desktop
                      fontSize: "clamp(18px, 3.33vw, 48px)",
                      lineHeight: "1.1",
                    }}
                  >
                    {title}
                  </span>
                  <ChevronDown open={isOpen} />
                </button>

                {/* ── Expandable content ── */}
                <div
                  className={`accordion-content ${isOpen ? "open" : "closed"}`}
                  style={{ backgroundColor: "#FBFEF9" }}
                >
                  {/*
                    Figma layout (Frame 41):
                    - Imagen izq: 657×438px
                    - Texto der: 656px — descripción en Helvetica justify +
                      subtítulo en cursiva debajo (cuando difiere del título)
                    - gap: 27px, padding contenedor: 50px 0
                  */}
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      padding: "clamp(24px, 3.47vw, 50px) 0",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        maxWidth: "1340px",
                        padding: "0 clamp(16px, 3.47vw, 50px)",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        gap: "clamp(16px, 1.87vw, 27px)",
                        flexWrap: "wrap",
                      }}
                    >
                      {/* Imagen / Checker placeholder — 657×438 en Figma */}
                      <div
                        className="checker-placeholder flex-shrink-0"
                        style={{
                          // En desktop: 657px fijo. En mobile: ~48% del viewport
                          width: "clamp(160px, 45.6vw, 657px)",
                          height: "clamp(107px, 30.4vw, 438px)",
                          overflow: "hidden",
                        }}
                      >
                        {service.image && (
                          <img
                            src={service.image}
                            alt={title}
                            style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
                            onError={(e) => { e.currentTarget.style.display = "none"; }}
                          />
                        )}
                      </div>

                      {/* Texto — columna derecha */}
                      <div
                        style={{
                          flex: "1 1 200px",
                          display: "flex",
                          flexDirection: "column",
                          gap: "clamp(10px, 1vw, 16px)",
                          alignItems: "flex-start",
                        }}
                      >
                        {/*
                          Figma: descripción en Helvetica / 32px / justify / #001011
                          En "production-service" la descripción es Helvetica normal,
                          y el subtítulo aparece en Inter italic abajo.
                          En los demás servicios donde el subtítulo difiere del título,
                          aparece en Inter italic como segunda línea.
                        */}
                        <p
                          style={{
                            fontFamily: "'Helvetica', 'Arial', sans-serif",
                            fontStyle: "normal",
                            fontWeight: 400,
                            fontSize: "clamp(13px, 2.22vw, 32px)",
                            lineHeight: "clamp(1.45, 2.57vw, 1.16)",
                            textAlign: "justify",
                            color: "#001011",
                            margin: 0,
                          }}
                        >
                          {description}
                        </p>

                        {/*
                          Subtítulo: visible en cursiva debajo de la descripción,
                          igual que en el Figma (imgs 2,3,4).
                          Solo se muestra si el subtítulo es diferente al título original.
                        */}
                        {subtitle !== service.titleEs && subtitle !== service.titleEn && (
                          <p
                            style={{
                              fontFamily: "'Inter', sans-serif",
                              fontStyle: "italic",
                              fontWeight: 400,
                              fontSize: "clamp(13px, 2.22vw, 32px)",
                              lineHeight: "clamp(1.45, 2.57vw, 1.22)",
                              textAlign: "justify",
                              color: "#001011",
                              margin: 0,
                            }}
                          >
                            {subtitle}
                          </p>
                        )}
                      </div>
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
