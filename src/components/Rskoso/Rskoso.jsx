import React from "react";
import koso_banner from "../../assets/koso.jpg";
import koso_logo from "../../assets/koso_logo.png";
import { FaComment, FaShare, FaVideo } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { GiClick } from "react-icons/gi";
import Impression from "../../assets/heart.png";
import Clicks from "../../assets/click.png";
import Likes from "../../assets/like.png";
import Share from "../../assets/share.png";
import { Link } from "react-router-dom";
import { FaAnglesRight } from "react-icons/fa6";

function Rskoso() {
  const videoSrc =
    "https://res.cloudinary.com/drjkeiinn/video/upload/v1720952063/Brands%20%28Ads%29/vznzdo3dyfldoi181xtv.mp4";
  return (
    <div className="bg-black">
      {/* Banner section */}
      <div
        className="my_container flex flex-col justify-center text-white h-screen w-full relative"
        style={{
          backgroundImage: `url(${koso_banner})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <div className="overlay absolute inset-0 bg-black opacity-50"></div>
        <div className="relative lg:pb-[15vh] pb-[50px]">
          <h4 className="text-[23px] font-semibold">Case studies</h4>
        </div>
        <div className="relative">
          <h2 className="md:text-[60px] md:leading-[70px] xl:w-1/2 text-[40px] text-center md:text-left">
            Brewing Up Success:
          </h2>
          <p className="text-[22px] pb-[30px] md:text-[30px] text-center md:text-left">
            How we helped R'S Koso conquer coffee culture with Moon.
          </p>
        </div>
        <div className="relative w-full flex justify-center md:pt-[150px] md:justify-end">
          <div className="inline-block border border-black p-[15px] bg-white max-w-max">
            <div className="flex items-center justify-end text-black">
              <img src={koso_logo} className="w-[80px]" alt="Fum Logo" />
              <span className="px-[20px]">x</span>
              <p className="text-[18px]">Moon</p>
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
          <h4 className="text-[45px] font-semibold pb-[20px]">Building Awareness</h4>
          <p className="text-[18px]">
            R's Koso, a delicious and gut-friendly beverage, faced a daunting challenge. 
            They aimed to carve a niche in the oversaturated world of coffee, a market 
            dominated by established giants with seemingly endless advertising budgets. 
            Traditional marketing tactics wouldn't resonate with their target audience – 
            health-conscious individuals who prioritized gut health alongside their 
            morning pick-me-up.
          </p>
        </div>

        {/* Solution section */}
        <div className="flex flex-col lg:flex-row gap-[30px] pb-[30px]">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <p className="text-[22px]  md:text-[30px] text-[#098B72]">
                THE SOLUTION
            </p>
            <h4 className="text-[45px] font-semibold pb-[20px]">Target Audience Reach</h4>
            <p className="text-[18px]">
              We knew a different approach was necessary. R's Koso needed a strategy that not only educated but also sparked genuine interest in their product. Forget flashy commercials and generic slogans – we needed to create a connection built on trust and shared values. The answer came in the form of a strategic collaboration. We identified "Moon," a highly respected YouTube channel known for its insightful video essays, as the perfect partner. Moon's audience – a community deeply engaged with thoughtful and informative content – perfectly aligned with R's Koso's target demographic. 
            </p>
            <div className="flex justify-center my-[30px] lg:hidden">
              <video
                autoPlay
                muted
                loop
                className="w-full object-cover rounded-[25px]"
              >
                <source
                  src="https://res.cloudinary.com/drjkeiinn/video/upload/v1720952063/Brands%20%28Ads%29/vznzdo3dyfldoi181xtv.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-[18px]">
              Together with Moon, we crafted a captivating 12-minute documentary-style video. Instead of a hard sell, the video tackled a topic relevant to all coffee drinkers: the often-unseen pressures and hidden costs within the coffee industry. The documentary presented a balanced perspective, educating viewers on the concerns surrounding the industry's practices and their potential impact on coffee consumption. Importantly, the video didn't stop at highlighting the problems. It organically introduced R's Koso as a solution. The documentary showcased R's Koso as a delicious and gut-friendly alternative, perfect for those seeking a healthier and more conscious approach to their morning routine.
            </p>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2 hidden lg:flex justify-center">
            <video
              autoPlay
              muted
              loop
              className="w-full object-cover rounded-[25px]"
            >
              <source
                src="https://res.cloudinary.com/drjkeiinn/video/upload/v1720952063/Brands%20%28Ads%29/vznzdo3dyfldoi181xtv.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Result */}
        <div className="pb-[50px]">
          <p className="text-[22px]  md:text-[30px] text-[#098B72]">
              THE SOLUTION
          </p>
          <h4 className="text-[45px] font-semibold pb-[20px]">Key Metrics</h4>
          <p className="text-[18px]">
            The campaign proved to be a beautiful blend of education and engagement. It resonated deeply with the audience, generating over 230,000 impressions and a remarkable 2,000 link clicks. These numbers illustrate the level of curiosity and genuine interest the video sparked. More importantly, the well-crafted documentary subtly shaped viewers' perspectives, creating a positive sentiment for the R's Koso brand. This positive association translated into high call-to-action engagement, demonstrating the effectiveness of this influencer marketing strategy.
          </p>
        </div>

        {/* Key Takeaway section */}
        <div className="pb-[50px]">
            <p className="text-[22px]  md:text-[30px] text-[#098B72]">
                THE KEY TAKEAWAY
            </p>
          <h4 className="text-[45px] font-semibold pb-[20px]">Reaches Target Audience</h4>
          <p className="text-[18px]">
            R's Koso's success story highlights the power of a well-executed influencer marketing campaign. By partnering with the right voice and creating engaging content that resonates with their target audience, brands can break through the noise and establish themselves as genuine contenders in even the most crowded markets.
          </p>
        </div>
        <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-[15px] justify-between items-center text-[#098b72] pb-[80px] font-semibold">
          <div className="flex items-center md:flex-col bg-[#181818] rounded-[10px] py-[20px] w-[300px] md:w-[250px] lg:w-[200px] px-[20px] md:px-[15px] gap-[10px]">
            <img className="w-[40px] md:w-[50px] lg:w-[60px]" src={Impression} alt="" />
            <p className="text-[25px] md:text-[20px] lg:text-[25px] font-bold">230k</p>
            <p className="text-[20px] md:text-[15px] lg:text-[18px]">Impression</p>
          </div>

          <div className="flex items-center md:flex-col bg-[#181818] rounded-[10px] py-[20px] w-[300px] md:w-[250px] lg:w-[200px] px-[20px] md:px-[15px] gap-[10px]">
            <img className="w-[40px] md:w-[50px] lg:w-[60px]" src={Likes} alt="" />
            <p className="text-[25px] md:text-[20px] lg:text-[25px] font-bold">8k</p>
            <p className="text-[20px] md:text-[15px] lg:text-[18px]">Likes</p>
          </div>

          <div className="flex items-center md:flex-col bg-[#181818] rounded-[10px] py-[20px] w-[300px] md:w-[250px] lg:w-[200px] px-[20px] md:px-[15px] gap-[10px]">
            <img className="w-[40px] md:w-[50px] lg:w-[60px]" src={Share} alt="" />
            <p className="text-[25px] md:text-[20px] lg:text-[25px] font-bold">1200</p>
            <p className="text-[20px] md:text-[15px] lg:text-[18px]">Shares</p>
          </div>
                        
          <div className="flex items-center md:flex-col bg-[#181818] rounded-[10px] py-[20px] w-[300px] md:w-[250px] lg:w-[200px] px-[20px] md:px-[15px] gap-[10px]">
            <img className="w-[40px] md:w-[50px] lg:w-[60px]" src={Clicks} alt="" />
            <p className="text-[25px] md:text-[20px] lg:text-[25px] font-bold">1000</p>
            <p className="text-[20px] md:text-[15px] lg:text-[18px]">Clicks</p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Link to={"/fum"}>
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

export default Rskoso;
