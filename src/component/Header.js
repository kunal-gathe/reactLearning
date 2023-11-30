function Title(){
    return (
        <>
        <img
            className="logo"
            src="https://cdn.dribbble.com/users/630677/screenshots/3833541/media/b60f3158658e7f9c77a97056c8e4a148.jpg"
          />
        </>
    )
}

function Navbar() {
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
        </div>
      </>
    );
  }

  export default Navbar