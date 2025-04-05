"use client";
import { useState } from "react";
import { Filter, Search } from "lucide-react";
import { EventsGallery } from "../component/event-gallery";
import { EventCard } from "../component/card/event-card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../component/ui/select";
import { Input } from "../component/ui/input";
import useSWR from "swr";
import { eventsQuery } from "@/sanity/queries";
import { useRouter } from "next/navigation";


export function Events() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const { data: events = [] } = useSWR(eventsQuery);
  const router = useRouter();

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description?.[0]?.children?.[0]?.text
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchesCategory =
      categoryFilter === "all" ||
      event.eventCategory?.some(
        (cat) => cat.toLowerCase() === categoryFilter.toLowerCase()
      );

    return matchesSearch && matchesCategory;
  });

  const handleEventClick = (slug) => {
    router.push(`/events/${slug.current}`);
  };

  return (
    <div className="container mx-auto py-8 md:py-12">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Our Events
        </h1>
        <div className="w-20 h-1 bg-gold-500 mb-6"></div>
        <p className="max-w-3xl text-muted-foreground">
          Discover our recent events and initiatives that are making a
          difference in communities around the world. Browse through our
          galleries to see the impact of our work.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search events..."
            className="pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="conference">Conference</SelectItem>
              <SelectItem value="workshop">Workshop</SelectItem>
              <SelectItem value="seminar">Seminar</SelectItem>
              <SelectItem value="webinar">Webinar</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {filteredEvents?.map((event) => (
          <EventCard
            key={event.slug.current}
            event={event}
            isSelected={event.slug.current === selectedEvent}
            onClick={() => setSelectedEvent(event.slug.current)}
            onViewDetails={() => handleEventClick(event.slug)}
          />
        ))}
      </div>

      {selectedEvent && (
        <div className="mt-8 pt-8 border-t border-gray-200">
          <EventsGallery
            event={events.find((e) => e.slug.current === selectedEvent)}
            onClose={() => setSelectedEvent(null)}
          />
        </div>
      )}
    </div>
  );
}
