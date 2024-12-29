"use client";
import React, { useEffect, useState } from "react";
import EventCard from "../component/card/EventCard";
import { fetchEvents } from "@/services/apiService";
import useSlideIn from "@/hooks/useSlideIn";

const Events = () => {
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const event = await fetchEvents();
        setEventData(event);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    };

    getEvents();
  }, []);
  const slideInRef = useSlideIn();
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto xl:px-0 px-4">
        <h2 className="text-[32px] font-[600]  text-start mb-8">
          Upcoming Events
        </h2>
        <div
          ref={slideInRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {eventData.slice(0, 4).map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
