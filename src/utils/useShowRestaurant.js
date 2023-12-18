import { useEffect, useState } from "react";
import { RESTAURANT_DATA_URL } from "../../config";

const useShowRestaurant = () => {

  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  async function getRestaurantData() {
    let data = await fetch(RESTAURANT_DATA_URL);
    let res = await data?.json();
    setAllRestaurant(res?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(res?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  useEffect(() => {
    getRestaurantData();
  }, []);

  return [allRestaurant, filteredRestaurant, setFilteredRestaurant];
};

export default useShowRestaurant;
