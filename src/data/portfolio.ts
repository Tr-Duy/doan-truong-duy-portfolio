export interface Metric {
  label: string;
  value: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  project: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  metrics: Metric[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  role: string;
  period: string;
  githubUrl: string;
  description: string;
  longDescription?: string;
  highlights: string[];
  metrics: Metric[];
  technologies: string[];
  isPrimary: boolean;
  architectureDetails?: {
    overview: string;
    keyModules: string[];
    security: string;
    database: string;
    testing: string;
    integrations: string;
  };
}

export interface SkillCategory {
  category: string;
  skills: { name: string; isPrimaryBackend?: boolean }[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  gpa: string;
  awards: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
}

export const PORTFOLIO_DATA = {
  personalInfo: {
    name: "Đoàn Trường Duy",
    shortName: "Duy",
    title: "Java Backend Developer",
    targetPositions: "Java Backend Intern / Fresher",
    location: "Ho Chi Minh City, Vietnam",
    email: "doantruongduy8@gmail.com",
    phone: "0332090744",
    phoneFormatted: "+84 332 090 744",
    github: "https://github.com/Tr-Duy",
    linkedin: "https://linkedin.com/in/truongduy-dev/",
    cvPath: "/CV-Doan-Truong-Duy.pdf",
    avatarPath: "/avatar.jpg",
    bio: "Final-year Information Technology student at Saigon Technology University focused on building reliable, scalable backend systems with Java and Spring Boot. Hands-on experience developing RESTful APIs, Spring Security authentication, database design, API integration, and JUnit unit testing.",
    objective: "Final-year Information Technology student with hands-on experience building RESTful APIs using Java, Spring Boot, Spring Data JPA, and MySQL. Experienced in authentication, business logic, database design, and API integration. Seeking a Java Backend Intern/Fresher position to contribute to real-world backend systems."
  },

  heroHighlights: [
    "Java 21",
    "Spring Boot 4",
    "Spring Security",
    "RESTful API",
    "MySQL",
    "JUnit 5"
  ],

  aboutCard: {
    location: "Ho Chi Minh City, Vietnam",
    education: "Saigon Technology University (STU)",
    focus: "Java Backend Development",
    careerGoal: "Java Backend Intern / Fresher"
  },

  experience: [
    {
      id: "yoot-internship",
      company: "Công ty Cổ phần Công nghệ và Đào tạo YOOT",
      project: "YoEdu - Student Management System (SMS)",
      role: "Backend Developer Intern",
      period: "March 2026 - August 2026",
      location: "Ho Chi Minh City, Vietnam",
      highlights: [
        "Developed backend services and 90+ RESTful API endpoints using Java 21, Spring Boot 4, Spring Data JPA, and MySQL with layered architecture across 17 JPA entities and 16 business controllers.",
        "Built RESTful APIs for student, class, enrollment, attendance, learning, billing, payment, promotion, reporting, and parent-portal workflows.",
        "Implemented JWT authentication and role-based authorization for 4 user roles, securing 70+ methods with Spring Security and handling transactional workflows using @Transactional and BigDecimal.",
        "Implemented pagination, dynamic filtering, standardized API responses, global exception handling, and API documentation with Swagger/OpenAPI.",
        "Added 86 JUnit 5/Mockito test methods across 15 service test classes."
      ],
      metrics: [
        { label: "REST APIs", value: "90+" },
        { label: "JPA Entities", value: "17" },
        { label: "Controllers", value: "16" },
        { label: "User Roles", value: "4" },
        { label: "Secured Methods", value: "70+" },
        { label: "JUnit Tests", value: "86" }
      ],
      technologies: [
        "Java 21",
        "Spring Boot 4",
        "Spring Data JPA",
        "Spring Security",
        "JWT",
        "MySQL",
        "JUnit 5",
        "Mockito",
        "Swagger/OpenAPI"
      ]
    }
  ] as ExperienceItem[],

  projects: [
    {
      id: "srs-english",
      title: "English Vocabulary Learning System – Spaced Repetition System (SRS)",
      role: "Backend Developer",
      period: "2026 - Present",
      githubUrl: "https://github.com/Tr-Duy/ProJect-Fullstack-LeLa",
      description: "English vocabulary learning platform powered by SRS and AI-assisted learning.",
      longDescription: "A comprehensive backend system engineered with Java 21 and Spring Boot for an adaptive English vocabulary platform. Integrates custom Spaced Repetition System (SRS) algorithm engines, AI-generated quiz generation via Google Gemini, real-time WebSocket communication, and payment processing with SePay.",
      highlights: [
        "Developed 170+ REST API mappings using Java, Spring Boot, Spring Data JPA, and MySQL following a layered architecture across 34 JPA entities.",
        "Implemented the SRS learning engine for flashcards, review scheduling, progress tracking, learning sessions, and spaced-repetition workflows.",
        "Implemented JWT/OAuth2 authentication, role-based authorization, and refresh-token management using Spring Security.",
        "Integrated Google Gemini AI for AI-generated quizzes and personalized learning features.",
        "Integrated SePay for payment processing with secure transactional workflows.",
        "Developed quiz, achievement, leaderboard, notification, subscription, and WebSocket chat modules.",
        "Added 65 test classes and 295+ JUnit test methods.",
        "Used Flyway for database migration management with 30 migrations."
      ],
      metrics: [
        { label: "API Mappings", value: "170+" },
        { label: "JPA Entities", value: "34" },
        { label: "Test Classes", value: "65" },
        { label: "JUnit Tests", value: "295+" },
        { label: "Flyway Migrations", value: "30" }
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "Spring Data JPA",
        "Spring Security",
        "MySQL",
        "JWT",
        "OAuth2",
        "Google Gemini API",
        "SePay",
        "WebSocket",
        "JUnit 5",
        "Mockito",
        "Swagger/OpenAPI",
        "Flyway"
      ],
      isPrimary: true,
      architectureDetails: {
        overview: "Built using a clean layered architecture (Controller -> Service -> Repository -> Entity) with DTOs and Data Mappers to encapsulate business domain logic and guarantee data integrity.",
        keyModules: [
          "SRS Algorithm & Spaced Repetition Scheduler Engine",
          "JWT Access & Refresh Token Management + OAuth2 Social Auth",
          "AI Quiz Generator powered by Google Gemini API Integration",
          "SePay Automated Payment Webhooks & Subscription Management",
          "Real-time WebSocket Chat & Event Notifications",
          "Quiz Engine, Leaderboards, Badges & Achievements System"
        ],
        security: "Spring Security with Stateless JWT filter chain, Refresh Token persistence, OAuth2 login handlers, and Method Security (@PreAuthorize / @Secured).",
        database: "MySQL 8 database schema managed via 30 Flyway SQL migration scripts, with optimized JPA indexing, lazy loading, and transactional isolation.",
        testing: "Comprehensive test suite featuring 65 test classes and 295+ JUnit 5 & Mockito test methods covering core service logic, security checks, and repositories.",
        integrations: "Google Gemini REST API for automated AI flashcard context generation; SePay payment webhook gateway; WebSocket (STOMP/SockJS) for real-time messaging."
      }
    },
    {
      id: "yoedu-sms",
      title: "YoEdu - Student Management System (SMS)",
      role: "Backend Developer",
      period: "2026",
      githubUrl: "https://github.com/Tr-Duy/YoEdu_Student_Management_System",
      description: "Student management system built with Java and Spring Boot, providing RESTful APIs for academic management, authentication, enrollment, attendance, learning, billing, payment, and promotion workflows.",
      longDescription: "Enterprise student management system built with Java 21 and Spring Boot 4. Provides 90+ RESTful API endpoints across 17 JPA entities and 16 business controllers for academic administration, JWT authentication, and transactional financial workflows.",
      highlights: [
        "Developed 90+ RESTful API endpoints using Java 21, Spring Boot 4, Spring Data JPA, and MySQL following a layered architecture.",
        "Designed and implemented backend modules for students, teachers, classes, enrollments, attendance, learning results, billing, payments, promotions, reporting, and parent-portal workflows.",
        "Implemented JWT authentication and role-based authorization for 4 user roles, securing 70+ backend methods with Spring Security.",
        "Implemented transactional business workflows using @Transactional and BigDecimal.",
        "Implemented pagination, dynamic filtering, standardized API responses, global exception handling, and Swagger/OpenAPI documentation.",
        "Added 86 JUnit 5/Mockito test methods across 15 service test classes."
      ],
      metrics: [
        { label: "REST APIs", value: "90+" },
        { label: "JPA Entities", value: "17" },
        { label: "Controllers", value: "16" },
        { label: "User Roles", value: "4" },
        { label: "Secured Methods", value: "70+" },
        { label: "Tests", value: "86" }
      ],
      technologies: [
        "Java 21",
        "Spring Boot 4",
        "Spring Data JPA",
        "Spring Security",
        "JWT",
        "MySQL",
        "REST API",
        "Hibernate",
        "JUnit 5",
        "Mockito",
        "Swagger/OpenAPI",
        "Maven"
      ],
      isPrimary: false,
      architectureDetails: {
        overview: "Layered backend architecture following Controller -> Service -> Repository design pattern with DTOs, custom mappers, and standardized API response wrappers.",
        keyModules: [
          "Student & Teacher Profile Management",
          "Class Schedule & Enrollment Management",
          "Attendance Tracking & Learning Results",
          "Billing, Payment Processing & Promotions (BigDecimal)",
          "Reporting Engine & Parent Portal Workflows",
          "JWT Auth & Spring Security Method Protection (70+ methods)"
        ],
        security: "JWT authentication with stateless session management, role-based authorization (RBAC) across 4 user roles, securing 70+ backend methods with Spring Security.",
        database: "MySQL relational database schema mapped with Spring Data JPA and Hibernate across 17 entities with strict transactional boundaries (@Transactional).",
        testing: "Robust automated test suite featuring 86 JUnit 5 and Mockito test methods across 15 service test classes.",
        integrations: "RESTful API endpoints with pagination, dynamic filtering, standardized global exception handling, and Swagger/OpenAPI documentation."
      }
    }
  ] as ProjectItem[],

  skillCategories: [
    {
      category: "Languages",
      skills: [
        { name: "Java", isPrimaryBackend: true },
        { name: "TypeScript" },
        { name: "SQL", isPrimaryBackend: true }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Spring Boot", isPrimaryBackend: true },
        { name: "Spring Web", isPrimaryBackend: true },
        { name: "Spring Data JPA", isPrimaryBackend: true },
        { name: "Hibernate", isPrimaryBackend: true },
        { name: "RESTful API", isPrimaryBackend: true },
        { name: "Maven", isPrimaryBackend: true }
      ]
    },
    {
      category: "Security & Authentication",
      skills: [
        { name: "Spring Security", isPrimaryBackend: true },
        { name: "JWT", isPrimaryBackend: true },
        { name: "OAuth2", isPrimaryBackend: true }
      ]
    },
    {
      category: "Database",
      skills: [
        { name: "MySQL", isPrimaryBackend: true },
        { name: "PostgreSQL", isPrimaryBackend: true },
        { name: "SQL Server" },
        { name: "Flyway", isPrimaryBackend: true }
      ]
    },
    {
      category: "Integration",
      skills: [
        { name: "Google Gemini API", isPrimaryBackend: true },
        { name: "SePay", isPrimaryBackend: true },
        { name: "WebSocket", isPrimaryBackend: true }
      ]
    },
    {
      category: "Testing & Tools",
      skills: [
        { name: "JUnit 5", isPrimaryBackend: true },
        { name: "Mockito", isPrimaryBackend: true },
        { name: "Postman", isPrimaryBackend: true },
        { name: "Swagger/OpenAPI", isPrimaryBackend: true },
        { name: "Git" },
        { name: "GitHub" },
        { name: "Docker", isPrimaryBackend: true },
        { name: "Docker Compose", isPrimaryBackend: true }
      ]
    },
    {
      category: "Frontend",
      skills: [
        { name: "ReactJS" },
        { name: "Vite" },
        { name: "React Router" },
        { name: "Tailwind CSS" },
        { name: "Ant Design" },
        { name: "TanStack Query" }
      ]
    }
  ] as SkillCategory[],

  education: [
    {
      institution: "Saigon Technology University - STU",
      degree: "Bachelor of Information Technology",
      period: "2022 - Present",
      gpa: "3.1 / 4.0",
      awards: [
        "3rd Prize – Student Research Contest, STU (2025)",
        "Special Innovation Prize – STU Startup & Innovation Contest (2024)"
      ]
    }
  ] as EducationItem[],

  certifications: [
    {
      title: "Fullstack Software Development Certification",
      issuer: "YoEdu Academy",
      year: "2026"
    },
    {
      title: "Git Work-Ready: Production Source Code Management",
      issuer: "Rikkei Education",
      year: "2026"
    },
    {
      title: "Enterprise Website Deployment",
      issuer: "Rikkei Education",
      year: "2026"
    }
  ] as CertificationItem[]
};
