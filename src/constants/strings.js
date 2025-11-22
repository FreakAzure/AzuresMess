export const strings = {
  // General
  siteName: "Azure's Mess",
  name: "Elisabeth",
  title: "Desarrolladora e Innovadora",
  realName: "Elisabeth",
  cvTitle: "Mobile & Backend Full Stack Developer",
  
  // Header
  header: {
    menuItems: [
      { name: 'Inicio', href: '#hero' },
      { name: 'Proyectos', href: '#projects' },
      { name: 'CV', href: '#cv' },
      { name: 'Contacto', href: '#contact' },
    ],
    menuToggle: "Toggle menu"
  },

  // Hero / Homepage
  hero: {
    welcome: "Bienvenid@ a mi espacio",
    title: "Desarrollo y otros shenanigans",
    subtitle: "Mobile & Backend Full Stack Developer",
    description: "Desarrolladora apasionada por la tecnología emergente. Especializada en desarrollo mobile, backend y blockchain. Construyendo el futuro, un proyecto a la vez.",
    about: {
      title: "Sobre mí",
      paragraph1: "Soy Azure, desarrolladora full stack con experiencia en tecnologías móviles nativas (Android/iOS), backend escalable y soluciones blockchain. Me apasiona crear software que impacte positivamente y resolver problemas complejos con código elegante.",
      paragraph2: "Actualmente trabajo como desarrolladora freelance, colaborando en proyectos de blockchain y desarrollo backend y cloud para diversas empresas. Anteriormente fui Founder & CTO en Whatalab, donde lideré el desarrollo de soluciones tecnológicas innovadoras.",
      paragraph3: "Cuando no estoy programando, disfruto explorando nuevas tecnologías, programando beats o cocinando algo nuevo."
    },
    highlights: {
      title: "¿Qué puedo hacer por ti?",
      items: [
        {
          icon: "cloud",
          title: "DevOps",
          description: "Arquitecturas cloud escalables, infraestructura como código y soluciones DevOps"
        },
        {
          icon: "backend",
          title: "Backend & APIs",
          description: "Arquitecturas escalables, microservicios y APIs RESTful robustas"
        },
        {
          icon: "blockchain",
          title: "Blockchain",
          description: "Soluciones descentralizadas en el ecosistema Hedera y smart contracts"
        }
      ]
    },
    buttons: {
      viewProjects: "Ver Proyectos",
      viewCV: "Ver mi CV",
      downloadCV: "Descargar CV",
      contact: "Contactar"
    },
    social: {
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "Email"
    }
  },

  // Projects
  projects: {
    title: "Mis Proyectos",
    subtitle: "Una colección de proyectos que muestran mis habilidades y pasión por el desarrollo",
    buttons: {
      addProject: "Agregar Proyecto",
      cancel: "Cancelar",
      submit: "Agregar Proyecto"
    },
    form: {
      title: "Título",
      description: "Descripción",
      technologies: "Tecnologías (separadas por comas)",
      technologiesPlaceholder: "React, Tailwind CSS, Node.js",
      imageUrl: "URL de Imagen",
      projectLink: "Link del Proyecto",
      github: "GitHub"
    },
    links: {
      viewProject: "Ver proyecto",
      code: "Código"
    }
  },

  // CV
  cv: {
    title: "Mi CV",
    subtitle: "Conoce más sobre mi experiencia y habilidades",
    downloadButton: "Descargar CV",
    sections: {
      experience: "Experiencia",
      education: "Educación",
      skills: "Habilidades",
      languages: "Idiomas",
      portfolio: "Portfolio"
    },
    downloadAlert: "Función de descarga de CV - Puedes agregar tu archivo PDF aquí"
  },

  // Footer
  footer: {
    tagline: "Mi trocito de internet",
    madeWith: "Hecho con",
    in: "en"
  },

  // Links
  links: {
    github: "https://github.com/FreakAzure",
    linkedin: "https://www.linkedin.com/in/azurescodeexperience/",
    email: "mailto:eli@freakazure.com",
    portfolio: "https://freakazure.com"
  }
}

