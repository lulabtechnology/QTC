import { MessageCircleMore } from "lucide-react";
import Link from "next/link";

export function FloatingWhatsapp() {
  return (
    <Link
      href="https://wa.me/50768987181?text=Hola,%20quiero%20solicitar%20asesor%C3%ADa%20t%C3%A9cnica%20especializada."
      target="_blank"
      aria-label="Abrir WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full border border-emerald-300/30 bg-emerald-500/16 px-5 py-3 text-sm font-medium text-white shadow-glow backdrop-blur-xl transition hover:-translate-y-1 hover:bg-emerald-500/24"
    >
      <span className="absolute inset-0 animate-pulseSoft rounded-full border border-emerald-300/20" />
      <MessageCircleMore className="relative z-10 h-5 w-5" />
      <span className="relative z-10 hidden sm:block">WhatsApp</span>
    </Link>
  );
}
