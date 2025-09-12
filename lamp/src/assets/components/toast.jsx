import { motion } from "motion/react";
export default function Toast({ message }) {
  return (
    <>
      <motion.div
        initial={{ x: "30px", opacity: 0, filter: "blur(10px)" }}
        animate={{ x: "0px", opacity: 1, filter: "blur(0px)" }}
        exit={{ x: "30px", opacity: 0, filter: "blur(10px)" }}
        className="absolute rounded-lg bg-[#353956] p-3 px-5 flex  items-center w-[400px] text-white right-8 top-[7vh] z-10"
      >
        {message}
      </motion.div>
    </>
  );
}
