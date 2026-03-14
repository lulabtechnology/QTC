import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/lib/site";

export function ProcessSection() {
  return (
    <section id="proceso" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-6">
        <SectionHeading
          eyebrow="Cómo funciona"
          title="Un proceso técnico visual, claro y orientado a ejecución real"
          description="La sección evita lo aburrido y organiza la ruta consultiva en una secuencia elegante, útil para explicar cómo se aterriza una solicitud industrial compleja."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-6">
          {processSteps.map((step, index) => (
            <Reveal key={step} delay={index * 0.05}>
              <div className="group relative h-full overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] p-5 shadow-premium transition duration-500 hover:-translate-y-1 hover:border-brand-300/25">
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent_36%)]" />
                <div className="relative z-10">
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-brand-500/12 text-sm font-semibold text-brand-100">
                    0{index + 1}
                  </div>
                  <p className="text-sm font-medium leading-6 text-white">{step}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
