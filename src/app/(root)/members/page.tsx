"use client";

import React, { useState, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import MaxWidthWrapper from "@/hooks/MaxWidthWrapper";
import { MemberCategoryNavigation } from "@/app/(root)/members/MemberCategoryNavigation";
import { OrganizerCard } from "@/app/(root)/members/OrganizerCard";
import { NestedMemberCategory } from "@/app/(root)/members/NestedMemberCategory";
import { memberCategories } from "@/data/members";
import { animations } from "@/utils/member-animations";

// Get the organizer from Core Team
const organizer = memberCategories["Core Team"].find(
  (member) => member.isOrganizer
);

// Reorganize categories without the organizer
const reorganizedCategories = {
  "Tech Members": [
    {
      category: "Web Developers",
      members: memberCategories["Tech Members"][0].members,
    },
    {
      category: "App Developers",
      members: memberCategories["Tech Members"][1].members,
    },
    {
      category: "ML/Ops",
      members: memberCategories["Tech Members"][2].members,
    },
  ],
  "Media Team": [
    {
      category: "Graphics Designers",
      members: memberCategories["Media Team"][0].members,
    },
    {
      category: "Video Editors",
      members: memberCategories["Media Team"][1].members,
    },
    {
      category: "Content Writers",
      members: memberCategories["Media Team"][2].members,
    },
    {
      category: "Photographers",
      members: memberCategories["Media Team"][3].members,
    },
  ],
  "PR Team": memberCategories["PR Team"],
  "Core Team": memberCategories["Core Team"].filter(
    (member) => !member.isOrganizer
  ),
};

const MembersPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(
    Object.keys(reorganizedCategories)[0]
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (containerRef.current) {
      animations.animateCategoryNavigation(containerRef);
    }

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Calculate background element positions based on mouse movement
  const calculateTransform = (factorX: number, factorY: number) => {
    return `translate(${mousePosition.x * factorX}px, ${
      mousePosition.y * factorY
    }px)`;
  };

  return (
    <div className="relative min-h-screen bg-white dark:bg-black transition-colors duration-300">
      {/* Background container */}
      <div className="fixed inset-0 overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 dark:bg-grid-small-white/[0.1] bg-grid-small-black/[0.05]" />
          <div className="absolute inset-0 dark:bg-dot-white/[0.1] bg-dot-black/[0.05]" />
        </div>

        {/* Decorative Elements for team/members theme */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Gradient orbs with team-oriented colors */}
          <div
            className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-300 to-blue-500/[0.02] rounded-full blur-xl"
            style={{ transform: calculateTransform(0.02, 0.03) }}
          />
          <div
            className="absolute top-40 right-10 w-40 h-40 bg-gradient-to-r from-indigo-600 to-pink-500/[0.05] rounded-full blur-xl"
            style={{ transform: calculateTransform(-0.02, -0.01) }}
          />
          <div
            className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-r from-blue-500 to-green-500/[0.03] rounded-full blur-xl"
            style={{ transform: calculateTransform(0.01, -0.02) }}
          />
          <div
            className="absolute bottom-40 right-20 w-36 h-36 bg-gradient-to-r from-orange-500 to-red-500/[0.03] rounded-full blur-xl"
            style={{ transform: calculateTransform(-0.03, 0.02) }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative isolate">
        <Navbar />
        <MaxWidthWrapper>
          <div className="py-16">
            <h1 className="text-4xl sm:text-5xl text-center mb-8 font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-green-500">
              Our Amazing Team
            </h1>

            <div className="text-center max-w-4xl mx-auto mb-12 px-4">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Every member of the society has always been passionate and
                hard-working towards their goal, creating a positive work
                environment. Their support and will to help each other out in
                every way possible is what makes GDG On Campus- Haldia Institute
                of Technology
              </p>
            </div>

            {/* Organizer Card */}
            {organizer && <OrganizerCard member={organizer} />}

            {/* Category Navigation */}
            <MemberCategoryNavigation
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              containerRef={containerRef}
            />

            {/* Category Content */}
            <NestedMemberCategory
              categoryName={activeCategory}
              categoryData={
                reorganizedCategories[
                  activeCategory as keyof typeof reorganizedCategories
                ]
              }
            />
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  );
};

export default MembersPage;
