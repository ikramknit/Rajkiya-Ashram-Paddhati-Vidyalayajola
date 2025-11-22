import React, { useState, createContext, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, Globe, Phone, Mail, MapPin, ArrowRight, BookOpen, Users, Trophy, Monitor, Utensils, Book, FlaskConical, Home as HomeIcon, Trees } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// --- 1. Types ---

type Language = 'en' | 'hi';

interface StaffMember {
  id: number;
  name: string;
  designation: string;
  subject: string;
}

interface ExamResult {
  year: string;
  class10: number;
  class12: number;
  toppers10: string[];
  toppers12: string[];
}

interface Content {
  nav: {
    home: string;
    about: string;
    facilities: string;
    academics: string;
    gallery: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  intro: {
    title: string;
    text: string;
  };
  sections: {
    facilities: string;
    results: string;
    staff: string;
    gallery: string;
  };
}

// --- 2. Constants & Data ---

const CONTENT: Record<'en' | 'hi', Content> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      facilities: 'Facilities',
      academics: 'Academics',
      gallery: 'Gallery',
      contact: 'Contact',
    },
    hero: {
      title: 'Rajkiya Ashram Paddhati Vidyalaya',
      subtitle: 'Social Welfare Department, Uttar Pradesh | Dandoli, Nagal, Saharanpur',
      cta: 'Explore Facilities',
    },
    intro: {
      title: 'Introduction',
      text: 'Established in 2008 and operational since 2011, Rajkiya Ashram Paddhati Vidyalaya is a residential school operated by the Social Welfare Department. With a capacity of 490 students, we are dedicated to providing high-quality education to socially and economically underprivileged children from rural and urban areas. We provide free uniforms, housing, daily necessities, study materials, and computer facilities.',
    },
    sections: {
      facilities: 'Our Facilities',
      results: 'Academic Performance',
      staff: 'Our Faculty',
      gallery: 'Activities & Events',
    },
  },
  hi: {
    nav: {
      home: 'मुख्य पृष्ठ',
      about: 'परिचय',
      facilities: 'सुविधाएं',
      academics: 'शैक्षणिक',
      gallery: 'गैलरी',
      contact: 'संपर्क',
    },
    hero: {
      title: 'राजकीय आश्रम पद्धति विद्यालय',
      subtitle: 'समाज कल्याण विभाग, उत्तर प्रदेश | डंडोली, नागल, सहारनपुर',
      cta: 'सुविधाएं देखें',
    },
    intro: {
      title: 'परिचय',
      text: 'वर्ष 2008 में प्रारम्भ तथा 2011 में संचालित, राजकीय आश्रम पद्धति विद्यालय समाज कल्याण विभाग द्वारा संचालित एक आवासीय विद्यालय है। 490 छात्रों की क्षमता वाला यह विद्यालय सामाजिक और आर्थिक रूप से कमजोर बच्चों को उत्कृष्ट शिक्षा प्रदान करने के लिए समर्पित है। हम निःशुल्क यूनिफार्म, आवास, दैनिक प्रयोग की वस्तुएं, अध्ययन सामग्री और कंप्यूटर सुविधा उपलब्ध कराते हैं।',
    },
    sections: {
      facilities: 'हमारी सुविधाएं',
      results: 'परीक्षा परिणाम',
      staff: 'शिक्षण स्टाफ',
      gallery: 'गतिविधियां एवं कार्यक्रम',
    },
  },
};

const STAFF_DATA: StaffMember[] = [
  { id: 1, name: 'Dr. Dinesh Kumar', designation: 'Principal', subject: 'History' },
  { id: 2, name: 'Mr. Pawan Kumar', designation: 'Lecturer', subject: 'Biology' },
  { id: 3, name: 'Mr. Sanjeev Kumar Saundarya', designation: 'Lecturer', subject: 'Sociology' },
  { id: 4, name: 'Mr. Khalik Ahmed', designation: 'Lecturer', subject: 'Economics' },
  { id: 5, name: 'Mr. Anil Kumar', designation: 'Lecturer', subject: 'Chemistry' },
  { id: 6, name: 'Mr. Ashu Kumar', designation: 'Asst. Teacher', subject: 'Science' },
  { id: 7, name: 'Mr. Hardeep Singh', designation: 'Asst. Teacher', subject: 'Physical Education' },
  { id: 8, name: 'Mrs. Priyanka Sharma', designation: 'Asst. Teacher', subject: 'Hindi' },
  { id: 9, name: 'Mrs. Karuna Rani', designation: 'Asst. Teacher', subject: 'Social Science' },
  { id: 10, name: 'Mrs. Priyanka', designation: 'Asst. Teacher', subject: 'English' },
  { id: 11, name: 'Mr. Rajnish Kumar', designation: 'Asst. Teacher', subject: 'Social Science' },
  { id: 12, name: 'Mrs. Priyanka Tyagi', designation: 'Asst. Teacher', subject: 'English' },
];

