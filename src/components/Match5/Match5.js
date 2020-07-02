import './match5.css';
import {Link} from "react-router-dom"

//images
import back from "../back.png"
import rock from "../assets/rock.png"
import paper from "../assets/paper.png"
import scissors from "../assets/scissors.png"
import lizard from "../assets/lizard.png"
import spock from "../assets/spock.png"


import React, { Component } from 'react';

class Match5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pScore: 0,
      cScore: 0,
      text: 'Choose an option',
      rulesClass: ""
    };
  }

  showRules() {
      this.setState({rulesClass: " fadeInAlmost"})
  }

  hideRules() {
    this.setState({rulesClass: ""})
  }

  compChoice() {
    const computerOptions = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const computerNumber = Math.floor(Math.random() * 5);
    const computerChoice = computerOptions[computerNumber];
    return computerChoice
  }

  animation(pChoice, cChoice) {
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand');
    const hands = document.querySelectorAll('.hands img');

    hands.forEach(hand => {
      hand.addEventListener('animationend', function(){
          this.style.animation = '';
      });
    });

    playerHand.src = rock;
    computerHand.src = rock;
    setTimeout(()=> {
      switch (pChoice) {
        case 'rock':
          playerHand.src = rock;
          break;
        case 'paper':
          playerHand.src = paper;
          break;
        case 'scissors':
          playerHand.src = scissors;
          break;
        case 'lizard':
          playerHand.src = lizard;
          break;
        case 'spock':
          playerHand.src = spock;
          break;
      }
      switch (cChoice) {
        case 'rock':
          computerHand.src = rock;
          break;
        case 'paper':
          computerHand.src = paper;
          break;
        case 'scissors':
          computerHand.src = scissors;
          break;
        case 'lizard':
          computerHand.src = lizard;
          break;
        case 'spock':
          computerHand.src = spock;
          break;
      }
    }, 1000)

    playerHand.style.animation = "shakePlayer 1s ease";
    computerHand.style.animation = "shakeComputer 1s ease";

  }

  playMatch5 = button => {
    var playerChoice = button.target.id;
    var cChoice = this.compChoice();
    this.animation(playerChoice,cChoice);
    setTimeout(() => {
      switch (playerChoice) {
        case 'rock':
          switch (cChoice) {
            case 'scissors':
            case 'lizard':
              this.setState({pScore:this.state.pScore+1,
                text: "Player wins 🔥"});
              break
            case 'paper':
            case 'spock':
              this.setState({cScore:this.state.cScore+1,
                text: "Computer wins 🔥"});
              break;
            case 'rock':
              this.setState({text:"It's a tie 😳"});
              break;
          }
          break;
        case 'paper':
          switch (cChoice) {
            case 'rock':
            case 'spock':
              this.setState({pScore:this.state.pScore+1,
                text: "Player wins 🔥"});
              break
            case 'scissors':
            case 'lizard':
              this.setState({cScore:this.state.cScore+1,
                text: "Computer wins 🔥"});
              break;
            case 'paper':
              this.setState({text:"It's a tie 😳"});
              break;
          }
          break;
        case 'scissors':
          switch (cChoice) {
            case 'paper':
            case 'lizard':
              this.setState({pScore:this.state.pScore+1,
                text: "Player wins 🔥"});
              break
            case 'rock':
            case 'spock':
              this.setState({cScore:this.state.cScore+1,
                text: "Computer wins 🔥"});
              break;
            case 'scissors':
              this.setState({text:"It's a tie 😳"});
              break;
          }
          break;
        case 'lizard':
          switch (cChoice) {
            case 'paper':
            case 'spock':
              this.setState({pScore:this.state.pScore+1,
                text: "Player wins 🔥"});
              break
            case 'scissors':
            case 'rock':
              this.setState({cScore:this.state.cScore+1,
                text: "Computer wins 🔥"});
              break;
            case 'lizard':
              this.setState({text:"It's a tie 😳"});
              break;
          }
          break;
        case 'spock':
          switch (cChoice) {
            case 'scissors':
            case 'rock':
              this.setState({pScore:this.state.pScore+1,
                text: "Player wins 🔥"});
              break
            case 'paper':
            case 'lizard':
              this.setState({cScore:this.state.cScore+1,
                text: "Computer wins 🔥"});
              break;
            case 'spock':
              this.setState({text:"It's a tie 😳"});
              break;
          }
          break;
      }
    },1000)
  }

  render() {
    return (
      <div className="game-field">
        <div className="Match5 fadeIn">
          <section className="game">
            <div className="back">
              <Link to="/gamemode">
                <img src={back} alt="<" height="40px"/>
              </Link>
            </div>
            <div className="score">
              <div className="player-score">
                <h2>Player</h2>
                <p>{this.state.pScore}</p>
              </div>

              <div className="computer-score">
                <h2>Computer</h2>
                <p>{this.state.cScore}</p>
              </div>
            </div>
            <div className="match-5 fadeIn">
              <div class="rules-icon">
                <button onMouseOver={this.showRules.bind(this)} onMouseOut={this.hideRules.bind(this)} id='btn'></button>
              </div>
              <div className={"rules-text"+this.state.rulesClass}>
                <h1>RULES</h1>
                  <h4>Rock Paper Scissors Lizard Spock</h4>
                <hr/>
                <p class="rules-content">
                      Scissors cuts Paper         <br/>
                      Paper covers Rock           <br/>
                      Rock crushes Lizard         <br/>
                      Lizard poisons Spock        <br/>
                      Spock smashes Scissors      <br/>
                      Scissors decapitates Lizard <br/>
                      Lizard eats Paper           <br/>
                      Paper disproves Spock       <br/>
                      Spock vaporizes Rock        <br/>
                      Rock crushes Scissors       <br/>
                </p>
              </div>
              <h2 className="winner">{this.state.text}</h2>
              <div className="hands">
                  <img className="player-hand" src={rock} alt=""/>
                  <img className="computer-hand" src={rock} alt=""/>
              </div>
              <div className="options">
                  <button className="rock" onClick={this.playMatch5.bind(this)} id='rock'>rock</button>
                  <button className="paper" onClick={this.playMatch5.bind(this)} id='paper'>paper</button>
                  <button className="scissors" onClick={this.playMatch5.bind(this)} id='scissors'>scissors</button>
                  <button className="lizard" onClick={this.playMatch5.bind(this)} id='lizard'>lizard</button>
                  <button className="spock" onClick={this.playMatch5.bind(this)} id='spock'>spock</button>
              </div>
            </div>
            
          </section>
        </div>
      </div>
    );
  }
}

export default Match5;
