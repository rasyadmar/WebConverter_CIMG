import Jimp from "jimp/browser/lib/jimp.js";

//states
import States from "./States";

const convertBase64 = async (image, imgType) => {
  //performing the Jimp image processing operation
  //on jimpImage...
  var MIMEValue = Jimp.MIME_PNG;
  if (imgType === States.PicConvertStatePNG) {
    MIMEValue = Jimp.MIME_PNG;
  } else if (imgType === States.PicConvertStateJPG) {
    MIMEValue = Jimp.MIME_JPEG;
  } else if (imgType === States.PicConvertStateBMP) {
    MIMEValue = Jimp.MIME_BMP;
  } else if (imgType === States.PicConvertStateTIFF) {
    MIMEValue = Jimp.MIME_TIFF;
  }

  //get image from inputed base64
  const jimpImage = await Jimp.read(image);

  //storing the transformed imgae
  //in Base64 format
  const transformedImage = await jimpImage.getBase64Async(MIMEValue);

  return transformedImage;
};

export default convertBase64;
