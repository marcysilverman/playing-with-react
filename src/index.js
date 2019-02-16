import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// import { ReactComponent } from '*.svg';

const players = [
  {
    name: "Marcy",
    score: 50,
    id: 1
  },
  {
    name: "Treasure",
    score: 85,
    id: 2
  },
  {
    name: "Ashley",
    score: 95,
    id: 3
  },
  {
    name: "James",
    score: 80,
    id: 4
  }
];

const Header = (props) => {
  return (
    <header>
      <h1> { props.title }</h1>
      <span className="stats"> { props.totalPlayers }</span>
    </header>
  )
};

class Player extends React.Component {
  render() {
    return (
      <div className="player">
      <span className="player-name">
        { this.props.name }
      </span>
      <Counter score={ this.props.score}/>
      </div>
    )
  }
};

class Counter extends React.Component {
  state= {
      score: 0
  };

  incrementScore() {
    this.setState({
      score: this.state.score + 1
    });
  };
  render() {
    return (
      <div className="counter">
      <button className="counter-action decrement"> - </button>
      <button className="counter-score"> { this.state.score} </button>
      <button className="counter-action increment" onClick={() => this.incrementScore()}> + </button>
      </div>
    )
  } 
};

const App = (props) => {
  return (
    <div className="scoreboard">
      <Header title="scoreboard" totalPlayers={props.initialPlayers.length} />

      {props.initialPlayers.map(player =>
         <Player 
         name={player.name}
         key={player.id.toString()}
      /> )}
    </div>
  )
}

ReactDOM.render(
  <App initialPlayers={players}/>,
  document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
