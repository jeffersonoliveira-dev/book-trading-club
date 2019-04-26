import React, {Component} from 'react';
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';
import Badge from '@material-ui/core/Badge';

class Messages extends Component {
  render() {
    return (
      <IconButton color="inherit">
        <Badge badgeContent={4} color="secondary">
          <MailIcon />
        </Badge>
      </IconButton>
    );
  }
}

// badgeContent = aos trades =>
// fazer algo parecido com o profile pras trades aparecerem com os botoes de aceitar // negar

export default Messages;
