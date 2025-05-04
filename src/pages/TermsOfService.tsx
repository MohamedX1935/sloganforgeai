
import React from 'react';
import { LanguageProvider } from '@/hooks/useLanguage';
import Header from '@/components/Header';
import CustomFooter from '@/components/CustomFooter';
import Adsense from 'react-adsense';
import { Helmet } from 'react-helmet';

const TermsOfServiceContent: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5157014233026538" crossOrigin="anonymous"></script>
      </Helmet>
      
      <Header />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-primary">Conditions d'Utilisation</h1>
            
            <div className="prose max-w-none">
              <p className="mb-4">
                Bienvenue sur SloganForge AI, propriété de IMBALL. En utilisant notre service, vous acceptez ces conditions d'utilisation. 
                Veuillez les lire attentivement.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptation des Conditions</h2>
              <p className="mb-4">
                En accédant ou en utilisant SloganForge AI, vous acceptez d'être lié par ces conditions d'utilisation. 
                Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre service.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Description du Service</h2>
              <p className="mb-4">
                SloganForge AI est un générateur de slogans basé sur l'intelligence artificielle qui crée des slogans personnalisés 
                pour les entreprises et les marques. Le service permet également d'exporter les slogans générés au format PDF.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Propriété Intellectuelle</h2>
              <p className="mb-4">
                Les slogans générés par SloganForge AI sont destinés à l'usage des utilisateurs. Cependant, IMBALL ne garantit 
                pas que les slogans générés ne violent pas les droits de propriété intellectuelle de tiers. Les utilisateurs 
                sont responsables de vérifier la disponibilité des slogans avant utilisation commerciale.
              </p>
              <p className="mb-4">
                IMBALL conserve tous les droits, titres et intérêts sur la plateforme SloganForge AI, y compris tous les logiciels, 
                idées, concepts, marques, et contenus créés par notre équipe.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Limitation de Responsabilité</h2>
              <p className="mb-4">
                SloganForge AI est fourni "tel quel" sans garantie d'aucune sorte. IMBALL ne sera pas responsable des dommages 
                directs, indirects, accessoires, spéciaux ou consécutifs résultant de l'utilisation ou de l'impossibilité d'utiliser 
                notre service.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Utilisation Acceptable</h2>
              <p className="mb-4">
                Vous acceptez de ne pas utiliser SloganForge AI pour :
              </p>
              <ul className="list-disc ml-6 mb-4">
                <li>Créer ou promouvoir du contenu illégal, offensant, diffamatoire, ou discriminatoire</li>
                <li>Perturber ou surcharger nos serveurs ou réseaux</li>
                <li>Accéder à des parties de notre service auxquelles vous n'êtes pas autorisé</li>
                <li>Collecter des données utilisateurs sans leur consentement explicite</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Modifications du Service</h2>
              <p className="mb-4">
                IMBALL se réserve le droit de modifier ou d'interrompre temporairement ou définitivement SloganForge AI 
                (ou toute partie de celui-ci) avec ou sans préavis, sans encourir de responsabilité envers vous ou un tiers.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Juridiction et Loi Applicable</h2>
              <p className="mb-4">
                Ces conditions sont régies par les lois françaises. Tout litige découlant de ou lié à ces conditions 
                sera soumis à la juridiction exclusive des tribunaux français.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact</h2>
              <p className="mb-4">
                Si vous avez des questions concernant ces conditions d'utilisation, veuillez nous contacter à l'adresse suivante :
                <br />
                <strong>IMBALL</strong>
                <br />
                contact@imball-official.com
              </p>
              
              <p className="mt-8 text-sm text-gray-500">
                Dernière mise à jour : 2 Mai 2025
              </p>
            </div>
            {/* AdSense Placement */}
            <div className="my-8">
              <Adsense
                client="ca-pub-5157014233026538"
                slot="f08c47fec0942fa0"
                style={{ display: 'block' }}
                format="auto"
                responsive="true"
              />
            </div>             
          </div>
        </div>
      </main>
      
      <CustomFooter />
    </div>
  );
};

const TermsOfService: React.FC = () => {
  return (
    <LanguageProvider>
      <TermsOfServiceContent />
    </LanguageProvider>
  );
};

export default TermsOfService;
