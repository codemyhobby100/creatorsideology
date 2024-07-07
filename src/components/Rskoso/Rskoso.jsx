import React from "react";
import koso_banner from "../../assets/koso.jpg";
import koso_logo from "../../assets/koso_logo.png";
function Rskoso() {
  return (
    <div className="bg-black">
      {/* Banner section */}
      <div
        className="my_container flex flex-col justify-center bg-black text-white h-screen w-full"
        style={{
          backgroundImage: `url(${koso_banner})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <div className="lg:pb-[15vh] pb-[50px]">
          <h4 className="text-[23px] font-semibold">Case studies</h4>
        </div>
        <div>
          <h2 className="md:text-[60px] xl:w-1/2 text-[40px] text-center md:text-left">
            Brewing Up Success:
          </h2>
          <p className="text-[22px] pb-[30px] md:text-[30px] text-center md:text-left">
            How we helped R'S Koso conquer ocffe culture with Moon.
          </p>
        </div>
        <div className="w-full flex justify-center md:pt-[150px] md:justify-end">
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
          <h4 className="text-[23px] font-semibold pb-[40px]">Challenge:</h4>
          <p>
            R'S Koso, a healthy alternative to coffe, needed to break into a
            saturate markert dominated by caffeine giants. Traditional
            advertising wouldn't resonate with their target
            audience-health-conscious individuals concemed about gut health.
          </p>
          <br />
          <p>
            they required a strategy that not only educated but also sparked a
            genuine interest in their product.
          </p>
        </div>

        {/* Solution section */}
        <div className="pb-[50px]">
          <h4 className="text-[23px] w-full font-semibold pb-[40px]">
            Solution:
          </h4>
          <div className="flex flex-col lg:flex-row gap-[30px] items-center pb-[50px]">
            <div className="lg:w-2/5 order-2 lg:order-1">
              <p>
                Partnering with one of YouTube's best video essay channels -
                Moon, we crafted a{" "}
                <strong>12-minute documentary style video</strong> that tackled
                a topic relevant to coffee drinkers:{" "}
                <strong>
                  the unhealthy competition in the coffee industry.
                </strong>
              </p><br />
              <div className="flex justify-center my-[30px] lg:hidden">
                <video src="#" className="w-full lg:w-[80%]" controls></video>
              </div>
              <p>
                The documentary presented a balanced perspective, educating
                viewers on the concerns and the impact of industry competition
                on coffee consumption. Importantly, it also introduced R'S Koso
                as a delicious and gut-friendly beverage for those seeking an
                alternative morning routine solution.
              </p>
            </div>
            <div className="lg:w-3/5 order-1 lg:order-2 hidden lg:flex justify-center">
              <video src="#" className="w-full lg:w-[80%]" controls></video>
            </div>
          </div>
        </div>

        {/* Key Takeaway section */}
        <div className="pb-[50px]">
          <h4 className="text-[23px] font-semibold pb-[40px]">Key Takeaway</h4>
          <p>
            The campaign exceeded expactations, gamenning a total of{" "}
            <strong>200,000 impressions</strong> and over{" "}
            <strong>3,000 unique clicks.</strong> This translated into a
            singnificant increase in brand awareness and website traffic for R'S
            Koso.
          </p>
          <br />
          <p>
            More importantly, the campaign resonated with the target audience,
            sparking curiosity and positive conversations about about good
            health and alternative beverage options.
          </p>
        </div>
        <div className="flex justify-between items-center text-[#098B72] font-semibold">
          <p>Results:200k Impressions</p>
          <p>7,500+ likes</p>
          <p>1200+ comments</p>
          <p>3000 clicks</p>
        </div>
      </div>
    </div>
  );
}

export default Rskoso;
