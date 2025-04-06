import { GeneralsProvider } from "./context/generals.context";
import type { Metadata } from 'next';
import "./styles/globals.css";
import { getGeneralData } from '@/lib/strapiApi'; // Importamos la función de datos

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

  return (
    <html>
      <body className="w-full">
        <GeneralsProvider
          generals={{
            general: generalData,
          }}
        >
          {children}
        </GeneralsProvider>
      </body>
    </html>
  );
}
