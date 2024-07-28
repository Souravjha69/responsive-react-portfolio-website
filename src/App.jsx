import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="overflow-x-hidden bg-black tracking-tighter text-gray-200 antialiased">
      <Navbar/>
      <Hero/>
    </main>
  );
}
export default App;