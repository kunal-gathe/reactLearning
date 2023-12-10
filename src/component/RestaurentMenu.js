import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../config";
import useRestaurant from "../utils/useRestaurant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

function RestaurantMenu() {
  let { id } = useParams();
  const restaurant = useRestaurant(id);
  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="flex">
      <div>
        <h1>Menu card: {id}</h1>
        <img
          style={{ width: "150px" }}
          src={
            IMG_CDN_URL +
            restaurant?.cards[0]?.card.card?.info.cloudinaryImageId
          }
        />
        <h3>{restaurant?.cards[0]?.card.card?.info.name}</h3>
        {/* <h3>{restaurant?.cards[0]?.card.card?.info.city }</h3>
        <h3>{restaurant?.cards[0]?.card.card?.info.avgRating}</h3> */}
      </div>

      <div className="p-5">
        {restaurant?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards.map(
          (e) => {
            return (
              <>
                <div key={e.card.info.id}>
                  {e.card.info.name}{" "}
                  <button
                    key={e.card.info.id}
                    className="ml-4 mb-3 bg-red-500 p-2 rounded-xl text-white font-bold text-sm"
                    onClick={() => handleClick(e.card.info)}
                  >
                    Add
                  </button>
                </div>
              </>
            );
          }
        )}
      </div>
    </div>
  );
}
export default RestaurantMenu;
