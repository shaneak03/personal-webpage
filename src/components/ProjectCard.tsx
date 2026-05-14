"use client";

import MediaCarousel from "@/components/MediaCarousel";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  size?: "sm" | "md" | "featured";
}

export default function ProjectCard({ project, size = "md" }: ProjectCardProps) {
  const highlights = project.highlights ?? [];
  const tech = project.tech ?? [];
  const media = project.media ?? [];

  if (size === "sm") {
    return (
      <article className="h-full rounded-2xl border border-[#e9ecef] bg-white p-5 shadow-[0_1px_4px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.09)] dark:border-white/[0.09] dark:bg-white/[0.05] dark:shadow-none dark:backdrop-blur-md dark:hover:border-white/[0.16] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-[#adb5bd] dark:text-white/50">
          {project.period}
        </p>
        <h2 className="mb-2 text-lg font-bold tracking-tight text-[#212529] dark:text-white">
          {project.title}
        </h2>
        <p className="mb-4 text-sm leading-6 text-[#6c757d] dark:text-white/60">
          {project.description}
        </p>
        {tech.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-1.5">
            {tech.map((t) => (
              <span key={t} className="rounded-md border border-[#dee2e6] bg-[#e9ecef] px-2.5 py-0.5 text-xs text-[#495057] dark:border-violet-500/[0.22] dark:bg-violet-500/[0.14] dark:text-[#a78bfa]">
                {t}
              </span>
            ))}
          </div>
        )}
        {project.links && project.links.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer"
                className="rounded-lg border border-[#ced4da] bg-[#f1f3f5] px-3 py-1.5 text-xs font-medium text-[#495057] transition-all duration-200 hover:border-[#adb5bd] hover:bg-[#e9ecef] dark:border-white/[0.10] dark:bg-white/[0.05] dark:text-white/60 dark:hover:bg-white/[0.10]">
                {link.label}
              </a>
            ))}
          </div>
        )}
      </article>
    );
  }

  if (size === "featured") {
    return (
      <article className="rounded-2xl border border-[#e9ecef] bg-white p-8 shadow-[0_1px_4px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.09)] dark:border-white/[0.09] dark:bg-white/[0.05] dark:shadow-none dark:backdrop-blur-md dark:hover:border-white/[0.16] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] md:p-10">
        <div className="md:grid md:grid-cols-[1fr_auto] md:gap-8">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#adb5bd] dark:text-white/50">
              {project.period}
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#212529] md:text-4xl dark:text-white">
              {project.title}
            </h2>
            <p className="mb-6 max-w-2xl leading-7 text-[#6c757d] dark:text-white/60">
              {project.description}
            </p>
            {highlights.length > 0 && (
              <ul className="mb-6 space-y-2.5 text-sm leading-6 text-[#6c757d] dark:text-white/55">
                {highlights.map((h) => (
                  <li key={h} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] dark:from-[#a78bfa] dark:to-[#22d3ee]" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            )}
            {tech.length > 0 && (
              <div className="mb-6 flex flex-wrap gap-2">
                {tech.map((t) => (
                  <span key={t} className="rounded-md border border-[#dee2e6] bg-[#e9ecef] px-3 py-1 text-sm text-[#495057] dark:border-violet-500/[0.22] dark:bg-violet-500/[0.14] dark:text-[#a78bfa]">
                    {t}
                  </span>
                ))}
              </div>
            )}
            {project.links && project.links.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noreferrer"
                    className="rounded-lg border border-[#ced4da] bg-[#f1f3f5] px-4 py-2 text-sm font-medium text-[#495057] transition-all duration-200 hover:border-[#adb5bd] hover:bg-[#e9ecef] dark:border-white/[0.10] dark:bg-white/[0.05] dark:text-white/60 dark:hover:bg-white/[0.10]">
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
          {media.length > 0 && (
            <div className="mt-6 md:mt-0 md:w-72">
              <MediaCarousel items={media} placeholders={project.mediaPlaceholders} title={project.title} />
            </div>
          )}
        </div>
      </article>
    );
  }

  // default "md"
  return (
    <article className="h-full rounded-2xl border border-[#e9ecef] bg-white p-8 shadow-[0_1px_4px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.09)] dark:border-white/[0.09] dark:bg-white/[0.05] dark:shadow-none dark:backdrop-blur-md dark:hover:border-white/[0.16] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#adb5bd] dark:text-white/50">
        {project.period}
      </p>
      <h2 className="mb-3 text-2xl font-bold tracking-tight text-[#212529] dark:text-white">
        {project.title}
      </h2>
      <p className="mb-5 leading-7 text-[#6c757d] dark:text-white/60">
        {project.description}
      </p>
      {highlights.length > 0 && (
        <ul className="mb-5 space-y-3 text-sm leading-6 text-[#6c757d] dark:text-white/55">
          {highlights.map((h) => (
            <li key={h} className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] dark:from-[#a78bfa] dark:to-[#22d3ee]" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      )}
      {tech.length > 0 && (
        <div className="mb-5 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span key={t} className="rounded-md border border-[#dee2e6] bg-[#e9ecef] px-3 py-1 text-sm text-[#495057] dark:border-violet-500/[0.22] dark:bg-violet-500/[0.14] dark:text-[#a78bfa]">
              {t}
            </span>
          ))}
        </div>
      )}
      <MediaCarousel items={media} placeholders={project.mediaPlaceholders} title={project.title} />
      {project.links && project.links.length > 0 && (
        <div className="flex flex-wrap gap-3">
          {project.links.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer"
              className="rounded-lg border border-[#ced4da] bg-[#f1f3f5] px-4 py-2 text-sm font-medium text-[#495057] transition-all duration-200 hover:border-[#adb5bd] hover:bg-[#e9ecef] dark:border-white/[0.10] dark:bg-white/[0.05] dark:text-white/60 dark:hover:bg-white/[0.10]">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
