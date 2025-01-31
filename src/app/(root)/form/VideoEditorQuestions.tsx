import React from 'react';

const VideoEditorQuestions = () => (
  <div className="space-y-4">
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-200">Do you have experience with video editing software? Please share your portfolio.</label>
      <textarea
        placeholder="Share your portfolio..."
        className="w-full p-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 focus:border-blue-500 outline-none transition-all"
        rows={3}
      ></textarea>
    </div>
  </div>
);

export default VideoEditorQuestions;
