
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Header
    'site.title': 'SloganForge AI',
    'nav.home': 'Accueil',
    'nav.pricing': 'Tarifs',
    'nav.faq': 'FAQ',
    'nav.login': 'Se connecter',
    'nav.signup': 'S\'inscrire',
    
    // Hero Section
    'hero.title': 'Votre slogan parfait,',
    'hero.subtitle': 'en 10 secondes chrono.',
    'hero.description': 'Laissez l\'IA travailler pour vous ! Générez des slogans professionnels et percutants pour votre entreprise en quelques clics.',
    'hero.cta': 'Essayer gratuitement',
    'hero.examples': 'Voir des exemples',
    
    // Generator Form
    'form.title': 'Générateur de Slogans',
    'form.company': 'Nom de l\'entreprise',
    'form.company.placeholder': 'ex: TechVision',
    'form.industry': 'Secteur d\'activité',
    'form.industry.placeholder': 'ex: Technologie, Restauration, Mode',
    'form.keywords': 'Mots-clés (séparés par des virgules)',
    'form.keywords.placeholder': 'ex: innovation, durabilité, qualité',
    'form.tone': 'Ton souhaité',
    'form.tone.professional': 'Professionnel',
    'form.tone.creative': 'Créatif',
    'form.tone.friendly': 'Amical',
    'form.tone.bold': 'Audacieux',
    'form.generate': 'Générer des slogans',
    'form.generating': 'Génération en cours...',
    
    // Results
    'results.title': 'Vos slogans générés',
    'results.refine': 'Affiner les résultats',
    'results.length.short': 'Court',
    'results.length.medium': 'Moyen',
    'results.length.long': 'Long',
    'results.rate': 'Noter ce slogan',
    'results.copy': 'Copier',
    'results.copied': 'Copié!',
    'results.customize': 'Personnaliser',
    'results.download': 'Télécharger en PDF',
    'results.empty': 'Complétez le formulaire et cliquez sur "Générer" pour voir vos slogans ici.',
    
    // PDF Export
    'pdf.title': 'Personnalisez votre slogan',
    'pdf.font': 'Police',
    'pdf.color': 'Couleur',
    'pdf.size': 'Taille',
    'pdf.logo': 'Ajouter un logo',
    'pdf.logo.upload': 'Téléverser',
    'pdf.preview': 'Aperçu',
    'pdf.download': 'Télécharger en PDF',
    'pdf.format': 'Format',
    'pdf.portrait': 'Portrait',
    'pdf.landscape': 'Paysage',
    
    // Features
    'features.title': 'Pourquoi utiliser SloganForge AI?',
    'features.ai.title': 'Propulsé par l\'IA',
    'features.ai.desc': 'Notre algorithme avancé génère des slogans uniques adaptés à votre entreprise.',
    'features.fast.title': 'Rapide et efficace',
    'features.fast.desc': 'Obtenez des dizaines d\'idées créatives en quelques secondes seulement.',
    'features.custom.title': 'Hautement personnalisable',
    'features.custom.desc': 'Personnalisez vos slogans et exportez-les en haute résolution.',
    'features.multilingual.title': 'Multilingue',
    'features.multilingual.desc': 'Générez des slogans en français et en anglais.',
    
    // Footer
    'footer.copyright': '© 2025 SloganForge AI. Tous droits réservés.',
    'footer.privacy': 'Politique de confidentialité',
    'footer.terms': 'Conditions d\'utilisation',
    'footer.contact': 'Contact',
  },
  en: {
    // Header
    'site.title': 'SloganForge AI',
    'nav.home': 'Home',
    'nav.pricing': 'Pricing',
    'nav.faq': 'FAQ',
    'nav.login': 'Login',
    'nav.signup': 'Sign up',
    
    // Hero Section
    'hero.title': 'Your perfect slogan,',
    'hero.subtitle': 'in just 10 seconds.',
    'hero.description': 'Let AI work for you! Generate professional and impactful slogans for your business in just a few clicks.',
    'hero.cta': 'Try for free',
    'hero.examples': 'See examples',
    
    // Generator Form
    'form.title': 'Slogan Generator',
    'form.company': 'Company Name',
    'form.company.placeholder': 'e.g. TechVision',
    'form.industry': 'Industry',
    'form.industry.placeholder': 'e.g. Technology, Food, Fashion',
    'form.keywords': 'Keywords (separated by commas)',
    'form.keywords.placeholder': 'e.g. innovation, sustainability, quality',
    'form.tone': 'Desired Tone',
    'form.tone.professional': 'Professional',
    'form.tone.creative': 'Creative',
    'form.tone.friendly': 'Friendly',
    'form.tone.bold': 'Bold',
    'form.generate': 'Generate Slogans',
    'form.generating': 'Generating...',
    
    // Results
    'results.title': 'Your Generated Slogans',
    'results.refine': 'Refine Results',
    'results.length.short': 'Short',
    'results.length.medium': 'Medium',
    'results.length.long': 'Long',
    'results.rate': 'Rate this slogan',
    'results.copy': 'Copy',
    'results.copied': 'Copied!',
    'results.customize': 'Customize',
    'results.download': 'Download as PDF',
    'results.empty': 'Complete the form and click "Generate" to see your slogans here.',
    
    // PDF Export
    'pdf.title': 'Customize your slogan',
    'pdf.font': 'Font',
    'pdf.color': 'Color',
    'pdf.size': 'Size',
    'pdf.logo': 'Add logo',
    'pdf.logo.upload': 'Upload',
    'pdf.preview': 'Preview',
    'pdf.download': 'Download as PDF',
    'pdf.format': 'Format',
    'pdf.portrait': 'Portrait',
    'pdf.landscape': 'Landscape',
    
    // Features
    'features.title': 'Why use SloganForge AI?',
    'features.ai.title': 'AI-Powered',
    'features.ai.desc': 'Our advanced algorithm generates unique slogans tailored to your business.',
    'features.fast.title': 'Fast & Efficient',
    'features.fast.desc': 'Get dozens of creative ideas in just seconds.',
    'features.custom.title': 'Highly Customizable',
    'features.custom.desc': 'Customize your slogans and export them in high resolution.',
    'features.multilingual.title': 'Multilingual',
    'features.multilingual.desc': 'Generate slogans in both English and French.',
    
    // Footer
    'footer.copyright': '© 2025 SloganForge AI. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.contact': 'Contact',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr'); // Default to French

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
