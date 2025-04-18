import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const tiers = [
    {
      name: 'Starter',
      price: 29,
      description: 'Perfect for small businesses and startups',
      features: [
        '10,000 verifications/month',
        'Basic API access',
        'Email support',
        'Basic analytics',
      ],
    },
    {
      name: 'Professional',
      price: 79,
      description: 'For growing businesses with more demands',
      features: [
        '50,000 verifications/month',
        'Advanced API access',
        'Priority support',
        'Advanced analytics',
        'Bulk verification',
        'Custom integrations',
      ],
    },
    {
      name: 'Enterprise',
      price: 199,
      description: 'For large organizations with custom needs',
      features: [
        'Unlimited verifications',
        'Full API access',
        '24/7 phone support',
        'Advanced analytics',
        'Custom solutions',
        'Dedicated account manager',
        'SLA guarantee',
      ],
    },
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the plan that best fits your needs
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="bg-white rounded-lg shadow-lg divide-y divide-gray-200"
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900">{tier.name}</h3>
                <p className="mt-4 text-gray-500">{tier.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">${tier.price}</span>
                  <span className="text-base font-medium text-gray-500">/month</span>
                </p>
                <button
                  className="mt-8 w-full bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-md"
                >
                  Get started
                </button>
              </div>
              <div className="px-6 pt-6 pb-8">
                <h4 className="text-sm font-medium text-gray-900 tracking-wide uppercase">
                  What's included
                </h4>
                <ul className="mt-6 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex">
                      <Check className="flex-shrink-0 h-6 w-6 text-green-500" />
                      <span className="ml-3 text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;