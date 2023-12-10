import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import userContext from "../utils/useUserContext";
import { useSelector } from "react-redux";

function Title() {
  return (
    <>
      <img
        className="w-12 m-4 rounded-lg"
        src="https://cdn.dribbble.com/users/630677/screenshots/3833541/media/b60f3158658e7f9c77a97056c8e4a148.jpg"
      />
    </>
  );
}


function Navbar() {
  const [login, setLogin] = useState(false);
  const {user} = useContext(userContext)

  const cartItem = useSelector(store => store.cart.items)

  return (
    <>
      <div className="flex justify-between ">
        <Title />
        <ul className="flex my-8">
          <li className="mx-4 font-semibold"><Link to='/'>Home</Link></li>
          <li className="mx-4 font-semibold"><Link to='/about'>About</Link></li>
          <li className="mx-4 font-semibold"><Link to='/contact'>Contact</Link></li>
          <li className="mx-4 font-semibold"><Link to='/cart'>Cart - {cartItem.length }</Link></li>
          <li className="mx-4 font-semibold"><Link to='/instamart'>Instamart</Link></li>
        </ul>
        <h1 className="m-6 font-bold text-xl">{user.name}</h1>
        {login ? <button className= "bg-red-600 mx-4 rounded-lg text-gray-50 p-2 h-10 my-6" onClick={()=>setLogin(false)}>Log Out</button> : <button className="bg-red-600 mx-4 rounded-lg text-gray-50 p-2 h-10 my-6" onClick={()=>setLogin(true)}>Log In</button>}
      </div>
    </>
  );
}

export default Navbar;
