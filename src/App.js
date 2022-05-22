import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Container,Row,Col,Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Dress from './DressList';
import WebCamera from './webcamera';
import ReflectMirror from './ReflectMirror';



function App() {

 

  return (

    <div>
      <Container fluid>
        <Row>
          
          <Col  xs={12} md={{ span: 6}}>
            <Card bg='primary' border="primary">
              <Card.Body className='text-center'>
                <Card.Title>Camera</Card.Title>
                <WebCamera/>
              </Card.Body>
            </Card>
          </Col>

          <Col  xs={12} md={{ span: 6}}>
            <Card bg='primary' border="primary">
              <Card.Body className='text-center'>
                <Card.Title>Result</Card.Title>
                <ReflectMirror/>
              </Card.Body>
            </Card>
          </Col>

          <Col md={{ span: 12 }} className="mt-5">
            <Dress />
          </Col>

        </Row>
      </Container>
    </div>
    

  );
}

export default App;
