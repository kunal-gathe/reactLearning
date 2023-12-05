
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../config";
import useRestaurant from "../utils/useRestaurant";


function RestaurantMenu(){
    let {id} = useParams()
    const restaurant = useRestaurant(id);
   
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