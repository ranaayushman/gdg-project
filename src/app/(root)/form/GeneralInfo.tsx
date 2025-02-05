// components/GeneralInfoForm.tsx
"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Check, ChevronRight } from 'lucide-react';
import { generalInfoSchema, type GeneralInfoFormData } from '@/schemas/validationSchema';
import { Form, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { FormInputField } from '@/components/FormInputFiled';
import { FormSelectField } from '@/components/FormSelectField';

// Constants moved inside the file
const FORM_OPTIONS = {
  branches: [
    "CSE Main",
    "CSE AI/ML",
    "CSE DS",
    "CSE CS",
    "Information Technology",
    "Electronics and Communication Engineering",
    "Electrical Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Food Technology",
    "Bio Technology",
    "Agriculture Engineering"
  ],
  years: ["1st Year", "2nd Year", "3rd Year", "4th Year"]
} as const;

// PositionButton component kept inside GeneralInfoForm
interface PositionButtonProps {
  position: { 
    id: string; 
    label: string;
  };
  isSelected: boolean;
  onClick: () => void;
}

const PositionButton = ({ position, isSelected, onClick }: PositionButtonProps) => (
  <button
    type="button"
    onClick={onClick}
    className={`p-3 rounded-lg border transition-all ${
      isSelected
        ? 'bg-blue-600 border-blue-400 text-white'
        : 'bg-white/10 border-white/20 hover:bg-white/20'
    }`}
  >
    <div className="flex items-center space-x-2">
      {isSelected && <Check size={16} />}
      <span>{position.label}</span>
    </div>
  </button>
);

interface GeneralInfoFormProps {
  onSubmit: (data: GeneralInfoFormData) => void;
  positions: Array<{ id: string; label: string; }>;
}

export const GeneralInfoForm = ({ onSubmit, positions }: GeneralInfoFormProps) => {
  const form = useForm<GeneralInfoFormData>({
    resolver: zodResolver(generalInfoSchema),
    mode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      rollNumber: "",
      branch: undefined,
      year: undefined,
      selectedPositions: []
    }
    
  });

  const { formState: { errors, isSubmitting } } = form;
  const hasFormErrors = Object.keys(errors).length > 0;

  const handlePositionToggle = (positionId: string) => {
    const currentPositions = form.getValues('selectedPositions') || [];
    const newPositions = currentPositions.includes(positionId)
      ? currentPositions.filter(id => id !== positionId)
      : [...currentPositions, positionId];
    form.setValue('selectedPositions', newPositions, {
      shouldValidate: true
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {hasFormErrors && (
          <Alert variant="destructive">
            <AlertDescription>
              Please fill in all required fields correctly before proceeding.
            </AlertDescription>
          </Alert>
        )}

        <FormInputField
          control={form.control}
          name="fullName"
          label="Full Name"
          placeholder="Enter your full name"
        />

        <FormInputField
          control={form.control}
          name="email"
          label="College Email"
          placeholder="your.email@gmail.com"
          type="email"
        />

        <div className="grid grid-cols-2 gap-4">
          <FormInputField
            control={form.control}
            name="phone"
            label="Phone Number"
            placeholder="10-digit number"
            type="tel"
          />

          <FormInputField
            control={form.control}
            name="rollNumber"
            label="Roll Number"
            placeholder="Enter your roll number"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <FormSelectField
            control={form.control}
            name="branch"
            label="Branch"
            options={FORM_OPTIONS.branches}
          />

          <FormSelectField
            control={form.control}
            name="year"
            label="Year"
            options={FORM_OPTIONS.years}
          />
        </div>

        <FormField
          control={form.control}
          name="selectedPositions"
          render={() => (
            <FormItem>
              <FormLabel>Select Position(s) *</FormLabel>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {positions.map(position => (
                  <PositionButton
                    key={position.id}
                    position={position}
                    isSelected={form.watch('selectedPositions')?.includes(position.id)}
                    onClick={() => handlePositionToggle(position.id)}
                  />
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end mt-6">
          <Button 
            type="submit"
            disabled={isSubmitting || hasFormErrors}
            className="flex items-center px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next <ChevronRight size={20} className="ml-2" />
          </Button>
        </div>
      </form>
    </Form>
  );
};