
import React, { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { generateSlogans, SloganFormData, Slogan } from '@/utils/sloganUtils';

interface SloganGeneratorProps {
  onSlogansGenerated: (slogans: Slogan[]) => void;
}

const SloganGenerator: React.FC<SloganGeneratorProps> = ({ onSlogansGenerated }) => {
  const { t } = useLanguage();
  const [isGenerating, setIsGenerating] = useState(false);
  const [formData, setFormData] = useState<SloganFormData>({
    companyName: '',
    industry: '',
    keywords: [],
    tone: 'professional'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.companyName || !formData.industry || formData.keywords.length === 0) {
      // Show validation error (in a real app, we'd use proper form validation)
      console.error('Please fill out all fields');
      return;
    }
    
    setIsGenerating(true);
    try {
      const slogans = await generateSlogans(formData);
      onSlogansGenerated(slogans);
    } catch (error) {
      console.error('Error generating slogans:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleKeywordsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const keywordsArray = e.target.value.split(',').map(keyword => keyword.trim()).filter(Boolean);
    setFormData({
      ...formData,
      keywords: keywordsArray
    });
  };

  return (
    <Card className="w-full max-w-4xl mx-auto border border-gray-200 shadow-md">
      <CardContent className="pt-6">
        <h2 className="text-2xl font-bold text-center mb-6 text-primary">{t('form.title')}</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="companyName">{t('form.company')}</Label>
              <Input
                id="companyName"
                placeholder={t('form.company.placeholder')}
                value={formData.companyName}
                onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                className="w-full"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="industry">{t('form.industry')}</Label>
              <Input
                id="industry"
                placeholder={t('form.industry.placeholder')}
                value={formData.industry}
                onChange={(e) => setFormData({...formData, industry: e.target.value})}
                className="w-full"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="keywords">{t('form.keywords')}</Label>
            <Input
              id="keywords"
              placeholder={t('form.keywords.placeholder')}
              onChange={handleKeywordsChange}
              className="w-full"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="tone">{t('form.tone')}</Label>
            <Select 
              onValueChange={(value) => setFormData({...formData, tone: value as SloganFormData['tone']})}
              defaultValue="professional"
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder={t('form.tone.professional')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="professional">{t('form.tone.professional')}</SelectItem>
                <SelectItem value="creative">{t('form.tone.creative')}</SelectItem>
                <SelectItem value="friendly">{t('form.tone.friendly')}</SelectItem>
                <SelectItem value="bold">{t('form.tone.bold')}</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Button 
            type="submit" 
            className="w-full py-6 text-lg bg-primary hover:bg-primary/90 transition-colors"
            disabled={isGenerating}
          >
            {isGenerating ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {t('form.generating')}
              </div>
            ) : (
              t('form.generate')
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SloganGenerator;
