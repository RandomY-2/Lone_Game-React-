import React from 'react';
import * as tf from '@tensorflow/tfjs';
import * as speechCommands from '@tensorflow-models/speech-commands';

const Game = () => {
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
        const labelContainer = document.getElementById('label-container');
        for (let i = 0; i < classLabels.length; i++) {
            labelContainer.appendChild(document.createElement('div'));
        }

        var predictedCall = "";
        var curScore = -1;
        recognizer.listen(result => {
            const scores = result.scores;
            
            for (let i = 0; i < classLabels.length; i++) {
                const classPrediction = classLabels[i] + ': ' + result.scores[i].toFixed(2);
                labelContainer.childNodes[i].innerHTML = classPrediction;
                
                predictedCall = curScore > result.scores[i] ? predictedCall : classLabels[i];
                curScore = curScore > result.scores[i] ? curScore : result.scores[i];
            }
            
            // console.log(predictedCall);
            predictedCall = "";
            curScore = -1;
        }, {
            includeSpectrogram: true,
            probabilityThreshold: 0.75,
            invokeCallbackOnNoiseAndUnknown: true,
            overlapFactor: 0.50 
        });

        //setTimeout(() => recognizer.stopListening(), 5000);
    }

    return (
        <div>
            <h1>Model</h1>
            <button type='button' onClick={() => {init()}}>Start</button>
            <div id='label-container'></div>



            <h1>Snake Game</h1>


        </div>
    )
}

export default Game;
