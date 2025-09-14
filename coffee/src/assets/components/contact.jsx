import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <>
      <div
        style={{ fontFamily: "'Poppins', 'sans-serif'" }}
        className="flex relative justify-center items-center h-[35vh]"
      >
        <img
          src="/images/beans2.png"
          alt="beans"
          className="absolute top-0 left-0 hidden md:flex size-60"
        />
        <div className="flex flex-col justify-center items-center ">
          <p className="text-[#2F251C] font-bold text-2xl sm:text-4xl">
            Join in and get 15% Off!
          </p>
          <p className="text-stone-700 text-sm sm:text-xl">
            {" "}
            subscribe to our newsletter and get 15% off discound code.
          </p>
          <div className="flex gap-x-3 flex-wrap justify-center">
            <div className="relative flex bg-white rounded-full p-3">
              <Mail />
              <input
                type="text"
                name="email address"
                id=""
                className="bg-white px-2 w-60 outline-none"
                placeholder="Email address"
              />
            </div>
            <button className="bg-[#2F251C] py-3 px-6 rounded-full text-white">
              Subscribe
            </button>
          </div>
        </div>
        <img
          src="/images/beans.png"
          alt="beans"
          className="absolute bottom-0 right-0 hidden md:flex size-60"
        />
      </div>
    </>
  );
}
