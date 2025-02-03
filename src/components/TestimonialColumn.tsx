"use client";

import React from "react";
import type { Testimonial } from "@/data/testimonials";
import { TestimonialCard } from "./TestimonialCard";

interface TestimonialColumnProps {
  testimonials: Testimonial[];
  columnIndex: number;
  isMobile: boolean;
}

export const TestimonialColumn: React.FC<TestimonialColumnProps> = ({
  testimonials,
  columnIndex,
  isMobile,
}) => {
  // Duplicate the testimonials twice to ensure seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  // Determine animation speed based on column
  const speed = isMobile
    ? "35s"
    : columnIndex === 0
    ? "30s"
    : columnIndex === 1
    ? "40s"
    : "35s";

  // Determine scroll direction
  const direction = columnIndex === 1 ? "upwards" : "downwards";

  return (
    <div className="overflow-hidden relative h-screen">
      <style jsx>{`
        @keyframes upwards {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        @keyframes downwards {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }

        .scroll {
          animation: ${direction} ${speed} linear infinite;
        }
      `}</style>

      <div
        className={`
          flex 
          flex-col 
          space-y-4 
          md:space-y-6
          scroll
          ${columnIndex > 0 ? "hidden md:flex" : "flex"}
        `}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.id}-${index}`}
            testimonial={testimonial}
          />
        ))}
      </div>
    </div>
  );
};
