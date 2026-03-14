import Link from "next/link";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{ backgroundImage: "url('/images/cta/cta-mobile.webp')" }}
      />
      <div
        className="absolute inset-0 hidden bg-cover bg-center md:block"
        style={{ backgroundImage: "url('/images/cta/cta-desktop.webp')" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,12,22,0.40),rgba(6,12,22,0.72)_45%,rgba(6,12,22,0.9))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(109,139,166,0.18),transparent_28%)]" />
      <div className="absolute inset-0 bg-radial-grid bg-[size:24px_24px] opacity-[0.08]" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 text-center md:px-6">
        <div className="mx-auto max-w-4xl rounded-[34px] border border-white/14 bg-[rgba(10,17,29,0.38)] p-8 shadow-glow backdrop-blur-xl md:p-12">
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-200">
            Cierre comercial premium
          </p>
          <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight text-white md:text-6xl">
            Tecnología, ingeniería y soporte para activos industriales críticos
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-200 md:text-lg">
            Cuando la operación exige respaldo real, la diferencia está en quién
            acompaña el diagnóstico, la solución y la continuidad después de la entrega.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="#contacto"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/18 bg-white/12 px-6 py-4 text-sm font-semibold text-white transition hover:border-white/28 hover:bg-white/18"
            >
              <span className="relative z-10">Solicitar Asesoría Técnica Especializada</span>
              <span className="absolute inset-y-0 left-[-20%] w-10 animate-shine bg-white/40 blur-lg" />
            </Link>
            <Link
              href="https://wa.me/50768987181?text=Hola,%20quiero%20hablar%20con%20un%20ingeniero%20especialista%20de%20Quality%20Techno%20Services."
              target="_blank"
              className="inline-flex items-center justify-center rounded-full border border-white/14 bg-[rgba(255,255,255,0.08)] px-6 py-4 text-sm font-medium text-white transition hover:bg-[rgba(255,255,255,0.14)]"
            >
              Hablar con un Ingeniero Especialista
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
