import { useDispatch, useSelector } from "react-redux";
import CartDisplayCard from "./CartDisplayCard";
import { clearItem } from "../utils/cartSlice";

export function removeDuplicates(items) {
  let jsonObject = items.map(JSON.stringify);
  let uniqueSet = new Set(jsonObject);
  return Array.from(uniqueSet).map(JSON.parse);
}

const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  // console.log(items);
  const initialValue = 0;
  let result = removeDuplicates(items).reduce(
    (accumulator, currentValue) => accumulator + (currentValue.price/100),
    initialValue
  );

 let dispatch = useDispatch()

  function clearHandle(){
    dispatch(clearItem())
  }

  return (
    <>
    <div className="flex justify-between">
      <h1 className="font-bold text-2xl m-4">Cart</h1>
      <button className=" bg-red-100 mr-2 h-5 mt-3 px-1 rounded-sm font-medium xl:p-2 xl:h-10 xl:rounded-lg"
      onClick={()=>{
        clearHandle()
      }}
      >clear</button>
    </div>
      <div
        className="flex flex-col items-center xl:flex-row xl:flex-wrap"
        data-testid="cartRestCount"
      >
        
          <CartDisplayCard />
        
      </div>
      <h1 className="text-center bg-red-500 w-40 m-auto p-2 text-sm my-2 text-white font-bold rounded-lg">Total: {result}</h1>

    </>
  );
};
export default Cart;
