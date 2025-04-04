import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { getGenerals } from "@/lib/getGenerals"; // Importamos la función de datos
import { Navbar } from "./components/molecules";
import { GeneralsProvider } from "./context/generals.context";
import { Footer } from "./components/ui/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "brightview",
  description: "Clean Workspace, Better Business",
  keywords: ["cleaning", "business"],
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const generals = await getGenerals(); // Obtiene `general` y `multilanguage`

  return (
    <html> 
      <body className="w-full"> 
        <GeneralsProvider generals={generals}> 
   {/*        <Navbar />  */}
          {children}
          <Footer />
        </GeneralsProvider>
      </body>
    </html>
  );
}


