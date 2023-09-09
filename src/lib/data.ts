export const links = [

  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Blogs",
    hash: "blogs",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Google Search",
    description:
      "Google Search Engine with features like Light/Dark Mode, Pagination, next-themes",
    tags: ["NEXT.js", "React", "TailwindCSS", "Google API"],
    imageUrl: "/sengine.png",
    gitUrl: "https://github.com/vasujhawar2001/sengine",
    demoUrl: "https://sengine.vercel.app/"
  },
  {
    title: "meTube",
    description:
      "Youtube Frontend Design build in 3 days",
    tags: ["HTML", "CSS","React", "MUI", "Youtube API"],
    imageUrl: "/ytclone.png",
    gitUrl: "https://github.com/vasujhawar2001/meTube",
    demoUrl: "https://vasujhawar2001.github.io/meTube/"
  },
  {
    title: "spaceNewsHub",
    description:
      "Application which gives you latest news imformation related to space.",
    tags: ["HTML", "CSS", "React", "spaceNewsFlight"],
    imageUrl: "/spacenewsapi.png",
    gitUrl: "https://github.com/vasujhawar2001/spaceNewsAPI",
    demoUrl: "https://vasujhawar2001.github.io/spaceNewsAPI/"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;