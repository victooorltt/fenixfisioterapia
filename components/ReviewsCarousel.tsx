"use client";

import React, { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export interface Review {
  author: string;
  date: string;
  text: string;
}

export interface ReviewsCarouselProps {
  reviews: Review[];
  className?: string;
}

export default function ReviewsCarousel({
  reviews,
  className = "",
}: ReviewsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const maxIndex = Math.max(0, reviews.length - itemsPerPage);
  const safeIndex = Math.min(currentIndex, maxIndex);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Carrusel Viewport */}
      <div
        className="overflow-hidden py-1"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out -mx-3"
          style={{
            transform: `translateX(-${safeIndex * (100 / itemsPerPage)}%)`,
          }}
        >
          {reviews.map((item, idx) => (
            <div
              key={idx}
              className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
            >
              <div className="h-full rounded-2xl border border-zinc-200 bg-white p-6 flex flex-col justify-between shadow-xs hover:border-zinc-300 transition-all min-h-[220px]">
                <div>
                  <div
                    className="flex items-center gap-1 text-amber-400 mb-4"
                    aria-label="5 de 5 estrellas"
                  >
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-zinc-600 leading-relaxed italic">
                    &ldquo;{item.text}&rdquo;
                  </p>
                </div>
                <div className="pt-6 mt-4 border-t border-zinc-100 flex items-center justify-between text-xs">
                  <span className="font-medium text-[#111111]">{item.author}</span>
                  <span className="text-zinc-500">{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controles de navegación y paginación */}
      <div className="flex items-center justify-between pt-2">
        {/* Indicadores de puntos */}
        <div
          className="flex items-center gap-2"
          aria-label="Indicadores de diapositivas"
        >
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                safeIndex === idx
                  ? "w-7 bg-[#C61E49]"
                  : "w-2.5 bg-zinc-200 hover:bg-zinc-300"
              }`}
              aria-label={`Ir a la diapositiva ${idx + 1}`}
            />
          ))}
        </div>

        {/* Flechas anterior / siguiente */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrev}
            disabled={safeIndex === 0}
            className="p-2.5 rounded-full border border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50 hover:text-[#C61E49] hover:border-[#C61E49]/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-xs focus:outline-none"
            aria-label="Reseña anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={safeIndex >= maxIndex}
            className="p-2.5 rounded-full border border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50 hover:text-[#C61E49] hover:border-[#C61E49]/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-xs focus:outline-none"
            aria-label="Siguiente reseña"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
