
"use client";
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
  hasWritten: z.enum(['Yes', 'No'], { required_error: 'Please select an option.' }),
  sampleLink: z.string().url('Please enter a valid URL.').optional().or(z.literal('').transform(() => undefined)),
  blogIntro: z.string().min(1, 'Blog introduction is required.').max(200, 'Maximum 200 words allowed.'),
  familiarWithSEO: z.enum(['Yes', 'No'], { required_error: 'Please select an option.' }),
  seoExplanation: z.string().optional().or(z.literal('').transform(() => undefined)),
  canWritePosts: z.enum(['Yes', 'No'], { required_error: 'Please select an option.' }),
  postExample: z.string().optional().or(z.literal('').transform(() => undefined)),
});

const ContentWriterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: z.infer<typeof schema>) => {
    console.log(data);
  };

  const hasWritten = watch('hasWritten');
  const familiarWithSEO = watch('familiarWithSEO');
  const canWritePosts = watch('canWritePosts');

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-4 bg-gray-800 text-white rounded-lg shadow-lg">
      <div>
        <label className="block text-sm font-medium mb-1">Have you written blogs/articles before? (Yes/No)</label>
        <div className="flex space-x-4">
          <label className="flex items-center space-x-2">
            <input type="radio" value="Yes" {...register('hasWritten')} />
            <span>Yes</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="radio" value="No" {...register('hasWritten')} />
            <span>No</span>
          </label>
        </div>
        {errors.hasWritten?.message && <p className="text-red-500 text-sm mt-1">{errors.hasWritten.message.toString()}</p>}
      </div>

      {hasWritten === 'Yes' && (
        <div>
          <label className="block text-sm font-medium mb-1">Share a sample or link</label>
          <input 
            type="text" 
            {...register('sampleLink')} 
            placeholder="https://example.com" 
            className="w-full p-2 rounded-lg bg-white/10 border border-white/20 focus:border-blue-500 outline-none" 
          />
          {errors.sampleLink?.message && <p className="text-red-500 text-sm mt-1">{errors.sampleLink.message.toString()}</p>}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium mb-1">Write a short blog introduction on "The Importance of Developer Communities in Career Growth."</label>
        <textarea 
          {...register('blogIntro')} 
          rows={4} 
          placeholder="Max 200 words..." 
          className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-blue-500 outline-none"
        ></textarea>
        {errors.blogIntro?.message && <p className="text-red-500 text-sm mt-1">{errors.blogIntro.message.toString()}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Are you familiar with SEO and content marketing strategies? (Yes/No)</label>
        <div className="flex space-x-4">
          <label className="flex items-center space-x-2">
            <input type="radio" value="Yes" {...register('familiarWithSEO')} />
            <span>Yes</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="radio" value="No" {...register('familiarWithSEO')} />
            <span>No</span>
          </label>
        </div>
        {errors.familiarWithSEO?.message && <p className="text-red-500 text-sm mt-1">{errors.familiarWithSEO.message.toString()}</p>}
      </div>

      {familiarWithSEO === 'Yes' && (
        <div>
          <label className="block text-sm font-medium mb-1">Explain briefly</label>
          <textarea 
            {...register('seoExplanation')} 
            rows={2} 
            placeholder="Explain your experience with SEO and content marketing..." 
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-blue-500 outline-none"
          ></textarea>
        </div>
      )}

      <div>
        <label className="block text-sm font-medium mb-1">Can you write engaging Twitter threads and LinkedIn posts for GDG events? (Yes/No)</label>
        <div className="flex space-x-4">
          <label className="flex items-center space-x-2">
            <input type="radio" value="Yes" {...register('canWritePosts')} />
            <span>Yes</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="radio" value="No" {...register('canWritePosts')} />
            <span>No</span>
          </label>
        </div>
        {errors.canWritePosts?.message && <p className="text-red-500 text-sm mt-1">{errors.canWritePosts.message.toString()}</p>}
      </div>

      {canWritePosts === 'Yes' && (
        <div>
          <label className="block text-sm font-medium mb-1">Share an example post idea</label>
          <textarea 
            {...register('postExample')} 
            rows={2} 
            placeholder="Describe an example of a Twitter thread or LinkedIn post..." 
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-blue-500 outline-none"
          ></textarea>
        </div>
      )}

      <button 
        type="submit" 
        className="w-full p-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-all"
      >
        Submit
      </button>
    </form>
  );
};

export default ContentWriterForm;
