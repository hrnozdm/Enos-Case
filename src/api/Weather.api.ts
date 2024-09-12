import apiClient from './apiClient';

const normalizeCityName = (city: string) => {
  return city.trim().toLowerCase();
};

export const getWeatherByCity = async (city: string) => {
  const normalizedCity = normalizeCityName(city);

  try {
    const response = await apiClient.get('', {
      params: {
        city: normalizedCity,
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
