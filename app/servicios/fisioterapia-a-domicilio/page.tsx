import PageHero from "@/components/PageHero";
import Button from "@/components/ui/Button";
import ServiceContactCTA from "@/components/ServiceContactCTA";
import Link from "next/link";
import { ChevronDown, CheckCircle2, ArrowRight } from "lucide-react";

const QUE_TRATAMOS = [
  "Dolor muscular y articular.",
  "Lesiones y recuperación postquirúrgica.",
  "Rehabilitación neurológica.",
  "Fisioterapia oncológica y tratamiento de linfedema.",
  "Prevención de caídas y mejora de la movilidad.",
  "Ejercicio terapéutico adaptado.",
];

const COMO_TRABAJAMOS = [
  {
    step: "01",
    title: "Valoración inicial",
    description: "Para conocer tu estado y necesidades individuales en tu propio entorno.",
  },
  {
    step: "02",
    title: "Plan personalizado",
    description: "Con las técnicas manuales y ejercicios más adecuados para ti.",
  },
  {
    step: "03",
    title: "Acompañamiento continuo",
    description: "Adaptando la terapia a tu evolución diaria y resolviendo cualquier duda.",
  },
  {
    step: "04",
    title: "Material y equipamiento",
    description: "Aportados íntegramente por nuestro equipo para tu total comodidad.",
  },
];

const DOMICILIO_FAQS = [
  {
    q: "¿Necesito preparar algo en casa para la sesión?",
    a: "Solo un espacio libre donde podamos trabajar con comodidad. Nosotros llevamos el material necesario.",
  },
  {
    q: "¿Puedo combinar la fisioterapia a domicilio con sesiones en la clínica?",
    a: "Sí, adaptamos el plan para que puedas alternar según tus necesidades y disponibilidad.",
  },
  {
    q: "¿Cuánto dura una sesión a domicilio?",
    a: "La duración es la misma que en clínica: aproximadamente 45 minutos, para garantizar un tratamiento completo.",
  },
];

