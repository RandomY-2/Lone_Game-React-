import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Rock_Paper_Scissors from './components/rock_paper_scissors/Rock_Paper_Scissors';
import {SnakeGame} from './components/snake_game/Snake_Game';
import Error from './components/Error/Error';

function App() {
  return (
    <Router>
      <Navbar />
      
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/rock_paper_scissors'>
          <Rock_Paper_Scissors />
        </Route>
        <Route exact path='/snake_game'>
          <SnakeGame />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
