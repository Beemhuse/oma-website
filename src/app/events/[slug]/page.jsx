import React from "react";
import Image from "next/image";
import Link from "next/link";
import { client, urlFor } from "@/sanity/client";
import DisplayFormattedArticle from "@/components/component/card/DisplayFormattedArticle";
import { FaRegCalendarAlt } from "react-icons/fa";
import { formatDate } from "@/utils/formatDate";
import { EventLocation } from "@/components/component/card/EventCard";
import { isEventDateValid } from "@/lib/isDateValid";

export const metadata = {
  title: "Events | One Map Africa",
  description:
    " We aim to empower communities, drive sustainable growth, contribute to the long-term prosperity of the continent.",
};
// Utility function to check if the event date is in the future

export default async function Page({ params }) {
  const { slug } = params;

  const event = await client.fetch(
    `*[_type == "event" && slug.current == $slug][0]{
        title,
        "imageSrc": imageUrl,
        "date": date,
        location,
        article,
        eventCategory,
        registrationLink
    }`,
    { slug }
  );
  return (
    <div className="min-h-screen ">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:col-span-3 xl:w-2/3 m-auto w-full col-span-1 flex-col justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
          >
            {/* <ArrowLeft className="w-4 h-4 mr-2" /> */}
            Back to Events
          </Link>

          <ul className="flex gap-3 items-center mt-auto justify-end m-2">
            {event?.eventCategory?.map((category, index) => (
              <li
                key={index}
                className="text-gray-500 text-xs p-2 rounded-xl bg-[#F2F8F7]"
              >
                {category}
              </li>
            ))}
          </ul>
          <h2 className="text-3xl font-bold mt-3">{event?.title}</h2>
          <div className="flex mt-3 items-center">
            <div className="flex items-center gap-3">
              <EventLocation
                location={event?.location}
                isOnline={event?.registrationLink ? true : false}
              />{" "}
            </div>
            <p className="flex items-center gap-2 ml-4">
              {" "}
              <FaRegCalendarAlt /> {formatDate(event?.date)}
            </p>
          </div>
          <div className="flex justify-center mt-5">
            <Image
              src={urlFor(event?.imageSrc)}
              alt="event image"
              width={500}
              height={500}
              className="object-cover  w-full aspect-auto"
            />
          </div>
          <article className=" m-auto">
            <DisplayFormattedArticle description={event?.article} />
          </article>
          {event?.registrationLink && isEventDateValid(event?.date) ? (
            <Link
              href={event?.registrationLink}
              target="_blank"
              className="bg-blue-600 mt-8 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Register for Event
            </Link>
          ) : (
            <p className="mt-8 text-red-600 font-semibold">
              This event has ended.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
