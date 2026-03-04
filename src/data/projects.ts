// ─── Project Data ────────────────────────────────────────────────────
// Single source of truth for all project information.
// Used by Portfolio (grid/list) and ProjectDetail (full page).
//
// To migrate to a CMS later, replace this file with an API fetch
// that returns the same ProjectFull[] shape.
// ─────────────────────────────────────────────────────────────────────

export interface ProjectCard {
  id: string;
  title: string;
  year: number;
  category: "largometrajes" | "series" | "comerciales" | "videoclips";
  image: string;
  description: string;
}

export interface Credit {
  role: string;
  name: string;
}

export interface Nomination {
  title: string;
  area: string;
}

export interface GallerySection {
  title: string;
  images: string[];
}

export interface ProjectFull extends ProjectCard {
  // Hero
  heroImage: string;
  subtitle: string; // e.g. "DISEÑO DE PRODUCCIÓN"

  // Technical sheet
  originalTitle: string;
  duration: string;
  genre: string;
  credits: Credit[];

  // Poster / Trailer
  posterImage: string;
  trailerImage?: string;

  // Logos (production companies, country flags, etc.)
  logos: { src: string; alt: string }[];

  // Awards / Nominations
  nominations: Nomination[];

  // Synopsis
  synopsis: string;

  // Production design text
  productionDesignText: string;

  // Image galleries
  galleries: GallerySection[];
}

// ─── Data ────────────────────────────────────────────────────────────

