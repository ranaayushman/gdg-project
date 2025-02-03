"use client"
import React, { useState, useEffect } from 'react';
import { Calendar, Users, Mail } from 'lucide-react';
import BackgroundElements from "@/components/ui/Background";

const TypewriterText = () => {
  const [text, setText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const fullText = 'Recruitment Coming Soon';
  const [bounce, setBounce] = useState(false);

  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
      // Trigger bounce animation
      setBounce(true);
      const timeout = setTimeout(() => setBounce(false), 1000);
      return () => clearTimeout(timeout);
    }
  }, [text]);

  return (
    <h2 className={`mb-6 text-4xl font-bold text-gray-800 dark:text-white inline-block
      ${isComplete ? 'after:content-["_"] after:animate-pulse' : ''}
      ${bounce ? 'animate-bounce' : ''}
      transition-all duration-300 transform
      ${isComplete ? 'hover:scale-110 hover:text-blue-600 dark:hover:text-blue-400' : ''}
    `}>
      {text}
    </h2>
  );
};

interface InfoCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon: Icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`p-4 transition-all duration-300 bg-white/80 dark:bg-gray-700/80 rounded-xl
        ${isHovered ? 'scale-105 shadow-lg' : 'hover:shadow-md'}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Icon className={`w-8 h-8 mx-auto mb-2 transition-transform duration-300
        ${isHovered ? 'scale-125 rotate-12' : ''} 
        ${title === 'Coming Soon' ? 'text-blue-500' : 
          title === 'All Branches' ? 'text-green-500' : 'text-red-500'}`} 
      />
      <h3 className="font-semibold text-gray-800 dark:text-white">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

const RecruitmentPage = () => {
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    // Show cards after a delay
    const timeout = setTimeout(() => setShowCards(true), 2500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-white/30 dark:bg-gray-900/30 backdrop-blur-md">
      <BackgroundElements />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16 text-center">
        {/* Google-inspired logo section */}
        <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
          <h1 className="inline-flex text-6xl font-bold">
            <span className="text-blue-600 hover:animate-bounce">G</span>
            <span className="text-red-500 hover:animate-bounce">D</span>
            <span className="text-yellow-500 hover:animate-bounce">G</span>
          </h1>
          <span className="block mt-2 text-xl font-medium text-gray-600 dark:text-gray-300">
            Haldia Institute of Technology
          </span>
        </div>

        {/* Main announcement */}
        <div className="max-w-2xl p-8 mx-auto mb-8 bg-white/70 dark:bg-gray-800/70 rounded-2xl shadow-lg backdrop-blur-sm
          transition-all duration-500 hover:shadow-2xl">
          <TypewriterText />
          
          <p className="mb-6 text-lg text-gray-600 dark:text-gray-300 transition-opacity duration-500">
            Join us in building the future of technology at HIT. 
            We&apos;re looking for passionate developers, designers, and tech enthusiasts.
          </p>

          {/* Info cards */}
          <div className={`grid grid-cols-1 gap-4 md:grid-cols-3 transition-all duration-500
            ${showCards ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
            <InfoCard 
              icon={Calendar}
              title="Coming Soon"
              description="Stay tuned for dates"
            />
            <InfoCard 
              icon={Users}
              title="All Branches"
              description="Open for everyone"
            />
            <InfoCard 
              icon={Mail}
              title="Notify Me"
              description="Updates coming soon"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="text-sm text-gray-600 dark:text-gray-400">
          <p>Google Developer Groups</p>
          <p>Haldia Institute of Technology Chapter</p>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentPage;