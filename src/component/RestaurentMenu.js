import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../config";
import useRestaurant from "../utils/useRestaurant";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/cartSlice";

function RestaurantMenu() {
  let { id } = useParams();

  let cartItem = useSelector((store) => store.cart.items);

  const restaurant = useRestaurant(id);
  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(addItem(item));
  };

  return (
    <>
      <div className=" ">
        <h1 className="font-bold text-xl text-center">Menu card: {id}</h1>
        <div className=" flex flex-col justify-center items-center  ">
          <img
            className=" w-60 h-40 border border-black rounded-lg my-2
             xl:w-1/4 xl:h"
            src={
              IMG_CDN_URL + restaurant?.cards[0]?.card.card?.info.cloudinaryImageId
            }
          />
          <h3 className="text-center font-bold xl:text-xl">
            {restaurant?.cards[0]?.card.card?.info.name}
          </h3>
          <div className="flex flex-row justify-center">
            <h3 className="mx-2">
              {restaurant?.cards[0]?.card.card?.info.areaName}
            </h3>
            <h3>{restaurant?.cards[0]?.card.card?.info.avgRating}⭐</h3>
          </div>
        </div>

        <div className="p-5" data-testid="menu" key={Math.random()}>
          {restaurant?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards.map(
            (e, i) => {
              return (
                <>
                  <div
                    className="flex justify-center items-center"
                    key={e.card.info.id}
                  >
                    <div className="flex p-4 bg-red-100 my-4 rounded-l-md w-2/3">
                      <img
                        className="w-16 mr-4 rounded-lg xl:w-80 xl:h-28 "
                        src={IMG_CDN_URL + e.card.info.imageId}
                      />
                      <div className="w-full font-medium">
                        <h1 className="font-bold">{e.card.info.name}</h1>
                        <div className="flex justify-between xl:w-40 ">
                          <h1>&#8377; {e.card.info.price / 100}</h1>
                          <h1>
                            Orders:{" "}
                            {e.card.info.ratings.aggregatedRating.ratingCountV2}
                          </h1>
                        </div>
                        <h1 className="hidden xl:block opacity-50">{e.card.info.description && e.card.info.description.slice(0,150) }...</h1>
                      </div>
                    </div>
                    <button
                      data-testid="addMenuBtn"
                      key={i}
                      className="  h-20 w-30  bg-red-500 p-2 rounded-r-xl text-white font-bold text-sm xl:h-36"
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
    </>
  );
}
export default RestaurantMenu;
