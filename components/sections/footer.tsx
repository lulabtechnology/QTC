import { siteConfig } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#07111f] py-12">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[1.2fr_0.8fr] md:px-6">
        <div>
          <div className="relative h-10 w-[150px]">
            <Image
              src="/brand/logo-qts-white.png"
              alt="Quality Techno Services"
              fill
              className="object-contain object-left"
            />
          </div>
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">
            Landing page premium orientada a conversión para presentar ingeniería aplicada,
            representación estratégica y soporte especializado en sectores donde la
            continuidad operativa no es opcional.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Contacto
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="transition hover:text-white">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${siteConfig.whatsappDigits}`}
                  target="_blank"
                  className="transition hover:text-white"
                >
                  {siteConfig.whatsapp}
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/placeholder"
                  target="_blank"
                  className="transition hover:text-white"
                >
                  LinkedIn corporativo
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Información
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>
                <Link href="#contacto" className="transition hover:text-white">
                  Aviso de privacidad
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="transition hover:text-white">
                  Política de confidencialidad industrial
                </Link>
              </li>
              <li>Enlace editable para dirección física o referencia institucional</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
