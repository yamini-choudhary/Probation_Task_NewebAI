import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Lead Developer",
      company: "TechCorp",
      avatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "neweb.ai has completely transformed our development workflow. What used to take weeks now takes days. The AI suggestions are incredibly accurate and have helped us maintain consistent code quality across our entire team.",
    },
    {
      name: "Marcus Rodriguez",
      role: "Freelance Developer",
      company: "Independent",
      avatar:
        "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "As a freelancer, efficiency is everything. neweb.ai has allowed me to take on more clients and deliver higher quality work. The AI code generation is like having a senior developer pair programming with me 24/7.",
    },
    {
      name: "Emily Johnson",
      role: "CTO",
      company: "StartupXYZ",
      avatar:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "The ROI on neweb.ai has been incredible. Our team is shipping features 3x faster, and the quality has actually improved. The platform scales perfectly with our growing team and complex projects.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            What Our Users Say
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Don't just take our word for it. Here's what developers and teams
            around the world are saying about neweb.ai.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="relative p-8 transition-all duration-300 transform bg-white shadow-lg rounded-2xl hover:shadow-2xl hover:-translate-y-2"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Quote className="w-8 h-8 mb-4 text-blue-500" />

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <p className="mb-6 leading-relaxed text-gray-700">
                "{testimonial.text}"
              </p>

              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="object-cover w-12 h-12 mr-4 rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>

              <div className="absolute px-3 py-1 text-xs font-medium text-blue-600 bg-blue-100 rounded-full top-4 right-4">
                Verified User
              </div>
            </div>
          ))}
        </div>

        {/* Overall rating */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-lg">
            <div className="flex mr-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <span className="mr-2 font-semibold text-gray-900">4.9/5</span>
            <span className="text-gray-600">based on 1,200+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
