import React from "react";
import bg_img from "../../assets/study_case.png";
function CaseStudy() {
  return (
    <div className="bg-black pt-[50px] pb-[50px]">
      <div className="container mx-auto px-[15px]  ">
        <h1 className="md:text-[38px] text-[28px] text-center lg:max-w-[1150px] pb-[30px] mx-auto text-[#828282] font-semibold">
          Discover how we've{" "}
          <span className="text-white">Elevated Brands, Increased ROI,</span>{" "}
          and <span className="text-white">Crafted Memorable Narratives</span>{" "}
          through strategic influencer collaborations
        </h1>
        <div
          className="relative h-[30vh] w-full flex items-center justify-center border border-white rounded-[12px]"
          style={{
            backgroundImage: `url(${bg_img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50 rounded-[12px]"></div>
          <button className="relative z-10 flex items-center gap-3 font-semibold px-4 py-2 border border-white text-white rounded-[6px] bg-transparent">
            View Case Study
          </button>
        </div>
      </div>
      <div className="container mx-auto flex flex-col items-center justify-center pt-[50px] text-center">
        <h1 className="text-white text-[42px] md:text-[65px] font-bold">
          Ready to work with us?
        </h1>
        <button className="flex items-center gap-3 font-semibold mt-4 px-4 py-2 border border-white text-white rounded-[6px] ">
          Start a Project
        </button>
      </div>
    </div>
  );
}

export default CaseStudy;
