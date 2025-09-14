import BeansPromo from "./assets/components/beansPromo";
import Hero from "./assets/components/hero";
import Items from "./assets/components/Items";
import Menu from "./assets/components/menu";
import Navbar from "./assets/components/navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Items />
        <Menu />
        <BeansPromo />
      </div>
    </>
  );
}

export default App;
