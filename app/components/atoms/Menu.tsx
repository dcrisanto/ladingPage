import { useGenerals } from "@/app/context/generals.context";
import Link from "next/link";
import { useState } from "react";

export const Menu = () => {
const { multilanguage } = useGenerals(); // 🔹 Obtenemos multilanguage desde el contexto
const [isOpen, setIsOpen] = useState(false); // Estado para mostrar/ocultar menú en mobile

    return(
        <div className="md:hidden bg-white border-t">
            <ul className="py-2 px-4 space-y-2">
            {multilanguage?.menu?.map(({ id, label, url }) => (
                <li key={id}>
                <Link
                    href={url}
                    className="block text-gray-700 hover:text-blue-500 py-2"
                    onClick={() => setIsOpen(false)} // Cierra el menú al hacer clic
                >
                    {label}
                </Link>
                </li>
            ))}
            </ul>
        </div>
    )
}
