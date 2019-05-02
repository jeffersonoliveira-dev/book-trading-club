import React, {Component} from 'react';
import styles from '../components/Books/styles/Book';
import {withStyles} from '@material-ui/core/styles';
import database from '../firebase';
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux';
import Book from '../components/Books/Book';

class Dashboard extends Component {
  constructor(props) {
    super();
    this.state = {
      allBooks: [],
    };
  }
  componentWillMount() {
    database.collection('users').onSnapshot(snap => {
      // get notification if this changes
      let allBooks = [];
      snap.forEach(item => {
        let token = item._key.path.segments.pop();
        this.setState({
          allBooks: [
            ...this.state.allBooks,
            {token: token, books: item.data().books, name: item.data().name},
          ],
        });
      });
      console.log(this.state.allBooks);
    });
  }

  render() {
    const {classes} = this.props;

    let Books = this.state.allBooks.map((user, index) => {
      let userBooks = user.books.map((book, index) => {
        return (
          <Grid item xs key={index}>
            <Book name={book} key={index} />
          </Grid>
        );
      });
      return userBooks;
    });
    console.log(Books);
    return (
      <div className={classes.container}>
        <Grid container spacing={24}>
          {Books}
        </Grid>
      </div>
    );
  }
}

export default connect()(withStyles(styles)(Dashboard));
