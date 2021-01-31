import React from 'react';
import {Container, Col, Row, Card} from 'react-bootstrap';

import './Home_games.css';

import SnakeImage from '../img/snake_game.png';
import rockImage from '../img/rock_paper_scissor_outcomes.png';

const Games = () => {
    return (
        <Container className="game-list" id="game-start-id">
            <Row className="row">
                <Col>
                    <h3 >Games You Can Play: </h3>
                    <hr />
                </Col>
            </Row>

            <Row className="game-info-row">
                <Col sm={6}>
                    <h2><a href="/rock_paper_scissors">Rock Paper Scissors</a></h2>
                    <p>
                        Rock paper scissors (also known by other permutations such as scissors paper rock, scissors 
                        paper stone, paper rock scissors, or ro-sham-bo) is a hand game usually played between two 
                        people, in which each player simultaneously forms one of three shapes with an outstretched hand. 
                        These shapes are "rock" (a closed fist), "paper" (a flat hand), and "scissors" (a fist with the index 
                        finger and middle finger extended, forming a V). "Scissors" is identical to the two-fingered V sign 
                        (also indicating "victory" or "peace") except that it is pointed horizontally instead of being held 
                        upright in the air. A simultaneous, zero-sum game, it has only two possible outcomes: a draw, or a win 
                        for one player and a loss for the other.
                    </p>
                    <footer className="blockquote-footer">
                        <cite title="Source Title"><a href="https://en.wikipedia.org/wiki/Rock_paper_scissors" target="_blank" rel="noreferrer">Wikipedia</a></cite>
                    </footer>
                </Col>
                <Col>
                    <Card className="card">
                        <Card.Header className="card-header bg-dark text-white">Rock Paper Scissors:</Card.Header>
                        <Card.Body className="align-self-center">
                            <img src={rockImage} alt={'Rock Paper Scissor Outcomes'} width="250" height="250" />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <hr />

            <Row className="game-info-row">
                <Col>
                    <Card>
                        <Card.Header className="card-header bg-dark text-white">Snake Game:</Card.Header>
                        <Card.Body className="align-self-center">
                            <img className="snake_img" src={SnakeImage} alt={'Snake Game'} width="250" height="250" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={6}>
                    <h2><a href="/snake_game">Snake Game</a></h2>
                    <p>
                        Snake is the common name for a video game concept where the player maneuvers a line 
                        which grows in length, with the line itself being a primary obstacle. The player 
                        controls a dot, square, or object on a bordered plane. As it moves forward, it leaves 
                        a trail behind, resembling a moving snake. In some games, the end of the trail is in a 
                        fixed position, so the snake continually gets longer as it moves. In another common scheme, 
                        the snake has a specific length, so there is a moving tail a fixed number of units away from 
                        the head. The player loses when the snake runs into the screen border, a trail or other obstacle, 
                        or itself.
                    </p>
                    <footer className="blockquote-footer">
                        <cite title="Source Title"><a href="https://en.wikipedia.org/wiki/Snake_(video_game_genre)" target="_blank" rel="noreferrer">Wikipedia</a></cite>
                    </footer>
                </Col>
            </Row>

            <hr />

            <Row className="TBD-list">
                <Col>
                    <h2>More games to be continued...</h2>
                </Col>
            </Row>

        </Container>
    );
}

export default Games;