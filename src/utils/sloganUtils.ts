
// Mock data for demonstration - in a real app this would connect to an API
// that uses AI model like GPT-4 to generate slogans

export interface SloganFormData {
  companyName: string;
  industry: string;
  keywords: string[];
  tone: 'professional' | 'creative' | 'friendly' | 'bold';
}

export interface Slogan {
  id: string;
  text: string;
  rating?: number;
}

export const generateSlogans = async (formData: SloganFormData): Promise<Slogan[]> => {
  // This would be an API call to an AI service in a real implementation
  console.log('Generating slogans with data:', formData);
  
  // For demo purposes, we'll return mock data based on the input
  return new Promise((resolve) => {
    setTimeout(() => {
      const slogans = mockSloganGenerator(formData);
      resolve(slogans);
    }, 2000); // Simulate API delay
  });
};

const mockSloganGenerator = (formData: SloganFormData): Slogan[] => {
  const { companyName, industry, keywords, tone } = formData;
  
  // Enhanced templates based on tone with more creative patterns
  const templates: Record<string, string[]> = {
    professional: [
      "{company}: Setting the Standard in {industry} Since Day One",
      "Excellence in {industry} - {company}, Where Results Matter",
      "{keyword} Solutions by {company} | Trusted Expertise",
      "Leading {industry} with {keyword} Innovation | {company}",
      "{company} - Redefining the Future of {industry}",
      "When {industry} Matters, {company} Delivers",
      "The {keyword} Authority: {company}",
      "Precision {industry} Solutions by {company}",
      "{company}: Where {industry} Meets Excellence",
      "Trust {company} for Unmatched {keyword} Results"
    ],
    creative: [
      "{company}: Where {keyword} Meets Imagination in a World of {industry}",
      "Dream Bigger with {company}'s {keyword} Wizardry",
      "{company}: {keyword} Redefined, {industry} Reimagined",
      "Imagine More. Create Beyond. {company}.",
      "{keyword} Magic by {company} | {industry} Wondermakers",
      "Coloring Outside the Lines of {industry} | {company}",
      "Spark {keyword} Joy with {company}",
      "{company}: The {industry} Storytellers",
      "Unleash Your {keyword} Potential with {company}",
      "Where {industry} Dreams Take Flight: {company}"
    ],
    friendly: [
      "{company}: Your Trusted {keyword} Partner in {industry}",
      "Feel at Home with {company}'s {industry} Solutions",
      "{company} - {industry} Made Friendly, Results Made Real",
      "Your {industry} Journey Starts with a {company} Smile",
      "We're {company}: We Care About Your {keyword} Experience",
      "{company}: {industry} Experts Who Listen",
      "The Heart of {keyword}: {company}",
      "Making {industry} Personal | {company}",
      "{company}: Where Every {keyword} Client Matters",
      "The Friendly Face of {industry}: {company}"
    ],
    bold: [
      "{company}: Disrupting {industry} Forever, No Apologies",
      "Bold {keyword} Solutions by {company} | Rules? What Rules?",
      "No Limits. No Compromises. Just {company}.",
      "{company}: Dare to {keyword} in a World of Ordinary {industry}",
      "Revolution in {industry}: {company} Leads, Others Follow",
      "{company}: Boldly Going Where No {industry} Has Gone Before",
      "Fearlessly {keyword} | Proudly {company}",
      "Break the {industry} Mold with {company}",
      "Dangerously Good {keyword} Solutions: {company}",
      "The {industry} Rebels: {company}"
    ]
  };

  // Additional creative patterns that can be mixed in
  const creativePatterns = [
    "Turning {industry} Challenges into {keyword} Victories | {company}",
    "{keyword} Today. {industry} Tomorrow. {company} Always.",
    "{company}: Because {industry} Deserves {keyword} Excellence",
    "The Science of {keyword}, The Art of {industry} | {company}",
    "Beyond {industry} Boundaries with {company}'s {keyword} Vision",
    "{company}: {industry}'s Best Kept {keyword} Secret",
    "Where {keyword} and {industry} Meet Their Perfect Match: {company}",
    "{company}: {industry}'s {keyword} Revolution Has a Name",
    "The {keyword} Edge in {industry}: Exclusively {company}",
    "Think {keyword}. Think {industry}. Think {company}.",
    "{company} - Whispered in {industry} Circles for Our {keyword} Magic",
    "Not Just {industry}, But {keyword} Brilliance | {company}"
  ];

  // Creative rhetorical devices to enhance slogans
  const rhetoricDevices = [
    // Alliteration
    "{company}: {keyword} Kings of {industry}",
    "Brilliantly Building Better {industry} | {company}",
    // Rhyming
    "{company}: The {keyword} Way, Making {industry} Pay",
    // Metaphors
    "{company}: Your {keyword} Lighthouse in the {industry} Storm",
    // Contrast
    "Small Details, Big {keyword} Impact | {company} {industry}",
    // Questions
    "Why Settle for Less {keyword} in Your {industry}? Choose {company}."
  ];

  const selectedTemplates = templates[tone];
  const slogans: Slogan[] = [];
  
  // Generate base slogans from the tone templates
  for (let i = 0; i < 5; i++) {
    const template = selectedTemplates[i % selectedTemplates.length];
    const keyword = keywords[i % keywords.length] || keywords[0];
    
    let slogan = template
      .replace(/{company}/g, companyName)
      .replace(/{industry}/g, industry)
      .replace(/{keyword}/g, keyword);
    
    slogans.push({
      id: `slogan-${i + 1}`,
      text: slogan
    });
  }
  
  // Add additional slogans from creative patterns
  for (let i = 0; i < 3; i++) {
    const template = creativePatterns[i % creativePatterns.length];
    const keyword = keywords[(i + 1) % keywords.length] || keywords[0];
    
    let slogan = template
      .replace(/{company}/g, companyName)
      .replace(/{industry}/g, industry)
      .replace(/{keyword}/g, keyword);
    
    slogans.push({
      id: `slogan-pattern-${i + 1}`,
      text: slogan
    });
  }
  
  // Add some rhetorical device-based slogans
  for (let i = 0; i < 2; i++) {
    const template = rhetoricDevices[i % rhetoricDevices.length];
    const keyword = keywords[(i + 2) % keywords.length] || keywords[0];
    
    let slogan = template
      .replace(/{company}/g, companyName)
      .replace(/{industry}/g, industry)
      .replace(/{keyword}/g, keyword);
    
    slogans.push({
      id: `slogan-rhetoric-${i + 1}`,
      text: slogan
    });
  }
  
  // Create some unexpected but potentially brilliant combinations
  if (keywords.length > 1) {
    let combinedKeywords = `${keywords[0]} ${keywords[1]}`;
    let template = "{company}: Where {combinedKeywords} Transform {industry}";
    
    let slogan = template
      .replace(/{company}/g, companyName)
      .replace(/{industry}/g, industry)
      .replace(/{combinedKeywords}/g, combinedKeywords);
    
    slogans.push({
      id: 'slogan-combo-1',
      text: slogan
    });
  }
  
  return slogans;
};

export const rateSloganMock = (id: string, rating: number): void => {
  console.log(`Rated slogan ${id} with ${rating} stars`);
  // In a real app, this would call an API to store the rating
};

export const downloadSloganAsPDF = (
  slogan: string, 
  options: { 
    font: string; 
    color: string; 
    size: string; 
    format: 'portrait' | 'landscape';
    logo?: File;
    backgroundColor?: string;
    alignment?: 'left' | 'center' | 'right';
  }
): void => {
  console.log('Downloading slogan as PDF with options:', options);
  console.log('Slogan text:', slogan);
  
  // In a real implementation, this would use a library like jsPDF to generate
  // a PDF file and trigger a download
  
  // Mock download by creating a text file
  const element = document.createElement('a');
  const file = new Blob([`Your Slogan: ${slogan}\n\nGenerated by SloganForge AI`], {type: 'text/plain'});
  element.href = URL.createObjectURL(file);
  element.download = `slogan-${Date.now()}.txt`;
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};

