import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductPrice = () => {
  const basePriceUSD = 100; // Example base price in USD
  const [currency, setCurrency] = useState("USD");
  const [convertedPrice, setConvertedPrice] = useState(basePriceUSD.toFixed(2));
  const [country, setCountry] = useState("United States");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLocationAndConvertPrice = async () => {
      try {
        setLoading(true);
        setError(null);

        // Step 1: Get the user's IP address
        const ipResponse = await axios.get("https://api.ipify.org?format=json");
        const ipAddress = ipResponse.data.ip;
        console.log("IP Address:", ipAddress); // Debugging log

        // Step 2: Get location and currency information based on IP
        const locationResponse = await axios.get(
          `https://ipapi.co/${ipAddress}/json/`
        );
        const { country_name, currency: userCurrency } = locationResponse.data;

        console.log("Country:", country_name); // Debugging log
        console.log("Currency:", userCurrency); // Debugging log

        setCountry(country_name);
        setCurrency(userCurrency);

        // Step 3: Get the exchange rate and convert the price
        // Using exchangerate-api.com for the exchange rate
        const ratesResponse = await axios.get(
          `https://v6.exchangerate-api.com/v6/d106326dbb6153894e9466d1/latest/USD`
        );
        const exchangeRate = ratesResponse.data.conversion_rates[userCurrency];

        if (!exchangeRate) {
          throw new Error(`No exchange rate found for ${userCurrency}`);
        }

        console.log("Exchange Rate:", exchangeRate); // Debugging log

        // Convert and format the price to two decimal places
        const priceInUserCurrency = (basePriceUSD * exchangeRate).toFixed(2);
        setConvertedPrice(priceInUserCurrency);
      } catch (err) {
        setError("Failed to fetch location or convert price.");
        console.error("Error:", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLocationAndConvertPrice();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Product Price</h1>
      <p>Country: {country}</p>
      <p>
        Price: {convertedPrice} {currency}
      </p>
    </div>
  );
};

export default ProductPrice;
