import React from "react";
import "./style/LandingPage.css"

//Components
import WhiteNormalButton from "../component/WhiteNormalButton";

//State
import States from "../Utils/States";

//Strings
import Strings from "../Utils/Strings";

export default function LandingPage() {
  return (
    <>
      <div className="container">
        <div className="d-flex flex-column align-items-center">
            <h1>{Strings.ConvPageTitle}</h1>
            <h5>{Strings.ConvMainPageDesc}</h5>
            <div className="d-flex flex-row justify-content-evenly mt-3" id="mainNavBtnContainer">
                <WhiteNormalButton text="Image" href={"../img/"+States.PicConvertStateJPG}/>
                <WhiteNormalButton text="Document" href="doc"/>
            </div>
        </div>
      </div>
    </>
  );
}
