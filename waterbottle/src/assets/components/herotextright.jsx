import Line from "./line";
import { motion, easeOut } from "motion/react";
export default function HeroTextRight() {
  return (
    <>
      <div className="flex flex-col  gap-y-10">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.2, animation: easeOut, delay: 0.7 }}
            className="text-xl font-semibold"
          >
            Water Bottle
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.2, animation: easeOut, delay: 0.8 }}
            className="text-neutral-600 w-sm"
          >
            We make qualityful water bottle
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.2, animation: easeOut, delay: 0.8 }}
        >
          <Line />
        </motion.div>
        <div>
          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.2, animation: easeOut, delay: 0.9 }}
            className="text-xl font-semibold"
          >
            Travel Tumbler
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.2, animation: easeOut, delay: 1.0 }}
            className="text-neutral-600 w-sm"
          >
            We make qualityful Travel Tumbler
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.2, animation: easeOut, delay: 1.1 }}
        >
          <Line />
        </motion.div>
        <div>
          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.2, animation: easeOut, delay: 1.2 }}
            className="text-xl font-semibold"
          >
            Active Tumbler
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.2, animation: easeOut, delay: 1.3 }}
            className="text-neutral-600 w-sm"
          >
            We make qualityful Active Tumbler
          </motion.p>
        </div>
      </div>
    </>
  );
}
