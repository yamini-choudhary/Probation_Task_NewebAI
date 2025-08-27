import { Code, Zap, Shield, Globe, Smartphone, BarChart3 } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Code,
      title: "AI Code Generation",
      description:
        "Generate clean, optimized code instantly with our advanced AI that understands your project context and coding standards.",
    },
    {
      icon: Zap,
      title: "Lightning Fast Development",
      description:
        "Build websites 10x faster with automated workflows, intelligent suggestions, and real-time collaboration tools.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Bank-level security with end-to-end encryption, secure hosting, and compliance with industry standards.",
    },
    {
      icon: Globe,
      title: "Global CDN",
      description:
        "Deploy your websites worldwide with our global content delivery network for optimal performance everywhere.",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description:
        "Every website is automatically optimized for mobile devices with responsive design and touch-friendly interfaces.",
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description:
        "Track performance, user behavior, and conversion rates with comprehensive analytics and reporting tools.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Revolutionary Tools for Smarter
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Web Development
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Leverage AI-powered development tools that understand your needs and
            help you build exceptional web experiences faster than ever.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="relative p-8 transition-all duration-300 transform bg-white border border-gray-100 group rounded-2xl hover:border-blue-200 hover:shadow-xl hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl group-hover:opacity-100"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6 transition-transform duration-300 w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl group-hover:scale-110">
                  <feature.icon className="text-white w-7 h-7" />
                </div>

                <h3 className="mb-4 text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
                  {feature.title}
                </h3>

                <p className="leading-relaxed text-gray-600">
                  {feature.description}
                </p>

                <div className="mt-6">
                  <button className="flex items-center font-medium text-blue-600 group-hover:underline">
                    Learn more
                    <svg
                      className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
