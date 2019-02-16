import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// import { ReactComponent } from '*.svg';

const Header = (props) => {
  return (
    <header>
      <h1> { props.title }</h1>
      <span className="stats"> { props.totalPlayers }</span>
    </header>
  )
};

const Player = (props) => {
    return (
      <div className="player">
      <span className="player-name">
      <button className="remove-player" onClick={ () => props.removePlayer(props.id) }>✖</button>
        { props.name }
      </span>
      <Counter />
      </div>
    );
};

class Counter extends React.Component {
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

class App extends React.Component {
    state = {
      players: [
        {
          name: "Marcy",
          id: 1
        },
        {
          name: "Treasure",
          id: 2
        },
        {
          name: "Ashley",
          id: 3
        },
        {
          name: "James",
          id: 4
        }
      ]
    }

    handleRemovePlayer = (id) => {
      this.setState( prevState => ({
        players: prevState.players.filter(player => player.id !== id)
      }));
    }
    render() {
    return (
      <div className="scoreboard">
        <Header title="scoreboard" totalPlayers={this.state.players.length} />
  
        {this.state.players.map(player =>
           <Player 
           name={player.name}
           id={player.id}
           key={player.id.toString()}
           removePlayer={this.handleRemovePlayer}
        /> )}
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
