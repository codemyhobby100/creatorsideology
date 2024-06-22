import React from 'react'
import bg_img from "../../assets/creator_banner.jpg";

function CreatorBanner() {
  return (
    <>
      <div
        className="flex items-center bg-no-repeat bg-black"
        style={{
          backgroundImage: `url(${bg_img})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          height: "100vh",
          width: "100%",
          // Media query for mobile devices
          '@media (max-width: 768px)': {
            backgroundPosition: "left",
          },
        }}
      >
        <div className="container mx-auto px-[20px] lg:px-[0px] text-center md:text-left">
          <h2 className="text-[52px] md:text-[80px] font-bold leading-[50px] md:leading-[90px] text-white">
            Scaling your <span className="text-primary rounded-[20px]">Income</span> <br />
            Not Your Time.
          </h2>
          <p className="text-white text-[20px] md:text-[23px] pt-[20px]">
            Collaborate with Ease, Create & Captivate <br />
            top global brands.
          </p>
          <div className="flex flex-row items-center md:items-start justify-center md:justify-start pt-[50px] gap-[20px] md:gap-[30px]">
            <button className="px-[25px] py-[10px] border-2 border-primary rounded bg-primary  font-semibold hover:text-black hover:bg-white transition-all">
              Get me Started
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreatorBanner
