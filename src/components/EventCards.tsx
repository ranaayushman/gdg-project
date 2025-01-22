"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { EventType, EventCategory } from "@/app/(root)/events/types";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

interface EventCardProps {
  event: EventType;
  category: EventCategory;
}

const EventCard: React.FC<EventCardProps> = ({ event, category }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Disable any transform animations from parent
    gsap.set(card, {
      clearProps: "transform",
    });

    // Simple hover animation
    const enterAnimation = {
      y: -8,
      duration: 0.3,
      ease: "power2.out",
      boxShadow: "0 20px 30px rgba(0,0,0,0.2)",
    };

    const leaveAnimation = {
      y: 0,
      duration: 0.3,
      ease: "power2.out",
      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
    };

    card.addEventListener("mouseenter", () => {
      gsap.to(card, enterAnimation);
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, leaveAnimation);
    });

    // Cleanup
    return () => {
      gsap.killTweensOf(card);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      style={{ transform: "translate3d(0, 0, 0)" }} // Force GPU acceleration
      className="relative 
        bg-white dark:bg-black 
        rounded-2xl 
        overflow-hidden 
        border border-gray-200 dark:border-gray-800
        shadow-lg hover:shadow-xl
        transition-shadow duration-300
        will-change-transform"
    >
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="w-full h-full object-cover brightness-100 dark:brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40"></div>

        {category === "past" && (
          <div
            className="absolute top-4 right-4 
            bg-red-500/80 
            backdrop-blur-sm 
            px-3 py-1 
            rounded-full 
            text-white 
            font-medium"
          >
            Completed
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          {event.title}
        </h3>

        <div className="space-y-2 text-gray-600 dark:text-gray-400">
          <div className="flex items-center">
            <Calendar className="mr-3 w-5 h-5 text-blue-500" />
            <span className="text-sm">
              {new Date(event.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <div className="flex items-center">
            <MapPin className="mr-3 w-5 h-5 text-green-500" />
            <span className="text-sm">{event.location}</span>
          </div>
        </div>

        <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-2">
          {event.description}
        </p>

        <div className="flex justify-between items-center">
          {category === "upcoming" && (
            <a
              href={event.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center 
                px-5 py-2.5 
                bg-blue-600 hover:bg-blue-700 
                text-white 
                rounded-full 
                transition-all duration-300 
                shadow-md hover:shadow-lg"
            >
              <span className="mr-2 text-sm">Register</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          )}

          <span className="text-xs text-gray-500 dark:text-gray-600">
            Event ID: {event.id}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
