import React, { useState } from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import img1 from "../../assets/dsidess.jpeg";
import img2 from "../../assets/scri.png";
import img3 from "../../assets/honey.png";

const Card = () => {
  const [showMore, setShowMore] = useState({});

  const toggleShowMore = (card) => {
    setShowMore((prevState) => ({
      ...prevState,
      [card]: !prevState[card],
    }));
  };

  return (
    <div className="bg-black">
      <div className="container mx-auto flex justify-between items-center py-[40px]">
        {/* card-1 */}
        <div className="max-w-sm mx-auto my-4 p-6 bg-transparent border border-white rounded-[25px] shadow-md">
          <img src="" className="h-[332px] w-[332px]" alt="" />
          <h2 className="text-[32px] font-semibold text-white my-[15px]">
            Collaborate
          </h2>
          <button
            onClick={() => toggleShowMore("card1")}
            className="flex items-center gap-3 font-semibold mt-4 px-4 py-2 border border-white text-white rounded "
          >
            {showMore.card1 ? "Back" : "Explore"}
            <HiArrowLongRight className="text-[25px]" />
          </button>
          {showMore.card1 && (
            <p className="mt-4 text-white">
              We get to know you inside and out – your values, aspirations, and
              who you're trying to reach. Then, we team you up with a dream
              squad of creators whose styles and audiences perfectly match
              yours.
            </p>
          )}
        </div>

        {/* card-2 */}
        <div className="max-w-sm mx-auto my-4 p-6 bg-transparent border border-white rounded-[25px] shadow-md">
          <img src="" className="h-[332px] w-[332px]" alt="" />
          <h2 className="text-[32px] font-semibold text-white my-[15px]">
            Create
          </h2>
          <button
            onClick={() => toggleShowMore("card2")}
            className="flex items-center gap-3 font-semibold mt-4 px-4 py-2 border border-white text-white rounded "
          >
            {showMore.card2 ? "Back" : "Explore"}
            <HiArrowLongRight className="text-[25px]" />
          </button>
          {showMore.card2 && (
            <p className="mt-4 text-white">
              Every campaign is meticulously planned, with quantifiable KPIs
              aligned to your specific goals, ensuring every collaboration
              delivers tangible value.
            </p>
          )}
        </div>

        {/* card-3 */}
        <div className="max-w-sm mx-auto my-4 p-6 bg-transparent border border-white rounded-[25px] shadow-md">
          <img src="" className="h-[332px] w-[332px]" alt="" />
          <h2 className="text-[32px] font-semibold text-white my-[15px]">
            Captivate
          </h2>
          <button
            onClick={() => toggleShowMore("card3")}
            className="flex items-center gap-3 font-semibold mt-4 px-4 py-2 border border-white text-white rounded "
          >
            {showMore.card3 ? "Back" : "Explore"}
            <HiArrowLongRight className="text-[25px]" />
          </button>
          {showMore.card3 && (
            <p className="mt-4 text-white">
              Turning customers into true believers is our vision, the kind who
              not only clicks but truly cares about your brand.
            </p>
          )}
        </div>
      </div>
      {/* connects */}

      <div className="container mx-auto pt-[30px] pb-[50px] lg:pt-[50px]">
        <style>{`
      .swiper-pagination-bullet {
        background-color: white !important;
      }
      .swiper-pagination-bullet-active {
        background-color: white !important;
      }
      .swiper-pagination-bullet.swiper-pagination-bullet-active-main {
        background-color: white !important;
      }
    `}</style>
    <h1 className="text-[56px] pb-[30px] font-bold text-center text-white">Our Connects </h1>
        <Swiper
          className="lg:w-[650px] h-[300px]"
          modules={[FreeMode, Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          // breakpoints={{
          //   20: {
          //     slidesPerView: 2,
          //     spaceBetween: 20,
          //   },
          //   768: {
          //     slidesPerView: 3,
          //     spaceBetween: 20,
          //   },
          //   1024: {
          //     slidesPerView: 4,
          //     spaceBetween: 20,
          //   },
          //   1280: {
          //     slidesPerView: 5,
          //     spaceBetween: 40,
          //   },
          // }}
        >
          <SwiperSlide className="flex items-center justify-center h-full text-white border rounded-[10px] border-white p-[25px]">
            <div>
              <p>
                "Our app was a hidden gem, then Creators Ideology swooped in
                like a content fairy godmother. They crafted a bespoke
                influencer campaign that was pure storytelling magic. Downloads
                went from a trickle to a torrent, and our user base is singing
                the praises of our app and the creators who brought it to life.
                These guys don't just boost numbers, they build communities."
              </p>
              <div className="pt-[40px] flex items-center gap-[30px]">
                <img
                  src={img1}
                  className="w-[40px] h-[40px] rounded-full"
                  alt=""
                />
                <h4 className="text-[18px] font-semibold">Side Piece App</h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center text-white h-full border rounded-[10px] border-white p-[25px]">
            <div>
              <p>
                "Working with Creators Ideology has been like finding a unicorn
                in the influencer marketing jungle - kind, helpful, and bursting
                with fresh talent! They consistently bring innovative creators
                to the table, perfectly matched to our campaign needs. It's a
                breath of fresh air compared to the usual agency routine.
                Overall, Creators Ideology is a total game-changer. They're the
                secret weapon we don't want to keep secret! Highly recommend!"
              </p>
              <div className="pt-[40px] flex items-center gap-[30px]">
                <img
                  src={img2}
                  className="w-[40px] h-[40px] rounded-full"
                  alt=""
                />
                <h4 className="text-[18px] font-semibold"> Scribe</h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center text-white h-full border rounded-[10px] border-white p-[25px]">
            <div>
              <p>
                "Our downloads soared, CAC plummeted. Creators Ideology is the
                queen bee of influencer marketing!"
              </p>
              <div className="pt-[40px] flex items-center gap-[30px]">
                <img
                  src={img3}
                  className="w-[40px] h-[40px] rounded-full"
                  alt=""
                />
                <h4 className="text-[18px] font-semibold">Honeygains</h4>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Card;
