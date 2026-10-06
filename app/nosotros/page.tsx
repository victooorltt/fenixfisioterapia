"use client";

import React, { useState } from "react";
import PageHero from "@/components/PageHero";
import Button from "@/components/ui/Button";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: "fisioterapia" | "entrenamiento" | "equipo";
  photo: string;
  description: string;
}

const restOfTeam: TeamMember[] = [
  {
    id: "juan-fernandez",
    name: "Juan Fernández",
    role: "CAFD - Especialista en entrenamiento",
    category: "entrenamiento",
    photo: "/miembros/JuanFernandez.webp",
    description:
      "Graduado en CAFD y TAFAD con Máster de ejercicio en poblaciones especiales. Concibe el ejercicio físico como una herramienta clave para la salud y un recurso terapéutico en oncología y readaptación.",
  },
  {
    id: "jorge-cuesta",
    name: "Jorge Cuesta",
    role: "Fisioterapeuta",
    category: "fisioterapia",
    photo: "/miembros/JorgeCuesta.webp",
    description:
      "Fisioterapia clínica, terapia manual y readaptación funcional orientada a la recuperación activa del movimiento y alivio del dolor.",
  },
  {
    id: "ana-sanchez",
    name: "Ana Sánchez",
    role: "Fisioterapeuta",
    category: "fisioterapia",
    photo: "/miembros/AnaSanchez.webp",
    description:
      "Fisioterapia clínica y abordaje integral personalizado, centrado en la salud del paciente y la prevención de recaídas.",
  },
  {
    id: "alexandra-ureta",
    name: "Alexandra Ureta",
    role: "Fisioterapeuta",
    category: "fisioterapia",
    photo: "/miembros/AlexandraUreta.webp",
    description:
      "Fisioterapia clínica especializada y acompañamiento terapéutico individualizado para la recuperación del bienestar funcional.",
  },
  {
    id: "angel-de-blas",
    name: "Ángel de Blas",
    role: "Fisioterapeuta",
    category: "fisioterapia",
    photo: "/miembros/AngelDeBlas.webp",
    description:
      "Fisioterapia musculoesquelética, valoración funcional y ejercicio terapéutico enfocado en una recuperación duradera.",
  },
  {
    id: "diana-pocero",
    name: "Diana Pocero",
    role: "Fisioterapeuta",
    category: "fisioterapia",
    photo: "/miembros/DianaPocero.webp",
    description:
      "Fisioterapia clínica y tratamientos individualizados para la mejora de la movilidad, alivio de molestias y calidad de vida.",
  },
  {
    id: "iris",
    name: "Iris",
    role: "Equipo Fénix",
    category: "equipo",
    photo: "/miembros/Iris.webp",
    description:
      "Atención y acompañamiento al paciente, gestión de citas y coordinación del centro para una atención ágil y cercana.",
  },
  {
    id: "cristina",
    name: "Cristina",
    role: "Equipo Fénix",
    category: "equipo",
    photo: "/miembros/Cristina.webp",
    description:
      "Recepción y soporte organizativo del equipo clínico, garantizando un trato personalizado y cuidado desde el primer contacto.",
  },
];

