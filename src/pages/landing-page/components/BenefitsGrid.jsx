import React from 'react';
import Icon from 'components/AppIcon';

const BenefitsGrid = ({ audience }) => {
  const homeownerBenefits = [
    {
      icon: 'Shield',
      title: 'Verified Professionals Only',
      description: 'Every artisan passes comprehensive background checks, license verification, and skill assessments before joining our platform.',
      color: 'success',
      stats: '100% Background Checked'
    },
    {
      icon: 'Clock',
      title: 'Guaranteed Response Time',
      description: 'Get responses within 2 hours or we automatically find you another qualified professional at no extra cost.',
      color: 'primary',
      stats: 'Average: 47 minutes'
    },
    {
      icon: 'DollarSign',
      title: 'Fair, Transparent Pricing',
      description: 'See upfront pricing based on local market rates with no hidden fees or surprise charges.',
      color: 'accent',
      stats: 'No Hidden Fees'
    },
    {
      icon: 'Star',
      title: 'Quality Guarantee',
      description: 'All work is backed by our quality guarantee and comprehensive insurance coverage for your peace of mind.',
      color: 'warning',
      stats: '$2M Insurance Coverage'
    },
    {
      icon: 'MessageCircle',
      title: 'Direct Communication',
      description: 'Chat directly with artisans, share photos, and get real-time updates on your project progress.',
      color: 'primary',
      stats: 'Real-time Updates'
    },
    {
      icon: 'Users',
      title: 'Build Relationships',
      description: 'Find your go-to professionals for future projects and build lasting relationships with trusted artisans.',
      color: 'success',
      stats: '85% Repeat Customers'
    }
  ];

  const artisanBenefits = [
    {
      icon: 'Users',
      title: 'Direct Customer Access',
      description: 'Build direct relationships with homeowners without platform interference or communication restrictions.',
      color: 'success',
      stats: 'No Platform Interference'
    },
    {
      icon: 'TrendingUp',
      title: 'No Lead Generation Fees',
      description: 'Keep 100% of your earnings with our transparent monthly subscription model instead of per-lead charges.',
      color: 'primary',
      stats: 'Keep 100% of Earnings'
    },
    {
      icon: 'Star',
      title: 'Quality-Focused Matching',
      description: 'Get matched with customers who value craftsmanship and are willing to pay fair prices for quality work.',
      color: 'accent',
      stats: 'Premium Customer Base'
    },
    {
      icon: 'Shield',
      title: 'Professional Credibility',
      description: 'Our verification process showcases your skills and builds trust with potential customers from day one.',
      color: 'warning',
      stats: 'Verified Professional Badge'
    },
    {
      icon: 'Calendar',
      title: 'Flexible Scheduling',
      description: 'Accept jobs that fit your schedule and availability without pressure to take every lead.',
      color: 'primary',
      stats: 'Work on Your Terms'
    },
    {
      icon: 'Repeat',
      title: 'Repeat Business',
      description: 'Build a loyal customer base that comes back for future projects and refers you to their network.',
      color: 'success',
      stats: '3x More Repeat Work'
    }
  ];

  const benefits = audience === 'homeowner' ? homeownerBenefits : artisanBenefits;

  const testimonials = {
    homeowner: {
      quote: "Finally, a platform where I can trust the professionals. No more unreliable contractors or surprise fees.",
      author: "Sarah M.",
      role: "Homeowner, Austin TX",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face"
    },
    artisan: {
      quote: "I\'m making 40% more per project because customers value quality work over the cheapest bid.",
      author: "Mike R.",
      role: "Licensed Electrician",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
    }
  };

  return (
    <section id="benefits" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            {audience === 'homeowner' 
              ? "Why Homeowners Choose ArtisanConnect" :"Why Artisans Love ArtisanConnect"
            }
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {audience === 'homeowner'
              ? "Experience the difference of working with verified professionals who value your project as much as you do."
              : "Join a platform that respects your expertise and helps you build a thriving business with quality customers."
            }
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="card-elevated p-8 hover:shadow-2xl transition-all duration-300 group">
              <div className="text-center mb-6">
                <div className={`w-16 h-16 bg-${benefit.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={benefit.icon} size={32} color={`var(--color-${benefit.color})`} />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">{benefit.title}</h3>
              </div>
              
              <p className="text-text-secondary leading-relaxed mb-6">{benefit.description}</p>
              
              <div className={`bg-${benefit.color}-50 rounded-lg p-3 text-center`}>
                <div className={`text-sm font-semibold text-${benefit.color}-600`}>{benefit.stats}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="bg-gradient-to-r from-surface to-primary-50 rounded-3xl p-8 lg:p-12 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6 border-4 border-white shadow-medium">
              <img 
                src={testimonials[audience].avatar} 
                alt={testimonials[audience].author}
                className="w-full h-full object-cover"
              />
            </div>
            
            <blockquote className="text-2xl lg:text-3xl font-medium text-text-primary mb-6 leading-relaxed">
              "{testimonials[audience].quote}"
            </blockquote>
            
            <div className="flex items-center justify-center space-x-4">
              <div>
                <div className="font-bold text-text-primary">{testimonials[audience].author}</div>
                <div className="text-text-secondary">{testimonials[audience].role}</div>
              </div>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" size={16} color="var(--color-warning)" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-3xl shadow-2xl border border-border overflow-hidden">
          <div className="bg-gradient-to-r from-primary to-accent p-8 text-white text-center">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              See the Difference
            </h3>
            <p className="text-xl opacity-90">
              Compare ArtisanConnect with traditional methods
            </p>
          </div>

          <div className="p-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-6 font-bold text-text-primary">Feature</th>
                    <th className="text-center py-4 px-6 font-bold text-error-600">Traditional Methods</th>
                    <th className="text-center py-4 px-6 font-bold text-success-600">ArtisanConnect</th>
                  </tr>
                </thead>
                <tbody>
                  {audience === 'homeowner' ? [
                    ['Verification Process', 'None or minimal', 'Comprehensive background checks'],
                    ['Response Time', '24-48 hours or never', 'Guaranteed under 2 hours'],
                    ['Pricing Transparency', 'Hidden fees common', 'Upfront, transparent pricing'],
                    ['Quality Guarantee', 'Rarely offered', 'Full quality guarantee'],
                    ['Insurance Coverage', 'Often unclear', '$2M liability coverage'],
                    ['Communication', 'Phone tag, delays', 'Direct chat, real-time updates']
                  ] : [
                    ['Lead Generation Cost', '$50-200 per lead', 'No per-lead fees'],
                    ['Customer Quality', 'Price-focused only', 'Quality-focused customers'],
                    ['Platform Fees', '15-30% commission', 'Simple monthly subscription'],
                    ['Customer Relationships', 'Platform controlled', 'Direct access'],
                    ['Professional Recognition', 'Limited verification', 'Comprehensive skill validation'],
                    ['Repeat Business', 'Difficult to build', 'Built-in relationship tools']
                  ].map(([feature, traditional, artisan], index) => (
                    <tr key={index} className="border-b border-surface-200 hover:bg-surface-50 transition-colors">
                      <td className="py-4 px-6 font-medium text-text-primary">{feature}</td>
                      <td className="py-4 px-6 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <Icon name="X" size={16} color="var(--color-error)" />
                          <span className="text-text-secondary">{traditional}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <Icon name="Check" size={16} color="var(--color-success)" />
                          <span className="text-text-primary font-medium">{artisan}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join the waitlist and be among the first to access our platform when we launch.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('waitlist');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-accent-600 font-bold py-4 px-8 rounded-lg hover:bg-accent-50 transition-all duration-200 flex items-center space-x-2 mx-auto shadow-medium"
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

export default BenefitsGrid;