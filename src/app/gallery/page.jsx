"use client";

import React, { useEffect, useState } from "react";
import gal1 from "../../../public/landingPage/gal1.png";
import gal2 from "../../../public/landingPage/gal2.png";
import gal3 from "../../../public/landingPage/gal3.png";
import gal4 from "../../../public/landingPage/gal4.png";
import gal5 from "../../../public/landingPage/gal5.png";
import gal6 from "../../../public/landingPage/gal6.png";
import gal7 from "../../../public/landingPage/gal7.png";
import gal8 from "../../../public/landingPage/gal8.png";
import Image from "next/image";

export default function Page() {
  const [num, setNum] = useState();
  useEffect(() => {
    setNum(4);
  }, []);

  const images = [
    gal1,
    gal2,
    gal3,
    gal4,
    gal5,
    gal6,
    gal7,
    gal8,
    gal1,
    gal2,
    gal3,
    gal4,
    gal5,
    gal6,
    gal7,
    gal8,
    gal1,
    gal2,
    gal3,
    gal4,
    gal5,
    gal6,
    gal7,
    gal8,
    gal1,
    gal2,
    gal3,
    gal4,
    gal5,
    gal6,
  ];

  let starter = 8;
  const updateHandler = () => {
    if (starter + num >= images.length - 1) {
      return;
    } else {
      setNum(() => num + 8);
    }
  };
  return (
    <>
      <section
        className="relative py-20 px-4 sm:px-6 lg:px-8  text-white"
        style={{
          backgroundImage: "url(/bg-layout.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-center xl:text-4xl text-xl">
          Gallery
        </h1>
      </section>
      <div className="bg-white p-8">
        <div className="grid  gridBox  gap-x-2 md:gap-4">
          <div className="h-[250px] grid2 px-24">
            <h1 className="text-5xl leading-[48px] tracking-[2] font-bold mb-2">
              ONE MAP <br /> GALLERY
            </h1>
            <p className="text-gray-500">Press Coverage / Event Pictures</p>
          </div>
          <div className=" grid3">
            <Image
              src={images[0]}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className=" grid4">
            <Image
              src={images[1]}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-h-[250px] grid5">
            <Image
              src={images[2]}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-h-[250px] grid6">
            <Image
              src={images[3]}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-h-[250px] grid7">
            <Image
              src={images[4]}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-h-[250px] grid8">
            <Image
              src={images[5]}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-h-[250px] grid9">
            <Image
              src={images[6]}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-h-[250px] grid10">
            <Image
              src={images[7]}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="min-h-[250px] grid11 gap-x-2 col-span-4 grid grid-cols-4">
            {images?.slice(starter, starter + num).map((data, item) => (
              <div
                key={item}
                className="border-2 border-green- h-[250px] grid12 "
                onClick={() => console.log("this is item", item + 1)}
              >
                <Image
                  src={data}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Load More Button */}
        <div className="text-center mt-6">
          <button
            className="px-6 py-2 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-700"
            onClick={updateHandler}
          >
            Load more...
          </button>
        </div>
      </div>
    </>
  );
}
