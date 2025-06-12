import React, { useEffect, useRef } from 'react';

const ConversionTracker = ({ 
  onSectionView, 
  onEngagement, 
  onConversion,
  trackScrollDepth = true,
  trackTimeOnSection = true 
}) => {
  const sectionTimers = useRef({});
  const scrollDepthTracked = useRef(new Set());
  const sectionsInView = useRef(new Set());

  const sections = [
    'hero',
    'how-it-works', 
    'for-homeowners',
    'for-artisans',
    'safety-trust',
    'join-waitlist'
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0.5
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const sectionId = entry.target.id;
        
        if (entry.isIntersecting) {
          // Section entered view
          if (!sectionsInView.current.has(sectionId)) {
            sectionsInView.current.add(sectionId);
            
            if (onSectionView) {
              onSectionView({
                section: sectionId,
                timestamp: Date.now(),
                action: 'enter'
              });
            }

            // Start timing for this section
            if (trackTimeOnSection) {
              sectionTimers.current[sectionId] = Date.now();
            }
          }
        } else {
          // Section left view
          if (sectionsInView.current.has(sectionId)) {
            sectionsInView.current.delete(sectionId);
            
            if (onSectionView) {
              onSectionView({
                section: sectionId,
                timestamp: Date.now(),
                action: 'exit'
              });
            }

            // Calculate time spent in section
            if (trackTimeOnSection && sectionTimers.current[sectionId]) {
              const timeSpent = Date.now() - sectionTimers.current[sectionId];
              
              if (onEngagement) {
                onEngagement({
                  type: 'time_on_section',
                  section: sectionId,
                  value: timeSpent,
                  timestamp: Date.now()
                });
              }
              
              delete sectionTimers.current[sectionId];
            }
          }
        }
      });
    }, observerOptions);

    // Observe all sections
    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        sectionObserver.observe(element);
      }
    });

    // Scroll depth tracking
    const handleScroll = () => {
      if (!trackScrollDepth) return;

      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );

      // Track scroll milestones
      const milestones = [25, 50, 75, 90, 100];
      milestones.forEach(milestone => {
        if (scrollPercent >= milestone && !scrollDepthTracked.current.has(milestone)) {
          scrollDepthTracked.current.add(milestone);
          
          if (onEngagement) {
            onEngagement({
              type: 'scroll_depth',
              value: milestone,
              timestamp: Date.now()
            });
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      sectionObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
      
      // Clear any remaining timers
      Object.keys(sectionTimers.current).forEach(sectionId => {
        if (sectionTimers.current[sectionId]) {
          const timeSpent = Date.now() - sectionTimers.current[sectionId];
          
          if (onEngagement) {
            onEngagement({
              type: 'time_on_section',
              section: sectionId,
              value: timeSpent,
              timestamp: Date.now()
            });
          }
        }
      });
    };
  }, [onSectionView, onEngagement, trackScrollDepth, trackTimeOnSection]);

  // Track form interactions
  const trackFormInteraction = (formType, action, data = {}) => {
    if (onEngagement) {
      onEngagement({
        type: 'form_interaction',
        formType,
        action,
        data,
        timestamp: Date.now()
      });
    }
  };

  // Track button clicks
  const trackButtonClick = (buttonType, location, data = {}) => {
    if (onEngagement) {
      onEngagement({
        type: 'button_click',
        buttonType,
        location,
        data,
        timestamp: Date.now()
      });
    }
  };

  // Track conversions
  const trackConversion = (conversionType, data = {}) => {
    if (onConversion) {
      onConversion({
        type: conversionType,
        data,
        timestamp: Date.now()
      });
    }
  };

  // Expose tracking functions to parent components
  useEffect(() => {
    window.conversionTracker = {
      trackFormInteraction,
      trackButtonClick,
      trackConversion
    };

    return () => {
      delete window.conversionTracker;
    };
  }, []);

  return null; // This component doesn't render anything
};

export default ConversionTracker;