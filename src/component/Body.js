import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../../config";
import { useState } from "react";

function setFunc(restaurant, searchText){
  return restaurant.filter((restaurant)=> { return restaurant.info.name.includes(searchText)}
  )
}

function Body() {
  // let searchText = "KGC"
  const [restaurant, setRestaurantList] = useState(restaurantList)
  const [searchText, setSearchText] = useState("")

    return (
    <>
      <div className="search-container">
        <input 
          type="text" 
          className="search-bar" placeholder="Search" 
          value={searchText} 
          onChange={(e)=>{
            if(searchText === "")  setRestaurantList(restaurantList);
            setSearchText(e.target.value);
        }}
        />
        <button onClick={()=>{
          setRestaurantList(setFunc(restaurant, searchText))
        }}>Search</button>
      </div>
      <div className="body-card">
        {restaurant.map((res) => {
          return <RestaurantCard {...res.info} key={res.info.id} />;
        })}
      </div>
    </>
  );
}

export default Body;
