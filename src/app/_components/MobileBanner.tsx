"use client";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination } from "swiper/modules";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

function MobileBanner() {
  const swiperRef = useRef<SwiperType | null>(null);

  const images = [
    {
      src: "/images/mobile-banner.png",
      alt: "Image One",
    },
    {
      src: "/images/popular-destinations/2.png",
      alt: "Image Two",
    },
    {
      src: "/images/popular-destinations/3.png",
      alt: "Image Three",
    },
    {
      src: "/images/popular-destinations/4.png",
      alt: "Image Four",
    },
    {
      src: "/images/popular-destinations/5.png",
      alt: "Image Five",
    },
  ];
  const buttonStyles =
    "cursor-pointer hover:text-primary transition-colors duration-300";
  return (
    <section className="section-gap">
      <div className="container relative">
        <Swiper
          modules={[EffectFade, Pagination]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop={true}
          speed={1000}
          slidesPerView={1}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          pagination={{
            clickable: true,
            bulletActiveClass:
              "!bg-transparent !opacity-100 !w-4 !h-4 border-2 border-white !mb-[-3px]",
          }}
          className="cursor-grab"
        >
          {images.map((image) => (
            <SwiperSlide
              key={image.alt}
              className="!h-[350px] rounded-md relative"
            >
              <Image
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-md"
                fill
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10"></div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-between text-white transform -translate-y-1/2 absolute top-1/2 left-0 right-0 px-14 z-10">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className={buttonStyles}
          >
            <ChevronLeft size={48} />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className={buttonStyles}
          >
            <ChevronRight size={48} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default MobileBanner;
