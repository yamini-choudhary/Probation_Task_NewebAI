import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How do I sign up for neweb.ai?",
      answer:
        'Getting started is simple! Click the "Start Free Trial" button, enter your email, and you\'ll be guided through our quick setup process. No credit card required for the 14-day trial.',
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Absolutely! You can upgrade or downgrade your plan at any time from your account dashboard. Changes take effect immediately, and we'll prorate any billing adjustments.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "You can cancel your subscription at any time with no cancellation fees. Your access will continue until the end of your current billing period, and we offer a 30-day money-back guarantee.",
    },
    {
      question: "Can your API integrate with a website or CRM?",
      answer:
        "Yes! Our comprehensive API allows seamless integration with websites, CRMs, and over 500+ third-party platforms. We provide detailed documentation and SDKs for popular programming languages.",
    },
    {
      question: "How does billing work?",
      answer:
        "We bill monthly or annually based on your chosen plan. Annual subscriptions receive a 20% discount. All billing is handled securely through Stripe, and you'll receive detailed invoices for your records.",
    },
    {
      question: "How do I change my account email?",
      answer:
        "To change your account email, go to Account Settings > Profile, enter your new email address, and verify it through the confirmation email we'll send. The change takes effect immediately after verification.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about neweb.ai and our AI-powered
            development platform.
          </p>
        </div>

        {/* FAQ accordion list */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden transition-all duration-200 border border-gray-200 rounded-lg bg-gray-50 hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full px-6 py-5 text-left transition-colors duration-200 hover:bg-gray-100"
              >
                <span className="pr-4 font-semibold text-gray-900">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-blue-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-500" />
                  )}
                </div>
              </button>

              <div
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "py-4 max-h-96" : "max-h-0"
                }`}
              >
                <p className="leading-relaxed text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action for support */}
        <div className="mt-12 text-center">
          <p className="mb-4 text-gray-600">Still have questions?</p>
          <button className="px-8 py-3 font-medium text-white transition-colors duration-200 bg-blue-600 rounded-lg hover:bg-blue-700">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
