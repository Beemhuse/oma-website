import Image from 'next/image';
import React from 'react';

export default function BlogCard({ imageSrc, title, description, author, date }) {
  return (
    <article className="xl:w-[380px] w-full cursor-pointer">
      <Image
        src={imageSrc}
        alt={title}
        height={500}
        width={500}
        className="w-full h-auto"
      />
      <div className="p-8">
        <h2 className="font-[600] mb-2 text-[18px]">{title}</h2>
        <p className="text-[#AAAAAA] text-[16px]">{description}</p>

        <hr className="border-[#AAAAAA] my-4 w-full" />
        <p className="text-[#AAAAAA]">
          BY {author} | {date}
        </p>
      </div>
    </article>
  );
}
