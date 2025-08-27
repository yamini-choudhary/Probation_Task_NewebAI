import React from 'react';

const TrustBar = () => {
  const companies = [
    { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/480px-Microsoft_logo.svg.png' },
    { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/480px-Google_2015_logo.svg.png' },
    { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/480px-Meta_Platforms_Inc._logo.svg.png' },
    { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/480px-Amazon_logo.svg.png' },
    { name: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/480px-Netflix_2015_logo.svg.png' },
    { name: 'Spotify', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/480px-Spotify_logo_without_text.svg.png' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-lg font-medium text-gray-600">
            Join 1,000+ companies already growing with neweb.ai
          </p>
        </div>

        <div className="grid items-center grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6 opacity-60">
          {companies.map((company, index) => (
            <div
              key={company.name}
              className="flex items-center justify-center p-4 transition-opacity duration-300 hover:opacity-100"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="object-contain w-auto h-8 transition-all duration-300 filter grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;