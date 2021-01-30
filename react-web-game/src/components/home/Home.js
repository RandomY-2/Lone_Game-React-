import React from 'react';

import Welcome from './home_welcome/Home_welcome';
import Games from './home_games/Home_games';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Welcome />
            <Games />
            <Footer />
        </div>
    );
}

export default Home;