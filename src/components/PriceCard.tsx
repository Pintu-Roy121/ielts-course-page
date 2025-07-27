/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Button from '@/components/ui/Button';
import { Users } from 'lucide-react';
import { TProduct } from '@/types/type';

interface PriceCardProps {
  price?: number;
  productData: TProduct;
  onEnroll?: () => void;
}

const PriceCard: React.FC<PriceCardProps> = ({
  price = 1000,
  productData,
  onEnroll
}) => {

const { cta_text,checklist } = productData;

  return (
    <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100 sticky top-6 hover:shadow-2xl transition-all duration-300">
      <div className="text-center mb-8">
        <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-3">
          ৳{price.toLocaleString()}
        </div>
        <p className="text-gray-600 text-lg">One-time payment</p>
        <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
          Best Value
        </div>
      </div>

      <Button
        variant="primary"
        size="lg"
        className="w-full mb-8 text-lg font-bold py-4 hover:cursor-pointer"
        onClick={onEnroll}
      >
        {cta_text?.name}
      </Button>

      <div className="space-y-5">
        <h3 className="font-bold text-gray-900 text-center mb-6 text-lg">
          Course Overview
        </h3>

        {checklist?.map((list, index) => (
          <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">

                 <img
              src={list?.icon}
              alt={"check_list"}
              className="w-7 h-7 rounded-full object-cover border-4 border-green-100 shadow-lg"
            />
              </div>
            </div>
            <div className="flex-1 flex justify-between items-center">
              <span className="text-gray-700 font-medium">{list?.text}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 bg-gray-50 rounded-lg p-3">
          <Users className="w-4 h-4 text-green-600" />
          <span className="font-medium">Join thousands of successful students</span>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;

