"use client";

import { navItems } from "@/lib/site";
import { Menu, X } from "lucide-react";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (value) => setScrolled(value > 24));
  }, [scrollY]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6"
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-500 md:px-6 ${
          scrolled
            ? "border-white/12 bg-slate-950/70 shadow-glow backdrop-blur-xl"
            : "border-white/8 bg-white/[0.03] backdrop-blur-md"
        }`}
      >
        <Link href="#inicio" className="flex items-center gap-3" aria-label="Ir al inicio">
          <div className="relative h-10 w-[132px]">
            <Image
              src="/brand/logo-qts-white.png"
              alt="Quality Techno Services"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative text-sm text-slate-200 transition hover:text-white"
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-brand-300 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="#contacto"
            className="group relative inline-flex items-center overflow-hidden rounded-full border border-brand-300/30 bg-brand-500/12 px-5 py-3 text-sm font-medium text-white transition hover:border-brand-200/60 hover:bg-brand-500/18"
          >
            <span className="relative z-10">Solicitar asesoría</span>
            <span className="absolute inset-y-0 left-0 w-10 bg-white/25 blur-xl transition duration-700 group-hover:translate-x-[260px]" />
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="mx-auto mt-3 max-w-7xl rounded-[28px] border border-white/12 bg-slate-950/90 p-4 shadow-glow backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm text-slate-200 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-2xl border border-brand-300/30 bg-brand-500/12 px-4 py-3 text-sm font-medium text-white"
            >
              Solicitar asesoría
            </Link>
          </nav>
        </div>
      ) : null}
    </motion.header>
  );
}
