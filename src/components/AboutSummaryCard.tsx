import type { AboutSummaryCard as AboutSummaryCardType } from "@/data/timeline";

interface AboutSummaryCardProps {
  card: AboutSummaryCardType;
}

export default function AboutSummaryCard({ card }: AboutSummaryCardProps) {
  return (
    <div className="rounded-xl border border-[#e9ecef] bg-[#f8f9fa] p-5 dark:border-white/[0.08] dark:bg-white/[0.03]">
      <p className={`mb-2 text-xs font-semibold uppercase tracking-[0.22em] ${card.accentClassName}`}>
        {card.label}
      </p>
      <p className="text-sm leading-7 text-[#6c757d] dark:text-white/40">
        {card.description}
      </p>
    </div>
  );
}
