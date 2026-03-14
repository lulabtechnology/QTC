"use client";

import { trustBadges } from "@/lib/site";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 120]);
  const glowY = useTransform(scrollY, [0, 700], [0, -80]);

  const textVariant = {
    hidden: { opacity: 0, y: 26 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.18 + index * 0.08,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 md:hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero/hero-mobile.webp')" }}
        />
      </motion.div>
      <motion.div style={{ y }} className="absolute inset-0 hidden md:block">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero/hero-desktop.webp')" }}
        />
      </motion.div>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,12,22,0.36),rgba(6,12,22,0.64)_36%,rgba(6,12,22,0.88)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(109,139,166,0.18),transparent_28%)]" />
      <div className="absolute inset-0 bg-radial-grid bg-[size:24px_24px] opacity-[0.08]" />

      <motion.div
        style={{ y: glowY }}
        className="pointer-events-none absolute left-[-5%] top-[12%] h-72 w-72 rounded-full bg-white/10 blur-[120px]"
      />
      <motion.div
        style={{ y: glowY }}
        className="pointer-events-none absolute right-[-2%] top-[32%] h-64 w-64 rounded-full bg-brand-300/16 blur-[120px]"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,transparent,rgba(244,246,248,1))]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-12 pt-32 md:px-6">
        <div className="grid w-full gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="max-w-4xl">
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0}
              variants={textVariant}
              className="mb-6 flex flex-wrap gap-2"
            >
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex rounded-full border border-white/16 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.25em] text-slate-100 backdrop-blur"
                >
                  {badge}
                </span>
              ))}
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              custom={1}
              variants={textVariant}
              className="max-w-5xl text-balance text-[2.35rem] font-semibold leading-[1.02] text-white md:text-6xl lg:text-7xl"
            >
              Soluciones Industriales Críticas con Respaldo Técnico Autorizado
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              custom={2}
              variants={textVariant}
              className="mt-6 max-w-2xl text-pretty text-base leading-8 text-slate-200 md:text-xl"
            >
              Ingeniería aplicada, representación estratégica y soporte especializado
              para industrias donde la continuidad operativa no es opcional.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              custom={3}
              variants={textVariant}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
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
                className="inline-flex items-center justify-center rounded-full border border-white/16 bg-[rgba(12,22,38,0.34)] px-6 py-4 text-sm font-medium text-white transition hover:bg-[rgba(12,22,38,0.48)]"
              >
                Hablar con un Ingeniero Especialista
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 22, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.42, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative ml-auto hidden max-w-[500px] lg:block"
          >
            <div className="relative overflow-hidden rounded-[32px] border border-white/16 bg-[rgba(255,255,255,0.10)] p-6 shadow-glow backdrop-blur-md">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_30%),radial-gradient(circle_at_top_left,rgba(255,255,255,0.10),transparent_28%)]" />
              <div className="relative z-10 grid gap-4">
                <div className="rounded-[24px] border border-white/14 bg-[rgba(8,16,28,0.26)] p-5">
                  <p className="text-[11px] uppercase tracking-[0.26em] text-slate-200">
                    Respaldo operativo
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-white">
                    Confianza operativa respaldada por fabricantes y soporte especializado
                  </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    "Continuidad operativa",
                    "Diagnóstico especializado",
                    "Coordinación con fabricante",
                    "Acompañamiento postventa"
                  ].map((item, index) => (
                    <div
                      key={item}
                      className={`rounded-[22px] border border-white/14 bg-[rgba(255,255,255,0.08)] p-5 ${
                        index % 2 === 0 ? "animate-floatSlow" : ""
                      }`}
                    >
                      <div className="text-sm font-medium text-white">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
