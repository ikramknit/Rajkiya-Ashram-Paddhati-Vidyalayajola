import React, { useState, createContext } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Language } from './types';
import Layout from './components/Layout';
import Home from './pages/Home';
import Facilities from './pages/Facilities';
import Academics from './pages/Academics';
import Gallery from './pages/Gallery';

interface LanguageContextType {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
});

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </Layout>
      </Router>
    </LanguageContext.Provider>
  );
};

export default App;