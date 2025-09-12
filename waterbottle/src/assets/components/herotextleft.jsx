import { easeOut, motion } from "motion/react";
export default function HeroTextLeft() {
  return (
    <>
      <div
        style={{ fontFamily: "'Inria Sans', sans-serif" }}
        className="flex flex-col gap-y-10"
      >
        <div className="flex flex-col font-bold text-[90px] leading-none">
          <motion.span
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.2, animation: easeOut, delay: 0.4 }}
          >
            Drinking
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.2, animation: easeOut, delay: 0.5 }}
          >
            Water
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.2, animation: easeOut, delay: 0.6 }}
          >
            Bottle
          </motion.span>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.2, animation: easeOut, delay: 0.7 }}
        >
          <p className="w-sm text-neutral-600">
            The cap is simple without excess details and you can drink from any
            angle pleasantly, like drinking out of a glass or mug
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.2, animation: easeOut, delay: 0.7 }}
        >
          <button className="bg-black text-white px-9 py-3 rounded-full ">
            Start Now
          </button>
        </motion.div>
      </div>
    </>
  );
}
