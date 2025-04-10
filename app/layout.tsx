import "./styles/globals.css";
import { getGeneralData, getHomeData } from "@/lib/strapiApi";
import { Metadata } from "next";
import Footer from "./components/ui/Footer";
import Header from "./components/ui/Header";
import { GeneralsProvider } from "./context/generals.context";
import Whatsapp from "./components/ui/Whatsapp";

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
  const generalData = await getGeneralData();
  const homeData = await getHomeData();

  return (
    <html>
      <body className="w-full">
        <GeneralsProvider
          generals={{
            general: generalData,
            home: homeData,
          }}
        >
          <Header />
          {children}
          <Whatsapp />
          <Footer />
        </GeneralsProvider>
      </body>
    </html>
  );
}
