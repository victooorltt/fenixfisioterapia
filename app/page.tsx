"use client";

import React from "react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Button from "@/components/ui/Button";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Activity,
  Users,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

interface SaludCardItem {
  title: string;
  image: string;
  description: string;
  href?: string;
}

const saludCards: SaludCardItem[] = [
  {
    title: "Paciente oncológico",
    image: "/AndreaCamineroConPaciente.webp",
    description:
      "Acompañamos tu recuperación con un enfoque global y personalizado, combinando la experiencia profesional y el cuidado humano para ayudarte a recuperar tu bienestar desde el interior.",
    href: "/servicios/paciente-oncologico",
  },
  {
    title: "Dolor persistente",
    image: "/AndreaCamineroConPacientev2.webp",
    description:
      "Trabajamos la complejidad del dolor desde todas sus dimensiones, a través de la terapia manual combinada con ejercicio y educación terapéutica.",
    href: "/servicios/dolor-persistente",
  },
  {
    title: "Suelo pélvico",
    image: "/SueloPelvico.webp",
    description:
      "La fisioterapia de suelo pélvico mejora tu calidad de vida con un plan personalizado que fortalece esta musculatura clave para tu salud.",
    href: "/servicios/suelo-pelvico",
  },
  {
    title: "TAP (Terapia activa personalizada)",
    image: "/Tap.webp",
    description:
      "En nuestras clases con grupos reducidos disfrutarás de una experiencia completamente personalizada para tu patología y situación diaria.",
    href: "/contacto",
  },
  {
    title: "Fisioterapia",
    image: "/FotoMiembroConPacienteHaciendoSentadilla.jpg",
    description:
      "Tratamientos personalizados para aliviar el dolor, recuperar la movilidad y prevenir lesiones. Te ayudamos a mejorar tu calidad de vida con un acompañamiento cercano y profesional.",
    href: "/servicios/fisioterapia",
  },
  {
    title: "Fisioterapia a domicilio",
    image: "/AndreaCaminero-ValoracionADomicilio.webp",
    description:
      "Llevamos nuestra experiencia y equipamiento hasta tu hogar para que recibas el tratamiento que necesitas sin desplazarte. Comodidad, atención personalizada y resultados efectivos en tu propio espacio.",
    href: "/servicios/fisioterapia-a-domicilio",
  },
  {
    title: "Dermatofuncional",
    image: "/Dermatofuncional.webp",
    description:
      "La fisioterapia dermatofuncional nos permite cuidar la piel y mejorar su aspecto.",
    href: "/contacto",
  },
];

const gimnasioCards = [
  {
    title: "Entrenamiento personal",
    image: "/EntrenamientoPersonal.jpg",
    description:
      "El entrenamiento es una parte fundamental de la prevención de patologías, entrena con nosotros de forma controlada y guiada.",
  },
  {
    title: "FITAP",
    image: "/Fitap.webp",
    description:
      "Para ponerte en forma con nosotros con los mejores entrenamientos adaptados para ti.",
  },
  {
    title: "TAP",
    image: "/Tap.webp",
    description:
      "En nuestras clases con grupos reducidos disfrutarás de una experiencia completamente personalizada para tu patología y situación diaria.",
  },
  {
    title: "Hipopresivos",
    image: "/Hipopresivos.webp",
    description:
      "Técnicas posturales y de respiración que activan los músculos profundos del abdomen y el suelo pélvico.",
  },
  {
    title: "Pilates máquinas",
    image: "/PilatesMaquinas.webp",
    description:
      "Utilizamos el pilates como herramienta terapéutica, adaptándola a cada caso para cumplir tus objetivos físicos y de salud.",
  },
];

