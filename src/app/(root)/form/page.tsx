"use client"

import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import Background from "@/components/ui/Background";
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';

import TechQuestions from './TechQuestions';
import PRQuestions from './PRquestion';
import VideoEditorQuestions from './VideoEditorQuestions';
// Import other role components here...

const positions = [
  { id: 'tech', label: 'Tech Member (Developer)' },
  { id: 'pr', label: 'Public Relations (PR)' },
  { id: 'video', label: 'Video Editor' },
  { id: 'content', label: 'Content Writer' },
  { id: 'graphics', label: 'Graphics Designer' },
  { id: 'photographer', label: 'Photographer' }
];

const GDGRecruitmentForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    branch: '',
    selectedPositions: [] as string[],
    timeCommitment: '',
    whyJoin: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePositionToggle = (positionId: string) => {
    setFormData(prev => ({
      ...prev,
      selectedPositions: prev.selectedPositions.includes(positionId)
        ? prev.selectedPositions.filter(id => id !== positionId)
        : [...prev.selectedPositions, positionId]
    }));
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-blue-600">General Information</h2>
      <div className="space-y-4">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleInputChange}
          className="w-full p-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 focus:border-blue-500 outline-none transition-all"
        />
        <input
          type="email"
          name="email"
          placeholder="College Email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full p-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 focus:border-blue-500 outline-none transition-all"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full p-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 focus:border-blue-500 outline-none transition-all"
          />
          <input
            type="text"
            name="branch"
            placeholder="Branch & Year"
            value={formData.branch}
            onChange={handleInputChange}
            className="w-full p-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 focus:border-blue-500 outline-none transition-all"
          />
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-200">Select Position(s)</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {positions.map(position => (
              <button
                key={position.id}
                onClick={() => handlePositionToggle(position.id)}
                className={`p-3 rounded-lg border transition-all ${formData.selectedPositions.includes(position.id)
                    ? 'bg-blue-600 border-blue-400 text-white'
                    : 'bg-white/10 border-white/20 hover:bg-white/20'
                  }`}
              >
                <div className="flex items-center space-x-2">
                  {formData.selectedPositions.includes(position.id) && <Check size={16} />}
                  <span>{position.label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-blue-600">Perspective on GDG HIT</h2>
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-200">What do you think GDG HIT stands for? How does it benefit students?</label>
          <textarea
            name="gdgPerspective"
            rows={3}
            className="w-full p-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 focus:border-blue-500 outline-none transition-all"
            placeholder="Share your thoughts..."
          ></textarea>
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-200">What kind of events or initiatives would you like to see?</label>
          <textarea
            name="eventIdeas"
            rows={3}
            className="w-full p-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 focus:border-blue-500 outline-none transition-all"
            placeholder="Share your creative ideas..."
          ></textarea>
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-blue-600">Role-Specific Questions</h2>
      <div className="space-y-8">
        {formData.selectedPositions.map(position => {
          const roleQuestions = getRoleQuestions(position);
          return (
            <div key={position} className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-400">{positions.find(p => p.id === position)?.label}</h3>
              {roleQuestions}
            </div>
          );
        })}
      </div>
    </div>
  );

  const getRoleQuestions = (position: string) => {
    switch (position) {
      case 'tech':
        return <TechQuestions />;
      case 'pr':
        return <PRQuestions />;
      case 'video':
        return <VideoEditorQuestions />;
      // Add other cases for other roles
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen w-full relative">
      <Background />
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
          <div className="p-6 md:p-8">
            <div className="flex justify-between items-center mb-8">
              <div className="space-y-1">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  GDG HIT Recruitment
                </h1>
                <div className="flex space-x-2">
                  {[1, 2, 3].map(i => (
                    <div
                      key={i}
                      className={`h-2 rounded-full transition-all ${i === step ? 'w-8 bg-blue-500' : 'w-4 bg-white/20'}`}
                    ></div>
                  ))}
                </div>
              </div>
              <span className="text-sm text-gray-300">Step {step} of 3</span>
            </div>

            {step === 1 && renderStep1()}
            {step === 2 && renderStep2()}
            {step === 3 && renderStep3()}

            <div className="flex justify-between mt-8">
              {step > 1 && (
                <button
                  onClick={() => setStep(prev => prev - 1)}
                  className="flex items-center px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all"
                >
                  <ChevronLeft size={20} className="mr-2" /> Previous
                </button>
              )}
              {step < 3 && (
                <button
                  onClick={() => setStep(prev => prev + 1)}
                  className="flex items-center px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-all ml-auto"
                >
                  Next <ChevronRight size={20} className="ml-2" />
                </button>
              )}
              {step === 3 && (
                <button
                  className="flex items-center px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 transition-all ml-auto"
                >
                  Submit <Check size={20} className="ml-2" />
                </button>
              )}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default GDGRecruitmentForm;
