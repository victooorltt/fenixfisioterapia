import PageHero from "@/components/PageHero";
import Button from "@/components/ui/Button";
import ServiceContactCTA from "@/components/ServiceContactCTA";
import Link from "next/link";
import { ChevronDown, CheckCircle2, ArrowRight } from "lucide-react";

const TRATAMIENTOS = [
  "Dolor muscular y articular.",
  "Lesiones deportivas y recuperación post-entrenamiento.",
  "Lesiones por sobrecarga o posturales.",
  "Recuperación postquirúrgica.",
  "Rehabilitación neurológica.",
  "Suelo pélvico y salud de la mujer.",
  "Fisioterapia oncológica y linfedema.",
];

const METODO_STEPS = [
  {
    step: "01",
    title: "Valoración inicial",
    description: "Identificar el origen del problema.",
  },
  {
    step: "02",
    title: "Tratamiento personalizado",
    description: "Combinando técnicas manuales, ejercicio y tecnología.",
  },
  {
    step: "03",
    title: "Educación y prevención",
    description: "Para evitar recaídas.",
  },
  {
    step: "04",
    title: "Seguimiento y revisión",
    description: "Para asegurar la evolución y los resultados.",
  },
];

const BENEFICIOS = [
  "Reducción del dolor y la inflamación.",
  "Mejora de la movilidad y la fuerza.",
  "Recuperación funcional más rápida.",
  "Prevención de futuras lesiones.",
  "Acompañamiento y atención personalizada.",
];

const FISIOTERAPIA_FAQS = [
  {
    q: "¿Necesito una prescripción médica para acudir a fisioterapia?",
    a: "No es necesario. Puedes venir directamente y realizaremos una valoración inicial para determinar el tratamiento más adecuado.",
  },
  {
    q: "¿Cuánto dura una sesión?",
    a: "En Fénix las sesiones duran 45 minutos, para trabajar en profundidad y sin prisas.",
  },
  {
    q: "¿Cada cuánto debo venir?",
    a: "Dependerá del tipo de lesión y de tu evolución. En la valoración inicial te indicaremos la frecuencia ideal.",
  },
  {
    q: "¿Puedo seguir con mi entrenamiento mientras hago fisioterapia?",
    a: "En la mayoría de los casos sí, adaptando la intensidad y los ejercicios. Si es necesario, te orientaremos para combinar ambas cosas de forma segura.",
  },
];

