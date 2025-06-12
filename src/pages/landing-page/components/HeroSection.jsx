import React, { useState, useEffect } from 'react';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';
import AudienceToggle from 'components/ui/AudienceToggle';

const HeroSection = ({ audience, onAudienceToggle }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 45,
    hours: 12,
    minutes: 30,
    seconds: 45
  });

  const [artisanCount, setArtisanCount] = useState(487);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    const countTimer = setInterval(() => {
      setArtisanCount(prev => prev < 500 ? prev + 1 : prev);
    }, 30000);

    return () => {
      clearInterval(timer);
      clearInterval(countTimer);
    };
  }, []);

  const handleWaitlistClick = () => {
    const element = document.getElementById('waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    
    if (window.conversionTracker) {
      window.conversionTracker.trackButtonClick('waitlist_cta', 'hero', { audience });
    }
  };

  const tradeLogos = [
    { name: "Local Contractors Association", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&crop=center" },
    { name: "Skilled Trades Council", logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=120&h=60&fit=crop&crop=center" },
    { name: "Professional Artisans Guild", logo: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=120&h=60&fit=crop&crop=center" }
  ];

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-surface via-white to-primary-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative container-custom pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Audience Toggle */}
            <div className="flex justify-center lg:justify-start">
              <AudienceToggle
                audience={audience}
                onAudienceChange={onAudienceToggle}
                size="large"
                className="shadow-medium"
              />
            </div>

            {/* Dynamic Headlines */}
            <div className="text-center lg:text-left">
              {audience === 'homeowner' ? (
                <div>
                  <h1 className="text-4xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
                    Find Trusted Local
                    <span className="text-gradient block">Artisans in 2 Hours</span>
                  </h1>
                  <p className="text-xl lg:text-2xl text-text-secondary mb-8 leading-relaxed">
                    Skip the unreliable contractors. Connect with verified professionals who value your project as much as you do.
                  </p>
                </div>
              ) : (
                <div>
                  <h1 className="text-4xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
                    Connect with Customers
                    <span className="text-gradient block">Who Value Your Craft</span>
                  </h1>
                  <p className="text-xl lg:text-2xl text-text-secondary mb-8 leading-relaxed">
                    Build lasting relationships with homeowners who appreciate quality work and fair pricing.
                  </p>
                </div>
              )}
            </div>

            {/* Value Proposition */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-medium border border-border">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-success-500 to-success-600 rounded-full flex items-center justify-center">
                  <Icon name="Shield" size={24} color="white" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-text-primary">
                  The Only Platform That Pre-Verifies Every Professional
                </h3>
              </div>
              <p className="text-text-secondary text-lg">
                Background checks, skill assessments, and insurance verification - all completed before they join our network.
              </p>
            </div>

            {/* Countdown Timer */}
            <div className="bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl p-6 lg:p-8 text-white">
              <div className="text-center">
                <h3 className="text-xl lg:text-2xl font-bold mb-4">Beta Launch Countdown</h3>
                <div className="grid grid-cols-4 gap-4 mb-6">
                  {Object.entries(timeLeft).map(([unit, value]) => (
                    <div key={unit} className="text-center">
                      <div className="bg-white/20 rounded-lg p-3 lg:p-4 mb-2">
                        <div className="text-2xl lg:text-3xl font-bold">{value.toString().padStart(2, '0')}</div>
                      </div>
                      <div className="text-sm lg:text-base capitalize opacity-90">{unit}</div>
                    </div>
                  ))}
                </div>
                <button
                  onClick={handleWaitlistClick}
                  className="w-full bg-white text-accent-600 font-bold py-4 px-8 rounded-lg hover:bg-accent-50 transition-all duration-200 flex items-center justify-center space-x-2 shadow-medium"
                >
                  <span className="text-lg">Join the Waitlist</span>
                  <Icon name="ArrowRight" size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-border">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon name="Smartphone" size={40} color="white" />
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary mb-4">App Preview</h3>
                  <p className="text-text-secondary">Experience the future of local services</p>
                </div>

                {/* Mock App Interface */}
                <div className="bg-surface rounded-2xl p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-600 rounded-full flex items-center justify-center">
                        <Icon name="User" size={20} color="white" />
                      </div>
                      <div>
                        <div className="font-semibold text-text-primary">Mike Rodriguez</div>
                        <div className="text-sm text-success-600 flex items-center space-x-1">
                          <Icon name="Star" size={14} />
                          <span>4.9 • Verified Electrician</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-text-secondary">Response Time</div>
                      <div className="font-bold text-success-600">&lt; 2 hours</div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-border">
                    <div className="text-sm text-text-secondary mb-2">Your Request</div>
                    <div className="text-text-primary">"Need electrical outlet installation in kitchen"</div>
                  </div>

                  <button className="w-full bg-primary text-white font-semibold py-3 rounded-lg flex items-center justify-center space-x-2">
                    <Icon name="MessageCircle" size={18} />
                    <span>Connect Now</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-accent-400 to-accent-500 rounded-full opacity-20 animate-pulse" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-primary-400 to-primary-500 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>

        {/* Trust Bar */}
        <div className="mt-16 lg:mt-24">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-medium border border-border">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-success-500 rounded-full animate-pulse" />
                <span className="font-semibold text-text-primary">
                  <span className="text-2xl font-bold text-success-600">{artisanCount}+</span> Artisans Already Registered
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {tradeLogos.map((org, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-sm rounded-xl p-6 text-center border border-border hover:shadow-medium transition-all duration-200">
                <div className="w-full h-16 bg-surface rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <Image
                    src={org.logo}
                    alt={org.name}
                    className="w-full h-full object-cover opacity-60"
                  />
                </div>
                <div className="text-sm font-medium text-text-secondary">{org.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;