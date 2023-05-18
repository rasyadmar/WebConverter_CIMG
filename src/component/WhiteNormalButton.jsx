import React from "react";
import "./style/WhiteNormalButton.css";

export default function WhiteNormalButton(prop) {
  return (
    <>
      <a id="buttonNormal-81" className={prop.className} href={prop.href} onClick={prop.onClick}>
        {prop.text}
      </a>
    </>
  );
}
