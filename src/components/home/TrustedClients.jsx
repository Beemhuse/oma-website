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
import { motion } from "motion/react";

const TrustedClients = ({
  smallScreen = 2,
  mediumScreen = 3,
  largeScreen = 5,
}) => {
  const [trustedClients, setTrustedClients] = useState([]);
  useEffect(() => {
    async function getTrustedClients() {
      const data = await fetchTrustedClients();
      setTrustedClients(data);
    }
    getTrustedClients();
  });
  const shuffledClients = [...trustedClients].sort(() => Math.random() - 0.5);

  return (
    <div className="flex flex-col gap-5 items-center whitespace-nowrap dark:bg-white container m-auto  py-10">
 

      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        className="flex flex-shrink-0"
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{ display: "flex" }} // Ensure container is wide enough
      >
        {trustedClients?.map((client, index) => (
          <Image
            alt={`Trusted Client ${client?.name}`}
            src={urlFor(client?.imageSrc)}
            height={120}
            width={150}
            key={index}
            className=" h-36 w-52 pr-20 aspect-square"
          />
        ))}
      </motion.div>
   
    </div>
  );
};

export default TrustedClients;
