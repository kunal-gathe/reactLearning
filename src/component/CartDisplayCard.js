import { useDispatch, useSelector } from "react-redux";
import { IMG_CDN_URL } from "../../config";
import { removeItem } from "../utils/cartSlice";

function CartDisplayCard({ name, price, imageId, id }) {
  let item = useSelector((store) => store.cart.items);
  let arr = [];

  for (let key in item) {
    arr.push(item[key]);
  }

  console.log(arr);
  console.log(arr[1]);

  let dispatch = useDispatch();
  function deleteItem(id) {
    dispatch(removeItem(id));
  }
  // console.log(id);
  return arr.map((e, index) => {
    return (
      <>
        <div className="border m-4 w-60 flex flex-col items-center">
          <img
            className="w-60 h-36 p-2 rounded-2xl"
            src={IMG_CDN_URL + e.imageId}
          />
          <h3 className="font-bold pl-2">{e.name}</h3>
          <h5 className=" pl-2 font-semibold">&#8377;{e.price / 100}</h5>
          <button
            onClick={() => {
              deleteItem(index);
            }}
          >
            🗑️
          </button>
        </div>
      </>
    )
  })
}

export default CartDisplayCard;
