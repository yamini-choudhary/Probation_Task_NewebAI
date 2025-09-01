import React, { useState } from "react";
import { ArrowRight, Play, CheckCircle } from "lucide-react";
import { useGeoCurrency } from "../hooks/useGeoCurrency";

const Hero = () => {
  const [email, setEmail] = useState("");
  const { pricing } = useGeoCurrency();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email submitted:", email);
  };

  return (
    <section
      id="home"
      className="relative flex items-center min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-white"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bg-blue-400 rounded-full top-20 left-20 w-72 h-72 mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bg-purple-400 rounded-full top-40 right-20 w-72 h-72 mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bg-green-400 rounded-full bottom-40 left-1/2 w-72 h-72 mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="px-4 pt-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
                <CheckCircle className="w-4 h-4 mr-2" />
                Trusted by 1,000+ companies already growing
              </div>

              <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Revolutionize Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Web Development
                </span>
                with AI
              </h1>

              <p className="text-lg leading-relaxed text-gray-600 sm:text-xl">
                neweb.ai simplifies web development with AI-powered automation,
                real-time code generation, and intelligent design suggestions.
                Build websites faster than ever before.
              </p>
              <div className="p-4 text-left border border-blue-200 rounded-lg bg-blue-50">
                <p className="mb-2 font-medium text-blue-800">
                  🚀 Special Launch Offer
                </p>
                <p className="text-blue-700">
                  Start building with AI today from just{" "}
                  <span className="font-bold">
                    {pricing.symbol}
                    {pricing.plans.starter}/month
                  </span>
                </p>
              </div>
            </div>

            {/* Email Signup Form */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-6 py-4 text-gray-900 placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-200 font-medium flex items-center justify-center group shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </form>

            {/* Trust indicators */}
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                Free 14-day trial
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                No credit card required
              </div>
            </div>
          </div>

          {/* Right Content - Mock Dashboard Preview */}
          <div className="relative">
            <div className="relative overflow-hidden bg-white border shadow-2xl rounded-2xl">
              {/* Dashboard Header */}
              <div className="p-6 bg-gradient-to-r from-blue-600 to-purple-600">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-white/20"></div>
                    <span className="font-semibold text-white">
                      neweb.ai Dashboard
                    </span>
                  </div>
                  <button className="flex items-center px-4 py-2 space-x-2 text-white transition-colors duration-200 rounded-lg bg-white/20 hover:bg-white/30">
                    <Play className="w-4 h-4" />
                    <span>Watch Demo</span>
                  </button>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-4 gap-4">
                  <div className="p-4 rounded-lg bg-blue-50">
                    <div className="text-2xl font-bold text-blue-600">85%</div>
                    <div className="text-sm text-gray-600">
                      Faster Development
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-green-50">
                    <div className="text-2xl font-bold text-green-600">
                      99.9%
                    </div>
                    <div className="text-sm text-gray-600">Uptime</div>
                  </div>
                  <div className="p-4 rounded-lg bg-purple-50">
                    <div className="text-2xl font-bold text-purple-600">
                      50K+
                    </div>
                    <div className="text-sm text-gray-600">Sites Built</div>
                  </div>
                  <div className="p-4 rounded-lg bg-orange-50">
                    <div className="text-2xl font-bold text-orange-600">
                      24/7
                    </div>
                    <div className="text-sm text-gray-600">AI Support</div>
                  </div>
                </div>

                {/* Mock Chart */}
                <div className="p-6 rounded-lg bg-gray-50">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">
                      Development Speed
                    </h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-end h-24 space-x-2">
                    {[40, 65, 45, 80, 55, 90, 75].map((height, index) => (
                      <div
                        key={index}
                        className="rounded-t bg-gradient-to-t from-blue-500 to-blue-400"
                        style={{ height: `${height}%`, width: "12px" }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements for visual pop */}
            <div className="absolute p-3 text-white bg-green-500 rounded-lg shadow-lg -top-4 -right-4 animate-bounce">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div className="absolute p-3 text-white bg-purple-500 rounded-lg shadow-lg -bottom-4 -left-4 animate-pulse">
              <Play className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
