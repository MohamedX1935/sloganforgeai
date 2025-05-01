
import React from 'react';
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/hooks/useLanguage';

const Header: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();

  return (
    <header className="w-full bg-white shadow-sm py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-primary">{t('site.title')}</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-600 hover:text-primary transition-colors">
            {t('nav.home')}
          </a>
          <a href="#pricing" className="text-gray-600 hover:text-primary transition-colors">
            {t('nav.pricing')}
          </a>
          <a href="#faq" className="text-gray-600 hover:text-primary transition-colors">
            {t('nav.faq')}
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
            className="text-sm"
          >
            {language === 'fr' ? 'EN' : 'FR'}
          </Button>
          
          <Button variant="ghost" className="md:hidden text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
