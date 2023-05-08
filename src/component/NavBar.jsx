import React from "react";
import "./style/NavBar.css";
import logo from "../Assets/webConvLogo.png";

//States
import States from "../Utils/States";

export default function NavBar() {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-light container-fluid mb-5"
      id="navBar"
    >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand">
        <img src={logo} href="#" width="130px" height="40px" />
      </a>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="imageDropDown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Image
            </a>
            <div class="dropdown-menu" aria-labelledby="imageDropDown">
              <a class="dropdown-item" href={States.PicConvertStatePNG}>
                PNG
              </a>
              <a class="dropdown-item" href={States.PicConvertStateJPG}>
                JPG
              </a>
              <a class="dropdown-item" href={States.PicConvertStateBMP}>
                BMP
              </a>
              <a class="dropdown-item" href={States.PicConvertStateTIFF}>
                TIFF
              </a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Document
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
