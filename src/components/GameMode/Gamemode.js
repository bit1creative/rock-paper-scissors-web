import React, { Component } from 'react';
import {Link} from "react-router-dom";
import back from "../back.png"

class Gamemode extends Component {
    render() {
        return (
            <section className="game">
                <div className="back">
                    <Link to="/">
                        <img src={back} alt="<" height="40px"/>
                    </Link>
                </div>
                <div className="select-type fadeIn">
                    <h2>Choose game mode</h2>
                    <div className="game-mode">
                        <Link to="/match3">
                            <button className="game-3">Rock Paper Scissors</button>
                        </Link>
                        <Link to="/match5">
                            <button className="game-5">Rock Paper Scissors Lizard Spock</button>
                        </Link>
                    </div>
                </div>
            </section>
        );
    }
}

export default Gamemode