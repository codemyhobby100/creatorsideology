import React from "react";
import campaign from "../../assets/campaign.png";
function Campaign() {
  return (
    <div className="bg-black pt-12 text-white">
      <h1 className="text-white text-[52px] text-center md:text-[65px] font-bold">
        Comming Soon
      </h1>

      <div className="container  pt-[50px]  mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 px-4">
        <div className="md:col-span-5 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl md:text-[54px] 2xl:text-[70px] leading-[60px] 2xl:leading-[75px] font-bold pb-[15px]">
            Multi-Platform <br />{" "}
            <span className="text-[#441DBC]">Campaigns</span>
          </h1>

          <p className="px-4 md:px-0">
            Our agency -- designs influencer marketing campaigns across various
            social media platforms, blogs, and other digital channels.
          </p>
        </div>
        <div className="md:col-span-7 flex items-center justify-end">
          <img
            src={campaign}
            alt="Engaged Customer"
            className="w-full h-auto md:w-[500px] md:h-[500px] xl:w-full xl:h-[600px] object-cover"
          />
        </div>
      </div>

      <div className="container mx-auto flex flex-col items-center justify-center text-center pt-[50px] pb-[50px]">
        <h1 className="text-white text-[42px] md:text-[65px] font-bold">
          Ready to work with us?
        </h1>
        <button className="flex items-center button border bg-primary text-black rounded-[6px] group ">
          Start a Project
          <span className="button-hover group-hover:w-[300px] group-hover:h-[300px] group-hover:bottom-[-100%] group-hover:right-[-100%]"></span>
        </button>
      </div>
    </div>
  );
}

export default Campaign;
