import Hero from "./assets/components/hero";
import Navbar from "./assets/components/navbar";
function App() {
  return (
    <div className="flex justify-center">
      <div className="lg:w-[80%] w-full flex flex-col">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default App;
