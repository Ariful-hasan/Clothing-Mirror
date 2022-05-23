import Webcam from "react-webcam";
import { useRef, useState, useEffect  } from 'react';
import Axios from 'axios';

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
        width: 612,
        height: 816,
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
      Axios.post("localhost:105/window/", {data})
      .then(res => console.log(res)).
      catch (err => console.log(err));
      
      //return image;
    }
    
    const WebcamCapture = () => (
        <Webcam
          ref={webcamRef}
          audio={false}
          height={520}
          screenshotFormat="image/jpeg"
          width={600}
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


  