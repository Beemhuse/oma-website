"use client";
import React, { useEffect, useState } from "react";
// import CircularGallery from "../component/circular-gallery";
import Particles from "../component/particles";
import { client } from "@/sanity/client";
import Link from "next/link";
// import InfiniteScroll from "../component/infinite-scroll";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export default function BlackHistory() {
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "gallery"][0]{
              items[]{
                "imageUrl": image.asset->url,
                text
              }
            }`
      )
      .then((data) => {
        setGalleryItems(data?.items || []);
      })
      .catch(console.error);
  }, []);
  return (
    <div>
      <section className="relative flex flex-col xl:flex-row justify-center py-16 px-4 h-full sm:px-6 lg:px-8 bg-gradient-to-r from-black to-[#FFD700] text-white overflow-hidden">
        {/* Particles as background */}
        <div className="absolute inset-0 z-0">
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-yellow-300 text-sm font-semibold flex gap-2 mb-2 items-center">
            <div className="bg-yellow-300 w-[50px] h-[2px]"></div>
            <span>Upcoming Event</span>
          </div>
          <h2 className="xl:text-6xl text-4xl font-bold mb-4">Black History Month 2025</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-6">
                Join us in celebrating the rich cultural heritage and future of
                Africa at Black History Month 2025. This event brings together
                innovators, artists, and leaders from across the continent to
                showcase the vibrant spirit and potential of African nations.
              </p>
              <Link
                href={
                  "https://us06web.zoom.us/meeting/register/3wsMRXDBTsGDw6OpiI-t7g"
                }
                target="_blank"
                className="bg-yellow-400 text-black p-4 rounded-md hover:bg-yellow-300"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
            <div style={{ height: "500px", position: "relative" }} className="mt-10 xl:w-2/5 w-full ">
              {/* <CircularGallery
                bend={3}
                textColor="#ffffff"
                borderRadius={0.05}
                images={galleryItems}
              />
              <div style={{height: '500px', position: 'relative'}}> */}
              {/* <InfiniteScroll
                items={galleryItems}
                isTilted={false}
                tiltDirection="left"
                autoplay={true}
                autoplaySpeed={0.5}
                autoplayDirection="down"
                pauseOnHover={true}
              /> */}

<Swiper
      modules={[Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      className="w-full xl:h-[500px]"
    >
      {galleryItems.map((image, index) => (
        <SwiperSlide key={index} className="flex justify-center items-center">
          <Image
            src={image.imageUrl}
            height={500}
            width={500}
            alt=""
            className="h-full w-auto object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
            </div>
      </section>
    </div>
  );
}
