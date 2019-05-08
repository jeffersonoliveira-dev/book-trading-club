import React, {Component} from 'react';
import styles from '../components/Books/styles/Book';
import {withStyles} from '@material-ui/core/styles';
import database from '../firebase';
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux';
import DashBook from '../components/Books/DashBook';
import {updateAllBooks} from '../redux/actions/updateAllBooks';

let mapStateToProps = state => ({
  allBooks: state.allBooks,
});

class Dashboard extends Component {
  componentWillMount() {
    database
      .collection('users')
      .get()
      .then(doc => {
        let newBooks = [];
        doc.forEach(user => {
          let token = user._key.path.segments.pop();
          newBooks = [
            ...newBooks,
            {
              token: token,
              books: user.data().books,
              name: user.data().name,
            },
          ];
        });
        this.props.updateAllBooks(newBooks);
      });
  }

  // change book with other functionality + trade button
  render() {
    const {classes} = this.props;
    let Books = this.props.allBooks.map((user, index) => {
      let userBooks = user.books.map((book, index) => {
        return (
          <Grid item xs={12} key={index}>
            <DashBook name={book} key={index} />
          </Grid>
        );
      });
      return userBooks;
    });
    return (
      <div className={classes.container}>
        <Grid container spacing={24}>
          {Books}
        </Grid>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  {updateAllBooks},
)(withStyles(styles)(Dashboard));
