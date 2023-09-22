"use client";

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import {Typewriter} from 'react-simple-typewriter';
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import Link from 'next/link';

const Hero = () => {

  return (
    <section className='flex flex-col items-center justify-center pt-24 sm:pt-40'>
        <motion.div className='p-8'
            initial={{opacity:0, scale: 0}}
            animate={{opacity:1, scale: 1}}
            transition={{
                type:"tween",
                duration: 0.2
            }}
            >
            <Image src="/profile-pic.png" alt="profile-image" width={150} height={150} priority={true} quality="100"
            className='rounded-full h-42 w-42 border-4 border-white shadow-lg'/>
        </motion.div>
        <motion.div className='font-medium text-2xl sm:text-4xl hover:text-violet-500 text-center'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            >
            <Typewriter
            words={['Hi 👋🏻, I am Vasu.',
            "A Software Developer.",
            "<I love to code />",
            `Tech-Enthusiast.tsx`,
            "Chai or Coffee?☕"]}
            loop={true}
            cursor
            cursorStyle='_'
            delaySpeed={2000}
            deleteSpeed={80}
          />
            </motion.div>

        <motion.div
        className="flex flex-col mt-10 sm:flex-row items-center justify-center gap-y-2 sm:gap-4 text-md font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
        }}
      >
        <Link
          href="#contact" 
          className="group bg-gray-900 text-white hover:text-violet-500 px-7 py-3 flex items-center gap-2 rounded-full hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <Link
          className="group bg-slate-50 hover:text-violet-950 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-125 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/Resume.pdf"
          download
        >
          Resume{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </Link>

        <Link
          className="p-4 text-gray-700 hover:text-violet-500 flex items-center gap-2 text-3xl rounded-full hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/vasujhawar2001"
          target="_blank"
        >
          <FaGithubSquare />
        </Link>

        <Link
          className="p-4 text-gray-700 hover:text-violet-500 flex items-center gap-2 text-2xl  rounded-full hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/vasu-jhawar/"
          target="_blank"
        >
          <BsLinkedin />
        </Link>
      </motion.div>

    </section>
  )
}

export default Hero
