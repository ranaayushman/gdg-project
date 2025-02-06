import React from "react";
import { Globe, Users, Calendar, ExternalLink } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Calendar className="w-8 h-8 text-blue-500 transition-transform group-hover:scale-110" />,
      title: "Free & Accessible Events",
      description: "Open to all students interested in technology and innovation.",
    },
    {
      icon: <Users className="w-8 h-8 text-green-500 transition-transform group-hover:scale-110" />,
      title: "Strong Community",
      description: "Connect with like-minded tech enthusiasts and mentors.",
    },
    {
      icon: <Globe className="w-8 h-8 text-red-500 transition-transform group-hover:scale-110" />,
      title: "Global Network",
      description: "Part of the worldwide Google Developers Group community.",
    },
  ];

  const missionPoints = [
    "Hands-on workshops and training",
    "Expert mentorship programs",
    "Networking opportunities",
    "Project collaborations",
    "Tech talks and seminars",
  ];

  return (
    <main className="w-full min-h-screen bg-white dark:bg-black transition-colors duration-300 overflow-hidden flex flex-col">
      {/* Hero Section with Google-inspired design */}
      <div className="w-full bg-gradient-to-r from-blue-600 via-red-500 to-yellow-500 h-1" />

      <div className="max-w-5xl mx-auto px-4 py-8 flex-1">
        {/* Header Section */}
        <div className="text-center mb-8 space-y-3">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            About <span className="text-blue-600">GDG</span> <span className="text-red-500">On</span>{" "}
            <span className="text-yellow-500">Campus</span> <span className="text-green-500">HIT</span>
          </h1>
          <p className="max-w-2xl mx-auto text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            A student-led community exploring Google Developer technologies,
            fostering innovation, and empowering students through hands-on learning.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          {/* Left Section - Features */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-4 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  {feature.icon}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Section - Mission */}
          <div className="p-4 bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-gray-800 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <div className="w-2 h-2 rounded-full bg-yellow-500" />
                <div className="w-2 h-2 rounded-full bg-green-500" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
            </div>

            <div className="space-y-3 flex-1">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Empower students with practical knowledge of Google technologies through:
              </p>
              <ul className="space-y-2 overflow-y-auto">
                {missionPoints.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-gray-800 dark:text-gray-200 group text-sm"
                  >
                    <span className="w-4 h-4 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold text-xs group-hover:scale-110 transition-transform">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#join-us"
              className="mt-4 inline-flex items-center gap-1.5 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
            >
              Join our community <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Google-inspired bottom border */}
        <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-800 flex justify-center gap-3">
          <span className="w-3 h-3 rounded-full bg-blue-600" />
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-yellow-500" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
        </div>
      </div>
    </main>
  );
};

export default About;
