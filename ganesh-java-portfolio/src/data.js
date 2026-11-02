// EDIT CONTENT HERE FIRST. All site copy and important URLs are kept in one place.
// Source: the resume provided by Madatha Ganesh (Nov 2026), with secondary
// details from the previously provided LinkedIn profile screenshots.
// Before publishing, confirm production figures and client disclosure permission.

export const profile = {
  name: 'Madatha Ganesh',
  shortName: 'Ganesh',
  role: 'Java Backend Engineer',
  targetRole: 'Java Backend Developer',
  location: 'Hyderabad, India',
  email: 'ganeshmadatha159@gmail.com',
  github: 'https://github.com/MadathaGanesh',
  linkedin: 'https://www.linkedin.com/in/madathaganesh-java-backend-developer/',
  siteUrl: 'https://madathaganeshpersonalportfolio.netlify.app',
  resumeUrl: '/resume.pdf',
  experience: '2+ years',
  joiningNotice: '30 days',
  showPublicAvailability: false, // Set true ONLY if happy to reveal job seeking publicly
  intro: 'I build and maintain dependable backend systems—from secure REST APIs to modernized Java microservices and cloud-native delivery.',
  about: 'Java Backend Engineer with 2+ years of professional experience at Genpact, working on enterprise backend services in the automotive retail domain. My work spans production REST API development, Java modernization, authentication and authorization, CI/CD, and cloud-native deployments. I enjoy designing maintainable services and making complex backend systems easier to operate.',
};

export const achievements = [
  { value: '12+', label: 'REST endpoints', note: 'Vehicle-intake backend' },
  { value: '1.5k–2k', label: 'records daily', note: 'Production vehicle intake' },
  { value: '8', label: 'microservices', note: 'Java modernization and CI/CD' },
];

export const experience = {
  title: 'Java Backend Engineer',
  company: 'Genpact',
  account: 'CDK Global account',
  domain: 'Automotive retail',
  dates: 'Oct 2024 — Present',
  location: 'Hyderabad, India',
  summary: 'Developing and maintaining production backend systems, contributing across feature development, service upgrades, deployment, security and code quality.',
  highlights: [
    {
      id: 'vehicle-intake',
      eyebrow: 'BACKEND DEVELOPMENT',
      title: 'Production vehicle-intake backend',
      text: 'Sole-engineered a vehicle-intake REST backend with 12+ endpoints across Development, Staging and Production on AWS EC2, using S3-based artifact storage. The system handles 1,500–2,000 vehicle records daily through a frontend scanner integration.',
      tags: ['REST APIs', 'AWS EC2', 'AWS S3', 'Java'],
    },
    {
      id: 'java-migration',
      eyebrow: 'MODERNIZATION',
      title: 'Java 8 → 17 across 8 services',
      text: 'Led a zero-downtime Java migration across eight production microservices, including Spring Boot, Spring Security and Spring Data JPA upgrades. Used GitHub Copilot for deprecated API discovery and test assistance, and containerized services for Kubernetes.',
      tags: ['Java 17', 'Spring Boot', 'Kubernetes'],
    },
    {
      id: 'ci-cd',
      eyebrow: 'DELIVERY & QUALITY',
      title: 'CI/CD for eight microservices',
      text: 'Owned Harness CI/CD workflows for eight services with SonarQube quality gates and JUnit 5 test-coverage thresholds as part of sprint delivery.',
      tags: ['Harness', 'SonarQube', 'JUnit 5'],
    },
    {
      id: 'security',
      eyebrow: 'API SECURITY',
      title: 'Authentication & authorization',
      text: 'Implemented stateless JWT authentication, OAuth2 authorization and role-based access control for microservice endpoints; participated in peer reviews within an 8–10 member backend team.',
      tags: ['JWT', 'OAuth2', 'RBAC'],
    },
  ],
};

