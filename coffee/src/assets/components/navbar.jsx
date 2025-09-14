import { Menu, Search } from "lucide-react";
import { useEffect, useState } from "react";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

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
        <div>LOGO</div>
        <div
          className={`list-none sm:gap-x-5 md:gap-x-10 sm:relative right-0 translate-y-7 -translate-x-5 sm:flex ${
            hamburger ? `absolute` : `hidden`
          } sm:translate-x-0 sm:translate-y-0`}
        >
          <li className="  px-10 py-3  sm:p-0 hover:font-bold bg-[#E2D9C8] text-stone-800 sm:text-neutral-300 sm:bg-transparent  ">
            HOME
          </li>
          <li className="  px-10 py-3  sm:p-0 hover:font-bold bg-[#E2D9C8] text-stone-800 sm:text-neutral-300 sm:bg-transparent ">
            COFFEE
          </li>
          <li className="  px-10 py-3  sm:p-0 hover:font-bold bg-[#E2D9C8] text-stone-800 sm:text-neutral-300 sm:bg-transparent ">
            BAKERY
          </li>
          <li className="  px-10 py-3  sm:p-0 hover:font-bold bg-[#E2D9C8] text-stone-800 sm:text-neutral-300 sm:bg-transparent ">
            SHOP
          </li>
          <li className="  px-10 py-3  sm:p-0 hover:font-bold bg-[#E2D9C8] text-stone-800 sm:text-neutral-300 sm:bg-transparent ">
            ABOUT
          </li>
          <li className="  px-10 py-3  sm:p-0 hover:font-bold bg-[#E2D9C8] text-stone-800 sm:text-neutral-300 sm:bg-transparent">
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
