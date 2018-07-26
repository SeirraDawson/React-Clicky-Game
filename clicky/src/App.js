import React, { Component } from 'react';
import './App.css';
import Card from "./components/Card";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import cartoons from "./cartoons.json";

class App extends Component {
  // Setting this.state.cartoons to the cartoons json array && state to 0 or empty
  state = {
    cartoons,
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, () => {
        console.log(this.state.highscore);
      });
    }
    this.state.cartoons.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over: (\nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  clickCount = id => {
    this.state.cartoons.find((o, i) => {
      if (o.id === id) {
        if(cartoons[i].count === 0) {
          cartoons[i].count = cartoons[i].count + 1;
          this.setState({score: this.state.score +1}, () => {
            console.log(this.state.score);
          });
          this.state.cartoons.sort( () => Math.random() - 0.5)
          return true;
        } else {
          this.gameOver();
        }
      }
    });
  }

  // Map over this.state.cartoons and render a Card component for each cartoon object
  render () {
    return(
      <Wrapper>
        <Title score={this.state.score} highscore={this.state.highscore}>Clicky Game</Title>
          {this.state.cartoons.map (card => (
            <Card
              clickCount={this.clickCount}
              id={card.id}
              key={card.id}
              image={card.image}
              />
          ))}
      </Wrapper>
    );
  }
}


export default App;
