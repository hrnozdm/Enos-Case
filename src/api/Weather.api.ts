import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

const normalizeCityName = (city: string) => {
  return city.trim().toLowerCase();
};

export const getWeatherByCity = async (city: string) => {
  const normalizedCity = normalizeCityName(city);

  try {
    const response = await axios.get(BASE_URL, {
      params: {
        city: normalizedCity,
        key: API_KEY,
        days: 16,
      }
    });

    if (response.status !== 200) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    const cityNameInResponse = response.data.city_name.toLowerCase();

    if (normalizedCity !== cityNameInResponse) {
      throw new Error(`City name mismatch: expected ${normalizedCity}, got ${cityNameInResponse}`);
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};
