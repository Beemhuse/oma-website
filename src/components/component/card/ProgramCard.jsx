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
    onMouseEnter={(e) =>
      mouseEnter(e.currentTarget.querySelector("img"))
    }
    onMouseLeave={(e) =>
      mouseLeave(e.currentTarget.querySelector("img"))
    }
      className=""
    >
      <Image
        src={src}
        height={500}
        width={500}
        className="w-full h-2/3 object-cover aspect-auto"
        alt=""
      />
      <h3 className="text-[20px] font-[500] my-3">{title}</h3>
      <p className="text-[18px] text-[#525560]">{description} </p>
    </div>
  );
}
