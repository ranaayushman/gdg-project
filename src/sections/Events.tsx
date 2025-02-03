import EventCard from "@/components/EventCards";
import React from "react";
import { EventType } from "@/app/(root)/events/types";

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
    {
      id: "5",
      imageUrl: "/img/image1.png",
      date: "2024-11-14",
      title: "Cloud Computing Workshop",
      location: "HIT Labs - Haldia, India",
      description: "Hands-on experience with cloud technologies.",
      registrationLink: "https://example.com/register",
      category: "upcoming"
    },
    {
      id: "6",
      imageUrl: "/img/image1.png",
      date: "2024-11-15",
      title: "Cybersecurity Seminar",
      location: "HIT Auditorium - Haldia, India",
      description: "Learn about the latest trends in cybersecurity.",
      registrationLink: "https://example.com/register",
      category: "upcoming"
    },
  ];

  return (
    <section className="bg-white dark:bg-darkgray min-h-screen bg-[url('/img/events.png')] bg-no-repeat bg-cover bg-center py-10 flex flex-col items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-10">
          Upcoming Events
        </h2>

        {/* Event Cards Grid with fixed layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} category="upcoming" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
