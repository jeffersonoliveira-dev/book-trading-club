import React, {Component} from 'react';
import NotificationsIcon from '@material-ui/icons/Notifications';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';

class Notification extends Component {
  render() {
    return (
      <IconButton color="inherit">
        <Badge badgeContent={2} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
    );
  }
}
// trade ping here

// badgeContent =  notification.store.length
// onClick =  length =  0

// criar um metodo pra visualizar update direto
// trade => oferecido[ notification ] => deal => oferecedor [ notification ]

export default Notification;
