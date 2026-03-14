import { AmbientImagePanel } from "@/components/ui/ambient-image-panel";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { industries } from "@/lib/site";

export function Industries() {
  return (
    <section id="industrias" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-6">
        <SectionHeading
          eyebrow="Sectores estratégicos"
          title="Presencia visual fuerte para industrias donde la continuidad operativa tiene mayor peso"
          description="Nada de listas planas. Esta sección funciona como un mosaico premium para comunicar amplitud sectorial con una presentación más ejecutiva y memorable."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {industries.map((industry, index) => (
            <Reveal key={industry.title} delay={index * 0.05}>
              <div className="group relative overflow-hidden rounded-[28px] border border-white/10">
                <AmbientImagePanel
                  desktopImage={industry.desktopImage}
                  mobileImage={industry.mobileImage}
                  className="min-h-[240px] rounded-[28px] border-0 shadow-none"
                />
                <div className="absolute inset-0 flex items-end p-6">
                  <div className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 backdrop-blur-md transition duration-500 group-hover:bg-black/35">
                    <h3 className="text-lg font-semibold text-white">{industry.title}</h3>
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
