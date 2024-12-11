"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { ImLoop2 } from "react-icons/im";
import Image from "next/image";
import svg1 from "../../../public/landingPage/svg1.svg";
import svg2 from "../../../public/landingPage/svg2.svg";
import svg3 from "../../../public/landingPage/svg3.svg";
import svg4 from "../../../public/landingPage/svg4.svg";
import svg5 from "../../../public/landingPage/svg5.svg";
import svg6 from "../../../public/landingPage/svg6.svg";
import svg7 from "../../../public/landingPage/svg7.svg";
import svg8 from "../../../public/landingPage/svg8.svg";
import svg9 from "../../../public/landingPage/svg9.svg";
import useSlideInAnimation from "@/hooks/slideAnimation";

const TrustedClients = ({
  smallScreen = 2,
  mediumScreen = 3,
  largeScreen = 5,
}) => {
  const imageArr = [svg1, svg2, svg3, svg4, svg5, svg6, svg7, svg8, svg9];

  return (
    <div className="flex flex-col gap-5 items-center whitespace-nowrap bg-[#F6F4F4] py-10">
      {/* <p>Trusted by <Counter end={companies?.length} duration={1000} />+ companies worldwide</p> */}
      <div className="w-full px-10 flex items-center">
        <Swiper
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y, ImLoop2]}
          spaceBetween={10}
          loop={true}
          autoplay={{ delay: 2800, disableOnInteraction: false }}
          breakpoints={{
            // Configure different breakpoints
            500: {
              slidesPerView: smallScreen, // 1 slide on small screens
              spaceBetween: 20,
            },
            768: {
              slidesPerView: mediumScreen, // 2 slides on medium screens
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: largeScreen, // 3 slides on large screens
              spaceBetween: 50,
            },
          }}
          className=""
        >
          {imageArr?.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col w-fit items-center justify-center gap-1">
                <Image
                  alt=""
                  src={image}
                  height={150}
                  className="object-contain bg-blend-multiply mix-blend-multiply"
                />{" "}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TrustedClients;
