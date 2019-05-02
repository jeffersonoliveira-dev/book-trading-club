import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import database from '../firebase';
import styles from '../components/Books/styles/Book';

class Profile extends React.Component {
  render() {
    const {classes} = this.props;

    return (
      <div className={classes.body}>
        <Grid container spacing={24} alignItems="center">
          <form onSubmit={this.handleSubmit}>
            <div className={classes.center}>
              <Grid item xs={12}>
                <TextField
                  id="input-with-icon-grid"
                  value="Name"
                  label="With a grid"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="input-with-icon-grid"
                  value="City"
                  label="With a grid"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="input-with-icon-grid"
                  value="State"
                  label="With a grid"
                />
              </Grid>
              <Grid item xs={12}>
                <input type="submit" value="update profile" />
              </Grid>
            </div>
          </form>
        </Grid>
      </div>
    );
  }
}
export default withStyles(styles)(Profile);
