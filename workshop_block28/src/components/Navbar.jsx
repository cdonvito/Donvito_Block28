import { NavLink } from "react-router-dom";

function Navbar () {
  return (
    <>
        <div id="navbar">
          <NavLink to="/" id="Home">Home</NavLink>
          <NavLink to="/blue" id="Blue">Blue</NavLink>
          <NavLink to="/red" id="Red">Red</NavLink>
          <NavLink to="/green" id="Green">Green</NavLink>
        </div>
    </>
  );
}

export default Navbar;