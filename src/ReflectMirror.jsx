import {Card,Container,Row,Col,Button} from 'react-bootstrap';
import {useState, useEffect} from 'react';


const ReflectMirror = () => {



    return (
        <div>
            <Card bg='info' style={{ marginBottom: 10}}>
                <img src="./img.svg" alt='img' style={{height:605, width:680}}/>
            </Card>
        </div>
    );
}

export default ReflectMirror;