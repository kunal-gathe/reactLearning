import { useSelector } from "react-redux";
import CartDisplayCard from "./CartDisplayCard";

export function removeDuplicates(items) {
  let jsonObject = items.map(JSON.stringify);
  let uniqueSet = new Set(jsonObject);
  return Array.from(uniqueSet).map(JSON.parse);
}

const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  const initialValue = 0;
  let result = removeDuplicates(items).reduce(
    (accumulator, currentValue) => accumulator + (currentValue.price/100),
    initialValue
  );

  console.log(result);

  return (
    <>
      <h1 className="font-bold text-2xl m-4">Cart</h1>
      <div
        className="flex flex-col items-center xl:flex-row xl:flex-wrap"
        data-testid="cartRestCount"
      >
        {removeDuplicates(items).map((e) => {
          return <CartDisplayCard {...e} key={e.id} />;
        })}
      </div>
      <h1 className="text-center bg-red-500 w-40 m-auto p-2 text-sm my-2 text-white font-bold rounded-lg">Total: {result}</h1>
    </>
  );
};
export default Cart;
