import React from "react";
import Fum_banner from "../../assets/fum_banner.png";
import fum_logo from "../../assets/fum_logo.png"; // Assuming you have this logo
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import Impression from "../../assets/heart.png";
import Clicks from "../../assets/click.png";
import Likes from "../../assets/like.png";
import Comment from "../../assets/comment.png";
import { Link } from "react-router-dom";
import { FaVideo } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { GiClick } from "react-icons/gi";
function Fum() {
  const videoSrc =
    "https://res.cloudinary.com/drjkeiinn/video/upload/v1720952061/Brands%20%28Ads%29/ooq82dotuizxdhipvluu.mp4";
  return (
    <div className="bg-black">
      {/* Banner section */}
      <div
        className="my_container flex flex-col justify-center bg-black text-white h-screen w-full"
        style={{
          backgroundImage: `url(${Fum_banner})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <div className="lg:pb-[15vh] pb-[50px]">
          <h4 className="text-[23px] font-semibold">Case studies</h4>
        </div>
        <div>
          <h2 className="md:text-[60px] md:leading-[70px] xl:w-1/2 text-[40px] text-center md:text-left">
            Fum & Geopold:
          </h2>
          <p className="text-[22px] pb-[30px] md:text-[30px] text-center md:text-left">
            Homor Lights Up Sales for Smoke-Free Iternative
          </p>
        </div>
        <div className="w-full flex justify-center md:pt-[150px] md:justify-end">
          <div className="inline-block border border-white p-[15px] max-w-max">
            <div className="flex items-center justify-end">
              <img src={fum_logo} className="w-[80px]" alt="Fum Logo" />
              <span className="px-[20px]">x</span>
              <p className="text-[18px]">Geopold</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className="my_container text-white py-[80px]">
        {/* Challenge section */}
        <div className="pb-[50px]">
          <p className="text-[22px]  md:text-[30px] text-[#098B72]">
              THE CHALLENGE
          </p>
          <h4 className="text-[45px] font-semibold pb-[10px]">Product Desireability</h4>
          <p className="text-[18px]">
            Fum, a revolutionary smoke-free alternative, aimed to disrupt the 
            market with its unique plant-based oils designed to curb nicotine 
            cravings. However, establishing themselves in a crowded marketplace 
            saturated with traditional solutions proved challenging. They needed to 
            not only create brand awareness but also build trust with their target 
            audience: health-conscious individuals seeking freedom from nicotine 
            dependence. The key was reaching these potential customers in a way that 
            resonated with their desire for a healthier lifestyle without sacrificing 
            enjoyment.
          </p>
        </div>

        {/* Solution section */}
        <div className="flex flex-col lg:flex-row gap-[30px] pb-[30px]">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <p className="text-[22px]  md:text-[30px] text-[#098B72]">
                THE SOLUTION
            </p>
            <h4 className="text-[45px] w-full font-semibold pb-[10px]">
              Building Trust
            </h4>
            <p className="text-[18px]">
              We knew a traditional marketing approach wouldn't suffice. Instead, we 
              crafted a strategic influencer marketing campaign. Our search led us to 
              Geopold, a popular YouTuber known for his witty and engaging approach to 
              complex topics. Geopold's audience, primarily young men in the United States,
               significantly overlapped with Fum's target demographic. This partnership 
               offered the potential to not only inform viewers about Fum's unique solution 
               but also to engage them in a way that felt authentic and relatable. The 
               campaign strategy capitalized on Geopold's signature humor to create a 
               memorable and impactful message. Instead of a dry and conventional product 
               presentation, the approach focused on crafting an entertaining and 
               informative video segment seamlessly integrated within one of Geopold's 
               popular videos. This humorous approach effectively cut through the noise 
               and resonated with Geopold's audience. The video didn't just showcase Fum's
               product; it painted a picture of a smoke-free life that could still be fun 
               and engaging.
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

        {/* Key Takeaway section */}
        <div className="pb-[50px]">
          <p className="text-[22px]  md:text-[30px] text-[#098B72]">
              THE RESULT
          </p>
          <h4 className="text-[45px] font-semibold pb-[20px]">kEY Matrics</h4>
          <p className="text-[18px]">
            The campaign's success was undeniable. Within just 14 days of launch, 
            the video garnered more than a quarter million views, capturing the 
            interest of Geopold's established audience. But the true impact went beyond 
            viewership. Engagement rates soared compared to previous campaigns for both 
            Fum and Geopold. Viewers weren't just watching; they were actively interacting, 
            sharing, and commenting, demonstrating a genuine connection with the content. 
            Many expressed curiosity about Fum and its potential to help them break free 
            from nicotine dependence.
          </p>
          <p className="text-[18px]">
          The campaign not only generated significant brand awareness but also 
          likely boosted potential sales 
          through the increased engagement and positive brand association.
          </p>
        </div>
        <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-[15px] justify-between items-center text-[#098b72] pb-[80px] font-semibold">
          <div className="flex items-center md:flex-col bg-[#181818] rounded-[10px] py-[20px] w-[300px] md:w-[250px] lg:w-[200px] px-[20px] md:px-[15px] gap-[10px]">
            <img className="w-[40px] md:w-[50px] lg:w-[60px]" src={Impression} alt="" />
            <p className="text-[25px] md:text-[20px] lg:text-[25px] font-bold">450k</p>
            <p className="text-[20px] md:text-[15px] lg:text-[18px]">Impression</p>
          </div>

          <div className="flex items-center md:flex-col bg-[#181818] rounded-[10px] py-[20px] w-[300px] md:w-[250px] lg:w-[200px] px-[20px] md:px-[15px] gap-[10px]">
            <img className="w-[40px] md:w-[50px] lg:w-[60px]" src={Likes} alt="" />
            <p className="text-[25px] md:text-[20px] lg:text-[25px] font-bold">30k</p>
            <p className="text-[20px] md:text-[15px] lg:text-[18px]">Likes</p>
          </div>

          <div className="flex items-center md:flex-col bg-[#181818] rounded-[10px] py-[20px] w-[300px] md:w-[250px] lg:w-[200px] px-[20px] md:px-[15px] gap-[10px]">
            <img className="w-[40px] md:w-[50px] lg:w-[60px]" src={Comment} alt="" />
            <p className="text-[25px] md:text-[20px] lg:text-[25px] font-bold">2k</p>
            <p className="text-[20px] md:text-[15px] lg:text-[18px]">Comments</p>
          </div>
                        
          <div className="flex items-center md:flex-col bg-[#181818] rounded-[10px] py-[20px] w-[300px] md:w-[250px] lg:w-[200px] px-[20px] md:px-[15px] gap-[10px]">
            <img className="w-[40px] md:w-[50px] lg:w-[60px]" src={Clicks} alt="" />
            <p className="text-[25px] md:text-[20px] lg:text-[25px] font-bold">900</p>
            <p className="text-[20px] md:text-[15px] lg:text-[18px]">Clicks</p>
          </div>
        </div>

        <div className="flex flex-col items-center md:flex-row gap-[30px] justify-center">
          <Link to={"/koso"}>
            <button className="px-[25px] py-[10px] border-2 text-white  border-white rounded button group">
              <FaAnglesLeft /> Previous
              <span className="button-hover group-hover:w-[300px] group-hover:h-[300px] group-hover:bottom-[-100%] group-hover:right-[-100%]"></span>
            </button>
          </Link>
          <Link to={"/ekster"}>
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

export default Fum;
