import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import img1 from "../../assets/counter1.png";
import img2 from "../../assets/counter2.png";
import img3 from "../../assets/counter3.jpg";

function Counter() {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });

  return (
    <div className="bg-black pt-12 text-white">
      <h1 className="md:text-[62px] text-[48px] text-center lg:max-w-[1150px] pb-[30px] mx-auto text-[#828282] font-semibold">
        Your One-
        <span className="text-white">stop</span> Shop
      </h1>
      <div className="container mx-auto  px-[15px]">
        <div className=" h-[40vh] md:h-[60vh] w-full flex items-center justify-center border border-white rounded-[25px]"></div>
      </div>

      {/* 1st counter */}
      <div className="container lg:max-w-[1024px] pt-[80px] pb-12 mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        <div
          ref={ref1}
          className="md:col-span-4 flex flex-col justify-center items-center md:items-start text-center md:text-left"
        >
          <h1 className="text-[48px] md:text-[65px] font-bold">
            {inView1 && <CountUp end={10} duration={2.5} separator="," />}M+
          </h1>
          <h1 className="text-lg md:text-xl font-semibold text-primary pb-2.5">
            Engaged Customer
          </h1>
          <p className="px-4 md:px-0">
            We strategically match brands with the ideal audience segments,
            driving real results not just reach.
          </p>
        </div>
        <div className="md:col-span-8 flex items-center px-[20px] md:px-0 justify-center">
          <img src={img1} alt="Engaged Customer" className="w-full h-auto" />
        </div>
      </div>

      {/* 2nd counter */}
      <div className="container lg:max-w-[1024px] pb-20 mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        <div className="md:col-span-8 flex items-center justify-center px-[20px] md:px-0 order-last md:order-first">
          <img src={img2} alt="Avg CAC Reduction" className="w-full h-auto" />
        </div>
        <div
          ref={ref2}
          className="md:col-span-4 flex flex-col justify-center items-center md:items-start text-center md:text-left"
        >
          <h1 className="text-[48px] md:text-[65px] font-bold">
            {inView2 && <CountUp end={-42} duration={2.5} suffix="%" />}
          </h1>
          <h1 className="text-lg md:text-xl font-semibold text-primary pb-2.5">
            Avg CAC Reduction
          </h1>
          <p className="px-4 md:px-0">
            We'll help you gain a significant edge in the market for half the
            price.
          </p>
        </div>
      </div>

      {/* 3rd counter */}
      <div className="container lg:max-w-[1024px] pb-12 mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        <div
          ref={ref3}
          className="md:col-span-4 flex flex-col justify-center items-center md:items-start text-center md:text-left"
        >
          <h1 className="text-[48px] md:text-[65px] font-bold">
            {inView3 && (
              <CountUp end={4.7} duration={2.5} decimals={1} suffix="x" />
            )}
          </h1>
          <h1 className="text-lg md:text-xl font-semibold text-primary pb-2.5">
            ROAS
          </h1>
          <p className="px-4 md:px-0">
            Focus on what matters most -- creating a delightful customer
            experience -- while we optimize your ad spend for a 4.7x return on
            investment.
          </p>
        </div>
        <div className="md:col-span-8 flex px-[20px] md:px-0 items-center justify-center">
          <img src={img3} className="w-full h-auto rounded-[45px]" alt="ROAS" />
        </div>
      </div>
    </div>
  );
}

export default Counter;
