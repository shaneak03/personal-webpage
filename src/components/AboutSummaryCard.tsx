import type { AboutSummaryCard as AboutSummaryCardType } from "@/data/timeline";

interface AboutSummaryCardProps {
  card: AboutSummaryCardType;
}

export default function AboutSummaryCard({ card }: AboutSummaryCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
      <p className={`mb-2 text-xs font-semibold uppercase tracking-[0.22em] ${card.accentClassName}`}>
        {card.label}
      </p>
      <p className="text-sm leading-7 text-slate-300">
        {card.description}
      </p>
    </div>
  );
}
