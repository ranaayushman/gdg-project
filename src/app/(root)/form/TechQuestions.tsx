import React from 'react';

const TechQuestions = () => (
  <div className="space-y-4">
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-200">Select your proficient technologies</label>
      <div className="grid grid-cols-2 gap-2">
        {['HTML/CSS', 'JavaScript', 'Python', 'Java/Kotlin', 'Flutter', 'Firebase'].map(tech => (
          <label key={tech} className="flex items-center space-x-2 p-2 rounded-lg bg-white/5">
            <input type="checkbox" className="rounded" />
            <span>{tech}</span>
          </label>
        ))}
      </div>
    </div>
    <textarea
      placeholder="Share your GitHub projects..."
      className="w-full p-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 focus:border-blue-500 outline-none transition-all"
      rows={3}
    ></textarea>
  </div>
);

export default TechQuestions;
