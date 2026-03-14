import { AmbientImagePanel } from "@/components/ui/ambient-image-panel";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { manufacturers } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";

export function Manufacturers() {
  return (
    <section id="fabricantes" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-6">
        <SectionHeading
          eyebrow="Fabricantes y marcas bandera"
          title="Un ecosistema visual premium para comunicar respaldo técnico internacional"
          description="La jerarquía visual posiciona a Flowserve como fabricante bandera, integra a AGI Industries como referencia estratégica y deja preparada una estructura elegante y editable para otras marcas clave."
        />

        <div className="mt-14 grid gap-6 xl:grid-cols-2">
          {manufacturers.map((manufacturer, index) => (
            <Reveal key={manufacturer.name} delay={index * 0.06}>
              <div className="group relative overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-premium transition duration-500 hover:-translate-y-1 hover:border-brand-300/45">
                <div className="grid gap-0 md:grid-cols-[0.95fr_1.05fr]">
                  <AmbientImagePanel
                    desktopImage={manufacturer.desktopImage}
                    mobileImage={manufacturer.mobileImage}
                    label={manufacturer.tag}
                    className="min-h-[300px] rounded-none border-0 shadow-none"
                  />
                  <div className="relative p-7">
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(248,250,252,0.9)_40%,transparent),radial-gradient(circle_at_top_right,rgba(148,170,188,0.14),transparent_28%)]" />
                    <div className="relative z-10">
                      <div className="relative h-10 w-[170px]">
                        <Image
                          src={manufacturer.logo}
                          alt={manufacturer.name}
                          fill
                          className="object-contain object-left"
                        />
                      </div>
                      <h3 className="mt-8 text-2xl font-semibold text-slate-900">
                        {manufacturer.headline}
                      </h3>
                      <p className="mt-4 text-base leading-7 text-slate-600">
                        {manufacturer.description}
                      </p>
                      <div className="mt-8 flex flex-wrap gap-3">
                        <Link
                          href="#contacto"
                          className="rounded-full border border-brand-300/40 bg-brand-500 px-4 py-2 text-sm font-medium text-white transition hover:border-brand-400 hover:bg-brand-600"
                        >
                          Solicitar asesoría
                        </Link>
                        <Link
                          href="#proceso"
                          className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-100"
                        >
                          Ver proceso
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
