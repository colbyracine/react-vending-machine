import React from "react";
import { Link } from "react-router-dom";
import "./Routes.css";

function Soda() {
  return (
    <div>
      <h1>SOADY POP</h1>
      <img src="https://media0.giphy.com/media/pM2SLOGubEuT6/giphy.gif" />
      <Link to="/VendingMachine">
        <button className="btn" type="button">
          Back to Vending Machine!
        </button>
      </Link>
    </div>
  );
}

export default Soda;
