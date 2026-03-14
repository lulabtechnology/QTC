import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { whyQts } from "@/lib/site";
import { CheckCircle2 } from "lucide-react";

export function WhyQts() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <SectionHeading
            eyebrow="Por qué Quality Techno Services"
            title="Una propuesta pensada para transmitir autoridad sin verse rígida ni genérica"
            description="Esta sección resume los diferenciales más comerciales y más técnicos de la marca con una composición limpia, elegante y de rápida lectura."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {whyQts.map((item, index) => (
              <Reveal key={item} delay={index * 0.05}>
                <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-premium">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-brand-500" />
                    <p className="text-sm leading-7 text-slate-700">{item}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
