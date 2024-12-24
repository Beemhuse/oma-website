import React from 'react';
import EventCard from '../component/card/EventCard';

const Events = () => {
  const events = [
    {
      title: 'Annual GIS Conference',
      date: 'September 15-17, 2023',
      location: 'Nairobi, Kenya',
      imageUrl: '/images/events/gis-conference.jpg',
    },
    {
      title: 'Mapping Workshop',
      date: 'October 5, 2023',
      location: 'Lagos, Nigeria',
      imageUrl: '/images/events/mapping-workshop.jpg',
    },
    {
      title: 'Data Collection Seminar',
      date: 'November 20, 2023',
      location: 'Cape Town, South Africa',
      imageUrl: '/images/events/data-collection.jpg',
    },
    // Add more events as needed
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
