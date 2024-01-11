"use client";

import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";

const GallerySlider = () => {
  return (
    <main>
      <div className="flex flex-col items-center gap-10">
        <h2 className="text-5xl font-bold text-[#3E3400]">Gallery</h2>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 1,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper w-[88vw] rounded-2xl"
        >
          <SwiperSlide>
            <img src="image 22.png" className="w-[88vw] rounded-2xl" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="image 22.png" className="w-[88vw] rounded-2xl" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="image 22.png" className="w-[88vw] rounded-2xl" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="image 22.png" className="w-[88vw] rounded-2xl" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="image 22.png" className="w-[88vw] rounded-2xl" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="image 22.png" className="w-[88vw] rounded-2xl" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="image 22.png" className="w-[88vw] rounded-2xl" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="image 22.png" className="w-[88vw] rounded-2xl" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="image 22.png" className="w-[80vw] rounded-2xl" />
          </SwiperSlide>
        </Swiper>
        <div className="flex justify-center items-center gap-2 border-[5px] p-2 rounded-full border-black cursor-pointer">
        <div className="font-semibold text-2xl ml-2">View gallery</div>
        <IoIosArrowDroprightCircle size={35} />
      </div>
      </div>
    </main>
  );
};

export default GallerySlider;
