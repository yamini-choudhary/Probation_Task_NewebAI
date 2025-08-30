import { Globe, ChevronDown } from 'lucide-react';
import { pricingConfig } from '../lib/pricing.config';

const CurrencySelector = ({
  currentCurrency,
  onCurrencyChange,
  className = '',
}) => {
  const currencies = Object.keys(pricingConfig);

  return (
    <div className={`relative inline-block ${className}`}>
      <div className="relative">
        <select
          value={currentCurrency}
          onChange={(e) => onCurrencyChange(e.target.value)}
          className="py-3 pl-10 pr-10 text-sm font-medium text-gray-700 transition-all duration-200 bg-white border border-gray-300 rounded-lg shadow-sm appearance-none cursor-pointer hover:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:shadow-md"
        >
          {currencies.map((curr) => (
            <option key={curr} value={curr}>
              {curr} ({pricingConfig[curr].symbol})
            </option>
          ))}
        </select>
        <Globe className="absolute w-4 h-4 text-gray-500 transform -translate-y-1/2 pointer-events-none left-3 top-1/2" />
        <ChevronDown className="absolute w-4 h-4 text-gray-500 transform -translate-y-1/2 pointer-events-none right-3 top-1/2" />
      </div>
    </div>
  );
};

export default CurrencySelector;