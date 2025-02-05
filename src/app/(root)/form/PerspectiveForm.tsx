import React from 'react';
import { useForm } from 'react-hook-form';
import { ChevronRight } from 'lucide-react';

interface PerspectiveFormProps {
  onSubmit: (data: PerspectiveFormData) => void;
}

export interface PerspectiveFormData {
  gdgPerspective: string;
  eventIdeas: string;
}

export const PerspectiveForm: React.FC<PerspectiveFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm<PerspectiveFormData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <h2 className="text-2xl font-bold text-blue-600">Perspective on GDG HIT</h2>
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-200">
            What do you think GDG HIT stands for? How does it benefit students?
          </label>
          <textarea
            {...register('gdgPerspective')}
            rows={3}
            className="w-full p-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 focus:border-blue-500 outline-none transition-all"
            placeholder="Share your thoughts..."
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-200">
            What kind of events or initiatives would you like to see?
          </label>
          <textarea
            {...register('eventIdeas')}
            rows={3}
            className="w-full p-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 focus:border-blue-500 outline-none transition-all"
            placeholder="Share your creative ideas..."
          />
        </div>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="flex items-center px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-all"
        >
          Next <ChevronRight size={20} className="ml-2" />
        </button>
      </div>
    </form>
  );
};