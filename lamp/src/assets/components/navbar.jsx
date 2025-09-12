import { LampFloor, Menu } from "lucide-react";
import { motion } from "motion/react";
import Toastshow from "./toast";
import { useState } from "react";
export default function Navbar() {
  const [Toast, setToast] = useState(false);
  return (
    <>
      <motion.div
        initial={{ y: "30px", opacity: 0, filter: "blur(10px)" }}
        animate={{ y: "0px", opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.3, animation: "easeout", delay: 0.4 }}
        className="text-white fixed flex py-7 justify-between px-9 w-[100vw] z-10"
      >
        <div className="flex items-center">
          <LampFloor />
          LAMPZ
        </div>
        <div>
          <Menu
            onClick={() => {
              setToast((prev) => !prev);
            }}
          />
        </div>
      </motion.div>
      {Toast && <Toastshow message={"No menu yay"} />}
    </>
  );
}
