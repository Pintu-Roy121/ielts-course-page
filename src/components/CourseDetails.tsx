import React from 'react';
import { TProduct } from '@/types/type';

interface CourseDetailsProps {
  productData: TProduct;
}

const CourseDetails: React.FC<CourseDetailsProps> = ({ productData }) => {
   const { sections } = productData;

  const aboutSection = sections.find(s => s.type === 'about');
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{aboutSection?.name}</h2>
      {
        aboutSection?.values?.map((content,i)=>(

      <div key={i} className="prose prose-gray max-w-none">
        {content.title && (
          <div
            dangerouslySetInnerHTML={{ __html: content?.title }}
            className="text-gray-700 leading-relaxed mt-4"
          />
        )}
        {content?.description && (
          <div
            dangerouslySetInnerHTML={{ __html: content?.description }}
            className="text-gray-700 leading-relaxed mt-4"
          />
        )}
      </div>
        ))
      }
    </div>
  );
};

export default CourseDetails;

