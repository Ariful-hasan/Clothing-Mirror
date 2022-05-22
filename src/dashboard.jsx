import {Card,Container,Row,Col,Button} from 'react-bootstrap';
import WebCamera from './webcamera';
import {useState, useEffect} from 'react';

const Dashboard = () => {

    const [Camera, setCamera] = useState(false);
    const [Btn, setBtn] = useState('');

    useEffect(() => {
        if(Camera === true) {
            setBtn('Camera Off');
        } else {
            setBtn('Camera On');
        }
    },[Camera]);

    const toggleCamera = (val) => {
        //console.log(val);
        if(Camera === true) {
            setBtn('Camera Off');
            setCamera(false);
        } else {
            setBtn('Camera On');
            setCamera(true);
        }
    };

    return (
        <div>
            <Card bg='info' style={{ marginBottom: 10 }}>
                <WebCamera/>
            </Card>
            {/* <Button variant="warning" onClick={() => toggleCamera(Camera)}>{Btn}</Button> */}
        </div>
    );
}

export default Dashboard;