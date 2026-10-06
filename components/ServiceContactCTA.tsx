import Link from "next/link";
import { ArrowRight, Phone, MapPin } from "lucide-react";

interface ServiceContactCTAProps {
  title?: string;
  description?: string;
}

export default function ServiceContactCTA({
  title = "¿Hablamos de tu caso y objetivos?",
  description = "Pide cita o consúltanos cualquier duda sin compromiso. Te acompañamos tanto en clínica sanitaria (Fénix Nido) como en gimnasio terapéutico (Fénix Atalaya).",
}: ServiceContactCTAProps) {
  return (
    <section className="w-full border-t border-zinc-200/80 py-16 sm:py-20 bg-zinc-50/70">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#111111]">
          {title}
        </h2>
        <p className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center gap-2 bg-[#C61E49] hover:bg-[#aa173d] text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-[#C61E49]/20 transition-all text-base w-full sm:w-auto"
          >
            <span>Pedir cita o escribirnos</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="tel:605973833"
            className="inline-flex items-center justify-center gap-2 border border-zinc-300 hover:border-zinc-400 text-[#111111] hover:bg-white bg-white/80 font-medium px-8 py-3.5 rounded-xl shadow-xs transition-all text-base w-full sm:w-auto"
          >
            <Phone className="w-4 h-4 text-[#C61E49]" />
            <span>Llamar al 605 973 833</span>
          </a>
        </div>

        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-zinc-500">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#C61E49] shrink-0" />
            <span>Fénix Nido: Paseo Hospital Militar 11</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#C61E49] shrink-0" />
            <span>Fénix Atalaya: Paseo Hospital Militar 9</span>
          </div>
        </div>
      </div>
    </section>
  );
}
