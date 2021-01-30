import React from 'react';
import { withRouter } from "react-router";
import { FaHome, FaHandScissors, FaGrinTongue } from "react-icons/fa";
import {Container, Nav, Navbar} from 'react-bootstrap';

import './Navbar.css';

const GameNavBar = () => {
  const pathname = window.location.pathname;

  return (
    <Navbar expand='sm' fixed='top' className='navbar-dark'>
      <Container >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="navbarNav">
              <Nav activeKey={pathname} className="navbar-nav">
                <Nav.Link href='/'><FaHome size={pathname === '/' ? 28 : 14} /> Home</Nav.Link>
                <Nav.Link href='/rock_paper_scissors'><FaHandScissors size={pathname === '/rock_paper_scissors' ? 28 : 14} /> Rock Paper Scissors</Nav.Link>
                <Nav.Link href='/snake_game'><FaGrinTongue size={pathname === '/snake_game' ? 28 : 14} /> Snake Game</Nav.Link>
                <Nav.Link disabled> More Games To Be Continued</Nav.Link>
              </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default withRouter(GameNavBar);
