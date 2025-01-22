"use client";

import React, { useRef, useState } from "react";
import ImageFrame from "@/components/ImageFrame";
import ExpandedCard from "@/components/ExpandedCard";
import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "@/hooks/MaxWidthWrapper";
import Link from "next/link";
import Background from "@/components/ui/Background";

interface Member {
  role: string;
  name: string;
  borderColor: string;
  imageSrc: string;
  bio?: string;
  social?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

const Members: React.FC = () => {
  const membersContainerRef = useRef<HTMLDivElement>(null);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  // Member data array
  const members: Member[] = [
    {
      role: "WEB DEVELOPMENT LEAD",
      name: "Deepak Kumar",
      borderColor: "#79F77D",
      imageSrc: "/img/webdev.png",
      bio: "Web Development Lead with expertise in modern frontend frameworks and responsive design.",
      social: {
        github: "https://github.com/deepakkumar",
        linkedin: "https://linkedin.com/in/deepakkumar",
        twitter: "https://twitter.com/deepakkumar",
      },
    },
    {
      role: "GDSC LEAD",
      name: "Rishabh Kumar",
      borderColor: "#7E9EFF",
      imageSrc: "/img/lead.png",
      bio: "Google Developer Student Clubs Lead, passionate about building tech communities.",
      social: {
        github: "https://github.com/rishabhkumar",
        linkedin: "https://linkedin.com/in/rishabhkumar",
        twitter: "https://twitter.com/rishabhkumar",
      },
    },
    {
      role: "APP DEVELOPMENT LEAD",
      name: "Chinmay Verma",
      borderColor: "#FF5752",
      imageSrc: "/img/applead.png",
      bio: "Mobile App Development Lead specializing in cross-platform development.",
      social: {
        github: "https://github.com/chinmayverma",
        linkedin: "https://linkedin.com/in/chinmayverma",
        twitter: "https://twitter.com/chinmayverma",
      },
    },
    {
      role: "WEB DEVELOPMENT LEAD",
      name: "Deepak Kumar",
      borderColor: "#79F77D",
      imageSrc: "/img/webdev.png",
      bio: "Web Development Lead with expertise in modern frontend frameworks and responsive design.",
      social: {
        github: "https://github.com/deepakkumar",
        linkedin: "https://linkedin.com/in/deepakkumar",
        twitter: "https://twitter.com/deepakkumar",
      },
    },
    {
      role: "GDSC LEAD",
      name: "Rishabh Kumar",
      borderColor: "#7E9EFF",
      imageSrc: "/img/lead.png",
      bio: "Google Developer Student Clubs Lead, passionate about building tech communities.",
      social: {
        github: "https://github.com/rishabhkumar",
        linkedin: "https://linkedin.com/in/rishabhkumar",
        twitter: "https://twitter.com/rishabhkumar",
      },
    },
    {
      role: "APP DEVELOPMENT LEAD",
      name: "Chinmay Verma",
      borderColor: "#FF5752",
      imageSrc: "/img/applead.png",
      bio: "Mobile App Development Lead specializing in cross-platform development.",
      social: {
        github: "https://github.com/chinmayverma",
        linkedin: "https://linkedin.com/in/chinmayverma",
        twitter: "https://twitter.com/chinmayverma",
      },
    },
    {
      role: "WEB DEVELOPMENT LEAD",
      name: "Deepak Kumar",
      borderColor: "#79F77D",
      imageSrc: "/img/webdev.png",
      bio: "Web Development Lead with expertise in modern frontend frameworks and responsive design.",
      social: {
        github: "https://github.com/deepakkumar",
        linkedin: "https://linkedin.com/in/deepakkumar",
        twitter: "https://twitter.com/deepakkumar",
      },
    },
    {
      role: "GDSC LEAD",
      name: "Rishabh Kumar",
      borderColor: "#7E9EFF",
      imageSrc: "/img/lead.png",
      bio: "Google Developer Student Clubs Lead, passionate about building tech communities.",
      social: {
        github: "https://github.com/rishabhkumar",
        linkedin: "https://linkedin.com/in/rishabhkumar",
        twitter: "https://twitter.com/rishabhkumar",
      },
    },
  ];

  const handleMemberClick = (member: Member) => {
    setSelectedMember(member);
    setIsExpanded(true);
  };

  return (
    <section
      id="members"
      className="bg-white dark:bg-darkgray h-full w-full bg-[url('/img/members1.png')] bg-no-repeat bg-cover bg-center flex items-center justify-center pt-10"
    >
     <Background />
      <MaxWidthWrapper className="w-full">
        <h1 className="text-5xl text-[#4D4D4D] text-center my-10 font-semibold dark:text-headdark">
          Members
        </h1>

        {/* Members Grid */}
        <div
          ref={membersContainerRef}
          className="grid grid-cols-1 md:grid-cols-4 justify-center items-center gap-x-10 gap-y-10"
        >
          {members.map((member, index) => (
            <ImageFrame
              key={index}
              role={member.role}
              name={member.name}
              borderColor={member.borderColor}
              imageSrc={member.imageSrc}
              className="justify-self-center"
              onClick={() => handleMemberClick(member)}
            />
          ))}
        </div>

        {/* Show More Button */}
        <div className="flex justify-center my-10">
        <Button className="bg-[#2194F3] dark:bg-[#2194F3] hover:dark:bg-red-400 sm:text-md max-md:px-16 text-white rounded-sm w-1/4 md:w-40 h-10">
  <Link href="/members" className="w-full h-full flex items-center justify-center">
    Show More
  </Link>
</Button>
        </div>

        {/* Expanded Card */}
        {selectedMember && (
          <ExpandedCard
            member={selectedMember}
            isOpen={isExpanded}
            onClose={() => {
              setIsExpanded(false);
              setSelectedMember(null);
            }}
          />
        )}
      </MaxWidthWrapper>
    </section>
  );
};

export default Members;
