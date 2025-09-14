import BeansPromo from "./assets/components/beansPromo";
import Contact from "./assets/components/contact";
import Footer from "./assets/components/footer";
import Hero from "./assets/components/hero";
import Items from "./assets/components/Items";
import Menu from "./assets/components/menu";
import Navbar from "./assets/components/navbar";
import Testimonial from "./assets/components/testimonial";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Items />
        <Menu />
        <BeansPromo />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
