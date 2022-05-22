import Webcam from "react-webcam";
import { useRef, useState  } from 'react';

const WebCamera = ({handleCapturedImage}) => {

  const webcamRef = useRef();
  const [image, setImage] = useState();

    const videoConstraints = {
        width: 720,
        height: 1280,
        facingMode: "user"
    };

    let handleCaptureScreenshot = ()  => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImage(imageSrc);
      console.log(imageSrc);
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


  