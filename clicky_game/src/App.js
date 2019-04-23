import React, { Component } from 'react';
import './App.css';
import CaracterCard from "./components/CaracterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import thebeatles from "./thebeatles.json";
import Score from "./components/Score";

class App extends Component {
  state = {
    clicked: [],
    thebeatles,
    score:0,
    topscore:0,
    message: "Click an image to begin"
  };

  shuffleArray = () => {
    for (var i = this.state.thebeatles.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      [this.state.thebeatles[i], this.state.thebeatles[j]] = [this.state.thebeatles[j], this.state.thebeatles[i]];
    }
    return this.state.thebeatles;
  }

  handleClick = (name) => {
    var clicked = this.state.clicked;
    if (clicked.indexOf(name) === -1) {
      this.setState({
        clicked: clicked.concat(name),
        score: this.state.score + 1,
        topscore: this.state.score + 1 > this.state.topscore ? this.state.score + 1 : this.state.topscore,
        message: "You guessed correctly!!!!" 
      })
      this.shuffleArray();
    }
    else {
      this.setState({
        message: "You guessed incorrectly!!!!!",
        score: 0,
        clicked: []
      })
    }
  }

  render() {
    return (
      <Wrapper>
        <Title></Title>
        <Score score={this.state.score} topscore={this.state.topscore} message={this.state.message}></Score>
        {this.shuffleArray(thebeatles).map(thebeatle => (
          <CaracterCard 
            id={thebeatle.id}
            key={thebeatle.id}
            name={thebeatle.name}
            image={thebeatle.image}
            handleClick={this.handleClick}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
