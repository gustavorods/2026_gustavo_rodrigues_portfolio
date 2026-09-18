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
      "Desenvolvedor especializado em construir APIs robustas, sistemas escaláveis e arquiteturas backend de alta performance com Java, Spring Boot e AWS.",
    ctaProjects: "Ver Projetos",
    ctaContact: "Contato",
  },
  about: {
    label: "Sobre mim",
    headingLine1: "Construindo o futuro,",
    headingLine2: "uma API por vez.",
    paragraph1:
      "Sou desenvolvedor back-end, cursando bacharelado em Análise e Desenvolvimento de Sistemas, com **inglês avançado** e experiência no desenvolvimento de aplicações web escaláveis com **Java**, **Spring Boot** e **Python**, além de atuação com **Angular** e **React**.",
    paragraph2:
      "Tenho experiência na construção de **APIs RESTful**, na integração de interfaces com carregamento dinâmico de dados, na implementação de **testes unitários e de integração** e na automação de pipelines **CI/CD com GitHub Actions**. Meu foco está em boas práticas, performance e manutenção de sistemas, criando soluções eficientes e escaláveis para resolver problemas reais em ambientes dinâmicos.",
  },
  skills: {
    label: "Habilidades",
    heading: "Tecnologias que domino.",
    categories: [
      { title: "Backend", skills: ["Java", "Spring Boot", "Quarkus", "REST API", "GraphQL", "Node.js", "PHP", "Laravel", "Python", "Kotlin", "C++"] },
      { title: "Frontend", skills: ["Angular", "React", "JavaScript", "TypeScript", "HTML", "CSS"] },
      { title: "Testes", skills: ["Jest", "JUnit", "Pytest"] },
      { title: "Banco de Dados", skills: ["PostgreSQL", "MySQL", "MariaDB", "Firebase", "Redis"] },
      { title: "DevOps & Cloud", skills: ["Docker", "Vercel", "Aiven", "AWS S3", "AWS SQS", "AWS EC2", "GitHub Actions"] },
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
          "Otimizei a apuração do ranking, eliminando agregações SQL custosas a cada acesso, com pontuação em tempo real via **Sorted Sets** do Redis.",
          "Impedi cadastros duplicados na campanha de indicação, garantindo idempotência ao reenviar o mesmo link, com constraint de e-mail único validada via **Drizzle ORM**.",
          "Automatizei a documentação das **6 rotas** da API, integrando schemas **Zod** ao Fastify para gerar a spec OpenAPI disponível em /docs.",
          "Instrumentei o funil de crescimento viral do evento, expondo métricas de cliques, indicações e posição por assinante, combinando Hash e Sorted Set do **Redis**.",
        ],
        githubUrl: "https://github.com/gustavorods/2025_creating_an_event_registration_api_with_referral_link_using_node_and_typescript",
      },
      {
        title: "ESTOK — Controle de Estoque com RFID em Tempo Real",
        description:
          "Aplicação de controle de produtos em prateleiras utilizando RFID, desenvolvida para ser escalável e de fácil manutenção. Realiza monitoramento em tempo quase real através de ESP32 e WebSocket, ajudando a reduzir um problema de 32 bilhões de reais em perdas no varejo.",
        stacks: [
          { name: "Node.js", detail: "Runtime do servidor, responsável pela lógica de negócio da API de controle de estoque." },
          { name: "Express", detail: "Framework HTTP usado para estruturar mais de 15 endpoints REST em arquitetura MVC." },
          { name: "MySQL", detail: "Banco de dados relacional para persistência dos produtos, prateleiras e movimentações de estoque." },
          { name: "WebSocket", detail: "Comunicação em tempo real entre os módulos ESP32/RFID e o dashboard da aplicação." },
          { name: "JWT", detail: "Autenticação dos usuários da aplicação, protegendo as rotas privadas do sistema." },
          { name: "bcrypt", detail: "Criptografia das senhas dos usuários antes de armazená-las no banco." },
          { name: "API Key", detail: "Autenticação via header x-api-key para a comunicação dos dispositivos ESP32 com a API." },
          { name: "Jest", detail: "Framework de testes automatizados para validar os principais fluxos da aplicação." },
          { name: "Supertest", detail: "Testes de integração das rotas HTTP da API." },
          { name: "Swagger", detail: "Documentação interativa dos endpoints REST da aplicação." },
        ],
        responsibilities: [
          "Desenvolvi mais de **15 endpoints REST** com Node.js e Express, melhorando a organização e integração do sistema RFID através de uma arquitetura em camadas.",
          "Reduzi em cerca de **80%** o tempo de atualização do dashboard, implementando comunicação em tempo real entre ESP32 e aplicação via **WebSocket**.",
          "Protegi **100%** das rotas privadas da aplicação, implementando autenticação com **JWT** e criptografia de senhas com **bcrypt**.",
          "Automatizei a validação dos principais fluxos do sistema, criando mais de **20 testes** com **Jest** e **Supertest**, aumentando a confiabilidade da API em novas implementações.",
        ],
        githubUrl: "https://github.com/gustavorods/2025_estok_backend",
      },
      {
        title: "CICD Lab API — Pipeline Completo de CI/CD com GitHub Actions",
        description:
          "API em Spring Boot construída para estudar e colocar em prática um pipeline de CI/CD ponta a ponta: testes automatizados, build do artefato, empacotamento em imagem Docker, publicação no GitHub Container Registry e deploy automático no Render a cada push na branch main.",
        stacks: [
          { name: "Java", detail: "Linguagem da aplicação, na versão 21 (LTS), rodando sobre a JVM do Eclipse Temurin em produção." },
          { name: "Spring Boot", detail: "Framework REST (Spring Boot 4 + spring-boot-starter-webmvc) responsável pela API e pelo endpoint /hello." },
          { name: "Maven", detail: "Gerenciador de build e dependências, executado via wrapper (mvnw) tanto localmente quanto nos jobs do GitHub Actions." },
          { name: "JUnit 5", detail: "Testes unitários (ex.: HelloControllerTest) e de integração (SpringBootTest + RestTestClient), executados na etapa test do pipeline." },
          { name: "Docker", detail: "Empacotamento da aplicação em imagem baseada em eclipse-temurin:21-jre, copiando o .jar já compilado e expondo a porta 8080." },
          { name: "GitHub Actions", detail: "Orquestração do pipeline em 3 jobs encadeados (test → build → docker), disparado automaticamente em push/pull request para main." },
          { name: "GHCR", detail: "GitHub Container Registry usado para publicar a imagem Docker (ghcr.io/<owner>/cicd-lab-api:latest) gerada pelo job docker." },
          { name: "Render", detail: "Plataforma de deploy configurada para consumir a imagem do GHCR, atualizada via Deploy Hook disparado ao final do pipeline." },
        ],
        responsibilities: [
          "Implementei um pipeline de CI/CD ponta a ponta com **GitHub Actions**, eliminando deploys manuais ao encadear 3 jobs (test → build → docker) disparados a cada push na branch main.",
          "Garanti que só código testado chegue à produção, bloqueando automaticamente o build e o deploy sempre que os testes unitários ou de integração falham, através da dependência needs entre os jobs.",
          "Automatizei a publicação de imagens Docker, empacotando a aplicação com **Docker** (eclipse-temurin:21-jre) e publicando no **GHCR** a cada execução bem-sucedida do pipeline.",
          "Configurei o deploy contínuo no **Render**, disparando automaticamente um Deploy Hook via curl ao final do pipeline para atualizar o container em produção com a imagem mais recente do GHCR.",
        ],
        githubUrl: "https://github.com/gustavorods/2026_cicd_lab_api",
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
        title: "Full Stack Developer Júnior",
        subtitle: "ACT Digital | Projeto BMW Group Americas",
        period: "Agosto 2026 — Atual",
        items: [
          "Apoio a documentação de sistemas legados por meio da análise de aplicações desenvolvidas em **Java** e **Spring**, contribuindo para a clareza e a preservação do conhecimento técnico.",
          "Apoio a construção e a manutenção de pipelines de **CI/CD** com **GitHub Actions**, contribuindo para a automação e a padronização dos processos de integração e entrega.",
        ],
      },
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
      { label: "Games", description: "Gosto de explorar mundos e boas histórias nos games. Atualmente, estou mergulhado em Cyberpunk 2077." },
      { label: "Música", description: "Lo-fi é minha trilha sonora para desacelerar e aproveitar os momentos de concentração." },
      { label: "Cozinhar", description: "Na cozinha, minha especialidade são os doces. Gosto de transformar receitas em bons momentos." },
      { label: "Animais", description: "Um cachorro e um gato fazem parte da minha rotina e me acompanham até na hora de programar." },
      { label: "Passear", description: "Gosto de conhecer novos restaurantes, experimentar sabores e descobrir lugares para voltar." },
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
