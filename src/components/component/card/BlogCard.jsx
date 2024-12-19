'use client'
import { formatDate } from '@/utils/formatDate';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';


const extractText = (content) => {
  const textContent = content
    .map(block => block.children?.map(child => child.text).join(" ") || "")
    .join(" ");
  return textContent.slice(0, 100) + (textContent.length > 60 ? "..." : "");
};

export default function BlogCard({ imageSrc,slug, title, description,  author, date }) {
  const {push} = useRouter()
  return (

    <article onClick={()=> push(`blog/${slug.current}`)}  className="xl:w-[380px] w-full cursor-pointer">
      <Image
        src={imageSrc}
        alt={title}
        height={400}
        width={400}
        className="w-full h-auto object-cover"
      />
      <div className="p-8">
        <h2 className="font-[600] mb-2 text-[18px]">{title}</h2>
<div>{extractText(description)}</div>
        <hr className="border-[#AAAAAA] my-4 w-full" />
        <p className="text-[#AAAAAA]">
          BY {author} |  {formatDate(date)}
        </p>
      </div>
    </article>
  );
}
