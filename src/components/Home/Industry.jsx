import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import img1 from "../../assets/customer-logo-1.png";
import img2 from "../../assets/customer-logo-2.png";
import img3 from "../../assets/customer-logo-3.png";
import img4 from "../../assets/customer-logo-4.png";
import img5 from "../../assets/customer-logo-5.png";
import img6 from "../../assets/customer-logo-6.png";

function Industry() {
  return (
    <div className="bg-black pt-[80px]">
      <h1 className="text-white text-center text-[42px] lg:text-[54px] ">
        Trusted by Industry Leaders
      </h1>
      <div className=" container mx-auto px-[15px] items-center pt-[30px] pb-[50px] lg:pt-[50px]">
        <Swiper
        className="flex justify-center "
          modules={[FreeMode, Autoplay]}
          slidesPerView={6}
          spaceBetween={20}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            20: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }}
        >
 
            <SwiperSlide className="flex justify-center ">
              <img src={img1} alt="Customer logo 1" className="w-[250px] py-[20px] px-[30px] bg-[#181818] h-[90px] hover:border hover:border-white rounded-[10px]" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="Customer logo 2" className="w-[250px] py-[20px] px-[30px] bg-[#181818] h-[90px] hover:border hover:border-white rounded-[10px]" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="Customer logo 3" className="w-[250px] py-[20px] px-[30px] bg-[#181818] h-[90px] hover:border hover:border-white rounded-[10px]" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img4} alt="Customer logo 4" className="w-[250px] py-[20px] px-[30px] bg-[#181818] h-[90px] hover:border hover:border-white rounded-[10px]" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img5} alt="Customer logo 5" className="w-[250px] py-[20px] px-[30px] bg-[#181818] h-[90px] hover:border hover:border-white rounded-[10px]" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img6} alt="Customer logo 6" className="w-[250px] py-[20px] px-[30px] bg-[#181818] h-[90px] hover:border hover:border-white rounded-[10px]" />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center ">
              <img src={img1} alt="Customer logo 1" className="w-[250px] py-[20px] px-[30px] bg-[#181818] h-[90px] hover:border hover:border-white rounded-[10px]" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="Customer logo 2" className="w-[250px] py-[20px] px-[30px] bg-[#181818] h-[90px] hover:border hover:border-white rounded-[10px]" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="Customer logo 3" className="w-[250px] py-[20px] px-[30px] bg-[#181818] h-[90px] hover:border hover:border-white rounded-[10px]" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img4} alt="Customer logo 4" className="w-[250px] py-[20px] px-[30px] bg-[#181818] h-[90px] hover:border hover:border-white rounded-[10px]" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img5} alt="Customer logo 5" className="w-[250px] py-[20px] px-[30px] bg-[#181818] h-[90px] hover:border hover:border-white rounded-[10px]" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img6} alt="Customer logo 6" className="w-[250px] py-[20px] px-[30px] bg-[#181818] h-[90px] hover:border hover:border-white rounded-[10px]" />
            </SwiperSlide>
            
        </Swiper>
      </div>
    </div>
  );
}

export default Industry;
