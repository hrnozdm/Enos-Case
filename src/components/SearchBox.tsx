import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons'; 
import { useSearchStore } from '../store/searchStore';

const SearchBox = () => {
  const searchValue = useSearchStore((state) => state.searchValue);
  const setSearchValue = useSearchStore((state) => state.setSearchValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div>
      <Input 
        value={searchValue}
        onChange={handleChange}
        placeholder="Şehir Giriniz ..." 
        style={{ width: '360px', height: '46px', fontSize: '14px', borderRadius: '10px' }} 
        suffix={<SearchOutlined />} 
      />
    </div>
  );
};

export default SearchBox;
