"use client"
import React, { useEffect, useState } from "react";
import CircularGallery from "../component/circular-gallery";
import Button from "../reusables/Button";
import Particles from "../component/particles";
import { client } from "@/sanity/client";
import Link from "next/link";

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
      console.log(galleryItems)
  return (
    <div>
      <section className="relative py-16 px-4 h-full sm:px-6 lg:px-8 bg-gradient-to-r from-black to-[#FFD700] text-white overflow-hidden">
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
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-yellow-300 text-sm font-semibold flex gap-2 mb-2 items-center">
            <div className="bg-yellow-300 w-[50px] h-[2px]"></div>
            <span>Upcoming Event</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Black History Month 2025</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-6">
                Join us in celebrating the rich cultural heritage and future of
                Africa at Black History Month 2025. This event brings together
                innovators, artists, and leaders from across the continent to
                showcase the vibrant spirit and potential of African nations.
              </p>
              <Link href={"https://us06web.zoom.us/meeting/register/3wsMRXDBTsGDw6OpiI-t7g"} target="_blank" className="bg-yellow-400 text-black p-4 rounded-md hover:bg-yellow-300">
                Register
              </Link>
            </div>
            <div style={{ height: "500px", position: "relative" }}>
              <CircularGallery
                bend={3}
                textColor="#ffffff"
                borderRadius={0.05}
                images={galleryItems}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}