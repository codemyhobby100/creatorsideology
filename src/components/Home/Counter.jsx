import React from "react";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import img1 from "../../assets/counter1.png";
import img2 from "../../assets/counter2.png";
import img3 from "../../assets/counter3.jpg";
function Counter() {
  return (
    <div className="bg-black pt-[50px] text-white">
      {/* 1st counter */}
      <div className="container lg:max-w-[1024px] pb-[50px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-[30px]">
        <div className="md:col-span-4 flex flex-col justify-center">
          <h1 className="text-[52px] font-bold">
            <CountUp end={10} duration={2.5} separator="," />M+
          </h1>
          <h1 className="text-[20px] font-semibold text-primary pb-[10px]">
            Engaged Customer
          </h1>
          <p>
            We strategically match brands with the ideal audience segments,
            driving real results not just reach.
          </p>
        </div>
        <div className="md:col-span-8 flex items-center justify-center">
          <img src={img1} alt="" />
        </div>
      </div>
      {/* 2nd counter */}
      <div className="container max-w-[1024px] pb-[80px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-[50px]">
        <div className="md:col-span-8 flex items-center justify-center">
          <img src={img2} alt="" />
        </div>
        <div className="md:col-span-4 flex flex-col justify-center">
          <h1 className="text-[52px] font-bold">
            <CountUp end={-42} duration={2.5} suffix="%" />
          </h1>
          <h1 className="text-[20px] font-semibold text-primary pb-[10px]">
            Avg CAC Reduction
          </h1>
          <p>
            We'll help you gain a significant edge in the market for half the
            price.
          </p>
        </div>
      </div>
      {/* 3rd counter */}
      <div className="container lg:max-w-[1024px] pb-[50px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-[30px]">
        <div className="md:col-span-4 flex flex-col justify-center">
          <h1 className="text-[52px] font-bold">
            <CountUp end={4.7} duration={2.5} decimals={1} suffix="x" />
          </h1>
          <h1 className="text-[20px] font-semibold text-primary pb-[10px]">
            ROAS
          </h1>
          <p>
            Focus on what matters most -- creating a delightful customer
            experience -- while we optimize your ad spend for a 4.7x return on
            investment.
          </p>
        </div>
        <div className="md:col-span-8 flex items-center justify-center">
          <img src={img3} className="rounded-[45px]" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Counter;
