// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import SlideItem from "./SlideItem";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import CustomPagination from "./CustomPagination";

const slideItems = [
  {
    imgSrc: "/assets/slides/slide-1.png",
  },
  {
    imgSrc: "/assets/slides/slide-2.png",
  },
  {
    imgSrc: "/assets/slides/slide-3.png",
  },
  {
    imgSrc: "/assets/slides/slide-4.png",
  },
  {
    imgSrc: "/assets/slides/slide-5.png",
  },
];

export default function Slider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    if (swiper) {
      setActiveSlide(swiper.activeIndex);
      swiper.on("slideChange", () => {
        setActiveSlide(swiper.activeIndex);
      });
    }
  }, [swiper]);

  return (
    <>
      <Swiper
        slideToClickedSlide={true}
        effect="coverflow"
        modules={[EffectCoverflow, Pagination, Autoplay]}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 3.5,
        }}
        slidesPerView="auto"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        breakpoints={{
          768: {
            coverflowEffect: {
              rotate: 0,
              stretch: 130,
              depth: 150,
              modifier: 3.5,
            },
          },
          1024: {
            coverflowEffect: {
              rotate: 0,
              stretch: 120,
              depth: 300,
              modifier: 3.5,
            },
          },
          1280: {
            coverflowEffect: {
              rotate: 0,
              stretch: 100,
              depth: 250,
              modifier: 3.5,
            },
          },
        }}
        pagination={{
          clickable: true,
        }}
        className="relative z-40 w-full"
        onSwiper={setSwiper}
      >
        {slideItems.map((slideItem, index) => (
          <SwiperSlide className="slide-item" key={index}>
            <SlideItem imgSrc={slideItem.imgSrc} />
          </SwiperSlide>
        ))}
        <div className="btn-wrapper z-40 absolute bottom-0 w-full flex items-center justify-between max-w-[160px] -translate-y-2 left-1/2 -translate-x-1/2">
          <button
            onClick={() => swiper?.slidePrev()}
            className="rotate-0 cursor-pointer pointer-events-auto"
          >
            <img src="/assets/icons/arrow.svg" alt="" />
          </button>
          <button onClick={() => swiper?.slideNext()} className="rotate-180">
            <img src="/assets/icons/arrow.svg" alt="" />
          </button>
        </div>
      </Swiper>
    </>
  );
}
