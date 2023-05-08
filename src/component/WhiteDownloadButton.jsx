import React from "react";
import "./style/WhiteDownloadButton.css";

export default function WhiteDownloadButton(prop) {
  return (
    <>
      <a className="button-81" download={prop.fileName} href={prop.href} onClick={prop.onClick}>
        {prop.text}
      </a>
    </>
  );
}
