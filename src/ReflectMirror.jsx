import {Card,Container,Row,Col,Button} from 'react-bootstrap';
import {useState, useEffect} from 'react';
import Axios from 'axios';



const ReflectMirror = () => {

    let [image, setImage] = useState();

    let handleReflectImage = async () => {
        let data = await Axios.get("https://jsonplaceholder.typicode.com/photos")
                    .then(res => {
                        console.log(res.data[0].url);
                        console.log(res);
                        setImage(res.data[0].url);
                    })
                    .catch(err => {
                        console.log(err);
                    });
    };

    return (
        <>
            <Card bg='info'>
                <img src={image ? image : "./img.svg"} alt="img" style={{height:520, width:600}}/>
            </Card>
            <Button variant="success" onClick={handleReflectImage}>Show</Button>
        </>
    );
}

export default ReflectMirror;