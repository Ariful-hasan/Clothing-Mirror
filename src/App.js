import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Container,Row,Col,Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dashboard from './dashboard';


function App() {

  return (

    <div>
      <Container fluid>
        <Row>
          <Col  xs={12} md={{ span: 6, offset: 3 }}>
            <Card border="primary">
              <Card.Body className='text-center'>
                <Card.Title>Clothing Mirror</Card.Title>
                {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                <Dashboard/>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
    

  );
}

export default App;
