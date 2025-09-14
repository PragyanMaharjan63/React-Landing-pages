import CoffeeMenu from "./coffeeMenu";
import DesertMenu from "./desertMenu";

export default function Menu() {
  return (
    <>
      <div className="bg-white  flex flex-col justify-center item-center w-full gap-y-3 py-4">
        <CoffeeMenu />
        <DesertMenu />
      </div>
    </>
  );
}
