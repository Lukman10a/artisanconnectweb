import React, { useState } from 'react';
import Icon from 'components/AppIcon';

const ServiceCategories = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = [
    {
      id: 'carpenter',
      name: 'Carpentry',
      icon: 'Hammer',
      description: 'Custom furniture, cabinets, trim work, and structural repairs',
      averageProject: '$850',
      demandLevel: 'High',
      artisanCount: 127,
      color: 'accent',
      services: ['Custom Furniture', 'Cabinet Installation', 'Trim & Molding', 'Deck Building', 'Flooring', 'Repairs']
    },
    {
      id: 'electrician',
      name: 'Electrical',
      icon: 'Zap',
      description: 'Wiring, outlets, lighting, panel upgrades, and electrical repairs',
      averageProject: '$650',
      demandLevel: 'Very High',
      artisanCount: 89,
      color: 'warning',
      services: ['Outlet Installation', 'Lighting Fixtures', 'Panel Upgrades', 'Wiring Repairs', 'Smart Home Setup', 'Safety Inspections']
    },
    {
      id: 'plumber',
      name: 'Plumbing',
      icon: 'Wrench',
      description: 'Pipe repairs, fixture installation, drain cleaning, and water heater service',
      averageProject: '$475',
      demandLevel: 'High',
      artisanCount: 94,
      color: 'primary',
      services: ['Leak Repairs', 'Fixture Installation', 'Drain Cleaning', 'Water Heater Service', 'Pipe Replacement', 'Emergency Repairs']
    },
    {
      id: 'tailor',
      name: 'Tailoring',
      icon: 'Scissors',
      description: 'Alterations, custom clothing, repairs, and specialty garment work',
      averageProject: '$125',
      demandLevel: 'Medium',
      artisanCount: 43,
      color: 'success',
      services: ['Alterations', 'Custom Clothing', 'Repairs', 'Hemming', 'Resizing', 'Special Occasions']
    },
    {
      id: 'painter',
      name: 'Painting',
      icon: 'Paintbrush',
      description: 'Interior and exterior painting, staining, and decorative finishes',
      averageProject: '$1,200',
      demandLevel: 'High',
      artisanCount: 76,
      color: 'accent',
      services: ['Interior Painting', 'Exterior Painting', 'Staining', 'Wallpaper', 'Touch-ups', 'Color Consultation']
    },
    {
      id: 'hvac',
      name: 'HVAC',
      icon: 'Wind',
      description: 'Heating, cooling, ventilation installation, maintenance, and repairs',
      averageProject: '$950',
      demandLevel: 'Very High',
      artisanCount: 52,
      color: 'primary',
      services: ['System Installation', 'Maintenance', 'Repairs', 'Duct Cleaning', 'Filter Replacement', 'Energy Audits']
    },
    {
      id: 'landscaping',
      name: 'Landscaping',
      icon: 'TreePine',
      description: 'Garden design, lawn care, tree service, and outdoor maintenance',
      averageProject: '$750',
      demandLevel: 'Medium',
      artisanCount: 68,
      color: 'success',
      services: ['Garden Design', 'Lawn Care', 'Tree Service', 'Irrigation', 'Hardscaping', 'Seasonal Cleanup']
    },
    {
      id: 'handyman',
      name: 'General Handyman',
      icon: 'Tool',
      description: 'Small repairs, assembly, mounting, and general maintenance tasks',
      averageProject: '$275',
      demandLevel: 'Very High',
      artisanCount: 156,
      color: 'warning',
      services: ['Small Repairs', 'Assembly', 'Mounting', 'Maintenance', 'Odd Jobs', 'Home Improvements']
    }
  ];

  const getDemandColor = (level) => {
    switch (level) {
      case 'Very High': return 'success';
      case 'High': return 'warning';
      case 'Medium': return 'primary';
      default: return 'text-muted';
    }
  };

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-white via-surface to-primary-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Trusted Artisans in Every Trade
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            From quick repairs to major projects, our verified professionals cover all your home service needs with expertise and reliability.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((category) => (
            <div
              key={category.id}
              className="card-elevated p-6 hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div className="text-center mb-4">
                <div className={`w-16 h-16 bg-${category.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={category.icon} size={32} color={`var(--color-${category.color})`} />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2">{category.name}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{category.description}</p>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-text-muted">Avg. Project</span>
                  <span className="font-bold text-text-primary">{category.averageProject}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-text-muted">Demand</span>
                  <span className={`text-sm font-semibold text-${getDemandColor(category.demandLevel)}-600`}>
                    {category.demandLevel}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-text-muted">Available Pros</span>
                  <span className="font-bold text-primary">{category.artisanCount}+</span>
                </div>
              </div>

              {/* Hover Details */}
              {hoveredCategory === category.id && (
                <div className="mt-4 pt-4 border-t border-surface-200 animate-fadeIn">
                  <div className="text-sm text-text-muted mb-2">Popular Services:</div>
                  <div className="flex flex-wrap gap-1">
                    {category.services.slice(0, 3).map((service, index) => (
                      <span key={index} className={`text-xs bg-${category.color}-50 text-${category.color}-700 px-2 py-1 rounded-full`}>
                        {service}
                      </span>
                    ))}
                    {category.services.length > 3 && (
                      <span className="text-xs text-text-muted px-2 py-1">
                        +{category.services.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Featured Category Spotlight */}
        <div className="bg-white rounded-3xl shadow-2xl border border-border overflow-hidden mb-16">
          <div className="grid lg:grid-cols-2">
            {/* Content */}
            <div className="p-8 lg:p-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center">
                  <Icon name="TrendingUp" size={24} color="var(--color-accent)" />
                </div>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-text-primary">Most In-Demand</h3>
                  <p className="text-text-secondary">Electrical Services</p>
                </div>
              </div>

              <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                Electrical work is our most requested service category, with homeowners seeking everything from simple outlet installations to complete panel upgrades. Our licensed electricians are ready to handle any project safely and efficiently.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-600 mb-2">89+</div>
                  <div className="text-sm text-text-secondary">Licensed Electricians</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-success-600 mb-2">4.9★</div>
                  <div className="text-sm text-text-secondary">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">&lt; 2hrs</div>
                  <div className="text-sm text-text-secondary">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-warning-600 mb-2">100%</div>
                  <div className="text-sm text-text-secondary">Licensed & Insured</div>
                </div>
              </div>

              <button
                onClick={() => {
                  const element = document.getElementById('waitlist');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-accent flex items-center space-x-2"
              >
                <span>Find Electricians</span>
                <Icon name="ArrowRight" size={18} />
              </button>
            </div>

            {/* Visual */}
            <div className="bg-gradient-to-br from-accent-50 to-accent-100 p-8 lg:p-12 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-accent-500 to-accent-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <Icon name="Zap" size={64} color="white" />
                </div>
                <div className="space-y-2">
                  <div className="bg-white rounded-lg p-3 shadow-medium">
                    <div className="text-sm font-semibold text-text-primary">Mike R. - Master Electrician</div>
                    <div className="text-xs text-success-600">Available now • 2.3 miles away</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-medium">
                    <div className="text-sm font-semibold text-text-primary">Sarah L. - Licensed Electrician</div>
                    <div className="text-xs text-success-600">Available today • 1.8 miles away</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-medium">
                    <div className="text-sm font-semibold text-text-primary">David K. - Electrical Contractor</div>
                    <div className="text-xs text-success-600">Available tomorrow • 3.1 miles away</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Request Preview */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join our waitlist and be the first to connect with verified artisans in your area when we launch.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Icon name="Search" size={32} color="white" className="mx-auto mb-4" />
                <h4 className="font-bold mb-2">Find Artisans</h4>
                <p className="text-sm opacity-90">Browse verified professionals in your area</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Icon name="MessageCircle" size={32} color="white" className="mx-auto mb-4" />
                <h4 className="font-bold mb-2">Connect Directly</h4>
                <p className="text-sm opacity-90">Chat and schedule without middlemen</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Icon name="CheckCircle" size={32} color="white" className="mx-auto mb-4" />
                <h4 className="font-bold mb-2">Get It Done</h4>
                <p className="text-sm opacity-90">Quality work with full guarantee</p>
              </div>
            </div>

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

export default ServiceCategories;