import { Zap, Twitter, Linkedin, Github, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Products',
      links: [
        'AI Code Generation',
        'Website Builder',
        'Template Library',
        'Analytics Dashboard',
        'API Access',
        'Enterprise Solutions',
      ],
    },
    {
      title: 'Developers',
      links: [
        'Documentation',
        'API Reference',
        'SDKs & Libraries',
        'Webhooks',
        'Status Page',
        'Changelog',
      ],
    },
    {
      title: 'Resources',
      links: [
        'About Us',
        'Blog',
        'Case Studies',
        'Help Center',
        'Community',
        'Partners',
      ],
    },
    {
      title: 'Company',
      links: [
        'Careers',
        'Press Kit',
        'Contact Us',
        'Terms of Service',
        'Privacy Policy',
        'Security',
      ],
    },
  ];

  return (
    <footer className="text-white bg-gray-900">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6 space-x-2">
              <div className="relative">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div className="absolute w-3 h-3 bg-green-400 rounded-full -top-1 -right-1 animate-pulse"></div>
              </div>
              <span className="text-2xl font-bold">neweb.ai</span>
            </div>
            
            <p className="mb-6 leading-relaxed text-gray-400">
              Revolutionize your web development process with AI-powered tools that help you build faster, smarter websites. Join thousands of developers worldwide.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="flex items-center justify-center w-10 h-10 transition-colors duration-200 bg-gray-800 rounded-lg hover:bg-blue-600">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="flex items-center justify-center w-10 h-10 transition-colors duration-200 bg-gray-800 rounded-lg hover:bg-blue-600">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="flex items-center justify-center w-10 h-10 transition-colors duration-200 bg-gray-800 rounded-lg hover:bg-blue-600">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="flex items-center justify-center w-10 h-10 transition-colors duration-200 bg-gray-800 rounded-lg hover:bg-blue-600">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 font-semibold text-white">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 transition-colors duration-200 hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="pt-12 mt-12 border-t border-gray-800">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <div className="mb-6 lg:mb-0">
              <h3 className="mb-2 text-xl font-semibold">Stay Updated</h3>
              <p className="text-gray-400">Get the latest updates and insights delivered to your inbox.</p>
            </div>
            <div className="flex w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg lg:w-64 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="flex items-center px-6 py-3 text-white transition-colors duration-200 bg-blue-600 rounded-r-lg hover:bg-blue-700">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 mt-12 border-t border-gray-800">
          <div className="flex flex-col items-center justify-between text-sm text-gray-400 md:flex-row">
            <div className="mb-4 md:mb-0">
              © 2025 neweb.ai. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="transition-colors duration-200 hover:text-white">Privacy Policy</a>
              <a href="#" className="transition-colors duration-200 hover:text-white">Terms of Service</a>
              <a href="#" className="transition-colors duration-200 hover:text-white">Cookie Settings</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;