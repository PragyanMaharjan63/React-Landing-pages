import { motion } from "motion/react";
import Toastshow from "./toast";
import { useState } from "react";
export default function Hero() {
  const [Toast, setToast] = useState(false);
  return (
    <>
      <div className="fixed flex  justify-center items-center w-screen h-screen overflow-hidden ">
        <motion.div
          initial={{ translateY: "30px", opacity: 0, filter: "blur(10px)" }}
          animate={{ translateY: "0px", opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.3, animation: "easeout", delay: 0.2 }}
          className="fixed h-[25vw] w-[11000px] bg-radial from-[#4E5977] to-[#353956] -z-10  opacity-80 -rotate-[64deg]"
        ></motion.div>
        <motion.div
          initial={{ y: "30px", opacity: 0, filter: "blur(10px)" }}
          animate={{ y: "0px", opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.3, animation: "easeout", delay: 0.6 }}
          className="text-white flex hero-text flex-col items-end gap-y-3 space-y-10 font-bold text-7xl absolute top-[33vh] right-[60vw] z-10"
        >
          LUMIER<span className="font-normal">DARK</span>
          <button
            className="bg-[#F05400] text-lg font-normal py-3 px-10 rounded-lg flex "
            onClick={() => {
              setToast(true);
              setTimeout(() => setToast(false), 3000);
            }}
          >
            PURCHASE
          </button>
        </motion.div>
        <motion.div
          initial={{ y: "30px", opacity: 0, filter: "blur(10px)" }}
          animate={{ y: "0px", opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.3, animation: "easeout", delay: 0.9 }}
          className="overflow-hidden h-screen z-0 w-screen"
        >
          <img
            src="/images/855602675ec23c773e2d303d27674610a2b22315.png"
            alt="lamp"
            className="fixed h-[70vw] right-[10vw] top-[6vh]"
          />
        </motion.div>
      </div>
      <div className="flex fixed z-10 text-neutral-300 gap-6 w-full justify-center  bottom-[8vh] text-sm">
        <motion.div
          initial={{ y: "30px", opacity: 0, filter: "blur(10px)" }}
          animate={{ y: "0px", opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.3, animation: "easeout", delay: 1.2 }}
          className="flex flex-col w-sm"
        >
          <div className="font-bold">Light Style</div>
          <div>
            The Lumier Dark delivers smooth, directional lighting that reduces
            glare and shadows. Ideal for focused tasks or creating a calm,
            well-lit atmosphere.
          </div>
        </motion.div>
        <motion.div
          initial={{ y: "30px", opacity: 0, filter: "blur(10px)" }}
          animate={{ y: "0px", opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.3, animation: "easeout", delay: 1.4 }}
          className="flex flex-col w-sm"
        >
          <div className="font-bold">Minimalist</div>
          <div>
            With its clean slihoutte and matte black finish, this lamp embraces
            minimalist design.
          </div>
        </motion.div>
      </div>
      {Toast && <Toastshow message="Can't Buy this product" />}
    </>
  );
}
