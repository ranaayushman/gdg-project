"use client";
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
  designTools: z.array(z.string()).min(1, 'Please select at least one design tool.'),
  designPortfolio: z.string().url('Please enter a valid URL.').optional().or(z.literal('').transform(() => undefined)),
  comfortableWithDesign: z.enum(['Yes', 'No'], { required_error: 'Please select an option.' }),
  designExamples: z.string().optional().or(z.literal('').transform(() => undefined)),
  gdgPosterConcept: z.string().optional().or(z.literal('').transform(() => undefined)),
});

const GraphicsDesignerForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const comfortableWithDesign = watch('comfortableWithDesign');

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-4 bg-gray-800 text-white rounded-lg shadow-lg">
      <div>
        <label className="block text-sm font-medium mb-1">Which design tools do you use? (Check all that apply)</label>
        <div className="grid grid-cols-2 gap-2">
          {['Photoshop', 'Illustrator', 'Figma', 'Canva'].map(tool => (
            <label key={tool} className="flex items-center space-x-2 p-2 rounded-lg bg-white/5">
              <input type="checkbox" value={tool} {...register('designTools')} className="rounded" />
              <span>{tool}</span>
            </label>
          ))}
        </div>
        {errors.designTools && <p className="text-red-500 text-sm mt-1">{String(errors.designTools.message)}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Provide a link to your design portfolio (if available)</label>
        <input 
          type="text" 
          {...register('designPortfolio')} 
          placeholder="https://portfolio.com" 
          className="w-full p-2 rounded-lg bg-white/10 border border-white/20 focus:border-blue-500 outline-none" 
        />
        {errors.designPortfolio && <p className="text-red-500 text-sm mt-1">{String(errors.designPortfolio.message)}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Are you comfortable creating social media banners, event posters, and UI/UX designs? (Yes/No)</label>
        <div className="flex space-x-4">
          {['Yes', 'No'].map(option => (
            <label key={option} className="flex items-center space-x-2">
              <input type="radio" value={option} {...register('comfortableWithDesign')} />
              <span>{option}</span>
            </label>
          ))}
        </div>
        {errors.comfortableWithDesign && <p className="text-red-500 text-sm mt-1">{String(errors.comfortableWithDesign.message)}</p>}
      </div>

      {comfortableWithDesign === 'Yes' && (
        <div>
          <label className="block text-sm font-medium mb-1">Provide examples if possible</label>
          <textarea 
            {...register('designExamples')} 
            rows={2} 
            placeholder="Link to examples or describe your experience..." 
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-blue-500 outline-none"
          ></textarea>
        </div>
      )}

      <div>
        <label className="block text-sm font-medium mb-1">Create a GDG HIT event poster (Optional)</label>
        <textarea 
          {...register('gdgPosterConcept')} 
          rows={2} 
          placeholder="Submit a basic draft or describe your concept (Canva link)" 
          className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-blue-500 outline-none"
        ></textarea>
      </div>

      
    </form>
  );
};

export default GraphicsDesignerForm;
