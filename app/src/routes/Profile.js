import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';

class Profile extends Component {
  render() {
    return (
      <form autoComplete="off">
        <TextField
          id="name"
          label="name"
          value=""
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="city"
          label="city"
          value=""
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="state"
          label="state"
          value=""
          margin="normal"
          variant="outlined"
        />
      </form>
    );
  }
}

export default Profile;
