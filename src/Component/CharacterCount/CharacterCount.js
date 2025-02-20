import React from "react";
import { useState } from "react";

const CharacterCount = () => {
  const [x, y] = useState(0);
  function change(e) {
    y(e.target.value);
  }
  return (
    <div>
      <input type="text" onChange={change}></input>
      <h1>No of Characters in the input: {x.length}</h1>
    </div>
  );
};

export default CharacterCount;
