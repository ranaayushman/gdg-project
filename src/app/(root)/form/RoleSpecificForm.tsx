import React from 'react';
import { Check } from 'lucide-react';
import TechQuestions from './TechQuestions';
import PRQuestions from './PRquestion';
import VideoEditorQuestions from './VideoEditorQuestions';
import ContentWriterForm from './Content';

interface RoleSpecificFormProps {
  selectedPositions: string[];
  positions: Array<{ id: string; label: string }>;
  onSubmit: (data: any) => void;
}

export const RoleSpecificForm: React.FC<RoleSpecificFormProps> = ({
  selectedPositions,
  positions,
  onSubmit
}) => {
  const getRoleQuestions = (position: string) => {
    switch (position) {
      case 'tech':
        return <TechQuestions />;
      case 'pr':
        return <PRQuestions />;
      case 'video':
        return <VideoEditorQuestions />;
        case 'content':
        return <ContentWriterForm />;
      default:
        return null;
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <h2 className="text-2xl font-bold text-blue-600">Role-Specific Questions</h2>
      <div className="space-y-8">
        {selectedPositions.map(position => {
          const roleQuestions = getRoleQuestions(position);
          return (
            <div key={position} className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-400">
                {positions.find(p => p.id === position)?.label}
              </h3>
              {roleQuestions}
            </div>
          );
        })}
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="flex items-center px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 transition-all"
        >
          Submit <Check size={20} className="ml-2" />
        </button>
      </div>
    </form>
  );
};