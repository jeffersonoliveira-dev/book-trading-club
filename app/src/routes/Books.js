import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import styles from '../components/Books/styles/Book';
import Book from '../components/Books/Book';
import {connect} from 'react-redux';
import {updateBooks} from '../redux/actions/updateBooks';
import database from '../firebase';

const mapStateToProps = state => ({
  books: state.books,
  userToken: state.userToken,
});

class Books extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    let book = document.getElementById('book').value;
    let newBooks = [...this.props.books, book];
    database
      .collection('users')
      .doc(this.props.userToken)
      .update({books: newBooks})
      .then(() => {
        this.props.updateBooks(newBooks);
      });
    document.getElementById('book').value = '';
  };

  render() {
    const {classes} = this.props;
    const Books = this.props.books.map((book, index) => {
      return (
        <Grid item xs>
          <div className={classes.item}>
            <Book name={book} key={index} />
          </div>
        </Grid>
      );
    });

    return (
      <div>
        <div className={classes.container}>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <form className={classes.item} onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  placeholder="new book?"
                  id="book"
                  className={classes.text}
                />
                <input type="submit" value="add book" class={classes.submit} />
              </form>
            </Grid>
          </Grid>
        </div>
        <div className={classes.container}>
          <Grid container spacing={24}>
            {Books}
          </Grid>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  {updateBooks},
)(withStyles(styles)(Books));
