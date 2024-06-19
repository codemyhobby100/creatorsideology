import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";

function Study() {
  return (
    <div className="bg-black px-[20px] pb-[60px] pt-[120px]">
      <h1 className="md:text-[56px] text-[42px] pb-[50px] font-bold text-center text-white">
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
          <h1 className="text-lg md:text-xl font-semibold text-white">
            Fum
          </h1>
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
        <div className="container mx-auto px-[20px] h-[20vh] lg:h-[18vh] flex flex-col justify-center rounded bg-[#441DBC]">
          <h1 className="text-lg md:text-xl font-semibold text-white">
            Partner
          </h1>
          <button className="self-start w-auto flex items-center gap-3 font-semibold mt-4 px-4 py-2 border border-white text-white rounded">
            See Case Study
            <HiArrowLongRight className="text-[25px]" />
          </button>
        </div>
        <div className="container mx-auto px-[20px] h-[20vh] lg:h-[18vh] flex flex-col justify-center rounded bg-[#441DBC]">
          <h1 className="text-lg md:text-xl font-semibold text-white">
            Partner
          </h1>
          <button className="self-start w-auto flex items-center gap-3 font-semibold mt-4 px-4 py-2 border border-white text-white rounded">
            See Case Study
            <HiArrowLongRight className="text-[25px]" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Study;
