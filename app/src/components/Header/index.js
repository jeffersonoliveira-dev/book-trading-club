import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {withStyles} from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import styles from './styles/index';
import Search from './Search';
import UserLogged from './UserLogged';
import {connect} from 'react-redux';
import UserNotLogged from './UserNotLogged';
import {Link, Redirect, withRouter} from 'react-router-dom';

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

class Header extends React.Component {
  constructor(props) {
    super();
    this.state = {
      anchorEl: null,
      mobileMoreAnchorEl: null,
    };
  }
  handleProfileMenuOpen = event => {
    this.setState({anchorEl: event.currentTarget});
  };

  handleMenuClose = () => {
    this.setState({anchorEl: null});
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({mobileMoreAnchorEl: event.currentTarget});
  };

  handleMobileMenuClose = () => {
    this.setState({mobileMoreAnchorEl: null});
  };

  componentWillMount() {
    if (this.props.auth === false) {
      this.props.history.push('/');
    }
  }

  render() {
    const {anchorEl, mobileMoreAnchorEl} = this.state;
    const {classes} = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{vertical: 'top', horizontal: 'right'}}
        transformOrigin={{vertical: 'top', horizontal: 'right'}}
        open={isMenuOpen}
        onClose={this.handleMenuClose}>
        <MenuItem onClick={this.handleMenuClose}>
          <Link to="/profile">Profile</Link>
        </MenuItem>
        <MenuItem onClick={this.handleMenuClose}>
          <Link to="/books">My Books</Link>
        </MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{vertical: 'top', horizontal: 'right'}}
        transformOrigin={{vertical: 'top', horizontal: 'right'}}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}>
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Open drawer">
              BTC
            </IconButton>
            {this.props.auth && <Search />}
            <div className={classes.grow} />
            {this.props.auth ? (
              <UserLogged
                isMenuOpen={isMenuOpen}
                handleProfileMenuOpen={this.handleProfileMenuOpen}
                handleMobileMenuClose={this.handleMobileMenuClose}
                handleMobileMenuOpen={this.handleMobileMenuOpen}
                handleMenuClose={this.handleMenuClose}
              />
            ) : (
              <UserNotLogged />
            )}
          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderMobileMenu}
      </div>
    );
  }
}

export default connect(mapStateToProps)(withRouter(withStyles(styles)(Header)));
