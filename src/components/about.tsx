"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {

  return (
    <motion.section
      className="mb-32 max-w-3xl text-base sm:text-lg sm:leading-10 leading-8 text-center scroll-mt-28 sm:mt-44 mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
       After exploring the tech space and realising my passion for computers, I decided to graduate in{" "}
        <span className="font-medium">Computer Science</span>🏅.
        I have good understanding of algorithms and experienced in Java and{" "}
        <span className="font-medium underline">Full-Stack Web Development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        creativity behind writing clean and modular code. I <span>love</span> to
        see when code looks like plain english language. My to-go stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, tv-series, and working out in the gym.🏋🏻💪🏼
      </p>
    </motion.section>
  );
}