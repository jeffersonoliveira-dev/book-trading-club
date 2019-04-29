import React, {Component} from 'react';
import database from '../firebase';
import {connect} from 'react-redux';
import Book from '../components/Books/Book';

const mapStateToProps = state => ({
  books: state.books,
});

class Books extends Component {
  render() {
    return <h1> this is the books page</h1>;
  }
}

export default Books;