export default function FisioterapiaGeneralPage() {
  return (
    <div className="bg-white">
      {/* 1. HERO */}
      <PageHero
        variant="overlay"
        title="Fisioterapia"
        description="Fisioterapia personalizada para aliviar el dolor, recuperar la movilidad y prevenir lesiones con base científica."
        imageSrc="/FotoMiembroConPacienteHaciendoSentadilla.jpg"
        imageAlt="Sesión de fisioterapia y ejercicio terapéutico en Fénix Fisioterapia"
        actions={
          <>
            <Button
              href="/contacto"
              variant="primary"
              size="lg"
              className="bg-[#C61E49] text-white hover:bg-[#aa173d] shadow-lg shadow-[#C61E49]/30 font-semibold px-7 py-3.5 rounded-xl transition-all"
            >
              Pedir cita
            </Button>
            <Button
              href="tel:605973833"
              variant="outline"
              size="lg"
              className="border-white/40 text-white hover:bg-white/10"
            >
              Llamar al 605 973 833
            </Button>
          </>
        }
      />

      {/* 2. PRESENTACIÓN Y QUÉ TRATAMOS - Fondo blanco con foto real y tarjetas */}
      <section className="py-16 lg:py-20 border-t border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Texto introductorio */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#111111]">
                Fisioterapia personalizada para tu recuperación y bienestar
              </h2>
              <div className="space-y-4 text-base text-zinc-600 leading-relaxed">
                <p>
                  En Fénix Fisioterapia trabajamos para ayudarte a recuperar tu movilidad, aliviar el dolor y prevenir lesiones, siempre desde un enfoque personalizado y basado en la evidencia científica. Nuestro objetivo es que vuelvas a sentirte bien y que disfrutes de tus actividades diarias con la mayor calidad de vida posible.
                </p>
                <p>
                  Cada persona es diferente, por eso diseñamos planes de tratamiento adaptados a tu situación y objetivos. Utilizamos técnicas manuales, ejercicio terapéutico y tecnología avanzada para lograr resultados eficaces y duraderos.
                </p>
              </div>

              {/* Tratamientos en cuadrícula */}
              <div className="pt-2">
                <h3 className="text-lg font-semibold text-[#111111] mb-4">
                  ¿Qué tratamos en Fénix Fisioterapia?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {TRATAMIENTOS.map((item) => (
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
            <div className="lg:col-span-6 flex flex-col">
              <div className="relative w-full flex-1 aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto min-h-[360px] sm:min-h-[420px] lg:min-h-[480px] rounded-2xl overflow-hidden shadow-lg border border-zinc-200/80">
                <img
                  src="/AndreaCamineroConPacientev2.webp"
                  alt="Tratamiento personalizado en Fénix Fisioterapia"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECCIÓN OBLIGATORIA CON FONDO DEL COLOR DE ACENTO: NUESTRO MÉTODO */}
      <section className="bg-[#C61E49] text-white py-16 lg:py-20 border-y border-[#A5153A]">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Foto grande a la izquierda */}
            <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col">
              <div className="relative w-full flex-1 aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto min-h-[360px] sm:min-h-[420px] lg:min-h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                <img
                  src="/ClinicaGimnasioDesdeDentro.webp"
                  alt="Instalaciones de tratamiento y método activo Fénix"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Contenido técnico/clave del método */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white leading-tight">
                Nuestro método de trabajo
              </h2>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal">
                Un protocolo riguroso que va desde el diagnóstico de la causa hasta la recuperación funcional completa, evitando recaídas y devolviéndote la autonomía.
              </p>

              {/* Steps en tarjetas blancas contrastadas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {METODO_STEPS.map((step) => (
                  <div
                    key={step.step}
                    className="rounded-2xl bg-white text-[#111111] p-5 shadow-lg flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#C61E49]">
                        Paso {step.step}
                      </span>
                      <h3 className="mt-1 text-base font-semibold text-[#111111] tracking-tight">
                        {step.title}
                      </h3>
                      <p className="mt-1.5 text-xs text-zinc-600 leading-relaxed">
                        {step.description}
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
                  <span>Empezar con el método Fénix</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BENEFICIOS - Fondo neutro con foto de apoyo */}
      <section className="py-16 lg:py-20 border-t border-zinc-200 bg-zinc-50/50">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Beneficios */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#111111]">
                Beneficios de la fisioterapia en Fénix
              </h2>
              <p className="text-base text-zinc-600 leading-relaxed">
                Combinamos terapia manual, tecnología avanzada y ejercicio guiado para que no solo sientas alivio puntual, sino que fortalezcas tu cuerpo frente a futuras lesiones.
              </p>

              <ul className="space-y-3 pt-2">
                {BENEFICIOS.map((beneficio) => (
                  <li
                    key={beneficio}
                    className="flex items-start gap-3 text-base text-zinc-700 bg-white p-3.5 rounded-xl border border-zinc-200/80 shadow-xs"
                  >
                    <CheckCircle2 className="h-5 w-5 text-[#C61E49] shrink-0 mt-0.5" />
                    <span className="font-medium">{beneficio}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Foto de apoyo */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="relative w-full flex-1 aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto min-h-[360px] sm:min-h-[420px] lg:min-h-[480px] rounded-2xl overflow-hidden shadow-lg border border-zinc-200/80">
                <img
                  src="/JuanFernandezConPacienteEnCinta.jpg"
                  alt="Readaptación funcional con fisioterapeuta en Fénix Fisioterapia"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PREGUNTAS FRECUENTES - Fondo limpio */}
      <section className="py-16 lg:py-20 border-t border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 space-y-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#111111]">
              Preguntas frecuentes
            </h2>
            <p className="mt-2 text-base text-zinc-600">
              Información clara sobre sesiones, duración, prescripción y entrenamientos.
            </p>
          </div>

          <div className="space-y-4">
            {FISIOTERAPIA_FAQS.map((faq) => (
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

      {/* 6. BLOQUE CTA FINAL HACIA CONTACTO */}
      <ServiceContactCTA />
    </div>
  );
}
