import { Table } from 'antd';
import type { TableProps } from 'antd';
import { TableResultProps } from '../Types/TableResult.Interface';
import { WeatherDataType } from '../Types/WeatherData.Interface';
import { useQuery } from '@tanstack/react-query';
import { getWeatherByCity } from '../api/Weather.api';
import DefaultHome from './DefaultHome';
import DoesNotExist from './DoesNotExist';
import { useState, useEffect } from 'react';
import dayjs from 'dayjs'; 
import { useWeatherStore } from '../store/weatherStore';

const columns: TableProps<WeatherDataType>['columns'] = [
  {
    title: 'Days',
    dataIndex: 'days',
    key: 'days',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Lowest Temp',
    dataIndex: 'lowTemp',
    key: 'lowTemp',
    render: (text: string) => `${text} °C`,
  },
  {
    title: 'High Temperature',
    dataIndex: 'highTemp',
    key: 'highTemp',
    render: (text: string) => `${text} °C`,
  },
];

const TableResult = ({ city }: TableResultProps) => {
  const [hasSearched, setHasSearched] = useState(false);
  const [apiCityName, setApiCityName] = useState<string | null>(null);
  const setSelectedWeather = useWeatherStore((state) => state.setSelectedWeather);

  const { data, isLoading } = useQuery({
    queryKey: ['weatherTable', city],
    queryFn: async () => {
      const response = await getWeatherByCity(city);
      setApiCityName(response.city_name.toLowerCase()); 
      return response;
    },
    enabled: !!city,
  });

  useEffect(() => {
    setHasSearched(!!city);
  }, [city]);

  if (!hasSearched) {
    return <DefaultHome />;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || data.data.length === 0 || apiCityName !== city.toLowerCase()) {
    return <DoesNotExist />;
  }

  const tableData: WeatherDataType[] = data.data.map((item: any, index: number) => {
    const date = dayjs(item.datetime);
    return {
      key: index.toString(),
      days: date.format('dddd'), 
      date: date.format('MMMM D, YYYY'), 
      lowTemp: `${item.low_temp || item.temp}`,
      highTemp: `${item.high_temp || item.temp}`,
      description: item.weather.description,
      icon: item.weather.icon,
    };
  });

  const handleRowClick = (record: WeatherDataType) => {
    setSelectedWeather(record);
  }; 

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 border p-3 rounded-lg">Weather Forecast</h2>
      <Table 
        columns={columns} 
        dataSource={tableData} 
        onRow={(record) => ({
          onClick: () => handleRowClick(record),
          style:{cursor:'pointer'}
        })}
      />
    </div>
  );
};

export default TableResult;
