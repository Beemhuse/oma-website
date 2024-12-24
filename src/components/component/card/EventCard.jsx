import React from 'react';
import Image from 'next/image';


const EventCard = ({ title, date, location, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">{date}</p>
        <p className="text-gray-500">{location}</p>
      </div>
    </div>
  );
};

export default EventCard;

