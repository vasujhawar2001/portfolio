import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";

import Image from "next/image";

export default function Skills() {

  return (
    <section
      id="skills"
      className="mb-28 scroll-mt-28 text-center sm:mb-40
      flex relative flex-col items-center"
    >
      <SectionHeading>My skills</SectionHeading>
      <div className="mt-10 grid grid-cols-4 gap-4 px-4">
      {skillsData.map((skill, index) => (
          <Image
          src={skill.url}
          height={25}
          width={25}
          quality={95}
          alt={skill.name}
          className='rounded-full object-cover w-20 h-20 xl:w-28
          xl:h-28 filter transition durtaion-300 ease-in-out'
            key={index}
          />
      ))}
      </div>

    </section>
  );
}