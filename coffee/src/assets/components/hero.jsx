import { delay } from "motion";
import { motion } from "motion/react";
export default function Hero({ ref }) {
  const blurUp = { opacity: 0, y: 30, filter: "blur(10px)" };
  const noblurUp = { opacity: 1, y: 0, filter: "blur(0px)" };
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <motion.div
        initial={{ filter: "blur(10px)" }}
        animate={{ filter: "blur(0px)" }}
        transition={{ duration: 0.4 }}
        className="flex relative justify-center items-center"
      >
        <img
          src="/images/heroImage.jpg"
          alt=""
          className="object-cover inset-0 w-full h-[100vh]"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute flex flex-col gap-y-3 p-3 text-white translate-x-0 md:-translate-x-[20vw] m">
          <motion.p
            initial={blurUp}
            animate={noblurUp}
            transition={{ delay: 0.3, duration: 0.3 }}
            className="text-lg sm:text-xl"
          >
            Welcome!
          </motion.p>
          <motion.p
            initial={blurUp}
            animate={noblurUp}
            transition={{ delay: 0.4, duration: 0.3 }}
            className="text-xl sm:text-5xl"
          >
            We serve the richest coffee in the city.
          </motion.p>
          <motion.button
            initial={blurUp}
            animate={noblurUp}
            transition={{ delay: 0.6, duration: 0.3 }}
            className="flex bg-white text-black w-max px-9 py-3 rounded-full text-sm mt-3"
            onClick={() => {
              scrollToSection(ref.coffeeRef);
            }}
          >
            Order Now
          </motion.button>
        </div>
      </motion.div>
    </>
  );
}
