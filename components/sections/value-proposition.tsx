import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ShieldCheck, Wrench, Workflow } from "lucide-react";

const columns = [
  {
    title: "El problema",
    icon: ShieldCheck,
    text:
      "Las industrias críticas no pueden sostener fallas recurrentes, improvisación técnica ni proveedores sin respaldo operativo real."
  },
  {
    title: "La intervención",
    icon: Workflow,
    text:
      "Quality Techno Services conecta ingeniería aplicada, representación estratégica y soporte especializado para tomar decisiones con mejor sustento técnico."
  },
  {
    title: "El resultado",
    icon: Wrench,
    text:
      "Más confiabilidad, más control y una ruta de trabajo más sólida para activos y procesos donde la continuidad operativa no es opcional."
  }
];

export function ValueProposition() {
  return (
    <section id="propuesta" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-6">
        <SectionHeading
          eyebrow="Problema y propuesta de valor"
          title="Respaldo técnico para operaciones donde fallar no es opción"
          description="La landing conecta el reto industrial con una propuesta clara: soporte consultivo, coordinación técnica y soluciones estratégicas para activos críticos, sin humo comercial ni promesas vacías."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {columns.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={0.08 * index}>
                <div className="group relative h-full overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] p-7 shadow-premium transition duration-500 hover:-translate-y-1 hover:border-brand-300/25">
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent_36%),radial-gradient(circle_at_top_right,rgba(68,130,255,0.16),transparent_30%)]" />
                  <div className="relative z-10">
                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/12 bg-white/5 text-brand-100">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-4 text-base leading-7 text-slate-300">{item.text}</p>
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
