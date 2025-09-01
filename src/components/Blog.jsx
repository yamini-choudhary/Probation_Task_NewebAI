import { Calendar, ArrowRight, Clock } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "Smart Business Capital Trading in AI",
      excerpt:
        "Discover how artificial intelligence is revolutionizing business capital trading and creating new opportunities for growth.",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "AI & Business",
    },
    {
      title: "Why Financial Security Makes Investments",
      excerpt:
        "Learn the fundamental principles of financial security and how they form the foundation for successful investment strategies.",
      image:
        "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "March 12, 2024",
      readTime: "7 min read",
      category: "Investment",
    },
    {
      title: "Ultimate Guide to Business Automation",
      excerpt:
        "A comprehensive guide to implementing business automation that drives efficiency and reduces operational costs.",
      image:
        "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "March 10, 2024",
      readTime: "10 min read",
      category: "Automation",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Latest Insights from Our Blog
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Stay updated with the latest trends, tips, and insights in web
            development, AI, and business automation.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={post.title}
              className="overflow-hidden transition-all duration-300 transform bg-white shadow-lg rounded-2xl hover:shadow-2xl hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-medium text-white bg-blue-600 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center mb-3 text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="mr-4">{post.date}</span>
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>

                <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors duration-200 group-hover:text-blue-600">
                  {post.title}
                </h3>

                <p className="mb-4 leading-relaxed text-gray-600">
                  {post.excerpt}
                </p>

                <button className="inline-flex items-center font-medium text-blue-600 transition-colors duration-200 hover:text-blue-700">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
