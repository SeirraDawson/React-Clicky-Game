import React, { Component } from 'react';
import Card from "./components/Card";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import cartoons from "./cartoons.json";
import './App.css';


class App extends Component {
  // Setting this.state.cartoons to the cartoons json array && state to 0 or empty
  state = {
    cartoons,
    score: 0,
    highScore: 0,
    clickedCartoons: []
  };

  clickedImg = id => {
    // assign the state to 'let' so updates can be made
    // let score = this.state.score;
    // let highScore = this.state.highScore
    let clickedCartoons = this.state.clickedCartoons;

    // if clickedCartoon has an id of the indexed cartoons
    if (clickedCartoons.indexOf(id) === -1) {
      // push the id into the array to be stored
      clickedCartoons.push(id);
      console.log(clickedCartoons);
      // increment score
      this.handleIncrement();
      // shuffleImg
      this.shuffleImg();
    } else if (this.state.score === 12) {
      alert("You Won! You had no repeat clicked cartoons!")
      this.setState({
        score: 0,
        clickedCartoons: []
      });
    } else {
      this.gameOver();
    }
  }


  // Increase score function || handleIncrement increases this.state.score by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ score: this.state.score + 1 });
  };

  // resetScore && shuffle images
    // reset = () => {
    //   this.setState({ score: 0 })
    // }
  shuffleImg = () => {
    this.setState({cartoons: this.rearrangeImg(cartoons)})
  }

  // rearrangeImg
  rearrangeImg = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // gameOver function
  gameOver = () => {
    if (this.state.score > this.state.highScore) {
      this.setState({highScore: this.state.score}, () => {
        console.log(this.state.highScore);
      });
    }
    this.state.cartoons.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over! \nYour score: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }


  // Map over this.state.cartoons and render a Card component for each cartoon object
  render () {
    return(
      <div>
      <Wrapper>
        <Title
        score={this.state.score}
        highScore={this.state.highScore}
        message={this.state.message}>
        Clicky Game</Title>
          {this.state.cartoons.map (card => (
            <Card
              key={card.id}
              id={card.id}
              name={card.name}
              clickedImg={this.clickedImg}
              image={card.image}
              />
          ))}
      </Wrapper>s
      </div>
    );
  }
}


export default App;
