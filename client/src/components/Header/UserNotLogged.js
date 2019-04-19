import React from 'react';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';

class UserNotLogged extends React.Component {
  render() {
    console.log(this.props.history);
    return (
      <div>
        <Button color="inherit">
          <NavLink
            to="/login"
            style={{
              fontWeight: 'bold',
              color: 'white',
              textDecoration: 'none',
            }}>
            Login
          </NavLink>
        </Button>
        <Button color="inherit">
          <NavLink
            to="/signup"
            style={{
              fontWeight: 'bold',
              color: 'white',
              textDecoration: 'none',
            }}>
            Sign Up
          </NavLink>
        </Button>
      </div>
    );
  }
}

export default UserNotLogged;
