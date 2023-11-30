import { IMG_CDN_URL } from "../../config";

function RestaurantCard({ name, cuisines, avgRating, cloudinaryImageId }) {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h4>{avgRating} star</h4>
    </div>
  );
}

export default RestaurantCard;
