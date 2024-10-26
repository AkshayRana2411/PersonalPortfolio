import About from "./Components/About";
import Contacts from "./Components/Contacts";
import Education from "./Components/Education";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import Projects from "./Components/Projects";
import ResumeDownloadLink from "./Components/ResumeDownloadLink";
import Technologies from "./Components/Technologies";

export default function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 selection:bg-cyan-300 selection:text-cyan-900">
      <div className="w-full h-screen fixed top-0 -z-10">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-8">

        <NavBar />
        <Hero/>
        <About/> 
        <Technologies/>
        <Education/>
        <Projects/>
        <Contacts/>
      </div>
    </div>
  );
}
