import React from "react";
import { Link } from "react-router-dom";
import "./Routes.css";

function Sardines() {
  return (
    <div>
      <h1>SAVORY SARDINES</h1>
      <img src="https://media.tenor.com/CRrH5FNFLbYAAAAC/sardines-fish.gif" />
      {"\n"}
      <Link to="/VendingMachine">
        <button className="btn" type="button">
          Back to Vending Machine!
        </button>
      </Link>
    </div>
  );
}

export default Sardines;
