import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';
import Badge from '@material-ui/core/Badge';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import styles from './styles/index';
import database from '../../firebase';
import {updateTrades} from '../../redux/actions/updateTrades';

const mapStateToProps = state => ({
  trades: state.trades,
  token: state.userToken,
});

class Messages extends Component {
  constructor(props) {
    super();
    this.state = {
      counter: 0,
    };
  }

  componentWillMount() {
    let interval = setInterval(() => {
      this.getCounter();
    }, 1000);
  }

  getCounter() {
    let counter = 0;
    this.props.trades.map(trade => {
      if (trade.read === false) {
        counter = counter + 1;
      }
    });
    this.setState({
      counter: counter,
    });
  }

  handleClick = state => {
    this.props.history.push('/messages');
    let newTrades = [];
    this.props.trades.map(trade => {
      trade.read = true;
      newTrades = [...newTrades, trade];
      return newTrades;
    });
    console.log(newTrades);
    database
      .collection('users')
      .doc(this.props.token)
      .update({
        trades: newTrades,
      });
  };

  render() {
    const {classes} = this.props;

    return (
      <IconButton color="inherit">
        <Badge
          badgeContent={this.state.counter}
          color="secondary"
          onClick={this.handleClick}>
          <MailIcon />
        </Badge>
      </IconButton>
    );
  }
}
// trade box here
// classes here

export default connect(
  mapStateToProps,
  {updateTrades},
)(withRouter(withStyles(styles)(Messages)));
