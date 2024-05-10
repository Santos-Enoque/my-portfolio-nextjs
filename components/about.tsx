"use client";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
const About = () => {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I graduated with a degree in{" "}
        <span className="font-medium">Computer Science</span> and soon began
        creating{" "}
        <span className="font-medium">Flutter development tutorials</span> on
        YouTube. After a few years of content creation I decided to pursue a
        Master's in Computer Science focusing on{" "}
        <span className="font-medium">Machine Learning</span>. Currently, I work
        as a Software Engineer at a Robotics company in Japan, where I develop{" "}
        <span className="font-medium">Graphical User Interfaces</span> for
        robots and I also develop and manage few personal projects. My core
        development stack includes{" "}
        <span className="font-medium">React (Nextjs), Flutter and Prisma</span>.
        I also have expertise in <span className="font-medium">Python</span> and{" "}
        <span className="font-medium">
          building machine learning models with PyTorch
        </span>
        .
      </p>
    </motion.section>
  );
};

export default About;
