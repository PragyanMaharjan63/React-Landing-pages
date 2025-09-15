import React, { useState } from "react";
import { motion } from "motion/react";
import Toast from "./toast";

export default function DesertMenu() {
  const [toast, showToast] = useState(false);
  const blurUp = { opacity: 0, y: 30, filter: "blur(10px)" };
  const noblurUp = { opacity: 1, y: 0, filter: "blur(0px)" };
  const desert = [
    {
      id: 1,
      image: "/images/Deserts/gulabjamun.jpg",
      Item: "Gulab Jamun",
      Desc: "made with milk solids, sugar, rose water & cord",
      Price: "Rs. 199",
    },
    {
      id: 2,
      image: "/images/Deserts/Tiramisu.jpg",
      Item: "Chocolate Tiramisu",
      Desc: "made with layers of mascarpone cream, chocolate",
      Price: "Rs. 250",
    },
    {
      id: 3,
      image: "/images/Deserts/churros.jpg",
      Item: "Churros",
      Desc: "Hot chocolate made with bittersweet chocolate",
      Price: "Rs. 170",
    },
    {
      id: 4,
      image: "/images/Deserts/Lamingtons.jpg",
      Item: "Asutralian Lamingtons",
      Desc: "Made with A delicious Sponge Cake",
      Price: "Rs. 5280",
    },
  ];

  return (
    <div>
      {toast && <Toast message={"Out of stock"} />}
      <div
        style={{ fontFamily: "'Poppins', sans-serif" }}
        className="flex flex-col items-center"
      >
        <motion.p
          initial={blurUp}
          animate={noblurUp}
          transition={{ duration: 0.2, delay: 0.3 }}
          className="font-bold text-[#2D251E] p-2 m-8 text-xl sm:text-4xl"
        >
          OUR SPECIAL DESERTS
        </motion.p>
        <div className="flex grow flex-wrap w-full justify-evenly sm:w-[80vw]">
          {desert.map((item) => {
            return (
              <motion.div
                initial={blurUp}
                animate={noblurUp}
                transition={{ duration: 0.2, delay: 0.4 }}
                className="w-80 p-4 bg-[#EEEBE6] flex flex-col justify-evenly m-2 gap-y-3 rounded-lg"
                key={item.id}
              >
                <img className="w-80 rounded-lg" src={item.image} alt="" />
                <div>
                  <p className="text-xl font-semibold text-[#62584C]">
                    {item.Item}
                  </p>
                  <p className="text-sm text-neutral-400">{item.Desc}</p>
                </div>
                <div className="flex justify-between items-end">
                  <p className="text-[#62584C] font-bold text-lg">
                    {item.Price}
                  </p>
                  <button
                    className="bg-[#2F251C] w-max text-white py-2 px-6 text-sm rounded-lg"
                    onClick={() => {
                      showToast(true);
                      setTimeout(() => {
                        showToast(false);
                      }, 3000);
                    }}
                  >
                    Order Now
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
