import axios from 'axios';
import React, { Component } from 'react'
import FriendsList from './Components/Friends/friendslist';

class App extends Component {
  constructor(){
    super()
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios
    .get('http://localhost:5000/friends')
    .then(response => this.setState({friends: response.data}))
    .catch(err => console.log(err));
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <FriendsList friends={this.state.friends}/>
      </div>
    )
  };
}

export default App;
