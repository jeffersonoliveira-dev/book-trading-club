import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';
import Badge from '@material-ui/core/Badge';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import styles from './styles/index';

const mapStateToProps = state => ({
  trades: state.trades,
});

class Messages extends Component {
  constructor(props) {
    super();
    this.state = {
      counter: 0,
    };
  }
  componentWillMount() {
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
  render() {
    const {classes} = this.props;
    return (
      <IconButton color="inherit">
        <Badge
          badgeContent={this.state.counter}
          color="secondary"
          onClick={() => this.props.history.push('/messages')}>
          <MailIcon />
        </Badge>
      </IconButton>
    );
  }
}
// trade box here
// classes here

export default connect(mapStateToProps)(
  withRouter(withStyles(styles)(Messages)),
);