export default function FisioterapiaADomicilioPage() {
  return (
    <div className="bg-white">
      {/* 1. HERO */}
      <PageHero
        variant="gradient"
        title="Fisioterapia a domicilio"
        description="Fisioterapia a domicilio en Valladolid: Cuidamos de ti donde estés. Llevamos nuestros tratamientos a tu hogar para que puedas recibir atención profesional sin renunciar a la comodidad y seguridad de tu entorno."
        imageSrc="/AndreaCaminero-ValoracionADomicilio.webp"
        imageAlt="Sesión de fisioterapia y valoración a domicilio en Valladolid con Andrea Caminero"
        actions={
          <>
            <Button href="/contacto" variant="primary" size="lg">
              Pedir cita
            </Button>
            <Button href="tel:605973833" variant="outline" size="lg">
              Llamar al 605 973 833
            </Button>
          </>
        }
      />

      {/* 2. CUIDAMOS DE TI DONDE ESTÉS + QUÉ TRATAMOS - Fondo blanco con foto real */}
      <section className="py-16 lg:py-20 border-t border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Contenido explicativo */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#111111]">
                Cuidamos de ti donde estés con la misma calidad de consulta
              </h2>
              <div className="space-y-4 text-base text-zinc-600 leading-relaxed">
                <p>
                  En Fénix Fisioterapia sabemos que no siempre es fácil desplazarse hasta la clínica. Por eso, llevamos nuestros tratamientos a tu hogar para que puedas recibir atención profesional sin renunciar a la comodidad y seguridad de tu entorno.
                </p>
                <p>
                  Este servicio está pensado para personas con movilidad reducida, en procesos postquirúrgicos, con patologías que dificultan el desplazamiento o que simplemente prefieren recibir la terapia en casa. Nuestro objetivo es que cuentes con la misma calidad y personalización que en consulta, pero sin moverte de donde estés.
                </p>
              </div>

              {/* Qué tratamos */}
              <div className="pt-2">
                <h3 className="text-lg font-semibold text-[#111111] mb-4">
                  ¿Qué tratamos en fisioterapia a domicilio?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {QUE_TRATAMOS.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2.5 rounded-xl border border-zinc-200 bg-zinc-50/60 p-3.5 shadow-xs"
                    >
                      <CheckCircle2 className="h-5 w-5 text-[#C61E49] shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Foto real enriquecida */}
            <div className="lg:col-span-5">
              <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg border border-zinc-200/80">
                <img
                  src="/MiembroSesionADomicilio.webp"
                  alt="Fisioterapeuta de Fénix Fisioterapia realizando sesión a domicilio"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECCIÓN OBLIGATORIA CON FONDO DEL COLOR DE ACENTO: TARIFAS Y CÓMO TRABAJAMOS */}
      <section className="bg-[#C61E49] text-white py-16 lg:py-20 border-y border-[#A5153A]">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          {/* Bloque superior con foto y metodología */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Foto grande a la izquierda */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                <img
                  src="/AndreaCaminero-ValoracionADomicilio.webp"
                  alt="Valoración profesional a domicilio en Valladolid con Andrea Caminero"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Contenido cómo trabajamos */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white leading-tight">
                Cómo trabajamos en tu domicilio
              </h2>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal">
                Nos trasladamos con camilla y material terapéutico adaptado. No necesitas preparar nada especial salvo un pequeño espacio libre.
              </p>

              {/* 4 pasos de cómo trabajamos en tarjetas contrastadas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {COMO_TRABAJAMOS.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-white text-[#111111] p-5 shadow-lg flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#C61E49]">
                        Fase {item.step}
                      </span>
                      <h3 className="mt-1 text-base font-semibold text-[#111111] tracking-tight">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-xs text-zinc-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Botón de acción en contraste blanco */}
              <div className="pt-2">
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 bg-white text-[#C61E49] hover:bg-zinc-100 font-semibold px-7 py-3.5 rounded-xl shadow-lg transition-colors text-base"
                >
                  <span>Solicitar cita a domicilio</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Tarjetas de tarifas oficiales a domicilio */}
          <div className="pt-8 border-t border-white/20">
            <div className="max-w-2xl mb-6">
              <h3 className="text-2xl font-semibold text-white tracking-tight">
                Tarifas de Fisioterapia a Domicilio
              </h3>
              <p className="mt-2 text-sm text-white/80 leading-relaxed">
                Servicio disponible en Valladolid ciudad, especialmente zona centro. Para otros barrios o zonas del alfoz, consulta previamente la cobertura.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Valoración a domicilio */}
              <div className="rounded-2xl bg-white text-[#111111] p-8 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-xl font-bold text-[#111111]">Valoración a domicilio</h4>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#C61E49]">
                      Primera visita
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
                    Primera visita para valorar el caso, conocer las necesidades del paciente y definir el tratamiento más adecuado.
                  </p>
                  <p className="mt-6 text-3xl sm:text-4xl font-bold text-[#C61E49] tracking-tight">
                    60 €
                  </p>
                  <p className="mt-2 text-xs text-zinc-500 leading-relaxed">
                    Incluye evaluación funcional completa y propuesta de plan en Valladolid centro.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-zinc-100">
                  <Link
                    href="/contacto"
                    className="inline-flex items-center justify-center w-full bg-[#C61E49] hover:bg-[#aa173d] text-white font-semibold py-3 px-4 rounded-xl text-sm shadow-sm transition-colors"
                  >
                    Pedir cita de valoración
                  </Link>
                </div>
              </div>

              {/* Sesión a domicilio */}
              <div className="rounded-2xl bg-white text-[#111111] p-8 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-xl font-bold text-[#111111]">Sesión a domicilio</h4>
                    <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                      Tratamiento
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
                    Sesión de fisioterapia a domicilio para pacientes que necesitan tratamiento sin desplazarse al centro.
                  </p>
                  <p className="mt-6 text-3xl sm:text-4xl font-bold text-[#C61E49] tracking-tight">
                    50 €
                  </p>
                  <p className="mt-2 text-xs text-zinc-500 leading-relaxed">
                    Duración completa de 45 minutos con seguimiento y ejercicios personalizados.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-zinc-100">
                  <Link
                    href="/contacto"
                    className="inline-flex items-center justify-center w-full bg-[#C61E49] hover:bg-[#aa173d] text-white font-semibold py-3 px-4 rounded-xl text-sm shadow-sm transition-colors"
                  >
                    Pedir sesión a domicilio
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PREGUNTAS FRECUENTES - Fondo limpio */}
      <section className="py-16 lg:py-20 border-t border-zinc-200 bg-zinc-50/50">
        <div className="max-w-6xl mx-auto px-6 space-y-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#111111]">
              Preguntas frecuentes
            </h2>
            <p className="mt-2 text-base text-zinc-600">
              Todo lo que necesitas saber antes de recibir la atención en tu domicilio.
            </p>
          </div>

          <div className="space-y-4">
            {DOMICILIO_FAQS.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs transition-colors hover:border-zinc-300"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-[#111111] [&::-webkit-details-marker]:hidden">
                  <span className="text-base pr-4">{faq.q}</span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-zinc-400 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <div className="mt-3 border-t border-zinc-100 pt-3 text-sm leading-relaxed text-zinc-600">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BLOQUE CTA FINAL HACIA CONTACTO */}
      <ServiceContactCTA />
    </div>
  );
}
