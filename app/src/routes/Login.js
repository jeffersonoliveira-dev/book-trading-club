import React, {Component} from 'react';
import config from '../secret/config';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import * as firebase from 'firebase';
import('firebase/firestore');

firebase.initializeApp(config);
const database = firebase.firestore();

export default class Login extends Component {
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
        console.log(authResult.user);
        let username = authResult.user.displayName;
        database.collection('users').add({
          // put refs here
        });
        // making the ref
        // create ref with authResult.user.uid and then call real time db
        // problably making this a component to user at the login or get rid of the sign up maybe?
        // if account doesnt exist before, after checking user.uid > redirect to profile settings where the city and state will be chosen
        // else > dashboard

        return true;
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
