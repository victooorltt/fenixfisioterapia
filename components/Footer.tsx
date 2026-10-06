import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#C61E49] border-t border-[#A5153A] text-white">
      <div className="max-w-6xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand & Brief */}
          <div className="space-y-4">
            <Link href="/" className="inline-block" aria-label="Fénix Fisioterapia">
              <img
                src="/logo.webp"
                alt="Fénix Fisioterapia"
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-white/80 leading-relaxed">
              Fisioterapia clínica y entrenamiento funcional especializado en Valladolid. Recupera tu calidad de vida con rigor científico y trato humano.
            </p>
          </div>

          {/* Sedes */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wide text-white uppercase">
              Nuestras Sedes
            </h4>
            <div className="space-y-4 text-sm">
              <div className="space-y-1">
                <div className="font-medium text-white flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-white/90 flex-shrink-0" />
                  <span>Fénix Nido</span>
                </div>
                <p className="text-white/80 pl-5.5">Paseo Hospital Militar 11</p>
                <p className="text-xs text-white/70 pl-5.5">
                  Clínica sanitaria equipada para rehabilitación integral
                </p>
              </div>

              <div className="space-y-1">
                <div className="font-medium text-white flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-white/90 flex-shrink-0" />
                  <span>Fénix Atalaya</span>
                </div>
                <p className="text-white/80 pl-5.5">Paseo Hospital Militar 9</p>
                <p className="text-xs text-white/70 pl-5.5">
                  Gimnasio para entrenar de forma segura y eficaz
                </p>
              </div>
            </div>
          </div>

          {/* Servicios */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wide text-white uppercase">
              <Link href="/servicios" className="hover:text-white/70 transition-colors">
                Servicios
              </Link>
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link
                  href="/servicios/paciente-oncologico"
                  className="hover:text-white transition-colors"
                >
                  Paciente oncológico
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/dolor-persistente"
                  className="hover:text-white transition-colors"
                >
                  Dolor persistente
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/suelo-pelvico"
                  className="hover:text-white transition-colors"
                >
                  Suelo pélvico
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/fisioterapia"
                  className="hover:text-white transition-colors"
                >
                  Fisioterapia
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/fisioterapia-a-domicilio"
                  className="hover:text-white transition-colors"
                >
                  Fisioterapia a domicilio
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto e Información */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wide text-white uppercase">
              Contacto
            </h4>
            <div className="space-y-3 text-sm">
              <div>
                <a
                  href="tel:605973833"
                  className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-white" />
                  <span>605 973 833</span>
                </a>
              </div>
              <div>
                <a
                  href="mailto:info@fenixfisioterapia.com"
                  className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-white" />
                  <span>info@fenixfisioterapia.com</span>
                </a>
              </div>
            </div>

            <div className="pt-2">
              <ul className="flex flex-wrap gap-4 text-sm text-white/80">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="/nosotros" className="hover:text-white transition-colors">
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="hover:text-white transition-colors">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between text-xs text-white/70 gap-4">
          <p>© {currentYear} Fénix Fisioterapia. Valladolid.</p>
          <p>Salud, movimiento y rehabilitación funcional.</p>
        </div>
      </div>
    </footer>
  );
}
