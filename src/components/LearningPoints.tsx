import React from 'react';
import { CheckCircle } from 'lucide-react';
import { TProduct } from '@/types/type';

interface LearningPointsProps {
  productData: TProduct;
}

const LearningPoints: React.FC<LearningPointsProps> = ({ productData }) => {
  const {sections} = productData

  const pointersSection = sections.find(s => s.type === 'pointers');

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{pointersSection?.name  }</h2>

      <div className="space-y-4">
        {pointersSection?.values.map((item, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="flex-shrink-0 mt-1">
              <CheckCircle className={`w-5 h-5 text-green-600`} />
            </div>
            <div className="flex-1">
              <p className="text-gray-700 leading-relaxed">{item?.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningPoints;

