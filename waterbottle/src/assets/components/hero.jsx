import HeroImage from "./heroimage";
import HeroTextLeft from "./herotextleft";
import HeroTextRight from "./herotextright";
export default function Hero() {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-y-20 relative items-center justify-between ">
        {/* left text */}
        <div className="flex">
          <HeroTextLeft />
        </div>
        {/* main section */}
        <div className="flex">
          <HeroImage />
        </div>
        {/* right text */}
        <div>
          <HeroTextRight />
        </div>
      </div>
    </>
  );
}
