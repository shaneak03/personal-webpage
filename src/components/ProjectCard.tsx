import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="bg-black/80 backdrop-blur-md border border-gray-700/50 rounded-3xl p-8 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
      <h2 className="text-2xl font-bold text-white mb-3">{project.title}</h2>
      <p className="text-gray-300 mb-4">{project.description}</p>

      {project.tech.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
