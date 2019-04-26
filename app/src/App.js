import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header/index';
import Home from './routes/Home';
import Dashboard from './routes/Dashboard';
import Profile from './routes/Profile';
import Books from './routes/Books';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/profile" component={Profile} />
        <Route path="/books" component={Books} />
      </Router>
    );
  }
}

export default App;
