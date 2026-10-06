import React from "react";

export interface PageHeroProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  actions?: React.ReactNode;
  buttons?: React.ReactNode;
  variant?: "gradient" | "overlay";
  className?: string;
  children?: React.ReactNode;
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  actions,
  buttons,
  variant = "gradient",
  className = "",
  children,
}) => {
  const actionNodes = actions ?? buttons;

  if (variant === "overlay") {
    return (
      <section
        className={`relative min-h-[480px] sm:min-h-[520px] lg:min-h-[580px] flex items-center overflow-hidden bg-[#180407] border-b border-zinc-200/20 ${className}`}
      >
        {/* Foto a sangre completa con overlay sutil y translúcido que permite ver claramente la foto */}
        <div className="absolute inset-0 h-full w-full">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-full w-full object-cover object-center"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#180407]/60 via-[#2D0711]/30 to-[#140306]/65" />
        </div>

        {/* Contenido centrado tanto en mobile como en desktop */}
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:py-32 w-full">
          <div className="text-center mx-auto max-w-4xl space-y-6">
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)] leading-[1.15]">
              {title}
            </h1>
            {description && (
              <div className="text-white/90 text-base sm:text-lg max-w-xl mx-auto font-normal leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.4)]">
                {typeof description === "string" ? <p>{description}</p> : description}
              </div>
            )}
            {actionNodes && (
              <div className="pt-2 flex flex-wrap gap-4 items-center justify-center [&_a:first-child]:bg-[#C61E49] [&_a:first-child]:text-white [&_a:first-child]:hover:bg-[#aa173d] [&_a:first-child]:shadow-lg [&_a:first-child]:shadow-[#C61E49]/30 [&_a:first-child]:font-semibold [&_a:first-child]:px-7 [&_a:first-child]:py-3.5 [&_a:first-child]:rounded-xl [&_a:first-child]:transition-all [&_button:first-child]:bg-[#C61E49] [&_button:first-child]:text-white [&_button:first-child]:hover:bg-[#aa173d] [&_button:first-child]:shadow-lg [&_button:first-child]:shadow-[#C61E49]/30 [&_button:first-child]:font-semibold [&_button:first-child]:px-7 [&_button:first-child]:py-3.5 [&_button:first-child]:rounded-xl [&_button:first-child]:transition-all [&_a:nth-child(2)]:border [&_a:nth-child(2)]:border-white/40 [&_a:nth-child(2)]:hover:border-white [&_a:nth-child(2)]:text-white [&_a:nth-child(2)]:bg-transparent [&_a:nth-child(2)]:hover:bg-white/10 [&_a:nth-child(2)]:font-medium [&_a:nth-child(2)]:px-7 [&_a:nth-child(2)]:py-3.5 [&_a:nth-child(2)]:rounded-xl [&_a:nth-child(2)]:transition-all [&_button:nth-child(2)]:border [&_button:nth-child(2)]:border-white/40 [&_button:nth-child(2)]:hover:border-white [&_button:nth-child(2)]:text-white [&_button:nth-child(2)]:bg-transparent [&_button:nth-child(2)]:hover:bg-white/10 [&_button:nth-child(2)]:font-medium [&_button:nth-child(2)]:px-7 [&_button:nth-child(2)]:py-3.5 [&_button:nth-child(2)]:rounded-xl [&_button:nth-child(2)]:transition-all">
                {actionNodes}
              </div>
            )}
            {children}
          </div>
        </div>
      </section>
    );
  }

  // Variant "gradient" (default)
  return (
    <section
      className={`relative min-h-[480px] sm:min-h-[520px] lg:min-h-[580px] flex items-center overflow-hidden bg-[#180407] lg:bg-white border-b border-zinc-200/20 lg:border-zinc-200 ${className}`}
    >
      {/* Foto: a sangre en mobile con overlay sutil; a la derecha en desktop con degradado lateral blanco */}
      <div className="absolute inset-0 lg:left-auto lg:right-0 lg:w-[60%] xl:w-[64%] h-full">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-full w-full object-cover object-center"
          fetchPriority="high"
        />
        {/* Overlay mobile sutil (granate translúcido claro) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#180407]/65 via-[#2D0711]/35 to-[#140306]/70 lg:hidden" />
        {/* Degradado lateral blanco desktop */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent to-35% hidden lg:block" />
      </div>

      {/* Contenido: centrado y blanco en mobile; alineado a la izquierda con texto oscuro en desktop */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:py-32 w-full">
        <div className="max-w-2xl mx-auto text-center lg:text-left lg:mx-0 lg:max-w-xl space-y-6 lg:-translate-x-3">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white lg:text-[#111111] leading-[1.12] drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] lg:drop-shadow-none">
            {title}
          </h1>
          {description && (
            <div className="text-base sm:text-lg text-white/95 lg:text-zinc-600 leading-relaxed max-w-lg mx-auto lg:mx-0 drop-shadow-[0_1px_6px_rgba(0,0,0,0.3)] lg:drop-shadow-none font-normal">
              {typeof description === "string" ? <p>{description}</p> : description}
            </div>
          )}
          {actionNodes && (
            <div className="pt-2 flex flex-wrap gap-4 items-center justify-center lg:justify-start max-lg:[&_a]:bg-white max-lg:[&_a]:text-[#C61E49] max-lg:[&_a]:hover:bg-zinc-100 max-lg:[&_a]:shadow-lg max-lg:[&_a]:font-semibold max-lg:[&_a]:rounded-xl max-lg:[&_a]:px-7 max-lg:[&_a]:py-3.5 max-lg:[&_button]:bg-white max-lg:[&_button]:text-[#C61E49] max-lg:[&_button]:hover:bg-zinc-100 max-lg:[&_button]:shadow-lg max-lg:[&_button]:font-semibold max-lg:[&_button]:rounded-xl max-lg:[&_button]:px-7 max-lg:[&_button]:py-3.5">
              {actionNodes}
            </div>
          )}
          {children}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
