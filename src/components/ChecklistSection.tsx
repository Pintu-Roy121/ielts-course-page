import React from 'react';
import {
  Play,
  FileText,
  Users,
  Book,
  CheckCircle,
  Award,
  Headphones
} from 'lucide-react';
import { TChecklist } from '@/types/type';

interface ChecklistSectionProps {
  checklist: TChecklist[];
  title?: string;
}

const getChecklistIcon = (title: string | undefined) => {
  if (!title) {
    return <CheckCircle className="w-6 h-6 text-green-600" />;
  }
  const titleLower = title.toLowerCase();

  if (titleLower.includes('video') || titleLower.includes('lecture')) {
    return <Play className="w-6 h-6 text-blue-600" />;
  }
  if (titleLower.includes('sheet') || titleLower.includes('material')) {
    return <FileText className="w-6 h-6 text-green-600" />;
  }
  if (titleLower.includes('test') || titleLower.includes('mock')) {
    return <Award className="w-6 h-6 text-purple-600" />;
  }
  if (titleLower.includes('book') || titleLower.includes('hardcopy')) {
    return <Book className="w-6 h-6 text-orange-600" />;
  }
  if (titleLower.includes('support') || titleLower.includes('group')) {
    return <Users className="w-6 h-6 text-indigo-600" />;
  }
  if (titleLower.includes('listening')) {
    return <Headphones className="w-6 h-6 text-red-600" />;
  }

  return <CheckCircle className="w-6 h-6 text-green-600" />;
};

const ChecklistSection: React.FC<ChecklistSectionProps> = ({ 
  checklist,
  title = "What's included in this course" 

}) => {

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {checklist.map((item) => (
          <div key={item.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex-shrink-0 mt-1">
              {getChecklistIcon(item?.icon)}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-1">{item.text}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChecklistSection;

