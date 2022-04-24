import Webcam from "react-webcam";

const WebCamera = () => {
    const videoConstraints = {
        width: 720,
        height: 1280,
        facingMode: "user"
    };

    const WebcamCapture = () => (
        <Webcam
          audio={false}
          height={580}
          screenshotFormat="image/jpeg"
          width={680}
          videoConstraints={videoConstraints}
        >
          {({ getScreenshot }) => (
            <button
              onClick={() => {
                const imageSrc = getScreenshot()
              }}
            >
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


  