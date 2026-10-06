import PageHero from "@/components/PageHero";
import Button from "@/components/ui/Button";
import ServiceContactCTA from "@/components/ServiceContactCTA";
import Link from "next/link";
import { ChevronDown, CheckCircle2, ArrowRight } from "lucide-react";

const SUELO_PELVICO_FAQS = [
  {
    q: "¿En qué consiste la valoración de un fisioterapeuta especialista en suelo pélvico?",
    a: "La valoración inicial suele durar una hora. Consiste en realizar una entrevista inicial al paciente en el que incluiremos la historia clínica. También valoraremos a través del test, pruebas y ecografía si fuera necesario, para establecer cuál es el problema y comenzar con el tratamiento.\n\nEn muchos casos es necesario realizar un tacto vaginal o rectal para determinar la situación de ciertas estructuras que se encuentran en la pelvis (siempre con consentimiento informado).\n\nEl tratamiento podrá incluir diversas técnicas manuales, de electroterapia, respiratorios, ejercicio terapéutico, biofeedback, etc.",
  },
  {
    q: "Si estoy embarazada o acabo de dar a luz, ¿Cuándo puedo realizar una valoración de suelo pélvico?",
    a: "Te recomendamos poner la primera cita a partir de la semana 14 de embarazo. Si tienes algún dolor o molestia, podríamos vernos antes.",
  },
  {
    q: "Tengo la regla, ¿puedo acudir igualmente a consulta?",
    a: "Por nuestra parte no hay problema. Pero si la cita te coincide con los primeros días de regla o sangrado siendo estos más abundante y estás incómoda, puedes retrasar la cita unos días. Solamente tienes que avisarnos con antelación.",
  },
  {
    q: "Tengo infección de orina, Cándida o alguna otra patología, ¿puedo acudir igualmente a consulta?",
    a: "No, en estos casos deberías acudir a tu médico para recibir tratamiento y una vez pasada la infección podrás continuar con tu tratamiento de fisioterapia de suelo pélvico.",
  },
];

const PRICING_OPTIONS = [
  {
    title: "Valoración sin ecógrafo",
    price: "50€",
    detail: "Evaluación clínica integral y plan de tratamiento.",
  },
  {
    title: "Valoración con ecógrafo",
    price: "60€",
    detail: "Evaluación clínica exhaustiva complementada con ecografía.",
  },
  {
    title: "Cada sesión",
    price: "40€",
    detail: "Sesión de tratamiento y seguimiento individualizado.",
  },
];

