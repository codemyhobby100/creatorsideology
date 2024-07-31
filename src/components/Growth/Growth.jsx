import React from "react";
import { BiSolidLike } from "react-icons/bi";
import { FaVideo } from "react-icons/fa";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { RiCustomerService2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Scribe_logo from "../../assets/scribe_logo.png";
import { GiClick } from "react-icons/gi";
import Impression from "../../assets/heart.png";
import Clicks from "../../assets/click.png";
import Likes from "../../assets/like.png";
import Share from "../../assets/share.png";
import growth_banner from "../../assets/growth-school.png";
import "./growth.css"
function Growth() {
  const videoSrc = "https://res.cloudinary.com/drjkeiinn/video/upload/v1720952061/Brands%20%28Ads%29/czg6ahu3bxgjqalf2i6s.mp4";
  return (
    <div className="bg-black">
      {/* Banner section */}
      {/* Banner section */}
      <div
        className="my_container flex flex-col justify-center text-white h-screen w-full relative"
        style={{
          backgroundImage: `url(${growth_banner})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <div className="my_container flex flex-col justify-center text-white h-screen w-full">
          <div className="lg:pb-[15vh] pb-[50px]">
            {/* <h4 className="text-[23px] font-semibold">Case studies</h4> */}
          </div>
          <div>
            <h2 className="md:text-[60px] md:leading-[70px] xl:w-1/2 text-[40px] text-center md:text-left">
              From Struggling to Scaling: Our Strategy for Growth School's Success
            </h2>
          </div>
          {/* <div className="w-full flex justify-center md:pt-[150px] md:justify-end">
            <div className="inline-block border border-white px-[30px] py-[10px] bg-black max-w-max">
              <div className="flex items-center justify-end text-white">
                <img src={Scribe_logo} className="w-[100px]" alt="Fum Logo" />
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Content section */}
      <div className="my_container text-white py-[80px] pt-6">
        {/* Challenge section */}
        <div className="pb-[50px] pt-6 growth-challenge">
          <p className="text-[14px] md:text-[16px] challenge-header text-[#098B72]">
            THE CHALLENGE
          </p>
          <h4 className="text-[35px] md:text-[36px] challenge-header font-semibold pb-[20px]">Equipping Students, Redefining Education</h4>
          <p className="text-[16px]">
            Growth School, a community-driven online learning platform, bridges the gap between outdated academic curricula and the skills employers demand. Their intensive, cohort-based programs equip students with in-demand skills for immediate job readiness. Growth School approached us in Q2 seeking a cost-effective influencer marketing strategy to expand their reach. Previous attempts with a handful of YouTube creators resulted in exorbitant fees and negative ROI.
          </p>
        </div>

        {/* Solution section */}
        <div className="flex flex-col lg:flex-col gap-[30px] pb-[30px] pt-6">
          <div className="w-full growth-challenge order-2 lg:order-1">
            <p className="text-[14px] challenge-header md:text-[16px] text-[#098B72]">
              THE SOLUTION
            </p>
            <h4 className="text-[35px] w-full challenge-header font-semibold pb-[20px]">
              Micro-Influencers: The Perfect Match
            </h4>
            <p className="text-[16px]">
              Creators Ideology recognized the unique challenges Growth School faced. With a dedicated budget of $50,000, our team conducted a comprehensive analysis of Growth School's marketing goals and target audience. We identified a shift towards a micro-influencer strategy – prioritizing cost-efficiency while maximizing impact was key.
            </p>
            <div className="flex justify-center my-[30px] lg:hidden">
              <video
                autoPlay
                muted
                loop
                className="w-full object-cover rounded-[25px]"
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-[16px] pt-2">
              Initially, Growth School harboured reservations about the effectiveness of micro-influencers. Their perception was that a wider reach could only be achieved through established, high-profile creators. However, Creators Ideology presented a compelling argument. We emphasized the power of micro-influencers to cultivate highly engaged, niche communities. These communities often boast a deeper level of trust and loyalty towards the creators they follow. Furthermore, micro-influencers tend to have a more focused audience demographic, allowing for a more targeted approach that aligns perfectly with Growth School's ideal profile.
            </p>
          </div>
          <div className="w-full order-1 lg:px-[40px] lg:order-2 flex justify-center">
            <video
              autoPlay
              muted
              loop
              className="w-full object-cover rounded-[25px] hidden lg:block"
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>


        {/* <div className="flex flex-col lg:flex-row gap-[30px] pb-[30px]">
          <div className="lg:w-1/2 order-2 lg:order-1 growth-challenge">
            <p className="text-[14px] md:text-[16px] challenge-header text-[#098B72]">
              THE SOLUTION
            </p>
            <h4 className="text-[35px] md:text-[36px] challenge-header w-full font-semibold pb-[20px]">
              Micro-Influencers: The Perfect Match
            </h4>
            <p className="text-[16px]">
            Creators Ideology recognized the unique challenges Growth School faced. With a dedicated budget of $50,000, our team conducted a comprehensive analysis of Growth School's marketing goals and target audience. We identified a shift towards a micro-influencer strategy – prioritizing cost-efficiency while maximizing impact was key.
            </p>
            
            <div className="flex justify-center my-[30px] lg:hidden">
              <video
                autoPlay
                muted
                loop
                className="w-full object-cover rounded-[25px]"
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-[16px] pt-2">
              Initially, Growth School harboured reservations about the effectiveness of micro-influencers. Their perception was that a wider reach could only be achieved through established, high-profile creators. However, Creators Ideology presented a compelling argument. We emphasized the power of micro-influencers to cultivate highly engaged, niche communities. These communities often boast a deeper level of trust and loyalty towards the creators they follow. Furthermore, micro-influencers tend to have a more focused audience demographic, allowing for a more targeted approach that aligns perfectly with Growth School's ideal profile.
            </p>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2 hidden lg:flex justify-center">
            <video
              autoPlay
              muted
              loop
              className="w-full object-cover rounded-[25px]"
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div> */}

        {/* Result */}
        <div className="pb-[50px] pt-10 growth-challenge">
          <p className="text-[14px] challenge-header md:text-[16px] text-[#098B72]">
                THE RESULTS
            </p>
          <h4 className="text-[35px] challenge-header md:text-[36px] font-semibold pb-[20px]">Exponential Growth, Reduced Costs</h4>
          <p className="text-[16px]">
            The micro-influencer strategy proved to be a resounding success. Within the first 30 days of launch, the campaign generated over 3 million impressions, a staggering testament to the reach achieved. Engagement levels were equally impressive, with over 150,000 likes signifying a captivated audience actively responding to the content. The campaign also generated a remarkable 13,000 link clicks, translating directly into potential sales for Growth School. But the true impact transcended beyond vanity metrics. The micro-influencer approach significantly tripled Growth School's conversions highlighting the exceptional return on investment achieved through this campaign.
          </p>
        </div>

        <div className="results-container">
          <div className="result-item title">
            <p className="title-main">GROWTH</p>
            <p className="title-sub">RESULTS</p>
          </div>
          <div className="result-item">
            <p className="result-value">3M</p>
            <p className="result-label">IMPRESSIONS</p>
          </div>
          <div className="result-item">
            <p className="result-value">300K+</p>
            <p className="result-label">LIKES</p>
          </div>
          <div className="result-item">
            <p className="result-value">12K+</p>
            <p className="result-label">SHARES</p>
          </div>
          <div className="result-item">
            <p className="result-value">13K+</p>
            <p className="result-label">CLICKS</p>
          </div>
        </div>

        {/* <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-[15px] justify-between items-center text-[#098b72] pb-[80px] font-semibold">
          <div className="hover-move-up cursor-pointer flex items-center md:flex-col bg-[#181818] rounded-[10px] py-[20px] w-[300px] lg:w-[250px] px-[20px] md:px-[15px] gap-[10px]">
            <img className="w-[50px]" src={Impression} alt="" />
            <p className="text-[25px] font-bold">3M</p>
            <p className="text-[20px]">Impression</p>
          </div>

          <div className="hover-move-up cursor-pointer flex items-center md:flex-col bg-[#181818] rounded-[10px] py-[20px] w-[300px] lg:w-[250px] px-[20px] md:px-[15px] gap-[10px]">
            <img className="w-[50px]" src={Likes} alt="" />
            <p className="text-[25px] font-bold">300k</p>
            <p className="text-[20px]">Likes</p>
          </div>

          <div className="hover-move-up cursor-pointer flex items-center md:flex-col bg-[#181818] rounded-[10px] py-[20px] w-[300px] lg:w-[250px] px-[20px] md:px-[15px] gap-[10px]">
            <img className="w-[50px]" src={Share} alt="" />
            <p className="text-[25px] font-bold">12k</p>
            <p className="text-[20px]">Shares</p>
          </div>
                        
          <div className="hover-move-up cursor-pointer flex items-center md:flex-col bg-[#181818] rounded-[10px] py-[20px] w-[300px] lg:w-[250px] px-[20px] md:px-[15px] gap-[10px]">
            <img className="w-[40px] md:w-[50px] lg:w-[60px]" src={Clicks} alt="" />
            <p className="text-[25px] font-bold">13k</p>
            <p className="text-[20px]">Clicks</p>
          </div>
        </div> */}

        <div className="flex flex-col items-center md:flex-row gap-[30px] justify-center">
          <Link to={"/scribe"}>
            <button className="px-[25px] py-[10px] border-2 text-white  border-white rounded button group">
              <FaAnglesLeft /> Previous
              <span className="button-hover group-hover:w-[300px] group-hover:h-[300px] group-hover:bottom-[-100%] group-hover:right-[-100%]"></span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Growth;
