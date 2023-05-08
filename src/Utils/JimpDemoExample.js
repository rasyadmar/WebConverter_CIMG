import Jimp from 'jimp/browser/lib/jimp.js';
import { useEffect, useState } from "react";

export function JimpDemo({ imageUrl }) {
  const [jimpImage, setJimpImage] = useState(undefined);
  const [image, setImage] = useState(undefined);
  const [transformedImage, setTransformedImage] = useState(undefined);

  //loading an image everytime imageUrl changes
  useEffect(() => {
    const loadImage = async () => {
      //generating the Jimp data structue
      //loading an image from an URL
      const jimpImage = await Jimp.read(imageUrl)
      setJimpImage(jimpImage);

      //transforming jimpImage into its base64 representation
      //and stroring it
      const image = await jimpImage.getBase64Async(Jimp.MIME_JPEG);
      setImage(image);
    };
    loadImage();
  }, [imageUrl]);

  //generating the transformed image
  //as soon as the Jimp data struture is ready

  useEffect(() => {
    if (jimpImage) {
      const transformImage = async () => {
        //performing the Jimp image processing operation
        //on jimpImage...

        //e.g jimpImage.crop(100,100)
        jimpImage.crop(100,100,300, 300);

        //storing the transformed imgae
        //in Base64 format
        const transformedImage = await jimpImage.getBase64Async(Jimp.MIME_JPEG);
        setTransformedImage(transformedImage);
      };

      transformImage();
    }
  }, [jimpImage]);

  //   return image && jimpImage ? (
  return (
    <>
      <h1>Original Image</h1>
      <img className="originalImage" src={image} alt="Original" />
      <h1>Transformed Image</h1>
      <img
        className="transformedImage"
        src={transformedImage}
        alt="Transformed"
      />
    </>
  );
  //   : (
  //     <>Loading...</>
  //   )
}
