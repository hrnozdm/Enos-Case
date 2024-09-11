import { useState } from "react";
import Header from "../components/Header";
import SearchBox from "../components/SearchBox";
import TableResult from "../components/TableResult";
import WeatherArea from "../components/WeatherArea";

const HomePage = () => {
  
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  
  

  return (
    <div>
      <Header />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4">
        <div className="md:col-span-7 p-4 md:p-10">
          <TableResult city={searchValue} />
        </div>

        <div className="md:col-span-5 p-4 md:p-10">
          <SearchBox value={searchValue} onChange={handleSearchChange}/>
          <WeatherArea city={searchValue}/>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
