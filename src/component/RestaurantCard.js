import { useContext } from "react";
import { IMG_CDN_URL } from "../../config";
import userContext from "../utils/useUserContext";

function RestaurantCard({ name, cuisines, avgRating, cloudinaryImageId }) {
  return (
    <div className="border m-6 rounded-lg w-80  items-center bg-red-50 ">
      <img
        className="w-80 h-44 p-2 rounded-2xl items-center"
        src={IMG_CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold pl-2">{name.slice(0, 21)}</h3>
      <h5 className=" pl-2 my-1">
        <span className="bg-red-200 px-4 font-medium rounded-md">
          {cuisines.slice(0, 2).join(", ")}
        </span>
      </h5>
      <h4 className="font-bold pl-2">{avgRating} ⭐</h4>
    </div>
  );
}

export default RestaurantCard;
