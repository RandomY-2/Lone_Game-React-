import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './RockGame.css';

const RockGame = () => {
    return (
        <Container>
            <Row>
                <Col sm={12}>
                    <h1 className='sorry'>
                        Sorry, p5 machine learning library is currently not supported by node.js. Please use my 
                        html version of this website to play the games. The link to my github repo is in the footer.
                    </h1>
                </Col>
            </Row>
        </Container>
    );
}

export default RockGame;