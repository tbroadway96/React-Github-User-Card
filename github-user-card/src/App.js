import React from 'react';
import './App.css';

//importing necessary components
import User from './components/User';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: {}
    }
  }

  componentDidMount() {
    fetch('https://api.github.com/users/tbroadway96')
      .then(res => {
        //console.log(res)
        return res.json()
      })
      .then(user => {
        //console.log('did it work?', user)
        this.setState({...this.state, users: user})
      })
      .catch(err => console.log(err))
  }

  render() {
   return (
    <>
      <User user={this.state.users} key={this.state.users} />
    </>
   )
  }
}

export default App;
