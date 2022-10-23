import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  const abul = 10;
  return (
    <div>
      <h2>this is About page</h2>
      <h1 className={abul === 10? 'link' : 'anchor'}>
        go to <Link to={"/"}>Shop page</Link>
      </h1>
    </div>
  );
};

export default About;
