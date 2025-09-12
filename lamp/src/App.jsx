import { useState } from "react";
import { motion } from "motion/react";
import Hero from "./assets/components/hero";
import Navbar from "./assets/components/navbar";
function App() {
  return (
    <>
      <div className="h-screen w-screen overflow-hidden">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}

export default App;
