import './home.css';
import {Link} from "react-router-dom";
// import startGame from "./home-app";

import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="Home">
      
          <section className="game">
            
            <div className="intro fadeIn">
              <h1>Rock Paper Scissors</h1>
              <Link to='./Gamemode'>
                <button id="intro-button">Play</button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Home;