import { ArrowUpRight } from "lucide-react";

type PremiumCardProps = {
  eyebrow?: string;
  title: string;
  description: string;
  bullets?: string[];
  className?: string;
};

export function PremiumCard({
  eyebrow,
  title,
  description,
  bullets,
  className = ""
}: PremiumCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-7 shadow-premium transition duration-500 hover:-translate-y-1 hover:border-brand-300/30 hover:bg-white/[0.06] ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(65,132,255,0.16),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.05),transparent_40%)] opacity-80" />
      <div className="relative z-10">
        {eyebrow ? (
          <div className="mb-4 text-[11px] uppercase tracking-[0.24em] text-brand-200">
            {eyebrow}
          </div>
        ) : null}
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-white md:text-2xl">{title}</h3>
          <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/5 text-brand-100 transition duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:bg-brand-500/15">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
        <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">{description}</p>
        {bullets?.length ? (
          <ul className="mt-6 space-y-3">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3 text-sm leading-6 text-slate-200">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-300" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <div className="pointer-events-none absolute -inset-x-20 -bottom-24 h-32 bg-[radial-gradient(circle,rgba(95,151,255,0.22),transparent_60%)] opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />
    </div>
  );
}
