import {Card,ListGroup,ListGroupItem} from 'react-bootstrap';

const Dress = ({handleDress}) => {
    return (
        <Card bg='info'>
            <Card.Header>Dress List</Card.Header>
            <Card.Body>
            <ul className="list-group list-group-horizontal-lg">
                <li className="list-group-item"><img onClick={(e) => handleDress(e)} src='./dress/apparel.jpg' alt='dress3' style={{height:100, width:100}} /></li>
                <li className="list-group-item"><img onClick={(e) => handleDress(e)} src='./dress/cropFloodOutLower.png' alt='dress2' style={{height:100, width:100}} /></li>
                <li className="list-group-item"><img onClick={(e) => handleDress(e)} src='./dress/dress1.png' alt='dress1' style={{height:100, width:100}} /></li>
                </ul>
            </Card.Body>
        </Card>
    )
}

export default Dress;