import MotionReveal from "@/components/MotionReveal";
import { MotionStagger, MotionStaggerItem } from "@/components/MotionStagger";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {

  return (
    <main className="min-h-screen px-4 pt-48 pb-32 sm:pt-36 sm:pb-24">
      <div className="max-w-5xl mx-auto">
        <MotionReveal className="text-center mb-16 pt-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            My <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h1>
        </MotionReveal>

        <MotionStagger className="grid gap-8 md:grid-cols-2" delayChildren={0.1}>
          {projects.map((project) => (
            <MotionStaggerItem key={project.title}>
              <ProjectCard project={project} />
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </div>
    </main>
  );
}
