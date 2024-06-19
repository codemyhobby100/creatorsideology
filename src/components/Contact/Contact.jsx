import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";

function Contact() {
  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto pt-[150px] pb-[50px] px-4">
        <p className="text-white inline-block rounded py-[5px] px-[10px] border border-gray-500">Ready to work with us</p>
        <h1 className="text-[48px] lg:text-[65px] text-white mb-8">
          Contact Us
        </h1>
        <form action="" className="w-full lg:w-[40%] space-y-6">
          <div>
            <label
              htmlFor="firstName"
              className="block font-semibold text-white mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full border rounded border-gray-500 focus:outline-none bg-[#1A1A1A] text-white py-[5px] px-[20px]"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block font-semibold text-white mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="w-full border rounded border-gray-500 focus:outline-none bg-[#1A1A1A] text-white py-[5px] px-[20px]"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block font-semibold text-white mb-2"
            >
              Work Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border rounded border-gray-500 focus:outline-none bg-[#1A1A1A] text-white py-[5px] px-[20px]"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block font-semibold text-white mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              className="w-full border rounded border-gray-500 focus:outline-none bg-[#1A1A1A] text-white py-[5px] px-[20px]"
              rows="4"
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="file"
              className="block text-white font-semibold mb-2"
            >
              Type
            </label>
            <input
              type="type"
              id="file"
              className="w-full border rounded border-gray-500 focus:outline-none bg-[#1A1A1A] text-white py-[5px] px-[20px]"
            />
          </div>
          <button
            type="submit"
            className="flex items-center gap-3 font-semibold mt-4 px-4 py-2 border border-white text-white rounded-[6px] "
          >
            Sent a Message
          </button>
        </form>
      </div>
      <div className="container mx-auto px-[15px] pb-[60px]">
        <h1 className="md:text-[36px] text-[22px] pb-[50px] font-bold text-center text-white">
          Explore Our Work
        </h1>
        <div className="flex flex-col gap-[30px]">
          <div className="container mx-auto px-[20px] h-[20vh] lg:h-[18vh] flex flex-col justify-center rounded bg-[#441DBC]">
            <h1 className="text-lg md:text-xl font-semibold text-white">
              R'S koso
            </h1>
            <button className="self-start w-auto flex items-center gap-3 font-semibold mt-4 px-4 py-2 border border-white text-white rounded">
              See Case Study
              <HiArrowLongRight className="text-[25px]" />
            </button>
          </div>
          <div className="container mx-auto px-[20px] h-[20vh] lg:h-[18vh] flex flex-col justify-center rounded bg-[#441DBC]">
            <h1 className="text-lg md:text-xl font-semibold text-white">Fum</h1>
            <button className="self-start w-auto flex items-center gap-3 font-semibold mt-4 px-4 py-2 border border-white text-white rounded">
              See Case Study
              <HiArrowLongRight className="text-[25px]" />
            </button>
          </div>
          <div className="container mx-auto px-[20px] h-[20vh] lg:h-[18vh] flex flex-col justify-center rounded bg-[#441DBC]">
            <h1 className="text-lg md:text-xl font-semibold text-white">
              Ekster
            </h1>
            <button className="self-start w-auto flex items-center gap-3 font-semibold mt-4 px-4 py-2 border border-white text-white rounded">
              See Case Study
              <HiArrowLongRight className="text-[25px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
