import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import database from '../firebase';
import styles from '../components/Books/styles/Book';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  token: state.userToken,
  name: state.userData.name,
  city: state.userData.city,
  state: state.userData.state,
});

class Profile extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    let data = {
      name: document.getElementById('name').value,
      city: document.getElementById('city').value,
      state: document.getElementById('state').value,
    };
    database
      .collection('users')
      .doc(this.props.token)
      .update({
        name: data.name,
        city: data.city,
        state: data.state,
      })
      .then(() => alert('Profile updated!'));
  };

  render() {
    const {classes} = this.props;

    return (
      <div className={classes.body}>
        <Grid container spacing={24} alignItems="center">
          <form onSubmit={this.handleSubmit}>
            <div className={classes.center}>
              <Grid item xs={12}>
                <TextField
                  id="name"
                  defaultValue={this.props.name}
                  label="Name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="city"
                  defaultValue={this.props.city}
                  label="City"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="state"
                  defaultValue={this.props.state}
                  label="State"
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
export default connect(mapStateToProps)(withStyles(styles)(Profile));
