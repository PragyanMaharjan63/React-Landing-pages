import React from "react";

export default function BeansPromo() {
  return (
    <div
      style={{ fontFamily: "'Poppins', 'sans-serif'" }}
      className="flex justify-between items-center"
    >
      <img className="size-60" src="/images/grainsOnHand.png" alt="beans" />
      <div>
        <p className="mb-9 text-3xl font-semibold w-md">
          Check out our best coffee betans
        </p>
        <button className="bg-[#2F251C] text-white text-sm py-2 px-6 rounded-full">
          Explore our products
        </button>
      </div>
      <img className="size-60" src="/images/scoopofbeans.png" alt="" />
    </div>
  );
}
