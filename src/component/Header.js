import { useState } from "react";

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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
        {login ? <button onClick={()=>setLogin(false)}>Log Out</button> : <button  onClick={()=>setLogin(true)}>Log In</button>}
      </div>
    </>
  );
}

export default Navbar;
