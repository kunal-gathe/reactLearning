import RestaurantCard from "./RestaurantCard";
import { useContext, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useShowRestaurant from "../utils/useShowRestaurant";
import { setFunc } from "../utils/helper";
import useOnline from "../utils/useOnline";

function Body() {
  const [searchText, setSearchText] = useState("");
  const [allRestaurant, filteredRestaurant, setFilteredRestaurant] = useShowRestaurant()

  if(!useOnline()) return <h1>You're offline, please check your Internet</h1>
  if (!allRestaurant) return null

  return allRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex justify-center align-middle h-20">
        <input
          data-testid="searchValue"
          type="text"
          className="pl-2 border rounded-2xl h-12 mt-2 xl:w-1/3 "
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e?.target?.value);
          }}
        />
      
        <button data-testid='searchBtn' className= "bg-red-600 mx-4 rounded-lg text-gray-50 p-2 h-10 my-3"
          onClick={() => {
            setFilteredRestaurant(setFunc(allRestaurant, searchText));
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap justify-center " data-testid="restList">
        
        {
        filteredRestaurant?.map((res, index) => {
          return <Link to={`/res/${res.info.id}`} key={index}><RestaurantCard {...res?.info} key={res?.info?.id}/></Link>;
        })}
      </div>
    </>
  );
}

export default Body;
