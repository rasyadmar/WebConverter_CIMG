import React from "react";
import "./style/WhiteNormalButton.css";

export default function WhiteNormalButton(prop) {
  return (
    <>
      <button id="buttonNormal-81" className={prop.className} onClick={prop.onClick}>
        {prop.text}
      </button>
    </>
  );
}
