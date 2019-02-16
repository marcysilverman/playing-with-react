import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

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
      { props.name }
    </span>
    <Counter score={props.score}/>
    </div>
  )
};

const Counter = (props) => {
  return (
    <div className="counter">
    <button className="counter-action decrement"> - </button>
    <button className="counter-score"> { props.score} </button>
    <button className="counter-action increment"> + </button>
    </div>
  )
};

const App = () => {
  return (
    <div className="scoreboard">
      <Header title="scoreboard" totalPlayers={4} />
      <Player name="Marcy" score={50} />
      <Player name="Jeff" score={20} />
      <Player name="Sarah" score={10} />
      <Player name="Michael" score={40}/ >
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
