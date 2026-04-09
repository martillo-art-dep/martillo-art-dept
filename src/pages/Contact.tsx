import { useState } from "react";
import { useTranslation } from "react-i18next";
import SEO from "../components/SEO";

// ─── Social icon SVGs (inline for reliability) ──────────────────────
function WhatsAppIcon() {
  return (
    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23 4C12.507 4 4 12.507 4 23c0 3.348.873 6.495 2.4 9.228L4 42l10.032-2.332A18.92 18.92 0 0023 42c10.493 0 19-8.507 19-19S33.493 4 23 4zm0 34.8A15.73 15.73 0 0114.58 36l-.56-.336-5.82 1.352 1.384-5.688-.368-.584A15.72 15.72 0 017.2 23c0-8.712 7.088-15.8 15.8-15.8S38.8 14.288 38.8 23 31.712 38.8 23 38.8zm8.66-11.82c-.476-.236-2.808-1.384-3.244-1.544-.436-.156-.752-.236-.1068.236-.316.476-1.224 1.544-1.5 1.86-.276.316-.552.356-1.028.12-.476-.236-2.008-.74-3.824-2.36-1.412-1.26-2.368-2.816-2.644-3.292-.276-.476-.028-.732.208-.968.216-.212.476-.552.716-.828.236-.276.316-.476.476-.788.156-.316.076-.592-.04-.828-.12-.236-1.068-2.572-1.464-3.524-.384-.924-.776-.8-1.068-.812-.276-.012-.592-.016-.908-.016s-.828.12-1.264.592c-.436.476-1.66 1.62-1.66 3.956s1.7 4.588 1.94 4.904c.236.316 3.348 5.112 8.112 7.168 1.132.488 2.016.78 2.704 1 1.136.36 2.172.308 2.992.188.912-.136 2.808-1.148 3.204-2.256.396-1.112.396-2.064.276-2.26-.116-.196-.432-.316-.908-.552z" fill="#FFFFFF"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23 6.35c5.433 0 6.076.02 8.222.118 1.984.09 3.062.422 3.78.7a6.3 6.3 0 012.34 1.52 6.3 6.3 0 011.52 2.34c.278.718.61 1.796.7 3.78.098 2.146.118 2.79.118 8.222s-.02 6.076-.118 8.222c-.09 1.984-.422 3.062-.7 3.78a6.3 6.3 0 01-1.52 2.34 6.3 6.3 0 01-2.34 1.52c-.718.278-1.796.61-3.78.7-2.146.098-2.79.118-8.222.118s-6.076-.02-8.222-.118c-1.984-.09-3.062-.422-3.78-.7a6.3 6.3 0 01-2.34-1.52 6.3 6.3 0 01-1.52-2.34c-.278-.718-.61-1.796-.7-3.78C6.34 29.076 6.35 28.433 6.35 23s.02-6.076.118-8.222c.09-1.984.422-3.062.7-3.78a6.3 6.3 0 011.52-2.34 6.3 6.3 0 012.34-1.52c.718-.278 1.796-.61 3.78-.7C16.924 6.37 17.567 6.35 23 6.35zM23 3c-5.524 0-6.216.024-8.385.122-2.166.1-3.646.444-4.942.948a9.98 9.98 0 00-3.608 2.348A9.98 9.98 0 003.717 10c-.504 1.296-.848 2.776-.948 4.942C2.674 16.784 2.65 17.476 2.65 23s.024 6.216.122 8.385c.1 2.166.444 3.646.948 4.942a9.98 9.98 0 002.348 3.608A9.98 9.98 0 0010 42.283c1.296.504 2.776.848 4.942.948 2.17.098 2.86.122 8.385.122s6.216-.024 8.385-.122c2.166-.1 3.646-.444 4.942-.948a9.98 9.98 0 003.608-2.348 9.98 9.98 0 002.348-3.608c.504-1.296.848-2.776.948-4.942.098-2.17.122-2.86.122-8.385s-.024-6.216-.122-8.385c-.1-2.166-.444-3.646-.948-4.942a9.98 9.98 0 00-2.348-3.608A9.98 9.98 0 0036 3.717c-1.296-.504-2.776-.848-4.942-.948C29.216 2.674 28.524 2.65 23 2.65V3z" fill="#FFFFFF"/>
      <path d="M23 12.54A10.46 10.46 0 1033.46 23 10.46 10.46 0 0023 12.54zm0 17.26A6.8 6.8 0 1129.8 23 6.8 6.8 0 0123 29.8z" fill="#FFFFFF"/>
      <circle cx="33.88" cy="12.12" r="2.44" fill="#FFFFFF"/>
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.5 8.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zM12.5 14H5.5v26h7V14zM25.08 14H18.2v26h6.88v-13.64c0-7.16 9.24-7.74 9.24 0V40h6.92V23.84c0-12.08-13.68-11.64-16.16-5.68V14z" fill="#FFFFFF"/>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M38.92 30.08l-6.24-2.68a2.52 2.52 0 00-2.52.48l-3.08 2.52a19.24 19.24 0 01-9.48-9.48l2.52-3.08a2.52 2.52 0 00.48-2.52L17.92 9.08A2.52 2.52 0 0015.4 7.2l-5.48.92A2.52 2.52 0 008 10.64C8 26.4 21.6 40 37.36 40a2.52 2.52 0 002.52-1.92l.92-5.48a2.52 2.52 0 00-1.88-2.52z" fill="#FFFFFF"/>
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="58" height="46" viewBox="0 0 58 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M52 4H6a4 4 0 00-4 4v30a4 4 0 004 4h46a4 4 0 004-4V8a4 4 0 00-4-4zm0 4v1.84L29 26.08 6 9.84V8h46zM6 38V14.36l22.08 15.56a2 2 0 002.28-.08L52 14.36V38H6z" fill="#FFFFFF"/>
    </svg>
  );
}

