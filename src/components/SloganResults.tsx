
import React, { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Slogan, rateSloganMock } from '@/utils/sloganUtils';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import PDFExport from './PDFExport';

interface SloganResultsProps {
  slogans: Slogan[];
}

const SloganResults: React.FC<SloganResultsProps> = ({ slogans }) => {
  const { t } = useLanguage();
  const [selectedSlogan, setSelectedSlogan] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const filterSlogans = (length: string) => {
    if (length === "all") return slogans;
    
    return slogans.filter(slogan => {
      const words = slogan.text.split(' ').length;
      if (length === "short") return words <= 4;
      if (length === "medium") return words > 4 && words <= 8;
      if (length === "long") return words > 8;
      return true;
    });
  };

  const handleCopy = (slogan: string, id: string) => {
    navigator.clipboard.writeText(slogan);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleRating = (id: string, rating: number) => {
    rateSloganMock(id, rating);
  };

  const openCustomizeDialog = (slogan: string) => {
    setSelectedSlogan(slogan);
    setDialogOpen(true);
  };

  const closeCustomizeDialog = () => {
    setDialogOpen(false);
  };

  if (slogans.length === 0) {
    return (
      <Card className="w-full max-w-4xl mx-auto mt-8 border border-gray-200">
        <CardContent className="flex flex-col items-center justify-center py-16">
          <p className="text-gray-500 text-center">{t('results.empty')}</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      <Card className="w-full max-w-4xl mx-auto mt-8 border border-gray-200">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-primary mb-2 md:mb-0">
              {t('results.title')} ({filterSlogans(activeTab).length})
            </h2>
            
            <div className="space-x-2">
              <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="short">{t('results.length.short')}</TabsTrigger>
                  <TabsTrigger value="medium">{t('results.length.medium')}</TabsTrigger>
                  <TabsTrigger value="long">{t('results.length.long')}</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
          
          <div className="space-y-4">
            {filterSlogans(activeTab).map((slogan) => (
              <div 
                key={slogan.id} 
                className="p-4 border border-gray-200 rounded-md hover:shadow-md transition-shadow bg-white"
              >
                <p className="text-lg font-medium mb-3">{slogan.text}</p>
                
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button 
                        key={star}
                        onClick={() => handleRating(slogan.id, star)}
                        className="text-gray-300 hover:text-gold"
                      >
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 24 24" 
                          fill={slogan.rating && star <= slogan.rating ? "#D4AF37" : "currentColor"}
                          className="w-5 h-5"
                        >
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                      </button>
                    ))}
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleCopy(slogan.text, slogan.id)}
                      className="text-xs"
                    >
                      {copiedId === slogan.id ? t('results.copied') : t('results.copy')}
                    </Button>
                    
                    <Button 
                      variant="default" 
                      size="sm" 
                      onClick={() => openCustomizeDialog(slogan.text)}
                      className="text-xs bg-primary hover:bg-primary/90"
                    >
                      {t('results.customize')}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none shadow-none">
          <DialogTitle className="sr-only">Personnaliser le Slogan</DialogTitle>
          {selectedSlogan && (
            <PDFExport 
              slogan={selectedSlogan} 
              onClose={closeCustomizeDialog} 
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SloganResults;
