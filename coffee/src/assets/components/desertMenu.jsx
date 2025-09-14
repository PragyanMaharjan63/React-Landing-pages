import React from "react";

export default function DesertMenu() {
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
    <div
      style={{ fontFamily: "'Poppins', sans-serif" }}
      className="flex flex-col items-center"
    >
      <p className="font-bold text-[#2D251E] p-2 m-2 text-xl">
        OUR SPECIAL DESERTS
      </p>
      <div className="flex grow flex-wrap w-full justify-evenly sm:w-[80vw]">
        {desert.map((item) => {
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
