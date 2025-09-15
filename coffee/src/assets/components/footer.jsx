import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <>
      <div
        style={{ fontFamily: "'Poppins','sans-serif'" }}
        className="px-10 flex flex-col md:flex-row justify-evenly grow flex-wrap bg-[#2F251C] text-white py-15"
      >
        <p className="font-bold text-3xl my-2">COFFEE</p>
        <div className="flex flex-col gap-y-3 my-2">
          <p className="font-semibold text-xl">PRIVACY</p>
          <p className="font-thin">Terms of use</p>
          <p className="font-thin">Privacy Policy</p>
          <p className="font-thin">cookies</p>
        </div>
        <div className="flex flex-col gap-y-3 my-2">
          <p className="font-semibold text-xl">SERVICES</p>
          <p className="font-thin">Shop</p>
          <p className="font-thin">Order ahead</p>
          <p className="font-thin">Menu</p>
        </div>
        <div className="flex flex-col gap-y-3 my-2">
          <p className="font-semibold text-xl">ABOUT US</p>
          <p className="font-thin">Find a location</p>
          <p className="font-thin">About us</p>
          <p className="font-thin">Our story</p>
        </div>
        <div className="flex flex-col gap-y-3 my-2">
          <p className="font-semibold text-xl">INFORMATION</p>
          <p className="font-thin">Plans & pricing</p>
          <p className="font-thin">Sell your products</p>
          <p className="font-thin">Jobs</p>
        </div>
        <div className="flex flex-col gap-y-3 my-2">
          <p className="font-semibold text-xl">SOCIAL MEDIA</p>
          <div className="flex gap-x-4">
            <Twitter />
            <Facebook />
            <Instagram />
            <Linkedin />
          </div>
        </div>
      </div>
    </>
  );
}
