
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LanguageProvider, useLanguage } from '@/hooks/useLanguage';
import Header from '@/components/Header';
import SloganGenerator from '@/components/SloganGenerator';
import SloganResults from '@/components/SloganResults';
import CustomFooter from '@/components/CustomFooter';
import { Slogan } from '@/utils/sloganUtils';
import Adsense from 'react-adsense';

// Feature icons
const AIIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
  </svg>
);

const SpeedIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
);

const CustomIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
  </svg>
);

const LanguageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
  </svg>
);

const MainContent: React.FC = () => {
  const { t } = useLanguage();
  const [generatedSlogans, setGeneratedSlogans] = useState<Slogan[]>([]);

  const handleSlogansGenerated = (slogans: Slogan[]) => {
    setGeneratedSlogans(slogans);
    
    // Scroll to results
    setTimeout(() => {
      const resultsElement = document.getElementById('results-section');
      if (resultsElement) {
        resultsElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-2 text-primary">
                {t('hero.title')}
              </h1>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                {t('hero.subtitle')}
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                {t('hero.description')}
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-md text-lg"
                  onClick={() => {
                    const generatorElement = document.getElementById('generator-section');
                    if (generatorElement) {
                      generatorElement.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {t('hero.cta')}
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="px-8 py-6 rounded-md text-lg"
                  onClick={() => {
                    const examplesElement = document.getElementById('features-section');
                    if (examplesElement) {
                      examplesElement.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {t('hero.examples')}
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Generator Section */}
        <section id="generator-section" className="py-16">
          <div className="container mx-auto px-6">
            <SloganGenerator onSlogansGenerated={handleSlogansGenerated} />
            
            <div id="results-section" className="mt-8">
              <SloganResults slogans={generatedSlogans} />
            </div>
            {/* AdSense Placement */}
            {generatedSlogans.length > 0 && (
              <div className="my-8">
                <Adsense
                  client="ca-pub-5157014233026538" // Replace with your AdSense client ID
                  slot="f08c47fec0942fa0"              // Replace with your AdSense slot ID
                  style={{ display: 'block' }}
                  format="auto"
                  responsive="true"
                />
              </div>
            )}            
          </div>
        </section>
        
        {/* Features Section */}
        <section id="features-section" className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">
              {t('features.title')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-full text-primary mb-6">
                    <AIIcon />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{t('features.ai.title')}</h3>
                  <p className="text-gray-600">{t('features.ai.desc')}</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-green/10 p-4 rounded-full text-green mb-6">
                    <SpeedIcon />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{t('features.fast.title')}</h3>
                  <p className="text-gray-600">{t('features.fast.desc')}</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-gold/10 p-4 rounded-full text-gold mb-6">
                    <CustomIcon />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{t('features.custom.title')}</h3>
                  <p className="text-gray-600">{t('features.custom.desc')}</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-full text-primary mb-6">
                    <LanguageIcon />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{t('features.multilingual.title')}</h3>
                  <p className="text-gray-600">{t('features.multilingual.desc')}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Example Slogans Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-green/10 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-center mb-8 text-primary">Exemples de Slogans</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-md shadow">
                  <div className="text-sm text-gray-500 mb-1">Tech Startup</div>
                  <div className="text-lg font-medium">"Innovation Beyond Boundaries"</div>
                </div>
                
                <div className="bg-white p-4 rounded-md shadow">
                  <div className="text-sm text-gray-500 mb-1">Eco-friendly Brand</div>
                  <div className="text-lg font-medium">"Greener Today, Better Tomorrow"</div>
                </div>
                
                <div className="bg-white p-4 rounded-md shadow">
                  <div className="text-sm text-gray-500 mb-1">Luxury Boutique</div>
                  <div className="text-lg font-medium">"Elegance in Every Detail"</div>
                </div>
                
                <div className="bg-white p-4 rounded-md shadow">
                  <div className="text-sm text-gray-500 mb-1">Restaurant Chain</div>
                  <div className="text-lg font-medium">"Taste the Difference, Feel the Passion"</div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Button 
                  onClick={() => {
                    const generatorElement = document.getElementById('generator-section');
                    if (generatorElement) {
                      generatorElement.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="bg-primary hover:bg-primary/90"
                >
                  Créer votre slogan maintenant
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <CustomFooter />
    </div>
  );
};

// Wrap with LanguageProvider
const Index: React.FC = () => {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
};

export default Index;
