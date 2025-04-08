import WhatsAppIcon from "@/app/icons/WhatsappIcon";

export default function Whatsapp() {
    return(
    
            <a
                href="https://wa.me/573001112233"
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
