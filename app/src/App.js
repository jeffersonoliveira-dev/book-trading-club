import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header/index';
import Home from './routes/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Route path="/" exact component={Home} />
      </Router>
    );
  }
}

export default App;
