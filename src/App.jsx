import AboutSection from "./components/AboutSection";
import Acheivement from "./components/Acheivement";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";

function App() {
  return (
    <main className="overflow-x-hidden bg-black tracking-tighter text-gray-200 antialiased">
      <Navbar/>
      <Hero/>
      <AboutSection/>
      <Project/>
      <Skills/>
      <Acheivement/>
    </main>
  );
}
export default App;