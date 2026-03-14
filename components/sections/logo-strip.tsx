import Image from "next/image";

const logos = [
  { name: "Flowserve", path: "/brand/manufacturers/flowserve.svg" },
  { name: "AGI Industries", path: "/brand/manufacturers/agi.svg" },
  { name: "NOV", path: "/brand/manufacturers/nov.svg" },
  {
    name: "Unique Polymer Systems",
    path: "/brand/manufacturers/unique-polymer-systems.svg"
  }
];

export function LogoStrip() {
  const duplicated = [...logos, ...logos];

  return (
    <section className="border-y border-slate-200 bg-[#eef2f5] py-5">
      <div className="mx-auto max-w-7xl overflow-hidden px-5 md:px-6">
        <div className="mb-4 flex items-center justify-between gap-6">
          <p className="text-[11px] uppercase tracking-[0.28em] text-slate-500">
            Marcas clave representadas
          </p>
          <p className="hidden text-sm text-slate-500 md:block">
            Respaldo visual premium con contraste más limpio y corporativo
          </p>
        </div>
        <div className="group relative overflow-hidden rounded-full border border-slate-200 bg-white px-4 py-4 shadow-premium">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-[linear-gradient(90deg,#eef2f5,transparent)]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-[linear-gradient(270deg,#eef2f5,transparent)]" />
          <div className="flex min-w-max animate-marquee gap-4 group-hover:[animation-play-state:paused]">
            {duplicated.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex min-w-[220px] items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-8 py-4"
              >
                <div className="relative h-7 w-full max-w-[150px]">
                  <Image src={logo.path} alt={logo.name} fill className="object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
