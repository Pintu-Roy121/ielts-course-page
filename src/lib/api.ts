/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { TProduct } from '@/types/type';

const API_BASE_URL = 'https://api.10minuteschool.com/discovery-service/api/v1';

export async function fetchProductData(
  slug: string = 'ielts-course',
  lang: 'en' | 'bn' = 'en'
): Promise<TProduct> {
  try {
    const url = `${API_BASE_URL}/products/${slug}?lang=${lang}`;
    const response = await axios.get(url, {
      headers: {
        'X-TENMS-SOURCE-PLATFORM': 'web',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });

    const data = response.data;

    if (data.data) {
      return data.data;
    } else if (data.success && data.result) {
      return data.result;
    } else {
      return data;
    }

  } catch (error) {
    console.error('Error fetching product data:', error);
    return getMockProductData();
  }
}

// Same mock data fallback function
function getMockProductData(): any {
  return {
    slug: 'nothing',
    id: 1,
    title: 'IELTS Course by Munzereen Shahid',
    description: `
      <p>Get complete preparation of Academic IELTS and General Training IELTS in one course! Join our IELTS Course today to achieve your desired band score under the guidance of the best IELTS Instructor in the country.</p>
      <p>This comprehensive course includes 50+ video lectures, mock tests, and personalized guidance to help you achieve your target IELTS band score.</p>
    `,
    media: [
      {
        id: 1,
        type: 'youtube',
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        title: 'IELTS Course Introduction',
        description: 'Course overview and introduction'
      }
    ],
    checklist: [
      {
        id: 1,
        title: '50+ Video Lectures',
        description: 'Comprehensive video content covering all IELTS modules'
      },
      {
        id: 2,
        title: '38 Lecture Sheets',
        description: 'Detailed study materials and practice sheets'
      },
      {
        id: 3,
        title: '10 Reading & 10 Listening Mock Tests',
        description: 'Practice tests to simulate real exam experience'
      },
      {
        id: 4,
        title: 'Free Hardcopy Book',
        description: 'Physical book delivered to your doorstep'
      },
      {
        id: 5,
        title: 'Facebook Support Group',
        description: 'Access to exclusive support community'
      }
    ],
    seo: {
      title: 'Best IELTS Preparation Course by Munzereen Shahid [2025]',
      description: 'Get complete IELTS preparation with 50+ video lectures, mock tests, and expert guidance. Achieve your target band score with the best IELTS instructor in Bangladesh.',
      keywords: 'IELTS, IELTS preparation, IELTS course, Munzereen Shahid, band score'
    },
    cta_text: {
      primary: 'Enroll Now',
      secondary: 'Start Your IELTS Journey'
    },
    sections: [
      {
        id: 1,
        type: 'instructor',
        title: 'Course Instructor',
        content: {
          title: 'Munzereen Shahid',
          description: 'MSc (English), University of Oxford (UK); BA, MA (English), University of Dhaka; IELTS: 8.5',
          image: '/instructor-image.jpg'
        }
      },
      {
        id: 2,
        type: 'features',
        title: 'How the course is laid out',
        content: {
          items: [
            '50+ Video Lectures - IELTS Academic ও General Training এর Overview, Format ও প্রশ্নের ধরন নিয়ে in-depth আলোচনা',
            '38টি লেকচার শিট - Reading, Writing, Listening ও Speaking এর প্রতিটি প্রশ্নের উত্তর করার স্ট্র্যাটেজি এবং 600+ Vocabulary',
            'রিডিং এন্ড লিসিনিং মক টেস্ট - 10 Reading ও 10 Listening Mock Tests এর মাধ্যমে প্রস্তুতি যাচাই',
            'ডাউট সল্ভিং লাইভ ক্লাস - সাপ্তাহিক জুম ক্লাসে এক্সপার্ট টিচারের কাছে প্রবলেম সলভিং এর সুযোগ'
          ]
        }
      },
      {
        id: 3,
        type: 'pointers',
        title: 'What you will learn by doing the course',
        content: {
          items: [
            'Detailed rules and regulations of each module of the IELTS test',
            'Formats and strategies to ace the IELTS test',
            'Proper structure and essay type for scoring well in IELTS writing task 1 and 2',
            'Speaking accurately on any topic in the IELTS speaking test',
            'Time management strategy to get a good band score in the IELTS test',
            'Through the IELTS Reading and IELTS Listening Mock Tests, you will gain a real exam experience and a complete understanding of the Band Score in the IELTS exam.'
          ]
        }
      },
      {
        id: 4,
        type: 'about',
        title: 'Course Details',
        content: {
          description: `
            <h3>This IELTS course is for</h3>
            <ul>
              <li>Those who aim to go abroad for work or higher education</li>
              <li>Those who want to apply for permanent residency abroad</li>
              <li>Those who have appeared for the IELTS exam but are not satisfied with their band score</li>
              <li>Those who want to improve their reading, writing, listening, and speaking skills through IELTS for work, business, or personal interest</li>
            </ul>
            
            <h3>About the IELTS course</h3>
            <p>IELTS certificates are accepted in different higher education institutions in the USA and other English-speaking countries across the globe. This exam tests the ability of the candidates to speak, read, listen and write in English.</p>
            
            <p>Many of us are intimidated by English grammar as English is not our first language. Fortunately, IELTS is essentially a language-based test and not grammar-based. To achieve the desired score, you will require four English language skills: reading, writing, listening and speaking. The more proficient a person is in these four areas, the higher their score will be on the IELTS test.</p>
          `
        }
      },
      {
        id: 5,
        type: 'exclusive',
        title: 'Course Exclusive Features',
        content: {
          items: [
            'ভিডিও লেকচার - IELTS Academic ও General Training নিয়ে আলোচনা',
            'Reading ও Listening Mock Tests - 10 Reading & 10 Listening Mock Tests',
            'Computer-delivered IELTS পরীক্ষার এক্সপেরিয়েন্স',
            'উত্তর সাবমিট করার সাথে সাথেই রেজাল্ট'
          ]
        }
      }
    ]
  };
}
