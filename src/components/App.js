import React, { Component } from 'react';
import Header from'./Header';
import Player from'./Player';

class App extends Component {
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

export default App;