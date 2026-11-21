export const services = [
  {
    number: "01",
    title: "React Native apps",
    description:
      "Build or extend iOS and Android apps, from reusable screens and API integrations to payments and release support.",
    tags: ["iOS & Android", "APIs", "Payments"],
  },
  {
    number: "02",
    title: "React & Next.js websites",
    description:
      "Create responsive landing pages, business websites, and dashboards with clean components and a polished user experience.",
    tags: ["React.js", "Next.js", "Responsive UI"],
  },
  {
    number: "03",
    title: "Improvements & support",
    description:
      "Add features to an existing product, fix UI issues, improve performance, or connect your frontend to backend services.",
    tags: ["New features", "Performance", "Integrations"],
  },
] as const;

export const projects = [
  {
    number: "01",
    name: "LA PTE Exam Preparation",
    type: "Education · Exam preparation",
    description:
      "An exam-preparation app with course content, practice modules, mock tests, progress tracking, and notifications.",
    tags: ["React Native", "TypeScript", "Firebase"],
    impact: "Learning app",
    mark: "PTE",
  },
  {
    number: "02",
    name: "LA CCL & NAATI Exam Preparation",
    type: "Education · Exam preparation",
    description:
      "An exam-preparation app with course content, practice modules, mock tests, progress tracking, and notifications.",
    tags: ["React Native", "TypeScript", "Firebase"],
    impact: "Learning app",
    mark: "LA",
  },
  {
    number: "03",
    name: "DSP2 — Digital Sansad",
    type: "Government · Digital platform",
    description:
      "A digital application for Lok Sabha and Rajya Sabha, supporting session management and information access for more than 545 members.",
    tags: ["React Native", "Next.js"],
    impact: "545+ members",
    mark: "DS",
  },
  {
    number: "04",
    name: "Bill365",
    type: "Business · Billing & inventory",
    description:
      "A GST-compliant billing and inventory product that helps small businesses manage day-to-day operations.",
    tags: ["React Native", "Redux"],
    impact: "200+ SME businesses",
    mark: "B",
  },
  {
    number: "05",
    name: "1800flowers",
    type: "Commerce · Payments",
    description:
      "An enterprise e-commerce experience with complex cart flows and native payment integrations, built to support high-volume transactions.",
    tags: ["React Native", "Redux", "Payments"],
    impact: "$1M+ annual transactions",
    mark: "18",
  },
  {
    number: "06",
    name: "2GTHR",
    type: "Social · Real-time messaging",
    description:
      "A social networking app combining chat, push notifications, and deep links for a responsive, connected experience.",
    tags: ["React Native", "Firebase", "Socket.IO"],
    impact: "<200ms messaging",
    mark: "2G",
  },
  {
    number: "07",
    name: "Lejardin",
    type: "Education · Administration",
    description:
      "A multi-role experience for administrators, parents, and staff, with geolocation, attendance, and communication tools.",
    tags: ["React Native", "Google Maps"],
    impact: "Multi-role app",
    mark: "L",
  },
] as const;

export const experience = [
  {
    role: "Senior React Native Developer",
    company: "Rayosys",
    dates: "Aug 2025 — Present",
    summary:
      "Lead React Native projects from planning through release, coordinating design, backend/API, frontend, and feature delivery. Work closely with business analysts, QA, backend developers, designers, and clients through regular meetings and throughout the project lifecycle. Manage releases to the iOS App Store and Google Play. Improved app responsiveness and load times by 30%, resolved 15+ critical crashes, and streamlined release workflows.",
  },
  {
    role: "Technology Consultant",
    company: "EY (Ernst & Young)",
    dates: "May 2024 — May 2025",
    summary:
      "Built enterprise web and mobile features with React, Next.js, React Native, and Ant Design; created reusable UI and contributed to a 25% reduction in technical debt.",
  },
  {
    role: "Associate Software Developer",
    company: "Octal IT Solution",
    dates: "May 2022 — May 2024",
    summary:
      "Delivered React web and mobile features, built reusable component libraries that increased team velocity by 40%, and optimized JavaScript bundles by 30%.",
  },
  {
    role: "React Native Developer",
    company: "Destm Technology",
    dates: "Sep 2021 — Mar 2022",
    summary:
      "Developed cross-platform mobile experiences and React interfaces, integrated REST APIs, and maintained Git workflows for a six-person team.",
  },
  {
    role: "Web Developer Trainee",
    company: "Numeric Infosystem",
    dates: "Jun 2020 — Aug 2021",
    summary:
      "Built and maintained responsive web features with React, JavaScript, HTML, and CSS, and supported API integration, debugging, and releases.",
  },
] as const;

export const skillGroups = [
  {
    name: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML & CSS"],
  },
  {
    name: "Mobile",
    skills: ["React Native", "iOS & Android", "Push notifications", "Deep linking"],
  },
  {
    name: "UI & architecture",
    skills: ["Component systems", "Tailwind CSS", "Material UI", "Ant Design"],
  },
  {
    name: "State & data",
    skills: ["Redux Toolkit", "Zustand", "TanStack Query", "REST APIs", "Firebase"],
  },
  {
    name: "Quality & delivery",
    skills: ["Jest", "Testing Library", "Playwright", "Cypress", "Git", "CI/CD"],
  },
  {
    name: "Integrations",
    skills: ["Payments", "Socket.IO", "Node.js services", "Java APIs", "Laravel APIs"],
  },
] as const;

export const education = [
  {
    degree: "B.Tech, Computer Science & Engineering",
    school: "RGPV, Bhopal · 2021",
  },
] as const;
