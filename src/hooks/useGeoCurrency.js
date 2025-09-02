import { useState, useEffect } from "react";
import { getCurrencyByCountry, pricingConfig } from "../lib/pricing.config";

export const useGeoCurrency = () => {
  const [currency, setCurrency] = useState("USD");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countryName, setCountryName] = useState("");

  useEffect(() => {
    const fetchGeoLocation = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("https://geolocation-db.com/json/", {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch location data");
        }

        const data = await response.json();
        const detectedCurrency = getCurrencyByCountry(data.country_code || "");

        setCurrency(detectedCurrency);
        setCountryName(data.country_name || "");
      } catch (err) {
        console.warn("Geolocation detection failed, defaulting to USD:", err);
        setError("Failed to detect location");
        setCurrency("USD");
      } finally {
        setLoading(false);
      }
    };

    fetchGeoLocation();
  }, []);

  const currentPricing = pricingConfig[currency] || pricingConfig.USD;

  return {
    currency,
    loading,
    error,
    countryName,
    pricing: currentPricing,
    setCurrency,
  };
};
