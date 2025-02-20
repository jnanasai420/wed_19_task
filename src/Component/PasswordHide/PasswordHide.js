import React, { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { FaRegEyeSlash } from "react-icons/fa6";
import "./PasswordHide.css";

const PasswordHide = () => {
  // const [show,pawword]=useState(0)
  const [iconshow, iconupdater] = useState(true);
  function iconshowing() {
    iconupdater(!iconshow);
  }
  const types = {
    type: iconshow ? "text" : "password",
  };

  return (
    <div className="MainDiv2">
      <p>
        <input type={types.type}></input>
        <span onClick={iconshowing}>
          {iconshow ? <FaRegEyeSlash /> : <IoMdEye />}
        </span>
      </p>
    </div>
  );
};

export default PasswordHide;
