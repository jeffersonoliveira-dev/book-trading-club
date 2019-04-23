import React, {Component} from 'react';
import {Redirect, withRouter} from 'react-router-dom';
import config from '../secret/config';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import * as firebase from 'firebase';
import('firebase/firestore');

firebase.initializeApp(config);
const database = firebase.firestore();

class Login extends Component {
  state = {
    isSignedIn: false, // Local signed-in state.
  };
  uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: (authResult, redirectUrl) => {
        let checkDoc = database.collection('users').doc(authResult.user.uid);
        checkDoc.get().then(doc => {
          if (doc.exists) {
            this.props.history.push('/dashboard');
          } else {
            let newUser = database.collection('users');
            console.log(authResult.user.displayName);
            newUser
              .doc(authResult.user.uid)
              .set({
                name: authResult.user.displayName,
                city: '',
                state: '',
                books: [],
                trades: [],
              })
              .then(() => this.history.push('/profile')); // change when redirect
          }
        });
        return false;
      },
    },
  };

  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  componentDidMount() {
    this.unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(user => this.setState({isSignedIn: !!user}));
  }

  render() {
    return (
      <div>
        <StyledFirebaseAuth
          uiConfig={this.uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    );
  }
}

export default withRouter(Login);
