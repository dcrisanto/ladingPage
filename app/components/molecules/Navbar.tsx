"use client"; // Asegura que este componente se ejecute en el cliente
import { useGenerals } from "@/app/context/generals.context";
import Link from "next/link";
import { Logo } from "../atoms/Logo";
import { useState } from "react";
//import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react"; // Íconos para el menú hamburguesa

/* interface NavbarProps {
  multilanguage: { menu: { id: number; label: string; url: string }[] };
} */

export const Navbar = () => {
  //const pathname = usePathname();
  const { multilanguage } = useGenerals(); // 🔹 Obtenemos multilanguage desde el contexto
  const [isOpen, setIsOpen] = useState(false); // Estado para mostrar/ocultar menú en mobile
  console.log(JSON.stringify(multilanguage, null, 2));

  return (
    <nav className="Navbar bg-white shadow-md relative sm:h-[80px] md:h-[90px]">
      <div className="w-full p-6">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Logo />

          {/* Menú Desktop */}
          <div className="hidden md:flex md:gap-4 lg:gap-10 lg:pr-20">
            {multilanguage?.menu?.map(({ id, label, url }) => (
              <Link
                key={id}
                href={url}
                className="text-primary md:text-[18px] lg:text-[21px]" /* hover:text-blue-500 */
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Botón Hamburguesa (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

        {/* Menú Mobile en posición absoluta */}
        {isOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t z-50">
              <ul>
                {multilanguage?.menu?.map(({ id, label, url }) => (
                  <li key={id}>
                    <Link
                      href={url}
                      className="block text-primary p-5 text-[16px] border-t border-black"
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


