import resDataList from "../utils/mockdata";
import ResCard from "./ResCard";
import { useState } from "react";
const Body = () => {
  const [listOfRestra, setListOfRestra] = useState(resDataList);
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    const filtered = listOfRestra.filter((item) =>
      item.info.name.toLowerCase().includes(query.toLowerCase())
    );
    setListOfRestra(filtered);
  };
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
            value={searchQuery}
            onChange={handleInputChange}
          />
        </div>
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
              setListOfRestra(filteredList);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="res-container">
        {listOfRestra.map((restaurant) => (
          <ResCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
