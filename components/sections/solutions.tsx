import { AmbientImagePanel } from "@/components/ui/ambient-image-panel";
import { PremiumCard } from "@/components/ui/premium-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/lib/site";
import Link from "next/link";

export function Solutions() {
  return (
    <section id="soluciones" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-6">
        <SectionHeading
          eyebrow="Soluciones principales"
          title="Capacidades construidas para ambientes industriales de alta exigencia"
          description="Tres bloques de servicio con peso visual real, enfoque técnico y estructura de conversión clara para que un decisor entienda rápido dónde encaja la empresa y por qué vale la pena conversar."
        />

        <div className="mt-16 space-y-8">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.08}>
              <div className="grid gap-6 lg:grid-cols-[0.94fr_1.06fr]">
                <AmbientImagePanel
                  desktopImage={service.desktopImage}
                  mobileImage={service.mobileImage}
                  label={service.eyebrow}
                  className="min-h-[320px] lg:min-h-[420px]"
                />
                <PremiumCard
                  eyebrow={service.eyebrow}
                  title={service.title}
                  description={service.description}
                  bullets={service.bullets}
                  className="flex h-full flex-col justify-between"
                />
              </div>
              <div className="mt-4 flex justify-end">
                <Link
                  href="#contacto"
                  className="inline-flex items-center rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm text-slate-100 transition hover:border-brand-300/35 hover:bg-brand-500/10"
                >
                  Solicitar evaluación técnica
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
