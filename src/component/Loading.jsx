import React from "react";
import "./style/Loading.css";

export default function Loading() {
  return (
    <div id="spinner-container">
      <div id="loader" className="d-flex justify-content-center mt-5"></div>
    </div>
  );
}
