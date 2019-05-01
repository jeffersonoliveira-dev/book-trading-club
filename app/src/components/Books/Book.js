import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from '@material-ui/core/Paper';
import {updateBooks} from '../../redux/actions/updateBooks';
import styles from '../../components/Books/styles/Book';
import {withStyles} from '@material-ui/core/styles';
import {connect} from 'react-redux';
import database from '../../firebase';

const mapStateToProps = state => ({
  books: state.books,
  userToken: state.userToken,
});

class Book extends React.Component {
  handleDelete = () => {
    let newBooks = this.props.books.filter(book => {
      return book !== this.props.name;
    });
    database
      .collection('users')
      .doc(this.props.userToken)
      .update({books: newBooks})
      .then(() => {
        this.props.updateBooks(newBooks);
      });
  };

  render() {
    const {classes} = this.props;
    return (
      <div>
        <Paper className={classes.item}>
          <IconButton
            aria-label="Delete"
            onClick={this.handleDelete}
            className={classes.delete}>
            <DeleteIcon fontSize="small" />
          </IconButton>
          <div>
            <h4>{this.props.name}</h4>
          </div>
        </Paper>
      </div>
    );
  }
}

// name , username,

export default connect(
  mapStateToProps,
  {updateBooks},
)(withStyles(styles)(Book));
