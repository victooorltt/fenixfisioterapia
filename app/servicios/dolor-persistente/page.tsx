import PageHero from "@/components/PageHero";
import Button from "@/components/ui/Button";
import ServiceContactCTA from "@/components/ServiceContactCTA";
import Link from "next/link";
import { ChevronDown, CheckCircle2, ArrowRight } from "lucide-react";

const DOLOR_FAQS = [
  {
    q: "Pero, ¿y si llevo muchos meses pero mi problema es más sencillo que todo esto?",
    a: "No te preocupes, todas las valoraciones comienzan igual que es escuchándote si pensamos que tu problema es más sencillo el profesional que te atienda te lo comunicará y se adaptará en la misma sesión. Solo se iniciarán protocolos más complejos si lo creemos necesario.",
  },
  {
    q: "¿Cuánto voy a tardar en estar bien?",
    a: "Siendo honestos no te podemos responder a esta pregunta, cada historia de dolor es un mundo y los procesos de rehabilitación de dolores persistentes son únicos. Pero iremos midiendo los avances para que no te sientas frustrado y nos comprometemos siempre a ser honestos, si creemos que no está funcionando bien te lo diremos y lo gestionaremos.",
  },
  {
    q: "¿En qué se va a diferenciar este tratamiento de los demás que he hecho? Ya he estado en muchos sitios.",
    a: "No sabemos aún qué tratamientos has recibido, te lo preguntaremos en la valoración, nosotros ahora mismo abordamos el dolor con el método PNE+, por si lo quieres buscar. Es el método más completo de abordaje del dolor persistente, está basado en evidencia científica y sabemos que funciona. Es un abordaje diferente y novedoso en España, sabemos a ciencia cierta que es eficaz y está validado, es por esto que no te vas a encontrar con nada parecido a lo que has visto en otros centros. Si lo de siempre no funciona lo mismo es momento de probar opciones diferentes.",
  },
  {
    q: "¿Qué tengo que llevar a mi valoración?",
    a: "Debes traer todo lo que tengas sobre tu historia, lo más relevante es comprender cómo han sucedido las cosas, cómo ha sido tu proceso, te queremos escuchar. Cuánta más información nos proporciones y mejor comprendamos por lo que has pasado y lo que estás pasando más herramientas tendremos para ayudarte.",
  },
];

export default function DolorPersistentePage() {
  return (
    <div className="bg-white">
      {/* 1. HERO */}
      <PageHero
        variant="overlay"
        title="Dolor persistente"
        description="Abordamos la complejidad del dolor desde todas sus dimensiones con terapia manual, ejercicio y educación terapéutica."
        imageSrc="/AndreaCamineroConPacientev2.webp"
        imageAlt="Consulta y tratamiento de dolor persistente en Fénix Fisioterapia Valladolid"
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

      {/* 2. ABORDAJE DEL DOLOR - Fondo blanco con foto real y tarjetas de información */}
      <section className="py-16 lg:py-20 border-t border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Texto explicativo */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#111111]">
                Abordaje del dolor persistente
              </h2>
              <div className="space-y-4 text-base text-zinc-600 leading-relaxed">
                <p>
                  En este campo, vamos a trabajar la complejidad del dolor desde todas sus dimensiones, a través de la terapia manual combinada con ejercicio y educación terapéutica; siendo una herramienta de trabajo en sí llamada PNE+.
                </p>
                <p>
                  Son abordajes diferentes en los que necesitamos escuchar toda la historia de tu dolor, y todo lo que se asocia a ella; para poder reconducir tu historia a afrontar tu vida y devolverte tu funcionalidad.
                </p>
              </div>

              {/* Tarjetas informativas de pilares */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl border border-zinc-200 bg-zinc-50/60">
                  <h3 className="font-semibold text-sm text-[#111111]">1. Escucha activa</h3>
                  <p className="mt-1 text-xs text-zinc-600 leading-relaxed">
                    Entendemos tu historia clínica y el impacto diario del dolor sin juzgar ni apresurar.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-zinc-200 bg-zinc-50/60">
                  <h3 className="font-semibold text-sm text-[#111111]">2. Terapia manual</h3>
                  <p className="mt-1 text-xs text-zinc-600 leading-relaxed">
                    Alivio sintomático y modulación neuromuscular adaptada a tu sensibilidad.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-zinc-200 bg-zinc-50/60">
                  <h3 className="font-semibold text-sm text-[#111111]">3. Readaptación</h3>
                  <p className="mt-1 text-xs text-zinc-600 leading-relaxed">
                    Movimiento gradual para recuperar la confianza corporal y la autonomía.
                  </p>
                </div>
              </div>
            </div>

            {/* Foto real */}
            <div className="lg:col-span-5">
              <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg border border-zinc-200/80">
                <img
                  src="/AndreaCamineroConPaciente.webp"
                  alt="Tratamiento y valoración del dolor persistente en Fénix Fisioterapia"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECCIÓN OBLIGATORIA CON FONDO DEL COLOR DE ACENTO: PNE+ Y TARIFA */}
      <section className="bg-[#C61E49] text-white py-16 lg:py-20 border-y border-[#A5153A]">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Foto grande a la izquierda */}
            <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col">
              <div className="relative w-full flex-1 aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto min-h-[360px] sm:min-h-[420px] lg:min-h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                <img
                  src="/JuanFernandezConPacienteEnCinta.jpg"
                  alt="Sesión de readaptación y ejercicio para el dolor persistente"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Contenido técnico/clave PNE+ y Tarifa */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white leading-tight">
                Metodología PNE+ (Pain Neuroscience Education +)
              </h2>
              <div className="space-y-4 text-white/90 text-base leading-relaxed font-normal">
                <p>
                  Es una herramienta que combina la educación terapéutica, el ejercicio terapéutico y la terapia manual con el fin de abordar el dolor en toda su complejidad. Para esto, es necesario llevar a cabo una primera sesión en la que necesitamos escuchar a la persona ampliamente para no dejarnos nada en el camino; rellenar una serie de test y utilizar una serie de pruebas específicas de cara al dolor.
                </p>
                <p>
                  Es por esto que la primera sesión puede que se alargue y no de tiempo a realizar tratamientos específicos, sin embargo, muchas veces es necesario que sea así ya que la problemática es grande y compleja.
                </p>
              </div>

              {/* Puntos clave con CheckCircle2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-sm text-white/95">Educación en neurociencia del dolor</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-sm text-white/95">Test y cuestionarios validados clínicamente</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-sm text-white/95">Tratamiento no invasivo y progresivo</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-sm text-white/95">Objetivo: recuperar tu funcionalidad real</span>
                </div>
              </div>

              {/* Tarjeta de Tarifa en contraste blanco */}
              <div className="p-6 rounded-2xl bg-white text-[#111111] shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111]">40€</span>
                    <span className="text-sm font-semibold text-zinc-500 uppercase tracking-wide">Precio por sesión</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-600 mt-1 max-w-sm">
                    Se realizará una valoración inicial previa antes de pasar a las sesiones continuadas de dolor persistente.
                  </p>
                </div>
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 bg-[#C61E49] hover:bg-[#aa173d] text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-colors text-sm w-full sm:w-auto shrink-0"
                >
                  <span>Pedir cita</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
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
              Resolvemos tus dudas sobre el dolor de larga evolución y nuestro método de trabajo.
            </p>
          </div>

          <div className="space-y-4">
            {DOLOR_FAQS.map((faq) => (
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
