import { projectsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  gitUrl,
  demoUrl
}: ProjectProps) {
  return (
    <div className="group mb-3 sm:mb-8 last:mb-0">
      <section className="bg-gray-50 mb-4 max-w-3xl border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative hover:bg-gray-100 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className={`flex flex-wrap mt-4 gap-2 codeFont font-base`}>
            {tags.map((tag, index) => (
              <li
                className="bg-slate-800 hover:bg-slate-200 px-3 py-1 text-sm text-white hover:text-violet-800 rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="mt-8 sm:mb-2 flex space-x-4 font-medium">
            <Link href={gitUrl}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition"
                target="_blank"
                rel="noopener noreferrer"
                >
                GitHub
            </Link>
            <Link 
            href={demoUrl}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
            </Link>
          </div>
        </div>

        <Image
          src={imageUrl}
          height={500}
          width={500}
          alt="Project Image"
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </div>
  );
}
