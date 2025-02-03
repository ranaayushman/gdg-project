"use client";

import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import Background from "@/components/ui/Background";
import { ChevronLeft } from 'lucide-react';
import { GeneralInfoForm } from './GeneralInfo';
import { PerspectiveForm } from './PerspectiveForm';
import { RoleSpecificForm } from './RoleSpecificForm';
import type { GeneralInfoFormData } from '@/schemas/validationSchema';
import type { PerspectiveFormData } from './PerspectiveForm';

const positions = [
  { id: 'webdev', label: 'Web Developer' },
  { id: 'appdev', label: 'App Developer' },
  { id: 'pr', label: 'Public Relations (PR)' },
  { id: 'video', label: 'Video Editor' },
  { id: 'content', label: 'Content Writer' },
  { id: 'graphics', label: 'Graphics Designer' },
  { id: 'photographer', label: 'Photographer' }
];

const GDGRecruitmentForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<GeneralInfoFormData | null>(null);
  const [perspectiveData, setPerspectiveData] = useState<PerspectiveFormData | null>(null);

  const handleGeneralInfoSubmit = (data: GeneralInfoFormData) => {
    setFormData(data);
    setStep(2);
  };

  const handlePerspectiveSubmit = (data: PerspectiveFormData) => {
    setPerspectiveData(data);
    setStep(3);
  };

  const handleFinalSubmit = (roleSpecificData: any) => {
    // Combine all form data and submit
    const finalFormData = {
      ...formData,
      ...perspectiveData,
      roleSpecificData
    };
    console.log('Submitting form data:', finalFormData);
    // Add your submission logic here
  };

  const renderCurrentStep = () => {
    switch (step) {
      case 1:
        return <GeneralInfoForm onSubmit={handleGeneralInfoSubmit} positions={positions} />;
      case 2:
        return <PerspectiveForm onSubmit={handlePerspectiveSubmit} />;
      case 3:
        return (
          <RoleSpecificForm
            selectedPositions={formData?.selectedPositions || []}
            positions={positions}
            onSubmit={handleFinalSubmit}
          />
        );
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

            {renderCurrentStep()}

            {step > 1 && (
              <div className="flex justify-between mt-8">
                <button
                  onClick={() => setStep(prev => prev - 1)}
                  className="flex items-center px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all"
                >
                  <ChevronLeft size={20} className="mr-2" /> Previous
                </button>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default GDGRecruitmentForm;