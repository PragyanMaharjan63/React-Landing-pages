import Hero from "./assets/components/hero";
import Items from "./assets/components/Items";
import Menu from "./assets/components/menu";
import Navbar from "./assets/components/navbar";

function App() {
  return (
    <>
      <div className="space-y-20">
        <Navbar />
        <Hero />
        <Items />
        <Menu />
      </div>
    </>
  );
}

export default App;
