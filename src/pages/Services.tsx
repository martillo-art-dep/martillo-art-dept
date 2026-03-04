import { useState } from "react";
import { useNavigate } from "react-router";
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
  relatedCategory?: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: "principales",
    titleEs: "SERVICIOS PRINCIPALES",
    titleEn: "MAIN SERVICES",
    image: "/assets/projects/service-1.jpg",
    subtitleEs: "Titulo Servicio",
    subtitleEn: "Service Title",
    descriptionEs: "Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi ligula tempus diam nisl parturient per penatibus. Consequat vehicula tempor accumsan purus, pellentesque etiam. Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi ligula tempus diam nisl parturient per penatibus.",
    descriptionEn: "Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi ligula tempus diam nisl parturient per penatibus. Consequat vehicula tempor accumsan purus, pellentesque etiam. Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi ligula tempus diam nisl parturient per penatibus.",
    relatedCategory: "largometrajes",
  },
  {
    id: "especializados",
    titleEs: "SERVICIOS ESPECIALIZADOS",
    titleEn: "SPECIALIZED SERVICES",
    image: "/assets/projects/service-2.jpg",
    subtitleEs: "Titulo Servicio",
    subtitleEn: "Service Title",
    descriptionEs: "Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi ligula tempus diam nisl parturient per penatibus. Consequat vehicula tempor accumsan purus, pellentesque etiam. Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi ligula tempus diam nisl parturient per penatibus.",
    descriptionEn: "Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi ligula tempus diam nisl parturient per penatibus. Consequat vehicula tempor accumsan purus, pellentesque etiam. Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi ligula tempus diam nisl parturient per penatibus.",
    relatedCategory: "series",
  },
  {
    id: "infraestructura",
    titleEs: "INFRAESTRUCTURA & EQUIPO",
    titleEn: "INFRASTRUCTURE & EQUIPMENT",
    image: "/assets/projects/service-3.jpg",
    subtitleEs: "Titulo Servicio",
    subtitleEn: "Service Title",
    descriptionEs: "Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi ligula tempus diam nisl parturient per penatibus. Consequat vehicula tempor accumsan purus, pellentesque etiam. Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi ligula tempus diam nisl parturient per penatibus.",
    descriptionEn: "Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi ligula tempus diam nisl parturient per penatibus. Consequat vehicula tempor accumsan purus, pellentesque etiam. Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi ligula tempus diam nisl parturient per penatibus.",
    relatedCategory: "comerciales",
  },
  {
    id: "consultoria",
    titleEs: "CERTIFICACIONES Y LEGALES",
    titleEn: "CERTIFICATIONS & LEGAL",
    image: "/assets/projects/service-4.jpg",
    subtitleEs: "Titulo Servicio",
    subtitleEn: "Service Title",
    descriptionEs: "Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi ligula tempus diam nisl parturient per penatibus. Consequat vehicula tempor accumsan purus, pellentesque etiam. Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi ligula tempus diam nisl parturient per penatibus.",
    descriptionEn: "Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi ligula tempus diam nisl parturient per penatibus. Consequat vehicula tempor accumsan purus, pellentesque etiam. Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi ligula tempus diam nisl parturient per penatibus.",
    relatedCategory: "largometrajes",
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
  const navigate = useNavigate();
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
                    {/* Image */}
                    <div className="w-full h-[200px] md:h-[250px] lg:h-[300px] overflow-hidden" style={{ backgroundColor: "#ddd" }}>
                      <img
                        src={service.image}
                        alt={title}
                        className="block w-full h-full object-cover"
                        onError={(e) => { e.currentTarget.style.display = "none"; }}
                      />
                    </div>

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
                      <button
                        onClick={() => navigate(`/services/${service.id}`)}
                        className="text-[14px] md:text-[15px] lg:text-[16px]"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          padding: "10px 20px",
                          backgroundColor: "#1b1b1b",
                          color: "#FBFEF9",
                          fontFamily: "'Inter', sans-serif",
                          border: "none",
                          borderRadius: "4px",
                          cursor: "pointer",
                          width: "fit-content",
                          transition: "background-color 0.2s ease",
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#fb5000"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#1b1b1b"; }}
                      >
                        <span style={{ fontSize: "20px", lineHeight: "16px" }}>+</span>
                        {currentLang.startsWith("en") ? "View more" : "Ver más"}
                      </button>
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
