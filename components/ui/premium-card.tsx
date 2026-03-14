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
      className={`group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-7 shadow-premium transition duration-500 hover:-translate-y-1 hover:border-brand-300/50 hover:bg-slate-50 ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(148,170,188,0.16),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.85),rgba(248,250,252,0.72)_60%,transparent)] opacity-90" />
      <div className="relative z-10">
        {eyebrow ? (
          <div className="mb-4 text-[11px] uppercase tracking-[0.24em] text-brand-600">
            {eyebrow}
          </div>
        ) : null}
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-slate-900 md:text-2xl">{title}</h3>
          <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-brand-600 transition duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:bg-brand-50">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
        <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">{description}</p>
        {bullets?.length ? (
          <ul className="mt-6 space-y-3">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3 text-sm leading-6 text-slate-700">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-500" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <div className="pointer-events-none absolute -inset-x-20 -bottom-24 h-32 bg-[radial-gradient(circle,rgba(148,170,188,0.18),transparent_60%)] opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />
    </div>
  );
}
