import React from "react";
import bg_img from "../../assets/crid.png";

function Banner() {
  return (
    <>
      <div
        className="flex items-center bg-no-repeat  bg-black"
        style={{
          backgroundImage: `url(${bg_img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh", // Adjusted to viewport height
          width: "100%",
        }}
      >
        <div className="container mx-auto">
          <h2 className="text-[80px] font-bold leading-[90px] text-white">
            The Creators <br /> Network
            <span className="text-primary rounded-[20px]">.</span>
          </h2>
          <p className="text-white text-[23px] pt-[20px]">
            We're a creative community of Influencers.
          </p>
          <div className="flex pt-[50px] gap-[30px]">
            <button className="px-[25px] py-[10px] border-2 border-primary rounded bg-primary hover:bg-primary font-semibold hover:text-black hover:bg-white transition-all">
              Join Our Network
            </button>
            <button className="px-[25px] hvoer py-[10px] border-2 text-white font-semibold border-white rounded bg-inherit">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
