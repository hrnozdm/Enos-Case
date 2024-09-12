import { useQuery } from "@tanstack/react-query";
import { WeatherAreaProps } from "../Types/WeatherArea.Interface";
import { getWeatherByCity } from "../api/Weather.api";

const WeatherArea = ({ city }: WeatherAreaProps) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['weather', city],
    queryFn: () => getWeatherByCity(city),
    enabled: !!city,
  });

  const formattedCity = city ? city.charAt(0).toUpperCase() + city.slice(1).toLowerCase() : "";

  if (!city) {
    return (
      <div className="w-[360px] h-[328px] p-10 bg-white rounded-lg shadow-md text-center mt-4">
        <div className="text-xl font-bold text-gray-800">
          Select a City
        </div>
        <div className="text-sm text-gray-500">
          Search and select a city to see results. Try typing the first letters of the city you want.
        </div>
      </div>
    );
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(data);
  

  if (error || !data || data.length === 0) {
    return (
      <div className="w-[360px] h-[328px] p-10 bg-white rounded-lg shadow-md text-center mt-4">
        <div className="text-xl font-bold text-gray-800">
          Does Not Exist
        </div>
        <div className="text-sm text-gray-500">
          Type a valid city name to get weekly forecast data.
        </div>
      </div>
    );
  }

  const { high_temp, low_temp, valid_date, weather } = data?.data[0] || {};

  return (
    <div className="w-[360px] h-[328px] p-6 bg-white rounded-lg shadow-md text-center mt-4">
      <div className="text-4xl font-semibold text-teal-700 mb-2 mt-4">{high_temp} °C</div>
      <div className="text-xl font-bold text-gray-800 mt-2">{formattedCity}</div>
      <div className="text-md font-bold text-gray-600 mt-2">{valid_date}</div>
      <div className="text-sm text-gray-500 mt-2">Low: {low_temp} °C</div>
      <div className="flex items-center justify-center mt-4 text-gray-600">
        <img
          src={`https://www.weatherbit.io/static/img/icons/${weather?.icon}.png`}
          alt={weather?.description}
          className="w-10 h-10 mr-2"
        />
        <span className="text-sm">{weather?.description}</span>
      </div>
    </div>
  );
};

export default WeatherArea;
