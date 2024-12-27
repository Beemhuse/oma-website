import useSlideInAnimation from "@/hooks/slideAnimation";
import anime from "animejs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function WhatWeDo() {
  const {push} = useRouter()
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
    <div className="">
      <div className="bg-white text-black py-16  ">
        <div className=" flex flex-col  lg:flex-row-reverse justify-center items-center">
          {/* Text Content */}
          <div ref={leftRef} className=" lg:w-1/3 w-full mb-8 lg:mb-0">
            <div className="text-black text-sm uppercase gap-10 font-semibold flex  mb-5 justify-left items-center transform ">
              <div className="uppercase"> What We Do</div>{" "}
              <p className="bg-black w-[50px]  h-[2px]"></p>
            </div>
            <h3 className="text-5xl font-semibold text-black mb-6">
              Our Mission
            </h3>

            <p className="text-black/70 mb-6">
              To see a united Africa that champions socio-economic development
              and sustainable growth. We are dedicated to empowering communities
              and fostering long-term prosperity through collaboration and
              strategic initiatives
            </p>
            <button onClick={()=> push ('/donations')} className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700">
              Donate
            </button>
          </div>
          <div
            ref={rightRef}
            className="lg:w-1/2 justify-center w-full flex m-auto gap-3 items-center flex-wrap flex-grow"
          >
            <div
              className="relative xl:w-2/6 w-1/3 grow-1"
              onMouseEnter={(e) =>
                handleMouseEnter(e.currentTarget.querySelector("img"))
              }
              onMouseLeave={(e) =>
                handleMouseLeave(e.currentTarget.querySelector("img"))
              }
            >
              <Image
                src={"/m1.svg"}
                alt="Donation Box"
                width={500}
                height={500}
                className="w-full"
              />
            </div>

            <div>
              {/* Second Image */}
              <div
                className="relative grow-1"
                onMouseEnter={(e) =>
                  handleMouseEnter(e.currentTarget.querySelector("img"))
                }
                onMouseLeave={(e) =>
                  handleMouseLeave(e.currentTarget.querySelector("img"))
                }
              >
                <Image
                  src={"/m2.svg"}
                  alt="Donation Box"
                  width={500}
                  height={500}
                  className="shadow-lg w-2/3 "
                />
              </div>

              {/* Third Image */}
              <div
                className="relative mt-4"
                onMouseEnter={(e) =>
                  handleMouseEnter(e.currentTarget.querySelector("img"))
                }
                onMouseLeave={(e) =>
                  handleMouseLeave(e.currentTarget.querySelector("img"))
                }
              >
                <Image
                  src={"/m3.svg"}
                  alt="Donation Box"
                  width={500}
                  height={500}
                  className="w-2/3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
