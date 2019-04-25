import React, {Component} from 'react';
import NotificationsIcon from '@material-ui/icons/Notifications';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';

class Notification extends Component {
  render() {
    return (
      <IconButton color="inherit">
        <Badge badgeContent={17} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
    );
  }
}

export default Notification;
