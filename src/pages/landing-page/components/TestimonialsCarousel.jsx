// /home/ubuntu/app/artisanconnect/src/pages/landing-page/components/TestimonialsCarousel.jsx
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Homeowner',
    testimonial: 'ArtisanConnect made finding a reliable plumber so easy. The platform connected me with a skilled professional who fixed my issue right away.',
    rating: 5,
    homeowner: true,
    artisan: false
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    role: 'Electrician',
    testimonial: 'Since joining ArtisanConnect, I\'ve been able to grow my business significantly. The platform connects me with clients looking for quality work.',
    rating: 5,
    homeowner: false,
    artisan: true
  },
  {
    id: 3,
    name: 'Emily Chen',
    role: 'Homeowner',
    testimonial: 'I was skeptical at first, but ArtisanConnect delivered on their promise. Found a great carpenter who built custom shelving for my home office.',
    rating: 4,
    homeowner: true,
    artisan: false
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'Plumber',
    testimonial: 'The platform handles all the scheduling and payment processing, which lets me focus on what I do best - providing quality plumbing services.',
    rating: 5,
    homeowner: false,
    artisan: true
  }
];

const TestimonialsCarousel = ({ audience }) => {
  // Filter testimonials based on audience type
  const filteredTestimonials = testimonials.filter(testimonial => 
    audience === 'homeowner' ? testimonial.homeowner : testimonial.artisan
  );

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">What People Are Saying</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          {audience === 'homeowner' ?'Hear from homeowners who found reliable artisans through our platform' :'Discover how artisans are growing their business with ArtisanConnect'}
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {filteredTestimonials.map((item) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <span className="text-primary text-xl font-bold">{item.name.charAt(0)}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-gray-600 text-sm">{item.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className={`w-5 h-5 ${i < item.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">"{item.testimonial}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;