import React from 'react';
import { Check, Star, Globe, Loader2 } from 'lucide-react';
import { useGeoCurrency } from '../hooks/useGeoCurrency';
import CurrencySelector from './CurrencySelector';

const Pricing = () => {
  const { currency, loading, pricing, countryName, setCurrency } = useGeoCurrency();

  const plans = [
    {
      name: 'Starter',
      price: pricing.plans.starter,
      description: 'Perfect for individuals and small projects',
      features: [
        'Up to 5 projects',
        'Basic AI code generation',
        'Community support',
        'Standard templates',
        '5GB storage',
        'Basic analytics',
      ],
      buttonText: 'Start Free Trial',
      popular: false,
    },
    {
      name: 'Professional',
      price: pricing.plans.professional,
      description: 'Ideal for growing teams and businesses',
      features: [
        'Up to 25 projects',
        'Advanced AI features',
        'Priority support',
        'Premium templates',
        '50GB storage',
        'Advanced analytics',
        'Custom integrations',
        'Team collaboration',
      ],
      buttonText: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: pricing.plans.enterprise,
      description: 'For large organizations and agencies',
      features: [
        'Unlimited projects',
        'Full AI capabilities',
        '24/7 dedicated support',
        'Custom templates',
        'Unlimited storage',
        'Real-time analytics',
        'White-label options',
        'Advanced security',
        'Custom training',
      ],
      buttonText: 'Contact Sales',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Simple and Transparent Pricing
          </h2>
          <p className="max-w-3xl mx-auto mb-6 text-xl text-gray-600">
            Choose the perfect plan for your needs. All plans include our core AI features and can be upgraded anytime.
          </p>
          
          {/* Currency Detection Status */}
          <div className="flex items-center justify-center mt-6 space-x-4">
            <div className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-700 rounded-full bg-blue-50">
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Detecting your location...
                </>
              ) : (
                <>
                  <Globe className="w-4 h-4 mr-2" />
                  Prices shown in {currency} {countryName && `for ${countryName}`}
                </>
              )}
            </div>
            
            {!loading && (
              <CurrencySelector
                currentCurrency={currency}
                onCurrencyChange={setCurrency}
              />
            )}
          </div>
          
        </div>

        <div className="grid max-w-5xl gap-8 mx-auto md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl border-2 p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                plan.popular
                  ? 'border-blue-500 shadow-xl scale-105'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute transform -translate-x-1/2 -top-4 left-1/2">
                  <div className="flex items-center px-6 py-2 text-sm font-medium text-white rounded-full bg-gradient-to-r from-blue-600 to-purple-600">
                    <Star className="w-4 h-4 mr-2" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="mb-8 text-center">
                <h3 className="mb-2 text-2xl font-bold text-gray-900">{plan.name}</h3>
                <p className="mb-6 text-gray-600">{plan.description}</p>
                <div className="mb-4">
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <Loader2 className="w-6 h-6 mr-2 text-gray-400 animate-spin" />
                      <span className="text-gray-500">Loading price...</span>
                    </div>
                  ) : (
                    <>
                      <span className="text-5xl font-bold text-gray-900">
                        {pricing.symbol}{plan.price.toLocaleString()}
                      </span>
                      <span className="text-gray-600">/month</span>
                    </>
                  )}
                </div>
              </div>

              <ul className="mb-8 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-12 text-center">
          <p className="mb-4 text-gray-600">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center">
              <Check className="w-4 h-4 mr-2 text-green-500" />
              Cancel anytime
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 mr-2 text-green-500" />
              Money-back guarantee
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 mr-2 text-green-500" />
              24/7 support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;