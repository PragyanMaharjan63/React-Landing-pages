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
  const reviewRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <>
      <div className="flex flex-col gap-y-40">
        <Navbar refs={{ homeRef, coffeeRef, shopRef, reviewRef, contactRef }} />
        <section ref={homeRef}>
          <Hero />
        </section>
        {/* <section>
          <Items />
        </section> */}
        <section ref={coffeeRef} className="scroll-mt-20">
          <Menu />
        </section>
        <section ref={shopRef} className="scroll-mt-20">
          <BeansPromo />
        </section>
        <section ref={reviewRef} className="scroll-mt-40">
          <Testimonial />
        </section>
        <section ref={contactRef} className="scroll-mt-20">
          <Contact />
          <Footer />
        </section>
      </div>
    </>
  );
}

export default App;
