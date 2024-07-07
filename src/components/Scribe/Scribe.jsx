import React from "react";
import Scribe_logo from "../../assets/scribe_logo.png";
function Scribe() {
  return (
    <div className="bg-black">
      {/* Banner section */}
      <div className="my_container flex flex-col justify-center bg-black text-white h-screen w-full">
        <div className="lg:pb-[15vh] pb-[50px]">
          <h4 className="text-[23px] font-semibold">Case studies</h4>
        </div>
        <div>
          <h2 className="md:text-[60px] xl:w-1/2 text-[40px] text-center md:text-left">
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
        <div className="pb-[50px]">
          <h4 className="text-[23px] font-semibold pb-[40px]">Challenge:</h4>
          <p>
            Scribe, a revolutionary AI-powered tool that simplifies creating
            step-by-step workflow guides, needed to reach its target
            audience-busy teams seeking streamlned processes. However,
            traditional influencers marketing on platforms like YouTube proved
            cost-prohibitive due to high creator fees and a potential mismatch
            between Scribe's average order value and the platform's cost
            structure.
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
                Our agency devised a strategic and cost-effective influencer
                marketing campaign leveraging the power of short-form content
                creators on Instagram. We identified four highly-regarded
                creators within the business and marketing niche who possessed a
                strong and engaged follower base.
              </p><br />
              <div className="flex justify-center my-[30px] lg:hidden">
                <video src="#" className="w-full lg:w-[80%]" controls></video>
              </div>
              <p>
                By strategically leveraging the power of micro-influencers and
                captivating short-form content on Instagram, our agency
                delivered a highly successful campaign for Scribe. This case
                study demonstrates the potential for achieving superior results
                at a fraction of the cost compared to traditional influencer
                marketing approaches. It underscores the importance of
                understanding target audiences, platform-specific strengths, and
                the power of relatable content creation.
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
            By cultivating closer relationship with their followers and
            fostering a more genuine tone, micro-influencers achieve higher
            engagement with the brand, while their dedicated followings within
            the precise businedd and marketing demographic ensure targeted reach
            for brand messaging. This cost-effective approach, offering an 80%
            reduction compared to high-profile YouTube personalities, allowed
            Scribe to stretch its marketing budget forther and achieve
            exceptional results exceeding traditional YouTube advertising
            benchmarks.
          </p>
        </div>
        <div className="flex justify-between items-center text-[#098B72] font-semibold">
          <p>Results:900k Impressions</p>
          <p>15,000+ likes</p>
          <p>2,000+ comments</p>
          <p>12,000 Shares</p>
        </div>
      </div>
    </div>
  );
}

export default Scribe;
