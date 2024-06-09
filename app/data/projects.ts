import {
  DeploymentStatus,
  ProjectTag,
  ProjectType,
  TechStack,
} from "@/models/projects";
import BookLah from "@/public/projects/BookLah.png";
import ShortenSG from "@/public/projects/ShortenSG.png";
import Client from "@/public/projects/client.png";
import LegacyCodingPortfolio from "@/public/projects/legacy-portfolio.png";
import CodingPortfolioAll from "@/public/projects/portfolio-2.0-ecosystem.png";
import CodingPortfolio from "@/public/projects/portfolio-2.0.png";
import Sayless from "@/public/projects/sayless-ecosystem.png";
import Sayocode from "@/public/projects/sayocode.png";
import Sparks from "@/public/projects/sparks.png";

export const projects: ProjectType[] = [
  {
    id: 1,
    name: "Project Sayocode",
    slug: "sayocode",
    description: "Web builder that automates the process of app creation",
    tags: [2019, ProjectTag.SCHOOL_PROJECT],
    icon: Sayocode,
    gitHub: "https://github.com/joshuadavidang/",
    techStack: [
      TechStack.REACT,
      TechStack.EXPRESS_JS,
      TechStack.MONGODB,
      "Bootstrap",
    ],
    deploymentStatus: DeploymentStatus.NOT_DEPLOYED,
  },
  {
    id: 2,
    name: "Coding Portfolio",
    slug: "portfolio",
    description:
      "Designed and developed a responsive coding portfolio, built on top of Next.js & Tailwind CSS, deployed to Vercel.",
    tags: [2022, ProjectTag.PERSONAL_PROJECT, ProjectTag.LEGACY],
    icon: LegacyCodingPortfolio,
    gitHub: "https://github.com/joshuadavidang/joshua-david",
    techStack: [
      TechStack.TYPESCRIPT,
      TechStack.NEXT_JS,
      TechStack.TAILWIND_CSS,
      TechStack.SUPABASE,
    ],
    deploymentStatus: DeploymentStatus.DEPLOYED,
    deployedLink: "https://legacy.joshuadavid.dev",
  },
  {
    id: 3,
    name: "Custom Web App",
    slug: "cwa",
    description: "Developed a custom personal brand web app for clients.",
    tags: [2023, ProjectTag.PERSONAL_PROJECT],
    icon: Client,
    gitHub: "https://celineongjw.com",
    techStack: [
      TechStack.TYPESCRIPT,
      TechStack.NEXT_JS,
      TechStack.TAILWIND_CSS,
      TechStack.VERCEL,
      TechStack.SUPABASE,
    ],
    deploymentStatus: DeploymentStatus.DEPLOYED,
    deployedLink: "https://celineongjw.com",
  },
  {
    id: 4,
    name: "Sayless",
    slug: "sayless",
    description:
      "A gamified web app connecting people to share excess food. Upload receipts to add items to inventory or complete quests to earn vouchers.",
    achievements: ["Grade: A+"],
    tags: [2023, ProjectTag.SCHOOL_PROJECT],
    icon: Sayless,
    gitHub: "https://github.com/SMU-IS/SayLess",
    techStack: [
      TechStack.VUE_JS,
      TechStack.EXPRESS_JS,
      TechStack.TAILWIND_CSS,
      TechStack.MONGODB,
      "DaisyUI",
      "OCR API",
      "Firebase API",
    ],
    deploymentStatus: DeploymentStatus.DEPLOYED,
    deployedLink: "https://sayless.space",
  },
  {
    id: 5,
    name: "Coding Portfolio 2.0",
    slug: "portfolio-v2",
    description:
      "Version 2.0 - Redesigned and redeveloped an updated version of my coding portfolio, built on top of Next.js 14.0, Tailwind CSS, Shadcn deployed to Vercel.",
    tags: [2024, ProjectTag.PERSONAL_PROJECT],
    icon: CodingPortfolio,
    detailedImage: CodingPortfolioAll,
    gitHub: "https://github.com/joshuadavidang/joshuadavid",
    techStack: [
      TechStack.TYPESCRIPT,
      TechStack.NEXT_JS,
      TechStack.TAILWIND_CSS,
      TechStack.SHADCN_UI,
      TechStack.VERCEL,
      TechStack.SUPABASE,
    ],
    deploymentStatus: DeploymentStatus.DEPLOYED,
    deployedLink: "https://joshuadavid.dev",
  },
  {
    id: 6,
    name: "ShortenSG",
    slug: "shortensg",
    description:
      "Full-stack URL shortener web app, designed to transform long URLs into neat and shareable links.",
    tags: [2024, ProjectTag.PERSONAL_PROJECT],
    icon: ShortenSG,
    gitHub: "https://github.com/joshuadavidang/ShortenSG",
    techStack: [
      TechStack.TYPESCRIPT,
      TechStack.NEXT_JS,
      TechStack.TAILWIND_CSS,
      TechStack.SHADCN_UI,
      TechStack.KOA_JS,
      TechStack.TYPEORM,
      TechStack.POSTGRESQL,
      TechStack.VERCEL,
    ],
    deploymentStatus: DeploymentStatus.NOT_DEPLOYED,
  },
  {
    id: 7,
    name: "BookLah!",
    slug: "booklah",
    description:
      "Full-stack concert booking web app, utilising Microservice architecture.",
    achievements: ["Grade: A"],
    tags: [2024, ProjectTag.SCHOOL_PROJECT],
    icon: BookLah,
    gitHub: "https://github.com/joshuadavidang/BookLah",
    techStack: [
      TechStack.TYPESCRIPT,
      TechStack.NEXT_JS,
      TechStack.TAILWIND_CSS,
      TechStack.SHADCN_UI,
      TechStack.FLASK,
      TechStack.KOA_JS,
      TechStack.TYPEORM,
      TechStack.POSTGRESQL,
      TechStack.RABBITMQ,
    ],
    deploymentStatus: DeploymentStatus.NOT_DEPLOYED,
  },
  {
    id: 8,
    name: "Sparks Portal",
    slug: "sparks",
    description:
      "One of the greenfield GovTech internship projects I've worked on, Sparks is a product recommender app that helps government agency users discover a suite of products built in-house.",
    achievements: [
      "Lead front-end engineer.",
      "Collaborated with 2 software engineers and 1 UX designer to develop and launch Sparks within 2 months.",
      "Presented Sparks to public officers from the Ministry of Culture, Community and Youth (MCCY) at a tech showcase held at GovTech Hive office.",
    ],
    tags: [2024, ProjectTag.GOVTECH_INTERNSHIP_PROJECT],
    icon: Sparks,
    techStack: [
      TechStack.TYPESCRIPT,
      TechStack.NEXT_JS,
      TechStack.TAILWIND_CSS,
      TechStack.SHADCN_UI,
      TechStack.KOA_JS,
      TechStack.TYPEORM,
      TechStack.POSTGRESQL,
      TechStack.OPENAI,
    ],
    deploymentStatus: DeploymentStatus.DEPLOYED,
    deployedLink: "https://sparks.crowdtask.gov.sg",
  },
];
