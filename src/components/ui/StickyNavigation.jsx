import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';

const StickyNavigation = ({ activeSection, onSectionClick, audience, onAudienceToggle }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'how-it-works', label: 'How It Works', offset: 80 },
    { id: 'for-homeowners', label: 'For Homeowners', offset: 80 },
    { id: 'for-artisans', label: 'For Artisans', offset: 80 },
    { id: 'safety-trust', label: 'Safety & Trust', offset: 80 },
    { id: 'join-waitlist', label: 'Join Waitlist', offset: 80 }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId, offset) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      if (onSectionClick) {
        onSectionClick(sectionId);
      }
      
      setIsMobileMenuOpen(false);
    }
  };

  const handleJoinWaitlistClick = () => {
    handleNavClick('join-waitlist', 80);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-100 transition-all duration-200 ease-in-out ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-soft border-b border-border' 
          : 'bg-white'
      }`}>
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <Icon name="Hammer" size={20} color="white" className="lg:w-6 lg:h-6" />
                </div>
                <span className="text-xl lg:text-2xl font-bold text-primary">TrustCraft</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.slice(0, -1).map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id, item.offset)}
                  className={`text-base font-medium transition-colors duration-200 hover:text-primary ${
                    activeSection === item.id 
                      ? 'text-primary border-b-2 border-primary pb-1' :'text-text-secondary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <button
                onClick={handleJoinWaitlistClick}
                className="btn-primary flex items-center space-x-2"
              >
                <span>Join Waitlist</span>
                <Icon name="ArrowRight" size={16} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-3">
              <button
                onClick={handleJoinWaitlistClick}
                className="btn-primary text-sm px-4 py-2"
              >
                Join
              </button>
              <button
                onClick={toggleMobileMenu}
                className="p-2 text-text-secondary hover:text-primary transition-colors duration-200"
                aria-label="Toggle mobile menu"
              >
                <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-16 z-200 bg-white border-t border-border">
            <div className="container-custom py-6">
              <div className="space-y-4">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id, item.offset)}
                    className={`block w-full text-left py-3 px-4 rounded-lg text-lg font-medium transition-colors duration-200 ${
                      activeSection === item.id 
                        ? 'text-primary bg-primary-50' :'text-text-secondary hover:text-primary hover:bg-surface'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                
                {/* Mobile Audience Toggle */}
                {onAudienceToggle && (
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-medium text-text-secondary mb-3">I am a:</p>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => onAudienceToggle('homeowner')}
                        className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                          audience === 'homeowner' ?'bg-primary text-white' :'bg-surface text-text-secondary hover:bg-surface-100'
                        }`}
                      >
                        Homeowner
                      </button>
                      <button
                        onClick={() => onAudienceToggle('artisan')}
                        className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                          audience === 'artisan' ?'bg-primary text-white' :'bg-surface text-text-secondary hover:bg-surface-100'
                        }`}
                      >
                        Artisan
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content from hiding behind fixed nav */}
      <div className="h-16 lg:h-20"></div>
    </>
  );
};

export default StickyNavigation;