export const projects = [
  {
    slug: 'real-time-event-processing',
    number: '01',
    title: 'Real-Time Event Processing System',
    subtitle: 'From a live event stream to asynchronous persistence.',
    category: 'Event-driven',
    type: 'Personal project',
    featured: true,
    description: 'A Java 21 application that ingests live Wikimedia Server-Sent Events, publishes them through Apache Kafka (KRaft), and persists asynchronously consumed events into MySQL using Spring Data JPA.',
    stack: ['Java 21', 'Apache Kafka', 'KRaft', 'Wikimedia SSE', 'Spring Data JPA', 'MySQL'],
    repoUrl: 'https://github.com/MadathaGanesh/Real-Time-Order-Event-Processing-System',
    repoVerified: false, // URL comes from resume, but live accessibility could not be confirmed here.
    accent: 'lime',
    highlights: [
      'Streams live events from Wikimedia via Server-Sent Events (SSE).',
      'Uses a Kafka producer-consumer pipeline for asynchronous event processing.',
      'Persists consumed events to MySQL via Spring Data JPA.',
    ],
    flow: [
      { title: 'Wikimedia', detail: 'Live SSE feed' },
      { title: 'Producer', detail: 'Java ingestion' },
      { title: 'Kafka', detail: 'KRaft messaging' },
      { title: 'Consumer', detail: 'Async processing' },
      { title: 'MySQL', detail: 'JPA persistence' },
    ],
    narrative: [
      { title: 'The problem', body: 'Continuously arriving events need to be decoupled from downstream storage so event ingestion and persistence can be handled as distinct operations.' },
      { title: 'The approach', body: 'A Java producer reads the live Wikimedia SSE stream and writes events to Apache Kafka. A consumer processes the messages asynchronously and persists them with Spring Data JPA into MySQL.' },
      { title: 'What this demonstrates', body: 'Event-driven architecture, producer-consumer communication, asynchronous processing and relational persistence.' },
    ],
  },
  {
    slug: 'expensecore',
    number: '02',
    title: 'ExpenseCore',
    subtitle: 'Security built into the backend, not bolted on.',
    category: 'Security',
    type: 'Personal project',
    featured: true,
    description: 'A Spring Boot 3 expense-management backend with stateless JWT authentication, Redis-backed token blacklisting, database-driven role-based access control and correlation-ID tracing.',
    stack: ['Java 17', 'Spring Boot 3', 'Spring Security', 'JWT', 'Redis', 'MySQL', 'RBAC'],
    repoUrl: '', // IMPORTANT: insert the EXACT ExpenseCore repository URL when confirmed.
    repoVerified: false,
    accent: 'cyan',
    highlights: [
      'Implements stateless JWT authentication with Spring Security.',
      'Uses SHA-256 hashing and TTL-based expiration for Redis token denylisting.',
      'Enforces database-driven RBAC and traces requests using SLF4J / MDC correlation IDs.',
    ],
    flow: [
      { title: 'Client', detail: 'API request' },
      { title: 'Spring Security', detail: 'JWT validation' },
      { title: 'RBAC', detail: 'Database permissions' },
      { title: 'Service', detail: 'Expense operations' },
      { title: 'MySQL', detail: 'Application data' },
    ],
    narrative: [
      { title: 'The problem', body: 'Expense-management APIs need authentication, configurable access control and a reliable way to invalidate tokens without relying on server-side sessions.' },
      { title: 'The approach', body: 'Spring Security secures stateless API requests with JWTs. Redis stores hashes of invalidated tokens with expiry, and permissions are controlled through database-backed RBAC. SLF4J/MDC correlation IDs improve traceability.' },
      { title: 'What this demonstrates', body: 'API security, token revocation, access-control design and operational request tracing.' },
    ],
  },
  {
    slug: 'bookvault',
    number: '03',
    title: 'BookVault',
    subtitle: 'A well-structured REST inventory API.',
    category: 'REST APIs',
    type: 'Earlier personal project · LinkedIn',
    featured: false,
    description: 'An inventory-management backend using Java, Spring Boot, DTOs, layered architecture, persistence and automated tests.',
    stack: ['Java', 'Spring Boot', 'MySQL', 'JPA', 'JUnit', 'Mockito'],
    repoUrl: '',
    accent: 'purple',
    highlights: [
      'Organized APIs using layered architecture and DTOs.',
      'Implemented persistence and exception handling.',
      'Used JUnit and Mockito for backend testing.',
    ],
    flow: [
      { title: 'API client', detail: 'HTTP request' },
      { title: 'Controller', detail: 'REST endpoints' },
      { title: 'Service', detail: 'Business logic' },
      { title: 'Repository', detail: 'JPA / Hibernate' },
      { title: 'MySQL', detail: 'Inventory data' },
    ],
    narrative: [
      { title: 'The problem', body: 'Inventory data needs consistent CRUD operations, validation, predictable errors and maintainable application boundaries.' },
      { title: 'The approach', body: 'Implemented REST endpoints with a layered Spring Boot application structure, DTOs, persistence and backend unit tests.' },
      { title: 'What this demonstrates', body: 'REST API fundamentals, data access and maintainable application structure.' },
    ],
  },
  {
    slug: 'auto-dealer-management',
    number: '04',
    title: 'Auto Dealer Management System',
    subtitle: 'Backend foundations for dealer and vehicle operations.',
    category: 'REST APIs',
    type: 'Earlier personal project · LinkedIn',
    featured: false,
    description: 'A dealership-management backend built with Java, Spring Boot, Spring Security, JWT, PostgreSQL and Swagger/OpenAPI.',
    stack: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'PostgreSQL', 'Swagger'],
    repoUrl: '',
    accent: 'orange',
    highlights: [
      'Implemented authenticated, secured backend APIs.',
      'Used PostgreSQL persistence for dealer and vehicle operations.',
      'Documented endpoints with Swagger/OpenAPI.',
    ],
    flow: [
      { title: 'API client', detail: 'Requests' },
      { title: 'Security', detail: 'JWT checks' },
      { title: 'Spring Boot', detail: 'REST services' },
      { title: 'JPA', detail: 'Data access' },
      { title: 'PostgreSQL', detail: 'Dealer data' },
    ],
    narrative: [
      { title: 'The problem', body: 'Dealer and vehicle records require organized data access and secured API operations.' },
      { title: 'The approach', body: 'Developed a Spring Boot REST backend using JWT security, PostgreSQL persistence and documented API endpoints.' },
      { title: 'What this demonstrates', body: 'Backend API security, persistence and API documentation.' },
    ],
  },
];

