import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import userContext from "../utils/useUserContext";
import { useSelector } from "react-redux";
import Logo from '../assets/logo.jpg'
import useOnline from '../utils/useOnline'
import {removeDuplicates} from './Cart'


function Title() {
  return (
    <>
      <img 
        className="w-12 m-4 rounded-lg"
        src={Logo}
        alt="logo"
        data-testid="logo"
      />
    </>
  );
}


function Navbar() {
  const [login, setLogin] = useState(false);
  const {user} = useContext(userContext)
  let isOnline = useOnline()

  const cartItem = useSelector(store => store.cart.items)

  return (
    <>
      <div className="flex justify-between items-center">
        <Title />
        <ul className="flex my-8 xl:text-2xl">
          <li className="mx-4 text-sm font-semibold   xl:text-lg "><Link to='/'>Home</Link></li>
          <li className="hidden  mx-4 font-semibold xl:block  xl:text-lg"><Link to='/about'>About</Link></li>
          <li className="hidden mx-4 font-semibold  xl:block  xl:text-lg"><Link to='/contact'>Contact</Link></li>
          <li className="mx-4 text-sm font-semibold  xl:text-lg"><Link to='/instamart'>Instamart</Link></li>
          <li className="mx-4  text-sm font-semibold  xl:text-lg" ><Link to='/cart' data-testid="cart">Cart - {removeDuplicates(cartItem).length }</Link></li>
        </ul>
        <li data-testid="online" className="hidden mx-4 font-semibold list-none  xl:block">{isOnline ? "🟢 online":"🔴 offline"} </li>
        {login ? <button className= " text-xs rounded-full  w-12 bg-red-600 mx-4 xl:rounded-lg text-gray-50 p-2 xl:h-10 xl:my-6 xl:w-20 xl:text-lg xl:p-0" onClick={()=>setLogin(false)}>Log Out</button> : <button className="text-xs rounded-full  w-12 bg-red-600 mx-4 xl:rounded-lg text-gray-50 p-2 xl:h-10 xl:my-6 xl:w-20 xl:text-lg xl:p-0" onClick={()=>setLogin(true)}>Log In</button>}
      </div>
    </>
  );
}

export default Navbar;
