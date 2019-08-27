import React, {Component} from 'react';
import {connect} from 'react-redux';
import TradeBox from '../components/Messages/TradeBox';
import {updateTrades} from '../redux/actions/updateTrades';
import database from '../firebase';

const mapStateToProps = state => ({
  trades: state.trades,
  token: state.userToken,
});

class Messages extends Component {
  componentDidMount() {
    if (this.props.trades.length > 0) {
      let newTrades = [];
      this.props.trades.map(trade => {
        trade.read = true;
        newTrades = [...newTrades, trade];
        return newTrades;
      });
      database
        .collection('users')
        .doc(this.props.token)
        .update({
          trades: newTrades,
        });
    }
  }
  render() {
    let trades = this.props.trades.map((trade, index) => {
      if (this.props.token === trade.userWish && trade.status === 'request') {
        return <TradeBox trade={trade} key={index} />;
      }
    });
    return <div>{trades}</div>;
  }
}

export default connect(
  mapStateToProps,
  {updateTrades},
)(Messages);
