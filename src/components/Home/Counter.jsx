import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import img1 from "../../assets/counter1.png";
import img2 from "../../assets/counter2.png";
import img3 from "../../assets/counter3.png";

function Counter() {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });

  return (
    <div className="bg-black my_container pt-12 text-white">
      <h1 className="text-[36px] md:text-[48px] lg:text-[62px] text-center lg:max-w-[1150px] pb-[30px] mx-auto text-[#828282] font-semibold">
        Your One-
        <span className="text-white">stop</span> Shop
      </h1>
      <div className="mx-auto px-[15px]">
        <div className="h-[40vh] md:h-[80vh] lg:max-w-[1400px] w-full flex items-center mx-auto justify-center border border-white rounded-[25px] overflow-hidden">
          <video autoPlay muted loop className="w-full h-full object-cover">
            <source src="https://res.cloudinary.com/dfyeocma8/video/upload/v1722323960/Website_Explainer_Video_ocqfxs.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div>
        {/* 1st counter */}
        <div className="pt-[60px] md:pt-[80px] pb-[60px] md:pb-[70px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div
            ref={ref1}
            className="lg:col-span-4 flex flex-col justify-center items-center lg:items-start text-center lg:text-left"
          >
            <h1 className="text-[48px] md:text-[72px] lg:text-[110px] leading-[60px] md:leading-[90px] lg:leading-[120px] font-bold">
              {inView1 && <CountUp end={10} duration={2.5} separator="," />}M+
            </h1>
            <h1 className="text-[20px] md:text-[25px] lg:text-[35px] font-semibold text-primary pb-2.5">
              Engaged Customer
            </h1>
            <p className="px-4 text-[16px] md:text-[20px] lg:px-0">
              We'll Strategically Match you with your Ideal Audience Segment
              Driving Real Results Not Just Reach
            </p>
          </div>
          <div className="lg:col-span-8 flex items-center px-[20px] lg:px-0 justify-center lg:justify-end">
            <img
              src={img1}
              alt="Engaged Customer"
              className="md:w-[90%] w-full h-auto round-1 "
            />
          </div>
        </div>

        {/* 2nd counter */}
        <div className="pb-[60px] md:pb-[70px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          <div className="lg:col-span-8 flex items-center justify-center lg:justify-start px-[20px] lg:px-0 order-last lg:order-first">
            <img
              src={img2}
              alt="Avg CAC Reduction"
              className="md:w-[90%] w-full h-auto"
            />
          </div>
          <div
            ref={ref2}
            className="lg:col-span-4 flex flex-col justify-center items-center lg:items-start text-center lg:text-left"
          >
            <h1 className="text-[48px] md:text-[72px] lg:text-[110px] leading-[60px] md:leading-[90px] lg:leading-[120px] font-bold">
              {inView2 && <CountUp end={-42} duration={2.5} suffix="%" />}
            </h1>
            <h1 className="text-[20px] md:text-[25px] lg:text-[35px] font-semibold text-primary pb-2.5">
              Avg CAC Reduction
            </h1>
            <p className="px-4 text-[16px] md:text-[20px] lg:px-0">
              We'll help you gain a significant edge in the market for half the
              price.
            </p>
          </div>
        </div>

        {/* 3rd counter */}
        <div className="pb-[60px] md:pb-[70px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div
            ref={ref3}
            className="lg:col-span-4 flex flex-col justify-center items-center lg:items-start text-center lg:text-left"
          >
            <h1 className="text-[48px] md:text-[72px] lg:text-[110px] leading-[60px] md:leading-[90px] lg:leading-[120px] font-bold">
              {inView3 && (
                <CountUp end={4.7} duration={2.5} decimals={1} suffix="x" />
              )}
            </h1>
            <h1 className="text-[20px] md:text-[25px] lg:text-[35px] font-semibold text-primary pb-2.5">
              ROAS
            </h1>
            <p className="px-4 text-[16px] md:text-[20px] lg:px-0">
              Focus on what matters most — creating a delightful customer
              experience — while we optimize your ad spend for a 4.7x return on
              investment.
            </p>
          </div>
          <div className="lg:col-span-8 flex px-[20px] lg:px-0 items-center justify-center lg:justify-end">
            <img
              src={img3}
              className="md:w-[90%] w-full h-auto rounded-[40px] md:rounded-[65px]"
              alt="ROAS"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
