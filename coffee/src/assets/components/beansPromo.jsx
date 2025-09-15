import React from "react";
import { motion } from "motion/react";

export default function BeansPromo() {
  const blurUp = { opacity: 0, y: 30, filter: "blur(10px)" };
  const noblurUp = { opacity: 1, y: 0, filter: "blur(0px)" };
  return (
    <div
      style={{ fontFamily: "'Poppins', 'sans-serif'" }}
      className="flex justify-center md:justify-between items-center  w-full"
    >
      <motion.img
        initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.2, delay: 0.4 }}
        className="hidden md:flex  sm:size-60"
        src="/images/grainsOnHand.png"
        alt="beans"
      />
      <div className="flex flex-col items-center w-max my-10">
        <motion.p
          initial={blurUp}
          animate={noblurUp}
          transition={{ duration: 0.2, delay: 0.4 }}
          className="mb-9 sm:text-3xl font-semibold sm:w-md"
        >
          Check out our best coffee betans
        </motion.p>
        <motion.button
          initial={blurUp}
          animate={noblurUp}
          transition={{ duration: 0.2, delay: 0.4 }}
          className="bg-[#2F251C] text-white text-sm py-2 px-6 rounded-full"
        >
          Explore our products
        </motion.button>
      </div>
      <motion.img
        initial={{ opacity: 0, x: 30, filter: "blur(10px)" }}
        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.2, delay: 0.4 }}
        className="hidden lg:flex size-50"
        src="/images/scoopofbeans.png"
        alt=""
      />
    </div>
  );
}
