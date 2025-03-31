import HomeBanner from "./components/organisms/HomeBanner";
import HomeSolve from "./components/organisms/HomeSolve";
import { HomeData } from "./interfaces/home";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

interface HomeProps {
  home: HomeData
}


export default async function Home({ home }: HomeProps) {

  const res = await fetch(`${API_URL}/home?populate[home_banner][populate]=*&populate[home_problems_solve][populate]=*&populate[home_impact_services][populate]=*&populate[home_services][populate]=*&populate[home_specialized][populate]=*&populate[home_about][populate]=*&populate[home_projects][populate]=*&populate[home_testimonials][populate]=*&populate[home_contact][populate]=*&populate[home_map][populate]=*`, {
    cache: "no-store", // O usa "force-cache" si quieres revalidar con ISR
  });
  
  if (!res.ok) {
    throw new Error("Failed to fetch home data");
  }
  
  const { data: homeData } = await res.json();

  console.log(homeData);
  

  return (
    <div className="grid grid-rows-12 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-1 items-center sm:items-start">
       <HomeBanner data={
        homeData.home_banner
      }
        />

        <HomeSolve data={homeData.home_problems_solve} />
      </main>
      <footer className="row-start-12 flex gap-[24px] flex-wrap items-center justify-center">
        <span>footer</span>
      </footer>
    </div>
  );
}