export const projects: ProjectFull[] = [
  {
    id: "sin-nombre",
    title: "SIN NOMBRE",
    year: 2017,
    category: "largometrajes",
    image: "/assets/projects/project-1.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi ligula tempus diam nisl parturient per penatibus. Consequat vehicula tempor accumsan purus, pellentesque etiam.",

    // Detail page
    heroImage: "/assets/projects/sin-nombre-hero.jpg",
    subtitle: "DISEÑO DE PRODUCCIÓN",
    originalTitle: "Sin Nombre",
    duration: "120 min.",
    genre: "Ficción",
    credits: [
      { role: "Dirección", name: "Cary Fukunaga" },
      { role: "Diseño de producción", name: "Claudio Contreras" },
      { role: "Guión", name: "Cary Fukunaga" },
      { role: "Dirección de Fotografía", name: "Cary Fukunaga" },
    ],
    posterImage: "/assets/projects/sin-nombre-poster.jpg",
    trailerImage: "/assets/projects/sin-nombre-trailer.jpg",
    logos: [
      { src: "/assets/focus-logo.svg", alt: "Focus Features" },
      { src: "/assets/EU-flag-projects.svg", alt: "USA" },
      { src: "/assets/MX-flag-projects.svg", alt: "México" },
    ],
    nominations: [
      { title: "Nominación", area: "Rol Cargo o Area" },
      { title: "Nominación", area: "Rol Cargo o Area" },
      { title: "Nominación", area: "Rol Cargo o Area" },
      { title: "Nominación", area: "Rol Cargo o Area" },
      { title: "Nominación", area: "Rol Cargo o Area" },
    ],
    synopsis:
      "Sin Nombre es un crudo y emocionante thriller dramático. La historia entrelaza los destinos de dos jóvenes que buscan escapar de su realidad en un peligroso viaje hacia el norte. Sus caminos se cruzan en un fatídico encuentro sobre un tren en movimiento, donde Casper protege a Sayra de un asalto liderado por su jefe de pandilla. Unidos por la necesidad de sobrevivir y el sueño de un futuro mejor, ambos deben navegar por un paisaje de violencia, redención y la constante amenaza de quienes los persiguen.",
    productionDesignText:
      "SIN NOMBRE presentaba un reto particular que era, mostrar desde la entraña, el mundo facineroso, hostil, pocas veces explorado, de la mara salvatrucha y la ruta migrante que va de centro a norte américa en el infernal cruce por todo México. El hiperrealismo como base de la concepción estética fue la guía artística para lograr imprimir la verosimilitud necesaria para narrar esta historia.",
    galleries: [
      {
        title: "CONSTRUCCIÓN DEL TREN",
        images: [
          "/assets/projects/sin-nombre-tren-1.jpg",
          "/assets/projects/sin-nombre-tren-2.jpg",
          "/assets/projects/sin-nombre-tren-3.jpg",
          "/assets/projects/sin-nombre-tren-4.jpg",
          "/assets/projects/sin-nombre-tren-5.jpg",
          "/assets/projects/sin-nombre-tren-6.jpg",
        ],
      },
      {
        title: "CASA DESTROYER",
        images: [
          "/assets/projects/sin-nombre-casa-1.jpg",
          "/assets/projects/sin-nombre-casa-2.jpg",
          "/assets/projects/sin-nombre-casa-3.jpg",
          "/assets/projects/sin-nombre-casa-4.jpg",
          "/assets/projects/sin-nombre-casa-5.jpg",
          "/assets/projects/sin-nombre-casa-6.jpg",
        ],
      },
    ],
  },
  {
    id: "proyecto-2",
    title: "SIN NOMBRE",
    year: 2025,
    category: "series",
    image: "/assets/projects/project-2.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi ligula tempus diam nisl parturient per penatibus. Consequat vehicula tempor accumsan purus, pellentesque etiam.",
    heroImage: "/assets/projects/project-2-hero.jpg",
    subtitle: "DISEÑO DE PRODUCCIÓN",
    originalTitle: "Proyecto 2",
    duration: "90 min.",
    genre: "Drama",
    credits: [
      { role: "Dirección", name: "Director Name" },
      { role: "Diseño de producción", name: "Claudio Contreras" },
    ],
    posterImage: "/assets/projects/project-2.png",
    logos: [],
    nominations: [],
    synopsis: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    productionDesignText: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    galleries: [],
  },
  {
    id: "proyecto-3",
    title: "SIN NOMBRE",
    year: 2025,
    category: "comerciales",
    image: "/assets/projects/project-3.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi ligula tempus diam nisl parturient per penatibus. Consequat vehicula tempor accumsan purus, pellentesque etiam.",
    heroImage: "/assets/projects/project-3-hero.jpg",
    subtitle: "DISEÑO DE PRODUCCIÓN",
    originalTitle: "Proyecto 3",
    duration: "30 min.",
    genre: "Comercial",
    credits: [
      { role: "Dirección", name: "Director Name" },
      { role: "Diseño de producción", name: "Claudio Contreras" },
    ],
    posterImage: "/assets/projects/project-3.png",
    logos: [],
    nominations: [],
    synopsis: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    productionDesignText: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    galleries: [],
  },
  {
    id: "proyecto-4",
    title: "SIN NOMBRE",
    year: 2025,
    category: "videoclips",
    image: "/assets/projects/project-4.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi ligula tempus diam nisl parturient per penatibus. Consequat vehicula tempor accumsan purus, pellentesque etiam.",
    heroImage: "/assets/projects/project-4-hero.jpg",
    subtitle: "DISEÑO DE PRODUCCIÓN",
    originalTitle: "Proyecto 4",
    duration: "5 min.",
    genre: "Videoclip",
    credits: [
      { role: "Dirección", name: "Director Name" },
      { role: "Diseño de producción", name: "Claudio Contreras" },
    ],
    posterImage: "/assets/projects/project-4.png",
    logos: [],
    nominations: [],
    synopsis: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    productionDesignText: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    galleries: [],
  },
  {
    id: "proyecto-5",
    title: "SIN NOMBRE",
    year: 2025,
    category: "largometrajes",
    image: "/assets/projects/project-5.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi ligula tempus diam nisl parturient per penatibus. Consequat vehicula tempor accumsan purus, pellentesque etiam.",
    heroImage: "/assets/projects/project-5-hero.jpg",
    subtitle: "DISEÑO DE PRODUCCIÓN",
    originalTitle: "Proyecto 5",
    duration: "110 min.",
    genre: "Ficción",
    credits: [
      { role: "Dirección", name: "Director Name" },
      { role: "Diseño de producción", name: "Claudio Contreras" },
    ],
    posterImage: "/assets/projects/project-5.png",
    logos: [],
    nominations: [],
    synopsis: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    productionDesignText: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    galleries: [],
  },
  {
    id: "proyecto-6",
    title: "SIN NOMBRE",
    year: 2025,
    category: "series",
    image: "/assets/projects/project-6.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies cum class habitant fringilla, aliquam dignissim facilisi ligula tempus diam nisl parturient per penatibus. Consequat vehicula tempor accumsan purus, pellentesque etiam.",
    heroImage: "/assets/projects/project-6-hero.jpg",
    subtitle: "DISEÑO DE PRODUCCIÓN",
    originalTitle: "Proyecto 6",
    duration: "45 min.",
    genre: "Drama",
    credits: [
      { role: "Dirección", name: "Director Name" },
      { role: "Diseño de producción", name: "Claudio Contreras" },
    ],
    posterImage: "/assets/projects/project-6.png",
    logos: [],
    nominations: [],
    synopsis: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    productionDesignText: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    galleries: [],
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────

/** Get all projects as card-level data (for Portfolio grid/list) */
export function getProjectCards(): ProjectCard[] {
  return projects.map(({ id, title, year, category, image, description }) => ({
    id,
    title,
    year,
    category,
    image,
    description,
  }));
}

/** Get a single project by ID (for ProjectDetail page) */
export function getProjectById(id: string): ProjectFull | undefined {
  return projects.find((p) => p.id === id);
}