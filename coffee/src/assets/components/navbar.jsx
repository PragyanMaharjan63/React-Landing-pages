import { Menu, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function Navbar() {
  const [hamburger, setHamburger] = useState(false);
  const [scrolled, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`fixed z-30 p-2 sm:p-10 text-neutral-300 transition-all duration-500 flex justify-between w-[100vw]  ${
          scrolled ? "bg-[#E2D9C8] text-stone-800" : "bg-transparent"
        }`}
      >
        <motion.div
          initial={{ y: 30, filter: "blur(10px)" }}
          animate={{ y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.2, delay: 0.2 }}
          className="font-semibold"
        >
          COFFEE
        </motion.div>
        <div
          className={`list-none sm:gap-x-5 md:gap-x-10 sm:relative right-0 translate-y-7 -translate-x-5 sm:flex ${
            hamburger ? `absolute` : `hidden`
          } sm:translate-x-0 sm:translate-y-0`}
        >
          <motion.li
            initial={{ y: 30, filter: "blur(10px)" }}
            animate={{ y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.2, delay: 0.3 }}
            className={`px-10 py-3  sm:p-0 hover:font-bold bg-[#E2D9C8] text-stone-800 ${
              scrolled ? "sm:text-stone-800" : "sm:text-neutral-300"
            } sm:bg-transparent  hover:cursor-pointer`}
          >
            HOME
          </motion.li>
          <motion.li
            initial={{ y: 30, filter: "blur(10px)" }}
            animate={{ y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.2, delay: 0.4 }}
            className={`px-10 py-3  sm:p-0 hover:font-bold bg-[#E2D9C8] text-stone-800 ${
              scrolled ? "sm:text-stone-800" : "sm:text-neutral-300"
            } sm:bg-transparent hover:cursor-pointer`}
          >
            COFFEE
          </motion.li>
          <motion.li
            initial={{ y: 30, filter: "blur(10px)" }}
            animate={{ y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.2, delay: 0.5 }}
            className={`px-10 py-3  sm:p-0 hover:font-bold bg-[#E2D9C8] text-stone-800 ${
              scrolled ? "sm:text-stone-800" : "sm:text-neutral-300"
            } sm:bg-transparent hover:cursor-pointer`}
          >
            BAKERY
          </motion.li>
          <motion.li
            initial={{ y: 30, filter: "blur(10px)" }}
            animate={{ y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.2, delay: 0.6 }}
            className={`px-10 py-3  sm:p-0 hover:font-bold bg-[#E2D9C8] text-stone-800 ${
              scrolled ? "sm:text-stone-800" : "sm:text-neutral-300"
            } sm:bg-transparent hover:cursor-pointer`}
          >
            SHOP
          </motion.li>
          <motion.li
            initial={{ y: 30, filter: "blur(10px)" }}
            animate={{ y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.2, delay: 0.7 }}
            className={`px-10 py-3  sm:p-0 hover:font-bold bg-[#E2D9C8] text-stone-800 ${
              scrolled ? "sm:text-stone-800" : "sm:text-neutral-300"
            } sm:bg-transparent hover:cursor-pointer`}
          >
            ABOUT
          </motion.li>
          <motion.li
            initial={{ y: 30, filter: "blur(10px)" }}
            animate={{ y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.2, delay: 0.8 }}
            className={`px-10 py-3  sm:p-0 hover:font-bold bg-[#E2D9C8] text-stone-800 ${
              scrolled ? "sm:text-stone-800" : "sm:text-neutral-300"
            } sm:bg-transparent hover:cursor-pointer`}
          >
            LOGIN
          </motion.li>
        </div>

        <motion.div
          initial={{ y: 30, filter: "blur(10px)" }}
          animate={{ y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.2, delay: 0.9 }}
          className="flex gap-2"
        >
          <Search />
          <Menu
            className="flex sm:hidden"
            onClick={() => {
              setHamburger((prev) => !prev);
            }}
          />
        </motion.div>
      </div>
    </>
  );
}
