// Traducciones ES/EN

export const translations = {
  es: {
    // General
    siteName: "Azure's Mess",
    name: "Elisabeth",
    title: "Desarrolladora e Innovadora",
    realName: "Elisabeth",
    cvTitle: "Mobile & Backend Full Stack Developer",
    
    // Header
    header: {
      menuItems: [
        { name: 'Inicio', path: '/' },
        { name: 'Proyectos', path: '/projects' },
        { name: 'CV', path: '/cv' },
        { name: 'Contacto', path: '/contact' },
      ],
      menuToggle: "Toggle menu"
    },

    // Hero / Homepage
    hero: {
      welcome: "Bienvenida a mi espacio",
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
      },
      cta: {
        title: "¿Tienes un proyecto en mente?",
        description: "Estoy siempre abierta a nuevas oportunidades y proyectos interesantes. Echa un vistazo a mi experiencia o contáctame directamente."
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

    // Contact
    contact: {
      title: "Contacto",
      subtitle: "¿Tienes un proyecto en mente o quieres colaborar? ¡Estoy abierta a nuevas oportunidades!",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      linkedinDescription: "Conectemos profesionalmente",
      githubDescription: "Revisa mi código",
      cta: {
        title: "¿Listo para trabajar juntos?",
        description: "Estoy siempre interesada en proyectos desafiantes y oportunidades de colaboración. No dudes en contactarme a través de cualquiera de los canales anteriores.",
        button: "Enviar Email"
      }
    },

    // Footer
    footer: {
      tagline: "Mi trocito de internet",
      madeWith: "Hecho con",
      in: "en"
    },

    // CV Data
    cvData: {
      experience: [
        {
          title: 'Desarrolladora Freelance',
          company: 'Independiente',
          period: 'Nov 2024 - Presente',
          location: 'España · Remoto',
          type: 'Profesional independiente',
          description: 'Desarrolladora freelance especializada en desarrollo mobile nativo (Android/iOS), backend escalable y soluciones blockchain. Trabajando en proyectos diversos para diferentes clientes, desde startups hasta empresas establecidas. Ofreciendo servicios de desarrollo full stack, arquitectura de software y consultoría técnica.'
        },
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
      ],
      education: [
        {
          degree: 'Formación Continua',
          institution: 'Autodidacta y Comunidad Tech',
          period: '2019 - Presente',
          description: 'Desarrollo continuo de habilidades en desarrollo mobile, blockchain (Hedera), y tecnologías emergentes. Participación activa en comunidades de desarrollo.'
        }
      ],
      skills: [
        { name: 'JavaScript', level: 95 },
        { name: 'TypeScript', level: 93 },
        { name: 'Java', level: 90 },
        { name: 'Kotlin', level: 92 },
        { name: 'Swift', level: 88 },
        { name: 'Python', level: 75 },
        { name: 'Desarrollo Android', level: 92 },
        { name: 'Desarrollo iOS', level: 88 },
        { name: 'NestJS', level: 90 },
        { name: 'Node.js', level: 92 },
        { name: 'APIs REST', level: 93 },
        { name: 'Microservicios', level: 87 },
        { name: 'React', level: 85 },
        { name: 'Blockchain (Hedera)', level: 88 },
        { name: 'Smart Contracts', level: 85 },
        { name: 'Cloud Computing', level: 80 },
        { name: 'Infraestructura', level: 78 },
        { name: 'CI/CD', level: 85 },
        { name: 'DevOps', level: 75 },
        { name: 'Git', level: 95 },
        { name: 'SQL', level: 88 },
        { name: 'Docker', level: 80 },
        { name: 'Arquitectura de Software', level: 90 },
        { name: 'Desarrollo Full Stack', level: 90 },
        { name: 'Metodologías Ágiles', level: 88 }
      ],
      languages: [
        { name: 'Español', level: 'Nativo' },
        { name: 'Inglés', level: 'Avanzado' }
      ]
    }
  },

  en: {
    // General
    siteName: "Azure's Mess",
    name: "Elisabeth",
    title: "Developer & Innovator",
    realName: "Elisabeth",
    cvTitle: "Mobile & Backend Full Stack Developer",
    
    // Header
    header: {
      menuItems: [
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: 'CV', path: '/cv' },
        { name: 'Contact', path: '/contact' },
      ],
      menuToggle: "Toggle menu"
    },

    // Hero / Homepage
    hero: {
      welcome: "Welcome to my space",
      title: "Development and other shenanigans",
      subtitle: "Mobile & Backend Full Stack Developer",
      description: "Developer passionate about emerging technology. Specialized in mobile development, backend and blockchain. Building the future, one project at a time.",
      about: {
        title: "About me",
        paragraph1: "I'm Azure, a full stack developer with experience in native mobile technologies (Android/iOS), scalable backend and blockchain solutions. I'm passionate about creating software that positively impacts and solving complex problems with elegant code.",
        paragraph2: "I currently work as a freelance developer, collaborating on blockchain projects and backend and cloud development for various companies. Previously I was Founder & CTO at Whatalab, where I led the development of innovative technological solutions.",
        paragraph3: "When I'm not programming, I enjoy exploring new technologies, programming beats or cooking something new."
      },
      highlights: {
        title: "What can I do for you?",
        items: [
          {
            icon: "cloud",
            title: "DevOps",
            description: "Scalable cloud architectures, infrastructure as code and DevOps solutions"
          },
          {
            icon: "backend",
            title: "Backend & APIs",
            description: "Scalable architectures, microservices and robust RESTful APIs"
          },
          {
            icon: "blockchain",
            title: "Blockchain",
            description: "Decentralized solutions in the Hedera ecosystem and smart contracts"
          }
        ]
      },
      buttons: {
        viewProjects: "View Projects",
        viewCV: "View my CV",
        downloadCV: "Download CV",
        contact: "Contact"
      },
      social: {
        github: "GitHub",
        linkedin: "LinkedIn",
        email: "Email"
      },
      cta: {
        title: "Have a project in mind?",
        description: "I'm always open to new opportunities and interesting projects. Check out my experience or contact me directly."
      }
    },

    // Projects
    projects: {
      title: "My Projects",
      subtitle: "A collection of projects that showcase my skills and passion for development",
      buttons: {
        addProject: "Add Project",
        cancel: "Cancel",
        submit: "Add Project"
      },
      form: {
        title: "Title",
        description: "Description",
        technologies: "Technologies (comma separated)",
        technologiesPlaceholder: "React, Tailwind CSS, Node.js",
        imageUrl: "Image URL",
        projectLink: "Project Link",
        github: "GitHub"
      },
      links: {
        viewProject: "View project",
        code: "Code"
      }
    },

    // CV
    cv: {
      title: "My CV",
      subtitle: "Learn more about my experience and skills",
      downloadButton: "Download CV",
      sections: {
        experience: "Experience",
        education: "Education",
        skills: "Skills",
        languages: "Languages",
        portfolio: "Portfolio"
      },
      downloadAlert: "CV download function - You can add your PDF file here"
    },

    // Contact
    contact: {
      title: "Contact",
      subtitle: "Have a project in mind or want to collaborate? I'm open to new opportunities!",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      linkedinDescription: "Let's connect professionally",
      githubDescription: "Check out my code",
      cta: {
        title: "Ready to work together?",
        description: "I'm always interested in challenging projects and collaboration opportunities. Don't hesitate to contact me through any of the channels above.",
        button: "Send Email"
      }
    },

    // Footer
    footer: {
      tagline: "My little corner of the internet",
      madeWith: "Made with",
      in: "in"
    },

    // CV Data
    cvData: {
      experience: [
        {
          title: 'Freelance Developer',
          company: 'Independent',
          period: 'Nov 2024 - Present',
          location: 'Spain · Remote',
          type: 'Self-employed',
          description: 'Freelance developer specialized in native mobile development (Android/iOS), scalable backend and blockchain solutions. Working on diverse projects for different clients, from startups to established companies. Offering full stack development services, software architecture and technical consulting.'
        },
        {
          title: 'Founder & Ex-CTO',
          company: 'Whatalab',
          period: 'Mar 2024 - Nov 2024',
          location: 'Spain',
          type: 'Self-employed',
          description: 'Founder and ex-CTO of Whatalab, leading the development of innovative technological solutions. Specialized in native mobile development (Android/iOS) and emerging technologies. I led projects related to humanoid robotics and decentralized blockchain architectures. Responsible for technical strategy, system architecture and development team leadership.'
        },
        {
          title: 'Project Director & Backend',
          company: '4Pets',
          period: 'Nov 2024 - Present',
          location: 'Spain · Remote',
          type: 'Self-employed',
          description: 'Project director and backend architecture specialized in blockchain technology of the Hedera ecosystem. Designing and implementing decentralized solutions that transform interaction with technology. Managing technical teams, defining scalable architectures and ensuring code quality in critical blockchain projects.'
        },
        {
          title: 'Software Engineer',
          company: 'FENIXMOCA',
          period: 'Nov 2024 - Present',
          location: 'Spain · Remote',
          type: 'Self-employed',
          description: 'Software development and technological solutions in remote mode. Specialized in scalable backend architectures, RESTful APIs and microservices. Implementing best development practices, automated testing and CI/CD to ensure quality and continuous software delivery.'
        },
        {
          title: 'Software Engineer',
          company: 'Renta 4',
          period: 'Mar 2024 - Nov 2024',
          location: 'Madrid, Spain · Hybrid',
          type: 'Full-time',
          description: 'Native Android mobile application development for the financial sector. Working in hybrid mode developing innovative fintech solutions that improve user experience. Implementing MVVM architectures, REST API integration, and performance optimization for critical production applications.'
        },
        {
          title: 'Software Engineer Applied to Blockchain Solutions',
          company: 'EY',
          period: 'Sept 2022 - Mar 2024',
          location: 'Madrid, Spain',
          type: 'Full-time',
          description: 'Enterprise blockchain solutions development using NestJS, TypeScript and modern frameworks. Designing decentralized architectures, smart contracts and consensus systems. Working on innovative projects within the blockchain ecosystem, collaborating with multidisciplinary teams to deliver scalable and secure solutions.'
        },
        {
          title: 'Mobile Application Developer',
          company: 'Bitnovo',
          period: 'Nov 2021 - Sept 2022',
          location: 'Madrid, Spain',
          type: 'Full-time',
          description: 'Development of Bitnovo\'s main mobile application, a leading cryptocurrency platform. Implementation of critical trading features, wallet management and security. Working with Git, SQL, native mobile architectures and REST APIs to create robust and secure fintech solutions.'
        },
        {
          title: 'iOS Developer',
          company: 'CGI Umanis',
          period: 'Apr 2021 - Nov 2021',
          location: 'Spain',
          type: 'Full-time',
          description: 'Native iOS application development using Swift, UIKit and modern mobile technologies. Implementing responsive user interfaces, backend API integration, local data management with Core Data and performance optimization. Collaborating on enterprise projects following agile methodologies.'
        },
        {
          title: 'Freelance Software Developer',
          company: 'AVIAZE by Starman Aviation',
          period: 'Oct 2019 - Apr 2021',
          location: 'Madrid and surroundings',
          type: 'Self-employed',
          description: 'Freelance software development specialized in solutions for the aviation industry. First professional steps in software development, working on projects that required high precision and reliability. Gaining experience in full-stack development, project management and direct client communication.'
        }
      ],
      education: [
        {
          degree: 'Continuing Education',
          institution: 'Self-taught and Tech Community',
          period: '2019 - Present',
          description: 'Continuous development of skills in mobile development, blockchain (Hedera), and emerging technologies. Active participation in development communities.'
        }
      ],
      skills: [
        { name: 'JavaScript', level: 95 },
        { name: 'TypeScript', level: 93 },
        { name: 'Java', level: 90 },
        { name: 'Kotlin', level: 92 },
        { name: 'Swift', level: 88 },
        { name: 'Python', level: 75 },
        { name: 'Android Development', level: 92 },
        { name: 'iOS Development', level: 88 },
        { name: 'NestJS', level: 90 },
        { name: 'Node.js', level: 92 },
        { name: 'REST APIs', level: 93 },
        { name: 'Microservices', level: 87 },
        { name: 'React', level: 85 },
        { name: 'Blockchain (Hedera)', level: 88 },
        { name: 'Smart Contracts', level: 85 },
        { name: 'Cloud Computing', level: 80 },
        { name: 'Infrastructure', level: 78 },
        { name: 'CI/CD', level: 85 },
        { name: 'DevOps', level: 75 },
        { name: 'Git', level: 95 },
        { name: 'SQL', level: 88 },
        { name: 'Docker', level: 80 },
        { name: 'Software Architecture', level: 90 },
        { name: 'Full Stack Development', level: 90 },
        { name: 'Agile Methodologies', level: 88 }
      ],
      languages: [
        { name: 'Spanish', level: 'Native' },
        { name: 'English', level: 'Advanced' }
      ]
    }
  }
}

