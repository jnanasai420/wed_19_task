import React from "react";
import { useState } from "react";
import "./CharacterCount.css";

const CharacterCount = () => {
  const [x, y] = useState(0);
  function change(e) {
    y(e.target.value);
  }
  return (
    <div className="MainDiv">
      <input type="text" onChange={change}></input>
      <h1>No of Characters in the input: {x.length}</h1>
    </div>
  );
};

export default CharacterCount;
