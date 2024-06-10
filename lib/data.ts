import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import romingo from "@/public/romingo.png";
import dpa from "@/public/dpa.png";
import sstk from "@/public/sstk.png";
import futbala from "@/public/futbala.png";
import clairk from "@/public/clairk.png";
import circadiance from "@/public/circadiance.jpeg";
import ideawake from "@/public/ideawake.png";
import ms from "@/public/ms.png";
import js from "@/public/js.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "BS in Computer Science | FAST-NUCES",
    location: "Lahore, Pakistan",
    description:
      "Did graduation in Computer Science. I learned programming, data structures, algorithms, databases and software engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2013 - 2017",
  },
  {
    title: "Software Engineer | Emblem Technologies",
    location: "Lahore, Pakistan",
    description:
      "Exhibited hands-on programming skills in JavaScript, React, and Angular. Actively participated in the architecture, design, and implementation of backend features using Node.js and Django Python. Ensured the quality and security of client code by identifying bugs and weaknesses using approved troubleshooting methods, and developed robust solutions that satisfied client requirements for functionality, scalability, and performance.",
    icon: React.createElement(CgWorkAlt),
    date: "2017 - 2019",
  },
  {
    title: "Senior Software Engineer | SSI",
    location: "Lahore, Pakistan",
    description:
      "I have proved expertise in coding with JavaScript, and have used frameworks such as React, Vue, Angular, Nuxt.js, and Next.js effectively. For efficient management of application state, I have used technologies like Redux, Vuex, and NgRx. Additionally, I have built user interfaces using HTML, CSS, Bootstrap, Material UI, and Tailwind CSS. I have actively participated in backend development using Django Python and Node.js, primarily utilizing the ExpressJS and NestJS frameworks.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full Stack Developer | Upwork",
    location: "Remote",
    description:
      "Worked with top clients from Switzerland, Australia, Italy, and the USA. Since 2021, I have earned over $100,000, completed numerous projects, and logged around 4,000 hours of work. My dedication to client satisfaction is shown in the many 5-star reviews on my profile. I have strong client communication skills and consistently deliver high-quality work. I have earned the Top Rated Plus badge, placing me in the top 3% of freelancers on Upwork.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - Current",
  },
] as const;

export const projectsData = [
  {
    title: "Romingo",
    description:
      "I worked as a full-stack developer for a pet-friendly hotel booking platform, focusing on the Listing Page, Detail Page, Booking Page, Mobile Responsiveness, and Admin Panel.",
    tags: ["React", "Next.js", "Node.js", "Express.js", "PostgreSQL", "Tailwind", "Prisma", "GraphQL"],
    imageUrl: romingo,
    projectUrl: "https://romingo.com",
  },
  {
    title: "Digital Policy Alert",
    description:
      "I worked as a Full Stack Developer on this monitoring web app. It shows the latest digital policy news and updates. It has features like Complex Graphs, Filter, and Auth.",
    tags: ["Vue", "Nuxt.js", "Tailwind CSS", "Vuex", "Python", "Django", "PostgreSQL"],
    imageUrl: dpa,
    projectUrl: "https://digitalpolicyalert.org",
  },
  {
    title: "Simply Stakeholder",
    description:
      "I collaborated with Simply Stakeholders to create SaaS stakeholder management software with features of Listing, Graphs, Reporting, Forms and, Socket.io.",
    tags: ["Angular", "TypeScript", "Material UI", "Jest", "Azure", "Progressive Wep App (PWA)"],
    imageUrl: sstk,
    projectUrl: "https://simplystakeholders.com",
  },
  {
    title: "CLaiRK | Generative AI Chatbot",
    description:
      "CLaiRK is a comprehensive tool that will help navigate the rapidly changing landscape of artificial intelligence rules. It is a chatbot that can answer questions about AI rules and regulations.",
    tags: ["Generative AI", "Open AI", "LLM", "RAG", "Vue", "FastAPI"],
    imageUrl: clairk,
    projectUrl: "https://clairk.digitalpolicyalert.org",
  },
  {
    title: "Futbala",
    description:
      "Futbala is a fantasy football management experience. I worked as a sole Frontend Developer for developing the Minimum viable product (MVP) which I completed in 4 months.",
    tags: ["Vue", "TypeScript", "tailwind CSS", "Pinia", "Minimum viable product (MVP)"],
    imageUrl: futbala,
    projectUrl: "https://dev-app.futbala.com",
  },
  {
    title: "Circadiance",
    description:
      "Circadiance, a Synergy Cloud software allows clinicians to remotely monitor infants. I worked as a Full Stack Developer on features like data management, Reporting, and DB architecture.",
    tags: ["Angular", "TypeScript", "Python", "Django", "Celery", "PostgreSQL", "Docker", "AWS"],
    imageUrl: circadiance,
    projectUrl: "https://www.circadiance.com/synergycloud",
  },
  {
    title: "Ideawake",
    description:
      "I worked as a Full Stack Developer in making the idea mature. It is an easy-to-use, highly configurable idea management platform that makes it easy to capture, evaluate, and take action on ideas.",
    tags: ["React", "TypeScript", "Node.js", "Nest.js", "PostgreSQL", "AWS"],
    imageUrl: ideawake,
    projectUrl: "https://www.ideawake.com",
  },
  {
    title: "JootiShooti",
    description:
      "I worked as a web developer creating an e-commerce website for JootiShooti. It is a platform for hand-crafted footwear for women, using the best materials and finest craftsmanship.",
    tags: ["WordPress", "WordPress Plugins", "PHP", "Stripe"],
    imageUrl: js,
    projectUrl: "https://jootishooti.com",
  },
  {
    title: "Minimal Space",
    description:
      "I worked as a web developer, creating and managing an e-commerce website for Minimal Space. It is a platform for selling high-quality furniture and home decor, featuring modern and minimalist designs.",
    tags: ["Shopify", "Shopify Plugins", "Stripe", "Chatbot"],
    imageUrl: ms,
    projectUrl: "https://www.minimalspace.shop",
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Vue",
  "Angular",
  "Next.js",
  "Nuxt.js",
  "WordPress",
  "Shopify",
  "Node.js",
  "Git",
  "Tailwind",
  "Material UI",
  "Prisma",
  "TypeORM",
  "MongoDB",
  "Redux",
  "Vuex",
  "Pinia",
  "NgRx",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "FastAPI",
  "OpenAI",
  "LLM",
  "Hugging Face",
  "Ionic",
  "Jest",
  "Cypress",
  "AWS",
  "Docker",
] as const;
