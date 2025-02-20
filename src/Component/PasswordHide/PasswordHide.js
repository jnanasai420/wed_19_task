import React, { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { FaRegEyeSlash } from "react-icons/fa6";

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
    <div>
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
