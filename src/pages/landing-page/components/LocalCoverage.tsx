import React from 'react';

type ServiceArea = {
  city: string;
  areas: string[];
  artisanCount: number;
};

const LocalCoverage: React.FC = () => {
  const locations: ServiceArea[] = [
    {
      city: 'Lagos',
      areas: ['Ikeja', 'Lekki', 'Victoria Island', 'Ikoyi'],
      artisanCount: 250
    },
    {
      city: 'Abuja',
      areas: ['Wuse', 'Garki', 'Maitama', 'Asokoro'],
      artisanCount: 180
    },
    {
      city: 'Port Harcourt',
      areas: ['GRA', 'Trans Amadi', 'Old Port', 'Diobu'],
      artisanCount: 150
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Local Coverage Areas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((location) => (
            <div 
              key={location.city}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4">{location.city}</h3>
              <ul className="space-y-2 mb-4">
                {location.areas.map((area) => (
                  <li key={area} className="text-gray-600">• {area}</li>
                ))}
              </ul>
              <p className="text-primary-600 font-medium">
                {location.artisanCount}+ verified artisans
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocalCoverage;