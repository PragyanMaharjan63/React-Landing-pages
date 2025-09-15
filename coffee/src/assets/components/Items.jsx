import { motion } from "motion/react";
export default function Items() {
  const blurUp = { opacity: 0, y: 30, filter: "blur(10px)" };
  const noblurUp = { opacity: 1, y: 0, filter: "blur(0px)" };
  return (
    <>
      <div className="flex my-20 flex-col sm:flex-row w-full sm:w-[80vw] justify-between justify-self-center">
        <div className="flex flex-col items-center justify-center">
          <motion.img
            initial={blurUp}
            animate={noblurUp}
            transition={{ duration: 0.2, delay: 0.4 }}
            className="size-20"
            src="/svg/mug.svg"
            alt=""
          />
          <motion.p
            initial={blurUp}
            animate={noblurUp}
            transition={{ duration: 0.2, delay: 0.5 }}
          >
            Hot Coffee
          </motion.p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <motion.img
            initial={blurUp}
            animate={noblurUp}
            transition={{ duration: 0.2, delay: 0.5 }}
            className="size-20"
            src="/svg/coldcofee.svg"
            alt=""
          />
          <motion.p
            initial={blurUp}
            animate={noblurUp}
            transition={{ duration: 0.2, delay: 0.6 }}
          >
            Cold Coffee
          </motion.p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <motion.img
            initial={blurUp}
            animate={noblurUp}
            transition={{ duration: 0.2, delay: 0.6 }}
            className="size-20"
            src="/svg/cupcoffee.svg"
            alt=""
          />
          <motion.p
            initial={blurUp}
            animate={noblurUp}
            transition={{ duration: 0.2, delay: 0.7 }}
          >
            Cup Coffee
          </motion.p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <motion.img
            initial={blurUp}
            animate={noblurUp}
            transition={{ duration: 0.2, delay: 0.7 }}
            className="size-20"
            src="/svg/desert.svg"
            alt=""
          />
          <motion.p
            initial={blurUp}
            animate={noblurUp}
            transition={{ duration: 0.2, delay: 0.8 }}
          >
            Dessert
          </motion.p>
        </div>
      </div>
    </>
  );
}
