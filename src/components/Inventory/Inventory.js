import React from "react";
import { Link } from "react-router-dom";

const Inventory = () => {
  return (
    <div>
      <h2>this is Inventory components</h2>
      <h3>
        plese visite our <Link to={"/about"}>about</Link> page
      </h3>
    </div>
  );
};

export default Inventory;
