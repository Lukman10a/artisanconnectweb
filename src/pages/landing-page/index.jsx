import React, { useState, useEffect } from "react";
import Icon from "components/AppIcon";

import StickyNavigation from "components/ui/StickyNavigation";

import ProgressIndicator from "components/ui/ProgressIndicator";
import ConversionTracker from "components/ui/ConversionTracker";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import SolutionPreview from "./components/SolutionPreview";
import BenefitsGrid from "./components/BenefitsGrid";
import ServiceCategories from "./components/ServiceCategories";
import TrustSafety from "./components/TrustSafety";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import WaitlistForm from "./components/WaitlistForm";
import LaunchTimeline from "./components/LaunchTimeline";
import LocalCoverage from "./components/LocalCoverage";
import FounderStory from "./components/FounderStory";
import FAQSection from "./components/FAQSection";
import ReferralProgram from "./components/ReferralProgram";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

const LandingPage = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [audience, setAudience] = useState("homeowner");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -20% 0px",
      threshold: 0.3,
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = [
      "hero",
      "problem",
      "solution",
      "benefits",
      "services",
      "trust-safety",
      "testimonials",
      "waitlist",
      "timeline",
      "coverage",
      "founder",
      "faq",
      "referral",
      "final-cta",
    ];

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        sectionObserver.observe(element);
      }
    });

    return () => {
      sectionObserver.disconnect();
    };
  }, []);

  const handleSectionView = (data) => {
    console.log("Section viewed:", data);
  };

  const handleEngagement = (data) => {
    console.log("User engagement:", data);
  };

  const handleConversion = (data) => {
    console.log("Conversion tracked:", data);
  };

  const handleAudienceToggle = (selectedAudience) => {
    setAudience(selectedAudience);
    if (window.conversionTracker) {
      window.conversionTracker.trackButtonClick(
        "audience_toggle",
        "navigation",
        {
          from: audience,
          to: selectedAudience,
        }
      );
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4 animate-pulse">
            <Icon name="Hammer" size={32} color="white" />
          </div>
          <div className="text-xl font-semibold text-primary">
            ArtisanConnect
          </div>
          <div className="text-sm text-text-secondary mt-2">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <ConversionTracker
        onSectionView={handleSectionView}
        onEngagement={handleEngagement}
        onConversion={handleConversion}
      />

      <StickyNavigation
        activeSection={activeSection}
        audience={audience}
        onAudienceToggle={handleAudienceToggle}
      />

      <ProgressIndicator
        activeSection={activeSection}
        onSectionClick={setActiveSection}
      />

      <main className="relative">
        <HeroSection
          audience={audience}
          onAudienceToggle={handleAudienceToggle}
        />
        <ProblemSection audience={audience} />
        <SolutionPreview />
        <BenefitsGrid audience={audience} />
        <ServiceCategories />
        <TrustSafety />
        <TestimonialsCarousel audience={audience} />
        <WaitlistForm
          audience={audience}
          onAudienceToggle={handleAudienceToggle}
        />
        <LaunchTimeline />
        <LocalCoverage />
        <FounderStory />
        <FAQSection audience={audience} />
        <ReferralProgram />
        <FinalCTA audience={audience} />
        <Footer />
      </main>
    </div>
  );
};

export default LandingPage;
