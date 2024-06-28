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
       After graduating with a bachelor degree in{" "}
        <span className="font-medium">Computer Science</span>. I have worked in the industry for 4 years before becoming a full-time freelancer.{" "}
        My favorite part of programming is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem.
        On the frontend, I am skilled in <span className="font-medium">JavaScript, TypeScript, React, Vue, and Angular</span>, excelling at converting designs into pixel-perfect HTML and building fast, SEO-optimized web applications with <span className="font-medium">NextJS and NuxtJS</span>.
        On e-commerce, I have experience with <span className="font-medium">Shopify and Wordpress</span>.
        My backend expertise includes building robust systems with <span className="font-medium">Node.js, Express.js, Nest.js, Python, Django, FastAPI and Flask</span>, with experience in both <span className="font-medium">SQL and NoSQL</span> databases.
        I have also developed hybrid mobile apps using the <span className="font-medium">Ionic Framework</span> and worked on <span className="font-medium">Electron.js</span> for desktop application development. Additionally, I am experienced in unit and end-to-end testing using <span className="font-medium">Jest and Cypress</span>, and have DevOps experience with <span className="font-medium">AWS, Azure, Docker, and Nginx</span>. I am always looking to learn new technologies
      </p>

      <p>
      I bring a unique combination of technical expertise and creative flair to every project, whether it's a <span className="font-medium">SaaS application, e-commerce platform, dashboard, desktop, or mobile applications</span>.
      </p>
    </motion.section>
  );
}
