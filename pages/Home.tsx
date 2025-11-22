import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../App';
import { CONTENT } from '../constants';
import { ArrowRight, BookOpen, Users, Trophy } from 'lucide-react';

const Home: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const content = CONTENT[language];

  const stats = [
    { 
        icon: <Users size={32} />, 
        value: '490', 
        label: language === 'en' ? 'Student Capacity' : 'छात्र क्षमता' 
    },
    { 
        icon: <BookOpen size={32} />, 
        value: '100%', 
        label: language === 'en' ? 'Free Education' : 'निःशुल्क शिक्षा' 
    },
    { 
        icon: <Trophy size={32} />, 
        value: '2008', 
        label: language === 'en' ? 'Established' : 'स्थापना' 
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative bg-gov-blue text-white py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1600&auto=format&fit=crop" 
            alt="School Building" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4 px-4 py-1 bg-gov-orange bg-opacity-90 rounded-full text-sm font-semibold tracking-wide uppercase shadow-lg">
            {language === 'en' ? 'Welcome to' : 'स्वागत है'}
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-md">
            {content.hero.title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light">
            {content.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/facilities" 
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gov-blue bg-white hover:bg-gray-100 md:text-lg shadow-md transition-transform transform hover:-translate-y-1"
            >
              {content.hero.cta}
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link 
              to="/academics" 
              className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:bg-opacity-10 md:text-lg transition-colors"
            >
              {content.nav.academics}
            </Link>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-10 lg:mb-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-gov-orange pl-4">
                {content.intro.title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {content.intro.text}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                {stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col items-center p-4 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="text-gov-orange mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-64 sm:h-96 rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1000&auto=format&fit=crop" 
                alt="Classroom" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Strip */}
      <section className="bg-gov-orange text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold mb-4">
                {language === 'en' ? 'Empowering Future Generations' : 'भावी पीढ़ियों को सशक्त बनाना'}
            </h3>
            <p className="max-w-2xl mx-auto text-orange-100">
                {language === 'en' 
                 ? 'Providing holistic development through academic excellence, physical fitness, and moral values.' 
                 : 'शैक्षणिक उत्कृष्टता, शारीरिक फिटनेस और नैतिक मूल्यों के माध्यम से समग्र विकास प्रदान करना।'}
            </p>
        </div>
      </section>
    </div>
  );
};

export default Home;