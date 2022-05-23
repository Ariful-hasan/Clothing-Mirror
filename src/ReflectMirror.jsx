import {Card,Image,Row,Col,Button} from 'react-bootstrap';
import {useState, useEffect} from 'react';
import Axios from 'axios';



const ReflectMirror = () => {

    let [image, setImage] = useState();

    let handleReflectImage = async () => {
        await Axios.post("http://localhost:105/final/", {})
            .then(res => {
                console.log(res);
                //console.log(res);
                //setImage(res.data[0].url);
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <>
            <Card bg='info'>
                <Image fluid src={image ? image : "./img.svg"} alt="img" style={{height:520, width:600}}/>
            </Card>
            <Button variant="success" onClick={handleReflectImage}>Show</Button>
        </>
    );
}

export default ReflectMirror;