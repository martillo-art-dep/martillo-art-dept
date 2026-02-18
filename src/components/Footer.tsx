import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-neutral-200 bg-neutral-900 text-neutral-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 py-8 text-center sm:flex-row sm:justify-between sm:px-6 sm:text-left lg:px-8">
        <p className="font-display text-sm font-semibold text-white">
          Martillo{" "}
          <span className="font-sans text-xs font-normal text-neutral-500">
            — {t("footer.tagline")}
          </span>
        </p>
        <p className="text-xs">
          &copy; {new Date().getFullYear()} Martillo Art Dept.{" "}
          {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}
