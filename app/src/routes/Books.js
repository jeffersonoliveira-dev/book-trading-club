import React, {Component} from 'react';
import database from '../firebase';
import {connect} from 'react-redux';
import Book from '../components/Books/Book';
import InputBase from '@material-ui/core/InputBase';
import {withStyles} from '@material-ui/core/styles';
import styles from '../components/Books/styles/Book';
const mapStateToProps = state => ({
  books: state.userData.books,
});

class Books extends Component {
  render() {
    const {classes} = this.props;
    const Books = this.props.books.map(book => {
      return <Book />;
    });

    return (
      <div>
        <div className={classes.center}>
          <InputBase placeholder="Search…" />
        </div>
        <div className="grid">{Books}</div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(withStyles(styles)(Books));
