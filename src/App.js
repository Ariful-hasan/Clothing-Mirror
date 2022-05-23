import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Container,Row,Col,Button,Navbar,Nav} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Dress from './DressList';
import WebCamera from './webcamera';
import ReflectMirror from './ReflectMirror';
import { useState  } from 'react';

function App() {

  const [dress, setDress] = useState(null);

  let handleDress = (e) => {
    console.log('dress clicked...');
    let dress = e.target.getAttribute('src').split("/")[2];
    setDress(dress);
  }

  return (

    <div>

      <header>
        <Navbar variant="dark" bg="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Clothing Mirror</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main>
      <Container fluid>
        <Row className='px-4 my-5'>
          
          <Col  xs={12} md={{ span: 6}}>
            <Card bg='primary' border="primary">
              <Card.Body className='text-center'>
                <Card.Title>Camera</Card.Title>
                <WebCamera dress={dress}/>
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
            <Dress handleDress={handleDress}/>
          </Col>

        </Row>
      </Container>
      </main>

      <footer className='py-5 my-5 bg-dark'>
        <Container className='px-4'>
          <p className='text-center text-white'>Copyright &copy; clothing-mirror</p>
        </Container>
      </footer>
    </div>
    

  );
}

export default App;