export const skills = [
  { name: 'Languages & fundamentals', icon: 'code', items: ['Java 8–21', 'SQL', 'OOP', 'Design Patterns', 'DSA'] },
  { name: 'Backend frameworks', icon: 'layers', items: ['Spring Boot', 'Spring Security', 'Spring MVC', 'Spring Cloud', 'Spring Data JPA', 'Hibernate'] },
  { name: 'Architecture & messaging', icon: 'network', items: ['Microservices', 'REST APIs', 'Distributed Systems', 'Apache Kafka (KRaft)', 'Event-driven Architecture', 'Redis'] },
  { name: 'Cloud & delivery', icon: 'cloud', items: ['AWS EC2', 'AWS S3', 'Docker', 'Kubernetes', 'Harness CI/CD', 'SonarQube'] },
  { name: 'Security & resilience', icon: 'shield', items: ['JWT', 'OAuth2', 'RBAC', 'Resilience4j', 'Eureka', 'Spring Cloud Gateway'] },
  { name: 'Databases & quality', icon: 'database', items: ['PostgreSQL', 'MySQL', 'JUnit 5', 'Mockito', 'Swagger / OpenAPI', 'Git'] },
];

export const credentials = [
  { name: 'AWS Certified AI Practitioner', provider: 'Amazon Web Services', year: '2026' },
  { name: 'Generative AI Leader', provider: 'Google Cloud', year: '2025' },
  { name: 'AWS Academy Cloud Foundations', provider: 'AWS Academy', year: '2023' },
  { name: 'Java Foundations Certified Junior Associate', provider: 'Oracle Academy', year: '2022' },
];

export const education = {
  school: 'Vaagdevi College of Engineering',
  qualification: 'B.Tech — Computer Science Engineering (AI & ML)',
  dates: '2020 — 2024',
  cgpa: '8.6 / 10',
  extra: 'Top 5% among 100 teams at the JHUB national-level hackathon (Smart Bus System).',
};

export const secondaryDetails = {
  volunteering: 'Supported the BUGG BIZZ segment at Technocraft 2022 (Vaagdevi College of Engineering).',
  languages: ['English', 'Hindi', 'Telugu'],
};
