import React, { useState } from "react";

//view
import NotFound from "./NotFound";

//style
import "./style/PicView.css";

//component
import WhiteDownloadButton from "../component/WhiteDownloadButton";
import UploadButton from "../component/UploadButton";
import WhiteNormalButton from "../component/WhiteNormalButton";
import Loading from "../component/Loading";

//utils
import convertBase64 from "../Utils/JimpUtils";

//States
import States from "../Utils/States";

//Strings
import Strings from "../Utils/Strings";

export default function DocumentPage() {
  const [docs, setDocs] = useState(undefined)
  const [upButtonString, setUpButtonString] = useState(Strings.ChooseFileStr);

  function onInputImage (e) {
    // setIsLoading(true);
    setDocs([...e.target.files]);
    const newName = e.target.files[0].name.replace(/\.[^/.]+$/, "");
    setUpButtonString(newName);
  }


  return (
    <>
      <div className="container">
        <div className="text-center m-2 m-4 p-4 border border-black rounded not-found">
          <h1 className="text-black">Document View</h1>
          <h3 className="text-black">On Going Process</h3>
          <UploadButton className="mt-4" function={onInputImage} />
        </div>
      </div>
    </>
  );
}
