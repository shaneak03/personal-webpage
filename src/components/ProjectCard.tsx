"use client";

import MediaCarousel from "@/components/MediaCarousel";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const highlights = project.highlights ?? [];
  const tech = project.tech ?? [];
  const media = project.media ?? [];

  return (
    <article className="bg-black/80 backdrop-blur-md border border-gray-700/50 rounded-3xl p-8 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-orange-300/80">
        {project.period}
      </p>
      <h2 className="mb-3 text-2xl font-bold text-white">{project.title}</h2>
      <p className="mb-5 text-gray-300 leading-7">{project.description}</p>

      {highlights.length > 0 && (
        <ul className="mb-5 space-y-3 text-sm leading-6 text-gray-300">
          {highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-orange-400 to-pink-500" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      )}

      {tech.length > 0 && (
        <div className="mb-5 flex flex-wrap gap-2">
          {tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      <MediaCarousel
        items={media}
        placeholders={project.mediaPlaceholders}
        title={project.title}
      />

      {project.links && project.links.length > 0 && (
        <div className="flex flex-wrap gap-3">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-white/10"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
