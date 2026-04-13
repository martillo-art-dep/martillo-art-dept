import { useTranslation } from "react-i18next";

// ─── Inline SVG Icons ────────────────────────────────────────────────
function IgIcon() {
  return (
    <svg width="26" height="25" viewBox="0 0 24 24" fill="none">
      <path className="icon-path" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" fill="black" />
    </svg>
  );
}

function VimeoIcon() {
  return (
    <svg width="26" height="22" viewBox="0 0 24 24" fill="none">
      <path className="icon-path" d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197a315.065 315.065 0 0 0 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z" fill="black" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="26" height="24" viewBox="0 0 24 24" fill="none">
      <path className="icon-path" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="black" />
    </svg>
  );
}

function ImdbIcon() {
  return (
    <img
      src="/assets/ImdbIconLight.svg"
      alt="IMDb"
      className="imdb-icon-footer"
      style={{ width: "26px", height: "25px", objectFit: "contain" }}
    />
  );
}

const footerCSS = `
.footer-social-link .icon-path {
  transition: fill 0.2s ease;
}
.footer-social-link:hover .icon-path {
  fill: #FB5000 !important;
}
.footer-social-link .imdb-icon-footer {
  transition: filter 0.2s ease;
}
.footer-social-link:hover .imdb-icon-footer {
  filter: brightness(0) saturate(100%) invert(38%) sepia(93%) saturate(1352%) hue-rotate(360deg) brightness(101%) contrast(97%);
}
`;

