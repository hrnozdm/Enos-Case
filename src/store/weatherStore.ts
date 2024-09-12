import { create } from 'zustand';

interface WeatherState {
  selectedWeather: any | null;
  setSelectedWeather: (weather: any) => void;
  resetSelectedWeather: () => void;
}

export const useWeatherStore = create<WeatherState>((set) => ({
  selectedWeather: null,
  setSelectedWeather: (weather) => set({ selectedWeather: weather }),
  resetSelectedWeather: () => set({ selectedWeather: null }),
}));

