import { Menu, Search } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [hamburger, setHamburger] = useState(false);
  return (
    <>
      <div className="fixed z-30 p-2 sm:p-10 text-neutral-300 flex justify-between w-[100vw]">
        <div>LOGO</div>
        <div
          className={`list-none sm:gap-x-5 md:gap-x-10 sm:relative right-0 translate-y-7 -translate-x-5 sm:flex ${
            hamburger ? `absolute` : `hidden`
          } sm:translate-x-0 sm:translate-y-0`}
        >
          <li className="bg-[#E2D9C8] text-stone-800 sm:text-neutral-300 px-10 py-3 sm:bg-transparent sm:p-0 hover:font-bold hover: sm:bg-none  ">
            HOME
          </li>
          <li className="bg-[#E2D9C8] text-stone-800 sm:text-neutral-300 px-10 py-3 sm:bg-transparent sm:p-0 hover:font-bold hover: sm:bg-none ">
            COFFEE
          </li>
          <li className="bg-[#E2D9C8] text-stone-800 sm:text-neutral-300 px-10 py-3 sm:bg-transparent sm:p-0 hover:font-bold hover: sm:bg-none ">
            BAKERY
          </li>
          <li className="bg-[#E2D9C8] text-stone-800 sm:text-neutral-300 px-10 py-3 sm:bg-transparent sm:p-0 hover:font-bold hover: sm:bg-none ">
            SHOP
          </li>
          <li className="bg-[#E2D9C8] text-stone-800 sm:text-neutral-300 px-10 py-3 sm:bg-transparent sm:p-0 hover:font-bold hover: sm:bg-none ">
            ABOUT
          </li>
          <li className="bg-[#E2D9C8] text-stone-800 sm:text-neutral-300 px-10 py-3 sm:bg-transparent sm:p-0 hover:font-bold hover: sm:bg-none">
            LOGIN
          </li>
        </div>

        <div className="flex gap-2">
          <Search />
          <Menu
            className="flex sm:hidden"
            onClick={() => {
              setHamburger((prev) => !prev);
            }}
          />
        </div>
      </div>
    </>
  );
}
