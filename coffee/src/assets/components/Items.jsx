export default function Items() {
  return (
    <>
      <div className="flex flex-col sm:flex-row w-full sm:w-[80vw] justify-between justify-self-center">
        <div className="flex flex-col items-center justify-center">
          <img className="size-20" src="/svg/mug.svg" alt="" />
          <p>Hot Coffee</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img className="size-20" src="/svg/coldcofee.svg" alt="" />
          <p>Cold Coffee</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img className="size-20" src="/svg/cupcoffee.svg" alt="" />
          <p>Cup Coffee</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img className="size-20" src="/svg/desert.svg" alt="" />
          <p>Dessert</p>
        </div>
      </div>
    </>
  );
}
