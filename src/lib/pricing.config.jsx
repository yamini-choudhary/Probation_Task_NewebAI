export const pricingConfig = {
  USD: {
    currency: "USD",
    symbol: "$",
    plans: {
      starter: 15,
      professional: 49,
      enterprise: 99,
    },
  },
  GBP: {
    currency: "GBP",
    symbol: "£",
    plans: {
      starter: 12,
      professional: 39,
      enterprise: 79,
    },
  },
  INR: {
    currency: "INR",
    symbol: "₹",
    plans: {
      starter: 1249,
      professional: 4099,
      enterprise: 8299,
    },
  },
};

export const getCurrencyByCountry = (countryCode) => {
  const cc = countryCode.toUpperCase();

  if (["IN", "PK", "BD", "NP"].includes(cc)) {
    return "INR";
  } else if (["GB", "UK"].includes(cc)) {
    return "GBP";
  }

  return "USD";
};

export const formatPrice = (amount, currency) => {
  const config = pricingConfig[currency] || pricingConfig.USD;
  return `${config.symbol}${amount.toLocaleString()}`;
};
