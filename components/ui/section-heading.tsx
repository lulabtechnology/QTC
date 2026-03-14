import { Reveal } from "@/components/ui/reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  const aligned = align === "center" ? "mx-auto text-center" : "";
  const max = align === "center" ? "max-w-3xl" : "max-w-2xl";

  return (
    <div className={`${max} ${aligned}`}>
      {eyebrow ? (
        <Reveal>
          <div className="mb-4 inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-brand-600 shadow-sm">
            {eyebrow}
          </div>
        </Reveal>
      ) : null}
      <Reveal delay={0.05}>
        <h2 className="text-balance text-3xl font-semibold leading-tight text-slate-900 md:text-5xl">
          {title}
        </h2>
      </Reveal>
      <Reveal delay={0.12}>
        <p className="mt-5 text-pretty text-base leading-7 text-slate-600 md:text-lg">
          {description}
        </p>
      </Reveal>
    </div>
  );
}
