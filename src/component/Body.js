import RestaurantCard from "./RestaurantCard";
import {useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useShowRestaurant from "../utils/useShowRestaurant";
import { setFunc } from "../utils/helper";
import useOnline from "../utils/useOnline";

function Body() {
  const [searchText, setSearchText] = useState("");
  const [allRestaurant, filteredRestaurant, setFilteredRestaurant] = useShowRestaurant()

  if(!useOnline()) return <h1>You're offline, please check your Internet</h1>
  if (!allRestaurant) return null;

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
