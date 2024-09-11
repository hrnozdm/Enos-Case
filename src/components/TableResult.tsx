  import { Table } from 'antd';
  import type { TableProps } from 'antd';
  import { TableResultProps } from '../Types/TableResult.Interface';
  import { WeatherDataType } from '../Types/WeatherData.Interface';
  import { useQuery } from '@tanstack/react-query';
  import { getWeatherByCity } from '../api/Weather.api';
  import DefaultHome from './DefaultHome';
  import DoesNotExist from './DoesNotExist';
  import { useState, useEffect } from 'react';

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
    },
    {
      title: 'High Temperature',
      dataIndex: 'highTemp',
      key: 'highTemp',
    },
  ];

  const TableResult = ({ city }: TableResultProps) => {
    const [hasSearched, setHasSearched] = useState(false);

    const { data, isLoading } = useQuery({
      queryKey: ['weatherTable', city],
      queryFn: () => getWeatherByCity(city),
      enabled: !!city,
    });

    useEffect(() => {
      if (city) {
        setHasSearched(true);
      }
      else{
        setHasSearched(false);
      }
    }, [city]);

    if (!hasSearched) {
      return <DefaultHome />;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (!data || data.length === 0) {
      return <DoesNotExist />;
    }

    const tableData: WeatherDataType[] = data.data.map((item: any, index: number) => ({
      key: index.toString(),
      days: `Day ${index + 1}`, 
      date: item.valid_date,
      lowTemp: item.low_temp,
      highTemp: item.high_temp,
      description: item.weather.description,
      icon: item.weather.icon,
    }));

    return <Table columns={columns} dataSource={tableData} />;
  };

  export default TableResult;
