  import { Input } from 'antd';
  import { SearchOutlined } from '@ant-design/icons'; 
  import { SearchBoxProps } from '../Types/SearchBox.Interface';


  const SearchBox = ({value,onChange}:SearchBoxProps) => {
    return (
      <div>
        <Input 
          value={value}
          onChange={onChange}
          placeholder="Şehir Giriniz ..." 
          style={{ width: '360px', height: '46px', fontSize: '14px',borderRadius:'10px' }} 
          suffix={<SearchOutlined />} 
        />
      </div>
    );
  };

  export default SearchBox;
