import { Translations } from "../types";

const pt: Translations = {
  meta: { htmlLang: "pt-BR" },
  nav: {
    about: "Sobre",
    skills: "Habilidades",
    projects: "Projetos",
    education: "Formação",
    experience: "Experiência",
    contact: "Contato",
  },
  languagePicker: {
    title: "Escolha seu idioma",
    description: "Selecione o idioma de preferência para navegar pelo portfólio.",
  },
  hero: {
    roles: [
      "APIs RESTful",
      "AWS SQS | S3",
      "Docker",
      "MySQL & PostgreSQL",
      "Redis",
      "Sistemas Escaláveis",
      "SOLID",
    ],
    role: "Desenvolvedor Back-End",
    description:
      "Desenvolvedor especializado em construir APIs robustas, sistemas escaláveis e arquiteturas backend de alta performance com Java e Spring Boot.",
    ctaProjects: "Ver Projetos",
    ctaContact: "Contato",
  },
  about: {
    label: "Sobre mim",
    headingLine1: "Construindo o futuro,",
    headingLine2: "uma API por vez.",
    paragraph1:
      "Sou um desenvolvedor back-end apaixonado por criar sistemas robustos e escaláveis. Meu foco principal está em **Java** e **Spring Boot**, mas possuo experiência com múltiplas tecnologias tanto no backend quanto no frontend.",
    paragraph2:
      "Acredito na construção de APIs RESTful bem documentadas, arquiteturas limpas e código que resiste ao tempo. Busco constantemente aprimorar minhas habilidades em arquitetura de sistemas, boas práticas e novas tecnologias.",
  },
  skills: {
    label: "Habilidades",
    heading: "Tecnologias que domino.",
    categories: [
      { title: "Backend", skills: ["Java", "Spring Boot", "Node.js", "PHP", "Laravel", "Python", "Kotlin", "C++"] },
      { title: "Frontend", skills: ["Angular", "React", "JavaScript", "TypeScript", "HTML", "CSS"] },
      { title: "Testes", skills: ["Jest", "JUnit", "Pytest"] },
      { title: "Banco de Dados", skills: ["MySQL", "MariaDB", "Firebase", "Redis"] },
      { title: "DevOps & Cloud", skills: ["Docker", "Vercel", "Aiven", "AWS S3", "AWS SQS"] },
    ],
  },
  projects: {
    label: "Projetos",
    heading: "O que construí.",
    responsibilitiesLabel: "Responsabilidades",
    code: "Code",
    items: [
      {
        title: "Plataforma de Indicação e Ranking de Eventos",
        description:
          "API para gerenciamento de eventos com sistema de indicação de participantes: cada usuário recebe um link exclusivo e acumula pontos em um ranking em tempo real conforme os cadastros feitos através dele.",
        stacks: [
          { name: "Node.js", detail: "Runtime do servidor, responsável por toda a lógica de negócio das rotas de inscrição, ranking e indicações." },
          { name: "TypeScript", detail: "Tipagem estática das rotas, parâmetros e queries do Drizzle, prevenindo erros em tempo de compilação." },
          { name: "Fastify", detail: "Framework HTTP usado para registrar as 6 rotas da API, com type provider para validar body/params via Zod." },
          { name: "Zod", detail: "Validação e serialização de schemas nas rotas (body, params e response), retornando 400 automaticamente em payloads inválidos." },
          { name: "Redis", detail: "Sorted Set (referral:ranking) para pontuação em tempo real e Hash (referral:access-count) para contar cliques no link de convite." },
          { name: "PostgreSQL", detail: "Armazenamento dos dados de inscrição (nome, e-mail, id) com constraint de e-mail único para evitar duplicidade." },
          { name: "Docker", detail: "Orquestração dos containers do PostgreSQL e Redis via Docker Compose, padronizando o ambiente local." },
          { name: "Drizzle ORM", detail: "Camada de acesso ao PostgreSQL com schema tipado e migrations versionadas geradas pelo Drizzle Kit." },
          { name: "Swagger", detail: "Documentação interativa (OpenAPI) gerada automaticamente a partir dos schemas Zod das rotas, disponível em /docs." },
        ],
        responsibilities: [
          "Reduzi consultas custosas ao banco, implementando ranking em tempo real com **Sorted Sets** do Redis.",
          "Evitei inscrições duplicadas, validando o e-mail no PostgreSQL via **Drizzle ORM** antes de cada inserção.",
          "Documentei **100%** dos endpoints automaticamente, integrando schemas **Zod** ao Fastify para gerar a spec OpenAPI.",
          "Padronizei o ambiente local, orquestrando PostgreSQL e Redis com **Docker Compose** e migrations do **Drizzle Kit**.",
        ],
        githubUrl: "https://github.com/gustavorods/2025_creating_an_event_registration_api_with_referral_link_using_node_and_typescript",
      },
    ],
  },
  timeline: {
    educationLabel: "Formação",
    educationHeading: "Onde aprendi.",
    experienceLabel: "Experiência",
    experienceHeading: "Onde trabalhei.",
    education: [
      {
        title: "FATEC Zona Leste, São Paulo",
        subtitle: "Bacharelado em Análise e Desenvolvimento de Sistemas",
        period: "2025 — 2027",
        items: [
          "Desenvolvi um projeto voltado para o setor odontológico, estruturando funcionalidades escaláveis para melhorar organização e gestão clínica",
          "Apliquei princípios SOLID e padrões de arquitetura de software em projetos acadêmicos para reduzir acoplamento e aumentar manutenibilidade",
          "Implementei conceitos de cloud computing e engenharia de software utilizando AWS, Docker e conteinerização de aplicações modernas",
        ],
      },
      {
        title: "ETEC Zona Leste, São Paulo",
        subtitle: "Curso técnico em Análise e Desenvolvimento de Sistemas",
        period: "2023 — 2025",
        items: [
          "Desenvolvi os projetos ESTOK e OdontoKids em desafios conectados à IBM, criando soluções com foco em tecnologia, usabilidade e impacto real",
          "Participei de mentorias técnicas com desenvolvedores seniores de empresas como IBM e Nubank, aprofundando conhecimentos em desenvolvimento de software",
          "Atuei em eventos e competições de programação promovidos pelo SEBRAE, fortalecendo trabalho em equipe e resolução de problemas sob pressão",
        ],
      },
    ],
    experience: [
      {
        title: "Desenvolvedor Back-End Júnior",
        subtitle: "Edy Planejados, São Paulo",
        period: "Junho 2026 — Presente",
        items: [
          "Desenvolvo e mantenho aplicações utilizando **Python**, **React** e **SQL**, implementando novas funcionalidades e aprimorando sistemas internos.",
          "Desenvolvo e integro **APIs REST**, garantindo comunicação eficiente entre sistemas corporativos.",
          "Participo da definição da arquitetura de soluções escaláveis e do processo de implantação e infraestrutura em **AWS**.",
          "Crio e mantenho testes automatizados com **Pytest**, contribuindo para a qualidade, confiabilidade e estabilidade das aplicações.",
          "Investigo e corrijo bugs, ofereço suporte técnico aos usuários internos e desenvolvo soluções para otimização de processos.",
          "Utilizo **Python** para manipulação, tratamento e análise de dados conforme as necessidades do negócio.",
        ],
      },
      {
        title: "Estagiário de Desenvolvimento Back-End",
        subtitle: "Synergie Consulting, São Paulo",
        period: "Janeiro 2026 — Junho 2026",
        items: [
          "Desenvolvi **APIs RESTful** utilizando **Java**, **Spring Boot** e **MySQL**, estruturando a aplicação em camadas (Controller, Service, Repository) para otimizar em **30%** a organização e a manutenção do código.",
          "Implementei endpoints **REST** com **Node.js**, **Express** e **MySQL**, estabelecendo a integração entre front-end e banco de dados com suporte a mais de **100 requisições simultâneas** em testes locais.",
          "Criei interfaces front-end com **React** e **TypeScript**, integradas a **APIs REST** para carregamento dinâmico de dados, reduzindo em **40%** a necessidade de atualizações manuais na interface.",
          "Desenvolvi funcionalidades em **Angular** integradas a **APIs REST**, focadas no gerenciamento de dados.",
        ],
      },
    ],
  },
  hobbies: {
    label: "Tempo livre",
    heading: "Além do código.",
    items: [
      { label: "Games", description: "Atualmente estou viciado em Cyberpunk 2077" },
      { label: "Música", description: "Curto muito LoFi" },
      { label: "Cozinhar", description: "Sou muito bom em fazer doces" },
      { label: "Animais", description: "Divido o teclado com 1 cachorro e 1 gato" },
      { label: "Passear", description: "Adoro ir provar novos restaurantes" },
    ],
  },
  contact: {
    label: "Contato",
    heading: "Vamos conversar.",
    description: "Tem um projeto em mente ou quer trocar uma ideia? Ficarei feliz em ouvir.",
    email: "Email",
    downloadCv: "Baixar CV",
    downloadCvPt: "Português",
    downloadCvEn: "Inglês",
    footer: "Todos os direitos reservados.",
  },
};

export default pt;
