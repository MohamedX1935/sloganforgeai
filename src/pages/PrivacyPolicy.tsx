
import React from 'react';
import { LanguageProvider } from '@/hooks/useLanguage';
import Header from '@/components/Header';
import CustomFooter from '@/components/CustomFooter';
import Adsense from 'react-adsense';

const PrivacyPolicyContent: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-primary">Politique de Confidentialité</h1>
            
            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
              <p className="mb-4">
                Chez IMBALL, propriétaire de SloganForge AI, nous prenons très au sérieux la protection de vos données personnelles. 
                Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations lorsque 
                vous utilisez notre service.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Collecte d'Informations</h2>
              <p className="mb-4">
                Lorsque vous utilisez SloganForge AI, nous pouvons collecter les informations suivantes :
              </p>
              <ul className="list-disc ml-6 mb-4">
                <li>Les données que vous saisissez dans notre générateur de slogans (nom d'entreprise, secteur d'activité, etc.)</li>
                <li>Des informations sur votre navigateur et appareil</li>
                <li>Adresse IP et données de localisation approximative</li>
                <li>Les slogans générés et vos préférences</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Utilisation des Informations</h2>
              <p className="mb-4">
                Nous utilisons les informations collectées pour :
              </p>
              <ul className="list-disc ml-6 mb-4">
                <li>Fournir, exploiter et améliorer notre service</li>
                <li>Améliorer la qualité des slogans générés</li>
                <li>Comprendre comment les utilisateurs interagissent avec notre service</li>
                <li>Détecter et prévenir les fraudes</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Protection des Données</h2>
              <p className="mb-4">
                IMBALL met en œuvre des mesures de sécurité appropriées pour protéger vos informations personnelles contre tout accès, 
                utilisation, divulgation, modification ou destruction non autorisés.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Cookies et Technologies Similaires</h2>
              <p className="mb-4">
                Nous utilisons des cookies et des technologies similaires pour améliorer votre expérience sur notre site, 
                analyser notre trafic et personnaliser le contenu.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Partage d'Informations</h2>
              <p className="mb-4">
                Nous ne vendons pas vos données personnelles. Nous pouvons partager certaines informations avec :
              </p>
              <ul className="list-disc ml-6 mb-4">
                <li>Nos fournisseurs de services qui nous aident à exploiter notre service</li>
                <li>Des autorités légales si nous y sommes légalement contraints</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Vos Droits</h2>
              <p className="mb-4">
                Selon votre juridiction, vous pouvez avoir certains droits concernant vos données personnelles, 
                notamment le droit d'accéder, de rectifier ou de supprimer vos données.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Modifications de cette Politique</h2>
              <p className="mb-4">
                Nous pouvons mettre à jour cette politique de confidentialité périodiquement. 
                Nous vous encourageons à consulter régulièrement cette page pour rester informé des éventuelles modifications.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Contact</h2>
              <p className="mb-4">
                Si vous avez des questions concernant notre politique de confidentialité, veuillez nous contacter à l'adresse suivante : 
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
                  client="ca-pub-5157014233026538" // Replace with your AdSense client ID
                  slot="f08c47fec0942fa0"              // Replace with your AdSense slot ID
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

const PrivacyPolicy: React.FC = () => {
  return (
    <LanguageProvider>
      <PrivacyPolicyContent />
    </LanguageProvider>
  );
};

export default PrivacyPolicy;