// ─── Footer Component ────────────────────────────────────────────────
export default function Footer() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const contactInfo = {
    email: "artdeptmartillo@gmail.com",
    phones: ["+52 1 55 9197 4547", "+52 1 55 2250 6682"],
    address: "Calle Sur 21, 357, Leyes de Reforma 2da Sección, Iztapalapa, 09310 CDMX, México",
  };

  const legalLinks = [
    { labelEs: "Información Legal", labelEn: "Legal Information" },
    { labelEs: "Acreditaciones",    labelEn: "Accreditations" },
    { labelEs: "Certificaciones",   labelEn: "Certifications" },
  ];

  const socialIcons = [
    { id: "instagram", Icon: IgIcon,       href: "https://instagram.com" },
    { id: "vimeo",     Icon: VimeoIcon,    href: "https://vimeo.com" },
    { id: "linkedin",  Icon: LinkedInIcon, href: "https://linkedin.com" },
    { id: "imdb",      Icon: ImdbIcon,     href: "https://imdb.com" },
  ];

  return (
    <>
      <style>{footerCSS}</style>
      <footer className="w-full" style={{ backgroundColor: "#FBFEF9" }}>

        {/* MOBILE FOOTER (< 768px) */}
        <div className="block md:hidden" style={{ padding: "33px 34px 30px" }}>

          <div style={{ marginBottom: "28px" }}>
            <div style={{
              fontFamily: "'Martillo Completa', sans-serif",
              fontWeight: 400,
              fontSize: "78px",
              lineHeight: "78px",
              color: "#001011",
            }}>
              MARTILLO
            </div>
            <div style={{
              fontFamily: "'Martillo Completa', sans-serif",
              fontWeight: 400,
              fontSize: "51px",
              lineHeight: "51px",
              color: "#001011",
              marginTop: "6px",
            }}>
              ART DEPT
            </div>
          </div>

          <div style={{
            width: "362px",
            maxWidth: "100%",
            height: "0px",
            borderTop: "1.5px solid #000000",
            boxShadow: "0px 0px 6.8px rgba(0, 0, 0, 0.3)",
            margin: "0 auto 40px",
          }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "40px" }}>
            <h3 style={{
              fontFamily: "'Martillo Completa', sans-serif",
              fontWeight: 400,
              fontSize: "35px",
              lineHeight: "35px",
              color: "#000000",
              margin: 0,
            }}>
              {currentLang.startsWith("en") ? "CONTACT US" : "CONTACTANOS"}
            </h3>
            <a href={`mailto:${contactInfo.email}`} style={{
              fontFamily: "'Arial', sans-serif", fontWeight: 400, fontSize: "20px",
              lineHeight: "23px", color: "#000000", textDecoration: "none",
            }}>
              {contactInfo.email}
            </a>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {contactInfo.phones.map((phone, i) => (
                <a key={i} href={`tel:${phone.replace(/\s/g, "")}`} style={{
                  fontFamily: "'Arial', sans-serif", fontWeight: 400, fontSize: "20px",
                  lineHeight: "23px", color: "#000000", textDecoration: "none",
                }}>
                  {phone}
                </a>
              ))}
            </div>
            <p style={{
              fontFamily: "'Arial', sans-serif", fontWeight: 400, fontSize: "20px",
              lineHeight: "23px", color: "#000000", margin: 0,
            }}>
              {contactInfo.address}
            </p>
          </div>

          <nav style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "50px" }} aria-label="Legal">
            {legalLinks.map((link, i) => (
              <a key={i} href={`#${link.labelEs.toLowerCase().replace(/\s/g, "-")}`} style={{
                fontFamily: "'Arial', sans-serif", fontWeight: 400, fontSize: "20px",
                lineHeight: "23px", color: "#000000", textDecoration: "none",
              }}>
                {currentLang.startsWith("en") ? link.labelEn : link.labelEs}
              </a>
            ))}
          </nav>

          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
            <div style={{ display: "flex", gap: "13px" }}>
              {socialIcons.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.id}
                  className="footer-social-link"
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center",
                    width: "41px", height: "41px",
                    backgroundColor: "#F2F2F2", borderRadius: "9px",
                  }}
                >
                  <social.Icon />
                </a>
              ))}
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
              <span style={{
                fontFamily: "'Arial', sans-serif", fontWeight: 400,
                fontSize: "15px", lineHeight: "17px", color: "#000000",
              }}>
                Web by
              </span>
              <a href="https://caja.studio" target="_blank" rel="noopener noreferrer" style={{
                fontFamily: "'Alkia', 'Georgia', serif", fontWeight: 400,
                fontSize: "20px", lineHeight: "24px", color: "#C32F27", textDecoration: "underline",
              }}>
                caja.
              </a>
            </div>
          </div>
        </div>

        {/* DESKTOP FOOTER (≥ 768px) */}
        <div className="hidden md:block">
          <div className="page-container" style={{ paddingTop: "44px", paddingBottom: "55px" }}>
            <div className="flex flex-row justify-between gap-0">

              <div className="flex-shrink-0">
                <div style={{ fontFamily: "'Martillo Completa', sans-serif", fontWeight: 400, color: "#001011" }}>
                  <div className="text-[60px] leading-[60px] lg:text-[78px] lg:leading-[78px]">MARTILLO</div>
                  <div className="text-[40px] leading-[40px] lg:text-[51px] lg:leading-[51px] mt-1">ART DEPT</div>
                </div>
              </div>

              <address className="flex flex-col gap-4 not-italic">
                <h3 className="text-[30px] leading-[30px] lg:text-[35px] lg:leading-[35px]" style={{
                  fontFamily: "'Martillo Completa', sans-serif", fontWeight: 400, color: "#000000", margin: 0,
                }}>
                  {currentLang.startsWith("en") ? "CONTACT US" : "CONTACTANOS"}
                </h3>
                <a href={`mailto:${contactInfo.email}`} className="text-[18px] lg:text-[20px]" style={{
                  fontFamily: "'Arial', sans-serif", color: "#000000", textDecoration: "none", lineHeight: "23px",
                }}>
                  {contactInfo.email}
                </a>
                <div className="flex flex-col">
                  {contactInfo.phones.map((phone, i) => (
                    <a key={i} href={`tel:${phone.replace(/\s/g, "")}`} className="text-[18px] lg:text-[20px]" style={{
                      fontFamily: "'Arial', sans-serif", color: "#000000", textDecoration: "none", lineHeight: "23px",
                    }}>
                      {phone}
                    </a>
                  ))}
                </div>
                <p className="text-[18px] lg:text-[20px] max-w-[300px]" style={{
                  fontFamily: "'Arial', sans-serif", color: "#000000", margin: 0, lineHeight: "23px",
                }}>
                  {contactInfo.address}
                </p>
              </address>

              <nav className="flex flex-col gap-4" style={{ paddingTop: "51px" }} aria-label="Legal">
                {legalLinks.map((link, i) => (
                  <a key={i} href={`#${link.labelEs.toLowerCase().replace(/\s/g, "-")}`} className="text-[18px] lg:text-[20px]" style={{
                    fontFamily: "'Arial', sans-serif", color: "#000000", textDecoration: "none", lineHeight: "23px",
                  }}>
                    {currentLang.startsWith("en") ? link.labelEn : link.labelEs}
                  </a>
                ))}
              </nav>

              <div className="flex flex-col items-center gap-4">
                <img
                  src="/assets/logo-martillo-black.png"
                  alt="Martillo Art Department"
                  className="w-[120px] h-[106px] lg:w-[149px] lg:h-[131px] object-contain"
                />
                <div className="flex gap-3">
                  {socialIcons.map((social) => (
                    <a
                      key={social.id}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.id}
                      className="footer-social-link flex items-center justify-center"
                      style={{ width: "41px", height: "41px", backgroundColor: "#F2F2F2", borderRadius: "9px" }}
                    >
                      <social.Icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10" style={{
              height: "0px", borderTop: "1.5px solid #000000",
              boxShadow: "0px 0px 6.8px rgba(0, 0, 0, 0.3)",
            }} />

            <div className="mt-3 flex justify-end items-center gap-[9px]">
              <span style={{ fontFamily: "'Arial', sans-serif", fontWeight: 400, fontSize: "15px", lineHeight: "17px", color: "#000000" }}>
                Web by
              </span>
              <a href="https://caja.studio" target="_blank" rel="noopener noreferrer" style={{
                fontFamily: "'Alkia', 'Georgia', serif", fontWeight: 400, fontSize: "20px",
                lineHeight: "24px", color: "#C32F27", textDecoration: "underline",
              }}>
                caja.
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}