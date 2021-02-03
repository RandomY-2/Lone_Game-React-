import React from 'react';
import './Footer.css';

const Footer = () => {
    const pathname = window.location.pathname;

    return (
        <footer className="page-footer font-small bg-dark">
            <div className="container text-center text-md-left">
                <div className="row">
                    <div className="col-md-3 mx-auto">
                    <h5 className="font-weight-bold text-uppercase mt-3 mb-4 text-white">Menu</h5>
                    <ul className="list-unstyled">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/rock_paper_scissors">Rock Paper Scissors</a>
                        </li>
                        <li>
                            <a href="/snake_game">Snake Game</a>
                        </li>
                    </ul>
                </div>
                    <hr className="clearfix w-100 d-md-none" />
                    <div className="col-md-3 mx-auto">
                        <h5 className="font-weight-bold text-uppercase mt-3 mb-4 text-white">Contact Us</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="https://github.com/RandomY-2/Web_AI_Game">Github</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="footer-copyright text-center py-3 text-white">© 2020 Copyright: ME</div>
        </footer>
    );
}

export default Footer;