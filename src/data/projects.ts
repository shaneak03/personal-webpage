export type Project = {
  title: string;
  description: string;
  tech: string[];
};

export const projects: Project[] = [
  {
    title: "Personal Website",
    description:
      "A modern portfolio website built with Next.js, React, and TailwindCSS featuring HeroUI components.",
    tech: ["Next.js", "React", "TypeScript", "TailwindCSS", "HeroUI"],
  },
  {
    title: "Coming Soon",
    description: "More projects coming soon!",
    tech: [],
  },
];