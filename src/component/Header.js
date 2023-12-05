import { useState } from "react";
import { Link } from "react-router-dom";

function Title() {
  return (
    <>
      <img
        className="logo"
        src="https://cdn.dribbble.com/users/630677/screenshots/3833541/media/b60f3158658e7f9c77a97056c8e4a148.jpg"
      />
    </>
  );
}


function Navbar() {
  const [login, setLogin] = useState(false)
  return (
    <>
      <div className="nav-container">
        <Title />
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/cart'>Cart</Link></li>
          <li><Link to='/instamart'>Instamart</Link></li>
        </ul>
        {login ? <button onClick={()=>setLogin(false)}>Log Out</button> : <button  onClick={()=>setLogin(true)}>Log In</button>}
      </div>
    </>
  );
}

export default Navbar;
