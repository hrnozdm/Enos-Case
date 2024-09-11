import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const API_KEY = '8cf8eb97a29447128d06d3f12e13e296'; // Weatherbit API anahtarınızı buraya ekleyin
const BASE_URL = 'https://api.weatherbit.io/v2.0/forecast/daily';

const fetchWeatherData = async (city: string) => {
  const { data } = await axios.get(`${BASE_URL}`, {
    params: {
      key: API_KEY,
      city,
      days: 16, // 16 günlük hava tahmini
    },
  });
  return data;
};

export const useWeatherData = (city: string) => {
  return useQuery({
    queryKey: ['weatherData', city],
    queryFn: () => fetchWeatherData(city),
    enabled: !!city, // City değişmediğinde API çağrısı yapma
  });
};
