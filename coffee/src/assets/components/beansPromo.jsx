import React from "react";

export default function BeansPromo() {
  return (
    <div
      style={{ fontFamily: "'Poppins', 'sans-serif'" }}
      className="flex justify-center md:justify-between items-center  w-full"
    >
      <img
        className="hidden md:flex  sm:size-60"
        src="/images/grainsOnHand.png"
        alt="beans"
      />
      <div className="flex flex-col items-center w-max my-10">
        <p className="mb-9 sm:text-3xl font-semibold sm:w-md">
          Check out our best coffee betans
        </p>
        <button className="bg-[#2F251C] text-white text-sm py-2 px-6 rounded-full">
          Explore our products
        </button>
      </div>
      <img
        className="hidden lg:flex size-50"
        src="/images/scoopofbeans.png"
        alt=""
      />
    </div>
  );
}