export default function NosotrosPage() {
  const [selectedFilter, setSelectedFilter] = useState<"todos" | "fisioterapia" | "entrenamiento" | "equipo">("todos");

  const filteredMembers = restOfTeam.filter((member) => {
    if (selectedFilter === "todos") return true;
    return member.category === selectedFilter;
  });

  return (
    <div className="bg-white">
      {/* 1. Hero */}
      <PageHero
        variant="gradient"
        title="Nuestro equipo"
        description={
          <div className="space-y-4">
            <p>
              Nuestro equipo se complementa a la perfección para cubrir todas las necesidades de nuestros pacientes.
            </p>
            <p>
              Somos un equipo joven, con experiencia y orientación al paciente.
            </p>
            <p>
              Nuestra formación continua y la coordinación entre profesionales nos permite ofrecer un tratamiento integral, personalizado y eficaz, siempre con el objetivo de mejorar la calidad de vida y el bienestar de cada persona.
            </p>
          </div>
        }
        imageSrc="/ClinicaDesdeFuera.webp"
        imageAlt="Fachada exterior de Fénix Fisioterapia en Valladolid"
        actions={
          <Button href="/contacto" variant="primary" size="lg">
            Pedir cita con el equipo
          </Button>
        }
      />

      {/* 2. Dirección y Fundadora - Sección exclusiva para Andrea Caminero */}
      <section className="border-t border-zinc-200 py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#111111]">
              Dirección y fundadora
            </h2>
          </div>

          {/* Andrea Caminero */}
          <article className="border border-zinc-200 rounded-2xl p-6 sm:p-8 lg:p-10 bg-white shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-4">
                <div className="rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-50 aspect-square">
                  <img
                    src="/miembros/AndreaCaminero.webp"
                    alt="Andrea Caminero, Fisioterapeuta y CEO de Fénix Fisioterapia"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-8 space-y-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#111111]">
                    Andrea Caminero
                  </h3>
                  <p className="text-sm font-semibold tracking-wider text-[#C61E49] uppercase mt-1">
                    FISIOTERAPEUTA Y CEO
                  </p>
                  <p className="text-sm text-zinc-500 mt-1">
                    Especialidad: oncología
                  </p>
                </div>

                <div className="pt-2 space-y-3.5 text-sm sm:text-base text-zinc-600 leading-relaxed">
                  <p>
                    Graduada en Fisioterapia, con Máster en Fisioterapia Manual Ortopédica y Máster en Innovación e Investigación en Actividad Física en Poblaciones Especiales. Especializada en Ejercicio Terapéutico y Linfología, cuenta además con formación avanzada en Drenaje Linfático Manual Método Leduc, Fisioterapia en el Aparato Locomotor y Ecografía Musculoesquelética.
                  </p>
                  <p>
                    Compagina su actividad clínica con la docencia universitaria y la investigación, participando en proyectos relacionados con la fisioterapia oncológica, el ejercicio terapéutico, la innovación tecnológica en salud y la mejora de la calidad de vida.
                  </p>
                  <p>
                    Fisioterapeuta y fundadora de Fénix Fisioterapia. Nacida en León y vinculada a Valladolid desde la infancia, se formó en la Universidad Rey Juan Carlos de Madrid y desarrolló gran parte de su trayectoria profesional en Castilla y León. Inició su carrera en Aspaym CyL, donde trabajó durante cinco años y participó en la puesta en marcha de nuevos centros, una experiencia clave que marcó su enfoque profesional y humano.
                  </p>
                  <p>
                    Con una clara vocación por la formación continua, se ha especializado en técnicas como la punción seca, la fibrolisis diacutánea, la neurodinámica, el ejercicio terapéutico y el drenaje linfático según el método Le Duc. Su práctica ha ido orientándose hacia la atención personalizada y el abordaje de casos complejos, con especial dedicación a la fisioterapia oncológica, ámbito en el que colabora activamente con la AECC.
                  </p>
                  <p>
                    Actualmente continúa ampliando su formación clínica y académica y ha iniciado los estudios de Psicología para ofrecer una atención más integral a sus pacientes, con el objetivo de mejorar su salud y calidad de vida desde una visión global y actualizada.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* 3. El resto del equipo (Tarjetas con selectores/rejilla) */}
      <section className="border-t border-zinc-200 py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#111111]">
                Equipo asistencial y coordinación
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 mt-2">
                Profesionales comprometidos con tu tratamiento y bienestar.
              </p>
            </div>

            {/* Selectores */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setSelectedFilter("todos")}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-xl transition-colors border",
                  selectedFilter === "todos"
                    ? "bg-[#111111] text-white border-[#111111]"
                    : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-300 hover:text-[#111111]"
                )}
              >
                Todos
              </button>
              <button
                type="button"
                onClick={() => setSelectedFilter("fisioterapia")}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-xl transition-colors border",
                  selectedFilter === "fisioterapia"
                    ? "bg-[#111111] text-white border-[#111111]"
                    : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-300 hover:text-[#111111]"
                )}
              >
                Fisioterapia
              </button>
              <button
                type="button"
                onClick={() => setSelectedFilter("entrenamiento")}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-xl transition-colors border",
                  selectedFilter === "entrenamiento"
                    ? "bg-[#111111] text-white border-[#111111]"
                    : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-300 hover:text-[#111111]"
                )}
              >
                Entrenamiento
              </button>
              <button
                type="button"
                onClick={() => setSelectedFilter("equipo")}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-xl transition-colors border",
                  selectedFilter === "equipo"
                    ? "bg-[#111111] text-white border-[#111111]"
                    : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-300 hover:text-[#111111]"
                )}
              >
                Equipo Fénix
              </button>
            </div>
          </div>

          {/* Grid de tarjetas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white border border-zinc-200 rounded-2xl overflow-hidden flex flex-col shadow-sm transition-all hover:border-zinc-300"
              >
                <div className="w-full aspect-square overflow-hidden bg-zinc-50 border-b border-zinc-100">
                  <img
                    src={member.photo}
                    alt={`${member.name}, ${member.role}`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-[#111111] tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold tracking-wider text-[#C61E49] uppercase mt-1">
                    {member.role}
                  </p>
                  <p className="text-sm text-zinc-600 leading-relaxed mt-3 flex-1">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Instalaciones y Sedes */}
      <section className="border-t border-zinc-200 py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#111111]">
              Nuestras sedes e instalaciones
            </h2>
            <p className="text-base text-zinc-600 mt-3 leading-relaxed">
              El trabajo de nuestro equipo se distribuye entre nuestras dos sedes en Valladolid, combinando la atención clínica sanitaria con el entrenamiento funcional adaptado.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Sedes Cards */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C61E49] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-[#111111]">Fénix Nido</h3>
                    <p className="text-sm font-medium text-zinc-700 mt-0.5">Paseo Hospital Militar 11</p>
                    <p className="text-sm text-zinc-600 mt-2 leading-relaxed">
                      Clínica sanitaria equipada para rehabilitación integral.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C61E49] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-[#111111]">Fénix Atalaya</h3>
                    <p className="text-sm font-medium text-zinc-700 mt-0.5">Paseo Hospital Militar 9</p>
                    <p className="text-sm text-zinc-600 mt-2 leading-relaxed">
                      Gimnasio para entrenar de forma segura y eficaz.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Button href="/contacto" variant="primary" size="md">
                  Pedir cita con el equipo
                </Button>
              </div>
            </div>

            {/* Facilities Image */}
            <div className="lg:col-span-7">
              <img
                src="/ClinicaGimnasioDesdeDentro.webp"
                alt="Instalaciones de Fénix Fisioterapia y gimnasio Fénix Atalaya en Valladolid"
                className="w-full aspect-[4/3] rounded-2xl object-cover border border-zinc-200 shadow-sm"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
