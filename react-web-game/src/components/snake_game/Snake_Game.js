import React from 'react';

import Jumbo from '../Jumbotron/Game_Jumbo';
import Game from '../rock_paper_scissors/rock_game_section/RockGame';
import Footer from '../Footer/Footer';

const SnakeGame = () => {
    return (
        <div>
            <Jumbo title={'Snake Game'} />
            <Game />
            <Footer />
        </div>
    );
};

export {SnakeGame};