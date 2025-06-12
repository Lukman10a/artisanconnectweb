import React, { useState } from "react";
import Icon from "components/AppIcon";
import Image from "components/Image";

const ProblemSection = ({ audience }) => {
  const [activeScenario, setActiveScenario] = useState(0);

  const homeownerProblems = [
    {
      title: "The Unreliable Contractor",
      description:
        "Shows up 3 hours late, gives vague estimates, and disappears for days without communication.",
      image:
        "https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=600",
      stats: "73% of homeowners have experienced this",
      icon: "Clock",
    },
    {
      title: "The Overpriced Quote",
      description:
        "Charges premium prices for basic work, adds mysterious fees, and demands payment upfront.",
      image:
        "https://images.pixabay.com/photo/2016/11/29/06/15/adult-1867665_960_720.jpg?auto=compress&cs=tinysrgb&w=600",
      stats: "Average markup: 40-60% above fair price",
      icon: "DollarSign",
    },
    {
      title: "The Quality Nightmare",
      description:
        "Cuts corners, uses cheap materials, and leaves you with work that needs to be redone.",
      image:
        "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=compress&cs=tinysrgb&w=600",
      stats: "1 in 4 projects require rework",
      icon: "AlertTriangle",
    },
  ];

  const artisanProblems = [
    {
      title: "Expensive Lead Generation",
      description:
        "Pay $50-200 per lead with no guarantee of conversion, eating into your profit margins.",
      image:
        "https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=600",
      stats: "Average cost: $125 per qualified lead",
      icon: "TrendingDown",
    },
    {
      title: "Platform Competition",
      description:
        "Race to the bottom pricing against unverified competitors who undercut quality work.",
      image:
        "https://images.pixabay.com/photo/2015/07/17/22/43/student-849825_960_720.jpg?auto=compress&cs=tinysrgb&w=600",
      stats: "Profit margins reduced by 30-50%",
      icon: "Users",
    },
    {
      title: "No Customer Relationships",
      description:
        "Platforms control customer communication, preventing you from building repeat business.",
      image:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=compress&cs=tinysrgb&w=600",
      stats: "85% of work comes from referrals",
      icon: "UserX",
    },
  ];

  const problems =
    audience === "homeowner" ? homeownerProblems : artisanProblems;

  const solutions = {
    homeowner: [
      {
        title: "Verified Professionals Only",
        description:
          "Every artisan passes background checks, skill assessments, and insurance verification.",
        icon: "ShieldCheck",
        color: "success",
      },
      {
        title: "Guaranteed Response Time",
        description:
          "Get responses within 2 hours or we'll find you another qualified professional.",
        icon: "Clock",
        color: "primary",
      },
      {
        title: "Fair, Transparent Pricing",
        description:
          "See upfront pricing based on local market rates with no hidden fees.",
        icon: "DollarSign",
        color: "accent",
      },
    ],
    artisan: [
      {
        title: "Direct Customer Access",
        description:
          "Build relationships directly with homeowners without platform interference.",
        icon: "Users",
        color: "success",
      },
      {
        title: "No Lead Generation Fees",
        description:
          "Keep 100% of your earnings with our transparent subscription model.",
        icon: "TrendingUp",
        color: "primary",
      },
      {
        title: "Quality-Focused Matching",
        description:
          "Get matched with customers who value craftsmanship over lowest price.",
        icon: "Star",
        color: "accent",
      },
    ],
  };

  return (
    <section id="problem" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            {audience === "homeowner"
              ? "Tired of Unreliable Contractors?"
              : "Frustrated with Current Platforms?"}
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {audience === "homeowner"
              ? "You're not alone. Thousands of homeowners face the same frustrating experiences with contractors who don't show up, overcharge, or deliver poor quality work."
              : "You're not alone. Skilled artisans are tired of expensive lead generation, price competition, and platforms that prevent direct customer relationships."}
          </p>
        </div>

        {/* Problem Scenarios */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {problems.map((problem, index) => (
              <div
                key={index}
                className={`card-elevated p-8 cursor-pointer transition-all duration-300 hover:shadow-2xl ${
                  activeScenario === index
                    ? "ring-2 ring-primary shadow-2xl"
                    : ""
                }`}
                onClick={() => setActiveScenario(index)}
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-error-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name={problem.icon}
                      size={32}
                      color="var(--color-error)"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">
                    {problem.title}
                  </h3>
                </div>

                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <Image
                    src={problem.image}
                    alt={problem.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="text-text-secondary mb-4 leading-relaxed">
                  {problem.description}
                </p>

                <div className="bg-error-50 rounded-lg p-3 text-center">
                  <div className="text-sm font-semibold text-error-600">
                    {problem.stats}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Before vs After */}
        <div className="bg-gradient-to-r from-surface to-primary-50 rounded-3xl p-8 lg:p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              There's a Better Way
            </h3>
            <p className="text-xl text-text-secondary">
              See how ArtisanConnect solves these problems
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Before */}
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-error-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="X" size={32} color="var(--color-error)" />
                </div>
                <h4 className="text-2xl font-bold text-error-600 mb-2">
                  Before ArtisanConnect
                </h4>
              </div>

              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 bg-white rounded-lg p-4 border border-error-200"
                  >
                    <Icon
                      name="X"
                      size={20}
                      color="var(--color-error)"
                      className="mt-1 flex-shrink-0"
                    />
                    <div>
                      <div className="font-semibold text-text-primary">
                        {problem.title}
                      </div>
                      <div className="text-sm text-text-secondary">
                        {problem.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* After */}
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Check" size={32} color="var(--color-success)" />
                </div>
                <h4 className="text-2xl font-bold text-success-600 mb-2">
                  With ArtisanConnect
                </h4>
              </div>

              <div className="space-y-4">
                {solutions[audience].map((solution, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 bg-white rounded-lg p-4 border border-success-200"
                  >
                    <div
                      className={`w-6 h-6 bg-${solution.color}-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1`}
                    >
                      <Icon
                        name={solution.icon}
                        size={16}
                        color={`var(--color-${solution.color})`}
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-text-primary">
                        {solution.title}
                      </div>
                      <div className="text-sm text-text-secondary">
                        {solution.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready for a Better Experience?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of{" "}
              {audience === "homeowner" ? "homeowners" : "artisans"} who are
              waiting for a platform that actually works.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById("waitlist");
                if (element) element.scrollIntoView({ behavior: "smooth" });
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

export default ProblemSection;
