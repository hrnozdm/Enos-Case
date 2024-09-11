import { Table } from 'antd';
import type { TableProps } from 'antd';

export interface WeatherDataType {
  key: string;
  date: string;
  highTemp: number;
  lowTemp: number;
  description: string;
  icon: string;
}

export interface TableResultProps {
  searchValue: string;
  data: WeatherDataType[];
}

const columns: TableProps<WeatherDataType>['columns'] = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'High Temperature',
    dataIndex: 'highTemp',
    key: 'highTemp',
  },
  {
    title: 'Low Temperature',
    dataIndex: 'lowTemp',
    key: 'lowTemp',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
];

const TableResult = ({searchValue}:any) => {
  console.log(searchValue);
  

  return <Table columns={columns} />;
};

export default TableResult;
