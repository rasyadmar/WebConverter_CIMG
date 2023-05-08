import react from "react";
import "./style/UploadButton.css"

export default function UploadButton(prop) {
  return (
    <>
      <input
        type="file"
        id="inputImage"
        accept="image"
        onChange={prop.function}
      />
      <label id="inputLabel" className={prop.className} for="inputImage">
        Upload Image
      </label>
    </>
  );
}
