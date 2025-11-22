import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import { CONTENT, FACILITY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const content = CONTENT[language];

  const events = [
    {
      title: language === 'en' ? 'Morning Yoga' : 'प्रातःकालीन योगा',
      img: FACILITY_IMAGES.yoga,
      category: 'Daily Routine'
    },
    {
        title: language === 'en' ? 'Tree Plantation' : 'वृक्षारोपण',
        img: FACILITY_IMAGES.plantation,
        category: 'Environment'
    },
    {
        title: language === 'en' ? 'Cleanliness Drive' : 'स्वच्छता अभियान',
        img: "https://images.unsplash.com/photo-1604177091072-b7b677a077f6?q=80&w=800&auto=format&fit=crop",
        category: 'Social Service'
    },
    {
        title: language === 'en' ? 'Scouts & Guides' : 'स्काउट',
        img: "https://images.unsplash.com/photo-1526634332515-d55959e30445?q=80&w=800&auto=format&fit=crop",
        category: 'Extracurricular'
    },
    {
        title: language === 'en' ? 'Cultural Program' : 'सांस्कृतिक कार्यक्रम',
        img: "https://images.unsplash.com/photo-1516450360452-63124da0b701?q=80&w=800&auto=format&fit=crop",
        category: 'Events'
    },
    {
        title: language === 'en' ? 'Sports Day' : 'खेलो का आयोजन',
        img: FACILITY_IMAGES.sports,
        category: 'Sports'
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {content.sections.gallery}
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            {language === 'en' ? 'Glimpses of life at RAPV Saharanpur' : 'आर.ए.पी.वी. सहारनपुर में जीवन की झलकियां'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-lg shadow-md bg-white">
                    <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                         <img 
                            src={event.img} 
                            alt={event.title}
                            className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
                         />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                        <span className="text-xs font-bold text-gov-orange uppercase tracking-wider mb-1 block">
                            {event.category}
                        </span>
                        <h3 className="text-white text-xl font-bold">
                            {event.title}
                        </h3>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;