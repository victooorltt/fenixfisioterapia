"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const SERVICE_LINKS = [
  { href: "/servicios/paciente-oncologico", label: "Fisioterapia oncológica" },
  { href: "/servicios/dolor-persistente", label: "Dolor persistente" },
  { href: "/servicios/suelo-pelvico", label: "Suelo pélvico" },
  { href: "/servicios/fisioterapia", label: "Fisioterapia general" },
  { href: "/servicios/fisioterapia-a-domicilio", label: "Fisioterapia a domicilio" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile menu on pathname change
  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const isInicioActive = pathname === "/";
  const isServicesActive = pathname?.startsWith("/servicios");
  const isEquipoActive = pathname?.startsWith("/nosotros");
  const isContactoActive = pathname?.startsWith("/contacto");

  return (
    <header className="sticky top-0 z-50 bg-[#C61E49] text-white border-b border-[#A5153A] shadow-xs">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="inline-flex items-center"
          aria-label="Fénix Fisioterapia"
        >
          <img
            src="/logo.webp"
            alt="Fénix Fisioterapia"
            className="h-10 w-auto brightness-0 invert"
          />
        </Link>

        {/* Desktop Links */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Navegación principal"
        >
          <Link
            href="/"
            className={`text-sm font-medium transition-colors ${
              isInicioActive
                ? "text-white font-semibold"
                : "text-white/90 hover:text-white"
            }`}
          >
            Inicio
          </Link>

          {/* Desktop Dropdown: Servicios */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              onClick={() => setServicesOpen((prev) => !prev)}
              className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors py-2 focus:outline-none ${
                isServicesActive
                  ? "text-white font-semibold"
                  : "text-white/90 hover:text-white"
              }`}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              <span>Servicios</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-0 mt-1 bg-[#9E1437] rounded-xl border border-[#C61E49] shadow-xl py-2 w-72 z-50">
                <Link
                  href="/servicios"
                  onClick={() => setServicesOpen(false)}
                  className="block px-4 py-2 text-xs uppercase font-semibold text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                >
                  Ver todos los servicios
                </Link>
                <div className="border-t border-[#C61E49]/60 my-1" />
                {SERVICE_LINKS.map((service) => {
                  const isCurrent = pathname === service.href;
                  return (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={() => setServicesOpen(false)}
                      className={`block px-4 py-2 text-sm transition-colors rounded-lg mx-1 ${
                        isCurrent
                          ? "bg-white/15 text-white font-semibold"
                          : "text-white/90 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {service.label}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <Link
            href="/nosotros"
            className={`text-sm font-medium transition-colors ${
              isEquipoActive
                ? "text-white font-semibold"
                : "text-white/90 hover:text-white"
            }`}
          >
            Equipo
          </Link>

          <Link
            href="/contacto"
            className={`text-sm font-medium transition-colors ${
              isContactoActive
                ? "text-white font-semibold"
                : "text-white/90 hover:text-white"
            }`}
          >
            Contacto
          </Link>
        </nav>

        {/* Desktop CTA & Contact */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href="tel:605973833"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white transition-colors"
            aria-label="Llamar al 605 973 833"
          >
            <Phone className="w-4 h-4 text-white" />
            <span>605 973 833</span>
          </a>
          <Link
            href="/contacto"
            className="bg-white text-[#C61E49] hover:bg-zinc-100 font-semibold px-4 py-2 rounded-xl text-sm transition-colors shadow-xs"
          >
            Pedir cita
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white hover:text-white/80 focus:outline-none"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden border-t border-[#A5153A] bg-[#9E1437] px-6 py-6 space-y-4 text-white shadow-xl">
          <nav className="flex flex-col space-y-3" aria-label="Navegación móvil">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={`text-base font-medium py-1 transition-colors ${
                isInicioActive
                  ? "text-white font-semibold"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Inicio
            </Link>

            {/* Mobile Accordion: Servicios */}
            <div>
              <button
                type="button"
                onClick={() => setMobileServicesOpen((prev) => !prev)}
                className="w-full flex items-center justify-between text-base font-medium py-1 text-white/90 hover:text-white focus:outline-none"
                aria-expanded={mobileServicesOpen}
              >
                <span className={isServicesActive ? "font-semibold text-white" : ""}>
                  Servicios
                </span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileServicesOpen && (
                <div className="pl-4 mt-2 space-y-2 border-l border-white/20 ml-2">
                  <Link
                    href="/servicios"
                    onClick={() => setIsOpen(false)}
                    className="block text-xs uppercase font-semibold text-white/70 hover:text-white py-1 transition-colors"
                  >
                    Ver todos los servicios
                  </Link>
                  {SERVICE_LINKS.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={() => setIsOpen(false)}
                      className={`block text-sm py-1 transition-colors ${
                        pathname === service.href
                          ? "text-white font-semibold"
                          : "text-white/85 hover:text-white"
                      }`}
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/nosotros"
              onClick={() => setIsOpen(false)}
              className={`text-base font-medium py-1 transition-colors ${
                isEquipoActive
                  ? "text-white font-semibold"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Equipo
            </Link>

            <Link
              href="/contacto"
              onClick={() => setIsOpen(false)}
              className={`text-base font-medium py-1 transition-colors ${
                isContactoActive
                  ? "text-white font-semibold"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Contacto
            </Link>
          </nav>

          {/* Mobile CTA */}
          <div className="pt-4 border-t border-white/20 flex flex-col gap-3">
            <a
              href="tel:605973833"
              className="inline-flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-white bg-white/10 hover:bg-white/20 rounded-xl transition-colors"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>605 973 833</span>
            </a>
            <Link
              href="/contacto"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center py-2.5 text-sm font-semibold bg-white text-[#C61E49] hover:bg-zinc-100 rounded-xl transition-colors shadow-xs"
            >
              Pedir cita
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
