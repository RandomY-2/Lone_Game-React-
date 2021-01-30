import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

import './Jumbo.css'

const Game_Jumbo = ({ title }) => {
    return (
        <div>
            <Jumbotron  className="bg-dark">
                <Container>
                    <Row className="row-header">
                        <Col className="align-self-center">
                            <h1 className="game-title">{title}</h1>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </div>
    );
}

export default Game_Jumbo;