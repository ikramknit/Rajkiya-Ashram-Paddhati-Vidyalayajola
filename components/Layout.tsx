import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, Globe, Phone, Mail, MapPin } from 'lucide-react';
import { LanguageContext } from '../App';
import { CONTENT } from '../constants';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { language, setLanguage } = useContext(LanguageContext);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
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

export default Layout;