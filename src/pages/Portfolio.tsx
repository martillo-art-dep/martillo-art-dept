import { useState } from "react";
import { useTranslation } from "react-i18next";

type Category = "all" | "branding" | "illustration" | "design";

interface Project {
  id: number;
  title: string;
  category: Exclude<Category, "all">;
  color: string;
}

const projects: Project[] = [
  { id: 1, title: "Nova Brand Identity", category: "branding", color: "from-brand-400 to-brand-600" },
  { id: 2, title: "Fauna Series", category: "illustration", color: "from-amber-400 to-orange-600" },
  { id: 3, title: "Vertex Campaign", category: "design", color: "from-cyan-400 to-blue-600" },
  { id: 4, title: "Solstice Packaging", category: "branding", color: "from-rose-400 to-pink-600" },
  { id: 5, title: "Urban Sketches", category: "illustration", color: "from-emerald-400 to-teal-600" },
  { id: 6, title: "Pulse Magazine", category: "design", color: "from-violet-400 to-purple-600" },
];

const filters: { key: Category; label: string }[] = [
  { key: "all", label: "portfolio.filter_all" },
  { key: "branding", label: "portfolio.filter_branding" },
  { key: "illustration", label: "portfolio.filter_illustration" },
  { key: "design", label: "portfolio.filter_design" },
];

export default function Portfolio() {
  const { t } = useTranslation();
  const [active, setActive] = useState<Category>("all");

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold text-neutral-900 sm:text-4xl">
            {t("portfolio.title")}
          </h1>
          <p className="mt-4 text-neutral-600">{t("portfolio.subtitle")}</p>
        </div>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {filters.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                active === key
                  ? "bg-brand-600 text-white"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              {t(label)}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <article
              key={project.id}
              className="group cursor-pointer overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              {/* Placeholder for project image */}
              <div
                className={`flex aspect-[4/3] items-center justify-center bg-gradient-to-br ${project.color}`}
              >
                <span className="text-4xl font-bold text-white/30">
                  {project.id.toString().padStart(2, "0")}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display font-semibold text-neutral-900">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-brand-600">
                  {t(`portfolio.filter_${project.category}`)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
