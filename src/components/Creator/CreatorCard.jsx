import React, { useState } from "react";
import img1 from "../../assets/Layer1.png";
import img2 from "../../assets/Layer2.png";
import img3 from "../../assets/Layer3.png";
import { HiArrowLongRight } from "react-icons/hi2";
import { FaInstagram, FaYoutube } from "react-icons/fa";

function CreatorCard() {
  const [showParagraph, setShowParagraph] = useState([false, false, false]);

  const handleCardClick = (index) => {
    const updatedShowParagraph = showParagraph.map((item, idx) =>
      idx === index ? !item : item
    );
    setShowParagraph(updatedShowParagraph);
  };

  return (
    <div className="bg-black py-10">
      <h1 className="md:text-[52px] text-[38px] text-center lg:max-w-[1150px] mx-auto pb-[50px] text-white font-semibold px-4">
        Creators we worked with.
      </h1>
      <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between items-center px-[15px] lg:items-start">
        {/* Card 1 */}
        <div
          onClick={() => handleCardClick(0)}
          className="w-full xl:max-w-[380px] lg:max-w-[320px] flex flex-col justify-center items-center my-4 p-6 border bg-white border-white rounded-[25px] gap-[30px] shadow-md cursor-pointer transition-transform duration-300 hover:scale-105"
        >
          <div className="text-center">
            <h2 className="text-[32px] md:text-[48px] font-semibold text-[#431CBC]">
            Ryan Pictures
            </h2>
            <h4 className="text-[18px] md:text-[23px] text-[#B7B7B7]">
              1.34M Subscribers
            </h4>
          </div>

          <img src={img1} className="w-[100px] md:w-[150px] h-[100px] md:h-[150px] rounded-full" alt="Moon" />
          {!showParagraph[0] && (
            <div className="flex justify-start w-full">
              <HiArrowLongRight className="text-[30px] md:text-[40px] rotate-[-45deg]" />
            </div>
          )}

          {showParagraph[0] && (
            <div>
              <p className="mt-4 text-center text-black">
                <span className="font-bold">Ryan Pictures</span> is a rapidly growing YouTube channel focused on producing mini-documentaries about popular online personalities. Their content offers in-depth insights into the lives and journeys of digital creators, attracting a highly engaged audience interested in the digital creator space.
                
              </p>
              <div className="flex justify-center items-center pt-[50px]">
                <FaYoutube className="text-red-500 pr-[10px] text-[25px] md:text-[35px]" />
                <p className="text-black font-bold">@Ryan Pictures</p>
              </div>
            </div>
          )}
        </div>

        {/* Card 2 */}
        <div
          onClick={() => handleCardClick(1)}
          className="w-full xl:max-w-[380px] lg:max-w-[320px] flex flex-col justify-center items-center my-4 p-6 border bg-white border-white rounded-[25px] gap-[30px] shadow-md cursor-pointer transition-transform duration-300 hover:scale-105"
        >
          <div className="text-center">
            <h2 className="text-[32px] md:text-[48px] font-semibold text-[#431CBC]">
            Moneyplix Media
            </h2>
            <h4 className="text-[18px] md:text-[23px] text-[#B7B7B7]">
              745K Followers
            </h4>
          </div>

          <img src={img2} className="w-[100px] md:w-[150px] h-[100px] md:h-[150px] rounded-full" alt="Marketing Psychology" />
          {!showParagraph[1] && (
            <div className="flex justify-start w-full">
              <HiArrowLongRight className="text-[30px] md:text-[40px] rotate-[-45deg]" />
            </div>
          )}

          {showParagraph[1] && (
            <div>
              <p className="mt-4 text-center text-black">
                <span className="font-bold">Moneyplix Media is a TikTok finance creator</span> taking the platform by storm with a combined following of  700k across all platforms. This creator breaks down the world of investing, tech, and saving money in a way that's both informative and hilarious. Forget dry lectures – Moneyplix Media makes financial literacy fun and engaging for everyone!

              </p>
              <div className="flex justify-center items-center pt-[50px]">
                <FaInstagram className="text-red-500 pr-[10px] text-[25px] md:text-[35px]" />
                <p className="text-black font-bold">@Moneyplix Media</p>
              </div>
            </div>
          )}
        </div>

        {/* Card 3 */}
        <div
          onClick={() => handleCardClick(2)}
          className="w-full xl:max-w-[380px] lg:max-w-[320px] flex flex-col justify-center items-center my-4 p-6 border bg-white border-white rounded-[25px] gap-[30px] shadow-md cursor-pointer transition-transform duration-300 hover:scale-105"
        >
          <div className="text-center">
            <h2 className="text-[32px] md:text-[48px] font-semibold text-[#431CBC]">
            Leelajournals 
            </h2>
            <h4 className="text-[18px] md:text-[23px] text-[#B7B7B7]">
              1.87M Subscribers
            </h4>
          </div>

          <img src={img3} className="w-[100px] md:w-[150px] h-[100px] md:h-[150px] rounded-full" alt="Patrick Cc" />
          {!showParagraph[2] && (
            <div className="flex justify-start w-full">
              <HiArrowLongRight className="text-[30px] md:text-[40px] rotate-[-45deg]" />
            </div>
          )}

          {showParagraph[2] && (
            <div>
              <p className="mt-4 text-center text-black">
                <span className="font-bold">Leelajournals is both an artist and entrepreneur!</span> She shares her inspiring journey of building a business around her art, documenting the wins, struggles, and valuable lessons learned. Her authenticity and passion resonate with a highly engaged audience of aspiring business owners worldwide.

              </p>
              <div className="flex justify-center items-center pt-[50px]">
                <FaYoutube className="text-red-500 pr-[10px] text-[25px] md:text-[35px]" />
                <p className="text-black font-bold">@Leelajournals</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CreatorCard;
