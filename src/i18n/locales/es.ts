import { Translations } from "../types";

const es: Translations = {
  meta: { htmlLang: "es" },
  nav: {
    about: "Sobre mí",
    skills: "Habilidades",
    projects: "Proyectos",
    education: "Formación",
    experience: "Experiencia",
    contact: "Contacto",
  },
  languagePicker: {
    title: "Elige tu idioma",
    description: "Selecciona el idioma de tu preferencia para navegar por el portafolio.",
  },
  hero: {
    roles: [
      "APIs RESTful",
      "AWS SQS | S3",
      "Docker",
      "MySQL & PostgreSQL",
      "Redis",
      "Sistemas Escalables",
      "SOLID",
    ],
    role: "Desarrollador Back-End",
    description:
      "Desarrollador especializado en construir APIs robustas, sistemas escalables y arquitecturas backend de alto rendimiento con Java y Spring Boot.",
    ctaProjects: "Ver Proyectos",
    ctaContact: "Contacto",
  },
  about: {
    label: "Sobre mí",
    headingLine1: "Construyendo el futuro,",
    headingLine2: "una API a la vez.",
    paragraph1:
      "Soy un desarrollador back-end apasionado por crear sistemas robustos y escalables. Mi enfoque principal está en **Java** y **Spring Boot**, pero cuento con experiencia en múltiples tecnologías tanto en el backend como en el frontend.",
    paragraph2:
      "Creo en la construcción de APIs RESTful bien documentadas, arquitecturas limpias y código que resiste el paso del tiempo. Busco constantemente mejorar mis habilidades en arquitectura de sistemas, buenas prácticas y nuevas tecnologías.",
  },
  skills: {
    label: "Habilidades",
    heading: "Tecnologías que domino.",
    categories: [
      { title: "Backend", skills: ["Java", "Spring Boot", "Node.js", "PHP", "Laravel", "Python", "Kotlin", "C++"] },
      { title: "Frontend", skills: ["Angular", "React", "JavaScript", "TypeScript", "HTML", "CSS"] },
      { title: "Pruebas", skills: ["Jest", "JUnit", "Pytest"] },
      { title: "Bases de Datos", skills: ["MySQL", "MariaDB", "Firebase", "Redis"] },
      { title: "DevOps & Cloud", skills: ["Docker", "Vercel", "Aiven", "AWS S3", "AWS SQS"] },
    ],
  },
  projects: {
    label: "Proyectos",
    heading: "Lo que he construido.",
    responsibilitiesLabel: "Responsabilidades",
    code: "Code",
    items: [
      {
        title: "Plataforma de Referidos y Ranking de Eventos",
        description:
          "API de gestión de eventos con sistema de referidos: cada usuario recibe un enlace de invitación único y sube en un ranking en tiempo real a medida que llegan inscripciones a través de él.",
        stacks: [
          { name: "Node.js", detail: "Runtime del servidor, responsable de toda la lógica de negocio de las rutas de inscripción, ranking y referidos." },
          { name: "TypeScript", detail: "Tipado estático de rutas, parámetros y queries de Drizzle, previniendo errores en tiempo de compilación." },
          { name: "Fastify", detail: "Framework HTTP usado para registrar las 6 rutas de la API, con un type provider que valida body/params vía Zod." },
          { name: "Zod", detail: "Validación y serialización de schemas en cada ruta (body, params y response), devolviendo 400 automáticamente ante payloads inválidos." },
          { name: "Redis", detail: "Sorted Set (referral:ranking) para la puntuación en tiempo real y un Hash (referral:access-count) para contar los clics en el enlace de invitación." },
          { name: "PostgreSQL", detail: "Almacena los datos de inscripción (nombre, e-mail, id) con una constraint de e-mail único para evitar duplicados." },
          { name: "Docker", detail: "Orquesta los contenedores de PostgreSQL y Redis vía Docker Compose, estandarizando el entorno local." },
          { name: "Drizzle ORM", detail: "Capa de acceso a PostgreSQL con schema tipado y migraciones versionadas generadas por Drizzle Kit." },
          { name: "Swagger", detail: "Documentación OpenAPI interactiva generada automáticamente a partir de los schemas Zod de las rutas, disponible en /docs." },
        ],
        responsibilities: [
          "Reduje consultas costosas al banco, implementando un ranking en tiempo real con **Sorted Sets** de Redis.",
          "Evité inscripciones duplicadas, validando el e-mail en PostgreSQL vía **Drizzle ORM** antes de cada inserción.",
          "Documenté el **100%** de los endpoints automáticamente, integrando schemas de **Zod** a Fastify para generar la spec OpenAPI.",
          "Estandaricé el entorno local, orquestando PostgreSQL y Redis con **Docker Compose** y migraciones de **Drizzle Kit**.",
        ],
        githubUrl: "https://github.com/gustavorods/2025_creating_an_event_registration_api_with_referral_link_using_node_and_typescript",
      },
    ],
  },
  timeline: {
    educationLabel: "Formación",
    educationHeading: "Donde aprendí.",
    experienceLabel: "Experiencia",
    experienceHeading: "Donde trabajé.",
    education: [
      {
        title: "FATEC Zona Leste, São Paulo",
        subtitle: "Licenciatura en Análisis y Desarrollo de Sistemas",
        period: "2025 — 2027",
        items: [
          "Desarrollé un proyecto orientado al sector odontológico, estructurando funcionalidades escalables para mejorar la organización y gestión clínica",
          "Apliqué principios SOLID y patrones de arquitectura de software en proyectos académicos para reducir el acoplamiento y aumentar la mantenibilidad",
          "Implementé conceptos de cloud computing e ingeniería de software utilizando AWS, Docker y la conteinerización de aplicaciones modernas",
        ],
      },
      {
        title: "ETEC Zona Leste, São Paulo",
        subtitle: "Curso técnico en Análisis y Desarrollo de Sistemas",
        period: "2023 — 2025",
        items: [
          "Desarrollé los proyectos ESTOK y OdontoKids en desafíos conectados con IBM, creando soluciones enfocadas en tecnología, usabilidad e impacto real",
          "Participé en mentorías técnicas con desarrolladores senior de empresas como IBM y Nubank, profundizando mis conocimientos en desarrollo de software",
          "Participé en eventos y competencias de programación promovidos por SEBRAE, fortaleciendo el trabajo en equipo y la resolución de problemas bajo presión",
        ],
      },
    ],
    experience: [
      {
        title: "Desarrollador Back-End Junior",
        subtitle: "Edy Planejados, São Paulo",
        period: "Junio 2026 — Presente",
        items: [
          "Desarrollo y mantengo aplicaciones utilizando **Python**, **React** y **SQL**, implementando nuevas funcionalidades y mejorando sistemas internos.",
          "Desarrollo e integro **APIs REST**, garantizando una comunicación eficiente entre sistemas corporativos.",
          "Participo en la definición de la arquitectura de soluciones escalables y del proceso de implementación e infraestructura en **AWS**.",
          "Creo y mantengo pruebas automatizadas con **Pytest**, contribuyendo a la calidad, confiabilidad y estabilidad de las aplicaciones.",
          "Investigo y corrijo errores, brindo soporte técnico a los usuarios internos y desarrollo soluciones para la optimización de procesos.",
          "Utilizo **Python** para la manipulación, el procesamiento y el análisis de datos según las necesidades del negocio.",
        ],
      },
      {
        title: "Pasante de Desarrollo Back-End",
        subtitle: "Synergie Consulting, São Paulo",
        period: "Enero 2026 — Junio 2026",
        items: [
          "Desarrollé **APIs RESTful** utilizando **Java**, **Spring Boot** y **MySQL**, estructurando la aplicación en capas (Controller, Service, Repository) para optimizar en un **30%** la organización y el mantenimiento del código.",
          "Implementé endpoints **REST** con **Node.js**, **Express** y **MySQL**, estableciendo la integración entre el front-end y la base de datos con soporte para más de **100 solicitudes simultáneas** en pruebas locales.",
          "Creé interfaces de front-end con **React** y **TypeScript**, integradas con **APIs REST** para la carga dinámica de datos, reduciendo en un **40%** la necesidad de actualizaciones manuales en la interfaz.",
          "Desarrollé funcionalidades en **Angular** integradas con **APIs REST**, enfocadas en la gestión de datos.",
        ],
      },
    ],
  },
  hobbies: {
    label: "Tiempo libre",
    heading: "Más allá del código.",
    items: [
      { label: "Juegos", description: "Actualmente estoy enganchado con Cyberpunk 2077" },
      { label: "Música", description: "Me encanta el LoFi" },
      { label: "Cocinar", description: "Se me da muy bien hacer postres" },
      { label: "Mascotas", description: "Comparto el teclado con 1 perro y 1 gato" },
      { label: "Salir", description: "Me encanta probar nuevos restaurantes" },
    ],
  },
  contact: {
    label: "Contacto",
    heading: "Hablemos.",
    description: "¿Tienes un proyecto en mente o quieres charlar? Me encantará escucharte.",
    email: "Email",
    downloadCv: "Descargar CV",
    downloadCvPt: "Portugués",
    downloadCvEn: "Inglés",
    footer: "Todos los derechos reservados.",
  },
};

export default es;
