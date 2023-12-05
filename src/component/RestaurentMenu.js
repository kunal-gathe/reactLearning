import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../config";

function RestaurantMenu(){
    const [restaurant, setRestaurant] = useState(null)
    let {id} = useParams();

    useEffect(()=>{
        getResMenuData()
    },[])

    async function getResMenuData(){
        let data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1516957&lng=79.0902124&restaurantId="+id )
        let json = await data.json()
        setRestaurant(json?.data?.cards[0]?.card?.card?.info)
    }
    return(
        <>
        <h1>Menu card: {id}</h1>
        <img style={{width: "150px"}} src= {IMG_CDN_URL+ restaurant?.cloudinaryImageId} />
        <h3>{restaurant?.name}</h3>
        <h3>{restaurant?.city }</h3>
        <h3>{restaurant?.avgRating}</h3>
        </>
    )
}
export default RestaurantMenu;