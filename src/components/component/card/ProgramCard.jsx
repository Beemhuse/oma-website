import Image from "next/image";
import React from "react";

export default function ProgramCard() {
  return (
    <div className="">
      <Image
        src={"/energy.png"}
        height={500}
        width={500}
        className="w-full object-cover aspect-square"
        alt=""
      />
      <h3 className="text-[20px] font-[500] my-3">Agriculture</h3>
      <p className="text-[18px]">
        To enhance agricultural productivity and sustainability, ensuring food
        security and economic growth.
      </p>
    </div>
  );
}
