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
import "./growth.css"
function Growth() {
  const videoSrc = "https://res.cloudinary.com/drjkeiinn/video/upload/v1720952061/Brands%20%28Ads%29/czg6ahu3bxgjqalf2i6s.mp4";
  return (
    <div className="bg-black">
      {/* Banner section */}
      <div className="my_container flex flex-col justify-center bg-black text-white h-screen w-full">
        <div className="lg:pb-[15vh] pb-[50px]">
          <h4 className="text-[23px] font-semibold">Case studies</h4>
        </div>
        <div>
          <h2 className="md:text-[60px] md:leading-[70px] xl:w-1/2 text-[40px] text-center md:text-left">
            Supercharging Workflow Efficiency with Scribe:
          </h2>
          <p className="text-[22px] pb-[30px] md:text-[30px] text-center md:text-left">
            How we Achieved Double the results at a Third of the Cost.
          </p>
        </div>
        <div className="w-full flex justify-center md:pt-[150px] md:justify-end">
          <div className="inline-block border border-white px-[30px] py-[10px] bg-black max-w-max">
            <div className="flex items-center justify-end text-white">
              <img src={Scribe_logo} className="w-[100px]" alt="Fum Logo" />
            </div>
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className="my_container text-white py-[80px]">
        {/* Challenge section */}
        <div className="pb-[50px] text-center px-0 md:px-4">
          <p className="text-[16px] md:text-[20px] text-[#098B72]">
              THE CHALLENGE
          </p>
          <h4 className="text-[35px] md:text-[36px] font-semibold pb-[20px]">Equipping Students, Redefining Education</h4>
          <p className="text-[16px]">
            Growth School, a community-driven online learning platform, disrupts the traditional education model by bridging a critical gap between outdated academic curricula and the dynamic skillsets employers demand in today's job market. Their innovative AI-driven approach utilizes intensive cohort programs that equip students with the most in-demand skills – all designed for immediate job readiness.
          </p>
          <p className="text-[16px] pt-2">
            Growth School approached Creators Ideology in Q2 with a clear objective: expand their reach and attract a wider audience of Teams through a strategic and cost-effective influencer marketing campaign. Their previous attempts with a limited pool of YouTube creators proved ineffective. While these creators generated some initial buzz, the exorbitant fees and ultimately negative return on investment (ROI) forced Growth School to seek a more sustainable and targeted solution.
          </p>
        </div>

        {/* Solution section */}
        <div className="flex flex-col lg:flex-row gap-[30px] pb-[30px]">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <p className="text-[16px] md:text-[20px] text-[#098B72]">
                THE SOLUTION
            </p>
            <h4 className="text-[35px] md:text-[36px] w-full font-semibold pb-[20px]">
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
        </div>
        {/* Result */}
        <div className="pb-[50px]">
          <p className="text-[16px] md:text-[20px] text-[#098B72]">
                THE RESULTS
            </p>
          <h4 className="text-[35px] md:text-[36px] font-semibold pb-[20px]">Exponential Growth, Reduced Costs</h4>
          <p className="text-[16px]">
            The micro-influencer strategy proved to be a resounding success. Within the first 30 days of launch, the campaign generated over 3 million impressions, a staggering testament to the reach achieved. Engagement levels were equally impressive, with over 150,000 likes signifying a captivated audience actively responding to the content. The campaign also generated a remarkable 13,000 link clicks, translating directly into potential sales for Growth School.
            But the true impact transcended beyond vanity metrics. The micro-influencer approach significantly reduced Growth School's customer acquisition cost (CAC) by 20% highlighting the exceptional return on investment achieved through this campaign.
          </p>
        </div>

        {/* Key Takeaway section */}
        <div className="pb-[50px]">
          <h4 className="text-[35px] md:text-[36px] font-semibold pb-[20px]">Key Takeaway</h4>
          <p className="text-[16px]">
            The Growth School case study serves as a powerful testament to the effectiveness of micro-influencers in achieving successful influencer marketing campaign goals. Creators Ideology's strategy not only delivered cost-efficiency and impressive reach but also fostered genuine engagement between Growth School and the influencer's community. This authenticity translated into increased brand trust and perceived value, ultimately driving positive conversions for Growth School.
          </p>
        </div>

        <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-[15px] justify-between items-center text-[#098b72] pb-[80px] font-semibold">
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
            <RiCustomerService2Fill className="text-[#098b72] w-[50px] h-[50px]" />
            <p className="text-[25px] font-bold">13k</p>
            <p className="text-[20px]">Clicks</p>
          </div>
        </div>

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