const EXAM_RESULTS: ExamResult[] = [
  { year: '2012-13', class10: 100, class12: 100, toppers10: ['Ashutosh Raj (78.5%)'], toppers12: ['Govinda (74.33%)'] },
  { year: '2013-14', class10: 100, class12: 0, toppers10: ['Nitin Kumar (83.67%)'], toppers12: ['NA'] },
  { year: '2014-15', class10: 100, class12: 100, toppers10: ['Vibhor (85.17%)'], toppers12: ['Ajeet (69.16%)'] },
  { year: '2015-16', class10: 100, class12: 100, toppers10: ['Vishal Saini (79.33%)'], toppers12: ['Arshad (56.70%)'] },
  { year: '2016-17', class10: 96.15, class12: 91.67, toppers10: ['Ishant (84.50%)'], toppers12: ['Virendra (66.50%)'] },
  { year: '2017-18', class10: 100, class12: 100, toppers10: ['Manish Saini (76.00%)'], toppers12: ['Vishal Saini (68.16%)'] },
  { year: '2018-19', class10: 88.88, class12: 77.77, toppers10: ['Abhishek (67.50%)'], toppers12: ['Tanveer (61.83%)'] },
  { year: '2019-20', class10: 61.11, class12: 66.66, toppers10: ['Adil Chaudhary (71.20%)'], toppers12: ['Junaid (76.16%)'] },
  { year: '2020-21', class10: 100, class12: 100, toppers10: ['Sonu (75.20%)'], toppers12: ['Vikas Kumar (55.67%)'] },
  { year: '2021-22', class10: 100, class12: 100, toppers10: ['Akash Kumar (75.60%)'], toppers12: ['Sonu Saini (70.16%)'] },
  { year: '2022-23', class10: 80.76, class12: 87.50, toppers10: ['Vishal Sharma (65.60%)'], toppers12: ['Ajay (75.83%)'] },
  { year: '2023-24', class10: 53.33, class12: 100, toppers10: ['Nitin Kumar (70.20%)'], toppers12: ['Shivam (70.80%)'] },
];

const FACILITY_IMAGES = {
  yoga: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=800&auto=format&fit=crop",
  lab: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop",
  library: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop",
  sports: "https://images.unsplash.com/photo-1562771242-a02d9090c90c?q=80&w=800&auto=format&fit=crop",
  hostel: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=800&auto=format&fit=crop",
  mess: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop",
  smartClass: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
  plantation: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop",
};

// --- 3. Context ---

interface LanguageContextType {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
});

