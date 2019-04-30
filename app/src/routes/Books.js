import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import styles from '../components/Books/styles/Book';

function Books(props) {
  const {classes} = props;

  return (
    <div className={classes.container}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <form class={classes.item} onSubmit={e => e.preventDefault()}>
            <input
              type="text"
              placeholder="new book?"
              id="book"
              class={classes.text}
            />
            <input type="submit" value="add book" class={classes.submit} />
          </form>
        </Grid>
      </Grid>
    </div>
  );
}

// make grid better
export default withStyles(styles)(Books);
