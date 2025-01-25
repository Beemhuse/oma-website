"use client";
import { formatDate } from "@/utils/formatDate";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const extractText = (content) => {
  const textContent = content
    .map((block) => block.children?.map((child) => child.text).join(" ") || "")
    .join(" ");
  return textContent.slice(0, 100) + (textContent.length > 50 ? "..." : "");
};

export default function BlogCard({
  imageSrc,
  slug,
  title,
  description,
  date,
  categories
}) {
  const { push } = useRouter();
  return (
    <article
      onClick={() => push(`blog/${slug?.current}`)}
      className="md:w-[340px] w-full h-fit flex flex-col cursor-pointer  transition-all duration-300"
    >
      <Image
        src={imageSrc}
        alt={title}
        height={100}
        width={300}
        style={{
          boxShadow: "0px 2px 50px 20px rgba(0, 0, 0, 0.2)",
        }}
        className="w-full h-56   aspect-square  object-cover"
      />
      <div className="p-8 flex flex-col flex-grow justify-between h-full">
        <h2 className="font-[600] font-poppins mb-2 text-[19px]">
          {title}
        </h2>
        <div className="text-[#AAAAAA] text-[15px] font-inter">{extractText(description)}</div>
        <div className="mt-auto">
        <hr className="border-[#AAAAAA] my-4 w-full" />
        <p className="text-[#0DA574] text-[15px] font-inter ">
          {categories} | {formatDate(date)}
        </p>
        </div>
      </div>
    </article>
  );
}
