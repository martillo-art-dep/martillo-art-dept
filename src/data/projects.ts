// ─── Project Data ────────────────────────────────────────────────────
// Single source of truth for all project information.
// [PENDIENTE — CLIENTE] = content needed from Martillo team
// ─────────────────────────────────────────────────────────────────────

export interface ProjectCard {
  id: string;
  title: string;
  year: number;
  category: "largometrajes" | "series" | "comerciales" | "videoclips";
  image: string;
  description: string;
}

export interface Credit { role: string; name: string; }
export interface Nomination { title: string; area: string; }
export interface GallerySection { title: string; images: string[]; }

export interface ProjectFull extends ProjectCard {
  heroImage: string;
  subtitle: string;
  originalTitle: string;
  duration: string;
  genre: string;
  credits: Credit[];
  posterImage: string;
  trailerImage?: string;
  trailerUrl?: string;
  logos: { src: string; alt: string }[];
  nominations: Nomination[];
  synopsis: string;
  synopsisEn: string;
  productionDesignText: string;
  productionDesignTextEn: string;
  galleries: GallerySection[];
}

export const projects: ProjectFull[] = [
  // ═══ LARGOMETRAJES ═══
  {
    id: "sin-nombre",
    title: "SIN NOMBRE",
    year: 2007,
    category: "largometrajes",
    image: "/assets/projects/sin-nombre/thumb.webp",
    description: "Un crudo y emocionante thriller dramático que entrelaza los destinos de dos jóvenes en un peligroso viaje hacia el norte.",
    heroImage: "/assets/projects/sin-nombre/hero.webp",
    subtitle: "DISEÑO DE PRODUCCIÓN",
    originalTitle: "Sin Nombre",
    duration: "[PENDIENTE — CLIENTE]",
    genre: "Ficción",
    credits: [
      { role: "Dirección", name: "Cary Fukunaga" },
      { role: "Diseño de producción", name: "Claudio Contreras" },
      { role: "Producción", name: "Focus Features (EUA)" },
    ],
    posterImage: "/assets/projects/sin-nombre/poster.webp",
    trailerUrl: "https://www.youtube.com/watch?v=Fvbqwx3e_bQ",
    logos: [{ src: "/assets/logos/focus-features.png", alt: "Focus Features" }],
    nominations: [
      { title: "Sundance Film Festival 2009", area: "Directing Award: U.S. Dramatic — Cary Joji Fukunaga" },
      { title: "Sundance Film Festival 2009", area: "Excellence in Cinematography Award — Adriano Goldman" },
    ],
    synopsis: "Sin Nombre es un crudo y emocionante thriller dramático. La historia entrelaza los destinos de dos jóvenes que buscan escapar de su realidad en un peligroso viaje hacia el norte. Sus caminos se cruzan en un fatídico encuentro sobre un tren en movimiento, donde Casper protege a Sayra de un asalto liderado por su jefe de pandilla. Unidos por la necesidad de sobrevivir y el sueño de un futuro mejor, ambos deben navegar por un paisaje de violencia, redención y la constante amenaza de quienes los persiguen.",
    synopsisEn: "Sin Nombre is a raw and thrilling dramatic thriller. The story intertwines the fates of two young people who seek to escape their reality on a dangerous journey north. Their paths cross in a fateful encounter on a moving train, where Casper protects Sayra from an assault led by her gang boss. United by the need to survive and the dream of a better future, both must navigate a landscape of violence, redemption, and the constant threat of those who persecute them.",
    productionDesignText: "SIN NOMBRE presentaba un reto particular que era, mostrar desde la entraña, el mundo facineroso, hostil, pocas veces explorado, de la mara salvatrucha y la ruta migrante que va de centro a norte américa en el infernal cruce por todo México. El hiperrealismo como base de la concepción estética fue la guía artística para lograr imprimir la verosimilitud necesaria para narrar esta historia.",
    productionDesignTextEn: "SIN NOMBRE presented a particular challenge, which was to show from the inside, the facinerous, hostile, seldom explored world of the Mara Salvatrucha and the migrant route that goes from Central to North America in the infernal crossing through all of Mexico. Hyperrealism as the basis of the aesthetic conception was the artistic guide to achieve the necessary verisimilitude to narrate this story.",
    galleries: [
      { title: "CONSTRUCCIÓN DEL TREN", images: ["/assets/projects/sin-nombre/tren-01.webp", "/assets/projects/sin-nombre/tren-02.webp", "/assets/projects/sin-nombre/tren-03.webp"] },
      { title: "CASA DESTROYER", images: ["/assets/projects/sin-nombre/casa-01.webp", "/assets/projects/sin-nombre/casa-02.webp", "/assets/projects/sin-nombre/casa-03.webp"] },
    ],
  },
  {
    id: "giab",
    title: "GOD IS A BULLET",
    year: 2023,
    category: "largometrajes",
    image: "/assets/projects/giab/thumb.webp",
    description: "[PENDIENTE — CLIENTE: Descripción breve]",
    heroImage: "/assets/projects/giab/hero.webp",
    subtitle: "DISEÑO DE PRODUCCIÓN",
    originalTitle: "God Is a Bullet",
    duration: "[PENDIENTE — CLIENTE]",
    genre: "Thriller / Drama",
    credits: [
      { role: "Dirección", name: "Nick Cassavetes" },
      { role: "Diseño de producción", name: "Claudio Contreras" },
      { role: "Elenco", name: "Maika Monroe, Nikolaj Coster-Waldau" },
    ],
    posterImage: "/assets/projects/giab/poster.webp",
    trailerUrl: "[PENDIENTE — CLIENTE]",
    logos: [],
    nominations: [],
    synopsis: "[PENDIENTE — CLIENTE]",
    synopsisEn: "[PENDING — CLIENT]",
    productionDesignText: "[PENDIENTE — CLIENTE]",
    productionDesignTextEn: "[PENDING — CLIENT]",
    galleries: [
      { title: "SET MURDER MYSTERY", images: ["/assets/projects/giab/murder-01.webp", "/assets/projects/giab/murder-02.webp"] },
      { title: "SET CHALK FLOOR", images: ["/assets/projects/giab/chalk-01.webp", "/assets/projects/giab/chalk-02.webp"] },
      { title: "SET ERROL'S BATHROOM", images: ["/assets/projects/giab/errol-01.webp", "/assets/projects/giab/errol-02.webp"] },
    ],
  },
  {
    id: "el-violin",
    title: "EL VIOLÍN",
    year: 2005,
    category: "largometrajes",
    image: "/assets/projects/el-violin/thumb.webp",
    description: "La película mexicana con más de 55 premios en festivales nacionales e internacionales.",
    heroImage: "/assets/projects/el-violin/hero.webp",
    subtitle: "DISEÑO DE PRODUCCIÓN",
    originalTitle: "El Violín",
    duration: "[PENDIENTE — CLIENTE]",
    genre: "Ficción",
    credits: [
      { role: "Dirección", name: "Francisco Vargas Quevedo" },
      { role: "Diseño de producción", name: "Claudio Contreras" },
      { role: "Producción", name: "Cámara Carnal Films (México)" },
    ],
    posterImage: "/assets/projects/el-violin/poster.webp",
    trailerUrl: "https://www.youtube.com/watch?v=fVI4GjFkEq8",
    logos: [],
    nominations: [{ title: "55+ Premios Internacionales", area: "Festival de Morelia, San Sebastián, Huelva, São Paulo" }],
    synopsis: "EL VIOLÍN cuenta la historia de Don Plutarco, un anciano violinista, su hijo Genaro y su nieto Lucio, quienes viven una doble vida: son músicos rurales y campesinos, pero también están involucrados en la guerrilla que lucha contra un gobierno opresor. Cuando el ejército invade su pueblo, se ven obligados a huir y dejar atrás sus armas. Don Plutarco, usando su música como arma, intenta recuperar las municiones.",
    synopsisEn: "EL VIOLÍN tells the story of Don Plutarco, an elderly violinist, his son Genaro and grandson Lucio, who live a double life: they are rural musicians and peasants, but they are also involved in the guerrilla fighting against an oppressive government. When the army invades their village, they are forced to flee and leave their weapons behind. Don Plutarco, using his music as a weapon, tries to recover the ammunition.",
    productionDesignText: "El concepto de la dirección artística de EL VIOLÍN, se basa en una mirada documentada al interior del campo y las carencias cotidianas, que motivan a un grupo disidente al gobierno en turno a luchar por la vía armada. El estilo artístico encontró en el documental una fuente de inspiración para crear una estética donde, la ficción se confunde con la realidad.",
    productionDesignTextEn: "The concept of the artistic direction of EL VIOLÍN is based on a documented look at the interior of the field and the daily shortages, which motivate a group dissident to the government in turn to fight by armed means. The artistic style found in the documentary a source of inspiration to create an aesthetic where fiction is confused with reality.",
    galleries: [{ title: "EL VIOLÍN", images: ["/assets/projects/el-violin/gallery-01.webp", "/assets/projects/el-violin/gallery-02.webp"] }],
  },
  {
    id: "la-perdicion-de-los-hombres",
    title: "LA PERDICIÓN DE LOS HOMBRES",
    year: 2000,
    category: "largometrajes",
    image: "/assets/projects/la-perdicion/thumb.webp",
    description: "Ganadora de la Concha de Oro en el Festival de San Sebastián 2000.",
    heroImage: "/assets/projects/la-perdicion/hero.webp",
    subtitle: "DIRECCIÓN DE ARTE",
    originalTitle: "La Perdición de los Hombres",
    duration: "[PENDIENTE — CLIENTE]",
    genre: "Ficción",
    credits: [
      { role: "Dirección", name: "Arturo Ripstein" },
      { role: "Dirección de arte", name: "Claudio Contreras" },
      { role: "Producción", name: "Amaranta / Gardenia (México)" },
    ],
    posterImage: "/assets/projects/la-perdicion/poster.webp",
    trailerUrl: "https://www.youtube.com/watch?v=nnz7nwo8Vcs",
    logos: [],
    nominations: [{ title: "Concha de Oro — Mejor Película", area: "Festival de San Sebastián, España 2000" }],
    synopsis: "Dos hombres asesinan a un tercero tras una disputa trivial por un partido de béisbol en un pueblo remoto. A partir de este acto brutal, la película se transforma en una sátira surrealista donde el cadáver se convierte en el centro de una disputa entre dos mujeres: la esposa legítima y la amante, la historia explora la miseria, el machismo y el absurdo de la muerte.",
    synopsisEn: "Two men murder a third man after a trivial dispute over a baseball game in a remote town. From this brutal act, the film is transformed into a surreal satire where the corpse becomes the center of a dispute between two women: the legitimate wife and the lover, the story explores misery, machismo and the absurdity of death.",
    productionDesignText: "Para esta película abordé el realismo trágico como punto de partida para generar lugares que translucieran sátira desde la realidad del entorno donde sucede la historia, el concepto me llevó a abordar un ejercicio buñueliano con recursos limitados que permitieran un aire de fábula atemporal en ese entorno rural, vasto, hostil y desprovisto en una tierra de nadie donde la moral ha desaparecido.",
    productionDesignTextEn: "For this film I approached tragic realism as a starting point to generate places that would translude satire from the reality of the environment where the story takes place, the concept led me to address a Buñuelian exercise with limited resources that would allow an air of a timeless fable in that rural environment, vast, hostile and devoid in a no man's land where morality has disappeared.",
    galleries: [{ title: "LA PERDICIÓN DE LOS HOMBRES", images: ["/assets/projects/la-perdicion/gallery-01.webp", "/assets/projects/la-perdicion/gallery-02.webp"] }],
  },
  {
    id: "feral",
    title: "FERAL",
    year: 2017,
    category: "largometrajes",
    image: "/assets/projects/feral/thumb.webp",
    description: "Un experimento místico y perturbador en las profundidades de la sierra oaxaqueña.",
    heroImage: "/assets/projects/feral/hero.webp",
    subtitle: "DISEÑO DE PRODUCCIÓN",
    originalTitle: "Feral",
    duration: "[PENDIENTE — CLIENTE]",
    genre: "Ficción",
    credits: [
      { role: "Dirección", name: "Andrés Kaiser" },
      { role: "Diseño de producción", name: "Claudio Contreras" },
      { role: "Producción", name: "Cine Feral (México)" },
    ],
    posterImage: "/assets/projects/feral/poster.webp",
    trailerUrl: "https://www.youtube.com/watch?v=fVI4GjFkEq8",
    logos: [],
    nominations: [],
    synopsis: "En las profundidades de la sierra oaxaqueña yacen los restos quemados de un refugio que alguna vez albergó un experimento místico y perturbador. En 1986, Juan Felipe de Jesús, un sacerdote y psicoanalista, documentó en decenas de cintas de video su intento por reintegrar a la sociedad a tres niños salvajes encontrados en una cueva. A través de este material de archivo y entrevistas actuales, la película desentraña la verdad sobre un proceso de rehabilitación que se tornó sangriento.",
    synopsisEn: "In the depths of the Oaxacan highlands lie the burned-out remains of a shelter that once housed a mystical and disturbing experiment. In 1986, Juan Felipe de Jesús, a priest and psychoanalyst, documented on dozens of videotapes his attempt to reintegrate into society three feral children found in a cave. Through this archival footage and current interviews, the film unravels the truth about a rehabilitation process that turned bloody.",
    productionDesignText: "El diseño de producción de Feral no solo decora el espacio, sino que construye una verdad histórica ficticia. Las claves conceptuales se anclan en el hiperrealismo y el material documental, construir la casa era el punto clave, solo de esa manera podíamos habitar, incendiar y abandonar la casa en el menor tiempo posible para filmar lo que contenía el material de video que revela esta historia de horror social.",
    productionDesignTextEn: "Feral's production design not only decorates the space, but constructs a fictional historical truth. The conceptual keys are anchored in hyperrealism and documentary material, building the house was the key point, only in that way could we inhabit, burn down and leave the house in the shortest possible time to film what was contained in the video material that reveals this story of social horror.",
    galleries: [{ title: "FERAL", images: ["/assets/projects/feral/gallery-01.webp", "/assets/projects/feral/gallery-02.webp"] }],
  },
  {
    id: "club-eutanasia",
    title: "CLUB EUTANASIA",
    year: 2003,
    category: "largometrajes",
    image: "/assets/projects/club-eutanasia/thumb.webp",
    description: "Sátira ácida sobre el abandono en la tercera edad. Premio del Público en el FICG 2005.",
    heroImage: "/assets/projects/club-eutanasia/hero.webp",
    subtitle: "DISEÑO DE PRODUCCIÓN",
    originalTitle: "Club Eutanasia",
    duration: "[PENDIENTE — CLIENTE]",
    genre: "Ficción",
    credits: [
      { role: "Dirección", name: "Agustín \"Oso\" Tapia" },
      { role: "Diseño de producción", name: "Claudio Contreras" },
      { role: "Producción", name: "Hartos Indios (México)" },
    ],
    posterImage: "/assets/projects/club-eutanasia/poster.webp",
    trailerUrl: "https://www.youtube.com/watch?v=TJZuBV7zPQ8",
    logos: [],
    nominations: [
      { title: "Premio del Público", area: "Festival Internacional de Cine de Guadalajara 2005" },
      { title: "Mejor Diseño de Arte", area: "Festival Centroamericano de Cine \"Ícaro\", Guatemala 2005" },
    ],
    synopsis: "Tras la muerte del benefactor del asilo \"El Refugio\", la vida de los residentes se vuelve precaria debido a la falta de recursos y atención médica. Desesperados por mejorar sus condiciones, un grupo de ancianos decide tomar medidas extremas: comienzan a eliminar a otros compañeros para reducir la población del asilo, haciendo que los crímenes parezcan muertes naturales o accidentales. Esta sátira ácida explora el abandono en la tercera edad a través de un pacto de supervivencia tan cínico como letal.",
    synopsisEn: "After the death of the benefactor of the asylum \"El Refugio\", the lives of the residents become precarious due to the lack of resources and medical care. Desperate to improve their conditions, a group of elderly people decide to take extreme measures: they begin to eliminate other companions to reduce the population of the nursing home, making the crimes seem like natural or accidental deaths. This acid satire explores abandonment in old age through a survival pact that is as cynical as it is lethal.",
    productionDesignText: "El asilo es un lugar que se siente \"atrapado en el tiempo\", utilizar una paleta de colores deslavados y texturas que evocan una gloria pasada, que refuerzan la sensación de abandono y precariedad en la que viven los personajes. Los crímenes cometidos por el club deben parecer muertes naturales. El diseño de producción y la utilería se enfocan en objetos cotidianos del asilo que se vuelven letales, manteniendo una apariencia de normalidad doméstica que en todo momento se inscribe en el humor negro.",
    productionDesignTextEn: "The asylum is a place that feels \"trapped in time\", using a palette of washed colors and textures that evoke a past glory, which reinforce the feeling of abandonment and precariousness in which the characters live. The crimes committed by the club must appear to be natural deaths. The production design and props focus on everyday objects of the asylum that become lethal, maintaining an appearance of domestic normality that at all times is inscribed in black humor.",
    galleries: [{ title: "CLUB EUTANASIA", images: ["/assets/projects/club-eutanasia/gallery-01.webp", "/assets/projects/club-eutanasia/gallery-02.webp"] }],
  },

  // ═══ SERIES ═══
  {
    id: "mala-fortuna",
    title: "MALA FORTUNA",
    year: 2024,
    category: "series",
    image: "/assets/projects/mala-fortuna/thumb.webp",
    description: "[PENDIENTE — CLIENTE]",
    heroImage: "/assets/projects/mala-fortuna/hero.webp",
    subtitle: "[PENDIENTE — CLIENTE: Rol]",
    originalTitle: "Mala Fortuna",
    duration: "[PENDIENTE — CLIENTE]",
    genre: "Serie",
    credits: [
      { role: "Dirección", name: "[PENDIENTE — CLIENTE]" },
      { role: "Diseño de producción", name: "[PENDIENTE — CLIENTE]" },
    ],
    posterImage: "/assets/projects/mala-fortuna/poster.webp",
    trailerUrl: "[PENDIENTE — CLIENTE]",
    logos: [],
    nominations: [],
    synopsis: "[PENDIENTE — CLIENTE]",
    synopsisEn: "[PENDING — CLIENT]",
    productionDesignText: "[PENDIENTE — CLIENTE]",
    productionDesignTextEn: "[PENDING — CLIENT]",
    galleries: [{ title: "MALA FORTUNA", images: ["/assets/projects/mala-fortuna/gallery-01.webp", "/assets/projects/mala-fortuna/gallery-02.webp"] }],
  },

  // ═══ COMERCIALES ═══
  {
    id: "frosten-flake",
    title: "ZUCARITAS / FROSTED FLAKES",
    year: 2008,
    category: "comerciales",
    image: "/assets/projects/frosten-flake/thumb.webp",
    description: "Colaboración entre Kellogg's y Lucasfilm: Cazadores del Arca Perdida con el Tigre Toño.",
    heroImage: "/assets/projects/frosten-flake/hero.webp",
    subtitle: "DISEÑO DE PRODUCCIÓN",
    originalTitle: "Zucaritas — Kellogg's",
    duration: "30 seg.",
    genre: "Comercial TV",
    credits: [
      { role: "Dirección", name: "James Wahlberg" },
      { role: "Diseño de producción", name: "Claudio Contreras" },
      { role: "Producción", name: "Metro Producciones (México)" },
      { role: "Cliente", name: "Kellogg's" },
    ],
    posterImage: "/assets/projects/frosten-flake/poster.webp",
    trailerUrl: "[PENDIENTE — CLIENTE: Link Vimeo]",
    logos: [],
    nominations: [],
    synopsis: "Una colaboración entre Kellogg's y Lucas LTD, para crear esta pieza de Cazadores del Arca Perdida con el Tigre Toño como Indiana Jones, un set retador y divertido.",
    synopsisEn: "A collaboration between Kellogg's and Lucas LTD, to create this Raiders of the Lost Ark piece with Tony the Tiger as Indiana Jones, a challenging and fun set.",
    productionDesignText: "Una colaboración entre Kellogg's y Lucas LTD, para crear esta pieza de CAZADORES DEL ARCA PERDIDA CON el Tigre Toño como Indiana Jones, un set retador y divertido.",
    productionDesignTextEn: "A collaboration between Kellogg's and Lucas LTD, to create this Raiders of the Lost Ark piece with Tony the Tiger as Indiana Jones, a challenging and fun set.",
    galleries: [],
  },
  {
    id: "gatorade-shangai",
    title: "GATORADE SHANGÁI",
    year: 2008,
    category: "comerciales",
    image: "/assets/projects/gatorade-shangai/thumb.webp",
    description: "Recreación de una calle de Shanghái en un poblado de Puebla, México.",
    heroImage: "/assets/projects/gatorade-shangai/hero.webp",
    subtitle: "DISEÑO DE PRODUCCIÓN",
    originalTitle: "Shangái / Sidney — Gatorade",
    duration: "30 seg.",
    genre: "Comercial TV",
    credits: [
      { role: "Dirección", name: "Pedro Ávila" },
      { role: "Diseño de producción", name: "Claudio Contreras" },
      { role: "Producción", name: "Metro Producciones (México)" },
      { role: "Cliente", name: "Gatorade" },
    ],
    posterImage: "/assets/projects/gatorade-shangai/poster.webp",
    trailerUrl: "[PENDIENTE — CLIENTE: Link Vimeo]",
    logos: [],
    nominations: [],
    synopsis: "En una calle de un poblado en el estado de Puebla en México, en combinación con efectos visuales recreamos una calle de un barrio popular de Shanghái.",
    synopsisEn: "On a street in a town in the state of Puebla in Mexico, in combination with visual effects we recreated a street in a popular neighborhood of Shanghai.",
    productionDesignText: "En una calle de un poblado en el estado de Puebla en México, en combinación con efectos visuales recreamos una calle de un barrio popular de Shanghái.",
    productionDesignTextEn: "On a street in a town in the state of Puebla in Mexico, in combination with visual effects we recreated a street in a popular neighborhood of Shanghai.",
    galleries: [],
  },
  {
    id: "nissan-elefante",
    title: "NISSAN ESTAQUITAS",
    year: 2008,
    category: "comerciales",
    image: "/assets/projects/nissan-elefante/thumb.webp",
    description: "La gasolinería en medio de la nada, un clásico de la publicidad en México.",
    heroImage: "/assets/projects/nissan-elefante/hero.webp",
    subtitle: "DISEÑO DE PRODUCCIÓN",
    originalTitle: "Estaquitas — Nissan",
    duration: "30 seg.",
    genre: "Comercial TV",
    credits: [
      { role: "Dirección", name: "Diego Pernia" },
      { role: "Diseño de producción", name: "Claudio Contreras" },
      { role: "Producción", name: "Filmmates (México)" },
      { role: "Cliente", name: "Nissan" },
    ],
    posterImage: "/assets/projects/nissan-elefante/poster.webp",
    trailerUrl: "[PENDIENTE — CLIENTE: Link Vimeo]",
    logos: [],
    nominations: [],
    synopsis: "La gasolinería en medio de la nada, un set que siempre presenta retos interesantes, en este caso para revisitar un clásico de la publicidad en México, el elefante en la Estaquitas.",
    synopsisEn: "The gas station in the middle of nowhere, a set that always presents interesting challenges, in this case to revisit a classic of advertising in Mexico, the elephant in the Estaquitas.",
    productionDesignText: "La gasolinería en medio de la nada, un set que siempre presenta retos interesantes, en este caso para revisitar un clásico de la publicidad en México, el elefante en la Estaquitas.",
    productionDesignTextEn: "The gas station in the middle of nowhere, a set that always presents interesting challenges, in this case to revisit a classic of advertising in Mexico, the elephant in the Estaquitas.",
    galleries: [],
  },

  // ═══ VIDEOCLIPS ═══
  {
    id: "dead-dance",
    title: "THE DEAD DANCE",
    year: 2025,
    category: "videoclips",
    image: "/assets/projects/dead-dance/thumb.webp",
    description: "Videoclip de Lady Gaga dirigido por Tim Burton.",
    heroImage: "/assets/projects/dead-dance/hero.webp",
    subtitle: "DISEÑO DE PRODUCCIÓN",
    originalTitle: "Lady Gaga — Dead Dance",
    duration: "[PENDIENTE — CLIENTE]",
    genre: "Videoclip",
    credits: [
      { role: "Dirección", name: "Tim Burton" },
      { role: "Diseño de producción", name: "Claudio Contreras" },
      { role: "Artista", name: "Lady Gaga" },
      { role: "Producción", name: "The Roots (Chi/Mex/Uy/Ar)" },
    ],
    posterImage: "/assets/projects/dead-dance/poster.webp",
    trailerUrl: "https://www.youtube.com/watch?v=xGaZBfJOyAc",
    logos: [],
    nominations: [],
    synopsis: "El universo de Tim Burton es por todos conocido, ser el responsable de llevarlo a cabo puede ser una oportunidad única en la vida. No hay espacio para la duda, cuando Tim llegó al set, se sintió en casa.",
    synopsisEn: "Tim Burton's universe is known to all, being responsible for carrying it out can be a once-in-a-lifetime opportunity. There is no room for doubt, when Tim arrived on set, he felt at home.",
    productionDesignText: "El universo de Tim Burton es por todos conocido, ser el responsable de llevarlo a cabo puede ser una oportunidad única en la vida. No hay espacio para la duda, cuando Tim llegó al set, se sintió en casa.",
    productionDesignTextEn: "Tim Burton's universe is known to all, being responsible for carrying it out can be a once-in-a-lifetime opportunity. There is no room for doubt, when Tim arrived on set, he felt at home.",
    galleries: [{ title: "THE DEAD DANCE", images: ["/assets/projects/dead-dance/gallery-01.webp", "/assets/projects/dead-dance/gallery-02.webp"] }],
  },
  {
    id: "mis-planes-son-a-marte",
    title: "MIS PLANES SON A MARTE",
    year: 2016,
    category: "videoclips",
    image: "/assets/projects/mis-planes/thumb.webp",
    description: "Video álbum de Juanes — una historia de amor Sci Fi.",
    heroImage: "/assets/projects/mis-planes/hero.webp",
    subtitle: "DISEÑO DE PRODUCCIÓN",
    originalTitle: "Mis Planes son Amarte — Juanes",
    duration: "[PENDIENTE — CLIENTE]",
    genre: "Videoclip / Video Álbum",
    credits: [
      { role: "Dirección", name: "Kcho López" },
      { role: "Diseño de producción", name: "Claudio Contreras" },
      { role: "Artista", name: "Juanes" },
      { role: "Producción", name: "Filmes Zapatero (P.R.), Virgen Films (Arg), Odesa (Mex), Akira Cine (Col)" },
    ],
    posterImage: "/assets/projects/mis-planes/poster.webp",
    trailerUrl: "https://www.youtube.com/watch?v=oYav1M8FUuo&list=PLgzDqXNLEHWE4cTqRIIlKVLj0MU1v5bNY",
    logos: [],
    nominations: [],
    synopsis: "El video álbum de Juanes es una historia de amor Sci Fi. La nave es el vehículo narrativo que nos lleva del espacio exterior a la tierra, para descubrir un planeta tierra citadino, exuberante y fascinante.",
    synopsisEn: "Juanes' video album is a Sci Fi love story. The ship is the narrative vehicle that takes us from outer space to earth, to discover a city planet earth, lush and fascinating.",
    productionDesignText: "El video álbum de Juanes es una historia de amor Sci Fi. La nave es el vehículo narrativo que nos lleva del espacio exterior a la tierra, para descubrir un planeta tierra citadino, exuberante y fascinante.",
    productionDesignTextEn: "Juanes' video album is a Sci Fi love story. The ship is the narrative vehicle that takes us from outer space to earth, to discover a city planet earth, lush and fascinating.",
    galleries: [{ title: "MIS PLANES SON A MARTE", images: ["/assets/projects/mis-planes/gallery-01.webp", "/assets/projects/mis-planes/gallery-02.webp"] }],
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────

export function getProjectCards(): ProjectCard[] {
  return projects.map(({ id, title, year, category, image, description }) => ({
    id, title, year, category, image, description,
  }));
}

export function getProjectById(id: string): ProjectFull | undefined {
  return projects.find((p) => p.id === id);
}