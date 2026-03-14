import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ShieldCheck, Wrench, Workflow } from "lucide-react";

const columns = [
  {
    title: "El problema real",
    text:
      "Las industrias críticas no pueden permitirse improvisación técnica, fallas repetitivas ni proveedores que desaparecen cuando la operación exige respuesta.",
    icon: ShieldCheck
  },
  {
    title: "La propuesta correcta",
    text:
      "Quality Techno Services se presenta como un respaldo consultivo y técnico para evaluar, coordinar, acompañar y sostener decisiones industriales con mayor criterio.",
    icon: Workflow
  },
  {
    title: "El valor visible",
    text:
      "La combinación entre representación estratégica, soporte especializado y acompañamiento postventa ayuda a reducir riesgo operativo y ganar más continuidad.",
    icon: Wrench
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
                <div className="group relative h-full overflow-hidden rounded-[30px] border border-slate-200 bg-white p-7 shadow-premium transition duration-500 hover:-translate-y-1 hover:border-brand-300/45">
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(248,250,252,0.88)_48%,transparent),radial-gradient(circle_at_top_right,rgba(148,170,188,0.16),transparent_30%)]" />
                  <div className="relative z-10">
                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-brand-600">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-4 text-base leading-7 text-slate-600">{item.text}</p>
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