export default function SueloPelvicoPage() {
  return (
    <div className="bg-white">
      {/* 1. HERO */}
      <PageHero
        variant="gradient"
        title="Suelo Pélvico"
        description="La fisioterapia de suelo pélvico mejora tu calidad de vida con un plan personalizado que fortalece esta musculatura clave para tu salud."
        imageSrc="/SueloPelvico.webp"
        imageAlt="Sesión de suelo pélvico en Fénix Fisioterapia Valladolid"
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

      {/* 2. TRATAMIENTO Y FORTALECIMIENTO - Fondo blanco con fotos reales y tarjetas */}
      <section className="py-16 lg:py-20 border-t border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Contenido explicativo */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#111111]">
                Tratamiento y fortalecimiento del suelo pélvico
              </h2>
              <div className="space-y-4 text-base text-zinc-600 leading-relaxed">
                <p>
                  La fisioterapia de suelo pélvico es una rama especializada de la fisioterapia que se enfoca en evaluar, tratar y fortalecer la región de la pelvis y los músculos del suelo pélvico. Las funciones básicas como la continencia urinaria y fecal, el soporte de los órganos internos y la estabilidad del tronco son esenciales de la musculatura del suelo pélvico.
                </p>
                <p>
                  Al igual que cualquier otro grupo muscular, puede debilitarse o sufrir lesiones, generando problemas como las disfunciones de suelo pélvico. Algunas de las disfunciones más comunes que tratamos son: incontinencia urinaria o fecal, dolor pélvico, prolapsos, hipertonía e hipotonía, disfunción sexual y otros desafíos para la calidad de vida.
                </p>
                <p>
                  A través de ejercicio terapéutico, técnicas de relajación, reeducación postural y otros tratamientos como la electroestimulación, biofeedback, terapia manual y ecografía, la fisioterapia de suelo pélvico ayuda a personas de todas las edades, tanto hombres como mujeres, a mejorar su función pélvica.
                </p>
                <p>
                  Es una terapia particularmente beneficiosa para mujeres en etapas de embarazo y postparto, así como para quienes experimentan síntomas asociados a la menopausia, aunque también es fundamental en la rehabilitación de personas que han tenido cirugías abdominales o pélvicas. En hombres, nos ocupamos de la incontinencia urinaria postprostatectomía, disfunciones sexuales y otras patologías.
                </p>
                <p>
                  Nos enfocamos en una fisioterapia de suelo pélvico respetando la importancia de adaptar nuestros tratamientos a las necesidades específicas de cada paciente, buscando lograr resultados positivos. Nos orientamos a proporcionar soluciones efectivas, recuperando el control y la confianza, mejorando la función, el bienestar físico y emocional en el día a día, abordando las causas subyacentes de estas disfunciones.
                </p>
              </div>
            </div>

            {/* Foto de apoyo enriquecida */}
            <div className="lg:col-span-5 space-y-6">
              <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg border border-zinc-200/80">
                <img
                  src="/Hipopresivos.webp"
                  alt="Ejercicio terapéutico e hipopresivos para suelo pélvico en Fénix Fisioterapia"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Tarjeta de campos de aplicación */}
              <div className="p-6 rounded-2xl border border-zinc-200 bg-zinc-50/60 space-y-3">
                <h3 className="font-semibold text-[#111111] text-base">
                  ¿Para quién está indicado?
                </h3>
                <ul className="space-y-2 text-sm text-zinc-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#C61E49] shrink-0 mt-0.5" />
                    <span><strong>Mujeres:</strong> Embarazo, postparto, menopausia, prolapsos o dolor pélvico.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#C61E49] shrink-0 mt-0.5" />
                    <span><strong>Hombres:</strong> Postprostatectomía, dolor perineal y disfunciones pélvicas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#C61E49] shrink-0 mt-0.5" />
                    <span><strong>Postquirúrgico:</strong> Cirugías abdominales, urológicas y ginecológicas.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECCIÓN OBLIGATORIA CON FONDO DEL COLOR DE ACENTO: TARIFAS Y TECNOLOGÍA */}
      <section className="bg-[#C61E49] text-white py-16 lg:py-20 border-y border-[#A5153A]">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          {/* Cabecera y foto grande */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Foto grande a la izquierda */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                <img
                  src="/AndreaCamineroConPaciente.webp"
                  alt="Fisioterapeuta especialista en valoración de suelo pélvico"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Contenido clave a la derecha */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white leading-tight">
                Tarifas de Suelo Pélvico
              </h2>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal">
                Tu clínica de fisioterapia de suelo pélvico en Valladolid. Tratamiento individualizado, en cabina privada y con instrumental de última generación como ecógrafo funcional y biofeedback.
              </p>

              {/* Puntos clave con CheckCircle2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-sm text-white/95">Ecografía funcional sin radiación</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-sm text-white/95">Cabina privada con máxima confidencialidad</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-sm text-white/95">Biofeedback y electroestimulación</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-sm text-white/95">Consentimiento informado y ritmo personal</span>
                </div>
              </div>

              {/* Botón de acción en contraste blanco */}
              <div className="pt-2">
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 bg-white text-[#C61E49] hover:bg-zinc-100 font-semibold px-7 py-3.5 rounded-xl shadow-lg transition-colors text-base"
                >
                  <span>Pedir cita de suelo pélvico</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Tarjetas de precios en contraste blanco */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-white/20">
            {PRICING_OPTIONS.map((plan) => (
              <div
                key={plan.title}
                className="rounded-2xl bg-white text-[#111111] p-8 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-semibold text-[#111111]">{plan.title}</h3>
                  <p className="mt-3 text-3xl sm:text-4xl font-bold text-[#C61E49] tracking-tight">
                    {plan.price}
                  </p>
                  <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
                    {plan.detail}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-zinc-100">
                  <Link
                    href="/contacto"
                    className="inline-flex items-center justify-center w-full bg-zinc-100 hover:bg-[#C61E49] hover:text-white text-[#111111] font-semibold py-2.5 px-4 rounded-xl text-sm transition-colors"
                  >
                    Pedir cita
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PREGUNTAS FRECUENTES - Fondo limpio con tarjetas */}
      <section className="py-16 lg:py-20 border-t border-zinc-200 bg-zinc-50/50">
        <div className="max-w-6xl mx-auto px-6 space-y-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#111111]">
              Preguntas frecuentes
            </h2>
            <p className="mt-2 text-base text-zinc-600">
              Resolvemos tus preguntas sobre la primera consulta, embarazo, regla y tratamientos.
            </p>
          </div>

          <div className="space-y-4">
            {SUELO_PELVICO_FAQS.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs transition-colors hover:border-zinc-300"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-[#111111] [&::-webkit-details-marker]:hidden">
                  <span className="text-base pr-4">{faq.q}</span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-zinc-400 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <div className="mt-3 border-t border-zinc-100 pt-3 text-sm leading-relaxed text-zinc-600 whitespace-pre-line">
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
