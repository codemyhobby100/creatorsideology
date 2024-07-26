import React from "react";
import img1 from "../../assets/offer.png";
import img3 from "../../assets/offer_3.jpg";
import videoSrc from "../../assets/video/Ekster.mp4";

function Offer() {
  return (
    <div className="bg-black pt-12 my_container text-white">
      <h1 className="md:text-[52px] text-[32px] leading-[36px] text-center lg:max-w-[1150px] mx-auto text-white font-semibold px-2 md:px-4">
        What we offer <span className="text-[#441DBC]">Creators</span>
      </h1>
      <p className="text-white text-center text-[16px] md:text-[20px] px-2 pt-4 md:px-4">
        Join our influencer marketplace and start partnering with brands you can
        trust
      </p>

      {/* 1st offer */}
      <div className="pt-[80px] pb-[70px] mx-auto px-[10px] md:px-[20px] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <h1 className="text-4xl md:text-[45px] 2xl:text-[65px] leading-[45px] md:leading-[60px] 2xl:leading-[85px] font-bold pb-[15px]">
            Talent
            <br /> <span className="text-[#441DBC]">Representation</span>
          </h1>
          <p className="text-[16px] md:text-[20px]">
            No more undervaluing your talent; we'll help you secure financially
            rewarding partnerships that empower you to focus on what you love most - creating
          </p>
        </div>
        <div className="lg:col-span-7 flex items-center px-[10px] md:px-0 justify-center lg:justify-end">
          <img
            src={img1}
            alt="Talent Representation"
            className="w-full h-auto md:w-[480px] md:h-[500px] xl:w-[90%] xl:h-[600px] rounded-[45px] object-cover"
          />
        </div>
      </div>

      {/* 2nd Offer */}
      <div className="pb-[70px] mx-auto px-[10px] md:px-[20px] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        <div className="lg:col-span-7 flex items-center justify-center lg:justify-start px-[10px] md:px-0 order-last lg:order-first">
          <video
            autoPlay
            muted
            loop
            className="w-full h-auto md:w-[500px] md:h-[500px] xl:w-[90%] xl:h-[600px] rounded-[45px] no-controls"
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="lg:col-span-5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <h1 className="text-4xl md:text-[45px] 2xl:text-[65px] leading-[45px] md:leading-[60px] 2xl:leading-[85px] font-bold pb-[15px]">
            Brand {""}
            <span className="text-[#441DBC]">
              Deals <br />& Partnerships
            </span>
          </h1>
          <p className="text-[16px] md:text-[20px]">We'll help you connect with top brands in your industry.</p>
        </div>
      </div>

      {/* 3rd Offer */}
      <div className="pb-12 mx-auto px-[10px] md:px-[20px] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <h1 className="text-4xl md:text-[45px] 2xl:text-[65px] leading-[45px] md:leading-[60px] 2xl:leading-[85px] font-bold pb-[15px]">
            Talent
            <br /> <span className="text-[#441DBC]">Management</span>
          </h1>
          <p className="px-2 md:px-0 text-[16px] md:text-[20px]">
            Creators Ideology handles the brand matchmaking, negotiation, 
            and campaign set up, freeing up your valuable time
          </p>
        </div>
        <div className="lg:col-span-7 flex px-[10px] md:px-0 items-center justify-center lg:justify-end">
          <img
            src={img3}
            className="w-full h-auto md:w-[500px] md:h-[500px] xl:w-[90%] xl:h-[600px] rounded-[45px] object-cover"
            alt="Talent Management"
          />
        </div>
      </div>
    </div>
  );
}

export default Offer;
