import React from 'react';
import Login from './Login';

class UserNotLogged extends React.Component {
  render() {
    console.log(this.props.history);
    return (
      <div>
        <Login />
      </div>
    );
  }
}

export default UserNotLogged;
