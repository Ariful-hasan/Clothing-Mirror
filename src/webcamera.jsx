import Webcam from "react-webcam";
import { useRef, useState, useEffect  } from 'react';

const WebCamera = ({dress}) => {

  const webcamRef = useRef();
  const [image, setImage] = useState();
  const [cloth, setCloth] = useState();

  useEffect(() => {
    console.log('webcam component...');
    console.log(dress);
    setCloth(dress);
  },[dress]);

    const videoConstraints = {
        width: 720,
        height: 1280,
        facingMode: "user"
    };

    let handleCaptureScreenshot = ()  => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImage(imageSrc);
      let data = {
        selfie: imageSrc,
        cloth: dress
      }
      console.table(data);
      //return image;
    }
    
    const WebcamCapture = () => (
        <Webcam
          ref={webcamRef}
          audio={false}
          height={580}
          screenshotFormat="image/jpeg"
          width={680}
          videoConstraints={videoConstraints}
        >
          {() => (
            <button onClick={handleCaptureScreenshot}>
              Capture photo
            </button>
          )}
        </Webcam>
      );

      return (
          <>
            <WebcamCapture/>
          </>
      );
    
}

export default WebCamera;


  