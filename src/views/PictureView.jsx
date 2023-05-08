import React, { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";

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

export default function PictureView() {
  const params = useParams();

  const [images, setImages] = useState([]);
  const [urlImage, setUrlImages] = useState([]);
  const [resultImg, setResultImg] = useState("");
  const [upButtonString, setUpButtonString] = useState(Strings.ChooseFileStr);
  const [pageState, setPageState] = useState(States.PicStateUpload);
  const [isLoading, setIsLoading] = useState(false);
  const [downloadBtnText, setdownloadBtnText] = useState(
    Strings.DownloadBtnPNG
  );
  const [imgTypePageDesc, setImgTypePageDesc] = useState(
    Strings.ConvPageDescPNG
  );

  function convToPNG() {
    setIsLoading(true);
    if (urlImage.length < 1) return;
    urlImage.forEach((url) => {
      convertBase64(url, params.imgType).then(function (result) {
        setResultImg(result);
        setPageState(States.PicStateDownload);
        setIsLoading(false);
      });
    });
  }

  function convImgToUrl() {
    if (images.length < 1) return;
    const newImageUrl = [];
    images.forEach((image) => newImageUrl.push(URL.createObjectURL(image)));
    setUrlImages(newImageUrl);
    setPageState(States.PicStateConvert);
    setIsLoading(false);
  }

  function onInputImage(e) {
    setIsLoading(true);
    setImages([...e.target.files]);
    const newName = e.target.files[0].name.replace(/\.[^/.]+$/, "");
    setUpButtonString(newName);
  }

  function resetPage() {
    window.location.reload(true);
  }

  useEffect(() => {
    if (params.imgType === States.PicConvertStatePNG) {
      setdownloadBtnText(Strings.DownloadBtnPNG);
      setImgTypePageDesc(Strings.ConvPageDescPNG);
    } else if (params.imgType === States.PicConvertStateJPG) {
      setdownloadBtnText(Strings.DownloadBtnJPG);
      setImgTypePageDesc(Strings.ConvPageDescJPG);
    } else if (params.imgType === States.PicConvertStateBMP) {
      setdownloadBtnText(Strings.DownloadBtnBMP);
      setImgTypePageDesc(Strings.ConvPageDescBMP);
    } else if (params.imgType === States.PicConvertStateTIFF) {
      setdownloadBtnText(Strings.DownloadBtnTIFF);
      setImgTypePageDesc(Strings.ConvPageDescTIFF);
    } else {
      setPageState(States.StateNotFound);
    }
  }, [params.imgType]);

  useEffect(() => {
    convImgToUrl();
  }, [images]);

  useEffect(() => {}, [urlImage]);

  const pageRender = (
    <div className="container ">
      <div className="d-flex flex-column align-items-center">
        {pageState === States.PicStateUpload ? (
          <>
            <h1>{Strings.ConvPageTitle}</h1>
            <h5 className="mt-1">{imgTypePageDesc}</h5>
            <UploadButton className="mt-4" function={onInputImage} />
          </>
        ) : pageState === States.PicStateConvert ? (
          <>
            <img
              src={urlImage}
              width="30%"
              height="30%"
              style={{ border: "1px solid black" }}
            />
            <WhiteNormalButton
              className="mt-3"
              onClick={convToPNG}
              text="Convert Image"
            />
          </>
        ) : pageState === States.PicStateDownload ? (
          <>
            <h1>{Strings.ConvPageTitle}</h1>
            <h5 className="mt-1">{Strings.DownloadDescText}</h5>
            <WhiteDownloadButton
              fileName={upButtonString}
              text={downloadBtnText}
              href={resultImg}
              onClick={resetPage}
              className="mt-4"
            />
          </>
        ) : (
          <NotFound />
        )}
      </div>
    </div>
  );

  return <>{isLoading ? <Loading /> : pageRender}</>;
}
