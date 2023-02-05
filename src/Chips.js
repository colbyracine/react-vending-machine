import React from "react";
import { Link } from "react-router-dom";
import "./Routes.css";

function Chips() {
  return (
    <div>
      <h1>BAGS OF AIR AND A SIDE OF CHIPS</h1>
      <img src="https://cdn.dribbble.com/users/1771704/screenshots/4536029/balloon_smaller.gif" />
      <Link to="/VendingMachine">
        <button className="btn" type="button">
          Back to Vending Machine!
        </button>
      </Link>
    </div>
  );
}

export default Chips;
