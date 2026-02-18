import { useState } from "react";
import { NavLink } from "react-router";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const navLinks = [
  { to: "/", key: "nav.home" },
  { to: "/portfolio", key: "nav.portfolio" },
  { to: "/about", key: "nav.about" },
  { to: "/contact", key: "nav.contact" },
] as const;

const socialLinks = [
  {
    id: "instagram",
    href: "https://instagram.com",
    label: "Instagram",
  },
  {
    id: "vimeo",
    href: "https://vimeo.com",
    label: "Vimeo",
  },
  {
    id: "linkedin",
    href: "https://linkedin.com",
    label: "LinkedIn",
  },
] as const;

export default function Header() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800 bg-black/90 text-white backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 font-display text-xs tracking-[0.35em] text-white hover:text-brand-500"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center border border-neutral-700 bg-neutral-900 text-[0.55rem]">
            MAD
          </span>
          <span className="hidden sm:inline-block">
            MARTILLO&nbsp;ART&nbsp;DEPT
          </span>
        </NavLink>

        {/* Desktop nav */}
        <div className="hidden items-center gap-10 md:flex">
          <ul className="flex items-center gap-6 text-[0.7rem] font-semibold tracking-[0.25em]">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    [
                      "relative pb-1 transition-colors",
                      "hover:text-brand-500",
                      isActive ? "text-brand-500" : "text-neutral-300",
                    ].join(" ")
                  }
                >
                  <span className="inline-block uppercase">
                    {t(link.key)}
                  </span>
                  <span
                    className={[
                      "absolute left-0 top-full h-[2px] w-full origin-left bg-brand-500 transition-transform",
                      "scale-x-0 group-hover:scale-x-100",
                    ].join(" ")}
                  />
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            {/* Social icons */}
            <div className="flex items-center gap-3 text-neutral-400">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900/70 text-xs uppercase tracking-[0.2em] transition-colors hover:border-brand-500 hover:bg-brand-600/20 hover:text-brand-500"
                >
                  {social.id === "instagram" && (
                    <span>IG</span>
                  )}
                  {social.id === "vimeo" && (
                    <span>VI</span>
                  )}
                  {social.id === "linkedin" && (
                    <span>IN</span>
                  )}
                </a>
              ))}
            </div>

            {/* Language switcher */}
            <div className="hidden sm:block">
              <LanguageSwitcher />
            </div>
          </div>
        </div>

        {/* Mobile right side: language + hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            className="flex flex-col gap-1.5"
          >
            <span
              className={`h-0.5 w-6 bg-white transition-transform ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-white transition-opacity ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-white transition-transform ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-neutral-800 bg-black/95 md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 text-[0.8rem] font-medium uppercase tracking-[0.25em]">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    [
                      "block rounded-sm px-3 py-2 transition-colors",
                      isActive
                        ? "bg-brand-600 text-white"
                        : "text-neutral-300 hover:bg-neutral-900 hover:text-white",
                    ].join(" ")
                  }
                >
                  {t(link.key)}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
