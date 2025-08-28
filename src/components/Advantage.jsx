import { CheckCircle, Clock, Users, TrendingUp, Award } from "lucide-react";

const Advantage = () => {
  const advantages = [
    {
      icon: CheckCircle,
      title: "Customizable Solutions for Every Need",
      description:
        "Tailor every solution to your specific requirements with our flexible platform that adapts to any project size or complexity.",
      stat: "95%",
      statLabel: "Customer Satisfaction",
    },
    {
      icon: Clock,
      title: "24/7 Customer Support",
      description:
        "Get dedicated support anytime, ensuring your financial emergencies are always handled with expert guidance and immediate assistance.",
      stat: "<5min",
      statLabel: "Average Response Time",
    },
    {
      icon: Users,
      title: "Seamless Integration with Multiple Platforms",
      description:
        "Connect with over 500+ third-party apps, banks, and financial services to create a unified development ecosystem that works for you.",
      stat: "500+",
      statLabel: "Platform Integrations",
    },
    {
      icon: TrendingUp,
      title: "Advanced Analytics",
      description:
        "Make data-driven decisions with comprehensive analytics that provide actionable insights into your development performance and ROI.",
      stat: "10x",
      statLabel: "Faster Insights",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            The neweb.ai Advantage
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Discover how neweb.ai empowers you to achieve superior web
            development results with unmatched flexibility and innovation.
          </p>
        </div>

        <div className="grid items-center gap-12 mb-20 lg:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden bg-white shadow-2xl rounded-2xl">
              <img
                src="https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional using neweb.ai dashboard"
                className="object-cover w-full h-96"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute text-white bottom-6 left-6">
                <div className="flex items-center mb-2 space-x-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">
                    Live Development Session
                  </span>
                </div>
                <p className="text-lg font-semibold">
                  Building Next-Gen Web Apps
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {advantages.map((advantage) => (
              <div key={advantage.title} className="flex items-start space-x-4">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg">
                  <advantage.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {advantage.title}
                    </h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">
                        {advantage.stat}
                      </div>
                      <div className="text-sm text-gray-500">
                        {advantage.statLabel}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Call to Action (CTA) section */}
        <div className="p-8 text-center text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl">
          <div className="max-w-3xl mx-auto">
            <Award className="w-16 h-16 mx-auto mb-4 opacity-80" />
            <h3 className="mb-4 text-2xl font-bold">
              Ready to Experience the neweb.ai Advantage?
            </h3>
            <p className="mb-6 text-xl text-blue-100">
              Join thousands of developers who have already transformed their
              workflow with our AI-powered platform.
            </p>
            <button className="px-8 py-4 font-semibold text-blue-600 transition-all duration-200 transform bg-white rounded-lg shadow-lg hover:bg-gray-100 hover:shadow-xl hover:-translate-y-1">
              Start Your Free Trial Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantage;
