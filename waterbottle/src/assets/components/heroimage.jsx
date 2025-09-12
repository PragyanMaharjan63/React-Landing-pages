import { easeOut, motion } from "motion/react";
export default function HeroImage() {
  return (
    <>
      {" "}
      <div className="flex flex-col relative justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: -30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.4, animation: easeOut, delay: 0.4 }}
        >
          <img
            className="h-[70vh] drop-shadow-neutral-500 -translate-y-10 -translate-x-35 drop-shadow-2xl"
            src="/bottle.png"
            alt=""
          />
        </motion.div>
        <motion.div
          initial={{ scale: 0, filter: "blur(10px)" }}
          animate={{ scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-white size-[600px] rounded-full absolute -z-10  -translate-y-4"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.2, animation: easeOut, delay: 0.4 }}
        >
          <p className="text-neutral-600 w-sm ">
            Lightweight and compact WATER BOTTLE lets you hydrate effortlessly.
            Made of high quality transparent copolyster.
          </p>
        </motion.div>
      </div>
    </>
  );
}
