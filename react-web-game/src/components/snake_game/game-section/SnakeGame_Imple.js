import React, { useState, useRef, useEffect } from 'react';
import { useInterval } from './useIntervals';
import { CANVAS_SIZE, SNAKE_START, APPLE_START, SCALE, SPEED, DIRECTIONS } from './constants';
import {Container, Col, Row} from 'react-bootstrap';

import * as tf from '@tensorflow/tfjs';
import * as speechCommands from '@tensorflow-models/speech-commands';

const Game = () => {

    // Load Speech Recognition Model
    const URL = "https://teachablemachine.withgoogle.com/models/V1geI3hYG/";

    async function createModel() {
        const checkpointURL = URL + 'model.json'; 
        const metadataURL = URL + 'metadata.json';

        const recognizer = speechCommands.create(
            'BROWSER_FFT',
            undefined,
            checkpointURL,
            metadataURL);

        await recognizer.ensureModelLoaded();

        return recognizer;
    }

    async function init() {
        const recognizer = await createModel();
        const classLabels = recognizer.wordLabels(); 

        var predictedCall = "";
        var curScore = -1;
        recognizer.listen(result => {
            const scores = result.scores;
            
            for (let i = 0; i < classLabels.length; i++) {
                predictedCall = curScore > result.scores[i] ? predictedCall : classLabels[i];
                curScore = curScore > result.scores[i] ? curScore : result.scores[i];
            }
            
            console.log(predictedCall);
            moveSnake(predictedCall);
            predictedCall = "";
            curScore = -1;
        }, {
            includeSpectrogram: true,
            probabilityThreshold: 0.75,
            invokeCallbackOnNoiseAndUnknown: true,
            overlapFactor: 0.50 
        });

        setSpeed(SPEED);
    }



    // Snake Game Stuff
    const canvasRef = useRef();
    const [snake, setSnake] = useState(SNAKE_START);
    const [apple, setApple] = useState(APPLE_START);
    const [dir, setDir] = useState([0, -1]);
    const [speed, setSpeed] = useState(null);
    const [gameOver, setGameover] = useState(false);
    const [score, setScore] = useState(0);

    const endGame = () => {
        setSpeed(null);
        setGameover(true);
    }

    const moveSnake = (direction) => {
        direction != 'Background Noise' && setDir(DIRECTIONS[direction]);
    }

    const createApple = () => apple.map((_a, i) => Math.floor(Math.random() * (CANVAS_SIZE[i] / SCALE)));

    const checkCollision = (snakeHead, snk=snake) => {
        if (
            snakeHead[0] * SCALE >= CANVAS_SIZE[0] || 
            snakeHead[0] < 0 ||
            snakeHead[1] * SCALE >= CANVAS_SIZE[1] ||
            snakeHead[1] < 0
        ) return true;

        for (const segment of snk) {
            if (snakeHead[0] === segment[0] && snakeHead[1] === segment[1])
                return true;
        }

        return false;
    }

    const checkAppleCollision = newSnake => {
        if (newSnake[0][0] === apple[0] && newSnake[0][1] === apple[1]) {
            let newApple = createApple();
            while (checkCollision(newApple, newSnake)) {
            newApple = createApple();
            }
            setScore(score + 1);
            setApple(newApple);
            return true;
        }
        return false;
    };

    const gameLoop = () => {
        const snakeCopy = JSON.parse(JSON.stringify(snake));
        const newSnakeHead = [snakeCopy[0][0] + dir[0], snakeCopy[0][1] + dir[1]];
        snakeCopy.unshift(newSnakeHead);
        if (checkCollision(newSnakeHead)) endGame();
        if (!checkAppleCollision(snakeCopy)) snakeCopy.pop();
        setSnake(snakeCopy);
    }

    const startGame = () => {
        init();
        setSnake(SNAKE_START);
        setApple(APPLE_START);
        setDir([0, -1]);
        setGameover(false);
    }

    useEffect(() => {
        const context = canvasRef.current.getContext('2d');
        context.setTransform(SCALE, 0, 0, SCALE, 0, 0);
        context.clearRect(0, 0, CANVAS_SIZE[0], CANVAS_SIZE[1]);
        context.fillStyle = 'black';
        snake.forEach(([x, y]) => context.fillRect(x, y, 1, 1));
        context.fillStyle = 'lightblue';
        context.fillRect(apple[0], apple[1], 1, 1);
    }, [snake, apple, gameOver])

    useInterval(() => gameLoop(), speed);

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h1>Snake Game</h1>
                        <h2>Click "Start Game", then control the snake by saying "Up", "Down", "Left", and "Right"</h2>
                    </Col>
                </Row>
                
                <Row>
                    <Col>
                        <button onClick={startGame}>Start Game</button>
                        <hr></hr>
                    </Col>  
                </Row>

                <Row>
                    <Col>
                        {gameOver && <h1>Game Over!</h1>}
                        <h1>Score: {score}</h1>
                        <canvas style={{border: '1px solid black'}} 
                            ref={canvasRef} 
                            width={`${CANVAS_SIZE[0]}px`}
                            height={`${CANVAS_SIZE[1]}px`} />
                        <hr />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Game;
