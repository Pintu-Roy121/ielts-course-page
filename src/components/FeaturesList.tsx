import React from 'react';
import { Play, FileText, Users, Clock } from 'lucide-react';
import { TProduct } from '@/types/type';

interface FeaturesListProps {
  productData: TProduct;
}

const getFeatureIcon = (index: number) => {
  const icons = [Play, FileText, Users, Clock];
  const IconComponent = icons[index % icons.length];
  return <IconComponent className="w-6 h-6 text-green-600" />;
};

const FeaturesList: React.FC<FeaturesListProps> = ({ productData }:FeaturesListProps) => {

  const { sections } = productData;
  const featuresSection = sections?.find(s => s.type === 'features');

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{featuresSection?.name}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuresSection?.values.map((item, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="flex-shrink-0 mt-1">
              {getFeatureIcon(index)}
            </div>
            <div className="flex-1">
              <p className="text-gray-700 leading-relaxed">{item?.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesList;

