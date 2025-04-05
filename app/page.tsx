import { getHomeData } from '@/lib/strapiApi';
import HomeBanner from './components/organisms/HomeBanner';

export default async function Home() {
  const homeData = await getHomeData();

  return (
    <>
      <main className="">
        <HomeBanner data={homeData.banner} />
        {/* <HomeSolve data={homeData.problemsWeSolve} /> */}
        {/* <HomeImpactServices data={homeData.home_impact_services} /> */}
        {/*       <HomeImpactServices data={homeData.home_impact_services} />
            <HomeServices data={homeData.home_services} />
            <HomeSpecialized data={homeData.home_specialized} /> */}
      </main>

      <footer className="flex gap-6 flex-wrap items-center justify-center">
        <span>footer</span>
      </footer>
    </>
  );
}
