import {Card,ListGroup,ListGroupItem} from 'react-bootstrap';

const Dress = () => {
    return (
        <Card bg='info'>
            <Card.Header>Dress List</Card.Header>
            <Card.Body>
            <ul className="list-group list-group-horizontal-lg">
                <li className="list-group-item"><img src='./dress/dress3.svg' alt='dress3' style={{height:100, width:100}} /></li>
                <li className="list-group-item"><img src='./dress/dress3.svg' alt='dress3' style={{height:100, width:100}} /></li>
                <li className="list-group-item"><img src='./dress/dress3.svg' alt='dress3' style={{height:100, width:100}} /></li>
                </ul>
            </Card.Body>
        </Card>
    )
}

export default Dress;