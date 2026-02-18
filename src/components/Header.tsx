import { useState } from "react";
import { NavLink } from "react-router";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import MartilloLogo from "./MartilloLogo";

/* Figma: Categories = 4 items — Proyectos (dropdown), Servicios, Quienes Somos, Contacto */
const navLinks = [
  { to: "/portfolio", key: "nav.portfolio", dropdown: true },
  { to: "/services", key: "nav.services", dropdown: false },
  { to: "/about", key: "nav.about", dropdown: false },
  { to: "/contact", key: "nav.contact", dropdown: false },
] as const;

const socialLinks = [
  { id: "linkedin", href: "https://linkedin.com", label: "LinkedIn" },
  { id: "vimeo", href: "https://vimeo.com", label: "Vimeo" },
  { id: "instagram", href: "https://instagram.com", label: "Instagram" },
  { id: "imdb", href: "https://imdb.com", label: "IMDB" },
] as const;

export default function Header() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed left-0 right-0 top-0 z-50 flex flex-col items-center justify-center gap-2.5 py-[18px]"
      style={{ backgroundColor: "#010100", height: 96 }}
    >
      {/* MENU — 1340px, justify-between, gap-120px */}
      <nav
        className="flex h-[60px] w-full max-w-[1340px] flex-row items-center justify-between gap-6 px-[50px] md:gap-[120px]"
        style={{ paddingLeft: "max(1rem, 50px)", paddingRight: "max(1rem, 50px)" }}
      >
        {/* MARTILLO DARK — 70x60, order 0 */}
        <NavLink to="/" className="order-0 flex flex-shrink-0" aria-label="Martillo Art Dept">
          <MartilloLogo width={70} height={60} />
        </NavLink>

        {/* Categories — 626px, gap-16, order 1 */}
        <div className="order-1 hidden h-[60px] max-w-[626px] flex-1 flex-row items-center justify-center gap-4 self-stretch md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => {
                const base =
                  "flex flex-row items-center justify-center gap-2.5 px-4 py-2 font-sans text-[20px] font-normal leading-6 transition-colors";
                const color = isActive ? "text-[#FB5000]" : "text-[#F8F1CD] hover:text-[#FB5000]";
                const opacity = link.dropdown ? "opacity-80" : "";
                return `${base} ${color} ${opacity}`;
              }}
            >
              <span className="flex-none">{t(link.key)}</span>
              {link.dropdown && (
                <svg
                  width={5}
                  height={10}
                  viewBox="0 0 5 10"
                  fill="none"
                  className="flex-none rotate-90"
                  style={{ color: "#F8F1CD" }}
                  aria-hidden
                >
                  <path d="M0 0L5 5L0 10V0Z" fill="currentColor" />
                </svg>
              )}
            </NavLink>
          ))}
        </div>

        {/* ICONS — 285px, gap-30, order 2 */}
        <div className="order-2 flex h-[50px] w-full max-w-[285px] flex-shrink-0 flex-row items-center justify-end gap-[30px] md:justify-end">
          {/* LINKS — 184px, 4 icons × 46px */}
          <div className="hidden h-[50px] w-[184px] flex-row items-center justify-center gap-0 md:flex">
            {socialLinks.map((s) => (
              <a
                key={s.id}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noreferrer"
                className="flex h-[50px] w-[46px] flex-col items-center justify-center gap-2.5 p-2.5 transition-colors hover:opacity-80"
                style={{ color: "#F8F1CD" }}
              >
                {s.id === "linkedin" && (
                  <svg width={26} height={24} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                )}
                {s.id === "vimeo" && (
                  <svg width={26} height={22} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197a315.065 315.065 0 0 0 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z" />
                  </svg>
                )}
                {s.id === "instagram" && (
                  <svg width={26} height={25} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                )}
                {s.id === "imdb" && (
                  <svg width={26} height={25} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm2 2h1.5v8H7V7zm2.5 0H11l1.5 4 1.5-4h1.5v8h-1V10l-1 2.5-1-2.5v5H9.5V7zm5.5 0h1.5l1 3 1-3h1.5v8h-1V9.5l-0.5 1.5-0.5-1.5V15h-1V7z" />
                  </svg>
                )}
              </a>
            ))}
          </div>
          {/* IDIOMA — 71px × 40px, gap-7 */}
          <LanguageSwitcher />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
            aria-expanded={menuOpen}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span
              className={`h-0.5 w-5 transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
              style={{ backgroundColor: "#F8F1CD" }}
            />
            <span
              className={`h-0.5 w-5 transition-opacity ${menuOpen ? "opacity-0" : ""}`}
              style={{ backgroundColor: "#F8F1CD" }}
            />
            <span
              className={`h-0.5 w-5 transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
              style={{ backgroundColor: "#F8F1CD" }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="w-full border-t border-[#1a1a1a] md:hidden"
          style={{ backgroundColor: "#010100" }}
        >
          <ul className="flex flex-col gap-0 px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block py-3 font-sans text-[20px] font-normal leading-6 transition-colors ${
                      isActive ? "text-[#FB5000]" : "text-[#F8F1CD] hover:text-[#FB5000]"
                    }`
                  }
                >
                  {t(link.key)}
                </NavLink>
              </li>
            ))}
            <li className="mt-2 flex gap-4 pt-2">
              {socialLinks.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#F8F1CD] hover:text-[#FB5000]"
                >
                  {s.id}
                </a>
              ))}
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
