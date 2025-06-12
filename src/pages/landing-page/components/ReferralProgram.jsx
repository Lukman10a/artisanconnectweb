import React from 'react';

const ReferralProgram = () => {
  const benefits = [
    {
      title: "Refer an Artisan",
      reward: "₦5,000",
      description: "For each qualified artisan that joins and completes 3 jobs"
    },
    {
      title: "Refer a Customer",
      reward: "₦2,000",
      description: "When they complete their first service booking"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-primary-50 to-primary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Earn While You Share
          </h2>
          <p className="text-lg text-gray-600">
            Join our referral program and earn rewards for growing our community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md p-8 text-center"
            >
              <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-3xl font-bold text-primary-600 mb-4">
                {benefit.reward}
              </p>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReferralProgram;