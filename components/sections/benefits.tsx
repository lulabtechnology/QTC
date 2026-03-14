import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { benefits } from "@/lib/site";
import { ChartColumnIncreasing, Shield, TimerReset, WalletCards, Waves } from "lucide-react";

const icons = [TimerReset, Shield, WalletCards, ChartColumnIncreasing, Waves];

export function Benefits() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-6">
        <SectionHeading
          eyebrow="Beneficios clave"
          title="Beneficios visibles para mantenimiento, operaciones y toma de decisión"
          description="La sección convierte atributos técnicos en resultados entendibles para ejecutivos industriales: menos riesgo, mejor confiabilidad y mejor justificación operativa."
          align="center"
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {benefits.map((benefit, index) => {
            const Icon = icons[index % icons.length];

            return (
              <Reveal key={benefit.title} delay={index * 0.05}>
                <div className="group relative h-full overflow-hidden rounded-[26px] border border-slate-200 bg-white p-6 shadow-premium transition duration-500 hover:-translate-y-1 hover:border-brand-300/45">
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(248,250,252,0.88)_42%,transparent),radial-gradient(circle_at_bottom_left,rgba(148,170,188,0.16),transparent_32%)]" />
                  <div className="relative z-10">
                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-brand-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">{benefit.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600">{benefit.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
