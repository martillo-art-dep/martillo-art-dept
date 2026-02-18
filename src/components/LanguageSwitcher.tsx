import { useTranslation } from "react-i18next";

/* Figma IDIOMA: 71px width, 40px height, gap 7px
 * ESPAÑOL: 35.5px, 40px, Mexico flag 24x24
 * INGLES: 35.5px, 40px, USA flag 24x24
 */
export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const current = i18n.language.startsWith("es") ? "es" : "en";

  return (
    <div className="flex h-10 w-[71px] flex-row items-center justify-between gap-[7px]">
      <button
        onClick={() => i18n.changeLanguage("es")}
        aria-label="Español"
        className={`flex h-10 flex-1 flex-row items-center justify-center gap-2.5 self-stretch p-2 transition-opacity ${
          current === "es" ? "opacity-100" : "opacity-60 hover:opacity-100"
        }`}
      >
        <span className="text-lg leading-none" aria-hidden>
          🇲🇽
        </span>
      </button>
      <button
        onClick={() => i18n.changeLanguage("en")}
        aria-label="English"
        className={`flex h-10 flex-1 flex-row items-center justify-center gap-2.5 self-stretch p-2 transition-opacity ${
          current === "en" ? "opacity-100" : "opacity-60 hover:opacity-100"
        }`}
      >
        <span className="text-lg leading-none" aria-hidden>
          🇺🇸
        </span>
      </button>
    </div>
  );
}
