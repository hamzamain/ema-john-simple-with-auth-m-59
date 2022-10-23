import React from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css";

const Grandpa = () => {
  const house = 7;
  return (
    <div className="grandpa">
      <h1>this is grandpa components</h1>
      <p>
        <small>house: {<house> ` </house>}</small>
      </p>
      <section className="flex">
        <Father house={house}></Father>
        <Aunty house={house}></Aunty>
        <Uncle house={house}></Uncle>
      </section>
    </div>
  );
};

export default Grandpa;
