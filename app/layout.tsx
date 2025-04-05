import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '@/styles/ui/globals.css';
import { getGeneralData } from '@/lib/strapiApi'; // Importamos la función de datos
import { Navbar } from './components/molecules';
import { GeneralsProvider } from './context/generals.context';

export const metadata: Metadata = {
  title: 'brightview',
  description: 'Clean Workspace, Better Business',
  keywords: ['cleaning', 'business'],
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
          {/*        <Navbar />  */}
          {children}
        </GeneralsProvider>
      </body>
    </html>
  );
}
