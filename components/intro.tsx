"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import SocialLink from "./social-links";
import { socialLinksData } from "@/lib/data";
const Intro = () => {
  return (
    <section className="mb-28 max-w-[50rem] text-center">
      <div className="flex items-center flex-col justify-center mt-28 sm:mt-36">
        <div className="relative">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2, type: "tween" }}
          >
            <Image
              src="/profile.png"
              quality={80}
              alt="Santos Enoque"
              width={100}
              height={100}
              className="rounded-full object-cover border-4 border-white shadow-lg"
            />
          </motion.div>
          <motion.span
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.1,
              dureation: 0.7,
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            className="absolute bottom-0 right-0 text-4xl"
          >
            👋
          </motion.span>
        </div>
        <motion.h1
          className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="">
            Hello, I'm{" "}
            <span className="bg-yellow-200 px-3 font-semibold font-serif ">
              Santos
            </span>{" "}
            .
          </span>{" "}
          A <span className="font-semibold">software engineer</span> with{" "}
          <span className="font-bold">6 years</span> of experience. I enjoy
          building <span className="italic">sites & apps</span>. My main focus
          is <span className="underline">React (Next.js) & Flutter.</span>.
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-2 p-4 text-lg font-medium"
        >
          <Link
            href="#contact"
            className="flex items-center bg-gray-900 text-white gap-2 py-2 px-7 rounded-full hover:bg-gray-950 focus:scale-110 hover:scale-110 active:scale-105 transition-all group"
          >
            Contact me here{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1" />{" "}
          </Link>
          <a
            href="/CV.pdf"
            download
            className="flex items-center text-gray-900 bg-white gap-2 py-2 px-7 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition-all group broder border-black/10"
          >
            Download CV{" "}
            <HiDownload className="opacity-70 group-hover:translate-x-1" />
          </a>
          {socialLinksData.map((social) => (
            <SocialLink
              key={social.label}
              href={social.href}
              icon={social.icon}
              label={social.label}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
