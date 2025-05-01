
import React, { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { downloadSloganAsPDF } from '@/utils/sloganUtils';

interface PDFExportProps {
  slogan: string;
  onClose: () => void;
}

const PDFExport: React.FC<PDFExportProps> = ({ slogan, onClose }) => {
  const { t } = useLanguage();
  const [font, setFont] = useState('poppins');
  const [color, setColor] = useState('#2A5CAA');
  const [size, setSize] = useState('48');
  const [format, setFormat] = useState<'portrait' | 'landscape'>('portrait');
  const [logo, setLogo] = useState<File | null>(null);

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setLogo(files[0]);
    }
  };

  const handleDownload = () => {
    downloadSloganAsPDF(slogan, {
      font,
      color,
      size,
      format,
      logo: logo || undefined,
    });
  };

  return (
    <Card className="w-full max-w-4xl mx-auto mt-8 border border-gray-200 shadow-md">
      <CardContent className="pt-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-primary">{t('pdf.title')}</h2>
          <Button variant="ghost" onClick={onClose} size="sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="font-select">{t('pdf.font')}</Label>
              <Select value={font} onValueChange={setFont}>
                <SelectTrigger id="font-select">
                  <SelectValue placeholder="Select font" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="poppins">Poppins</SelectItem>
                  <SelectItem value="inter">Inter</SelectItem>
                  <SelectItem value="georgia">Georgia</SelectItem>
                  <SelectItem value="arial">Arial</SelectItem>
                  <SelectItem value="verdana">Verdana</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="color-picker">{t('pdf.color')}</Label>
              <div className="flex items-center space-x-3">
                <Input
                  type="color"
                  id="color-picker"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="w-12 h-10 p-1 overflow-hidden"
                />
                <Input
                  type="text"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="flex-1"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="size-slider">{t('pdf.size')} ({size}px)</Label>
              <Input
                type="range"
                id="size-slider"
                min="16"
                max="96"
                step="2"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="w-full"
              />
            </div>
            
            <div className="space-y-2">
              <Label>{t('pdf.format')}</Label>
              <div className="flex space-x-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="portrait"
                    name="format"
                    value="portrait"
                    checked={format === 'portrait'}
                    onChange={() => setFormat('portrait')}
                    className="mr-2"
                  />
                  <Label htmlFor="portrait">{t('pdf.portrait')}</Label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="landscape"
                    name="format"
                    value="landscape"
                    checked={format === 'landscape'}
                    onChange={() => setFormat('landscape')}
                    className="mr-2"
                  />
                  <Label htmlFor="landscape">{t('pdf.landscape')}</Label>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="logo-upload">{t('pdf.logo')}</Label>
              <div className="flex items-center space-x-2">
                <Input
                  id="logo-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleLogoChange}
                  className="flex-1"
                />
              </div>
            </div>
          </div>
          
          <div className="flex flex-col">
            <div className="bg-gray-100 border border-gray-200 rounded-lg flex-1 flex items-center justify-center p-8">
              <div className="max-w-full overflow-hidden">
                {logo && (
                  <div className="flex justify-center mb-4">
                    <img 
                      src={URL.createObjectURL(logo)} 
                      alt="Logo"
                      className="h-16 object-contain" 
                    />
                  </div>
                )}
                <h3 
                  className={`text-center break-words`}
                  style={{ 
                    fontFamily: font === 'poppins' ? 'Poppins, sans-serif' : 
                              font === 'inter' ? 'Inter, sans-serif' : font,
                    color: color,
                    fontSize: `${size}px`,
                    lineHeight: '1.2',
                    maxWidth: '100%',
                  }}
                >
                  {slogan}
                </h3>
              </div>
            </div>
            
            <Button
              onClick={handleDownload}
              className="mt-6 py-6 text-lg bg-green hover:bg-green/90"
            >
              {t('pdf.download')}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PDFExport;
