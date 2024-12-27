"use client";

import React from "react";
import Image from "next/image";
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
import blog1 from "../../../public/landingPage/test1.svg";
import blog2 from "../../../public/landingPage/test2.svg";
import blog3 from "../../../public/landingPage/test3.svg";
import useSlideIn from "@/hooks/useSlideIn";

const Testimonies = () => {
  const slideInRef = useSlideIn();

  const blogData = [
    {
      imageSrc: blog1,
      description:
        "Join us at the Castle of Good Hope, Cape Town, on September 23rd-24th, 2024, for the launch of One Map Africa's Fashion Project...",
      author: "John Doe",
    },
    {
      imageSrc: blog2,
      description:
        "A virtual conference in Commemoration of the legacy of Dr. Kwame Nkrumah, a pioneering figure in Pan-Africanism and a key architect in the movement toward African unity...",
      author: "Mark Dove",
    },
    {
      imageSrc: blog3,
      description:
        "Join us on September 21st, 2024, as we celebrate the legacy of Dr. Kwame Nkrumah, a pioneer of Pan-Africanism and the first President of Ghana...",
      author: "Event",
    },
    {
      imageSrc: blog1,
      description:
        "Join us at the Castle of Good Hope, Cape Town, on September 23rd-24th, 2024, for the launch of One Map Africa's Fashion Project...",
      author: "John Doe",
    },
    {
      imageSrc: blog2,
      description:
        "A virtual conference in Commemoration of the legacy of Dr. Kwame Nkrumah, a pioneering figure in Pan-Africanism and a key architect in the movement toward African unity...",
      author: "Mark Dove",
    },
    {
      imageSrc: blog3,
      description:
        "Join us on September 21st, 2024, as we celebrate the legacy of Dr. Kwame Nkrumah, a pioneer of Pan-Africanism and the first President of Ghana...",
      author: "Event",
    },
    {
      imageSrc: blog1,
      description:
        "Join us at the Castle of Good Hope, Cape Town, on September 23rd-24th, 2024, for the launch of One Map Africa's Fashion Project...",
      author: "John Doe",
    },
    {
      imageSrc: blog2,
      description:
        "A virtual conference in Commemoration of the legacy of Dr. Kwame Nkrumah, a pioneering figure in Pan-Africanism and a key architect in the movement toward African unity...",
      author: "Mark Dove",
    },
    {
      imageSrc: blog3,
      description:
        "Join us on September 21st, 2024, as we celebrate the legacy of Dr. Kwame Nkrumah, a pioneer of Pan-Africanism and the first President of Ghana...",
      author: "Event",
    },
  ];
  return (
    <section
      key={slideInRef}
      className="px-10  flex md:justify-center bg-[#F6F4F4] w-full"
    >
      <div className="container m-auto">
        <div className="text-left my-10">
          <h1 className="text-[54px] mb-4 font-[600] capitalize">
            Testimonies
          </h1>
          <p className="capitalize">What people says about us</p>
        </div>
        <div className="w-full px-10 flex items-center">
          <Swiper
            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y, ImLoop2]}
            spaceBetween={10}
            loop={true}
            autoplay={{ delay: 2800, disableOnInteraction: false }}
            breakpoints={{
              // Configure different breakpoints
              500: {
                slidesPerView: 1, // 1 slide on small screens
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2, // 2 slides on medium screens
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3, // 3 slides on large screens
                spaceBetween: 50,
              },
            }}
            className=""
          >
            {blogData.map(({ imageSrc, description, author }, index) => (
              <SwiperSlide key={index}>
                <div key={index} className="w-full md:w-[380px] cursor-pointer">
                  <Image
                    src={imageSrc}
                    alt={"title"}
                    height={500}
                    width={"100%"}
                    className="w-full h-auto"
                  />
                  <div className="p-8 flex flex-col gap-5">
                    <p className="text-[rgba(0,0,0,0.7)] text-sm text-center">
                      {description}
                    </p>
                    <div className="text-black text-sm font-semibold flex gap-2 justify-center items-center">
                      <p className="bg-black w-[30px] h-[2px]"></p> {author}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonies;
