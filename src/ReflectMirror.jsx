import {Card,Image,Row,Col,Button} from 'react-bootstrap';
import {useState, useEffect} from 'react';
import Axios from 'axios';



const ReflectMirror = () => {

    let [image, setImage] = useState();

    let handleReflectImage = () => {
        let data = {data:"data"};
        Axios.post("http://localhost:105/final/", {data})
            .then(res => {
                console.log(res.data.image_url);
                setImage(res.data.image_url);
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