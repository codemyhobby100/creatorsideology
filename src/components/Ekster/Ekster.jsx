import React from "react";
import Ekster_banner from "../../assets/Ekster_banner.png";
import Ekster_logo from "../../assets/Ekster_logo.png";
import Impression from "../../assets/heart.png";
import Clicks from "../../assets/click.png";
import Likes from "../../assets/like.png";
import Share from "../../assets/share.png";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GiClick } from "react-icons/gi";
import { BiSolidLike } from "react-icons/bi";
import { FaVideo } from "react-icons/fa";
import EksterVid from "../../assets/video/Ekster.mp4";
import './ekster.css';

function Ekster() {
  return (
    <div className="bg-black">
      {/* banner section */}
      <div
        className="my_container flex flex-col justify-center bg-black text-white h-screen w-full"
        style={{
          backgroundImage: `url(${Ekster_banner})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <div className="lg:pb-[18vh] pb-[50px]">
          <h4 className="text-[23px] font-semibold">Case studies</h4>
        </div>
        <div>
          <h2 className="md:text-[60px] xl:w-1/2 md:leading-[70px] text-[40px] text-center md:text-left">
            Supercharging Ekster's Brand with Influencers Marketing
          </h2>
          <p className="text-[22px] pb-[30px] md:text-[30px] text-center md:text-left">
            (Limited Budget, Big Results)
          </p>
        </div>
        <div className="w-full flex justify-center md:pt-[150px] md:justify-end">
          <div className="inline-block border border-white p-[15px] max-w-max">
            <div className="flex items-center justify-end">
              <img src={Ekster_logo} className="w-[100px]" alt="Ekster Logo" />
              <span className="px-[20px]">x</span>
              <p className="text-[18px]">Ryan Picture</p>
            </div>
          </div>
        </div>
      </div>
      <div className="my_container text-white py-[80px]">
        {/* challenge section */}
        <div className="pb-[50px] challenge">
          <p className="text-[12px]  md:text-[16px] text-[#098B72]">
              THE CHALLENGE
          </p>
          <h4 className="text-[40px] font-semibold pb-[20px]">Brand Reputation</h4>
          <p className="text-[16px]">
            Ekster, a leading provider of minimalist wallets, faced a common challenge for 
            innovative startups: increasing brand awareness and driving sales while working within a 
            limited marketing budget. Traditional advertising often requires a significant financial 
            investment, leaving Ekster in need of a strategic influencer marketing campaign that delivered 
            positive results without breaking the bank.
          </p>
        </div>
        {/* Solution section */}
          
          <div className="flex flex-col gap-[30px] lg:flex-row pb-[30px]">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <p className="text-[12px]  md:text-[16px] text-[#098B72]">
                  THE SOLUTION
              </p>
              <h4 className="text-[40px] w-full font-semibold pb-[20px]">
                High-Quality Content
              </h4>
              <p className="text-[16px]">
                We knew a traditional approach of securing a single, high-profile influencer wouldn't be the most 
                effective use of Ekster's resources. Instead, we proposed a campaign that harnessed the power of 
                micro-influencers. These social media stars, boasting smaller but highly engaged audiences, often 
                possess a deeper connection and stronger trust with their followers. By meticulously selecting 
                micro-influencers whose target demographics closely aligned with Ekster's ideal customer – young, 
                design-conscious individuals who embraced a minimalist lifestyle – we ensured the campaign 
                resonated with the right people at the right time.
              </p>
              <button className="flex items-center button border bg-primary text-black rounded-[6px] mt-4 group outline-none border-none">
                <Link to="/contact">Start a Project</Link>
                <span className="button-hover group-hover:w-[300px] group-hover:h-[300px] group-hover:bottom-[-100%] group-hover:right-[-100%]"></span>
              </button>
              <div className="flex justify-center my-[30px] lg:hidden">
                <video src={EksterVid} autoPlay
                  muted
                  loop 
                  className="w-full object-cover rounded-[25px]" >
                </video>
              </div>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2 hidden lg:flex justify-center">
              <video src={EksterVid} autoPlay
                muted
                loop className="w-full object-cover rounded-[25px]" ></video>
            </div>
          </div>
        {/* Key Takeaway section */}
        <div className="pb-[50px] mt-5">
          <p className="text-[12px]  md:text-[16px] text-[#098B72]">
              THE KEY TAKEAWAY
            </p>
          <h4 className="text-[40px] font-semibold pb-[20px]">Reaches Taeget Audience</h4>
          <p className="text-[18px]">
            The campaign wasn't just about one-way communication. Interactive 
            elements woven into the mini-documentary, 
            such as polls and Q&A sessions, encouraged audience participation. 
            This strategy not only boosted brand recognition but also generated 
            valuable audience insights that Ekster could leverage to further refine their 
            marketing efforts. The result? A campaign that not only generated over 1.5 million 
            impressions but also demonstrably increased brand awareness and translated into a 
            significant boost in sales.
          </p>
        </div>
        <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-[15px] justify-between items-center text-[#098b72] pb-[80px] font-semibold">
          <div className="hover-move-up cursor-pointer flex items-center md:flex-col bg-[#181818] rounded-[10px] py-[20px] w-[300px] md:w-[250px] lg:w-[200px] px-[20px] md:px-[15px] gap-[10px]">
            <img className="w-[40px] md:w-[50px] lg:w-[60px]" src={Impression} alt="" />
            <p className="text-[25px] md:text-[20px] lg:text-[25px] font-bold">1.5M</p>
            <p className="text-[20px] md:text-[15px] lg:text-[18px]">Impression</p>
          </div>

          <div className="hover-move-up cursor-pointer flex items-center md:flex-col bg-[#181818] rounded-[10px] py-[20px] w-[300px] md:w-[250px] lg:w-[200px] px-[20px] md:px-[15px] gap-[10px]">
            <img className="w-[40px] md:w-[50px] lg:w-[60px]" src={Likes} alt="" />
            <p className="text-[25px] md:text-[20px] lg:text-[25px] font-bold">60k</p>
            <p className="text-[20px] md:text-[15px] lg:text-[18px]">Likes</p>
          </div>

          <div className="hover-move-up cursor-pointer flex items-center md:flex-col bg-[#181818] rounded-[10px] py-[20px] w-[300px] md:w-[250px] lg:w-[200px] px-[20px] md:px-[15px] gap-[10px]">
            <img className="w-[40px] md:w-[50px] lg:w-[60px]" src={Share} alt="" />
            <p className="text-[25px] md:text-[20px] lg:text-[25px] font-bold">13k</p>
            <p className="text-[20px] md:text-[15px] lg:text-[18px]">Shares</p>
          </div>
                        
          <div className="hover-move-up cursor-pointer flex items-center md:flex-col bg-[#181818] rounded-[10px] py-[20px] w-[300px] md:w-[250px] lg:w-[200px] px-[20px] md:px-[15px] gap-[10px]">
            <img className="w-[40px] md:w-[50px] lg:w-[60px]" src={Clicks} alt="" />
            <p className="text-[25px] md:text-[20px] lg:text-[25px] font-bold">7,000</p>
            <p className="text-[20px] md:text-[15px] lg:text-[18px]">Clicks</p>
          </div>
       </div>


        <div className="flex flex-col items-center md:flex-row gap-[30px] justify-center">
          <Link to={"/fum"}>
            <button className="px-[25px] py-[10px] border-2 text-white  border-white rounded button group">
            <FaAnglesLeft /> Previous
              <span className="button-hover group-hover:w-[300px] group-hover:h-[300px] group-hover:bottom-[-100%] group-hover:right-[-100%]"></span>
            </button>
          </Link>
          <Link to={"/scribe"}>
            <button className="px-[25px] py-[10px] border-2 text-white  border-white rounded button group">
              View Next <FaAnglesRight/> 
              <span className="button-hover group-hover:w-[300px] group-hover:h-[300px] group-hover:bottom-[-100%] group-hover:right-[-100%]"></span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Ekster;
