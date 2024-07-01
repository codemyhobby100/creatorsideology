import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";

function Study() {
  return (
    <div className="bg-black px-[20px] pb-[60px] pt-[120px]">
      <h1 className="md:text-[56px] text-[42px] pb-[50px] font-bold text-center text-white">
        Explore Our Work
      </h1>
      <div className="flex flex-col gap-[30px]">
        <div className="container mx-auto px-[20px] h-[20vh] lg:h-[18vh] flex flex-row items-center justify-between rounded bg-[#441DBC]">
          <div>
            <h1 className="text-lg md:text-[32px] font-semibold text-white">
              R'S koso
            </h1>
            <button className="self-start w-auto flex items-center gap-3 button group mt-4  border border-white text-white rounded">
              See Case Study
              <HiArrowLongRight className="text-[25px]" />
              <span className="button-hover group-hover:w-[350px] group-hover:h-[350px] group-hover:bottom-[-100%] group-hover:right-[-100%]"></span>
            </button>
          </div>
          <div className="flex flex-col items-end">
            <h1 className="text-lg md:text-[32px] font-semibold text-white">
              20%
            </h1>
            <p className=" text-white"> Increase in Brand Awareness</p>
          </div>
        </div>
        <div className="container mx-auto px-[20px] h-[20vh] lg:h-[18vh] flex flex-row items-center justify-between rounded bg-[#441DBC]">
          <div>
            <h1 className="text-lg md:text-[32px] font-semibold text-white">
              Fum
            </h1>
            <button className="self-start w-auto flex items-center gap-3 button group mt-4  border border-white text-white rounded">
              See Case Study
              <HiArrowLongRight className="text-[25px]" />
              <span className="button-hover group-hover:w-[350px] group-hover:h-[350px] group-hover:bottom-[-100%] group-hover:right-[-100%]"></span>
            </button>
          </div>
          <div className="flex flex-col items-end">
            <h1 className="text-lg md:text-[32px] font-semibold text-white">
              30%
            </h1>
            <p className=" text-white"> Increase in Product Desirability</p>
          </div>
        </div>
        <div className="container mx-auto px-[20px] h-[20vh] lg:h-[18vh] flex flex-row items-center justify-between rounded bg-[#441DBC]">
          <div>
            <h1 className="text-lg md:text-[32px] font-semibold text-white">
              Ekster
            </h1>
            <button className="self-start w-auto flex items-center gap-3 button group mt-4  border border-white text-white rounded">
              See Case Study
              <HiArrowLongRight className="text-[25px]" />
              <span className="button-hover group-hover:w-[350px] group-hover:h-[350px] group-hover:bottom-[-100%] group-hover:right-[-100%]"></span>
            </button>
          </div>
          <div className="flex flex-col items-end">
            <h1 className="text-lg md:text-[32px] font-semibold text-white">
              40%
            </h1>
            <p className=" text-white"> Increase in Brand Reputation</p>
          </div>
        </div>
        <div className="container mx-auto px-[20px] h-[20vh] lg:h-[18vh] flex flex-row items-center justify-between rounded bg-[#441DBC]">
          <div>
            <h1 className="text-lg md:text-[32px] font-semibold text-white">
              Scribe
            </h1>
            <button className="self-start w-auto flex items-center gap-3 button group mt-4  border border-white text-white rounded">
              See Case Study
              <HiArrowLongRight className="text-[25px]" />
              <span className="button-hover group-hover:w-[350px] group-hover:h-[350px] group-hover:bottom-[-100%] group-hover:right-[-100%]"></span>
            </button>
          </div>
          <div className="flex flex-col items-end">
            <h1 className="text-lg md:text-[32px] font-semibold text-white">
              30%
            </h1>
            <p className=" text-white"> CAC Reduction</p>
          </div>
        </div>
        <div className="container mx-auto px-[20px] h-[20vh] lg:h-[18vh] flex flex-row items-center justify-between rounded bg-[#441DBC]">
          <div>
            <h1 className="text-lg md:text-[32px] font-semibold text-white">
              Growth School
            </h1>
            <button className="self-start w-auto flex items-center gap-3 button group mt-4  border border-white text-white rounded">
              See Case Study
              <HiArrowLongRight className="text-[25px]" />
              <span className="button-hover group-hover:w-[350px] group-hover:h-[350px] group-hover:bottom-[-100%] group-hover:right-[-100%]"></span>
            </button>
          </div>
          <div className="flex flex-col items-end">
            <h1 className="text-lg md:text-[32px] font-semibold text-white">
              3x
            </h1>
            <p className=" text-white"> ROAS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Study;
