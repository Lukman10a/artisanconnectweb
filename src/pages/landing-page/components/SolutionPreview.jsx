import React, { useState } from 'react';
import Icon from 'components/AppIcon';


const SolutionPreview = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 'verification',
      title: '2-Hour Response Guarantee',
      description: 'Get matched with verified professionals who respond within 2 hours, or we find you another option.',
      icon: 'Clock',
      color: 'primary',
      mockup: {
        title: 'Response Guarantee',
        content: `Mike R. - Electrician
⭐ 4.9 Rating • Verified Pro
📍 2.3 miles away

"I can help with your outlet installation. Available tomorrow morning at 9 AM."

Response time: 47 minutes`,
        timestamp: '47 min ago'
      }
    },
    {
      id: 'background-check',
      title: 'Background Check Verification',
      description: 'Every artisan undergoes comprehensive background checks, license verification, and insurance validation.',
      icon: 'ShieldCheck',
      color: 'success',
      mockup: {
        title: 'Verification Status',
        content: `✅ Background Check: Passed
✅ License Verification: Active
✅ Insurance Coverage: $2M Liability
✅ Skill Assessment: Expert Level
✅ Customer Reviews: 4.9/5 (127 reviews)

Last Updated: Today`,
        timestamp: 'Verified Today'
      }
    },
    {
      id: 'skill-assessment',
      title: 'Skill Assessment Process',
      description: 'Artisans complete hands-on skill assessments and portfolio reviews to ensure quality craftsmanship.',
      icon: 'Award',
      color: 'accent',
      mockup: {
        title: 'Skill Assessment',
        content: `Electrical Work Assessment
Score: 94/100 - Expert Level

✅ Code Compliance: Excellent
✅ Safety Protocols: Perfect
✅ Work Quality: Outstanding
✅ Customer Communication: Excellent

Certified by: Master Electrician Board`,
        timestamp: 'Assessed 2 days ago'
      }
    }
  ];

  const appScreens = [
    {
      title: 'Request Service',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=compress&cs=tinysrgb&w=300&h=600&fit=crop',
      description: 'Describe your project in seconds'
    },
    {
      title: 'Get Matched',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300&h=600&fit=crop',
      description: 'Verified professionals respond quickly'
    },
    {
      title: 'Connect & Schedule',
      image: 'https://images.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg?auto=compress&cs=tinysrgb&w=300&h=600&fit=crop',
      description: 'Direct communication and scheduling'
    }
  ];

  return (
    <section id="solution" className="section-padding bg-gradient-to-br from-surface via-white to-primary-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            How ArtisanConnect Works
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Our platform combines cutting-edge technology with rigorous verification processes to create the most trusted marketplace for local services.
          </p>
        </div>

        {/* Interactive Feature Demo */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Feature List */}
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-text-primary mb-8">
                Three Pillars of Trust
              </h3>
              
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className={`card p-6 cursor-pointer transition-all duration-300 hover:shadow-medium ${
                    activeFeature === index ? 'ring-2 ring-primary shadow-medium' : ''
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-${feature.color}-100 rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon name={feature.icon} size={24} color={`var(--color-${feature.color})`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-text-primary mb-2">{feature.title}</h4>
                      <p className="text-text-secondary leading-relaxed">{feature.description}</p>
                    </div>
                    <Icon 
                      name="ChevronRight" 
                      size={20} 
                      color={activeFeature === index ? 'var(--color-primary)' : 'var(--color-text-muted)'} 
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Mockup */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-border">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-error-500 rounded-full" />
                    <div className="w-3 h-3 bg-warning-500 rounded-full" />
                    <div className="w-3 h-3 bg-success-500 rounded-full" />
                  </div>
                  <div className="text-sm text-text-muted">ArtisanConnect App</div>
                </div>

                <div className="bg-surface rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold text-text-primary">
                      {features[activeFeature].mockup.title}
                    </h4>
                    <div className="text-xs text-text-muted">
                      {features[activeFeature].mockup.timestamp}
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-border">
                    <pre className="text-sm text-text-secondary whitespace-pre-wrap font-sans">
                      {features[activeFeature].mockup.content}
                    </pre>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 bg-${features[activeFeature].color}-500 rounded-full animate-pulse`} />
                      <span className="text-sm text-text-muted">Live Update</span>
                    </div>
                    <button className="text-sm text-primary font-medium hover:text-primary-700 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-500 rounded-full opacity-20 animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-accent-400 to-accent-500 rounded-full opacity-15 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>

        {/* App Flow Preview */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              Simple 3-Step Process
            </h3>
            <p className="text-xl text-text-secondary">
              From request to completion, we've streamlined every step
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {appScreens.map((screen, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-48 h-96 mx-auto bg-text-primary rounded-3xl p-2 shadow-2xl">
                    <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                      <div className="h-8 bg-surface flex items-center justify-center">
                        <div className="w-20 h-1 bg-text-primary rounded-full" />
                      </div>
                      <div className="h-full bg-gradient-to-br from-primary-50 to-accent-50 flex items-center justify-center p-4">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Icon name={index === 0 ? 'Edit' : index === 1 ? 'Users' : 'Calendar'} size={24} color="white" />
                          </div>
                          <div className="text-sm font-semibold text-text-primary mb-2">{screen.title}</div>
                          <div className="text-xs text-text-secondary">{screen.description}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-medium">
                    {index + 1}
                  </div>

                  {/* Connection Arrow */}
                  {index < appScreens.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <Icon name="ArrowRight" size={24} color="var(--color-primary)" />
                    </div>
                  )}
                </div>

                <h4 className="text-xl font-bold text-text-primary mb-2">{screen.title}</h4>
                <p className="text-text-secondary">{screen.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-8 lg:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Built for Results
            </h3>
            <p className="text-xl opacity-90">
              Our verification process ensures quality connections
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">98%</div>
              <div className="text-lg opacity-90">Verification Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">&lt;2hrs</div>
              <div className="text-lg opacity-90">Average Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">4.9★</div>
              <div className="text-lg opacity-90">Average Service Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionPreview;