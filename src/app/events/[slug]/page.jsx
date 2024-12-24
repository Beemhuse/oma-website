import React from "react";
import Image from "next/image";
import Link from "next/link";
// import { ArrowLeft, Calendar, MapPin, Users } from 'lucide-react'

// This would typically come from a database or API
const getEventDetails = (id) => ({
  id,
  title: "Annual GIS Conference",
  date: "September 15-17, 2023",
  location: "Nairobi, Kenya",
  imageUrl: "/images/events/gis-conference.jpg",
  description:
    "Join us for the premier GIS event in Africa, featuring keynote speakers, workshops, and networking opportunities.",
  agenda: [
    { time: "09:00 AM", activity: "Opening Ceremony" },
    {
      time: "10:30 AM",
      activity: "Keynote Speech: The Future of GIS in Africa",
    },
    { time: "12:00 PM", activity: "Lunch Break" },
    {
      time: "01:30 PM",
      activity: "Workshop: Practical Applications of GIS in Urban Planning",
    },
    {
      time: "03:30 PM",
      activity: "Panel Discussion: Challenges and Opportunities in African GIS",
    },
    { time: "05:00 PM", activity: "Networking Reception" },
  ],
});

export default function EventDetails({ params }) {
  const event = getEventDetails(params.slug);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <Link
          href="/events"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          {/* <ArrowLeft className="w-4 h-4 mr-2" /> */}
          Back to Events
        </Link>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="relative h-64 sm:h-80">
            <Image
              src={event.imageUrl}
              alt={event.title}
              layout="fill"
              objectFit="cover"
              className="w-full h-full object-center"
            />
          </div>

          <div className="p-6 sm:p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {event.title}
            </h1>

            <div className="flex flex-wrap items-center text-sm text-gray-600 mb-6">
              <div className="flex items-center mr-6 mb-2">
                {/* <Calendar className="w-4 h-4 mr-2" /> */}
                {event.date}
              </div>
              <div className="flex items-center mr-6 mb-2">
                {/* <MapPin className="w-4 h-4 mr-2" /> */}
                {event.location}
              </div>
              <div className="flex items-center mb-2">
                {/* <Users className="w-4 h-4 mr-2" /> */}
                250 Attendees
              </div>
            </div>

            <p className="text-gray-700 mb-8">{event.description}</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Event Agenda
            </h2>
            <div className="space-y-4">
              {event.agenda.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-20 text-sm font-medium text-gray-600">
                    {item.time}
                  </div>
                  <div className="ml-4 text-gray-700">{item.activity}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
            Register for Event
          </button>
        </div>
      </div>
    </div>
  );
}
