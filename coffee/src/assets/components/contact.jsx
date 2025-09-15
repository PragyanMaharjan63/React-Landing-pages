import { Mail } from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  const blurUp = { opacity: 0, y: 30, filter: "blur(10px)" };
  const noblurUp = { opacity: 1, y: 0, filter: "blur(0px)" };
  return (
    <>
      <div
        style={{ fontFamily: "'Poppins', 'sans-serif'" }}
        className="flex relative justify-center items-center h-[35vh] bg-[#E2D9C8]"
      >
        <motion.img
          initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          src="/images/beans2.png"
          alt="beans"
          className="absolute top-0 left-0 hidden md:flex size-60"
        />
        <div className="flex flex-col justify-center items-center gap-y-5">
          <motion.p
            initial={blurUp}
            animate={noblurUp}
            transition={{ duration: 0.2, delay: 0.4 }}
            className="text-[#2F251C] font-bold text-2xl sm:text-4xl"
          >
            Join in and get 15% Off!
          </motion.p>
          <motion.p
            initial={blurUp}
            animate={noblurUp}
            transition={{ duration: 0.2, delay: 0.5 }}
            className="text-stone-700 text-sm sm:text-xl"
          >
            {" "}
            subscribe to our newsletter and get 15% off discound code.
          </motion.p>
          <motion.div
            initial={blurUp}
            animate={noblurUp}
            transition={{ duration: 0.2, delay: 0.6 }}
            className="flex gap-x-3 flex-wrap justify-center"
          >
            <div className="relative flex bg-white rounded-full p-3">
              <Mail />
              <input
                type="text"
                name="email address"
                id=""
                className="bg-white px-2 w-60 outline-none"
                placeholder="Email address"
              />
            </div>
            <button className="bg-[#2F251C] py-3 px-6 rounded-full text-white">
              Subscribe
            </button>
          </motion.div>
        </div>
        <motion.img
          initial={{ opacity: 0, x: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          src="/images/beans.png"
          alt="beans"
          className="absolute bottom-0 right-0 hidden md:flex size-60"
        />
      </div>
    </>
  );
}
