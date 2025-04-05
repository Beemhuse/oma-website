"use client";

import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import Button from "@/components/reusables/Button";
import { urlFor } from "@/sanity/client";
import { formatDate } from "@/utils/formatDate";

export function EventCard({ event, isSelected, onClick }) {
  return (
    <div
      className={cn(
        "group overflow-hidden rounded-lg border bg-card text-card-foreground shadow transition-all duration-300 hover:shadow-lg",
        isSelected && "ring-2 ring-green-600"
      )}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={urlFor(event?.imageSrc) || "/placeholder.svg"}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Badge className="absolute text-white p-2  top-1 capitalize right-3 bg-green-600 hover:bg-green-700">
          {event.eventCategory}
        </Badge>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 line-clamp-1">{event.title}</h3>
        <div className="flex items-center text-sm text-muted-foreground mb-1">
          <Calendar className="h-4 w-4 mr-1 text-green-600" />
          <span>{formatDate(event.date)}</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground mb-3">
          <MapPin className="h-4 w-4 mr-1 text-green-600" />
          <span>{event.location}</span>
        </div>
        {/* <p className="text-muted-foreground mb-4 line-clamp-3">{event.description}</p> */}
        <Button
          label={isSelected ? "Hide Gallery" : "View Gallery"}
          onClick={onClick}
          className="w-full bg-gold-500 hover:bg-gold-600 text-black"
        ></Button>
      </div>
    </div>
  );
}
