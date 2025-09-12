import { easeOut, motion } from "motion/react";
export default function Navbar() {
  return (
    <>
      <div className="my-6 flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.2, animation: easeOut, delay: 0.2 }}
          className="font-semibold text-2xl"
        >
          Bottle
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.2, animation: easeOut, delay: 0.3 }}
          className="flex gap-20"
        >
          <p>Home</p>
          <p>Product</p>
          <p>Pricing</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.2, animation: easeOut, delay: 0.4 }}
        >
          <button className="bg-white text-black px-9 py-3 rounded-full">
            Contact
          </button>
        </motion.div>
      </div>
    </>
  );
}
