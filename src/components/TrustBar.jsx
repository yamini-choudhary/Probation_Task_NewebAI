const TrustBar = () => {
  const companies = [
    "Ollo",
    "Kintsugi",
    "Radius",
    "Hexsmith",
    "Layers",
    "Sonorous",
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
              key={company}
              className="flex items-center justify-center p-4 transition-opacity duration-300 hover:opacity-100"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-xl font-bold text-gray-400 transition-colors duration-300 hover:text-gray-600">
                {company}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
