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
  author,
  date,
}) {
  const { push } = useRouter();
  return (
    <article
      onClick={() => push(`blog/${slug.current}`)}
      className="xl:w-[380px] h-auto w-full flex flex-col cursor-pointer border border-transparent hover:border-green-600 hover:shadow-xl hover:rounded-2xl transition-all duration-300"
    >
      <Image
        src={imageSrc}
        alt={title}
        height={200}
        width={300}
        className="w-full aspect-square rounded-tl-2xl rounded-tr-2xl object-cover"
      />
      <div className="p-4 flex flex-col justify-between h-full">
        <h2 className="font-[600] mb-2 text-[18px]">
          {title.slice(0, 30) + (title.length > 30 ? "..." : " ")}
        </h2>
        <div>{extractText(description)}</div>
        <hr className="border-[#AAAAAA] my-4 w-full" />
        <p className="text-[#AAAAAA] mt-auto">
          BY {author} | {formatDate(date)}
        </p>
      </div>
    </article>
  );
}
