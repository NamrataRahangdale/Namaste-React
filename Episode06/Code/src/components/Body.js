//import resDataList from "../utils/mockdata";
import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  //const [listOfRestra, setListOfRestra] = useState(resDataList);
  const [listOfRestra, setListOfRestra] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setListOfRestra(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  //Conditional rendering
  if (listOfRestra.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search-container">
        <div className="body-heading">
          <h1>What's you looking for ?</h1>
        </div>
        <div className="search">
          <input
            className="search-tag"
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filtered = listOfRestra.filter((item) =>
                item.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredList(filtered);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="search-container">
      <div className="body-heading">
        <h1>Top Rated Restaurants</h1>
      </div>
      <div className="search">
        <button
          className="search-btn"
          onClick={() => {
            const filteredList = listOfRestra.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredList(filteredList);
          }}
        >
          Search
        </button>
      </div>
      </div>
      <div className="res-container">
        {filteredList.map((restaurant) => (
          <ResCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
