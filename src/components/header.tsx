"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";

export default function Header() {

  return (
    <header className="z-20 relative">
      <motion.div
        className="fixed top-0 left-1/2 h-16 w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg 
        shadow-gray-200 backdrop-blur-xl sm:top-6 sm:h-14 sm:max-w-2xl sm:rounded-full
       dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        <nav className="flex fixed top-1 left-1/2 -translate-x-1/2">
        <ul className="flex items-center justify-evenly text-base sm:text-base font-medium text-gray-500 sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="flex w-full items-center justify-center sm:px-4 px-3 py-3"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className="hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300"
                href={`/${link.hash}`}
                >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
      </motion.div>
    </header>
  );
}