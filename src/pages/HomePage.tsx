import Header from "../components/Header";
import SearchBox from "../components/SearchBox";
import TableResult from "../components/TableResult";
import WeatherArea from "../components/WeatherArea";
import { useSearchStore } from "../store/searchStore";


const HomePage = () => {
  const searchValue = useSearchStore((state) => state.searchValue);



  return (
    <div>
      <Header />
      <div className="flex flex-col md:flex-row gap-4 p-4">
        <div className="md:w-7/12 p-4 md:p-10 order-2 md:order-1">
          <TableResult city={searchValue} />
        </div>
        <div className="md:w-5/12 p-4 md:p-10 order-1 md:order-2 ml-14">
          <SearchBox />
          <WeatherArea city={searchValue} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
