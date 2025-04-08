"use client";

import { useGenerals } from "@/app/context/generals.context";
import WhatsAppIcon from "@/app/icons/WhatsappIcon";

export default function Whatsapp() {
    const { general } = useGenerals();
    return(
    
            <a
                href={`https://wa.me/${general?.whatsappPhone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-20 md:bottom-10 right-6 z-50"
            >
                <div className="bg-[#19E53C] w-[50px] h-[50px] flex items-center justify-center shadow-lg hover:bg-green-600 transition">
                <WhatsAppIcon />
                </div>
            </a>
   
    )
}
