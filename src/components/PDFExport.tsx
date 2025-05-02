
import React, { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { downloadSloganAsPDF } from '@/utils/sloganUtils';
import { Check, Download, Palette, Image, Font, AlignCenter, AlignLeft, AlignRight } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PDFExportProps {
  slogan: string;
  onClose: () => void;
}

const fontOptions = [
  { value: 'poppins', label: 'Poppins' },
  { value: 'inter', label: 'Inter' },
  { value: 'georgia', label: 'Georgia' },
  { value: 'arial', label: 'Arial' },
  { value: 'verdana', label: 'Verdana' },
  { value: 'montserrat', label: 'Montserrat' },
  { value: 'roboto', label: 'Roboto' },
  { value: 'merriweather', label: 'Merriweather' }
];

const colorPresets = [
  { value: '#2A5CAA', label: 'Blue' },
  { value: '#27AE60', label: 'Green' },
  { value: '#E74C3C', label: 'Red' },
  { value: '#F39C12', label: 'Orange' },
  { value: '#9B59B6', label: 'Purple' },
  { value: '#34495E', label: 'Dark Blue' },
  { value: '#000000', label: 'Black' },
  { value: '#D4AF37', label: 'Gold' },
];

const alignmentOptions = [
  { value: 'left', icon: <AlignLeft className="w-4 h-4" /> },
  { value: 'center', icon: <AlignCenter className="w-4 h-4" /> },
  { value: 'right', icon: <AlignRight className="w-4 h-4" /> },
];

const PDFExport: React.FC<PDFExportProps> = ({ slogan, onClose }) => {
  const { t } = useLanguage();
  const [font, setFont] = useState('poppins');
  const [color, setColor] = useState('#2A5CAA');
  const [size, setSize] = useState(48);
  const [format, setFormat] = useState<'portrait' | 'landscape'>('portrait');
  const [logo, setLogo] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const [alignment, setAlignment] = useState<'left' | 'center' | 'right'>('center');
  const [activeTab, setActiveTab] = useState('design');
  const [success, setSuccess] = useState(false);

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setLogo(files[0]);
      setLogoPreview(URL.createObjectURL(files[0]));
    }
  };

  const handleSliderChange = (newValue: number[]) => {
    setSize(newValue[0]);
  };

  const handleDownload = () => {
    downloadSloganAsPDF(slogan, {
      font,
      color,
      size,
      format,
      logo: logo || undefined,
      backgroundColor,
      alignment
    });
    
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 2000);
  };

  return (
    <Card className="w-full max-w-5xl mx-auto border border-gray-200 shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-primary">{t('pdf.title')}</h2>
          <Button variant="ghost" onClick={onClose} size="sm" className="rounded-full h-8 w-8 p-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </Button>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="design" className="flex items-center gap-2">
              <Palette className="w-4 h-4" />
              {t('pdf.tabs.design')}
            </TabsTrigger>
            <TabsTrigger value="format" className="flex items-center gap-2">
              <Image className="w-4 h-4" />
              {t('pdf.tabs.format')}
            </TabsTrigger>
            <TabsTrigger value="typography" className="flex items-center gap-2">
              <Font className="w-4 h-4" />
              {t('pdf.tabs.typography')}
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="design" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="color-picker">{t('pdf.color')}</Label>
                  <div className="flex items-center gap-3">
                    <Input
                      id="color-picker"
                      type="color"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                      className="w-12 h-10 p-1 overflow-hidden cursor-pointer"
                    />
                    <Input
                      type="text"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                      className="flex-1"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {colorPresets.map((preset) => (
                      <button
                        key={preset.value}
                        onClick={() => setColor(preset.value)}
                        className="w-8 h-8 rounded-full border border-gray-200 relative"
                        style={{ backgroundColor: preset.value }}
                        title={preset.label}
                      >
                        {color === preset.value && (
                          <span className="absolute inset-0 flex items-center justify-center">
                            <Check className="w-4 h-4 text-white drop-shadow" />
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="bg-color-picker">{t('pdf.backgroundColor')}</Label>
                  <div className="flex items-center gap-3">
                    <Input
                      id="bg-color-picker"
                      type="color"
                      value={backgroundColor}
                      onChange={(e) => setBackgroundColor(e.target.value)}
                      className="w-12 h-10 p-1 overflow-hidden cursor-pointer"
                    />
                    <Input
                      type="text"
                      value={backgroundColor}
                      onChange={(e) => setBackgroundColor(e.target.value)}
                      className="flex-1"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>{t('pdf.alignment')}</Label>
                  <div className="flex bg-muted rounded-md p-1">
                    {alignmentOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => setAlignment(option.value as 'left' | 'center' | 'right')}
                        className={`flex-1 flex items-center justify-center p-2 rounded-sm ${
                          alignment === option.value
                            ? 'bg-white shadow'
                            : 'hover:bg-background/50'
                        }`}
                      >
                        {option.icon}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center p-6 min-h-[300px]">
                <div 
                  className={`max-w-full overflow-hidden p-6 rounded-md`}
                  style={{ backgroundColor }}
                >
                  {logoPreview && (
                    <div className={`flex justify-${alignment} mb-4`}>
                      <img 
                        src={logoPreview} 
                        alt="Logo"
                        className="h-16 object-contain" 
                      />
                    </div>
                  )}
                  <h3 
                    className={`text-${alignment} break-words`}
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
            </div>
          </TabsContent>
          
          <TabsContent value="format" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>{t('pdf.format')}</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <div 
                      className={`border rounded-md p-4 cursor-pointer flex flex-col items-center justify-center ${format === 'portrait' ? 'border-primary bg-primary/10' : 'border-gray-200 hover:border-gray-300'}`}
                      onClick={() => setFormat('portrait')}
                    >
                      <div className="w-16 h-20 bg-gray-200 mb-2"></div>
                      <span>{t('pdf.portrait')}</span>
                    </div>
                    
                    <div 
                      className={`border rounded-md p-4 cursor-pointer flex flex-col items-center justify-center ${format === 'landscape' ? 'border-primary bg-primary/10' : 'border-gray-200 hover:border-gray-300'}`}
                      onClick={() => setFormat('landscape')}
                    >
                      <div className="w-20 h-16 bg-gray-200 mb-2"></div>
                      <span>{t('pdf.landscape')}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="logo-upload">{t('pdf.logo')}</Label>
                  <Input
                    id="logo-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleLogoChange}
                    className="cursor-pointer"
                  />
                  {logoPreview && (
                    <div className="mt-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => {
                          setLogo(null);
                          setLogoPreview(null);
                        }}
                      >
                        {t('pdf.removeLogo')}
                      </Button>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center p-6">
                <div 
                  className={`max-w-full overflow-hidden p-6 rounded-md flex items-center justify-center ${format === 'landscape' ? 'w-[320px] h-[240px]' : 'w-[240px] h-[320px]'}`}
                  style={{ backgroundColor }}
                >
                  <div>
                    {logoPreview && (
                      <div className={`flex justify-${alignment} mb-4`}>
                        <img 
                          src={logoPreview} 
                          alt="Logo"
                          className="h-16 object-contain" 
                        />
                      </div>
                    )}
                    <h3 
                      className={`text-${alignment} break-words`}
                      style={{ 
                        fontFamily: font === 'poppins' ? 'Poppins, sans-serif' : 
                                  font === 'inter' ? 'Inter, sans-serif' : font,
                        color: color,
                        fontSize: `${Math.min(size, 32)}px`,
                        lineHeight: '1.2',
                        maxWidth: '100%',
                      }}
                    >
                      {slogan}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="typography" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="font-select">{t('pdf.font')}</Label>
                  <Select value={font} onValueChange={setFont}>
                    <SelectTrigger id="font-select">
                      <SelectValue placeholder="Select font" />
                    </SelectTrigger>
                    <SelectContent>
                      {fontOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="size-slider">{t('pdf.size')} ({size}px)</Label>
                  <Slider 
                    id="size-slider"
                    min={16}
                    max={96}
                    step={2}
                    value={[size]}
                    onValueChange={handleSliderChange}
                  />
                </div>
                
                <div className="space-y-1 mt-4">
                  <h4 className="text-sm font-medium">{t('pdf.fontPreview')}</h4>
                  <div className="bg-gray-50 p-3 rounded-md border">
                    <p style={{ fontFamily: font === 'poppins' ? 'Poppins, sans-serif' : 
                                          font === 'inter' ? 'Inter, sans-serif' : font }}>
                      AaBbCcDdEeFfGgHhIiJjKkLlMm <br />
                      0123456789 !@#$%^&*()
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center p-6">
                <div 
                  className="max-w-full overflow-hidden p-6 rounded-md"
                  style={{ backgroundColor }}
                >
                  {logoPreview && (
                    <div className={`flex justify-${alignment} mb-4`}>
                      <img 
                        src={logoPreview} 
                        alt="Logo"
                        className="h-16 object-contain" 
                      />
                    </div>
                  )}
                  <h3 
                    className={`text-${alignment} break-words`}
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
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="flex justify-end mt-6">
          <Button
            onClick={handleDownload}
            className="py-6 px-8 text-lg flex items-center gap-2 bg-green-600 hover:bg-green-700"
          >
            {success ? (
              <>
                <Check className="w-5 h-5" />
                {t('pdf.downloaded')}
              </>
            ) : (
              <>
                <Download className="w-5 h-5" />
                {t('pdf.download')}
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PDFExport;