// ─── Component ───────────────────────────────────────────────────────
export default function Contact() {
  const { i18n } = useTranslation();
  const isEn = i18n.language.startsWith("en");

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contacto-martillo",
          ...formData,
        }).toString(),
      });
      if (response.ok) {
        setStatus("success");
        setFormData({ nombre: "", email: "", telefono: "", mensaje: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const buttonLabel =
    status === "sending"
      ? (isEn ? "Sending..." : "Enviando...")
      : status === "success"
      ? (isEn ? "Message sent ✓" : "Mensaje enviado ✓")
      : status === "error"
      ? (isEn ? "Error. Try again" : "Error. Intenta de nuevo")
      : (isEn ? "SEND" : "ENVIAR");

  return (
    <>
      <SEO
        title="Contacto"
        description="Contáctanos para tu próximo proyecto de cine, series, comerciales o videoclips. Martillo Art Dept, diseño de producción y dirección de arte en México."
        url="/contact"
      />
      <style>{`
        @media (min-width: 768px) and (max-width: 1199px) {
          .ct-main-row {
            padding: 120px 40px 80px !important;
            gap: 0 !important;
          }
          .ct-photo-col {
            display: none !important;
          }
          .ct-form-col {
            width: 100% !important;
            max-width: 600px !important;
            margin: 0 auto !important;
          }
          .ct-title {
            font-size: clamp(52px, 8vw, 96px) !important;
            line-height: 1 !important;
            width: 100% !important;
          }
          .ct-fields-wrap {
            width: 100% !important;
          }
          .ct-field-row {
            width: 100% !important;
          }
          .ct-input {
            width: 100% !important;
          }
          .ct-submit-wrap {
            width: 100% !important;
          }
          .ct-social-row {
            width: 100% !important;
          }
        }
      `}</style>

      {/* ═══ MOBILE LAYOUT ═══ */}
      <div
        className="block md:hidden"
        style={{
          backgroundColor: "#1b1b1b",
          backgroundImage: "url(/assets/bg-gradient-dark.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "scroll",
          minHeight: "100vh",
          paddingBottom: "60px",
        }}
      >
        {/* Hero image */}
        <div style={{ width: "100%", height: "266px", overflow: "hidden", position: "relative" }}>
          <img
            src="/assets/contacto.JPG"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
          {/* Title overlapping hero */}
          <div
            style={{
              position: "absolute",
              bottom: "0",
              left: "0",
              right: "0",
              padding: "16px 22px",
              background: "linear-gradient(to top, rgba(27,27,27,0.85) 0%, transparent 100%)",
            }}
          >
            <h1
              style={{
                fontFamily: "'Martillo Completa', sans-serif",
                fontWeight: 400,
                fontSize: "64px",
                lineHeight: "68px",
                color: "#FBFEF9",
              }}
            >
              {isEn ? "CONTACT US" : "CONTÁCTANOS"}
            </h1>
          </div>
        </div>

        {/* Form */}
        <div style={{ padding: "32px 22px 0" }}>
          <form
            name="contacto-martillo"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contacto-martillo" />
            <input type="hidden" name="bot-field" />

            <div className="flex flex-col" style={{ gap: "16px" }}>
              {/* Nombre */}
              <div className="flex flex-col" style={{ gap: "6px" }}>
                <label style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "20px", color: "#FFFFFF" }}>
                  {isEn ? "Name" : "Nombre"}
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  placeholder={isEn ? "Name" : "Nombre"}
                  style={{ width: "100%", height: "36px", backgroundColor: "#D9D9D9", borderRadius: "5px", border: "none", outline: "none", padding: "0 10px", fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#1b1b1b", boxSizing: "border-box" }}
                />
              </div>

              {/* Email */}
              <div className="flex flex-col" style={{ gap: "6px" }}>
                <label style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "20px", color: "#FFFFFF" }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email"
                  style={{ width: "100%", height: "36px", backgroundColor: "#D9D9D9", borderRadius: "5px", border: "none", outline: "none", padding: "0 10px", fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#1b1b1b", boxSizing: "border-box" }}
                />
              </div>

              {/* Teléfono */}
              <div className="flex flex-col" style={{ gap: "6px" }}>
                <label style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "20px", color: "#FFFFFF" }}>
                  {isEn ? "Phone" : "Teléfono"}
                </label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder={isEn ? "Phone" : "Teléfono"}
                  style={{ width: "100%", height: "36px", backgroundColor: "#D9D9D9", borderRadius: "5px", border: "none", outline: "none", padding: "0 10px", fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#1b1b1b", boxSizing: "border-box" }}
                />
              </div>

              {/* Mensaje */}
              <div className="flex flex-col" style={{ gap: "6px" }}>
                <label style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "20px", color: "#FFFFFF" }}>
                  {isEn ? "Message" : "Mensaje"}
                </label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  placeholder={isEn ? "Message" : "Mensaje"}
                  style={{ width: "100%", minHeight: "80px", backgroundColor: "#D9D9D9", borderRadius: "5px", border: "none", outline: "none", padding: "8px 10px", fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#1b1b1b", boxSizing: "border-box", resize: "vertical" }}
                />
              </div>
            </div>

            {/* Submit button */}
            <div style={{ marginTop: "28px", display: "flex", justifyContent: "center" }}>
              <button
                type="submit"
                disabled={status === "sending"}
                style={{
                  width: "100%",
                  height: "52px",
                  backgroundColor: status === "success" ? "#FB5000" : "#D9D9D9",
                  boxShadow: "0px 4px 13.7px #000000",
                  borderRadius: "14px",
                  border: "none",
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  color: status === "success" ? "#FFFFFF" : "#1b1b1b",
                  transition: "background-color 0.3s ease",
                  opacity: status === "sending" ? 0.7 : 1,
                }}
                onMouseEnter={(e) => {
                  if (status !== "sending" && status !== "success") {
                    e.currentTarget.style.backgroundColor = "#FB5000";
                    e.currentTarget.style.color = "#FFFFFF";
                  }
                }}
                onMouseLeave={(e) => {
                  if (status !== "sending" && status !== "success") {
                    e.currentTarget.style.backgroundColor = "#D9D9D9";
                    e.currentTarget.style.color = "#1b1b1b";
                  }
                }}
              >
                {buttonLabel}
              </button>
            </div>

            {status === "success" && (
              <p style={{ color: "#FB5000", marginTop: "12px", textAlign: "center", fontFamily: "'Inter', sans-serif", fontSize: "14px" }}>
                {isEn ? "Thank you! We'll get back to you soon." : "¡Gracias! Nos pondremos en contacto pronto."}
              </p>
            )}
          </form>

          {/* Social icons */}
          <div
            className="flex justify-between items-center"
            style={{ marginTop: "36px" }}
          >
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <WhatsAppIcon />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
            <a href="tel:+5500000000" aria-label={isEn ? "Phone" : "Teléfono"}>
              <PhoneIcon />
            </a>
            <a href="mailto:martillo@correo.com" aria-label="Email">
              <EmailIcon />
            </a>
          </div>
        </div>
      </div>

      {/* ═══ DESKTOP LAYOUT ═══ */}
      <div className="hidden md:block">
        <div
          className="w-full"
          style={{
            backgroundColor: "#1b1b1b",
            backgroundImage: "url(/assets/bg-gradient-dark.jpeg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            minHeight: "100vh",
          }}
        >
          {/* ═══ MAIN CONTENT — Figma Frame 62: 1346×682, positioned at x:44 y:179 ═══ */}
          <div
            className="ct-main-row mx-auto flex"
            style={{
              maxWidth: "1440px",
              padding: "179px 47px 120px",
              gap: "33px",
              alignItems: "flex-start",
            }}
          >
            {/* ── LEFT COLUMN — Form (690px, flex-grow) ── */}
            <div
              className="ct-form-col flex flex-col"
              style={{ width: "690px", flexGrow: 1, gap: "46px" }}
            >
              {/* Title — Martillo Completa 96px */}
              <div className="flex justify-center" style={{ width: "537px" }}>
                <h1
                  className="ct-title"
                  style={{
                    fontFamily: "'Martillo Completa', sans-serif",
                    fontWeight: 400,
                    fontSize: "96px",
                    lineHeight: "96px",
                    color: "#FBFEF9",
                    textAlign: "center",
                  }}
                >
                  {isEn ? "CONTACT US" : "CONTÁCTANOS"}
                </h1>
              </div>

              <form
                name="contacto-martillo"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                style={{ display: "contents" }}
              >
                <input type="hidden" name="form-name" value="contacto-martillo" />
                <input type="hidden" name="bot-field" />

                {/* Input fields — 540px wide, gap 20px */}
                <div
                  className="ct-fields-wrap flex flex-col justify-center"
                  style={{ width: "540px", gap: "20px" }}
                >
                  {/* Nombre */}
                  <div className="ct-field-row flex flex-col" style={{ width: "540px", gap: "10px" }}>
                    <label style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "20px", lineHeight: "24px", color: "#FFFFFF" }}>
                      {isEn ? "Name" : "Nombre"}
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      placeholder={isEn ? "Name" : "Nombre"}
                      className="ct-input"
                      style={{ width: "540px", height: "25px", backgroundColor: "#D9D9D9", borderRadius: "5px", border: "none", outline: "none", padding: "0 10px", fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#1b1b1b", boxSizing: "border-box" }}
                    />
                  </div>

                  {/* Email */}
                  <div className="ct-field-row flex flex-col" style={{ width: "540px", gap: "10px" }}>
                    <label style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "20px", lineHeight: "24px", color: "#FFFFFF" }}>
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Email"
                      className="ct-input"
                      style={{ width: "540px", height: "25px", backgroundColor: "#D9D9D9", borderRadius: "5px", border: "none", outline: "none", padding: "0 10px", fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#1b1b1b", boxSizing: "border-box" }}
                    />
                  </div>

                  {/* Teléfono */}
                  <div className="ct-field-row flex flex-col" style={{ width: "540px", gap: "10px" }}>
                    <label style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "20px", lineHeight: "24px", color: "#FFFFFF" }}>
                      {isEn ? "Phone" : "Teléfono"}
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder={isEn ? "Phone" : "Teléfono"}
                      className="ct-input"
                      style={{ width: "540px", height: "25px", backgroundColor: "#D9D9D9", borderRadius: "5px", border: "none", outline: "none", padding: "0 10px", fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#1b1b1b", boxSizing: "border-box" }}
                    />
                  </div>

                  {/* Mensaje */}
                  <div className="ct-field-row flex flex-col" style={{ width: "540px", gap: "10px" }}>
                    <label style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "20px", lineHeight: "24px", color: "#FFFFFF" }}>
                      {isEn ? "Message" : "Mensaje"}
                    </label>
                    <textarea
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                      placeholder={isEn ? "Message" : "Mensaje"}
                      className="ct-input"
                      style={{ width: "540px", minHeight: "80px", backgroundColor: "#D9D9D9", borderRadius: "5px", border: "none", outline: "none", padding: "6px 10px", fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#1b1b1b", boxSizing: "border-box", resize: "vertical" }}
                    />
                  </div>
                </div>

                {/* Submit button — 358×65, radius 18px */}
                <div
                  className="ct-submit-wrap flex flex-col"
                  style={{ width: "536px", gap: "12px" }}
                >
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      style={{
                        width: "358px",
                        height: "65px",
                        backgroundColor: status === "success" ? "#FB5000" : "#D9D9D9",
                        boxShadow: "0px 4px 13.7px #000000",
                        borderRadius: "18px",
                        border: "none",
                        cursor: status === "sending" ? "not-allowed" : "pointer",
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 600,
                        fontSize: "18px",
                        color: status === "success" ? "#FFFFFF" : "#1b1b1b",
                        transition: "background-color 0.3s ease, transform 0.15s ease",
                        opacity: status === "sending" ? 0.7 : 1,
                      }}
                      onMouseEnter={(e) => {
                        if (status !== "sending" && status !== "success") {
                          e.currentTarget.style.backgroundColor = "#FB5000";
                          e.currentTarget.style.color = "#FFFFFF";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (status !== "sending" && status !== "success") {
                          e.currentTarget.style.backgroundColor = "#D9D9D9";
                          e.currentTarget.style.color = "#1b1b1b";
                        }
                      }}
                      onMouseDown={(e) => {
                        e.currentTarget.style.transform = "scale(0.97)";
                      }}
                      onMouseUp={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    >
                      {buttonLabel}
                    </button>
                  </div>

                  {status === "success" && (
                    <p style={{ color: "#FB5000", textAlign: "right", fontFamily: "'Inter', sans-serif", fontSize: "16px" }}>
                      {isEn ? "Thank you! We'll get back to you soon." : "¡Gracias! Nos pondremos en contacto pronto."}
                    </p>
                  )}
                </div>
              </form>

              {/* Social icons row — 5 icons, 46px each, gap 50px */}
              <div
                className="ct-social-row flex justify-between items-center"
                style={{ width: "540px", gap: "50px" }}
              >
                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <WhatsAppIcon />
                </a>
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <InstagramIcon />
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <LinkedinIcon />
                </a>
                <a href="tel:+5500000000" aria-label={isEn ? "Phone" : "Teléfono"}>
                  <PhoneIcon />
                </a>
                <a href="mailto:martillo@correo.com" aria-label="Email">
                  <EmailIcon />
                </a>
              </div>
            </div>

            {/* ── RIGHT COLUMN — Photo placeholder (656×682, radius 43px) ── */}
            <div
              className="ct-photo-col"
              style={{
                width: "656px",
                minWidth: "656px",
                height: "682px",
                flexShrink: 0,
                backgroundColor: "#D9D9D9",
                borderRadius: "43px",
                overflow: "hidden",
                boxShadow: "inset 0px 0px 11.6px rgba(0, 0, 0, 0.25)",
                alignSelf: "flex-start",
              }}
            >
              <img
                src="/assets/contacto.JPG"
                alt=""
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}