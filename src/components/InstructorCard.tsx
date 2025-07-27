/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { User } from 'lucide-react';
import { TProduct } from '@/types/type';

interface InstructorCardProps {
  productData: TProduct;
}

const InstructorCard: React.FC<InstructorCardProps> = ({ productData }:InstructorCardProps) => {
  const { sections } = productData;

    const instructorSection = sections?.find(s => s.type === 'instructors');
   
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 gradient-text">{instructorSection?.name}</h2>
      
      {
        instructorSection?.values?.map((content,i)=>(
      <div key={i} className="flex items-start space-x-6">
        <div className="flex-shrink-0">
          {content?.image ? (
            <img
              src={content?.image}
              alt={content?.title || 'Instructor'}
              className="w-24 h-24 rounded-full object-cover border-4 border-green-100 shadow-lg"
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center shadow-lg">
              <User className="w-10 h-10 text-green-600" />
            </div>
          )}
        </div>

        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            {content?.title}
          </h3>

          {content?.description && (
            <div className="text-gray-600 leading-relaxed space-y-1">
               <div
                className="text-lg leading-relaxed mb-6 prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: content?.description }}
              />
            </div>
          )}
        </div>
      </div>
        ))
      }
    </div>
  );
};

export default InstructorCard;

