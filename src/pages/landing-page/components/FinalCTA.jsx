import React from "react";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-primary-900 text-white">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Transform Your Service Experience?
        </h2>
        <p className="text-lg mb-8 text-primary-100">
          Join thousands of satisfied homeowners and skilled artisans on
          ArtisanConnect
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-white text-primary-900 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
            Find an Artisan
          </button>
          <button className="px-8 py-3 border-2 border-white rounded-lg font-semibold hover:bg-primary-800 transition-colors">
            Join as an Artisan
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
