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
      "Desarrollador especializado en construir APIs robustas, sistemas escalables y arquitecturas backend de alto rendimiento con Java, Spring Boot y AWS.",
    ctaProjects: "Ver Proyectos",
    ctaContact: "Contacto",
  },
  about: {
    label: "Sobre mí",
    headingLine1: "Construyendo el futuro,",
    headingLine2: "una API a la vez.",
    paragraph1:
      "Soy desarrollador back-end, cursando una licenciatura en Análisis y Desarrollo de Sistemas, con **inglés avanzado** y experiencia en el desarrollo de aplicaciones web escalables con **Java**, **Spring Boot** y **Python**, además de trabajar con **Angular** y **React**.",
    paragraph2:
      "Tengo experiencia en la construcción de **APIs RESTful**, la integración de interfaces con carga dinámica de datos, la implementación de **pruebas unitarias y de integración** y la automatización de pipelines **CI/CD con GitHub Actions**. Me enfoco en buenas prácticas, rendimiento y mantenimiento para crear soluciones eficientes y escalables que resuelvan problemas reales en entornos dinámicos.",
  },
  skills: {
    label: "Habilidades",
    heading: "Tecnologías que domino.",
    categories: [
      { title: "Backend", skills: ["Java", "Spring Boot", "Quarkus", "REST API", "GraphQL", "Node.js", "PHP", "Laravel", "Python", "Kotlin", "C++"] },
      { title: "Frontend", skills: ["Angular", "React", "JavaScript", "TypeScript", "HTML", "CSS"] },
      { title: "Pruebas", skills: ["Jest", "JUnit", "Pytest"] },
      { title: "Bases de Datos", skills: ["PostgreSQL", "MySQL", "MariaDB", "Firebase", "Redis"] },
      { title: "DevOps & Cloud", skills: ["Docker", "Vercel", "Aiven", "AWS S3", "AWS SQS", "AWS EC2", "GitHub Actions"] },
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
          "Optimicé el cálculo del ranking, eliminando agregaciones SQL costosas en cada acceso, con puntuación en tiempo real vía **Sorted Sets** de Redis.",
          "Evité inscripciones duplicadas en la campaña de referidos, garantizando idempotencia al reutilizar el mismo enlace, con una constraint de e-mail único validada vía **Drizzle ORM**.",
          "Automaticé la documentación de las **6 rutas** de la API, integrando schemas de **Zod** a Fastify para generar la spec OpenAPI disponible en /docs.",
          "Instrumenté el embudo de crecimiento viral del evento, exponiendo métricas de clics, referidos y posición por suscriptor, combinando Hash y Sorted Set de **Redis**.",
        ],
        githubUrl: "https://github.com/gustavorods/2025_creating_an_event_registration_api_with_referral_link_using_node_and_typescript",
      },
      {
        title: "ESTOK — Control de Inventario con RFID en Tiempo Real",
        description:
          "Aplicación de control de productos en estanterías mediante RFID, desarrollada para ser escalable y de fácil mantenimiento. Realiza monitoreo casi en tiempo real a través de ESP32 y WebSocket, ayudando a mitigar un problema de 32 mil millones de dólares en pérdidas del retail.",
        stacks: [
          { name: "Node.js", detail: "Runtime del servidor, responsable de la lógica de negocio de la API de control de inventario." },
          { name: "Express", detail: "Framework HTTP usado para estructurar más de 15 endpoints REST en arquitectura MVC." },
          { name: "MySQL", detail: "Base de datos relacional para persistir productos, estanterías y movimientos de inventario." },
          { name: "WebSocket", detail: "Comunicación en tiempo real entre los módulos ESP32/RFID y el dashboard." },
          { name: "JWT", detail: "Autenticación de usuarios, protegiendo las rutas privadas del sistema." },
          { name: "bcrypt", detail: "Cifrado de contraseñas antes de almacenarlas en la base de datos." },
          { name: "API Key", detail: "Autenticación vía header x-api-key para la comunicación de los dispositivos ESP32 con la API." },
          { name: "Jest", detail: "Framework de pruebas automatizadas para validar los flujos principales de la aplicación." },
          { name: "Supertest", detail: "Pruebas de integración de las rutas HTTP de la API." },
          { name: "Swagger", detail: "Documentación interactiva de los endpoints REST de la aplicación." },
        ],
        responsibilities: [
          "Desarrollé más de **15 endpoints REST** con Node.js y Express, mejorando la organización e integración del sistema RFID mediante una arquitectura en capas.",
          "Reduje en cerca de **80%** el tiempo de actualización del dashboard, implementando comunicación en tiempo real entre ESP32 y la aplicación vía **WebSocket**.",
          "Protegí el **100%** de las rutas privadas de la aplicación, implementando autenticación con **JWT** y cifrado de contraseñas con **bcrypt**.",
          "Automaticé la validación de los flujos principales del sistema, creando más de **20 pruebas** con **Jest** y **Supertest**, aumentando la confiabilidad de la API en nuevas implementaciones.",
        ],
        githubUrl: "https://github.com/gustavorods/2025_estok_backend",
      },
      {
        title: "CICD Lab API — Pipeline Completo de CI/CD con GitHub Actions",
        description:
          "API en Spring Boot construida para estudiar y poner en práctica un pipeline de CI/CD de extremo a extremo: pruebas automatizadas, build del artefacto, empaquetado en imagen Docker, publicación en el GitHub Container Registry y despliegue automático en Render en cada push a la rama main.",
        stacks: [
          { name: "Java", detail: "Lenguaje de la aplicación, en la versión 21 (LTS), ejecutándose sobre la JVM de Eclipse Temurin en producción." },
          { name: "Spring Boot", detail: "Framework REST (Spring Boot 4 + spring-boot-starter-webmvc) responsable de la API y del endpoint /hello." },
          { name: "Maven", detail: "Gestor de build y dependencias, ejecutado vía wrapper (mvnw) tanto localmente como en los jobs de GitHub Actions." },
          { name: "JUnit 5", detail: "Pruebas unitarias (ej.: HelloControllerTest) y de integración (SpringBootTest + RestTestClient), ejecutadas en la etapa test del pipeline." },
          { name: "Docker", detail: "Empaquetado de la aplicación en una imagen basada en eclipse-temurin:21-jre, copiando el .jar ya compilado y exponiendo el puerto 8080." },
          { name: "GitHub Actions", detail: "Orquestación del pipeline en 3 jobs encadenados (test → build → docker), disparado automáticamente en push/pull request a main." },
          { name: "GHCR", detail: "GitHub Container Registry usado para publicar la imagen Docker (ghcr.io/<owner>/cicd-lab-api:latest) generada por el job docker." },
          { name: "Render", detail: "Plataforma de despliegue configurada para consumir la imagen del GHCR, actualizada vía Deploy Hook disparado al final del pipeline." },
        ],
        responsibilities: [
          "Implementé un pipeline de CI/CD de extremo a extremo con **GitHub Actions**, eliminando despliegues manuales al encadenar 3 jobs (test → build → docker) disparados en cada push a main.",
          "Garanticé que solo código probado llegue a producción, bloqueando automáticamente el build y el deploy cuando fallan las pruebas unitarias o de integración, mediante la dependencia needs entre jobs.",
          "Automaticé la publicación de imágenes Docker, empaquetando la aplicación con **Docker** (eclipse-temurin:21-jre) y publicándola en **GHCR** en cada ejecución exitosa del pipeline.",
          "Configuré el despliegue continuo en **Render**, disparando automáticamente un Deploy Hook vía curl al final del pipeline para actualizar el contenedor en producción con la imagen más reciente de GHCR.",
        ],
        githubUrl: "https://github.com/gustavorods/2026_cicd_lab_api",
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
        title: "Full Stack Developer Júnior",
        subtitle: "ACT Digital | Proyecto BMW Group Americas",
        period: "Agosto 2026 — Actualidad",
        items: [
          "Apoyo la documentación de sistemas legados mediante el análisis de aplicaciones desarrolladas en **Java** y **Spring**, contribuyendo a la claridad y la preservación del conocimiento técnico.",
          "Apoyo la construcción y el mantenimiento de pipelines de **CI/CD** con **GitHub Actions**, contribuyendo a la automatización y la estandarización de los procesos de integración y entrega.",
        ],
      },
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
      { label: "Juegos", description: "Disfruto explorar mundos y buenas historias en los videojuegos. Actualmente, estoy inmerso en Cyberpunk 2077." },
      { label: "Música", description: "El lo-fi es mi banda sonora para bajar el ritmo y disfrutar de los momentos de concentración." },
      { label: "Cocinar", description: "Los postres son mi especialidad en la cocina. Me gusta convertir recetas en buenos momentos." },
      { label: "Mascotas", description: "Un perro y un gato forman parte de mi rutina y me acompañan incluso mientras programo." },
      { label: "Salir", description: "Me gusta conocer nuevos restaurantes, probar sabores y descubrir lugares a los que volver." },
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
