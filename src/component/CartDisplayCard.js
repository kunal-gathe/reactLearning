
import { IMG_CDN_URL } from "../../config";

function CartDisplayCard({ name, price,imageId }) {
    return (
      <div className="border m-4 w-60 flex flex-col items-center">
        <img className="w-60 h-36 p-2 rounded-2xl" src={IMG_CDN_URL + imageId} />
        <h3 className="font-bold pl-2">{name}</h3>
        <h5 className=" pl-2 font-semibold">&#8377;{price/100}</h5>
      </div>
    );
  }
  
  

export default CartDisplayCard
