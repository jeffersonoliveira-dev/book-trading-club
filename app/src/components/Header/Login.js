import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {addUser} from '../../redux/actions/addUser';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import * as firebase from 'firebase';
import database from '../../firebase';

class Login extends Component {
  state = {
    isSignedIn: false,
  };
  uiConfig = {
    signInFlow: 'popup',
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccessWithAuthResult: (authResult, redirectUrl) => {
        let checkDoc = database.collection('users').doc(authResult.user.uid);
        checkDoc.get().then(doc => {
          let auth = authResult.user.uid;
          if (doc.exists) {
            this.props.addUser({
              userData: doc.data(),
              userToken: auth,
              auth: true,
              books: doc.data().books,
              trades: doc.data().trades,
            });
            this.props.history.push('/dashboard');
            // save into localStorage
          } else {
            let newUser = database.collection('users');
            let newData = {
              name: authResult.user.displayName,
              city: '',
              state: '',
              books: [],
              trades: [],
              notification: [],
            };
            newUser
              .doc(authResult.user.uid)
              .set(newData)
              .then(() => {
                this.props.addUser({
                  userData: newData,
                  userToken: auth,
                  auth: true,
                  books: newData.books,
                  trades: newData.trades,
                });
                this.props.history.push('/profile');
              });
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

export default connect(
  null,
  {addUser},
)(withRouter(Login));
