import React from "react";
import Brother from "../Brother/Brother";
import MySelf from "../MySelf/MySelf";
import Sister from "../Sister/Sister";

const Father = ({ house }) => {
  return (
    <div>
      <h3>Father</h3>
      <p>
        <small>House: {house}</small>
      </p>
      <section className="flex">
        <MySelf house={house}></MySelf>
        <Brother></Brother>
        <Sister></Sister>
      </section>
    </div>
  );
};

export default Father;