// Datos del CV - Experiencia
export const experience = [
  {
    title: 'Founder & Ex-CTO',
    company: 'Whatalab',
    period: 'Mar 2024 - Nov 2024',
    location: 'España',
    type: 'Profesional independiente',
    description: 'Fundadora y ex-CTO de Whatalab, liderando el desarrollo de soluciones tecnológicas innovadoras. Especializada en desarrollo mobile nativo (Android/iOS) y tecnologías emergentes. Dirigí proyectos relacionados con robótica humanoides y arquitecturas blockchain descentralizadas. Responsable de la estrategia técnica, arquitectura de sistemas y liderazgo de equipos de desarrollo.'
  },
  {
    title: 'Directora de Proyecto & Backend',
    company: '4Pets',
    period: 'Nov 2024 - Presente',
    location: 'España · Remoto',
    type: 'Profesional independiente',
    description: 'Director de proyecto y arquitectura backend especializada en tecnología blockchain del ecosistema Hedera. Diseñando e implementando soluciones descentralizadas que transforman la interacción con tecnología. Gestionando equipos técnicos, definiendo arquitecturas escalables y asegurando la calidad del código en proyectos críticos de blockchain.'
  },
  {
    title: 'Ingeniera de Software',
    company: 'FENIXMOCA',
    period: 'Nov 2024 - Presente',
    location: 'España · Remoto',
    type: 'Profesional independiente',
    description: 'Desarrollo de software y soluciones tecnológicas en modalidad remota. Especializada en arquitecturas backend escalables, APIs RESTful y microservicios. Implementando mejores prácticas de desarrollo, testing automatizado y CI/CD para garantizar la calidad y entrega continua de software.'
  },
  {
    title: 'Ingeniera de Software',
    company: 'Renta 4',
    period: 'Mar 2024 - Nov 2024',
    location: 'Madrid, España · Híbrido',
    type: 'Jornada completa',
    description: 'Desarrollo de aplicaciones móviles Android nativas para el sector financiero. Trabajando en modalidad híbrida desarrollando soluciones fintech innovadoras que mejoran la experiencia del usuario. Implementando arquitecturas MVVM, integración con APIs REST, y optimización de rendimiento para aplicaciones críticas en producción.'
  },
  {
    title: 'Ingeniera de Software aplicado a Soluciones Blockchain',
    company: 'EY',
    period: 'Sept 2022 - Mar 2024',
    location: 'Madrid, España',
    type: 'Jornada completa',
    description: 'Desarrollo de soluciones blockchain empresariales utilizando NestJS, TypeScript y frameworks modernos. Diseñando arquitecturas descentralizadas, smart contracts y sistemas de consenso. Trabajando en proyectos innovadores dentro del ecosistema blockchain, colaborando con equipos multidisciplinarios para entregar soluciones escalables y seguras.'
  },
  {
    title: 'Desarrolladora de Aplicaciones para Móviles',
    company: 'Bitnovo',
    period: 'Nov 2021 - Sept 2022',
    location: 'Madrid, España',
    type: 'Jornada completa',
    description: 'Desarrollo de la aplicación móvil principal de Bitnovo, plataforma líder en criptomonedas. Implementación de funcionalidades críticas de trading, gestión de wallets y seguridad. Trabajando con Git, SQL, arquitecturas móviles nativas y APIs REST para crear soluciones fintech robustas y seguras.'
  },
  {
    title: 'Desarrolladora de iOS',
    company: 'CGI Umanis',
    period: 'Abr 2021 - Nov 2021',
    location: 'España',
    type: 'Jornada completa',
    description: 'Desarrollo de aplicaciones iOS nativas utilizando Swift, UIKit y tecnologías móviles modernas. Implementando interfaces de usuario responsivas, integración con APIs backend, gestión de datos locales con Core Data y optimización de rendimiento. Colaborando en proyectos empresariales siguiendo metodologías ágiles.'
  },
  {
    title: 'Freelance Software Developer',
    company: 'AVIAZE by Starman Aviation',
    period: 'Oct 2019 - Abr 2021',
    location: 'Madrid y alrededores',
    type: 'Autónomo',
    description: 'Desarrollo de software freelance especializado en soluciones para la industria de aviación. Primeros pasos profesionales en desarrollo de software, trabajando en proyectos que requerían alta precisión y confiabilidad. Adquiriendo experiencia en desarrollo full-stack, gestión de proyectos y comunicación directa con clientes.'
  }
]

// Datos del CV - Educación
export const education = [
  {
    degree: 'Formación Continua',
    institution: 'Autodidacta y Comunidad Tech',
    period: '2019 - Presente',
    description: 'Desarrollo continuo de habilidades en desarrollo mobile, blockchain (Hedera), y tecnologías emergentes. Participación activa en comunidades de desarrollo.'
  }
]

// Datos del CV - Habilidades
export const skills = [
  // Lenguajes de programación
  { name: 'JavaScript', level: 95 },
  { name: 'TypeScript', level: 93 },
  { name: 'Java', level: 90 },
  { name: 'Kotlin', level: 92 },
  { name: 'Swift', level: 88 },
  { name: 'Python', level: 75 },
  
  // Desarrollo Mobile
  { name: 'Desarrollo Android', level: 92 },
  { name: 'Desarrollo iOS', level: 88 },
  
  // Backend & Frameworks
  { name: 'NestJS', level: 90 },
  { name: 'Node.js', level: 92 },
  { name: 'APIs REST', level: 93 },
  { name: 'Microservicios', level: 87 },
  
  // Frontend
  { name: 'React', level: 85 },
  
  // Blockchain
  { name: 'Blockchain (Hedera)', level: 88 },
  { name: 'Smart Contracts', level: 85 },
  
  // Cloud & Infraestructura
  { name: 'Cloud Computing', level: 80 },
  { name: 'Infraestructura', level: 78 },
  { name: 'CI/CD', level: 85 },
  { name: 'DevOps', level: 75 },
  
  // Herramientas & Bases de Datos
  { name: 'Git', level: 95 },
  { name: 'SQL', level: 88 },
  { name: 'Docker', level: 80 },
  
  // Arquitectura & Metodologías
  { name: 'Arquitectura de Software', level: 90 },
  { name: 'Desarrollo Full Stack', level: 90 },
  { name: 'Metodologías Ágiles', level: 88 }
]

// Datos del CV - Idiomas
export const languages = [
  { name: 'Español', level: 'Nativo' },
  { name: 'Inglés', level: 'Avanzado' }
]

