import "./styles/globals.css";
import { getGenerals } from "@/lib/getGenerals"; // Importamos la función de datos

import { Metadata } from "next";
import Head from "next/head";
import { Navbar } from "./components/molecules";
import Footer from "./components/ui/Footer";
import Header from "./components/ui/Header";
import { GeneralsProvider } from "./context/generals.context";

export const metadata: Metadata = {
  title: "Brightview",
  description: "Clean Workspace, Better Business",
  keywords: ["cleaning", "business"],
  openGraph: {
    title: "Brightview",
    description: "Clean Workspace, Better Business",
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //const generals = await getGenerals(); // Obtiene `general` y `multilanguage`

  return (
    <html>
      <body className="w-full">
        {/* <GeneralsProvider generals={generals}>  */}
        <Header />
        {children}
        <Footer />
        {/* </GeneralsProvider> */}
      </body>
    </html>
  );
}
