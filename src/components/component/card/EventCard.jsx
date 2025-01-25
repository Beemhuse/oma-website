'use client'
import React from "react";
import Image from "next/image";
import { formatDate } from "@/utils/formatDate";
import { FaRegCalendarAlt } from "react-icons/fa";

import { FaCloud } from "react-icons/fa";
import { LiaMapMarkerSolid } from "react-icons/lia";
import Link from "next/link";
import { urlFor } from "@/sanity/client";
import { useRouter } from "next/navigation";


export const EventLocation = ({ location, isOnline }) => {
  return (
    <p className="text-gray-500 flex items-center">
      {isOnline ? (
        <FaCloud className="text-blue-500 mr-2" />
      ) : (
        <LiaMapMarkerSolid className="text-green-500 mr-2" />
      )}
      {location}
    </p>
  );
};

const EventCard = ({
  title,
  slug,
  date,
  location,
  imageSrc,
  registrationLink,
  eventCategory,
}) => {
      const { push } = useRouter();
    
  return (
    <div
    onClick={() => push(`events/${slug.current}`)}
    className="bg-white  cursor-pointer w-full flex flex-col rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="relative ">
        <Image src={urlFor(imageSrc)} alt={title} height={200} width={500} objectFit="cover" />
      </div>
      <div className="p-4 mt-4">
        <h3 className="text-[18px] dark:text-black font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-2 flex items-center gap-2">
          <FaRegCalendarAlt /> {formatDate(date)}
        </p>
        <EventLocation
          location={location}
          isOnline={registrationLink ? true : false}
        />
        <div className="mt-5">

        {registrationLink && (
          <Link
            href={registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className=" underline text-blue-500"
          >
            Register Here
          </Link>
        )}
        </div>
      </div>
      <ul className="flex gap-3 items-center mt-auto justify-end m-2">
        {eventCategory?.map((category, index) => (
          <li key={index} className="text-gray-500 text-xs p-2 rounded-xl bg-[#F2F8F7]">
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventCard;
