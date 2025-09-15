import { useRef } from "react";
import BeansPromo from "./assets/components/beansPromo";
import Contact from "./assets/components/contact";
import Footer from "./assets/components/footer";
import Hero from "./assets/components/hero";
import Items from "./assets/components/Items";
import Menu from "./assets/components/menu";
import Navbar from "./assets/components/navbar";
import Testimonial from "./assets/components/testimonial";

function App() {
  const homeRef = useRef(null);
  const coffeeRef = useRef(null);
  const shopRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <>
      <div>
        <Navbar refs={{ homeRef, coffeeRef, shopRef, aboutRef, contactRef }} />
        <section ref={homeRef}>
          <Hero />
        </section>
        <section>
          <Items />
        </section>
        <section ref={coffeeRef}>
          <Menu />
        </section>
        <section ref={shopRef}>
          <BeansPromo />
        </section>
        <section ref={aboutRef}>
          <Testimonial />
        </section>
        <section ref={contactRef}>
          <Contact />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default App;
