import PageHero from "@/components/PageHero";
import Button from "@/components/ui/Button";
import ServiceContactCTA from "@/components/ServiceContactCTA";
import Link from "next/link";
import { ChevronDown, CheckCircle2, ArrowRight } from "lucide-react";

const VALORACION_FAQS = [
  {
    q: "En la primera sesión ¿no me van a hacer nada?",
    a: "Todo lo que se hace en nuestro centro es terapia, en algunos casos más sencillos detectar el problema y plantear la solución es un abordaje fácil y en la propia primera consulta se realizará el tratamiento. Pero hay ocasiones en las que conocer el proceso a fondo y comprender lo que está sucediendo es más complejo y de igual manera que no nos tomamos cualquier pastilla sin saber qué nos está sucediendo en nuestro caso es igual. Si tu dolor lleva tiempo o influyen muchos factores o la causa no es clara le dedicaremos el tiempo que sea necesario para diagnosticarte bien y proponerte el plan de tratamiento más eficaz.",
  },
  {
    q: "¿Qué es lo que tengo que llevar?",
    a: "Todo los informes y pruebas que tengas referente a tu proceso o tus procesos, si te ocurren varias cosas a la vez tráenoslo todo. Lo que te sucede, te sucede en conjunto y es importante de cara a plantear soluciones tener toda la información.",
  },
  {
    q: "Tenéis varias especialidades ¿y si me pasan varias cosas o acabo con el especialista incorrecto?",
    a: "No te preocupes, entendemos que las realidades son complejas y que en muchos casos nuestros campos se solapan o el cribado inicial no es perfecto. Todo el equipo está capacitado para identificar tus necesidades y priorizar aquello que más necesites. Si tiene que verte otro compañero te derivaremos y si necesitas de varios te abordaremos en equipo.",
  },
  {
    q: "Pero yo lo que quiero en realidad es un masaje.",
    a: "Si necesitas terapia manual nuestros compañeros te la proporcionarán no te preocupes, aún así te valorarán y evaluarán tu caso por si puede haber otras opciones que también te interesen. Nosotros estamos para acompañarte e informarte pero decides tú.",
  },
];

const EJERCICIO_FAQS = [
  {
    q: "¿Por qué es importante el ejercicio durante y después del tratamiento oncológico?",
    a: "Porque está demostrado que puede mejorar la eficacia de los tratamientos, reducir los efectos secundarios y prevenir recaídas. Además, ayuda a recuperar fuerza, energía y bienestar emocional.",
  },
  {
    q: "¿Puedo entrenar si estoy en tratamiento?",
    a: "Sí, siempre adaptamos el programa a tu momento actual. Monitorizamos tu estado y ajustamos intensidad, ejercicios y descansos según tus necesidades y tolerancia.",
  },
];

const LINFEDEMA_ITEMS = [
  "Valoración individualizada para conocer el origen, la fase y la extensión del linfedema.",
  "Drenaje linfático manual para favorecer el retorno del líquido y disminuir el volumen.",
  "Vendajes compresivos y prendas de compresión adaptadas a cada caso.",
  "Ejercicio terapéutico específico para activar la bomba muscular y mejorar la circulación linfática.",
  "Educación y autocuidados para que aprendas a manejar tu linfedema en el día a día.",
];

const LINFEDEMA_FAQS = [
  {
    q: "¿Cada cuánto debo venir a tratarme el linfedema?",
    a: "La frecuencia depende del grado y evolución de tu linfedema. En fases iniciales o brotes, recomendamos sesiones más seguidas para controlar la inflamación. Una vez estabilizado, podemos espaciar los tratamientos y reforzar el autocuidado en casa.",
  },
  {
    q: "¿El linfedema se cura por completo?",
    a: "Actualmente no existe una cura definitiva, pero con tratamiento adecuado y hábitos saludables se puede controlar, reducir los síntomas y evitar que empeore. Nuestro objetivo es que tengas la mayor calidad de vida posible y que el linfedema deje de limitarte.",
  },
  {
    q: "¿Puedo hacer ejercicio si tengo linfedema?",
    a: "Sí, de hecho el ejercicio terapéutico es fundamental para activar la circulación linfática. En Fénix te enseñamos qué movimientos y actividades son seguras para tu caso y cómo realizarlas de forma progresiva, evitando sobrecargas o riesgos.",
  },
];

