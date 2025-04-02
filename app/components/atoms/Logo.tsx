import { useGenerals } from "@/app/context/generals.context";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  const { general } = useGenerals();

  const baseApi = process.env.NEXT_PUBLIC_STRAPI_URL; // URL del backend

  const logoURL = general.logo?.url
    ? `${baseApi}${general.logo.url}` // Convertimos la URL relativa en absoluta
    : "/default-logo.svg"; // Imagen por defecto si no hay logo


  console.log("Logo URL:", general.logo.url); // Para verificar en consola

  return (
    <Link href="/">
      {logoURL ? (
        <div className="container__logo flex">
            <Image 
            className="logo"
            priority src={logoURL} 
            width={120} 
            height={70} 
            alt="Logo"  
            />
        </div>
      ) : (
        <span>Logo no disponible</span>
      )}
    </Link>
  );
};
