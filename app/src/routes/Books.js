import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import styles from '../components/Books/styles/Book';
import Book from '../components/Books/Book';
import {connect} from 'react-redux';
import {addBook} from '../redux/actions/addBook';
import database from '../firebase';

const mapStateToProps = state => ({
  books: state.books,
  userToken: state.userToken,
});

class Books extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    let book = document.getElementById('book').value;
    this.props.addBook(book);
    let newBooks = [...this.props.books, book];
    database
      .collection('users')
      .doc(this.props.userToken)
      .update({books: newBooks});
    document.getElementById('book').value = '';
  };

  render() {
    const {classes} = this.props;
    const Books = this.props.books.map((book, index) => {
      return <Book name={book} key={index} />;
    });

    return (
      <div className={classes.container}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <form class={classes.item} onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="new book?"
                id="book"
                class={classes.text}
              />
              <input type="submit" value="add book" class={classes.submit} />
            </form>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.book}>{Books}</div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  {addBook},
)(withStyles(styles)(Books));
