import React, { Component } from 'react';
import Header from'./Header';
import Player from'./Player';
import AddPlayerForm from './AddPlayerForm';

class App extends Component {
    state = {
      players: [
        {
          name: "Marcy",
          score: 0,
          id: 1
        },
        {
          name: "Treasure",
          score: 0,
          id: 2
        },
        {
          name: "Ashley",
          score: 0,
          id: 3
        },
        {
          name: "James",
          score: 0,
          id: 4
        }
      ]
    }

    prevPlayerId = 4;

    handleScoreChange = (index, delta) => {
    this.setState( prevState => ({
      score: prevState.players[index].score += delta
    }));
   
  };

  handleAddPlayer = (name) => {
    this.setState({
      players: [
        //this merges the players to this new array
        ...this.state.players,
        {
          name,
          score: 0,
          id: this.prevPlayerId += 1
        }
      ]
    })
  }

    handleRemovePlayer = (id) => {
      this.setState( prevState => ({
        players: prevState.players.filter(player => player.id !== id)
      }));
    }
    render() {
    return (
      <div className="scoreboard">
        <Header title="scoreboard" 
        players={this.state.players} />
  
        {this.state.players.map( (player, index) =>
           <Player 
           name={player.name}
           score={player.score}
           changeScore={this.handleScoreChange}
           id={player.id}
           index={index}
           key={player.id.toString()}
           removePlayer={this.handleRemovePlayer}
           /> 
           )}
           <AddPlayerForm 
           addPlayer={this.handleAddPlayer}
           />
           </div>
    )
  }
}

export default App;