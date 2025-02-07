"use client";   
import React from 'react';
import MaxWidthWrapper from '@/hooks/MaxWidthWrapper';

const GoogleDots = () => (
  <div className="flex gap-1 justify-center mt-1">
    {['blue', 'red', 'yellow', 'green'].map(color => (
      <div key={color} className={`w-2 h-2 rounded-full bg-${color}-500`} />
    ))}
  </div>
);

interface TabButtonProps {
  name: string;
  isActive: boolean;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ name, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`
      px-6 py-2 rounded-full text-sm font-medium transition-all
      ${isActive 
        ? 'bg-blue-500 text-white shadow-lg' 
        : 'bg-gray-100 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-gray-200'
      }
      border border-gray-200 dark:border-gray-700/50
    `}
  >
    {name}
  </button>
);

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  type: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, description, date, type }) => (
  <div className="rounded-xl overflow-hidden bg-gray-50/80 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all">
    <div className="h-48 bg-gradient-to-br from-gray-100/50 to-gray-200/50 dark:from-gray-700/50 dark:to-gray-800/50" />
    <div className="p-6">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          {title}
        </h3>
        <span className="text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">
          {type}
        </span>
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
        {description}
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-500">
        {date}
      </p>
    </div>
  </div>
);

const EventGallery = () => {
  const [activeTab, setActiveTab] = React.useState('All');
  const tabs = ['All', 'Workshops', 'Hackathons', 'Meetups'];

  const events = [
    {
      id: 1,
      title: 'Web Development Workshop',
      description: 'Learn modern web development practices and tools',
      date: 'March 15, 2025',
      type: 'Workshops'
    },
    {
      id: 2,
      title: 'AI Hackathon 2025',
      description: 'Build innovative AI solutions in 48 hours',
      date: 'April 1, 2025',
      type: 'Hackathons'
    },
    {
      id: 3,
      title: 'React Developers Meetup',
      description: 'Monthly meetup for React developers',
      date: 'March 20, 2025',
      type: 'Meetups'
    },
    {
      id: 4,
      title: 'Cloud Computing Workshop',
      description: 'Deep dive into cloud architecture',
      date: 'March 25, 2025',
      type: 'Workshops'
    },
    {
      id: 5,
      title: 'Mobile App Hackathon',
      description: 'Create innovative mobile applications',
      date: 'April 10, 2025',
      type: 'Hackathons'
    },
    {
      id: 6,
      title: 'Tech Leaders Meetup',
      description: 'Networking event for tech leaders',
      date: 'March 30, 2025',
      type: 'Meetups'
    }
  ];

  const filteredEvents = activeTab === 'All' 
    ? events 
    : events.filter(event => event.type === activeTab);

  return (
    <MaxWidthWrapper>
    <div className="min-h-screen bg-white dark:bg-black p-8 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-gray-700 to-gray-700 dark:from-gray-200 dark:to-gray-300 text-transparent bg-clip-text">
            Event Gallery
          </h1>
          <GoogleDots />
        </div>

        <div className="flex justify-center gap-4 mb-12">
          {tabs.map(tab => (
            <TabButton
              key={tab}
              name={tab}
              isActive={activeTab === tab}
              onClick={() => setActiveTab(tab)}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map(event => (
            <EventCard
              key={event.id}
              title={event.title}
              description={event.description}
              date={event.date}
              type={event.type}
            />
          ))}
        </div>
      </div>
    </div>
    </MaxWidthWrapper>
  );
};

export default EventGallery;