const testimonios = [
  {
    author: "Virginia De Miguel Lorenzo",
    date: "hace 11 meses",
    text: "Gracias por la profesionalidad y cercanía, 100% recomendable.",
  },
  {
    author: "Paola Delapisa",
    date: "hace 12 meses",
    text: "Increíblemente buenos,llegué por recomendación de la veterinaria de mi perro, creo que fue casualidad o el destino pero desde luego ha sido el mayor acierto de mi vida deportiva. Te cuidan, te enseñan, te acompañan en este proceso de ir recuperándote de tus dolencias a través del ejercicio de fuerza...",
  },
  {
    author: "Dani Hysteria",
    date: "hace 1 año",
    text: "Trato de diez, unos profesionales como la copa de un pino y super amables. No me planteo ir a otro sitio",
  },
  {
    author: "Miriam M",
    date: "hace 1 año",
    text: "Llegué a esta clínica de casualidad por recomendación de una amiga, pero resulta que Andrea es especialista en dolor persistente y después de más de 4 años de dolor cervical , gracias a ella ya veo luz al final del túnel...",
  },
  {
    author: "Marta curso",
    date: "hace 1 año",
    text: "Una clínica de Fisioterapia muy recomendable,magníficos profesionales en especial Jorge,muy bien profesional y un trato buenísimo,",
  },
];

export default function HomePage() {
  return (
    <div className="w-full bg-white text-[#111111]">
      {/* 1. Hero */}
      <PageHero
        variant="overlay"
        title="Servicios de Fénix"
        description="Dividimos nuestros servicios en salud y entrenamiento: fisioterapia especializada y actividades guiadas en gimnasio."
        imageSrc="/ClinicaGimnasioDesdeDentro.webp"
        imageAlt="Servicios de Fénix Fisioterapia y gimnasio en Valladolid"
        actions={
          <>
            <Button
              href="/servicios"
              variant="primary"
              size="lg"
              className="bg-[#C61E49] text-white hover:bg-[#aa173d] shadow-lg shadow-[#C61E49]/30 font-semibold px-7 py-3.5 rounded-xl transition-all"
            >
              Ver servicios
            </Button>
            <Button
              href="/contacto"
              variant="outline"
              size="lg"
              className="border border-white/40 hover:border-white text-white bg-transparent hover:bg-white/10 font-medium px-7 py-3.5 rounded-xl transition-all"
            >
              Pedir cita
            </Button>
          </>
        }
      >
        {/* Fila de beneficios bajo los botones: estilo Abogados Asturias */}
        <div className="mt-10 pt-7 border-t border-white/20 max-w-3xl mx-auto w-full">
          <div className="grid grid-cols-2 md:flex md:flex-nowrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 text-xs sm:text-sm font-medium text-white/90 whitespace-nowrap">
            <div className="inline-flex items-center justify-center gap-2">
              <Activity className="h-4 w-4 text-red-200 shrink-0" />
              <span className="text-white/95">Salud y entrenamiento</span>
            </div>
            <div className="inline-flex items-center justify-center gap-2">
              <Users className="h-4 w-4 text-red-200 shrink-0" />
              <span className="text-white/95">Atención personalizada</span>
            </div>
            <div className="inline-flex items-center justify-center gap-2">
              <ShieldCheck className="h-4 w-4 text-red-200 shrink-0" />
              <span className="text-white/95">Basado en evidencia</span>
            </div>
            <div className="inline-flex items-center justify-center gap-2">
              <MapPin className="h-4 w-4 text-red-200 shrink-0" />
              <span className="text-white/95">2 sedes en Valladolid</span>
            </div>
          </div>
        </div>
      </PageHero>

      {/* 2. Bloque Salud y Rehabilitación avanzada */}
      <section className="w-full border-t border-zinc-200/80 py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#111111]">
              Salud y Rehabilitación avanzada
            </h2>
            <p className="text-base text-zinc-600 mt-3 leading-relaxed">
              Atención personalizada, tratamientos basados en evidencia y un respaldo humano que acompaña cada paso.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {saludCards.map((item) => (
              <Link
                key={item.title}
                href={item.href || "/contacto"}
                className="group rounded-2xl border border-zinc-200 bg-white overflow-hidden flex flex-col justify-between transition-all hover:border-zinc-300 hover:shadow-md"
              >
                <div>
                  <div className="aspect-[16/10] w-full overflow-hidden bg-zinc-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-[#111111] group-hover:text-[#C61E49] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-zinc-600 mt-2.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-2 flex items-center justify-end">
                  <span className="text-[#C61E49] group-hover:translate-x-1 transition-transform flex items-center gap-1 text-sm font-medium">
                    <span>Ver servicio</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Bloque Gimnasio */}
      <section className="w-full border-t border-zinc-200/80 py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#111111]">
              Gimnasio
            </h2>
            <p className="text-base text-zinc-600 mt-3 leading-relaxed">
              El entrenamiento es una parte fundamental de la prevención de patologías, entrena con nosotros de forma controlada y guiada.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {gimnasioCards.map((item, idx) => {
              const isFourthCard = idx === 3;
              const isFifthCard = idx === 4;

              return (
                <div
                  key={item.title}
                  className={`rounded-2xl border border-zinc-200 bg-white overflow-hidden flex flex-col transition-all hover:border-zinc-300 col-span-1 lg:col-span-2 ${
                    isFourthCard ? "lg:col-start-2" : ""
                  } ${
                    isFifthCard ? "md:col-span-2 md:max-w-md md:mx-auto w-full lg:max-w-none lg:mx-0 lg:col-span-2" : ""
                  }`}
                >
                  <div className="aspect-[16/10] w-full overflow-hidden bg-zinc-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-semibold text-[#111111]">
                      {item.title}
                    </h3>
                    <p className="text-sm text-zinc-600 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Nueva Sección Acento: Tecnología y Rehabilitación Avanzada */}
      <section className="w-full bg-[#C61E49] text-white py-16 lg:py-24 border-y border-[#A5153A]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Foto grande a la izquierda */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                <img
                  src="/JuanFernandezConPacienteEnCinta.jpg"
                  alt="Evaluación y tecnología aplicada al entrenamiento y rehabilitación en Fénix Fisioterapia"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Información a la derecha */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white leading-tight">
                  Salud y Rehabilitación avanzada
                </h2>
                <p className="mt-4 text-base sm:text-lg text-white/90 leading-relaxed font-normal">
                  Atención personalizada, tratamientos basados en evidencia y un respaldo humano que acompaña cada paso.
                </p>
              </div>

              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-white/15 text-white shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <p className="text-sm sm:text-base text-white/95 leading-snug">
                    Evaluación clínica exhaustiva y ecografía musculoesquelética para un diagnóstico preciso.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-white/15 text-white shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <p className="text-sm sm:text-base text-white/95 leading-snug">
                    Ejercicio terapéutico guiado por profesionales sanitarios y graduados en CAFD.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-white/15 text-white shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <p className="text-sm sm:text-base text-white/95 leading-snug">
                    Dos centros especializados en Valladolid: Fénix Nido (clínica sanitaria) y Fénix Atalaya (gimnasio).
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 bg-white text-[#C61E49] hover:bg-zinc-100 font-semibold px-7 py-3.5 rounded-xl shadow-lg transition-all text-sm sm:text-base"
                >
                  <span>Pedir cita</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:605973833"
                  className="inline-flex items-center gap-2 border border-white/40 hover:border-white text-white hover:bg-white/10 font-medium px-6 py-3.5 rounded-xl transition-all text-sm sm:text-base"
                >
                  <Phone className="w-4 h-4 text-white" />
                  <span>605 973 833</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Testimonios de Google */}
      <section className="w-full border-t border-zinc-200/80 py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#111111]">
              Nuestros clientes opinan
            </h2>
          </div>

          <ReviewsCarousel reviews={testimonios} />
        </div>
      </section>

      {/* 5. Bloque CTA Final hacia Contacto */}
      <section className="w-full border-t border-zinc-200/80 py-16 sm:py-20 lg:py-24 bg-zinc-50/70">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#111111]">
            ¿Hablamos de tu recuperación y objetivos?
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Pide cita o consúltanos cualquier duda sin compromiso. Te acompañamos tanto en clínica sanitaria (Fénix Nido) como en gimnasio terapéutico (Fénix Atalaya).
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
              className="inline-flex items-center justify-center gap-2 border border-zinc-300 hover:border-zinc-400 text-[#111111] hover:bg-white bg-white/70 font-medium px-8 py-3.5 rounded-xl shadow-xs transition-all text-base w-full sm:w-auto"
            >
              <Phone className="w-4 h-4 text-[#C61E49]" />
              <span>Llamar al 605 973 833</span>
            </a>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-zinc-500">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#C61E49]" />
              <span>Fénix Nido: Paseo Hospital Militar 11</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#C61E49]" />
              <span>Fénix Atalaya: Paseo Hospital Militar 9</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
