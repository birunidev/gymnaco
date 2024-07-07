import React from "react";
import { Autoplay } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

export default function Partners() {
  return (
    <div className="space-y-6 partner-wrapper">
      <p className="font-bold text-xl text-montserrat lg:text-[30px]">
        Trusted Partners
      </p>
      <Swiper
        slidesPerView={4}
        spaceBetween={0}
        centeredSlides={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img
            className="w-[80px] lg:w-[100px] 2xl:w-[120px]"
            src="/assets/partner-logo.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[80px] lg:w-[100px] 2xl:w-[120px] "
            src="/assets/partner-logo.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[80px] lg:w-[100px] 2xl:w-[120px] "
            src="/assets/partner-logo.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[80px] lg:w-[100px] 2xl:w-[120px] "
            src="/assets/partner-logo.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[80px] lg:w-[100px] 2xl:w-[120px] "
            src="/assets/partner-logo.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[80px] lg:w-[100px] 2xl:w-[120px] "
            src="/assets/partner-logo.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[80px] lg:w-[100px] 2xl:w-[120px] "
            src="/assets/partner-logo.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[80px] lg:w-[100px] 2xl:w-[120px] "
            src="/assets/partner-logo.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[80px] lg:w-[100px] 2xl:w-[120px] "
            src="/assets/partner-logo.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[80px] lg:w-[100px] 2xl:w-[120px] "
            src="/assets/partner-logo.png"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
