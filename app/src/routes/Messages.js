import React, {Component} from 'react';
import {connect} from 'react-redux';
import TradeBox from '../components/Messages/TradeBox';

const mapStateToProps = state => ({
  trades: state.trades,
  token: state.userToken,
});

class Messages extends Component {
  render() {
    let trades = this.props.trades.map((trade, index) => {
      if (this.props.token === trade.userWish) {
        return <TradeBox />;
      }
    });
    return <div>this is messages</div>;
  }
}

export default connect(mapStateToProps)(Messages);

// display trades
// received trades
