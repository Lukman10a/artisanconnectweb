import React, { useState, useEffect } from 'react';

const ProgressIndicator = ({ sections, activeSection, onSectionClick }) => {
  const [progress, setProgress] = useState(0);

  const sectionList = [
    { id: 'hero', label: 'Hero', order: 0 },
    { id: 'how-it-works', label: 'How It Works', order: 1 },
    { id: 'for-homeowners', label: 'For Homeowners', order: 2 },
    { id: 'for-artisans', label: 'For Artisans', order: 3 },
    { id: 'safety-trust', label: 'Safety & Trust', order: 4 },
    { id: 'join-waitlist', label: 'Join Waitlist', order: 5 }
  ];

  useEffect(() => {
    const currentSectionIndex = sectionList.findIndex(section => section.id === activeSection);
    if (currentSectionIndex !== -1) {
      const progressPercentage = ((currentSectionIndex + 1) / sectionList.length) * 100;
      setProgress(progressPercentage);
    }
  }, [activeSection]);

  const handleDotClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 80;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      if (onSectionClick) {
        onSectionClick(sectionId);
      }
    }
  };

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-100 hidden lg:block">
      <div className="flex flex-col items-center space-y-3">
        {/* Progress Bar */}
        <div className="w-1 h-32 bg-surface-200 rounded-full relative overflow-hidden">
          <div 
            className="w-full bg-gradient-to-b from-primary to-accent rounded-full transition-all duration-500 ease-out"
            style={{ height: `${progress}%` }}
          />
        </div>
        
        {/* Section Dots */}
        <div className="flex flex-col items-center space-y-2">
          {sectionList.map((section, index) => {
            const isActive = section.id === activeSection;
            const isPassed = sectionList.findIndex(s => s.id === activeSection) >= index;
            
            return (
              <button
                key={section.id}
                onClick={() => handleDotClick(section.id)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ease-in-out hover:scale-125 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                  isActive 
                    ? 'bg-primary scale-125 shadow-medium' 
                    : isPassed 
                      ? 'bg-accent' :'bg-surface-200 hover:bg-primary-200'
                }`}
                aria-label={`Go to ${section.label} section`}
                title={section.label}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicator;