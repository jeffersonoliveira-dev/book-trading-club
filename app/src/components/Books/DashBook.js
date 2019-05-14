import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  books: state.books,
});

const styles = theme => ({
  card: {
    minWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class DashBook extends React.Component {
  state = {expanded: false};

  handleExpandClick = () => {
    this.setState(state => ({expanded: !state.expanded}));
  };

  handleChange = name => event => {
    this.setState({[name]: event.target.value});
  };

  render() {
    const {classes} = this.props;

    let options = this.props.books.map((book, index) => {
      return (
        <option key={index} value={book}>
          {book}
        </option>
      );
    });

    return (
      <Card className={classes.card}>
        <CardHeader title={this.props.book} />
        <CardContent>
          <Typography component="p">{this.props.name}</Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more">
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="book-native-simple">
                choose book to trade
              </InputLabel>
              <NativeSelect
                native
                inputProps={{
                  name: 'book',
                  id: 'book-native-simple',
                }}>
                <option value="" />
                {options}
              </NativeSelect>
              <input type="submit" value="trade" />
            </FormControl>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

// selectors + input done
// method to  submit trade request with all the info needed

export default connect(mapStateToProps)(withStyles(styles)(DashBook));
