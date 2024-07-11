import React from "react";
import Fum_banner from "../../assets/fum_banner.png";
import fum_logo from "../../assets/fum_logo.png"; // Assuming you have this logo

function Fum() {
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
          <h2 className="md:text-[60px] xl:w-1/2 text-[40px] text-center md:text-left">
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
          <h4 className="text-[23px] font-semibold pb-[20px]">Challenge:</h4>
          <p>
            Fum, a unique smoke-free alternative offering plant-based oils to
            curb nacotine crevings, faced the hurdle of creating brand awareness
            and establishing itself in a crowded market. Their target audience,
            likely health-conscious individuals seeking to break free from
            nicotine dependence, needed to be informed and engaged in a way that
            resonated.
          </p>
        </div>

        {/* Solution section */}
        <div className="pb-[50px]">
          <h4 className="text-[23px] w-full font-semibold pb-[20px]">
            Solution:
          </h4>
          <div className="flex flex-col lg:flex-row gap-[30px] pb-[30px]">
            <div className="lg:w-2/5 order-2 lg:order-1">
              <p>
                We proposed an influencer marketing campaign with Geopold, a
                popular YouTuber known for his witty and engaging approach to
                complex topics. Geopold's audience consisting primarily of young
                men in the United States, overlapped significantly with Fum's
                target market. The strategy focused on leveraging Geopold's
                humor to create a memorable and impactful message.
              </p>
              <div className="flex justify-center my-[30px] lg:hidden">
                <video src="#" className="w-full lg:w-[80%]" controls></video>
              </div>
            </div>
            <div className="lg:w-3/5 order-1 lg:order-2 hidden lg:flex justify-center">
              <video src="#" className="w-full lg:w-[80%]" controls></video>
            </div>
          </div>
        </div>

        {/* Key Takeaway section */}
        <div className="pb-[50px]">
          <h4 className="text-[23px] font-semibold pb-[20px]">Key Takeaway</h4>
          <p>
            Homur effectively enhanced viewer engagement with the content,
            leading to a demonstrably positive impact on brand awareness and
            potential sales. The video granered signigicant attention within
            just 14 days of launch capturing the interest of Geopold's
            esxtablished audience. Furthermore, we observed a notably higher
            engagement rate compared to previous campaigns.
          </p>
          <br />
          <p>
            The Fum x Geopold collaboration serves as a blueprint for brands
            seeking to leverage homor and influencer marketing for success. The
            campaign demonstrates that a well-crafted integrated segment,
            utilizing humor and targeting the right audience, can effectively
            generate brand awareness and drive positive sales results.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Fum;
