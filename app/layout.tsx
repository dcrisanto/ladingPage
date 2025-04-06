import "./styles/globals.css";
import { getGenerals } from "@/lib/getGenerals"; // Importamos la función de datos
import { Navbar } from "./components/molecules";
import { GeneralsProvider } from "./context/generals.context";
import Head from "next/head";
import { Metadata } from "next";
import { Footer } from "./components/ui/Footer";

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
        {/*        <Navbar />  */}
        {children}
        {/* <Footer /> */}
        {/* </GeneralsProvider> */}
      </body>
    </html>
  );
}
