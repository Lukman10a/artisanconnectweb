import React from 'react';

const FounderStory = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Born from personal experiences with the challenges of finding reliable
                artisans, ArtisanConnect was created to bridge the gap between
                skilled professionals and homeowners.
              </p>
              <p>
                Our mission is to empower local artisans while providing homeowners
                with a trusted platform to find verified professionals for their
                home service needs.
              </p>
              <p>
                We believe in building a community where quality craftsmanship meets
                fair opportunities, creating lasting relationships between artisans
                and homeowners.
              </p>
            </div>
          </div>
          <div className="lg:pl-8">
            <img
              src="/images/founder-story.jpg"
              alt="Artisan at work"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderStory;