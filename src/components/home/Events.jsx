"use client";
import React from "react";
// import EventCard from "../component/card/EventCard";
import useSlideIn from "@/hooks/useSlideIn";
import useSWR from "swr";
import { eventsQuery } from "@/sanity/queries";
import { EventCard } from "../component/card/EventCard";

const Events = () => {
const {data: eventData} = useSWR(eventsQuery)

  const slideInRef = useSlideIn();
  return (
    <section className="py-16 bg-gray-100  ">
      <div className="container mx-auto xl:px-10 px-4">
        <h2 className="text-[32px]  font-[600] dark:text-black mb-8">
          Upcoming Events
        </h2>
        <p className="max-w-xl mb-10  ">Stay connected with the latest upcoming events organized by One Map Africa. From workshops to sustainable development conferences, our events bring together leaders, experts, and communities to collaborate on addressing Africa’s pressing challenges. Explore exciting opportunities to learn, network, and contribute to impactful change.</p>
        <div
          ref={slideInRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {eventData?.slice(0, 4)?.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
