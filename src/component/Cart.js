import { useSelector } from "react-redux";
import CartDisplayCard from "./CartDisplayCard";

const Cart =()=>{

    const items = useSelector(store => store.cart.items)
    
   return(
    <>
    <h1 className="font-bold text-2xl m-4">Cart</h1>
    <div className="flex">

    {
        items.map(e=>{
          return  <CartDisplayCard {...e} key={e.id}/>
        })
    }
    </div>
    </>
   )
}
export default Cart;