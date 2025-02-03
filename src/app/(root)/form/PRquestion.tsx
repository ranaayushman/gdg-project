"use client"
import React from 'react';

const PRQuestions = () => (
  <div className="space-y-4">
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-200">Why do you think you are fit for Public Relations?</label>
      <textarea
        placeholder="Describe your experience..."
        className="w-full p-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 focus:border-blue-500 outline-none transition-all"
        rows={3}
      ></textarea>
    </div>
  </div>
);

export default PRQuestions;
