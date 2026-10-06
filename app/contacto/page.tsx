"use client";

import React, { FormEvent } from "react";
import PageHero from "@/components/PageHero";
import Button from "@/components/ui/Button";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactoPage() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="w-full bg-white text-[#111111]">
      {/* Hero */}
      <PageHero
        variant="overlay"
        title="Contacto"
        description="Atención personalizada en nuestros dos centros de Valladolid: Fénix Nido (clínica) y Fénix Atalaya (gimnasio)."
        imageSrc="/ClinicaDesdeFuera.webp"
        imageAlt="Clínica Fénix Fisioterapia en Paseo Hospital Militar Valladolid"
        actions={
          <>
            <Button
              href="tel:605973833"
              variant="primary"
              size="lg"
              className="bg-[#C61E49] text-white hover:bg-[#aa173d] shadow-lg shadow-[#C61E49]/30 font-semibold px-7 py-3.5 rounded-xl transition-all"
            >
              605 973 833
            </Button>
            <Button
              href="mailto:info@fenixfisioterapia.com"
              variant="outline"
              size="lg"
              className="border border-white/40 hover:border-white text-white bg-transparent hover:bg-white/10 font-medium px-7 py-3.5 rounded-xl transition-all"
            >
              info@fenixfisioterapia.com
            </Button>
          </>
        }
      />

      {/* Sección Contacto */}
      <section className="w-full border-t border-zinc-200/80 py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            {/* Contact details & Map */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-zinc-500 mb-1">Teléfono:</p>
                  <a
                    href="tel:605973833"
                    className="inline-flex items-center gap-2 text-base font-medium text-[#111111] hover:text-[#C61E49] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#C61E49] flex-shrink-0" />
                    <span>605 973 833</span>
                  </a>
                </div>

                <div>
                  <p className="text-sm text-zinc-500 mb-1">Correo electrónico:</p>
                  <a
                    href="mailto:info@fenixfisioterapia.com"
                    className="inline-flex items-center gap-2 text-base font-medium text-[#111111] hover:text-[#C61E49] transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#C61E49] flex-shrink-0" />
                    <span>info@fenixfisioterapia.com</span>
                  </a>
                </div>
              </div>

              <div className="border-t border-zinc-100 pt-6 space-y-4 text-sm">
                <div className="space-y-1">
                  <div className="font-medium text-[#111111] flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#C61E49] flex-shrink-0" />
                    <span>Fénix Nido (Paseo Hospital Militar 11)</span>
                  </div>
                  <p className="text-zinc-600 pl-6">
                    Clínica sanitaria equipada para rehabilitación integral.
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="font-medium text-[#111111] flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#C61E49] flex-shrink-0" />
                    <span>Fénix Atalaya (Paseo Hospital Militar 9)</span>
                  </div>
                  <p className="text-zinc-600 pl-6">
                    Gimnasio para entrenar de forma segura y eficaz.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-zinc-200 aspect-[16/10] w-full">
                <iframe
                  src="https://maps.google.com/maps?q=Paseo+del+Hospital+Militar+11,+47007+Valladolid&t=m&z=16&output=embed"
                  title="Ubicación de Fénix Fisioterapia en Paseo Hospital Militar Valladolid"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="contacto-nombre"
                    className="block text-sm font-medium text-[#111111] mb-1.5"
                  >
                    Nombre*
                  </label>
                  <input
                    type="text"
                    id="contacto-nombre"
                    name="nombre"
                    required
                    placeholder="Nombre*"
                    className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 bg-white text-[#111111] placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#C61E49] focus:border-transparent text-sm transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contacto-telefono"
                    className="block text-sm font-medium text-[#111111] mb-1.5"
                  >
                    Teléfono*
                  </label>
                  <input
                    type="tel"
                    id="contacto-telefono"
                    name="telefono"
                    required
                    placeholder="Teléfono*"
                    className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 bg-white text-[#111111] placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#C61E49] focus:border-transparent text-sm transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contacto-email"
                    className="block text-sm font-medium text-[#111111] mb-1.5"
                  >
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="contacto-email"
                    name="email"
                    placeholder="Correo electrónico"
                    className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 bg-white text-[#111111] placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#C61E49] focus:border-transparent text-sm transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contacto-mensaje"
                    className="block text-sm font-medium text-[#111111] mb-1.5"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="contacto-mensaje"
                    name="mensaje"
                    rows={4}
                    placeholder="Mensaje"
                    className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 bg-white text-[#111111] placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#C61E49] focus:border-transparent text-sm resize-none transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center font-medium transition-colors rounded-xl h-11 px-5 text-sm bg-[#C61E49] text-white hover:bg-[#aa173d] shadow-sm select-none"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
