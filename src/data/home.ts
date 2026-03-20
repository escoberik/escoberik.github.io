export interface ExperienceItem {
  years: string
  company: string
  role: string
  desc: string
  highlight: boolean
}

export interface HomeData {
  pageTitle: string
  altLangUrl: string
  eyebrow: string
  heroTitle: string
  heroBioBefore: string
  heroBioAfter: string
  resumeLabel: string
  blogLabel: string
  contactLabel: string
  blogHref: string
  experienceLabel: string
  experience: ExperienceItem[]
  openSourceLabel: string
  projectDesc: string
  projectReadLabel: string
  writingLabel: string
  postHrefPrefix: string
  seeAllLabel: string
  seeAllHref: string
}

export const homeData: Record<'en' | 'es', HomeData> = {
  en: {
    pageTitle: 'Erik Escobedo — Software Engineer',
    altLangUrl: '/es',
    eyebrow: 'Available for new opportunities',
    heroTitle: 'Software Engineer',
    heroBioBefore: '16+ years building systems at scale. Three years at',
    heroBioAfter:
      'Classroom, where I led API migrations for millions of users and sunset legacy platforms without breaking a thing. I specialize in untangling complexity and making it disappear.',
    resumeLabel: 'Resume',
    blogLabel: 'Read the blog',
    contactLabel: 'Contact',
    blogHref: '/blog',
    experienceLabel: 'Experience',
    experience: [
      {
        years: '2023 – 2026',
        company: 'Google',
        role: 'Software Engineer · Google Classroom',
        desc: 'Designed database migrations for millions of users using Dark Launch. Architected a synthetic SIS sandbox for AI agent integration testing. Led EOL process for a legacy platform. Co-wrote a comprehensive SQLT test suite.',
        highlight: true,
      },
      {
        years: '2018 – 2022',
        company: 'FanMaker',
        role: 'Software Engineer',
        desc: 'Maintained 30+ iOS/Android apps on a shared Rails back end. Scaled AWS infrastructure to 1M+ concurrent users with predictive auto-scaling. Engineered a double-entry accounting engine for virtual currency.',
        highlight: false,
      },
      {
        years: '2013 – 2018',
        company: 'Freelance',
        role: 'Founder & Team Leader',
        desc: 'Founded a team of local engineers delivering for US clients. Responsible for architecture, scoping, and mentoring.',
        highlight: false,
      },
    ],
    openSourceLabel: 'Open Source',
    projectDesc:
      'An interactive step-by-step Red-Black Tree visualizer built in React. Insert, search, or delete a value — then walk through every comparison, rotation, and recolor the algorithm performs, one frame at a time.',
    projectReadLabel: 'View on npm →',
    writingLabel: 'Writing',
    postHrefPrefix: '/blog/',
    seeAllLabel: 'All posts →',
    seeAllHref: '/blog',
  },
  es: {
    pageTitle: 'Erik Escobedo — Ingeniero de Software',
    altLangUrl: '/',
    eyebrow: 'Disponible para nuevas oportunidades',
    heroTitle: 'Ingeniero de Software',
    heroBioBefore: 'Más de 16 años construyendo sistemas a escala. Tres años en',
    heroBioAfter:
      'Classroom, donde lideré migraciones de API para millones de usuarios y retiré plataformas heredadas sin interrupciones. Me especializo en desenredar la complejidad y hacerla desaparecer.',
    resumeLabel: 'Currículum',
    blogLabel: 'Ver el blog',
    contactLabel: 'Contacto',
    blogHref: '/es/blog',
    experienceLabel: 'Experiencia',
    experience: [
      {
        years: '2023 – 2026',
        company: 'Google',
        role: 'Software Engineer · Google Classroom',
        desc: 'Diseñé migraciones de base de datos para millones de usuarios con Dark Launch. Arquitecté un sandbox SIS sintético para pruebas de integración de agentes de IA. Lideré el proceso EOL de una plataforma heredada. Co-escribí una suite de pruebas SQLT integral.',
        highlight: true,
      },
      {
        years: '2018 – 2022',
        company: 'FanMaker',
        role: 'Software Engineer',
        desc: 'Mantuve más de 30 apps iOS/Android sobre un backend Rails compartido. Escalé infraestructura AWS a más de 1M usuarios simultáneos con auto-scaling predictivo. Desarrollé un motor de contabilidad de partida doble para moneda virtual.',
        highlight: false,
      },
      {
        years: '2013 – 2018',
        company: 'Freelance',
        role: 'Fundador y Líder de Equipo',
        desc: 'Fundé un equipo de ingenieros locales trabajando con clientes de EEUU. Responsable de arquitectura, alcance y mentoría.',
        highlight: false,
      },
    ],
    openSourceLabel: 'Código Abierto',
    projectDesc:
      'Un visualizador interactivo de Árboles Rojo-Negro construido en React. Inserta, busca o elimina un valor y recorre cada comparación, rotación y recoloración del algoritmo, cuadro a cuadro.',
    projectReadLabel: 'Ver en npm →',
    writingLabel: 'Notas',
    postHrefPrefix: '/es/blog/',
    seeAllLabel: 'Ver todas →',
    seeAllHref: '/es/blog',
  },
}
