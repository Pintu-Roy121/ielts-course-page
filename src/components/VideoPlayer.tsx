/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import { TProduct } from '@/types/type';

interface VideoPlayerProps {
  productData: TProduct;
  title:string;
  className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ productData,title, className = '' }) => {
  const{media} = productData;

  const trailerVideo = media?.filter(m => m.resource_type === 'video');


  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
      {title && (
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        </div>
      )}
      <div className="relative youtube-container">
        <img
              src={trailerVideo[0]?.thumbnail_url}
              alt={'Instructor'}
              className="w-full h-64 md:h-80 lg:h-96 object-contain"
            />
      </div>
    </div>
  );
};

export default VideoPlayer;

