"use client";
import React, { useEffect, useState } from "react";
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
import { fetchTrustedClients } from "@/services/apiService";
import { urlFor } from "@/sanity/client";

const TrustedClients = ({
  smallScreen = 2,
  mediumScreen = 3,
  largeScreen = 5,
}) => {
  const [trustedClients, setTrustedClients] = useState([]);
useEffect(()=>{
  async function getTrustedClients(){
    const data = await fetchTrustedClients();
    setTrustedClients(data);
  }
  getTrustedClients()
})
  return (
    <div className="flex flex-col gap-5 items-center whitespace-nowrap  py-10">
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
          {trustedClients?.map((client, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col w-fit items-center justify-center gap-1">
                <Image
                  alt={`Trusted Client ${client?.name}`}
                  src={urlFor(client?.imageSrc)}
                  height={120}
                  width={150}
                  className="object-cover bg-blend-multiply mix-blend-multiply"
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
