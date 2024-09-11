import axios from 'axios';

const API_KEY = '8cf8eb97a29447128d06d3f12e13e296'; 
const BASE_URL = 'https://api.weatherbit.io/v2.0/forecast/daily';

export const getWeatherByCity = async (city: string) => {
  const response = await axios.get(BASE_URL, {
    params: {
      city,
      key: API_KEY,
      days: 16
    }
  });
  return response.data;
};
