import AboutUs from "./components/organisms/AboutUs";
import Cover from "./components/organisms/Cover";
import ImpactOurServices from "./components/organisms/ImpactOurServices";
import ProblemsWeSolve from "./components/organisms/ProblemsWeSolve";
import Projects from "./components/organisms/Projects";
import QuickContactForm from "./components/organisms/QuickContactForm";
import Services from "./components/organisms/Services";
import SpecializedServices from "./components/organisms/SpecializedServices";
import Testimonials from "./components/organisms/Testimonials";

export default async function Home() {
  return (
    <main className="">
      <Cover />
      <ProblemsWeSolve />
      <ImpactOurServices />
      <Services />
      <SpecializedServices />
      <AboutUs />
      <Projects />
      <Testimonials />
      <QuickContactForm />
    </main>
  );
}
