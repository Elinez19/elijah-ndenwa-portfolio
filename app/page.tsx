import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Skills from "@/components/Skills";
import SpotlightPage from "@/components/Spotlight";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
  return (
   <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full">
    <FloatingNav navItems={navItems} />
    <Hero/>
    {/* <Grid/> */}
    <Skills/>
    <Education/>
    <SpotlightPage/>
    <RecentProjects/>
    {/* <Clients/> */}
    <Experience/>
    <Contact/>
    <Footer/>
    </div>
   </main>
  );
}
