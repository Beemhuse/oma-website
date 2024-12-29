import Image from "next/image";
import React from "react";

export default function ProgramCard({
  src,
  title,
  description,
  mouseEnter,
  mouseLeave,
}) {
  return (
    <div
      onMouseEnter={(e) => mouseEnter(e.currentTarget.querySelector("img"))}
      onMouseLeave={(e) => mouseLeave(e.currentTarget.querySelector("img"))}
      className=" max-w-[450px] m-auto"
    >
  <div className="relative w-full h-[300px] overflow-hidden">
  <Image
          src={src}
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
          alt=""
        />
      </div>
      <h3 className="text-[20px] capitalize font-inter  font-[500] my-3">
        {title}
      </h3>
      <p className="text-[18px] text-[#525560]">{description} </p>
    </div>
  );
}
