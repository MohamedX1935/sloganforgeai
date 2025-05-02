
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const CustomFooter: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold text-primary mb-4">{t('site.title')}</h3>
            <p className="text-gray-600 mb-4">
              Un service de génération de slogans propulsé par l'intelligence artificielle.
              <br />© 2025 IMBALL. Tous droits réservés.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61575531375963" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://x.com/imball_official" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/imball_official/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/imball-official-8aa3b3363" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Liens Légaux</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-gray-600 hover:text-primary transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-600 hover:text-primary transition-colors">
                  Conditions d'utilisation
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">IMBALL</li>
              <li className="text-gray-600">imballcontact@imball.work.gd</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CustomFooter;
