import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function setFunc(restaurant, searchText) {
  return restaurant?.filter((restaurant) => {
    return restaurant?.info?.name
      .toLowerCase()
      ?.includes(searchText.toLowerCase());
  });
}

function Body() {
  // let searchText = "KGC"
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  console.log(setSearchText);

  async function getRestaurantData() {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1458004&lng=79.0881546&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let res = await data?.json();
    setAllRestaurant(
      res?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      res?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  useEffect(() => {
    // Api Call
    getRestaurantData();
  }, []);

  if (!allRestaurant) return null;

  // if(filteredRestaurant.length === 0) return <h1>NOt Found</h1>

  return allRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e?.target?.value);
          }}
        />
        <button
          onClick={() => {
            setFilteredRestaurant(setFunc(allRestaurant, searchText));
            console.log(filteredRestaurant);
          }}
        >
          Search
        </button>
      </div>
      <div className="body-card">
        {filteredRestaurant?.map((res, index) => {
          return <Link to={`/res/${res.info.id}`} key={index}><RestaurantCard {...res?.info} key={res?.info?.id} /></Link>;
        })}
      </div>
    </>
  );
}

export default Body;
