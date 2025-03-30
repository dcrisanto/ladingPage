"use client"; // Asegura que este componente se ejecute en el cliente
import { useGenerals } from "@/app/context/generals.context";
import Link from "next/link";
import { Logo } from "../atoms/Logo";
import { useState } from "react";
//import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react"; // Íconos para el menú hamburguesa

interface NavbarProps {
  multilanguage: { menu: { id: number; label: string; url: string }[] };
}

export const Navbar = () => {
  //const pathname = usePathname();
  const { multilanguage } = useGenerals(); // 🔹 Obtenemos multilanguage desde el contexto
  const [isOpen, setIsOpen] = useState(false); // Estado para mostrar/ocultar menú en mobile


  return (
    <nav className="Navbar bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Logo />

          {/* Menú Desktop */}
          <div className="hidden md:flex space-x-6">
            {multilanguage?.menu?.map(({ id, label, url }) => (
              <Link
                key={id}
                href={url}
                className="text-primary text-2xl" /* hover:text-blue-500 */
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Botón Hamburguesa (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <ul className="py-2 px-4 space-y-2">
            {multilanguage?.menu?.map(({ id, label, url }) => (
              <li key={id}>
                <Link
                  href={url}
                  className="block text-primary py-2"
                  onClick={() => setIsOpen(false)} // Cierra el menú al hacer clic
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};
