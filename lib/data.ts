import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import healthify from "@/public/healthify.png";
import bookMe from "@/public/bookMe.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  // {
  //   name: "Projects",
  //   hash: "#projects",
  // },
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
    title: "SDE",
    location: "Recruiterflow",
    description: [
      "Led the redesign of the core Job Profile experience, the most-used screen in the platform — improving usability and driving measurable gains in user retention.",
      "Delivered features end-to-end, from UI through backend logic, expanding beyond a frontend-only role.",
      "Overhauled the reporting and analytics module used by leadership to track hiring performance, improving accuracy and reliability of key business metrics."
    ],
    icon: React.createElement(LuGraduationCap),
    date: "2025-Present",
  },
  {
    title: "Associate Frontend Engineer",
    location: "Oodles Technologies",
    description: [
      "Led frontend development on ERP projects end to end.",
      "Built interactive map layers and route visualizations with deck.gl and Google Maps.",
      "Optimized memory usage of Google Maps layers for smooth rendering on mobile devices.",
      "Contributed to a Groww-style fintech product for tracking and managing investments.",
    ],
    icon: React.createElement(LuGraduationCap),
    date: "2023-2025",
  },
  {
    title: "Front-End Developer",
    location: "Technogetic pvt. limited",
    description: [
      "Started my development journey here, building production UI from day one.",
      "Built a UI component library as a private npm package, used across the organization's products.",
      "Earned the \"Cheerful Coder\" award for team collaboration.",
    ],

    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Graduated Bachelor's",
    location: "JMIT",
    description: [
      "Completed my Bachelor's in Computer Applications and landed an off-campus offer as a Front-End Developer in my final semester.",
    ],
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
] as const;

export const projectsData = [
  {
    title: "Healthify",
    description:
      "Healthify is a patient management system for scheduling appointments, with a dedicated admin portal to manage them end to end.",
    tags: ["React", "Next.js", "Typescript", "AppWrite", "Tailwind", "ShadCn"],
    imageUrl: healthify,
    siteUrl: "https://healthify-app-prod.vercel.app/",
  },
  {
    title: "BookMe",
    description: "BookMe is an Airbnb-style booking platform — search and reserve hotels worldwide, or list your own place as a homestay.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux", "MongoDb", "Prisma"],
    imageUrl: bookMe,
    siteUrl: "https://book-me-ruddy.vercel.app/",
  },
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
  "Prisma",
  "React testing library",
  "Jest",
] as const;
