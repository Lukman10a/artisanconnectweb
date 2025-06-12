import React from 'react';

const LaunchTimeline = () => {
  const timelineEvents = [
    {
      date: 'Q1 2024',
      title: 'Beta Launch',
      description: 'Platform testing with selected artisans and homeowners'
    },
    {
      date: 'Q2 2024',
      title: 'Public Launch',
      description: 'Full platform release in initial target markets'
    },
    {
      date: 'Q3 2024',
      title: 'Feature Expansion',
      description: 'Rolling out enhanced features based on user feedback'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-12">
      <div className="space-y-8">
        {timelineEvents.map((event, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex-none">
              <div className="bg-primary-100 text-primary-600 font-semibold px-4 py-2 rounded">
                {event.date}
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-semibold">{event.title}</h3>
              <p className="text-gray-600">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LaunchTimeline;