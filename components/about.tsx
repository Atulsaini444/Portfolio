"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After a degree in{" "}
        <span className="font-medium">Computer Science 💻</span>, I taught
        myself to code and started as a Frontend Engineer — and haven't
        stopped shipping since. At Recruiterflow, I led the redesign of the
        platform's most-used screen and pushed past frontend into backend
        logic. Before that, I built map-heavy interfaces with deck.gl and
        Google Maps, and shipped a private UI library used across a company's
        products.{" "}
        <span className="italic">My favorite part of the job</span> is
        turning a messy requirement into something people actually enjoy
        using. My core stack is{" "}
        <span className="font-medium">React and Next.js</span>, with
        TypeScript and Prisma close behind — and I'm always picking up the
        next thing🧑‍💻.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I'm reading on my
        Kindle📚.
      </p>
    </motion.section>
  );
}
