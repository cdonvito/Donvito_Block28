import { Routes, Route, NavLink } from "react-router-dom";
import Blue from "./components/Blue";
import Red from "./components/Red";
import Home from "./components/Home";

function App() {
  return (
    <>
      <div id="container">
        <div id="navbar">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/blue">Blue</NavLink>
          <NavLink to="/red">Red</NavLink>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/" element= {<Home />} />
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
