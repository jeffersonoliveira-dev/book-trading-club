import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';
import styles from './styles/index';
import {withStyles} from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Notification from './Notification';
import Messages from './Messages';
import {updateTrades} from '../../redux/actions/updateTrades';
import {connect} from 'react-redux';

let mapStateToProps = state => ({
  token: state.userToken,
});

class UserLogged extends React.Component {
  render() {
    const {
      classes,
      isMenuOpen,
      handleProfileMenuOpen,
      handleMobileMenuOpen,
    } = this.props;

    return (
      <div>
        <div className={classes.sectionDesktop}>
          <Messages />
          <Notification />
          <IconButton
            aria-owns={isMenuOpen ? 'material-appbar' : undefined}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit">
            <AccountCircle />
          </IconButton>
        </div>
        <div className={classes.sectionMobile}>
          <IconButton
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit">
            <MoreIcon />
          </IconButton>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  {updateTrades},
)(withStyles(styles)(UserLogged));
