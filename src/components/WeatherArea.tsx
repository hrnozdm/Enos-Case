// interface WeatherAreaProps {
//   city: string;
//   highTemp: number;
//   lowTemp: number;
//   date: string;
//   description: string;
//   icon: string;
// }

const WeatherArea = () => {
  return (
    <div className="w-[360px] h-[328px] p-10 bg-white rounded-lg shadow-md text-center mt-4">
      <div className="text-4xl font-semibold text-teal-700 mb-2 mt-4"> °C</div>
      <div className="text-xl font-bold text-gray-800 mt-4 p-4"></div>
      <div className="text-sm text-gray-500 p-4"></div>
      <div className="flex items-center justify-center mt-4 text-gray-600 p-4">
        <img
        //   src={`https://www.weatherbit.io/static/img/icons/${}.png`} 
          className="w-6 h-6 mr-2"
        />
        <span className="text-sm"></span>
      </div>
    </div>
  );
};

export default WeatherArea;
