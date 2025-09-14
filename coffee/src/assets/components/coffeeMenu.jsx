import React from "react";

export default function CoffeeMenu() {
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
      className="flex flex-col items-center w-full"
    >
      <p className="font-bold text-[#2D251E] text-xl">OUR SPECIAL COFFEE</p>
      <div className="flex grow flex-wrap w-full justify-evenly sm:w-[80vw]">
        {coffee.map((item) => {
          return (
            <div
              className="w-80 p-2 bg-[#EEEBE6] flex flex-col justify-evenly m-2 gap-y-3 rounded-lg"
              key={item.id}
            >
              <img className="w-80 rounded-lg" src={item.image} alt="" />
              <p className="text-xl font-semibold text-[#62584C]">
                {item.Item}
              </p>
              <p className="text-sm text-neutral-500">{item.Desc}</p>
              <div className="flex justify-between">
                <p className="text-[#62584C] font-bold text-lg">{item.Price}</p>
                <button className="bg-[#2F251C] w-max text-white py-1 px-3 text-sm rounded-lg">
                  Order Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
