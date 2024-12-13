"use client";
import React from "react";
import Button from "../reusables/Button";
import ProgramCard from "../component/card/ProgramCard";
import Image from "next/image";
import useSlideInAnimation from "@/hooks/slideAnimation";
import WhatWeDo from "./WhatWeDo";
import anime from "animejs";

const programs = [
  {
    src: "/energy.png",
    title: "Agriculture",
    description:
      "To enhance agricultural productivity and sustainability, ensuring food security and economic growth.",
  },
  {
    src: "/healthcare.png",
    title: "Healthcare",
    description:
      "Improving access to healthcare services and promoting public health initiatives for better community wellbeing.",
  },
  {
    src: "/education.png",
    title: "Education",
    description:
      "Providing quality education and learning resources to empower individuals for a brighter future.",
  },
];
export default function AboutPage() {
  const leftRef = useSlideInAnimation("left", 1000);
  const rightRef = useSlideInAnimation("right", 1000, 200);
  const handleMouseEnter = (target) => {
    anime({
      targets: target,
      scale: 1.1,
      duration: 500,
      easing: "easeOutQuad",
    });
  };

  const handleMouseLeave = (target) => {
    anime({
      targets: target,
      scale: 1,
      duration: 500,
      easing: "easeOutQuad",
    });
  };
  return (
    <section className="py-10 w-[70%] mx-auto">
      <div ref={leftRef} className="flex justify-between">
        <div className="xl:w-[545px] w-full flex flex-col items-start gap-5">
          <h1 className="text-[64px]">Together We Will Re-Unite Africa</h1>
          <p className="text-[18px] xl:w-[505px]">
            We aim to empower communities, drive sustainable growth, and
            contribute to the long-term prosperity of the continent.
          </p>
          <Button
            bgColor="bg-[#DB101C]"
            hoverColor="bg-[#DB101C]"
            rounded={false}
            label={"Join Now"}
          />
        </div>

        <Image src={"/unite.png"} alt="united World" height={500} width={500} />
      </div>

      <div className="mt-[70px]">
        <div className="text-center my-5">
          <h2 className="text-[45px] font-[500]">Our Programs</h2>
          <p className="text-[18px] text-[#525560]">
            Some of our Project Areas
          </p>
        </div>
        <div className=" m-auto ">
          <div className="justify-center gap-6 flex">
            {programs.map((program, index) => (
              <ProgramCard
                key={index}
                src={program.src}
                title={program.title}
                description={program.description}
              />
            ))}
          </div>
          <div className="mt-4">
            <Button
              bgColor="bg-[#DB101C]"
              hoverColor="bg-[#DB101C]"
              href={"/donate"}
              label={"Donate Now"}
            />
          </div>
        </div>
      </div>

      <div className="">
        <div className="bg-white text-black py-16  ">
          <div className=" flex flex-col justify-between lg:flex-row items-center">
            {/* Text Content */}
            <div className=" lg:w-1/3 mb-8 lg:mb-0">
              <div className="text-black text-sm uppercase gap-10 font-semibold flex  mb-5 justify-left items-center transform ">
                <div className=""> About us</div>{" "}
                <p className="bg-black w-[50px]  h-[2px]"></p>
              </div>
              <h3 className="text-5xl font-semibold text-black mb-6">
                Our Mission
              </h3>

              <p className="text-black/70 mb-6">
                One Map Africa is dedicated to promoting dialogue,
                collaboration, and integration among African nations, to create
                a unified continent with a common purpose. We facilitate open
                communication and encourage cooperative efforts to
                achieve this vision.
              </p>
              <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700">
                Donate
              </button>
            </div>

            {/* Image Content */}
            <div
              ref={rightRef}
              className="lg:w-1/2"
              onMouseEnter={(e) =>
                handleMouseEnter(e.currentTarget.querySelector("img"))
              }
              onMouseLeave={(e) =>
                handleMouseLeave(e.currentTarget.querySelector("img"))
              }
            >
              <Image
                src={"/agric-1.png"}
                alt="Donation Box"
                width={500}
                height={500}
                className="rounded-tr-[80px] rounded-bl-[80px] shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <WhatWeDo />
    </section>
  );
}
