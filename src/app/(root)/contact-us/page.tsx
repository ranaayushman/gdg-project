"use client"; 

import React from 'react';
import { Mail } from 'lucide-react';
import {PinContainer} from '@/components/ui/3d-pin';

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="space-y-8">
          <div className="bg-gray-800 w-12 h-12 rounded-lg flex items-center justify-center">
            <Mail className="w-6 h-6 text-blue-400" />
          </div>
          
          <h1 className="text-5xl font-bold">Contact us</h1>
          
          <p className="text-gray-400 text-lg">
            We are always looking for ways to improve our products and services. Contact us and let us know how we can help you.
          </p>
          
          <div className="space-x-4 text-gray-400">
            <span>contact@yoursaas.ai</span>
            <span>•</span>
            <span>+1 (800) 123 XX21</span>
            <span>•</span>
            <span>support@yoursaas.ai</span>
          </div>
          
          <div className="relative">
          {/* <PinContainer
          title='Haldia institute of technology'
          href='https://www.hithaldia.in/'> */}
            <img 
              src="/world.svg" 
              alt="World Map" 
              className="opacity-50"
            />
          {/* </PinContainer> */}
            
            <div className="absolute top-[50px] left-[345px]">
              <div className="relative">
                <div className="bg-blue-500/20 w-24 h-24 rounded-full absolute animate-ping" />
                <div className="bg-blue-500 px-6 py-2 rounded-full text-sm relative z-10">
                  We are here
                </div>
              </div>
            </div>
          </div>
        </div>
        

        {/* Right Column - Contact Form */}
        <div className="bg-gray-900/50 p-8 rounded-3xl backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm mb-2">Full name</label>
              <input
                type="text"
                className="w-full bg-gray-800/50 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Manu Arora"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Email Address</label>
              <input
                type="email"
                className="w-full bg-gray-800/50 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="support@aceternity.com"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Company</label>
              <input
                type="text"
                className="w-full bg-gray-800/50 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Aceternity Labs LLC"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Message</label>
              <textarea
                className="w-full bg-gray-800/50 rounded-lg p-3 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                placeholder="Type your message here"
              />
            </div>

            <button
              type="submit"
              className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;