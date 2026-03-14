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
              <div className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] shadow-premium transition duration-500 hover:-translate-y-1 hover:border-brand-300/25">
                <div className="grid gap-0 md:grid-cols-[0.95fr_1.05fr]">
                  <AmbientImagePanel
                    desktopImage={manufacturer.desktopImage}
                    mobileImage={manufacturer.mobileImage}
                    label={manufacturer.tag}
                    className="min-h-[300px] rounded-none border-0 shadow-none"
                  />
                  <div className="relative p-7">
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent_34%),radial-gradient(circle_at_top_right,rgba(63,131,255,0.16),transparent_28%)]" />
                    <div className="relative z-10">
                      <div className="relative h-10 w-[170px]">
                        <Image
                          src={manufacturer.logo}
                          alt={manufacturer.name}
                          fill
                          className="object-contain object-left"
                        />
                      </div>
                      <h3 className="mt-8 text-2xl font-semibold text-white">
                        {manufacturer.headline}
                      </h3>
                      <p className="mt-4 text-base leading-7 text-slate-300">
                        {manufacturer.description}
                      </p>
                      <div className="mt-8 flex flex-wrap gap-3">
                        <Link
                          href="#contacto"
                          className="rounded-full border border-brand-300/30 bg-brand-500/10 px-4 py-2 text-sm font-medium text-white transition hover:border-brand-200/50 hover:bg-brand-500/18"
                        >
                          Solicitar asesoría
                        </Link>
                        <Link
                          href="#proceso"
                          className="rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm text-slate-100 transition hover:bg-white/10"
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
