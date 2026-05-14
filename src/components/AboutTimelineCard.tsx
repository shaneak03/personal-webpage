import MediaCarousel from "@/components/MediaCarousel";
import MotionReveal from "@/components/MotionReveal";
import type { TimelineEntry } from "@/data/timeline";

interface AboutTimelineCardProps {
  entry: TimelineEntry;
  index: number;
}

export default function AboutTimelineCard({ entry, index }: AboutTimelineCardProps) {
  return (
    <MotionReveal delay={0.12 + index * 0.06} className="relative md:pl-16">

      {/* Timeline dot */}
      <div className="absolute left-0 top-8 hidden md:flex">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#dee2e6] bg-white shadow-sm dark:border-white/[0.15] dark:bg-[#0c1428] dark:shadow-[0_0_24px_rgba(0,0,0,0.3)]">
          <span className="text-base leading-none">{entry.emoji}</span>
        </div>
      </div>

      <article className="overflow-hidden rounded-2xl border border-[#e9ecef] bg-white shadow-[0_1px_4px_rgba(0,0,0,0.04),0_4px_20px_rgba(0,0,0,0.06)] dark:border-white/[0.09] dark:bg-white/[0.05] dark:shadow-none dark:backdrop-blur-md">

        {/* Header */}
        <div className="border-b border-[#e9ecef] px-6 py-5 sm:px-8 dark:border-white/[0.08]">
          <p className={`mb-3 text-xs font-semibold uppercase tracking-[0.24em] bg-gradient-to-r ${entry.accent} bg-clip-text text-transparent`}>
            {entry.phase}
          </p>
          <h2 className="flex items-center gap-3 text-2xl font-bold text-[#212529] sm:text-3xl dark:text-white">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#e9ecef] bg-[#f8f9fa] text-2xl dark:border-white/[0.10] dark:bg-white/[0.04]">
              {entry.emoji}
            </span>
            <span>{entry.title}</span>
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#6c757d] sm:text-base dark:text-white/60">
            {entry.description}
          </p>
        </div>

        {/* Body */}
        <div className="grid gap-8 px-6 py-6 sm:px-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,1.05fr)] lg:items-start">
          <div>
            {entry.highlights && entry.highlights.length > 0 && (
              <ul className="space-y-3 text-sm leading-7 text-[#6c757d] dark:text-white/55">
                {entry.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className={`mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r ${entry.accent}`} />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <MediaCarousel
            items={entry.media}
            placeholders={entry.mediaPlaceholders}
            label="Memories"
            helperText="Click to expand each snapshot"
            title={entry.title}
            imageClassName="h-64 sm:h-72"
          />
        </div>
      </article>
    </MotionReveal>
  );
}