// --- 4. Components ---

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { language, setLanguage } = useContext(LanguageContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const t = CONTENT[language].nav;

  const navLinks = [
    { path: '/', label: t.home },
    { path: '/facilities', label: t.facilities },
    { path: '/academics', label: t.academics },
    { path: '/gallery', label: t.gallery },
  ];

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'hi' : 'en'));
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans ${language === 'hi' ? 'font-hindi' : ''}`}>
      {/* Top Bar */}
      <div className="bg-gov-blue text-white text-xs sm:text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="hidden sm:inline">Government of Uttar Pradesh</span>
            <span className="sm:hidden">Govt. of UP</span>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-1 hover:text-gov-orange transition-colors font-bold"
            >
              <Globe size={14} />
              <span>{language === 'en' ? 'हिंदी' : 'English'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-gov-orange p-2 rounded-full text-white">
                <GraduationCap size={28} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-900 text-sm sm:text-lg leading-tight">
                  {language === 'en' ? 'Rajkiya Ashram Paddhati Vidyalaya' : 'राजकीय आश्रम पद्धति विद्यालय'}
                </span>
                <span className="text-xs text-gray-500">
                  {language === 'en' ? 'Saharanpur, Uttar Pradesh' : 'सहारनपुर, उत्तर प्रदेश'}
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    location.pathname === link.path
                      ? 'text-gov-orange border-b-2 border-gov-orange'
                      : 'text-gray-700 hover:text-gov-blue'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-gov-orange p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === link.path
                      ? 'bg-orange-50 text-gov-orange'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gov-blue'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gov-orange">
              {language === 'en' ? 'About Us' : 'हमारे बारे में'}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {CONTENT[language].intro.text.substring(0, 150)}...
            </p>
          </div>

          {/* Links */}
          <div>
             <h3 className="text-lg font-semibold mb-4 text-gov-orange">
              {language === 'en' ? 'Quick Links' : 'महत्वपूर्ण लिंक'}
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
               <li><Link to="/facilities" className="hover:text-white">{t.facilities}</Link></li>
               <li><Link to="/academics" className="hover:text-white">{t.academics}</Link></li>
               <li><Link to="/gallery" className="hover:text-white">{t.gallery}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gov-orange">
              {language === 'en' ? 'Contact Us' : 'संपर्क करें'}
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>Dandoli, Nagal, Saharanpur, Uttar Pradesh</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="flex-shrink-0" />
                <span>+91 12345 67890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="flex-shrink-0" />
                <span>info@rapv-saharanpur.in</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Rajkiya Ashram Paddhati Vidyalaya. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

// --- 5. Pages ---

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
      desc: language === 'en 
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

const Academics: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const content = CONTENT[language];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Results Section */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">{content.sections.results}</h2>
            <p className="mt-2 text-gray-500">
              {language === 'en' ? 'Performance of Class 10 and 12 over the years (Pass %)' : 'विगत वर्षों में कक्षा 10 और 12 का प्रदर्शन (उत्तीर्ण %)'}
            </p>
          </div>

          <div className="bg-white p-4 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={EXAM_RESULTS}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                  <XAxis dataKey="year" tick={{fontSize: 12}} />
                  <YAxis tick={{fontSize: 12}} domain={[0, 100]} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                  />
                  <Legend />
                  <Bar dataKey="class10" name={language === 'en' ? 'Class 10' : 'कक्षा 10'} fill="#FF9933" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="class12" name={language === 'en' ? 'Class 12' : 'कक्षा 12'} fill="#000080" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

           {/* Toppers List (Last 3 Years) */}
           <div className="mt-10 grid gap-6 md:grid-cols-2">
                {EXAM_RESULTS.slice(-3).reverse().map((res) => (
                    <div key={res.year} className="bg-gray-50 rounded-lg p-6 border-l-4 border-gov-blue">
                        <h4 className="font-bold text-lg mb-2 text-gray-800">{res.year} {language === 'en' ? 'Toppers' : 'टॉपर'}</h4>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <span className="font-semibold text-gov-orange block">Class 10</span>
                                {res.toppers10.map((t, i) => <div key={i} className="text-gray-600">{t}</div>)}
                            </div>
                            <div>
                                <span className="font-semibold text-gov-blue block">Class 12</span>
                                {res.toppers12.map((t, i) => <div key={i} className="text-gray-600">{t}</div>)}
                            </div>
                        </div>
                    </div>
                ))}
           </div>
        </div>

        {/* Staff Section */}
        <div>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">{content.sections.staff}</h2>
            <div className="mt-4 max-w-xs mx-auto h-1 bg-gov-orange rounded"></div>
          </div>

          <div className="bg-white overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    {language === 'en' ? 'Name' : 'नाम'}
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    {language === 'en' ? 'Designation' : 'पदनाम'}
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    {language === 'en' ? 'Subject' : 'विषय'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {STAFF_DATA.map((person) => (
                  <tr key={person.id} className="hover:bg-gray-50 transition-colors">
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      {person.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {person.designation}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {person.subject}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

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

// --- 6. App Entry ---

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </Layout>
      </HashRouter>
    </LanguageContext.Provider>
  );
};

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
