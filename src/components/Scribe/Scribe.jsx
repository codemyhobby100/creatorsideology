import React from "react";
import Scribe_logo from "../../assets/scribe_logo.png";
import { FaVideo } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Impression from "../../assets/heart.png";
import Clicks from "../../assets/click.png";
import Likes from "../../assets/like.png";
import Share from "../../assets/share.png";
import { GiClick } from "react-icons/gi";
import { RiCustomerService2Fill } from "react-icons/ri";
import scribe_banner from "../../assets/scribe.png";
import './scribe.css'

function Scribe() {
  const videoSrc =
    "https://res.cloudinary.com/dfyeocma8/video/upload/v1722323950/ScribeHow2_cr9wfm.mp4";
  return (
    <div className="bg-black">
      {/* Banner section */}
      {/* Banner section */}
      <div
        className="my_container flex flex-col justify-center text-white h-screen w-full relative"
        style={{
          backgroundImage: `url(${scribe_banner})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <div className="my_container flex flex-col justify-center text-white h-screen w-full">
        <div className="lg:pb-[15vh] pb-[50px]">
            {/* <h4 className="text-[23px] font-semibold">Case studies</h4> */}
          </div>
          <div>
            <h2 className="md:text-[60px] md:leading-[70px] xl:w-1/2 text-[35px] text-center md:text-left">
              Supercharging Workflow Efficiency with Scribe:
            </h2>
            <p className="text-[22px] pb-[30px] md:text-[30px] text-center md:text-left">
              How we Achieved Double the results at a Third of the Cost.
            </p>
          </div>
          <div className="w-full flex justify-center md:pt-[150px] md:justify-end">
            <div className="inline-block border border-white px-[30px] py-[10px]  max-w-max">
              <div className="flex items-center justify-end text-white">
                <img src={Scribe_logo} className="w-[100px]" alt="Fum Logo" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className="my_container text-white py-[80px]">
        {/* Challenge section */}
        <div className="pb-[50px] scribe-challenge">
          <p className="text-[14px] challenge-header  md:text-[16px] text-[#098B72]">
                THE CHALLENGE
          </p>
          <h4 className="text-[35px] challenge-header font-semibold pb-[20px]">High CAC</h4>
          <p className="text-[16px]">
            Scribe, a revolutionary AI-powered tool that simplifies creating step-by-step workflow guides, faced a unique challenge. Their target audience – busy teams seeking streamlined processes – was scattered across various platforms. Traditional influencer marketing on YouTube, while seemingly ideal, proved cost-prohibitive. High creator fees and a potential mismatch between Scribe's average order value and YouTube's ad structure limited its effectiveness.
          </p>
        </div>

        {/* Solution section */}

        <div className="flex flex-col lg:flex-col gap-[30px] pb-[30px] pt-6">
          <div className="w-full order-2 lg:order-1 scribe-challenge">
            <p className="text-[14px] challenge-header  md:text-[16px] text-[#098B72]">
              THE SOLUTION
            </p>
            <h4 className="text-[35px] challenge-header  w-full font-semibold pb-[20px]">
              Platform Optimization and Strategic Partnerships
            </h4>
            <p className="text-[16px] lg:pb-2">
              Understanding the need for a more targeted approach, we delved deep into Scribe's marketing goals. We analyzed their target cost-per-thousand-impressions (CPM) for short-form video content (reels) and their desired reach. Our philosophy aligns perfectly with Scribe's: maximizing return on investment.
            </p>
            <ul>
              <li className="pt-2 text-[16px] lg:pb-2">
                <b>Leveraging Instagram's Power:</b> We identified the best marketing and business content creators on Instagram, a platform known for its engaged audience and cost-effective advertising options. We curated a list whose reach closely matched Scribe's desired CPM.
              </li>
              <li className="pt-2 text-[16px] lg:pb-2">
                <b>Collaboration for Success:</b> Partnering with these creators ensured targeted messaging and maximized ROI. Scribe benefited from the creators' established audience of busy professionals, while the creators gained a valuable partnership opportunity. Marketing Psychology, for example, went above and beyond, fully committing to creating exceptional content that resonated with Scribe's target audience.
              </li>
            </ul>
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
          </div>
          <div className="w-full lg:px-[40px] order-1 lg:order-2 flex justify-center">
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


        {/* Key Takeaway section */}
        <div className="pb-[50px] pt-10 scribe-challenge">
          <p className="text-[14px]  md:text-[16px] challenge-header text-[#098B72]">
                THE RESULTS
            </p>
          <h4 className="text-[35px] font-semibold  challenge-header pb-[20px]">CAC Reduction</h4>
          <p className="text-[16px]">
            The campaign exceeded all expectations. Scribe achieved over 1.8 million impressions and garnered an impressive 100,000 likes. More importantly, they secured a cost-per-engagement (CPE) of less than $0.50, demonstrating the campaign's remarkable efficiency. This success wasn't solely a result of platform optimization. The commitment from the creators who ensured the content aligned with Scribe's goals, played a crucial role. The positive outcome led to multiple renewed opportunities for the creators involved, fostering a long-term, mutually beneficial partnership. This case study illustrates the power of targeted influencer marketing. By understanding platform strengths, audience demographics, and cost structures, we were able to deliver exceptional results for Scribe while cultivating valuable partnerships with established content creators.
          </p>
        </div>

        <div className="results-container">
          <div className="result-item title">
            <p className="title-main">SCRIBE HOW</p>
            <p className="title-sub">RESULTS</p>
          </div>
          <div className="result-item">
            <p className="result-value">1.8M</p>
            <p className="result-label">IMPRESSIONS</p>
          </div>
          <div className="result-item">
            <p className="result-value">100K+</p>
            <p className="result-label">LIKES</p>
          </div>
          <div className="result-item">
            <p className="result-value">20K+</p>
            <p className="result-label">COMMENTS</p>
          </div>
          <div className="result-item">
            <p className="result-value">1000+</p>
            <p className="result-label">CLICKS</p>
          </div>
        </div>
        {/* <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-[15px] justify-between items-center text-[#098b72] pb-[80px] font-semibold">
          <div className="hover-move-up cursor-pointer flex items-center md:flex-col bg-[#181818] rounded-[10px] py-[20px] w-[300px] lg:w-[250px] px-[20px] md:px-[15px] gap-[10px]">
            <img className="w-[50px]" src={Impression} alt="" />
            <p className="text-[25px] font-bold">1.8M</p>
            <p className="text-[20px]">Impression</p>
          </div>

          <div className="hover-move-up cursor-pointer flex items-center md:flex-col bg-[#181818] rounded-[10px] py-[20px] w-[300px] lg:w-[250px] px-[20px] md:px-[15px] gap-[10px]">
            <img className="w-[50px]" src={Likes} alt="" />
            <p className="text-[25px] font-bold">100k</p>
            <p className="text-[20px]">Likes</p>
          </div>

          <div className="hover-move-up cursor-pointer flex items-center md:flex-col bg-[#181818] rounded-[10px] py-[20px] w-[300px] lg:w-[250px] px-[20px] md:px-[15px] gap-[10px]">
            <img className="w-[50px]" src={Share} alt="" />
            <p className="text-[25px] font-bold">20K</p>
            <p className="text-[20px]">Shares</p>
          </div>
                        
          <div className="hover-move-up cursor-pointer flex items-center md:flex-col bg-[#181818] rounded-[10px] py-[20px] w-[300px] lg:w-[250px] px-[20px] md:px-[15px] gap-[10px]">
          <img className="w-[50px]" src={Clicks} alt="" />
            <p className="text-[25px] font-bold">1000</p>
            <p className="text-[20px]">Clicks</p>
          </div>
        </div> */}

        <div className="flex flex-col items-center md:flex-row gap-[30px] justify-center">
          <Link to={"/ekster"}>
            <button className="px-[25px] py-[10px] border-2 text-white  border-white rounded button group">
              <FaAnglesLeft /> Previous
              <span className="button-hover group-hover:w-[300px] group-hover:h-[300px] group-hover:bottom-[-100%] group-hover:right-[-100%]"></span>
            </button>
          </Link>
          <Link to={"/growth"}>
            <button className="px-[25px] py-[10px] border-2 text-white  border-white rounded button group">
              View Next <FaAnglesRight />
              <span className="button-hover group-hover:w-[300px] group-hover:h-[300px] group-hover:bottom-[-100%] group-hover:right-[-100%]"></span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Scribe;
