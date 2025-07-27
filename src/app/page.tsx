'use client';

import React, { useEffect, useState } from 'react';
import { fetchProductData } from '@/lib/api';
import InstructorCard from '@/components/InstructorCard';
import FeaturesList from '@/components/FeaturesList';
import LearningPoints from '@/components/LearningPoints';
import CourseDetails from '@/components/CourseDetails';
import VideoPlayer from '@/components/VideoPlayer';
import ChecklistSection from '@/components/ChecklistSection';
import PriceCard from '@/components/PriceCard';
import { Star, Phone } from 'lucide-react';
import { TProduct } from '@/types/type';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function ProductPage() {
  const [productData, setProductData] = useState<TProduct | null>(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

 useEffect(() => {
    const currentLang = searchParams.get('lang');
    const newParams = new URLSearchParams(searchParams.toString());

    if (!currentLang || (currentLang !== 'en' && currentLang !== 'bn')) {
      newParams.set('lang', 'en'); 
      router.replace(`${pathname}?${newParams.toString()}`);
    }
  }, [searchParams, pathname, router]);


  useEffect(() => {
     const currentLang = searchParams.get('lang') as 'en' | 'bn' | null;

    if (!currentLang) return;
    const loadData = async () => {
      try {
        const data = await fetchProductData("ielts-course", currentLang);
        setProductData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [searchParams]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading course information...</p>
        </div>
      </div>
    );
  }

  if (!productData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Failed to load course information.</p>
        </div>
      </div>
    );
  }

  const featuresSection = productData.sections.find(s => s.type === 'features');

  const handleEnroll = () => {
    console.log('Enrolling in course...');
    alert('Enrollment functionality would be implemented here!');
  };

  return (
    <div className="min-h-screen bg-gray-50">

      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">10 Minute School</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Phone className="w-4 h-4" />
                <span>16910</span>
              </div>
              <button className="text-sm text-gray-600 hover:text-gray-900">
                লগ-ইন
              </button>
            </div>
          </div>
        </div>
      </header>


      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-4">{productData.title}</h1>

              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-sm">(82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)</span>
              </div>

              <div
                className="text-lg leading-relaxed mb-6 prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: productData.description }}
              />

              <div className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4" />
                <span>কোর্সটি সম্পর্কে বিস্তারিত জানতে ফোন করুন (16910)</span>
              </div>
            </div>

            <div>
                <VideoPlayer
                  productData={productData}
                  title="Course Preview"
                  className="w-full"
                />
            </div>
          </div>
        </div>
      </section>


      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2 space-y-8">

            {/* {instructorSection && ( */}
              <InstructorCard productData={productData} />
            {/* )} */}


            {featuresSection && (
              <FeaturesList productData={productData} />
            )}


            {/* {pointersSection && ( */}
              <LearningPoints productData={productData} />
            {/* )} */}


            {/* {exclusiveSection && ( */}
              <FeaturesList productData={productData} />
            {/* )} */}


            {/* {aboutSection && ( */}
              <CourseDetails productData={productData} />
            {/* )} */}


            <ChecklistSection checklist={productData.checklist} />
          </div>


          <div className="lg:col-span-1">
            <PriceCard
              price={1000}
              productData={productData}
              onEnroll={handleEnroll}
            />
          </div>
        </div>
      </main>


      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">10 Minute School</h3>
            <p className="text-gray-400">The Largest Online Classroom of Bangladesh</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

