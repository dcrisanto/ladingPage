import { getHomeData } from '@/lib/strapiApi';
import Cover from "./components/organisms/Cover";
import ImpactOurServices from "./components/organisms/ImpactOurServices";
import ProblemsWeSolve from "./components/organisms/ProblemsWeSolve";
import Projects from "./components/organisms/Projects";
import QuickContactForm from "./components/organisms/QuickContactForm";
import Services from "./components/organisms/Services";
import SpecializedServices from "./components/organisms/SpecializedServices";
import Header from "./components/ui/Header";

export default async function Home() {
  const homeData = await getHomeData();
  console.log(homeData)
  return (
    <main className="">
      <Header />
      <Cover />
      <ProblemsWeSolve />
      <ImpactOurServices />
      <Services />
      <SpecializedServices />
      <Projects />
      <QuickContactForm />
    </main>
  );
}
