"use client"; 

import { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function HorizontalCarouselX() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Revisar el estado del scroll
  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10);
  };

  // Mover el scroll horizontalmente
  const scrollBy = (offset: number) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    setTimeout(checkScroll, 300);
  };

  // Comprobar el scroll al cargar
  useEffect(() => {
    checkScroll();
  }, []);

  return (
    <div className="relative w-full max-w-full overflow-hidden">
      {/* Flecha Izquierda (Solo en Mobile) */}
      <button
        onClick={() => scrollBy(-window.innerWidth)}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-md z-10 lg:hidden"
      >
        <FaChevronLeft size={20} />
      </button>

      {/* Contenedor con Scroll SOLO en Mobile, SIN Scroll en Pantallas Grandes */}
      <div
        ref={scrollRef}
        className="flex w-full overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar lg:flex-wrap lg:justify-center lg:gap-4 lg:overflow-visible"
        onScroll={checkScroll}
      >
        {/* Tarjetas */}
        {["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"].map((item, index) => (
          <div
            key={index}
            className="w-full min-w-full h-60 bg-blue-500 flex items-center justify-center text-white text-xl font-bold snap-center lg:w-auto lg:min-w-[250px] lg:h-72 lg:flex-grow"
          >
            {item}
          </div>
        ))}
      </div>

      {/* Flecha Derecha (Solo en Mobile) */}
      {showRightArrow && (
        <button
          onClick={() => scrollBy(window.innerWidth)}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-md z-10 lg:hidden"
        >
          <FaChevronRight size={20} />
        </button>
      )}
    </div>
  );
}
