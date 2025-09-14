export default function Hero() {
  return (
    <>
      <div className="flex relative justify-center items-center">
        <img
          src="/images/heroImage.jpg"
          alt=""
          className="object-cover inset-0 w-full h-[70vh]"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute flex flex-col gap-y-3 text-white translate-x-0 md:-translate-x-[20vw] sm:w-sm">
          <p className="text-lg sm:text-xl">Welcome!</p>
          <p className="text-xl sm:text-2xl">
            We serve the richest coffee in the city!
          </p>
          <button className="flex bg-white text-black w-max px-9 py-3 rounded-full text-sm mt-3">
            Order Now
          </button>
        </div>
      </div>
    </>
  );
}
