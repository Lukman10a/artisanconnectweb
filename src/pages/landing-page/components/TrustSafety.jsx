import React, { useState } from 'react';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const TrustSafety = () => {
  const [activeTab, setActiveTab] = useState('verification');

  const verificationSteps = [
    {
      step: 1,
      title: 'Identity Verification',
      description: 'Government-issued ID verification and address confirmation',
      icon: 'User',
      color: 'primary'
    },
    {
      step: 2,
      title: 'Background Check',
      description: 'Comprehensive criminal background screening',
      icon: 'Shield',
      color: 'success'
    },
    {
      step: 3,
      title: 'License Validation',
      description: 'Professional license verification with issuing authorities',
      icon: 'Award',
      color: 'warning'
    },
    {
      step: 4,
      title: 'Insurance Confirmation',
      description: 'Liability and workers compensation insurance verification',
      icon: 'FileText',
      color: 'accent'
    },
    {
      step: 5,
      title: 'Skill Assessment',
      description: 'Hands-on evaluation by industry professionals',
      icon: 'CheckCircle',
      color: 'success'
    }
  ];

  const partners = [
    {
      name: 'SecureCheck Pro',
      type: 'Background Screening',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&crop=center',
      description: 'Leading provider of comprehensive background checks'
    },
    {
      name: 'InsuranceGuard',
      type: 'Insurance Verification',
      logo: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?w=120&h=60&fit=crop&crop=center',
      description: 'Real-time insurance coverage validation'
    },
    {
      name: 'LicenseTracker',
      type: 'License Verification',
      logo: 'https://images.pixabay.com/photo/2016/11/29/06/15/adult-1867665_960_720.jpg?w=120&h=60&fit=crop&crop=center',
      description: 'Professional licensing database integration'
    },
    {
      name: 'SkillCert',
      type: 'Skill Assessment',
      logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=120&h=60&fit=crop&crop=center',
      description: 'Industry-standard competency evaluations'
    }
  ];

  const safetyFeatures = [
    {
      title: '$2M Liability Coverage',
      description: 'Every project is backed by comprehensive liability insurance',
      icon: 'Shield',
      color: 'success'
    },
    {
      title: 'Secure Payments',
      description: 'Protected payment processing with escrow options',
      icon: 'CreditCard',
      color: 'primary'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock customer support for any issues',
      icon: 'Headphones',
      color: 'accent'
    },
    {
      title: 'Quality Guarantee',
      description: 'Work quality guarantee with resolution process',
      icon: 'Star',
      color: 'warning'
    }
  ];

  const tabs = [
    { id: 'verification', label: 'Verification Process', icon: 'ShieldCheck' },
    { id: 'partners', label: 'Trust Partners', icon: 'Users' },
    { id: 'safety', label: 'Safety Features', icon: 'Lock' }
  ];

  return (
    <section id="trust-safety" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Trust & Safety First
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Our comprehensive verification process and safety measures ensure you can trust every professional on our platform.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-surface rounded-2xl p-2 inline-flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-primary text-white shadow-medium'
                    : 'text-text-secondary hover:text-primary hover:bg-surface-100'
                }`}
              >
                <Icon name={tab.icon} size={20} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[600px]">
          {/* Verification Process Tab */}
          {activeTab === 'verification' && (
            <div className="fade-in">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
                <div>
                  <h3 className="text-3xl font-bold text-text-primary mb-6">
                    5-Step Verification Process
                  </h3>
                  <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                    Every artisan goes through our rigorous 5-step verification process before they can join our platform. This ensures you're always working with qualified, trustworthy professionals.
                  </p>
                  
                  <div className="space-y-6">
                    {verificationSteps.map((step) => (
                      <div key={step.step} className="flex items-start space-x-4">
                        <div className={`w-12 h-12 bg-${step.color}-100 rounded-full flex items-center justify-center flex-shrink-0`}>
                          <Icon name={step.icon} size={20} color={`var(--color-${step.color})`} />
                        </div>
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <span className={`w-6 h-6 bg-${step.color}-600 text-white rounded-full flex items-center justify-center text-sm font-bold`}>
                              {step.step}
                            </span>
                            <h4 className="text-lg font-bold text-text-primary">{step.title}</h4>
                          </div>
                          <p className="text-text-secondary">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8 lg:p-12">
                    <div className="text-center mb-8">
                      <div className="w-20 h-20 bg-gradient-to-br from-success-500 to-success-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name="ShieldCheck" size={40} color="white" />
                      </div>
                      <h4 className="text-2xl font-bold text-text-primary mb-2">Verification Complete</h4>
                      <p className="text-text-secondary">Mike Rodriguez - Master Electrician</p>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 flex items-center justify-between">
                        <span className="text-text-secondary">Identity Verified</span>
                        <Icon name="Check" size={20} color="var(--color-success)" />
                      </div>
                      <div className="bg-white rounded-lg p-4 flex items-center justify-between">
                        <span className="text-text-secondary">Background Clear</span>
                        <Icon name="Check" size={20} color="var(--color-success)" />
                      </div>
                      <div className="bg-white rounded-lg p-4 flex items-center justify-between">
                        <span className="text-text-secondary">License Active</span>
                        <Icon name="Check" size={20} color="var(--color-success)" />
                      </div>
                      <div className="bg-white rounded-lg p-4 flex items-center justify-between">
                        <span className="text-text-secondary">Insurance Confirmed</span>
                        <Icon name="Check" size={20} color="var(--color-success)" />
                      </div>
                      <div className="bg-white rounded-lg p-4 flex items-center justify-between">
                        <span className="text-text-secondary">Skills Assessed</span>
                        <Icon name="Check" size={20} color="var(--color-success)" />
                      </div>
                    </div>

                    <div className="mt-6 bg-success-50 rounded-lg p-4 text-center">
                      <div className="text-success-600 font-bold">✓ Verified Professional</div>
                      <div className="text-sm text-success-600">Ready to serve customers</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-surface to-primary-50 rounded-3xl p-8 lg:p-12 text-center">
                <h4 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">
                  98% Pass Rate
                </h4>
                <p className="text-lg text-text-secondary mb-6">
                  Only the most qualified professionals make it through our verification process
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-primary-600 mb-2">2,847</div>
                    <div className="text-text-secondary">Applications Reviewed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-success-600 mb-2">2,789</div>
                    <div className="text-text-secondary">Professionals Verified</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent-600 mb-2">58</div>
                    <div className="text-text-secondary">Applications Rejected</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Trust Partners Tab */}
          {activeTab === 'partners' && (
            <div className="fade-in">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-text-primary mb-4">
                  Trusted Verification Partners
                </h3>
                <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                  We partner with industry-leading verification services to ensure comprehensive background checks and professional validation.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {partners.map((partner, index) => (
                  <div key={index} className="card-elevated p-8 hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-surface rounded-xl overflow-hidden flex items-center justify-center">
                        <Image
                          src={partner.logo}
                          alt={partner.name}
                          className="w-full h-full object-cover opacity-60"
                        />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-text-primary">{partner.name}</h4>
                        <p className="text-primary font-medium">{partner.type}</p>
                      </div>
                    </div>
                    <p className="text-text-secondary leading-relaxed">{partner.description}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-8 lg:p-12 text-white text-center">
                <h4 className="text-2xl lg:text-3xl font-bold mb-4">
                  Industry-Leading Standards
                </h4>
                <p className="text-xl mb-8 opacity-90">
                  Our verification partners maintain the highest standards in the industry
                </p>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <Icon name="Shield" size={32} color="white" className="mx-auto mb-4" />
                    <div className="font-bold mb-2">Secure</div>
                    <div className="text-sm opacity-90">Bank-level security</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <Icon name="Clock" size={32} color="white" className="mx-auto mb-4" />
                    <div className="font-bold mb-2">Fast</div>
                    <div className="text-sm opacity-90">24-48 hour processing</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <Icon name="CheckCircle" size={32} color="white" className="mx-auto mb-4" />
                    <div className="font-bold mb-2">Accurate</div>
                    <div className="text-sm opacity-90">99.9% accuracy rate</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <Icon name="Globe" size={32} color="white" className="mx-auto mb-4" />
                    <div className="font-bold mb-2">Comprehensive</div>
                    <div className="text-sm opacity-90">Multi-state coverage</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Safety Features Tab */}
          {activeTab === 'safety' && (
            <div className="fade-in">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
                <div>
                  <h3 className="text-3xl font-bold text-text-primary mb-6">
                    Your Safety is Our Priority
                  </h3>
                  <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                    Beyond verification, we provide multiple layers of protection to ensure every interaction and transaction is safe and secure.
                  </p>

                  <div className="space-y-6">
                    {safetyFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className={`w-12 h-12 bg-${feature.color}-100 rounded-full flex items-center justify-center flex-shrink-0`}>
                          <Icon name={feature.icon} size={20} color={`var(--color-${feature.color})`} />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-text-primary mb-2">{feature.title}</h4>
                          <p className="text-text-secondary">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-gradient-to-br from-success-50 to-primary-50 rounded-3xl p-8 lg:p-12">
                    <div className="text-center mb-8">
                      <div className="w-20 h-20 bg-gradient-to-br from-success-500 to-success-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name="Lock" size={40} color="white" />
                      </div>
                      <h4 className="text-2xl font-bold text-text-primary mb-2">Protected Transaction</h4>
                      <p className="text-text-secondary">Your project is fully covered</p>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 border-l-4 border-success-500">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-text-primary">Liability Coverage</span>
                          <span className="text-success-600 font-bold">$2,000,000</span>
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-4 border-l-4 border-primary-500">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-text-primary">Payment Protection</span>
                          <Icon name="Shield" size={20} color="var(--color-primary)" />
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-4 border-l-4 border-accent-500">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-text-primary">24/7 Support</span>
                          <Icon name="Headphones" size={20} color="var(--color-accent)" />
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-4 border-l-4 border-warning-500">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-text-primary">Quality Guarantee</span>
                          <Icon name="Star" size={20} color="var(--color-warning)" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-surface to-accent-50 rounded-3xl p-8 lg:p-12">
                <div className="text-center mb-8">
                  <h4 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">
                    Peace of Mind Guarantee
                  </h4>
                  <p className="text-lg text-text-secondary">
                    If anything goes wrong, we make it right
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="RefreshCw" size={24} color="var(--color-success)" />
                    </div>
                    <h5 className="font-bold text-text-primary mb-2">Work Guarantee</h5>
                    <p className="text-sm text-text-secondary">Free rework if not satisfied</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="CreditCard" size={24} color="var(--color-primary)" />
                    </div>
                    <h5 className="font-bold text-text-primary mb-2">Payment Protection</h5>
                    <p className="text-sm text-text-secondary">Secure escrow payments</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="MessageCircle" size={24} color="var(--color-accent)" />
                    </div>
                    <h5 className="font-bold text-text-primary mb-2">Dispute Resolution</h5>
                    <p className="text-sm text-text-secondary">Fair mediation process</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-warning-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Phone" size={24} color="var(--color-warning)" />
                    </div>
                    <h5 className="font-bold text-text-primary mb-2">Emergency Support</h5>
                    <p className="text-sm text-text-secondary">24/7 help when needed</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Experience True Trust?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join our waitlist and be among the first to work with verified professionals.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('waitlist');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-primary font-bold py-4 px-8 rounded-lg hover:bg-surface transition-all duration-200 flex items-center space-x-2 mx-auto shadow-medium"
            >
              <span>Join the Waitlist</span>
              <Icon name="ArrowRight" size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSafety;