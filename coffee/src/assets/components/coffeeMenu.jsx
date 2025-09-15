import React from "react";
import { motion } from "motion/react";

export default function CoffeeMenu() {
  const blurUp = { opacity: 0, y: 30, filter: "blur(10px)" };
  const noblurUp = { opacity: 1, y: 0, filter: "blur(0px)" };
  const coffee = [
    {
      id: 1,
      image: "/images/coffees/lungo.jpg",
      Item: "Lungo Coffee",
      Desc: "An espresso coffee drink, topped with a small",
      Price: "Rs. 199",
    },
    {
      id: 2,
      image: "/images/coffees/Dalgona.jpg",
      Item: "Dalgona Coffee",
      Desc: "whipped coffee made using instant coffee",
      Price: "Rs. 159",
    },
    {
      id: 3,
      image: "/images/coffees/icedCoffee.jpg",
      Item: "Iced Coffee",
      Desc: "Iced coffee is a coffee beverage served cold",
      Price: "Rs. 149",
    },
    {
      id: 4,
      image: "/images/coffees/filterCoffee.jpg",
      Item: "Filter Coffee",
      Desc: "75% coffee and 25% chicary freshly roasted",
      Price: "Rs. 59",
    },
  ];

  return (
    <div
      style={{ fontFamily: "'Poppins', sans-serif" }}
      className="flex  flex-col items-center "
    >
      <motion.p
        initial={blurUp}
        animate={noblurUp}
        transition={{ duration: 0.2, delay: 0.3 }}
        className="font-bold text-[#2D251E] p-2 m-2 text-xl"
      >
        OUR SPECIAL COFFEE
      </motion.p>
      <div className="flex grow flex-wrap w-full justify-evenly sm:w-[80vw]">
        {coffee.map((item) => {
          return (
            <motion.div
              initial={blurUp}
              animate={noblurUp}
              transition={{ duration: 0.2, delay: 0.4 }}
              className="w-80 realtive p-4 bg-[#EEEBE6] flex flex-col justify-evenly m-2 gap-y-3 rounded-lg"
              key={item.id}
            >
              <img className="w-80 rounded-lg" src={item.image} alt="" />
              <div>
                <p className="text-xl font-semibold text-[#62584C]">
                  {item.Item}
                </p>
                <p className="text-sm text-neutral-400">{item.Desc}</p>
              </div>
              <div className="flex justify-between items-end relative">
                <p className="text-[#62584C]  bottom-0 font-bold text-lg">
                  {item.Price}
                </p>
                <button className="bg-[#2F251C] w-max text-white py-2 px-6 text-sm rounded-lg">
                  Order Now
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
