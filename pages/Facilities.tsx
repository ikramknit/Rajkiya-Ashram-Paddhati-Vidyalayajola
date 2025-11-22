import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import { CONTENT, FACILITY_IMAGES } from '../constants';
import { Monitor, Utensils, Book, FlaskConical, Home as HomeIcon, Trees } from 'lucide-react';

const Facilities: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const content = CONTENT[language];

  const facilitiesList = [
    {
      title: language === 'en' ? 'Digital Education (Smart Class)' : 'डिजिटल शिक्षा (स्मार्ट क्लास)',
      desc: language === 'en' 
        ? 'Modern education through projectors, Tab Labs, and Computer Labs. Online education via Khan Academy and Embibe.' 
        : 'प्रोजेक्टर, टैब लैब और कंप्यूटर लैब के माध्यम से आधुनिक शिक्षा। खान अकादमी और एमबाइब के माध्यम से ऑनलाइन शिक्षा।',
      icon: <Monitor className="w-6 h-6" />,
      image: FACILITY_IMAGES.smartClass
    },
    {
      title: language === 'en' ? 'Science Laboratories' : 'विज्ञान प्रयोगशाला',
      desc: language === 'en' 
        ? 'Fully equipped Physics, Chemistry, and Biology laboratories for practical learning.' 
        : 'व्यावहारिक सीखने के लिए पूरी तरह से सुसज्जित भौतिकी, रसायन विज्ञान और जीव विज्ञान प्रयोगशालाएँ।',
      icon: <FlaskConical className="w-6 h-6" />,
      image: FACILITY_IMAGES.lab
    },
    {
      title: language === 'en' ? 'Library' : 'पुस्तकालय',
      desc: language === 'en' 
        ? 'A dedicated space to foster reading habits and knowledge enhancement among students.' 
        : 'छात्रों के बीच पढ़ने की आदतों और ज्ञान वृद्धि को बढ़ावा देने के लिए एक समर्पित स्थान।',
      icon: <Book className="w-6 h-6" />,
      image: FACILITY_IMAGES.library
    },
    {
      title: language === 'en' ? 'Hostel Facilities' : 'आवासीय व्यवस्था',
      desc: language === 'en' 
        ? 'Separate residential facilities for boys with a capacity of 490 students.' 
        : '490 छात्रों की क्षमता वाले लड़कों के लिए अलग आवासीय सुविधाएं।',
      icon: <HomeIcon className="w-6 h-6" />,
      image: FACILITY_IMAGES.hostel
    },
    {
      title: language === 'en' ? 'Mess' : 'मेस व्यवस्था',
      desc: language === 'en' 
        ? 'Nutritious food served in a dining hall with a focus on hygiene and table manners.' 
        : 'स्वच्छता और टेबल शिष्टाचार पर ध्यान देने के साथ डाइनिंग हॉल में पौष्टिक भोजन परोसा जाता है।',
      icon: <Utensils className="w-6 h-6" />,
      image: FACILITY_IMAGES.mess
    },
    {
      title: language === 'en' ? 'Environment' : 'वातावरण',
      desc: language === 'en' 
        ? 'Tree plantation drives and cleanliness campaigns to maintain a healthy green campus.' 
        : 'स्वस्थ हरे परिसर को बनाए रखने के लिए वृक्षारोपण अभियान और स्वच्छता अभियान।',
      icon: <Trees className="w-6 h-6" />,
      image: FACILITY_IMAGES.plantation
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {content.sections.facilities}
          </h2>
          <div className="mt-4 max-w-2xl mx-auto h-1 bg-gov-orange w-24 rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilitiesList.map((facility, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
              <div className="h-48 overflow-hidden relative group">
                <img 
                  src={facility.image} 
                  alt={facility.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md text-gov-blue">
                  {facility.icon}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {facility.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  {facility.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facilities;