export default function PacienteOncologicoPage() {
  return (
    <div className="bg-white">
      {/* 1. HERO CON OVERLAY CORPORATIVO BURDEOS Y BOTONES CENTRADOS */}
      <PageHero
        variant="overlay"
        title="Paciente oncológico"
        description="Acompañamos tu recuperación con un enfoque global y personalizado desde el diagnóstico para mejorar tu calidad de vida y bienestar."
        imageSrc="/AndreaCamineroConPaciente.webp"
        imageAlt="Sesión de valoración y fisioterapia oncológica con Andrea Caminero en Fénix Fisioterapia"
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
              className="border-white/40 text-white hover:bg-white/10 font-medium px-7 py-3.5 rounded-xl transition-all"
            >
              Llamar al 605 973 833
            </Button>
          </>
        }
      />

      {/* 2. VALORACIÓN INICIAL - Fondo blanco con foto real y tarjeta de precio */}
      <section className="py-16 lg:py-20 border-t border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Contenido izquierdo */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#111111]">
                VALORACIÓN INICIAL DEL PACIENTE ONCOLÓGICO
              </h2>
              <div className="space-y-4 text-base text-zinc-600 leading-relaxed">
                <p>
                  La valoración inicial es el primer paso para diseñar un plan de recuperación adaptado a ti. No solo revisamos tu situación clínica, sino que también evaluamos tu estado físico actual, tus hábitos, tu nivel de energía y tus prioridades personales. Medimos fuerza, movilidad, postura y posibles signos de complicaciones para establecer un punto de partida claro y realista.
                </p>
                <p>
                  Este proceso nos permite anticiparnos a problemas que podrían aparecer, adaptar las cargas de ejercicio, prevenir lesiones y optimizar tu recuperación desde el primer día. Además, te explicamos cada paso y resolvemos todas tus dudas, para que empieces el tratamiento con seguridad y confianza. Nuestro objetivo no es solo tratar síntomas, sino ayudarte a recuperar tu autonomía, tu vitalidad y tu calidad de vida, acompañándote en cada fase del camino.
                </p>
              </div>

              {/* Tarjeta de precio integrada */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-2xl bg-zinc-50 border border-zinc-200 shadow-sm">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-[#111111] tracking-tight">60€</span>
                    <span className="text-sm font-semibold text-zinc-500 uppercase tracking-wide">Precio único</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-600 mt-1">
                    Sesión integral con historia clínica, evaluación física y diseño del plan personalizado.
                  </p>
                </div>
                <Button href="/contacto" variant="primary" size="md" className="shrink-0 w-full sm:w-auto">
                  Pedir cita
                </Button>
              </div>
            </div>

            {/* Foto real enriquecida */}
            <div className="lg:col-span-5">
              <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg border border-zinc-200/80">
                <img
                  src="/AndreaCamineroConPacientev2.webp"
                  alt="Valoración clínica en Fénix Fisioterapia"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* FAQs Valoración Inicial */}
          <div className="pt-6 border-t border-zinc-100">
            <h3 className="text-xl font-semibold text-[#111111] mb-6">
              Preguntas frecuentes sobre la valoración
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {VALORACION_FAQS.map((faq) => (
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
        </div>
      </section>

      {/* 3. SECCIÓN OBLIGATORIA CON FONDO DEL COLOR DE ACENTO: EJERCICIO ONCOLÓGICO */}
      <section className="bg-[#C61E49] text-white py-16 lg:py-20 border-y border-[#A5153A]">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Foto grande a la izquierda */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                <img
                  src="/FotoMiembroConPacienteHaciendoSentadilla.jpg"
                  alt="Ejercicio terapéutico adaptado para paciente oncológico"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Contenido técnico/clave a la derecha */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white leading-tight">
                EJERCICIO EN PACIENTES ONCOLÓGICOS
              </h2>
              <div className="space-y-4 text-white/90 text-base leading-relaxed font-normal">
                <p>
                  En Fénix Fisioterapia entendemos el ejercicio como una herramienta clave en todas las fases del proceso oncológico: desde el momento del diagnóstico hasta la etapa de supervivencia. No se trata solo de moverse, sino de hacerlo de forma segura, adaptada y basada en la evidencia científica para mejorar tu supervivencia, disminuir el impacto negativo de los tratamientos oncológicos y mejorar tu calidad de vida. En oncología el ejercicio es medicina y nosotros lo aplicamos con la máxima rigurosidad basándonos en evidencia científica.
                </p>
                <p>
                  Nuestros programas están diseñados para prevenir complicaciones, reducir efectos secundarios de los tratamientos (como fatiga, pérdida de masa muscular o rigidez articular) y ayudarte a recuperar la confianza en tu cuerpo.
                </p>
                <p>
                  Puedes entrenar con nosotros de forma presencial en nuestro centro, en grupos reducidos o en sesiones dúo/personalizadas, siempre supervisado por profesionales sanitarios especializados. También ofrecemos la opción online, con seguimiento y planificación adaptada, para que puedas avanzar desde tu casa con seguridad.
                </p>
              </div>

              {/* Puntos clave con CheckCircle2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-sm text-white/95">Programas adaptados a cada fase de tratamiento</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-sm text-white/95">Reducción de fatiga y mejora del estado físico</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-sm text-white/95">Supervisión sanitaria continua en Fénix Atalaya</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-sm text-white/95">Opción presencial reducida u online guiada</span>
                </div>
              </div>

              {/* Botón de acción en contraste blanco */}
              <div className="pt-4">
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 bg-white text-[#C61E49] hover:bg-zinc-100 font-semibold px-7 py-3.5 rounded-xl shadow-lg transition-colors text-base"
                >
                  <span>Pedir cita para ejercicio oncológico</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Tarjetas de FAQs de Ejercicio en bloque rojo */}
          <div className="pt-6 border-t border-white/20">
            <h3 className="text-xl font-semibold text-white mb-6">
              Preguntas sobre el entrenamiento
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {EJERCICIO_FAQS.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xs text-white"
                >
                  <p className="text-base font-semibold">{faq.q}</p>
                  <p className="mt-3 text-sm text-white/85 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. TRATAMIENTO DEL LINFEDEMA - Fondo blanco / neutro */}
      <section className="py-16 lg:py-20 border-t border-zinc-200 bg-zinc-50/50">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Texto y abordaje */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#111111]">
                LINFEDEMA - TRATAMIENTO DEL LINFEDEMA
              </h2>
              <div className="space-y-4 text-base text-zinc-600 leading-relaxed">
                <p>
                  El linfedema es una inflamación provocada por la acumulación de líquido linfático, frecuente tras ciertos tratamientos oncológicos como la cirugía o la radioterapia. Puede causar pesadez, dolor, disminución de la movilidad y afectar a la calidad de vida si no se aborda a tiempo.
                </p>
                <p>
                  En Fénix Fisioterapia contamos con fisioterapeutas especializadas en el tratamiento del linfedema. Nuestro objetivo es reducir la inflamación, mejorar la función del sistema linfático y prevenir la progresión de los síntomas.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#111111] mb-3">
                  Nuestro abordaje incluye:
                </h3>
                <ul className="space-y-2.5">
                  {LINFEDEMA_ITEMS.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm sm:text-base text-zinc-700">
                      <CheckCircle2 className="h-5 w-5 text-[#C61E49] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-zinc-200 p-6 bg-white shadow-xs space-y-2">
                <h4 className="text-base font-semibold text-[#111111]">
                  ¿Por qué tratar el linfedema en Fénix?
                </h4>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Porque no solo nos centramos en aliviar los síntomas, sino también en enseñarte a prevenir brotes, mantener la movilidad y cuidar la piel. Nuestro acompañamiento es continuo, adaptando el tratamiento a cada etapa y a tu situación personal, para que recuperes el máximo bienestar posible.
                </p>
              </div>
            </div>

            {/* Foto de apoyo */}
            <div className="lg:col-span-5">
              <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg border border-zinc-200/80">
                <img
                  src="/Dermatofuncional.webp"
                  alt="Tratamiento de linfedema y cuidado de la piel en Fénix Fisioterapia"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* FAQs Linfedema */}
          <div className="pt-6 border-t border-zinc-200">
            <h3 className="text-xl font-semibold text-[#111111] mb-6">
              Preguntas frecuentes sobre el linfedema
            </h3>
            <div className="space-y-3">
              {LINFEDEMA_FAQS.map((faq) => (
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
        </div>
      </section>

      {/* 5. BLOQUE CTA FINAL HACIA CONTACTO */}
      <ServiceContactCTA />
    </div>
  );
}
