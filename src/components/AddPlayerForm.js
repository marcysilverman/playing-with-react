import React, { Component } from 'react';

class AddPlayerForm extends Component {

  state = {
    value:''
  };

  handleValueChange = (e) => {
    this.setState({ value: e.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addPlayer(this.state.value);

  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
        type="text"
        value={this.state.value}
        onChange={this.handleValueChange}
        placeholder="enter a player's name"
        />
        <input
        type="submit"
        value="Added Player"
        />
      </form>
    );
  }
}

export default AddPlayerForm;