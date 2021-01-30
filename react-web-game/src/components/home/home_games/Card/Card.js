import React from 'react';
import {Card} from 'react-bootstrap';

const gameCard = (props) => {
    const {name, description, img} = props;
    console.log(props);
    
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default gameCard;
