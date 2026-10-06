import Link from "next/link";
import PageHero from "@/components/PageHero";
import Button from "@/components/ui/Button";
import { ArrowRight, MapPin, Phone } from "lucide-react";

const HEALTH_SERVICES = [
  {
    title: "Paciente oncológico",
    image: "/AndreaCamineroConPaciente.webp",
    description:
      "Acompañamos tu recuperación con un enfoque global y personalizado, combinando la experiencia profesional y el cuidado humano para ayudarte a recuperar tu bienestar desde el interior.",
    href: "/servicios/paciente-oncologico",
    cta: "Ver especialidad",
  },
  {
    title: "Dolor persistente",
    image: "/AndreaCamineroConPacientev2.webp",
    description:
      "Trabajamos la complejidad del dolor desde todas sus dimensiones, a través de la terapia manual combinada con ejercicio y educación terapéutica.",
    href: "/servicios/dolor-persistente",
    cta: "Ver especialidad",
  },
  {
    title: "Suelo pélvico",
    image: "/SueloPelvico.webp",
    description:
      "La fisioterapia de suelo pélvico mejora tu calidad de vida con un plan personalizado que fortalece esta musculatura clave para tu salud.",
    href: "/servicios/suelo-pelvico",
    cta: "Ver especialidad",
  },
  {
    title: "Fisioterapia general",
    image: "/FotoMiembroConPacienteHaciendoSentadilla.jpg",
    description:
      "Tratamientos personalizados para aliviar el dolor, recuperar la movilidad y prevenir lesiones. Te ayudamos a mejorar tu calidad de vida con un acompañamiento cercano y profesional.",
    href: "/servicios/fisioterapia",
    cta: "Ver especialidad",
  },
  {
    title: "Fisioterapia a domicilio",
    image: "/AndreaCaminero-ValoracionADomicilio.webp",
    description:
      "Llevamos nuestra experiencia y equipamiento hasta tu hogar para que recibas el tratamiento que necesitas sin desplazarte. Comodidad, atención personalizada y resultados efectivos en tu propio espacio.",
    href: "/servicios/fisioterapia-a-domicilio",
    cta: "Ver especialidad",
  },
  {
    title: "Terapia Activa Personalizada (TAP)",
    image: "/Tap.webp",
    description:
      "En nuestras clases con grupos reducidos disfrutarás de una experiencia completamente personalizada para tu patología y situación diaria.",
    href: "/contacto",
    cta: "Consultar horarios",
  },
  {
    title: "Fisioterapia Dermatofuncional",
    image: "/Dermatofuncional.webp",
    description:
      "La fisioterapia dermatofuncional nos permite cuidar la piel y mejorar su aspecto.",
    href: "/contacto",
    cta: "Consultar servicio",
  },
];

const GYM_ACTIVITIES = [
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

export default function ServiciosPage() {
  return (
    <div className="bg-white">
      <PageHero
        variant="overlay"
        title="Nuestros Servicios"
        description="Dos grandes bloques de atención integral: fisioterapia especializada y ejercicio adaptado en gimnasio."
        imageSrc="/ClinicaGimnasioDesdeDentro.webp"
        imageAlt="Instalaciones de salud y entrenamiento de Fénix Fisioterapia en Valladolid"
        actions={
          <Button
            href="/contacto"
            variant="primary"
            size="lg"
            className="bg-[#C61E49] text-white hover:bg-[#aa173d] shadow-lg shadow-[#C61E49]/30 font-semibold px-7 py-3.5 rounded-xl transition-all"
          >
            Pedir cita
          </Button>
        }
      />

      {/* Bloque de Salud */}
      <section className="py-16 border-t border-zinc-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#111111]">
              Salud y Rehabilitación avanzada
            </h2>
            <p className="mt-4 text-base text-zinc-600 leading-relaxed">
              Atención personalizada, tratamientos basados en evidencia y un respaldo humano que acompaña cada paso.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HEALTH_SERVICES.map((service) => (
              <div
                key={service.title}
                className="group flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white overflow-hidden hover:border-zinc-300 hover:shadow-md transition-all"
              >
                <div>
                  <div className="aspect-[16/10] w-full overflow-hidden bg-zinc-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#111111] group-hover:text-[#C61E49] transition-colors tracking-tight">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-2">
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-sm font-medium text-[#C61E49] hover:text-[#aa173d] transition-colors"
                  >
                    <span>{service.cta}</span>
                    <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bloque de Gimnasio en color de acento */}
      <section className="py-16 lg:py-24 border-t border-[#A5153A] bg-[#C61E49] text-white">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          {/* Cabecera destacada con foto grande de las instalaciones */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-tight">
                Gimnasio y Actividades
              </h2>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal">
                El entrenamiento es una parte fundamental de la prevención de patologías, entrena con nosotros de forma controlada y guiada.
              </p>
              <p className="text-sm text-white/80 leading-relaxed">
                En Fénix Atalaya ponemos a tu disposición grupos reducidos y programas de ejercicio terapéutico adaptados para ponerte en forma con seguridad y supervisión profesional.
              </p>
              <div className="pt-2">
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 bg-white text-[#C61E49] hover:bg-zinc-100 font-semibold px-6 py-3 rounded-xl shadow-lg transition-colors text-sm"
                >
                  <span>Consultar horarios y plazas</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                <img
                  src="/GimnasioFenix.jpg"
                  alt="Instalaciones del gimnasio Fénix Atalaya en Valladolid"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Rejilla de actividades con fotos reales */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 pt-4">
            {GYM_ACTIVITIES.map((activity, idx) => {
              const isFourthCard = idx === 3;
              const isFifthCard = idx === 4;

              return (
                <div
                  key={activity.title}
                  className={`rounded-2xl border border-white/20 bg-white text-[#111111] overflow-hidden flex flex-col justify-between shadow-lg hover:shadow-xl transition-all col-span-1 lg:col-span-2 ${
                    isFourthCard ? "lg:col-start-2" : ""
                  } ${
                    isFifthCard
                      ? "md:col-span-2 md:max-w-md md:mx-auto w-full lg:max-w-none lg:mx-0 lg:col-span-2"
                      : ""
                  }`}
                >
                  <div>
                    <div className="aspect-[16/10] w-full overflow-hidden bg-zinc-100">
                      <img
                        src={activity.image}
                        alt={activity.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-[#111111] tracking-tight">
                        {activity.title}
                      </h3>
                      <p className="mt-2.5 text-sm text-zinc-600 leading-relaxed">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                  <div className="px-6 pb-6 pt-2">
                    <Link
                      href="/contacto"
                      className="inline-flex items-center text-sm font-medium text-[#C61E49] hover:text-[#aa173d] transition-colors"
                    >
                      <span>Consultar plazas</span>
                      <ArrowRight className="ml-1.5 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Última sección: Bloque CTA Final hacia Contacto */}
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
