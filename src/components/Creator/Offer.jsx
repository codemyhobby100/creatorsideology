import React from "react";
import img1 from "../../assets/offer.png";
import img3 from "../../assets/offer_3.jpg";
import videoSrc from "../../assets/video/Ekster.mp4";

function Offer() {
  return (
    <div className="bg-black pt-12 text-white">
      <h1 className="md:text-[52px] text-[38px] text-center lg:max-w-[1150px] mx-auto text-white font-semibold px-4">
        What we offer <span className="text-[#441DBC]">Creators</span>
      </h1>
      <p className="text-white text-center text-[18px] md:text-[20px] px-4">
        Join our influencer marketplace and start partnering with brands you can
        trust
      </p>

      {/* 1st counter */}
      <div className="container lg:max-w-[1024px] pt-[80px] pb-12 mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 px-4">
        <div className="md:col-span-5 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl md:text-[45px] font-bold pb-[15px]">
            Talent <br /> <span className="text-[#441DBC]">Representation</span>
          </h1>

          <p className="px-4 md:px-0">
            Our team finds authentic brand matches for you passions and beliefs,
            ensuring that every campaign feels natural and genuine.
          </p>
        </div>
        <div className="md:col-span-7 flex items-center justify-end">
          <img
            src={img1}
            alt="Engaged Customer"
            className="w-full h-auto md:w-[500px] md:h-[500px] rounded-[45px]"
          />
        </div>
      </div>

      {/* 2nd counter */}
      <div className="container lg:max-w-[1024px] pb-20 mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 px-4">
        <div className="md:col-span-7 flex items-center justify-start order-last md:order-first">
          <video
            controls
            className="w-full h-auto md:w-[500px] md:h-[500px] rounded-[45px] "
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="md:col-span-5 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl md:text-[45px] font-bold pb-[15px]">
            Brand  <span className="text-[#441DBC]">Deals <br /> & Partnerships</span>
          </h1>

          <p className="px-4 md:px-0">
            We help you connect with top brands.
          </p>
        </div>
      </div>

      {/* 3rd counter */}
      <div className="container lg:max-w-[1024px] pt-[80px] pb-12 mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 px-4">
        <div className="md:col-span-5 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl md:text-[45px] font-bold pb-[15px]">
            Talent <br /> <span className="text-[#441DBC]">Management</span>
          </h1>

          <p className="px-4 md:px-0">
            Let's take the work off your hands -- inspiring and engaging you community -- so you can focuse on what you do best.
          </p>
        </div>
        <div className="md:col-span-7 flex items-center justify-end">
          <img
            src={img3}
            alt="Engaged Customer"
            className="w-full h-auto md:w-[500px] md:h-[500px] rounded-[45px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Offer;
