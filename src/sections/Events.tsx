import EventCard from "@/components/EventCards";
import React from "react";
import { EventType } from "@/app/(root)/events/types";
import MaxWidthWrapper from "@/hooks/MaxWidthWrapper";

const Events: React.FC = () => {
  const events: EventType[] = [
    {
      id: "1",
      imageUrl: "/img/image1.png",
      date: "2024-11-10",
      title: "UI/UX Bootcamp Day 1",
      location: "GDG on Campus Haldia Institute of Technology - Haldia, India",
      description: "Join us for an interactive UI/UX bootcamp covering design principles.",
      registrationLink: "https://example.com/register",
      category: "upcoming"
    },
    {
      id: "2",
      imageUrl: "/img/image1.png",
      date: "2024-11-11",
      title: "Tech Talks 2024",
      location: "HIT Auditorium - Haldia, India",
      description: "An insightful conference featuring top tech leaders.",
      registrationLink: "https://example.com/register",
      category: "upcoming"
    },
    {
      id: "3",
      imageUrl: "/img/image1.png",
      date: "2024-11-12",
      title: "Hack the Future",
      location: "HIT Campus - Haldia, India",
      description: "A thrilling hackathon to innovate and create solutions.",
      registrationLink: "https://example.com/register",
      category: "upcoming"
    },
    {
      id: "4",
      imageUrl: "/img/image1.png",
      date: "2024-11-13",
      title: "AI Summit 2024",
      location: "Tech Park - Haldia, India",
      description: "Exploring the future of artificial intelligence.",
      registrationLink: "https://example.com/register",
      category: "upcoming"
    },
    
  ];

  return (
    <MaxWidthWrapper>
    <section className="bg-white dark:bg-darkgray  py-6 flex flex-col items-center">
      <div className="container mx-auto px-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-6">
          Upcoming Events
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4">
          {events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              category="upcoming"
              variant="compact"
              className="w-64"
            />
          ))}
        </div>
      </div>
    </section>
    </MaxWidthWrapper>
  );
};

export default Events;