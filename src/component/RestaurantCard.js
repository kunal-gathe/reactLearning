import { IMG_CDN_URL } from "../../config";

function RestaurantCard({ name, cuisines, avgRating, cloudinaryImageId }) {
  return (
    <div className="border m-6">
      <img className="w-60 h-36 p-2 rounded-2xl" src={IMG_CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold pl-2">{name.slice(0,21)}</h3>
      <h5 className=" pl-2">{cuisines.slice(0,2).join(", ")}</h5>
      <h4 className="font-bold pl-2">{avgRating} ⭐</h4>
    </div>
  );
}

export default RestaurantCard;
