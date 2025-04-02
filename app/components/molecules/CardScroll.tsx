"use client"; 

import { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function HorizontalCarousel() {
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
      {/* Flecha Izquierda */}
      <button
        onClick={() => scrollBy(-window.innerWidth)}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-md z-10"
      >
        <FaChevronLeft size={20} />
      </button>

      {/* Contenedor con Scroll */}
      <div
        ref={scrollRef}
        className="flex w-full overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
        onScroll={checkScroll}
      >
        {/* Tarjetas */}
        {["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"].map((item, index) => (
          <div
            key={index}
            className="w-full min-w-full h-60 bg-blue-500 flex items-center justify-center text-white text-xl font-bold snap-center"
          >
            {item}
          </div>
        ))}
      </div>

      {/* Flecha Derecha */}
      {showRightArrow && (
        <button
          onClick={() => scrollBy(window.innerWidth)}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-md z-10"
        >
          <FaChevronRight size={20} />
        </button>
      )}
    </div>
  );
}
