import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import healthify from "@/public/healthify.png";
import bookMe from "@/public/bookMe.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Associate Frontend Engineer",
    location: "Oodles Technologies",
    description:
    ["Led frontend development and handled ERP projects.","Worked with deck.gl and google maps to create layers and routes on the map.","Reduced the memory optimizaton of google maps layers to render smoothly on mobile.", "Worked on a financial product just like groww."],
    icon: React.createElement(LuGraduationCap),
    date: "2023-Present",
  },
  {
    title: "Front-End Developer",
    location: "Technogetic pvt. limited",
    description: ["Started my development journey here.", "Created UI library as a private npm package to create products within the organization.","Got the cheerful coder award."],
   
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Graduated Bachelor's",
    location: "JMIT",
    description:
      ["Done my bachelor's in computer applicaitons and landed a off campus job in the final semester as a front-end developer."],
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
] as const;

export const projectsData = [
  {
    title: "Healthify",
    description:
      "Healthify is a Patient management system. Helps to schedule appointments and an seperate admin portal to manage the appointments.",
    tags: ["React", "Next.js", "Typescript", "AppWrite", "Tailwind", "ShadCn"],
    imageUrl: healthify,
  },
  // {
  //   title: "Top Green",
  //   description:
  //     "This product helps to do the planning for the optimized route .",
  //   tags: ["React", "Google Maps", "deck gl", "Redux Toolkit", "Material UI"],
  //   imageUrl: wordanalyticsImg,
  // },
  {
    title: "BookMe",
    description:
      "Book me helps to book hotels around the world. You can make your home a homestay just like airbnb.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux", "MongoDb", "Prisma"],
    imageUrl: bookMe,
  }
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "SCSS",
  "Tailwind CSS",
  "Redux",
  "Zustand",
  "Deck.gl",
  "React testing library",
  "Jest"
] as const;
