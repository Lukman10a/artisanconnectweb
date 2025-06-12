import React from 'react';

const FAQSection = () => {
  const faqs = [
    {
      question: "How does ArtisanConnect verify artisans?",
      answer: "We conduct thorough background checks, verify professional credentials, and review past work history and client testimonials."
    },
    {
      question: "What happens if I'm not satisfied with the service?",
      answer: "We have a satisfaction guarantee policy. If you're not satisfied, we'll work to resolve the issue or provide a refund according to our terms."
    },
    {
      question: "How are service prices determined?",
      answer: "Artisans set their own rates based on their expertise and market rates. We ensure transparency with upfront pricing before work begins."
    },
    {
      question: "What areas do you currently serve?",
      answer: "We currently operate in major Nigerian cities including Lagos, Abuja, and Port Harcourt, with plans to expand to more locations."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;