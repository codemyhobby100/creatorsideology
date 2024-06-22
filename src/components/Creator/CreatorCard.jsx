import React, { useState } from "react";
import img1 from "../../assets/Layer1.png";
import img2 from "../../assets/Layer2.png";
import img3 from "../../assets/Layer3.png";
import { HiArrowLongRight } from "react-icons/hi2";
import { FaYoutube } from "react-icons/fa";

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
              Moon.
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
                <span className="font-bold">Moon Real</span> isn't just a
                YouTube channel, it's a hub of thought-provoking insights,
                eloquent analysis, and engaging discussions. With a focus on
                social commentary, Moon-Real dives deep into contemporary
                issues sparking conversations that matter.
                <br />
                <br />
                Their video essays are meticulously crafted, combining
                meticulous research with compelling storytelling that
                captivates and informs.
              </p>
              <div className="flex justify-center items-center pt-[50px]">
                <FaYoutube className="text-red-500 pr-[10px] text-[25px] md:text-[35px]" />
                <p className="text-black font-bold">@Moon-Real</p>
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
              Marketing Psychology.
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
                <span className="font-bold">Marketing Psychology</span> isn't just a
                YouTube channel, it's a hub of thought-provoking insights,
                eloquent analysis, and engaging discussions. With a focus on
                social commentary, Marketing Psychology dives deep into contemporary
                issues sparking conversations that matter.
                <br />
                <br />
                Their video essays are meticulously crafted, combining
                meticulous research with compelling storytelling that
                captivates and informs.
              </p>
              <div className="flex justify-center items-center pt-[50px]">
                <FaYoutube className="text-red-500 pr-[10px] text-[25px] md:text-[35px]" />
                <p className="text-black font-bold">@Marketing-Psychology</p>
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
              Patrick Cc.
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
                <span className="font-bold">Patrick Cc</span> isn't just a
                YouTube channel, it's a hub of thought-provoking insights,
                eloquent analysis, and engaging discussions. With a focus on
                social commentary, Patrick Cc dives deep into contemporary
                issues sparking conversations that matter.
                <br />
                <br />
                Their video essays are meticulously crafted, combining
                meticulous research with compelling storytelling that
                captivates and informs.
              </p>
              <div className="flex justify-center items-center pt-[50px]">
                <FaYoutube className="text-red-500 pr-[10px] text-[25px] md:text-[35px]" />
                <p className="text-black font-bold">@Patrick-Cc</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CreatorCard;
