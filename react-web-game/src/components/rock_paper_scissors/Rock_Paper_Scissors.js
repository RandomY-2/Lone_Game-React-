import React from 'react';

import Jumbo from '../Jumbotron/Game_Jumbo';
import Rock_Game from './rock_game_section/RockGame';
import Footer from '../Footer/Footer';


const Rock_Paper_Scissors = () => {
    return (
        <div>
            <Jumbo title='Rock Paper Scissors' />
            <Rock_Game />
            <Footer />
        </div>
    );
};

export default Rock_Paper_Scissors;