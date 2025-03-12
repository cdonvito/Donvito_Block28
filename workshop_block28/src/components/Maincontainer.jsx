import { Routes, Route } from "react-router-dom";
import Blue from "./Blue";
import Red from "./Red";
import Home from "./Home";
import Green from "./Green";

function Maincontainer() {
  return (
    <>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
          <Route path="/green" element={<Green />} />
        </Routes>
      </div>
    </>
  );
}

export default Maincontainer;
