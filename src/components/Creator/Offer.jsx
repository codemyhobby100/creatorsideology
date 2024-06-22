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

      {/* 1st offer */}
      <div className="container pt-[80px] pb-12 mx-auto px-[20px] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-4 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <h1 className="text-4xl md:text-[54px] font-bold pb-[15px]">
            Talent <br />
            <br /> <span className="text-[#441DBC]">Representation</span>
          </h1>
          <p className="px-4 lg:px-0">
            Our team finds authentic brand matches for your passions and
            beliefs, ensuring that every campaign feels natural and genuine.
          </p>
        </div>
        <div className="lg:col-span-8 flex items-center px-[20px] lg:px-0 justify-center lg:justify-end">
          <img
            src={img1}
            alt="Talent Representation"
            className="w-full h-auto md:w-[500px] md:h-[500px] rounded-[45px]"
          />
        </div>
      </div>

      
      {/* 2nd Offer */}
      <div className="container pb-20 mx-auto px-[20px] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        <div className="lg:col-span-8 flex items-center justify-center lg:justify-start px-[20px] lg:px-0 order-last lg:order-first">
          <video
            controls
            className="w-full h-auto md:w-[500px] md:h-[500px] rounded-[45px]"
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="lg:col-span-4 flex flex-col justify-center items-center lg:items-end text-center lg:text-left">
          <h1 className="text-4xl md:text-[54px] font-bold pb-[15px]">
            Brand {""}
            <span className="text-[#441DBC]">
              Deals <br />
              <br /> & Partnerships
            </span>
          </h1>
          <p className="lg:pr-[100px]">We help you connect with top brands.</p>
        </div>
      </div>

      {/* 3rd Offer */}
      <div className="container pb-12 mx-auto px-[20px] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-4 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <h1 className="text-4xl md:text-[54px] font-bold pb-[15px]">
            Talent <br />
            <br /> <span className="text-[#441DBC]">Management</span>
          </h1>
          <p className="px-4 lg:px-0">
            Let's take the work off your hands -- inspiring and engaging your
            community -- so you can focus on what you do best.
          </p>
        </div>
        <div className="lg:col-span-8 flex px-[20px] lg:px-0 items-center justify-center lg:justify-end">
          <img
            src={img3}
            className="w-full h-auto md:w-[500px] md:h-[500px] rounded-[45px]"
            alt="Talent Management"
          />
        </div>
      </div>
    </div>
  );
}

export default Offer;
