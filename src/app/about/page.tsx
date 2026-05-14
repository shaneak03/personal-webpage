import AboutSummaryCard from "@/components/AboutSummaryCard";
import AboutTimelineCard from "@/components/AboutTimelineCard";
import MotionReveal from "@/components/MotionReveal";
import { aboutIntro, aboutOutro, aboutSummaryCards, timeline } from "@/data/timeline";

export default function About() {
  return (
    <main className="min-h-screen px-4 pt-48 pb-32 sm:pt-36 sm:pb-24">
      <div className="mx-auto max-w-5xl">

        <MotionReveal className="text-center mb-16 pt-8">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-[#adb5bd] dark:text-white/30">
            {aboutIntro.eyebrow}
          </p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-[#212529] md:text-5xl dark:text-white">
            {aboutIntro.titlePrefix}{" "}
            <span className="bg-gradient-to-r from-[#7c3aed] via-[#06b6d4] to-[#ec4899] bg-clip-text text-transparent dark:from-[#a78bfa] dark:via-[#22d3ee] dark:to-[#f472b6]">
              {aboutIntro.titleHighlight}
            </span>
          </h1>
          <p className="mx-auto max-w-3xl text-base leading-7 text-[#6c757d] md:text-lg dark:text-white/40">
            {aboutIntro.description}
          </p>
        </MotionReveal>

        <MotionReveal
          delay={0.08}
          className="mb-10 rounded-2xl border border-[#e9ecef] bg-white p-8 shadow-[0_1px_4px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.05)] dark:border-white/[0.09] dark:bg-white/[0.05] dark:shadow-none dark:backdrop-blur-md"
        >
          <div className="grid gap-6 md:grid-cols-3">
            {aboutSummaryCards.map((card) => (
              <AboutSummaryCard key={card.id} card={card} />
            ))}
          </div>
        </MotionReveal>

        <section className="relative">
          <div className="absolute left-[1.1rem] top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-transparent via-[#dee2e6] to-transparent md:block dark:via-white/[0.12]" />
          <div className="space-y-10">
            {timeline.map((entry, index) => (
              <AboutTimelineCard key={entry.id} entry={entry} index={index} />
            ))}
          </div>
        </section>

        <MotionReveal
          delay={0.32}
          className="mt-10 rounded-2xl border border-[#e9ecef] bg-white/60 p-6 dark:border-white/[0.09] dark:bg-white/[0.03] dark:backdrop-blur-md"
        >
          <p className="text-sm leading-7 text-[#6c757d] sm:text-base dark:text-white/40">
            {aboutOutro}
          </p>
        </MotionReveal>

      </div>
    </main>
  );
}
