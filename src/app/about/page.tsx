import AboutSummaryCard from "@/components/AboutSummaryCard";
import AboutTimelineCard from "@/components/AboutTimelineCard";
import MotionReveal from "@/components/MotionReveal";
import { aboutIntro, aboutOutro, aboutSummaryCards, timeline } from "@/data/timeline";

export default function About() {
  return (
    <main className="min-h-screen px-4 pt-48 pb-32 sm:pt-36 sm:pb-24">
      <div className="mx-auto max-w-5xl">
        <MotionReveal className="text-center mb-16 pt-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-orange-300/80">
            {aboutIntro.eyebrow}
          </p>
          <h1 className="mb-4 text-4xl font-extrabold text-white md:text-5xl">
            {aboutIntro.titlePrefix} <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">{aboutIntro.titleHighlight}</span>
          </h1>
          <p className="mx-auto max-w-3xl text-base leading-7 text-slate-300 md:text-lg">
            {aboutIntro.description}
          </p>
        </MotionReveal>

        <MotionReveal
          delay={0.08}
          className="mb-10 rounded-[2rem] border border-gray-700/50 bg-black/80 p-8 text-white shadow-2xl backdrop-blur-md"
        >
          <div className="grid gap-6 md:grid-cols-3">
            {aboutSummaryCards.map((card) => (
              <AboutSummaryCard key={card.id} card={card} />
            ))}
          </div>
        </MotionReveal>

        <section className="relative">
          <div className="absolute left-[1.1rem] top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-white/0 via-white/20 to-white/0 md:block" />

          <div className="space-y-10">
            {timeline.map((entry, index) => (
              <AboutTimelineCard key={entry.id} entry={entry} index={index} />
            ))}
          </div>
        </section>

        <MotionReveal
          delay={0.32}
          className="mt-10 rounded-[2rem] border border-white/10 bg-gradient-to-r from-white/[0.06] to-white/[0.02] p-6 text-white backdrop-blur-md"
        >
          <p className="text-sm leading-7 text-slate-300 sm:text-base">
            {aboutOutro}
          </p>
        </MotionReveal>
      </div>
    </main>
  );
}
