import React, { Component } from 'react';

class Counter extends Component {
  state= {
      score: 0
  };

  incrementScore = () => {
    this.setState( prevState => ({
      score: prevState.score + 1
    }));
  };

  decrementScore = () => {
    this.setState( prevState => ({
      score: prevState.score -1 
    }));
  }
  render() {
    return (
      <div className="counter">
      <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
      <button className="counter-score"> { this.state.score} </button>
      <button className="counter-action increment" onClick={this.incrementScore}> + </button>
      </div>
    )
  } 
};

export default Counter;