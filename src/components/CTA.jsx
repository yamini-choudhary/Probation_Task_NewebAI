import { ArrowRight, Sparkles } from 'lucide-react';

const CTA = () => {
  return (
    <section className="relative py-20 overflow-hidden text-white bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 bg-blue-400 rounded-full w-96 h-96 mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 bg-purple-400 rounded-full w-96 h-96 mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
        <div className="mb-8">
          <Sparkles className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Get Started with neweb.ai Today
          </h2>
          <p className="max-w-2xl mx-auto text-xl leading-relaxed text-gray-300">
            Join thousands of developers who are already building faster, smarter websites with our AI-powered platform. Start your free trial now and experience the future of web development.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 mb-8 sm:flex-row">
          <button className="flex items-center px-8 py-4 font-semibold text-gray-900 transition-all duration-200 transform bg-white rounded-lg shadow-lg hover:bg-gray-100 hover:shadow-xl hover:-translate-y-1 group">
            Start Your Free Trial
            <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
          <button className="px-8 py-4 font-semibold text-white transition-all duration-200 border border-white rounded-lg hover:bg-white hover:text-gray-900">
            Schedule a Demo
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400">
          <div className="flex items-center">
            <div className="w-2 h-2 mr-2 bg-green-400 rounded-full"></div>
            14-day free trial
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 mr-2 bg-green-400 rounded-full"></div>
            No credit card required
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 mr-2 bg-green-400 rounded-full"></div>
            Cancel anytime
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;